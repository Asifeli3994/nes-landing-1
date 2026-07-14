import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Cronómetro tipo analógico: un solo botón "arranca/pausa" (reanuda al
 * volver a pulsarlo) y un segundo botón que resetea a 0.
 * Mapeado a ↓ (pausa/reanuda) y ↑ (reset) para imitar los botones físicos
 * de volumen, ya que un navegador no puede leerlos directamente.
 */
function formatTime(ms: number) {
  const totalCentis = Math.floor(ms / 10)
  const centis = totalCentis % 100
  const totalSeconds = Math.floor(totalCentis / 100)
  const seconds = totalSeconds % 60
  const minutes = Math.floor(totalSeconds / 60)
  const pad = (n: number) => String(n).padStart(2, "0")
  return { main: `${pad(minutes)}:${pad(seconds)}`, centis: pad(centis) }
}

export default function Stopwatch() {
  const [running, setRunning] = useState(false)
  const [elapsedMs, setElapsedMs] = useState(0)
  const startRef = useRef<number | null>(null)

  const toggleRunning = useCallback(() => {
    setRunning((prev) => {
      const next = !prev
      startRef.current = next ? performance.now() - elapsedMs : null
      return next
    })
  }, [elapsedMs])

  const reset = useCallback(() => {
    setRunning(false)
    startRef.current = null
    setElapsedMs(0)
  }, [])

  useEffect(() => {
    if (!running) return

    let frame: number
    const loop = () => {
      if (startRef.current !== null) {
        setElapsedMs(performance.now() - startRef.current)
      }
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frame)
  }, [running])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return

      if (e.key === "ArrowDown" || e.code === "Space") {
        e.preventDefault()
        toggleRunning()
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        reset()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [toggleRunning, reset])

  const { main, centis } = formatTime(elapsedMs)

  return (
    <div className="sw-dial" data-running={running}>
      <div className="sw-ring" />

      <div className="sw-buttons">
        <button
          type="button"
          className="sw-btn sw-btn--reset"
          onClick={reset}
          aria-label="Resetear cronómetro (equivale a subir volumen)"
        >
          <span className="sw-btn-icon">↺</span>
          <span className="sw-btn-caption">VOL +</span>
        </button>

        <button
          type="button"
          className="sw-btn sw-btn--toggle"
          onClick={toggleRunning}
          aria-label={
            running
              ? "Pausar cronómetro (equivale a bajar volumen)"
              : "Reanudar cronómetro (equivale a bajar volumen)"
          }
        >
          <span className="sw-btn-icon">{running ? "❚❚" : "▶"}</span>
          <span className="sw-btn-caption">VOL −</span>
        </button>
      </div>

      <div className="sw-face">
        <div className="sw-status">
          <span className={`sw-led ${running ? "sw-led--on" : ""}`} />
          {running ? "En marcha" : elapsedMs > 0 ? "En pausa" : "Listo"}
        </div>
        <div className="sw-readout">
          <span className="sw-readout-main">{main}</span>
          <span className="sw-readout-centis">.{centis}</span>
        </div>
      </div>
    </div>
  )
}
