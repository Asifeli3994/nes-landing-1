import { useEffect, useRef, useState } from "react"

type Panel = {
  num: string
  kicker: string
  title: string
  body: string
  accent: string
  bg: string
}

const PANELS: Panel[] = [
  {
    num: "I",
    kicker: "Contactos",
    title: "Sin un círculo que te empuje a mejorar",
    body:
      "Fundadores reales y personas con ideas, de las que cuesta encontrar fuera de aquí.",
    accent: "#3b82f6",
    bg: "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.20), transparent 55%)",
  },
  {
    num: "II",
    kicker: "Masterminds",
    title: "Masterminds con usuarios",
    body:
      "Espacios de mentoría y feedback directo entre los miembros. Sin gurús, sin postureo.",
    accent: "#22d3ee",
    bg: "radial-gradient(circle at 80% 40%, rgba(34,211,238,0.18), transparent 55%)",
  },
]

// Una pantalla extra al final para que el último panel "dwellee" antes de
// liberar el sticky (fix del bug de scroll horizontal que se desbloqueaba
// demasiado pronto).
const TRAILING_DWELL_VH = 1

export default function HorizontalBenefits() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onScroll = () => {
      const rect = container.getBoundingClientRect()
      const totalScrollable = container.offsetHeight - window.innerHeight
      // Reservamos `TRAILING_DWELL_VH` viewports al final para que el último
      // panel se quede en su sitio mientras el usuario sigue haciendo scroll
      // antes de que se libere el sticky.
      const horizScrollBudget = Math.max(
        1,
        totalScrollable - window.innerHeight * TRAILING_DWELL_VH
      )
      const passed = -rect.top
      const p = Math.max(0, Math.min(1, passed / horizScrollBudget))
      setProgress(p)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const translatePct = -progress * (PANELS.length - 1) * 100
  const sectionHeightVh = PANELS.length * 100 + TRAILING_DWELL_VH * 100

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: `${sectionHeightVh}vh`,
        background: "#050505",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Indicador lateral de progreso por panel */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "1.25rem",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
            zIndex: 10,
          }}
        >
          {PANELS.map((_, i) => {
            const isActive = Math.round(progress * (PANELS.length - 1)) === i
            return (
              <div
                key={i}
                style={{
                  width: isActive ? 3 : 2,
                  height: isActive ? 32 : 16,
                  background: isActive ? PANELS[i].accent : "rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  transition: "all 0.4s",
                  boxShadow: isActive ? `0 0 12px ${PANELS[i].accent}` : "none",
                }}
              />
            )
          })}
        </div>

        {/* Header */}
        <div
          style={{
            position: "absolute",
            top: "3rem",
            left: "1.75rem",
            zIndex: 10,
            maxWidth: "300px",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.42)",
              fontSize: "0.72rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "0.4rem",
            }}
          >
            · Capítulo 02 · Beneficios ocultos
          </p>
          <p
            style={{
              color: "#fff",
              fontSize: "0.92rem",
              fontWeight: 500,
              opacity: 0.8,
            }}
          >
            Desplázate para descubrir
          </p>
        </div>

        {/* Track horizontal */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            width: `${PANELS.length * 100}vw`,
            height: "100%",
            transform: `translate3d(${translatePct}vw, 0, 0)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
        >
          {PANELS.map((p, i) => (
            <BenefitPanel
              key={i}
              panel={p}
              index={i}
              progress={progress}
              total={PANELS.length}
            />
          ))}
        </div>

        {/* Hint flecha */}
        <div
          className="nes-scroll-hint"
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.74rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
          }}
        >
          Scroll <span style={{ fontSize: "1.1rem" }}>→</span>
        </div>
      </div>
    </section>
  )
}

function BenefitPanel({
  panel,
  index,
  progress,
  total,
}: {
  panel: Panel
  index: number
  progress: number
  total: number
}) {
  const myProgress = progress * (total - 1)
  const distance = Math.abs(myProgress - index)
  const opacity = Math.max(0.32, 1 - distance * 0.7)
  const translateY = distance * 28

  return (
    <div
      style={{
        flex: "0 0 100vw",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 clamp(1.25rem, 4vw, 3rem)",
        background: panel.bg,
      }}
    >
      {/* Número de fondo gigante */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "clamp(16rem, 50vw, 40rem)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.022)",
          letterSpacing: "-0.1em",
          pointerEvents: "none",
          userSelect: "none",
          transform: `translateY(${-translateY * 0.5}px)`,
        }}
      >
        {panel.num}
      </div>

      {/* Tarjeta glassmorphism */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "560px",
          padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)",
          background: "rgba(15,15,20,0.6)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `1px solid ${panel.accent}40`,
          borderRadius: 22,
          boxShadow: `0 30px 80px -20px ${panel.accent}30, inset 0 1px 0 rgba(255,255,255,0.05)`,
          opacity,
          transform: `translateY(${translateY}px)`,
          transition: "opacity 0.3s, transform 0.3s",
          zIndex: 1,
        }}
      >
        <div
          style={{
            color: panel.accent,
            fontSize: "0.74rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            fontWeight: 600,
          }}
        >
          {panel.num} · {panel.kicker}
        </div>
        <h3
          style={{
            color: "#fff",
            fontSize: "clamp(1.7rem, 4.2vw, 2.6rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            textWrap: "balance",
          }}
        >
          {panel.title}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(0.98rem, 1.4vw, 1.08rem)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {panel.body}
        </p>
      </div>
    </div>
  )
}
