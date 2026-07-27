const PAIN_LINES = [
  "Se lo cuentas a tu familia y te miran como si hablaras en otro idioma.",
  "Tus amigos te dicen «qué guay»… y cambian de tema.",
  "Y tú sigues construyendo solo, dudando de cada paso que das.",
]

/**
 * Agitación (PAS) → giro a la solución (BAB).
 * El "antes": soledad y falta de validación. El "después": un entorno
 * donde la respuesta es "yo estoy en lo mismo".
 */
export default function PainSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "radial-gradient(ellipse at center, #0c0c10 0%, #050505 75%)",
        padding: "6rem 1.5rem",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "620px", margin: "0 auto" }}>
        {/* ── Agitación ── */}
        <p
          style={{
            color: "#ef4444",
            fontSize: "0.74rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "2rem",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          · Te suena, ¿no? ·
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
            marginBottom: "4.5rem",
          }}
        >
          {PAIN_LINES.map((line, i) => (
            <p
              key={i}
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "clamp(1.05rem, 2.4vw, 1.3rem)",
                lineHeight: 1.6,
                margin: 0,
                paddingLeft: "1.1rem",
                borderLeft: "2px solid rgba(239,68,68,0.45)",
                fontStyle: i === PAIN_LINES.length - 1 ? "italic" : "normal",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* ── Giro a la solución (BAB) ── */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#22d3ee",
              fontSize: "0.74rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              fontWeight: 600,
            }}
          >
            · Ahora imagina lo contrario ·
          </p>

          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.5rem, 4.5vw, 2.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.25,
              margin: "0 0 1.25rem",
              textWrap: "balance",
            }}
          >
            Cuentas tu idea y la respuesta no es{" "}
            <span style={{ color: "rgba(255,255,255,0.45)" }}>
              «¿y eso para qué?»
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.05rem, 2.4vw, 1.3rem)",
              lineHeight: 1.6,
              margin: "0 auto",
              maxWidth: "480px",
              background: "linear-gradient(90deg, #60a5fa, #22d3ee, #00ff7f)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
            }}
          >
            Es «¿cómo lo estás haciendo? Yo estoy en lo mismo.»
          </p>
        </div>
      </div>
    </section>
  )
}
