import MagneticButton from "./MagneticButton"

type Props = {
  /** Abre el formulario de acceso (único objetivo de la página) */
  onCta: () => void
}

/**
 * Hero PAS: el headline ES el problema, escrito como pensamiento textual
 * del ICP (entre comillas). Subheadline = solución en una línea.
 * CTA en primera persona. Mobile-first a 390px.
 */
export default function HeroSection({ onCta }: Props) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        background: "#050505",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "5.5rem 1.5rem 4rem",
      }}
    >
      {/* Glow de fondo ligero (sin imágenes → carga instantánea) */}
      <div
        style={{
          position: "absolute",
          inset: "-10%",
          backgroundImage: `
            radial-gradient(circle at 25% 30%, rgba(59,130,246,0.16) 0%, transparent 45%),
            radial-gradient(circle at 75% 70%, rgba(34,211,238,0.10) 0%, transparent 48%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "1.4rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
        <span
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.74rem",
            letterSpacing: "0.08em",
          }}
        >
          @yosoy.siera
        </span>
      </div>

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: "760px",
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Headline: 3 palabras, la marca es el mensaje */}
        <h1
          className="nes-fade-up"
          style={{
            fontSize: "clamp(2.8rem, 11vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            margin: 0,
            color: "#fff",
            textTransform: "uppercase",
            textWrap: "balance",
          }}
        >
          No emprendas{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa, #22d3ee, #00ff7f)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 28px rgba(34,211,238,0.25))",
            }}
          >
            solo.
          </span>
        </h1>

        {/* Subtítulo: el dolor + la solución en una línea */}
        <p
          className="nes-fade-up"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.18rem)",
            color: "rgba(255,255,255,0.68)",
            maxWidth: "min(540px, 92vw)",
            margin: "1.75rem auto 0",
            lineHeight: 1.65,
            animationDelay: "0.15s",
            textWrap: "balance",
          }}
        >
          La comunidad de jóvenes que construyen su proyecto rodeados de
          gente que <strong style={{ color: "#fff", fontWeight: 600 }}>sí lo ve</strong>.
        </p>

        {/* CTA primera persona — zona del pulgar, alto contraste */}
        <div
          className="nes-fade-up"
          style={{
            marginTop: "2.5rem",
            animationDelay: "0.3s",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.9rem",
          }}
        >
          <MagneticButton
            onClick={onCta}
            radius={160}
            strength={0.25}
            className="nes-aura-blue nes-cta"
            style={{
              padding: "1.15rem 2.4rem",
              background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
              color: "#001423",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              fontSize: "1.02rem",
              fontWeight: 800,
              letterSpacing: "0.03em",
              cursor: "pointer",
            }}
          >
            Quiero dejar de emprender solo →
          </MagneticButton>

          {/* Microcopy de confianza (honesto, sin números inventados) */}
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            Cuéntanos tu proyecto en 2 minutos · Gratis durante el lanzamiento
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.28)",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.35rem",
        }}
      >
        Scroll
        <span style={{ fontSize: "0.95rem" }}>↓</span>
      </div>
    </section>
  )
}
