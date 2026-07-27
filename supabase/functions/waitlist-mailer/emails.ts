// ─────────────────────────────────────────────────────────────────────────────
// Plantillas de la lista de espera de No Emprendas Solo.
//
// Todo va con estilos EN LÍNEA y tablas: Gmail elimina las etiquetas <style> y
// no soporta flex/grid, así que cualquier maquetación moderna se rompe ahí.
// El fondo oscuro se pinta en el <td>, no en el <body>, por la misma razón.
// ─────────────────────────────────────────────────────────────────────────────

const BG = "#0c0d0e"
const CARD = "#151719"
const TEXT = "#ffffff"
const DIM = "#a1a6ad"
const ACCENT = "#00ff7f"

export type Template = { subject: string; html: string }

type ShellOpts = {
  /** Cuerpo ya renderizado (HTML). */
  body: string
  /** URL del botón principal. Si falta, no se pinta botón. */
  ctaUrl?: string
  ctaLabel?: string
  /** Enlace de baja. Obligatorio en todo lo que no sea transaccional. */
  unsubscribeUrl?: string
}

function shell({ body, ctaUrl, ctaLabel, unsubscribeUrl }: ShellOpts): string {
  // El botón va como tabla con bgcolor: Outlook ignora border-radius y padding
  // en un <a>, pero respeta una celda con color de fondo.
  const cta =
    ctaUrl && ctaLabel
      ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0;">
           <tr><td bgcolor="${ACCENT}" style="border-radius:10px;">
             <a href="${ctaUrl}" style="display:inline-block;padding:14px 28px;font-family:Inter,Arial,sans-serif;font-size:15px;font-weight:700;color:#04120a;text-decoration:none;">${ctaLabel}</a>
           </td></tr>
         </table>`
      : ""

  const footer = unsubscribeUrl
    ? `<p style="margin:28px 0 0;font-family:Inter,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6b7280;">
         Recibes esto porque te apuntaste a la lista de espera de No Emprendas Solo.
         <a href="${unsubscribeUrl}" style="color:#6b7280;">Darme de baja</a>.
       </p>`
    : ""

  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${BG};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BG}" style="background:${BG};">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;">
        <tr><td style="padding-bottom:24px;font-family:Inter,Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:${ACCENT};">
          No Emprendas Solo
        </td></tr>
        <tr><td bgcolor="${CARD}" style="background:${CARD};border-radius:16px;padding:32px;">
          <div style="font-family:Inter,Arial,sans-serif;font-size:16px;line-height:1.7;color:${TEXT};">
            ${body}
          </div>
          ${cta}
        </td></tr>
        <tr><td>${footer}</td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`
}

const h1 = (t: string) =>
  `<h1 style="margin:0 0 16px;font-size:24px;line-height:1.25;font-weight:800;color:${TEXT};">${t}</h1>`
const p = (t: string) => `<p style="margin:0 0 16px;color:${DIM};">${t}</p>`
const strong = (t: string) => `<strong style="color:${TEXT};">${t}</strong>`

/** Escapa lo que venga de la base de datos antes de meterlo en el HTML. */
export function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

/** Nombre de pila, o un saludo genérico si no lo tenemos. */
function hi(name: string | null): string {
  const first = (name ?? "").trim().split(/\s+/)[0]
  return first ? `Hola ${esc(first)},` : "Hola,"
}

// ── 1. Doble opt-in ──────────────────────────────────────────────────────────
// Transaccional: sin enlace de baja (aún no ha consentido nada que cancelar).
export function confirmEmail(name: string | null, confirmUrl: string): Template {
  return {
    subject: "Confirma tu email — No Emprendas Solo",
    html: shell({
      ctaUrl: confirmUrl,
      ctaLabel: "Confirmar mi email",
      body:
        h1("Un clic y estás dentro") +
        p(`${hi(name)} solo queda confirmar que este correo es tuyo.`) +
        p(
          `En cuanto lo confirmes te guardo tu ${strong("puesto en la lista")} — y el orden importa: se entra por tandas, por orden de llegada.`
        ) +
        p("Si no has sido tú, ignora este correo y no pasa nada."),
    }),
  }
}

export function confirmReminderEmail(name: string | null, confirmUrl: string): Template {
  return {
    subject: "Te falta un clic (tu puesto sigue sin asignar)",
    html: shell({
      ctaUrl: confirmUrl,
      ctaLabel: "Confirmar mi email",
      body:
        h1("Tu solicitud está a medias") +
        p(`${hi(name)} te apuntaste hace un par de días pero no confirmaste el correo.`) +
        p(
          `Hasta que no lo hagas ${strong("no tienes puesto en la cola")}, y las plazas de la primera tanda son limitadas.`
        ),
    }),
  }
}

// ── 2. Bienvenida (tras confirmar) ───────────────────────────────────────────
export function welcomeEmail(
  name: string | null,
  queueNumber: number | null,
  unsubscribeUrl: string
): Template {
  const pos = queueNumber
    ? p(`Tu puesto en la lista es el ${strong(`#${queueNumber}`)}.`)
    : ""
  return {
    subject: "Estás dentro de la lista de espera ✓",
    html: shell({
      unsubscribeUrl,
      body:
        h1("Confirmado. Ya estás en la lista.") +
        p(`${hi(name)} tu email está verificado y tu solicitud registrada.`) +
        pos +
        p(
          `Ahora toca esperar. No Emprendas Solo abre ${strong("por cohortes")}: entra un grupo pequeño cada vez, para que la comunidad no se llene de gente que solo mira.`
        ) +
        p(
          `Cuando abra la próxima cohorte te llego con ${strong("tu código de acceso personal")} a este mismo correo. No tienes que hacer nada más.`
        ) +
        p(
          `Mientras tanto te escribiré un par de veces por semana con cosas útiles para lo que estás construyendo. Si te sobran, te das de baja abajo y sin rencores.`
        ),
    }),
  }
}

// ── 3. Seguimientos (2 por semana mientras espera) ───────────────────────────
// Se envían en orden. Cuando se acaban, dejan de mandarse: es un final, no un
// bucle infinito — una lista quemada no abre el email que de verdad importa.
type FollowupFn = (name: string | null, unsubscribeUrl: string) => Template

export const FOLLOWUPS: FollowupFn[] = [
  (name, unsubscribeUrl) => ({
    subject: "Lo que mata proyectos no es la falta de ideas",
    html: shell({
      unsubscribeUrl,
      body:
        h1("Nadie abandona por falta de ideas") +
        p(`${hi(name)} lo he visto una y otra vez.`) +
        p(
          `El proyecto no muere el día que la idea falla. Muere un martes cualquiera, cuando llevas tres semanas sin enseñarle tu avance a nadie y ${strong("dejas de tener a quién rendirle cuentas")}.`
        ) +
        p(
          `Esa es la única razón por la que existe esto: no es una comunidad para aprender más, es para que haya alguien esperando tu progreso.`
        ) +
        p("Sigue en la lista. Vas bien."),
    }),
  }),
  (name, unsubscribeUrl) => ({
    subject: "El error de la primera semana",
    html: shell({
      unsubscribeUrl,
      body:
        h1("Construir en silencio no es humildad") +
        p(`${hi(name)}`) +
        p(
          `Casi todo el mundo espera a "tenerlo listo" para enseñarlo. Y llega el día de enseñarlo con seis meses invertidos en algo que nadie pidió.`
        ) +
        p(
          `Prueba esto esta semana: cuéntale a ${strong("una sola persona")} qué estás construyendo y qué es lo siguiente que vas a hacer. Ponle fecha delante de ella.`
        ) +
        p("Eso solo ya cambia el ritmo. Es exactamente lo que vas a tener dentro."),
    }),
  }),
  (name, unsubscribeUrl) => ({
    subject: "Cómo elegimos quién entra",
    html: shell({
      unsubscribeUrl,
      body:
        h1("Por qué no abrimos las puertas del todo") +
        p(`${hi(name)}`) +
        p(
          `Podríamos dejar entrar a todo el mundo mañana. Tendríamos mil personas y ${strong("ninguna conversación")}.`
        ) +
        p(
          `Por eso hay encuesta y hay cohortes: entra gente que está construyendo algo de verdad y que va a contestar cuando otro pida ayuda.`
        ) +
        p(
          `Tu respuesta sobre qué esperas encontrar la leí. Cuenta más de lo que crees para el orden de entrada.`
        ),
    }),
  }),
  (name, unsubscribeUrl) => ({
    subject: "La pregunta que desatasca casi todo",
    html: shell({
      unsubscribeUrl,
      body:
        h1('"¿Qué es lo siguiente más pequeño?"') +
        p(`${hi(name)}`) +
        p(
          `Cuando algo lleva semanas parado, casi nunca es por falta de tiempo. Es porque la siguiente tarea que tienes apuntada es demasiado grande para empezarla hoy.`
        ) +
        p(
          `${strong("Pártela hasta que quepa en 20 minutos.")} "Rediseñar la web" no se empieza. "Escribir el titular de la home" sí.`
        ) +
        p("Hazlo con lo que tengas atascado ahora mismo. Te espero dentro."),
    }),
  }),
  (name, unsubscribeUrl) => ({
    subject: "Ya queda menos",
    html: shell({
      unsubscribeUrl,
      body:
        h1("La próxima cohorte está cerca") +
        p(`${hi(name)}`) +
        p(
          `Estamos terminando de preparar la entrada del siguiente grupo. Cuando abra, te llega ${strong("tu código personal")} a este correo.`
        ) +
        p(
          `Un aviso práctico: el código es de un solo uso y va a tu nombre. Si el correo se te va a spam, te quedas fuera de la tanda. Añade este remitente a tus contactos y no te pasará.`
        ),
    }),
  }),
  (name, unsubscribeUrl) => ({
    subject: "Lo que vas a encontrar dentro",
    html: shell({
      unsubscribeUrl,
      body:
        h1("Qué hay al otro lado") +
        p(`${hi(name)}`) +
        p("Para que no entres a ciegas, esto es lo que hay:") +
        p(
          `· ${strong("Gente en tu misma fase")}, no gurús vendiéndote cursos.<br>
           · Un sistema para enseñar avances y que alguien te lo devuelva.<br>
           · Conexiones sugeridas con quien está resolviendo lo que tú tienes atascado.`
        ) +
        p(
          `No es una comunidad para consumir contenido. Es para que dejes de construir solo. Nos vemos en breve.`
        ),
    }),
  }),
]

// ── 4. Apertura de cohorte: código personal + enlace ─────────────────────────
export function inviteEmail(
  name: string | null,
  code: string,
  loginUrl: string,
  unsubscribeUrl: string
): Template {
  // El código viaja en la URL para que solo tenga que pulsar, y también en
  // texto grande por si el cliente de correo destroza el enlace.
  const url = `${loginUrl}${loginUrl.includes("?") ? "&" : "?"}invite=${encodeURIComponent(code)}`
  return {
    subject: "Tu acceso a No Emprendas Solo (código dentro)",
    html: shell({
      ctaUrl: url,
      ctaLabel: "Entrar en No Emprendas Solo",
      unsubscribeUrl,
      body:
        h1("La cohorte está abierta. Te toca.") +
        p(`${hi(name)} te guardaba un sitio y ya está listo.`) +
        p(`Este es tu código de acceso personal:`) +
        `<div style="margin:20px 0;padding:18px;border:1px dashed rgba(0,255,127,0.45);border-radius:12px;text-align:center;font-family:'SFMono-Regular',Consolas,monospace;font-size:26px;font-weight:700;letter-spacing:0.14em;color:${ACCENT};">${esc(code)}</div>` +
        p(
          `Es de ${strong("un solo uso y va a tu nombre")}: si se lo pasas a alguien, pierdes tu plaza. Crea tu cuenta con este mismo correo y pégalo cuando te lo pida.`
        ),
    }),
  }
}
