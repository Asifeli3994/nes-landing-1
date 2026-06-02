import { useEffect, useRef } from "react"

/**
 * Hero brutalista (azul/cyan, sin CTA — el único CTA está al final):
 * - Parallax suave con cursor (CSS vars).
 * - Titular gigante "CONSTRUYE. COMO NUNCA. CON TU TRIBU." con hover por letra.
 * - Subtítulo intrigante: acceso restringido.
 */
export default function HeroSection() {
  const wrapperRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      el.style.setProperty("--mx", `${x}`)
      el.style.setProperty("--my", `${y}`)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <section
      ref={wrapperRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#050505",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        // @ts-expect-error custom CSS property
        "--mx": 0,
        "--my": 0,
      }}
    >
      {/* Grid + glow azul/verde */}
      <div
        style={{
          position: "absolute",
          inset: "-10%",
          backgroundImage: `
            radial-gradient(circle at 30% 40%, rgba(59,130,246,0.18) 0%, transparent 42%),
            radial-gradient(circle at 70% 60%, rgba(0,255,127,0.10) 0%, transparent 45%),
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 64px 64px, 64px 64px",
          transform:
            "translate3d(calc(var(--mx) * -25px), calc(var(--my) * -25px), 0)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "none",
        }}
      />

      {/* Estrellas (parallax más cercano) */}
      <div
        style={{
          position: "absolute",
          inset: "-5%",
          background: `radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.5), transparent),
                       radial-gradient(1px 1px at 80% 70%, rgba(255,255,255,0.4), transparent),
                       radial-gradient(1.5px 1.5px at 50% 20%, rgba(255,255,255,0.3), transparent),
                       radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.4), transparent),
                       radial-gradient(2px 2px at 10% 80%, rgba(255,255,255,0.3), transparent)`,
          backgroundSize: "300px 300px",
          transform:
            "translate3d(calc(var(--mx) * -10px), calc(var(--my) * -10px), 0)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "none",
          opacity: 0.65,
        }}
      />

      {/* Logo top-left (minimal, sin link) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "1.5rem 1.75rem",
          display: "flex",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: "0.95rem",
            letterSpacing: "0.05em",
          }}
        >
          NES<span style={{ color: "#3b82f6" }}>.</span>
        </span>
      </div>

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          className="nes-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.55rem",
            padding: "0.4rem 1rem",
            borderRadius: "999px",
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.28)",
            color: "#93c5fd",
            fontSize: "0.76rem",
            letterSpacing: "0.16em",
            marginBottom: "2.5rem",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#00ff7f",
              boxShadow: "0 0 10px #00ff7f",
            }}
          />
          Acceso restringido
        </div>

        {/* Titular */}
        <h1
          style={{
            fontSize: "clamp(2.6rem, 9vw, 7rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: 0,
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          <BrutalLine text="CONSTRUYE." delay={0} />
          <BrutalLine
            text="COMO NUNCA."
            delay={120}
            style={{
              display: "block",
              color: "#9ca3af",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          />
          {/* Tercera línea con gradient — sin spans por letra para que
              background-clip:text funcione correctamente */}
          <span
            className="nes-fade-up"
            style={{
              display: "block",
              animationDelay: "240ms",
              background:
                "linear-gradient(90deg, #fff 0%, #22d3ee 50%, #00ff7f 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(34,211,238,0.28))",
            }}
          >
            CON TU TRIBU.
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className="nes-fade-up"
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
            color: "rgba(255,255,255,0.62)",
            maxWidth: "min(620px, 90vw)",
            margin: "2.5rem auto 0",
            lineHeight: 1.7,
            animationDelay: "0.5s",
            textWrap: "balance",
          }}
        >
          El club de los que no se conforman.
          <br />
          Acceso restringido. No mostramos lo que hay dentro a cualquiera.
        </p>

        {/* Trust indicators (sin CTA) */}
        <div
          className="nes-fade-up"
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            color: "rgba(255,255,255,0.32)",
            fontSize: "0.74rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop: "3rem",
            animationDelay: "0.7s",
          }}
        >
          <span>· Encuesta de admisión ·</span>
          <span>· Masterminds ·</span>
          <span>· Sin spam ·</span>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        Scroll
        <span style={{ fontSize: "1rem" }}>↓</span>
      </div>
    </section>
  )
}

function BrutalLine({
  text,
  delay = 0,
  style,
}: {
  text: string
  delay?: number
  style?: React.CSSProperties
}) {
  return (
    <span
      className="nes-fade-up"
      style={{
        display: "block",
        animationDelay: `${delay}ms`,
        ...style,
      }}
    >
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          className="nes-letter"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  )
}
