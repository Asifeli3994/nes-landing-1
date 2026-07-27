/**
 * Prueba social early-stage SIN datos inventados:
 * credibilidad del fundador ("construido por alguien que vivió X"),
 * colocada antes del CTA final.
 *
 * TODO: cuando haya testimonios reales de los primeros miembros,
 * añadirlos aquí (2-3 quotes bastan). Ver SocialProofSection.tsx como base.
 */
export default function FounderSection() {
  return (
    <section
      style={{
        position: "relative",
        background:
          "radial-gradient(ellipse at center, #0a1018 0%, #050505 75%)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.74rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          · Quién está detrás ·
        </p>

        {/* Carta del fundador */}
        <div
          style={{
            background: "rgba(15,15,20,0.65)",
            border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: 20,
            padding: "clamp(1.5rem, 4vw, 2.25rem)",
            boxShadow: "0 24px 60px -25px rgba(59,130,246,0.25)",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "1rem",
              lineHeight: 1.75,
              margin: "0 0 1.25rem",
            }}
          >
            Monté NoEmprendasSolo porque yo también construí en silencio.
            Sé lo que es tener una idea dentro y que nadie de tu entorno la
            vea.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "1rem",
              lineHeight: 1.75,
              margin: "0 0 1.75rem",
            }}
          >
            Si estás construyendo algo —aunque solo sea una idea— este es tu
            sitio.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "1.25rem",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#001423",
                fontWeight: 800,
                fontSize: "0.95rem",
                flexShrink: 0,
              }}
            >
              S
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  lineHeight: 1.2,
                }}
              >
                Siera
              </div>
              <a
                href="https://www.instagram.com/yosoy.siera"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#60a5fa",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                }}
              >
                @yosoy.siera
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
