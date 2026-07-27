const STEPS = [
  {
    num: "01",
    title: "Cuéntanos sobre ti",
    body: "Seis preguntas. Dos minutos. Sin rodeos.",
    accent: "#3b82f6",
  },
  {
    num: "02",
    title: "Entra en la lista de espera",
    body:
      "La beta está cerrada ahora mismo. Dejas tu correo y te guardamos el sitio.",
    accent: "#22d3ee",
  },
  {
    num: "03",
    title: "Te avisamos al abrir",
    body:
      "Cuando se abra la siguiente tanda, eres de los primeros en entrar y presentarte a la tribu.",
    accent: "#00ff7f",
  },
]

/** Cómo funciona NES en 3 pasos — claridad antes que escasez. */
export default function HowItWorksSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050505",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.74rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          · Cómo funciona ·
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
            textAlign: "center",
            margin: "0 0 3.5rem",
            textWrap: "balance",
          }}
        >
          De aquí a dentro, en tres pasos.
        </h2>

        <div className="nes-steps-grid">
          {STEPS.map((s) => (
            <div
              key={s.num}
              style={{
                background: "rgba(15,15,20,0.65)",
                border: `1px solid ${s.accent}30`,
                borderRadius: 18,
                padding: "1.75rem 1.5rem",
                boxShadow: `0 18px 50px -22px ${s.accent}28`,
              }}
            >
              <div
                style={{
                  fontFamily:
                    "'JetBrains Mono','SF Mono',Menlo,Consolas,monospace",
                  color: s.accent,
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  marginBottom: "0.9rem",
                  fontWeight: 600,
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  margin: "0 0 0.6rem",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.94rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .nes-steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 720px) {
          .nes-steps-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  )
}
