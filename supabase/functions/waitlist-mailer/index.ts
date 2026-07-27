// ─────────────────────────────────────────────────────────────────────────────
// Edge Function: waitlist-mailer
//
// Único punto de salida de correo de la lista de espera. Cuatro acciones:
//
//   confirm  { email }        · doble opt-in. La llama la landing con la clave
//                               anon justo después del insert.
//   welcome  { id }           · tras confirmar. La llama confirm-waitlist-signup
//                               con la service role key.
//   cron     {}               · recordatorios + seguimientos. pg_cron, 2×/semana.
//   invite   { limit, dryRun }· abre la cohorte: genera un código de un solo uso
//                               por persona y se lo manda. Solo admin.
//
// Está todo en una función a propósito: las plantillas viven en emails.ts y se
// comparten. Repartirlo en cuatro funciones obligaría a duplicar ese fichero,
// porque cada Edge Function se despliega con su propio árbol de ficheros.
//
// Secrets:
//   RESEND_API_KEY  (obligatorio)
//   RESEND_FROM     remitente verificado en Resend. Por defecto el de NES.
//   SITE_URL        landing, para el redirect tras confirmar/darse de baja.
//   LOGIN_URL       login de la app, al que apunta el email de invitación.
//   CONFIRM_BASE_URL  opcional. Por defecto se deriva de SUPABASE_URL.
// ─────────────────────────────────────────────────────────────────────────────
import { createClient } from "jsr:@supabase/supabase-js@2"
import {
  confirmEmail,
  confirmReminderEmail,
  welcomeEmail,
  inviteEmail,
  FOLLOWUPS,
  type Template,
} from "./emails.ts"

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const FROM =
  Deno.env.get("RESEND_FROM") ??
  Deno.env.get("RESEND_FROM_EMAIL") ??
  "No Emprendas Solo <hola@noemprendassolo.com>"
const LOGIN_URL =
  Deno.env.get("LOGIN_URL") ?? "https://no-emprendas-solo.vercel.app/login"
const FUNCTIONS_BASE = `${SUPABASE_URL}/functions/v1`
const CONFIRM_BASE_URL = (
  Deno.env.get("CONFIRM_BASE_URL") ?? `${FUNCTIONS_BASE}/confirm-waitlist-signup`
).replace(/\/$/, "")

const HOUR = 3_600_000
/** Margen antes de recordarle a quien no confirmó. */
const CONFIRM_REMINDER_AFTER = 48 * HOUR
/** Dos correos nunca más juntos de esto, pase lo que pase con el cron. */
const MIN_GAP_BETWEEN_EMAILS = 48 * HOUR
/** Resend limita a ~2 req/s en el plan gratuito. */
const SEND_DELAY_MS = 600

const admin = createClient(SUPABASE_URL, SERVICE_KEY)

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  })
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

type Row = {
  id: string
  email: string
  name: string | null
  queue_number: number | null
  followups_sent: number
  invite_code: string | null
}

const confirmUrlFor = (id: string) => `${CONFIRM_BASE_URL}?id=${id}`
const unsubscribeUrlFor = (id: string) => `${FUNCTIONS_BASE}/waitlist-unsubscribe?id=${id}`

// ── Envío con idempotencia ───────────────────────────────────────────────────
// El registro en waitlist_emails se inserta ANTES de llamar a Resend: si dos
// ejecuciones del cron se solapan, la segunda choca contra la PK y no manda
// nada. Si el envío falla, se borra el registro para que el reintento funcione.
async function sendOnce(row: Row, kind: string, tpl: Template): Promise<boolean> {
  const { error: claimError } = await admin
    .from("waitlist_emails")
    .insert({ waitlist_id: row.id, kind })
  if (claimError) return false // ya enviado (23505) o error de BD: no reenviar

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: row.email,
      subject: tpl.subject,
      html: tpl.html,
      headers: { "List-Unsubscribe": `<${unsubscribeUrlFor(row.id)}>` },
    }),
  })

  if (!res.ok) {
    await admin
      .from("waitlist_emails")
      .delete()
      .eq("waitlist_id", row.id)
      .eq("kind", kind)
    console.error(`envío fallido [${kind}] ${row.id}: ${await res.text()}`)
    return false
  }

  const body = await res.json().catch(() => ({}))
  if (body?.id) {
    await admin
      .from("waitlist_emails")
      .update({ provider_id: body.id })
      .eq("waitlist_id", row.id)
      .eq("kind", kind)
  }
  return true
}

/** Último envío de cada persona, para no encadenar dos correos seguidos. */
async function lastSentMap(ids: string[]): Promise<Map<string, number>> {
  const out = new Map<string, number>()
  if (ids.length === 0) return out
  const { data } = await admin
    .from("waitlist_emails")
    .select("waitlist_id, sent_at")
    .in("waitlist_id", ids)
  for (const r of data ?? []) {
    const t = new Date(r.sent_at as string).getTime()
    const prev = out.get(r.waitlist_id as string) ?? 0
    if (t > prev) out.set(r.waitlist_id as string, t)
  }
  return out
}

const SELECT = "id, email, name, queue_number, followups_sent, invite_code"

// ── Acciones ─────────────────────────────────────────────────────────────────

async function actionConfirm(email: string) {
  const clean = email.trim().toLowerCase()
  if (!clean || !clean.includes("@")) return json({ error: "email inválido" }, 400)

  const { data: row } = await admin
    .from("waitlist")
    .select(SELECT + ", confirmed")
    .eq("email", clean)
    .maybeSingle()

  // Respuesta idéntica exista o no la fila: si no, este endpoint sería un
  // oráculo público para comprobar si un email está apuntado.
  if (!row) return json({ ok: true })
  if ((row as { confirmed: boolean }).confirmed) return json({ ok: true, alreadyConfirmed: true })

  const r = row as unknown as Row
  const tpl = confirmEmail(r.name, confirmUrlFor(r.id))
  await sendOnce(r, "confirm", tpl)
  return json({ ok: true })
}

async function actionWelcome(id: string) {
  const { data: row } = await admin
    .from("waitlist")
    .select(SELECT)
    .eq("id", id)
    .maybeSingle()
  if (!row) return json({ error: "not_found" }, 404)

  const r = row as unknown as Row
  const sent = await sendOnce(r, "welcome", welcomeEmail(r.name, r.queue_number, unsubscribeUrlFor(r.id)))
  return json({ ok: true, sent })
}

async function actionCron() {
  const now = Date.now()
  let reminders = 0
  let followups = 0

  // A) Recordatorio a quien no confirmó (una sola vez, a las 48 h).
  const { data: pending } = await admin
    .from("waitlist")
    .select(SELECT)
    .eq("confirmed", false)
    .is("unsubscribed_at", null)
    .lt("created_at", new Date(now - CONFIRM_REMINDER_AFTER).toISOString())
    .order("created_at", { ascending: true })
    .limit(200)

  for (const row of (pending ?? []) as unknown as Row[]) {
    if (await sendOnce(row, "confirm_reminder", confirmReminderEmail(row.name, confirmUrlFor(row.id)))) {
      reminders++
      await sleep(SEND_DELAY_MS)
    }
  }

  // B) Siguiente seguimiento de quien ya confirmó y aún no ha sido invitado.
  const { data: waiting } = await admin
    .from("waitlist")
    .select(SELECT)
    .eq("confirmed", true)
    .is("invited_at", null)
    .is("unsubscribed_at", null)
    .lt("followups_sent", FOLLOWUPS.length)
    .order("queue_number", { ascending: true })
    .limit(200)

  const rows = (waiting ?? []) as unknown as Row[]
  const lastSent = await lastSentMap(rows.map((r) => r.id))

  for (const row of rows) {
    // Guarda de seguridad ante un cron duplicado o reactivado a destiempo.
    if (now - (lastSent.get(row.id) ?? 0) < MIN_GAP_BETWEEN_EMAILS) continue

    const index = row.followups_sent // 0-based: el siguiente que le toca
    const tpl = FOLLOWUPS[index]?.(row.name, unsubscribeUrlFor(row.id))
    if (!tpl) continue

    if (await sendOnce(row, `followup:${index + 1}`, tpl)) {
      await admin
        .from("waitlist")
        .update({ followups_sent: index + 1 })
        .eq("id", row.id)
      followups++
      await sleep(SEND_DELAY_MS)
    }
  }

  return json({ ok: true, reminders, followups })
}

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789" // sin 0/O/1/I

function genCode(): string {
  const bytes = new Uint8Array(8)
  crypto.getRandomValues(bytes)
  let out = ""
  for (let i = 0; i < 8; i++) {
    out += ALPHABET[bytes[i] % ALPHABET.length]
    if (i === 3) out += "-"
  }
  return out
}

async function actionInvite(limit: number, dryRun: boolean, adminId: string | null) {
  const { data: waiting } = await admin
    .from("waitlist")
    .select(SELECT)
    .eq("confirmed", true)
    .is("invited_at", null)
    .is("unsubscribed_at", null)
    .order("queue_number", { ascending: true }) // por orden de llegada
    .limit(limit)

  const rows = (waiting ?? []) as unknown as Row[]
  if (dryRun) {
    return json({
      ok: true,
      dryRun: true,
      wouldInvite: rows.length,
      preview: rows.map((r) => ({ queue: r.queue_number, email: r.email })),
    })
  }

  let invited = 0
  const failed: string[] = []

  for (const row of rows) {
    // Si un intento anterior falló al enviar, el código ya está asignado:
    // se reutiliza en vez de quemar otro.
    let code = row.invite_code
    if (!code) {
      for (let attempt = 0; attempt < 5 && !code; attempt++) {
        const candidate = genCode()
        const { error } = await admin.from("invite_codes").insert({
          code: candidate,
          max_uses: 1,
          note: `waitlist #${row.queue_number ?? "?"} · ${row.email}`,
          created_by: adminId,
        })
        if (!error) code = candidate
      }
    }
    if (!code) {
      failed.push(row.email)
      continue
    }

    // Se reserva antes de enviar: si el envío falla se revierte invited_at,
    // pero el código sigue atado a esta persona para el reintento.
    const { error: linkError } = await admin
      .from("waitlist")
      .update({ invite_code: code, invited_at: new Date().toISOString() })
      .eq("id", row.id)
    if (linkError) {
      failed.push(row.email)
      continue
    }

    const tpl = inviteEmail(row.name, code, LOGIN_URL, unsubscribeUrlFor(row.id))
    if (await sendOnce(row, "invite", tpl)) {
      invited++
    } else {
      await admin.from("waitlist").update({ invited_at: null }).eq("id", row.id)
      failed.push(row.email)
    }
    await sleep(SEND_DELAY_MS)
  }

  return json({ ok: true, invited, failed })
}

// ── Entrada ──────────────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS })
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405)

  let payload: { action?: string; email?: string; id?: string; limit?: number; dryRun?: boolean }
  try {
    payload = await req.json()
  } catch {
    return json({ error: "bad_request" }, 400)
  }

  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "")
  const isInternal = token === SERVICE_KEY

  // `confirm` es la única acción que puede disparar la landing con la clave
  // anon. Todo lo demás exige service role (cron / función interna) o un
  // usuario con is_admin — si no, cualquiera podría abrir la cohorte entera.
  let adminId: string | null = null
  if (payload.action !== "confirm" && !isInternal) {
    const { data: userData } = await admin.auth.getUser(token)
    if (!userData?.user) return json({ error: "unauthorized" }, 401)
    const { data: profile } = await admin
      .from("users")
      .select("is_admin")
      .eq("id", userData.user.id)
      .single()
    if (profile?.is_admin !== true) return json({ error: "forbidden" }, 403)
    adminId = userData.user.id
  }

  // Después de autorizar, nunca antes: si no, un desconocido puede sondear
  // cómo está configurado el proyecto sin tener permiso para nada.
  if (!RESEND_API_KEY) return json({ error: "RESEND_API_KEY no configurada" }, 500)

  switch (payload.action) {
    case "confirm":
      return await actionConfirm(payload.email ?? "")
    case "welcome":
      return payload.id ? await actionWelcome(payload.id) : json({ error: "missing_id" }, 400)
    case "cron":
      return await actionCron()
    case "invite":
      return await actionInvite(
        Math.min(Math.max(payload.limit ?? 15, 1), 500),
        payload.dryRun === true,
        adminId
      )
    default:
      return json({ error: "unknown_action" }, 400)
  }
})
