import { useEffect, useRef, useState } from "react"

type CardData = {
  id: string
  label: string
  desc: string
  rot: number
  x: number
  y: number
  color: string
}

const INITIAL: CardData[] = [
  { id: "s", label: "SOLEDAD",       desc: "Nadie con quien compartir el viaje",         rot: -6, x: -180, y: -40,  color: "#ef4444" },
  { id: "n", label: "SIN CONTACTOS", desc: "Sin red ni mentores de confianza",           rot:  4, x:  140, y: -80,  color: "#f59e0b" },
  { id: "b", label: "BLOQUEOS",      desc: "Decisiones que te paralizan a diario",       rot: -3, x: -100, y:  90,  color: "#a855f7" },
  { id: "i", label: "IMPOSTOR",      desc: "Esa voz que dice que no eres suficiente",    rot:  7, x:  160, y: 110,  color: "#3b82f6" },
  { id: "d", label: "DUDAS",         desc: "Validar ideas en una cámara de eco",         rot: -8, x:  -20, y: -150, color: "#ec4899" },
]

/** Escala las posiciones de las cartas según el ancho del viewport para que
 *  nunca se salgan de pantalla (móvil compacto, desktop amplio). */
function computeSpread(w: number): number {
  if (w < 480) return 0.42
  if (w < 768) return 0.62
  if (w < 1024) return 0.82
  return 1
}

export default function BreakRulesSection() {
  const [cards, setCards] = useState<CardData[]>(INITIAL)
  const [exploding, setExploding] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [spread, setSpread] = useState(() =>
    typeof window === "undefined" ? 1 : computeSpread(window.innerWidth)
  )

  useEffect(() => {
    const onResize = () => setSpread(computeSpread(window.innerWidth))
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const explode = (id: string) => {
    if (exploding.has(id)) return
    setExploding((prev) => new Set(prev).add(id))
    setTimeout(() => {
      setCards((prev) => prev.filter((c) => c.id !== id))
    }, 560)
  }

  const allBroken = inView && cards.length === 0

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at center, #111 0%, #050505 70%)",
        padding: "8rem 1.5rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 4rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#ef4444",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            fontWeight: 600,
          }}
        >
          · Capítulo 01 · Rompe las reglas
        </p>
        <h2
          style={{
            color: "#fff",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          {allBroken ? "Ahora ya sabes." : "Lo que te frena."}
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "1rem",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          {allBroken
            ? "Ninguno de estos demonios sobrevive en comunidad."
            : "Arrastra o haz clic en cada carta para destruirla."}
        </p>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: "1100px",
          margin: "0 auto",
          height: "clamp(420px, 60vh, 480px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {allBroken && (
          <div
            className="nes-fade-up"
            style={{ textAlign: "center", maxWidth: "640px" }}
          >
            <div
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                background:
                  "linear-gradient(135deg, #fff 0%, #ef4444 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Esta es tu tribu.
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "440px",
                margin: "0 auto",
              }}
            >
              Una comunidad real de personas que ya pasaron por lo mismo y
              ahora caminan contigo.
            </p>
          </div>
        )}

        {cards.map((c) => (
          <BreakCard
            key={c.id}
            data={c}
            spread={spread}
            inView={inView}
            isExploding={exploding.has(c.id)}
            onDestroy={() => explode(c.id)}
          />
        ))}
      </div>
    </section>
  )
}

function BreakCard({
  data,
  spread,
  inView,
  isExploding,
  onDestroy,
}: {
  data: CardData
  spread: number
  inView: boolean
  isExploding: boolean
  onDestroy: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const drag = useRef<{
    startX: number
    startY: number
    dx: number
    dy: number
    active: boolean
  } | null>(null)
  const [grabbing, setGrabbing] = useState(false)
  const [appeared, setAppeared] = useState(false)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setAppeared(true), Math.random() * 500)
    return () => clearTimeout(t)
  }, [inView])

  // Posiciones y escala adaptadas al viewport (spread)
  const px = Math.round(data.x * spread)
  const py = Math.round(data.y * spread)
  const cardScale = spread < 0.5 ? 0.82 : spread < 0.7 ? 0.9 : 1
  const baseTransform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px)) rotate(${data.rot}deg) scale(${appeared ? cardScale : cardScale * 0.7})`

  const onPointerDown = (e: React.PointerEvent) => {
    if (isExploding) return
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      dx: 0,
      dy: 0,
      active: true,
    }
    setGrabbing(true)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    if (ref.current) ref.current.style.transition = "none"
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d || !d.active || !ref.current) return
    d.dx = e.clientX - d.startX
    d.dy = e.clientY - d.startY
    ref.current.style.transform = `translate(calc(-50% + ${px + d.dx}px), calc(-50% + ${py + d.dy}px)) rotate(${data.rot + d.dx * 0.05}deg) scale(${cardScale})`
  }

  const onPointerUp = () => {
    const d = drag.current
    if (!d) return
    const dist = Math.hypot(d.dx, d.dy)
    drag.current = null
    setGrabbing(false)

    if (dist > 60 || dist < 6) {
      onDestroy()
    } else if (ref.current) {
      ref.current.style.transition =
        "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
      ref.current.style.transform = baseTransform
    }
  }

  const exploding = isExploding
    ? {
        opacity: 0,
        transform: baseTransform.replace(
          /scale\([^)]+\)/,
          `scale(1.4) rotate(${Math.random() * 60 - 30}deg)`
        ),
        filter: "blur(10px)",
        transition: "all 0.55s ease-out",
      }
    : {}

  return (
    <div
      id={`brk-${data.id}`}
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: baseTransform,
        opacity: appeared ? 1 : 0,
        transition:
          "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-out",
        width: spread < 0.5 ? "168px" : "210px",
        padding: spread < 0.5 ? "1.1rem 1rem" : "1.4rem 1.3rem",
        background: "rgba(20,20,25,0.88)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${data.color}55`,
        borderRadius: "16px",
        boxShadow: `0 20px 60px -20px ${data.color}40, inset 0 1px 0 rgba(255,255,255,0.05)`,
        cursor: grabbing ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
        willChange: "transform",
        ...exploding,
      }}
    >
      <div
        style={{
          color: data.color,
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          marginBottom: "0.6rem",
          fontWeight: 600,
        }}
      >
        × ROMPER
      </div>
      <div
        style={{
          color: "#fff",
          fontSize: "1.4rem",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "0.5rem",
          lineHeight: 1.1,
        }}
      >
        {data.label}
      </div>
      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.82rem",
          lineHeight: 1.45,
          margin: 0,
        }}
      >
        {data.desc}
      </p>
    </div>
  )
}
