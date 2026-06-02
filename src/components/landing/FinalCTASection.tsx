import MagneticButton from "./MagneticButton"

type Props = {
  /** Invocado al pulsar "Cruzar el umbral" — abre la encuesta de admisión */
  onCrossThreshold: () => void
}

export default function FinalCTASection({ onCrossThreshold }: Props) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at center bottom, rgba(59,130,246,0.18) 0%, #050505 60%)",
        padding: "8rem 1.5rem",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Haces de luz convergiendo */}
      {[
        { x: "0%", y: "0%", rot: 35 },
        { x: "100%", y: "0%", rot: -35 },
        { x: "0%", y: "100%", rot: -35 },
        { x: "100%", y: "100%", rot: 35 },
        { x: "50%", y: "0%", rot: 0 },
      ].map((b, i) => (
        <div
          key={i}
          className="nes-beam"
          style={{
            position: "absolute",
            left: b.x,
            top: b.y,
            width: 2,
            height: "120%",
            background:
              "linear-gradient(to bottom, transparent, rgba(59,130,246,0.5), transparent)",
            transform: `translate(-50%, -50%) rotate(${b.rot}deg)`,
            transformOrigin: "center",
            animationDelay: `${i * 0.2}s`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          maxWidth: "720px",
          textAlign: "center",
          zIndex: 5,
        }}
      >
        <p
          style={{
            color: "#93c5fd",
            fontSize: "0.78rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            fontWeight: 600,
          }}
        >
          · Último paso · Encuesta de admisión revisada ·
        </p>

        <h2
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            textWrap: "balance",
          }}
        >
          La puerta solo
          <br />
          se abre una vez.
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "clamp(1rem, 1.4vw, 1.05rem)",
            lineHeight: 1.7,
            maxWidth: "480px",
            margin: "0 auto 3.5rem",
          }}
        >
          La tribu no recluta dos veces a la misma persona. Si estás aquí,
          algo en ti ya lo sabe.
        </p>

        {/* CTA — abre la encuesta, no el login */}
        <MagneticButton
          onClick={onCrossThreshold}
          radius={180}
          strength={0.28}
          className="nes-aura-blue"
          style={{
            position: "relative",
            padding: "1.4rem 3.5rem",
            background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
            color: "#001423",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 999,
            fontSize: "1.05rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          Cruzar el umbral →
        </MagneticButton>

        <p
          style={{
            color: "rgba(255,255,255,0.32)",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            marginTop: "2rem",
          }}
        >
          12 preguntas · 2 minutos · Cada respuesta cuenta
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: 0,
          right: 0,
          textAlign: "center",
          color: "rgba(255,255,255,0.25)",
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
        }}
      >
        © No Emprendas Solo · La tribu te espera
      </div>
    </section>
  )
}
