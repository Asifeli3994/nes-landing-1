// ─────────────────────────────────────────────────────────────────────────────
// Edge Function: confirm-waitlist-signup
//
// Destino del enlace del correo de doble opt-in (?id=<waitlist.id>).
// Pone confirmed = true, lo que dispara waitlist_assign_queue_number() y le
// asigna su puesto en la cola de forma atómica. Después pide a waitlist-mailer
// que le mande la bienvenida con ese número ya asignado.
//
// verify_jwt = false: el enlace lo abre el cliente de correo, sin cabecera de
// Supabase. Por eso usa la service role key (anon no tiene UPDATE en waitlist,
// a propósito — ver la política RLS de la migración de waitlist).
//
// Secrets: SITE_URL (a dónde devolver a la persona tras confirmar).
// ─────────────────────────────────────────────────────────────────────────────
import { createClient } from "jsr:@supabase/supabase-js@2"

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
const SITE_URL = (Deno.env.get("SITE_URL") ?? "https://noemprendassolo.com").replace(/\/$/, "")

const admin = createClient(SUPABASE_URL, SERVICE_KEY)

Deno.serve(async (req) => {
  const id = new URL(req.url).searchParams.get("id")
  if (!id) return new Response("Falta el parámetro id.", { status: 400 })

  const { data: updated, error } = await admin
    .from("waitlist")
    .update({ confirmed: true })
    .eq("id", id)
    .eq("confirmed", false)
    .select("id, queue_number")

  if (error) return new Response("No se pudo confirmar el email.", { status: 500 })

  // Solo se manda la bienvenida en la transición a confirmado. Si vuelve a
  // pulsar el enlace, `updated` viene vacío y no se reenvía nada (waitlist_emails
  // lo bloquearía igualmente, pero así ahorramos la llamada).
  const row = updated?.[0]
  if (row) {
    try {
      await fetch(`${SUPABASE_URL}/functions/v1/waitlist-mailer`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${SERVICE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "welcome", id: row.id }),
      })
    } catch {
      // La confirmación ya está guardada y el puesto asignado: un fallo al
      // mandar la bienvenida no debe dejarle un error en pantalla.
    }
  }

  const queue = row?.queue_number
  return Response.redirect(
    `${SITE_URL}/?confirmado=1${queue ? `&puesto=${queue}` : ""}`,
    302
  )
})
