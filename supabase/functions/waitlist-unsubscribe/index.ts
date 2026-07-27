// ─────────────────────────────────────────────────────────────────────────────
// Edge Function: waitlist-unsubscribe
//
// Enlace de baja de todos los correos de la lista de espera (?id=<waitlist.id>).
// Obligatorio por RGPD y necesario para no acabar en spam: Gmail penaliza las
// listas sin baja en un clic.
//
// verify_jwt = false: lo abre el cliente de correo, sin cabecera de Supabase.
//
// No borra la fila: hay que conservar consent_at como prueba del consentimiento,
// y borrarla dejaría a la persona volver a entrar por el formulario sin querer.
// Marca unsubscribed_at, que es lo que filtran las consultas del cron.
//
// Responde también a POST porque los clientes que soportan la cabecera
// List-Unsubscribe-Post hacen la baja sin abrir el navegador.
// ─────────────────────────────────────────────────────────────────────────────
import { createClient } from "jsr:@supabase/supabase-js@2"

const SITE_URL = (Deno.env.get("SITE_URL") ?? "https://noemprendassolo.com").replace(/\/$/, "")

const admin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
)

function page(title: string, message: string, status = 200): Response {
  return new Response(
    `<!doctype html><html lang="es"><head><meta charset="utf-8">
     <meta name="viewport" content="width=device-width,initial-scale=1">
     <title>${title}</title></head>
     <body style="margin:0;background:#0c0d0e;color:#fff;font-family:Inter,system-ui,sans-serif;
                  display:flex;align-items:center;justify-content:center;min-height:100vh;padding:1.5rem;">
       <div style="max-width:420px;text-align:center;">
         <h1 style="font-size:1.4rem;font-weight:800;margin:0 0 .75rem;">${title}</h1>
         <p style="color:#a1a6ad;line-height:1.7;margin:0 0 1.5rem;">${message}</p>
         <a href="${SITE_URL}" style="color:#00ff7f;font-size:.9rem;">Volver a No Emprendas Solo</a>
       </div>
     </body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } }
  )
}

Deno.serve(async (req) => {
  const id = new URL(req.url).searchParams.get("id")
  if (!id) return page("Enlace incompleto", "Falta el identificador de la baja.", 400)

  const { error } = await admin
    .from("waitlist")
    .update({ unsubscribed_at: new Date().toISOString() })
    .eq("id", id)
    .is("unsubscribed_at", null)

  if (error) return page("No se pudo completar", "Inténtalo de nuevo en un momento.", 500)

  // Respuesta idéntica exista o no la fila: este endpoint es público y no debe
  // servir para comprobar si un id concreto está en la lista.
  if (req.method === "POST") return new Response(null, { status: 204 })

  return page(
    "Baja completada",
    "No volverás a recibir correos de la lista de espera. Si fue un error, vuelve a apuntarte desde la web."
  )
})
