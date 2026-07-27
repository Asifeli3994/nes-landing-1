import MagneticButton from "./MagneticButton"

type Props = {
  /** Abre el formulario de acceso (mismo objetivo que el CTA del hero) */
  onCta: () => void
}

/** CTA final: repite el mismo objetivo y el mismo texto en primera persona. */
export default function FinalCTASection({ onCta }: Props) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "70vh",
        background:
          "radial-gradient(ellipse at center bottom, rgba(59,130,246,0.16) 0%, #050505 65%)",
        padding: "7rem 1.5rem 6rem",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "640px",
          textAlign: "center",
          zIndex: 5,
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 6vw, 3.6rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.035em",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            textWrap: "balance",
          }}
        >
          Tu idea merece un sitio donde la vean.
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
            lineHeight: 1.7,
            maxWidth: "440px",
            margin: "0 auto 2.75rem",
            textWrap: "balance",
          }}
        >
          Deja de construir en silencio. Únete a la lista y entra en la
          próxima tanda.
        </p>

        <MagneticButton
          onClick={onCta}
          radius={180}
          strength={0.28}
          className="nes-aura-blue nes-cta"
          style={{
            padding: "1.25rem 2.6rem",
            background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
            color: "#001423",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 999,
            fontSize: "1.05rem",
            fontWeight: 800,
            letterSpacing: "0.03em",
            cursor: "pointer",
          }}
        >
          Quiero dejar de emprender solo →
        </MagneticButton>

        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.78rem",
            letterSpacing: "0.06em",
            marginTop: "1.25rem",
          }}
        >
          Cuéntanos tu proyecto en 2 minutos · Gratis durante el lanzamiento
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: 0,
          right: 0,
          textAlign: "center",
          color: "rgba(255,255,255,0.25)",
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
        }}
      >
        © No Emprendas Solo ·{" "}
        <a
          href="https://www.instagram.com/yosoy.siera"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
        >
          @yosoy.siera
        </a>
      </div>
    </section>
  )
}
