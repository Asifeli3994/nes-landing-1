import type { ReactNode } from "react"

type Props = {
  /** Puesto en la cola. Se asigna al momento, sin esperar a ningún email. */
  queueNumber?: number | null
}

const strong = (t: string) => <strong style={{ color: "#fff", fontWeight: 600 }}>{t}</strong>

/** Pantalla final del embudo: alta confirmada al instante. */
export default function WaitlistScreen({ queueNumber }: Props) {
  const copy = {
    badge: "Estás dentro",
    badgeColor: "#00ff7f",
    title: "Confirmado.",
    gradient: "linear-gradient(135deg, #00ff7f 0%, #22d3ee 100%)",
    body: (
      <>
        {queueNumber ? <>Tu puesto en la lista es el {strong(`#${queueNumber}`)}. </> : null}
        Se entra por cohortes, en grupos pequeños y por orden de llegada.
        Cuando abra la próxima te mandamos {strong("tu código de acceso")} a tu
        correo. No tienes que hacer nada más.
      </>
    ),
  } satisfies { badge: string; badgeColor: string; title: string; gradient: string; body: ReactNode }

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
