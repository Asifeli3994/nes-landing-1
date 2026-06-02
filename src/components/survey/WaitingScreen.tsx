import { useEffect, useState } from "react"
import { goToLogin } from "../../lib/loginUrl"

const TOTAL_SECONDS = 30 * 60 // 30 minutos

function fmt(s: number): string {
  const mm = Math.floor(s / 60)
    .toString()
    .padStart(2, "0")
  const ss = (s % 60).toString().padStart(2, "0")
  return `${mm}:${ss}`
}

/**
 * Pantalla psicológica: simula una "revisión por el comité" con un countdown
 * real de 30:00. El usuario puede saltarse la espera con el botón directo.
 */
export default function WaitingScreen() {
  const [secs, setSecs] = useState(TOTAL_SECONDS)

  useEffect(() => {
    const id = setInterval(() => {
      setSecs((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Cuando se llena (es decir, el contador llega a 0), redirigimos solos.
  useEffect(() => {
    if (secs === 0) {
      const t = setTimeout(goToLogin, 1500)
      return () => clearTimeout(t)
    }
  }, [secs])

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2200,
        background:
          "radial-gradient(ellipse at center, #0a1424 0%, #050505 60%, #000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
        textAlign: "center",
      }}
    >
      {/* Indicador de "procesando" */}
      <div
        className="nes-fade-up"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.4rem 1rem",
          background: "rgba(59,130,246,0.08)",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 999,
          color: "#93c5fd",
          fontSize: "0.74rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: "2rem",
        }}
      >
        <span
          className="nes-dot-pulse"
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: "#3b82f6",
            boxShadow: "0 0 12px #3b82f6",
          }}
        />
        Procesando solicitud
      </div>

      <h1
        className="nes-fade-up"
        style={{
          color: "#fff",
          fontSize: "clamp(1.4rem, 3.6vw, 2rem)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.35,
          maxWidth: "640px",
          margin: "0 0 0.6rem",
          textWrap: "balance",
          animationDelay: "0.1s",
        }}
      >
        Tus respuestas están siendo revisadas por el comité de admisión…
      </h1>

      <p
        className="nes-fade-up"
        style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: "0.95rem",
          maxWidth: "520px",
          margin: "0 0 3rem",
          lineHeight: 1.6,
          animationDelay: "0.2s",
        }}
      >
        Revisamos cada solicitud a mano. Si todo encaja, recibirás acceso en
        breve.
      </p>

      {/* Countdown */}
      <div
        className="nes-fade-up"
        style={{ animationDelay: "0.3s", marginBottom: "3rem" }}
      >
        <div
          style={{
            fontFamily:
              "'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace",
            fontSize: "clamp(3.5rem, 12vw, 6rem)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            background:
              "linear-gradient(180deg, #fff 0%, #93c5fd 60%, #3b82f6 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 30px rgba(59,130,246,0.25))",
            fontVariantNumeric: "tabular-nums",
            lineHeight: 1,
          }}
        >
          {fmt(secs)}
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.74rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginTop: "0.6rem",
          }}
        >
          Tiempo estimado de revisión
        </p>
      </div>

      {/* Bypass */}
      <div
        className="nes-fade-up"
        style={{
          animationDelay: "0.4s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.85rem",
        }}
      >
        <button
          onClick={goToLogin}
          className="nes-aura-blue"
          style={{
            padding: "1.05rem 2.4rem",
            background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
            color: "#001423",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 999,
            fontSize: "0.98rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          Acceso inmediato a la web →
        </button>
        <p
          style={{
            color: "rgba(255,255,255,0.28)",
            fontSize: "0.78rem",
            letterSpacing: "0.06em",
          }}
        >
          Saltar la espera y entrar ahora.
        </p>
      </div>

      <style>{`
        @keyframes nes-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        .nes-dot-pulse { animation: nes-dot-pulse 1.4s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
