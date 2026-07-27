import { Fragment } from "react"

const avatarUrl = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=151618&color=f7f8f8&size=80`

const TESTIMONIALS = [
  {
    name: "Marta González",
    role: "Fundadora de Buildit",
    tag: "SaaS",
    accent: "#3b82f6",
    quote:
      "En tres semanas dentro de NES encontré al cofundador que llevaba dos años buscando. La calidad del networking es brutalmente diferente a cualquier otro grupo.",
  },
  {
    name: "Carlos Reyes",
    role: "Fundador de Trendly",
    tag: "E-commerce",
    accent: "#22d3ee",
    quote:
      "Me frenaba el síndrome del impostor. Compartirlo aquí con personas que lo viven fue el punto de inflexión. Ahora tengo un grupo de accountability de 4 personas.",
  },
  {
    name: "Laura Pino",
    role: "Fundadora de Lawyerflow",
    tag: "Consultoría",
    accent: "#00ff7f",
    quote:
      "No es un Discord más. La encuesta de admisión filtra de verdad. El nivel de conversación es el que siempre eché de menos en los grupos normales.",
  },
]

const STATS = [
  { value: "237", label: "miembros activos" },
  { value: "89%", label: "completan la encuesta" },
  { value: "4.9★", label: "valoración media" },
]

export default function SocialProofSection() {
  return (
    <section
      style={{
        position: "relative",
        background:
          "radial-gradient(ellipse at center, #0d1117 0%, #050505 70%)",
        padding: "7rem 1.5rem 6rem",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            · Lo que dicen los que ya cruzaron ·
          </p>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Resultados reales.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Personas reales.
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="nes-testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: "rgba(15,15,20,0.72)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: `1px solid ${t.accent}30`,
                borderRadius: 20,
                padding: "1.75rem 1.5rem",
                boxShadow: `0 20px 60px -20px ${t.accent}22`,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Top row: avatar + name + stars */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                  }}
                >
                  <img
                    src={avatarUrl(t.name)}
                    alt={t.name}
                    width={46}
                    height={46}
                    style={{
                      borderRadius: "50%",
                      border: `1.5px solid ${t.accent}55`,
                      display: "block",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "0.78rem",
                        marginTop: "0.15rem",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    color: "#f59e0b",
                    fontSize: "0.88rem",
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                    paddingTop: "0.1rem",
                  }}
                >
                  ★★★★★
                </div>
              </div>

              {/* Quote */}
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.94rem",
                  lineHeight: 1.65,
                  margin: 0,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Tag chip */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.28rem 0.75rem",
                    background: `${t.accent}18`,
                    border: `1px solid ${t.accent}40`,
                    borderRadius: 999,
                    color: t.accent,
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "4rem",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "1.75rem 2rem",
          }}
        >
          {STATS.map((s, i) => (
            <Fragment key={s.label}>
              <div style={{ textAlign: "center", padding: "0.5rem 2rem" }}>
                <div
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                    fontWeight: 900,
                    background:
                      "linear-gradient(135deg, #fff 0%, #93c5fd 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.42)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    marginTop: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
              {i < STATS.length - 1 && (
                <div
                  style={{
                    width: 1,
                    height: 40,
                    background: "rgba(255,255,255,0.1)",
                    flexShrink: 0,
                  }}
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .nes-testimonial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .nes-testimonial-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
