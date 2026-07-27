import type { ReactNode } from "react"

export type WaitlistMode =
  /** Solicitud guardada, falta que confirme el email. */
  | "pending"
  /** Guardada, pero el correo de confirmación no llegó a salir. */
  | "email-failed"
  /** Vuelve de pinchar el enlace del correo: ya tiene puesto en la cola. */
  | "confirmed"

type Props = {
  /** Email guardado en el insert, para mostrarlo en la confirmación */
  email?: string
  mode: WaitlistMode
  /** Puesto en la cola. Solo existe en modo "confirmed". */
  queueNumber?: number | null
}

type Copy = {
  badge: string
  badgeColor: string
  title: string
  gradient: string
  body: ReactNode
}

const strong = (t: string) => <strong style={{ color: "#fff", fontWeight: 600 }}>{t}</strong>

/**
 * Pantalla final del embudo. queue_number solo se asigna al confirmar el email
 * (doble opt-in), así que hasta entonces no se enseña ningún número.
 */
export default function WaitlistScreen({ email, mode, queueNumber }: Props) {
  const copy: Copy =
    mode === "confirmed"
      ? {
          badge: "Estás dentro",
          badgeColor: "#00ff7f",
          title: "Confirmado.",
          gradient: "linear-gradient(135deg, #00ff7f 0%, #22d3ee 100%)",
          body: (
            <>
              {queueNumber ? <>Tu puesto en la lista es el {strong(`#${queueNumber}`)}. </> : null}
              Se entra por cohortes, en grupos pequeños y por orden de llegada.
              Cuando abra la próxima te mandamos {strong("tu código de acceso")} a
              tu correo. No tienes que hacer nada más.
            </>
          ),
        }
      : mode === "email-failed"
        ? {
            badge: "Solicitud guardada",
            badgeColor: "#f59e0b",
            title: "Estás apuntado.",
            gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
            body: (
              <>
                Tu solicitud quedó guardada, pero no hemos podido mandarte el
                correo de confirmación ahora mismo. Revisa tu bandeja
                {email ? <> ({strong(email)})</> : null} en unos minutos, y mira
                también en spam.
              </>
            ),
          }
        : {
            badge: "Solicitud recibida",
            badgeColor: "#f59e0b",
            title: "Revisa tu email.",
            gradient: "linear-gradient(135deg, #00ff7f 0%, #22d3ee 100%)",
            body: (
              <>
                Te hemos mandado un correo de confirmación
                {email ? <> a {strong(email)}</> : null}. Confirma tu email y te
                diremos tu puesto en la lista de espera. Nada de spam, solo ese
                aviso.
              </>
            ),
          }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2200,
        background:
          "radial-gradient(ellipse at top, #0a1424 0%, #050505 60%, #000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
        overflowY: "auto",
        textAlign: "center",
      }}
    >
      <div
        className="nes-fade-up"
        style={{
          width: "100%",
          maxWidth: "480px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.4rem 1rem",
            background: "rgba(255,255,255,0.06)",
            border: `1px solid ${copy.badgeColor}59`,
            borderRadius: 999,
            color: copy.badgeColor,
            fontSize: "0.74rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "1.75rem",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: copy.badgeColor,
              boxShadow: `0 0 12px ${copy.badgeColor}`,
            }}
          />
          {copy.badge}
        </div>

        <h1
          style={{
            color: "#fff",
            fontSize: "clamp(1.6rem, 5vw, 2.3rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
            margin: "0 0 1rem",
            textWrap: "balance",
          }}
        >
          <span
            style={{
              background: copy.gradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {copy.title}
          </span>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1rem",
            lineHeight: 1.7,
            margin: 0,
            maxWidth: "400px",
          }}
        >
          {copy.body}
        </p>
      </div>
    </div>
  )
}
