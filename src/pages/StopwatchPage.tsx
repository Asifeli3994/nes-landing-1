import Stopwatch from "../components/stopwatch/Stopwatch"
import "../styles/stopwatch.css"

/**
 * Página standalone en /cronometro. Un navegador no puede leer los botones
 * físicos de volumen del dispositivo (restricción de seguridad del propio
 * navegador), así que el gesto se imita con ↓ / ↑ y con los dos botones del
 * dial, rotulados "VOL −" / "VOL +".
 */
export default function StopwatchPage() {
  return (
    <div className="sw-page">
      <Stopwatch />
      <p className="sw-hint">
        <kbd>↓</kbd> pausa / reanuda &nbsp;·&nbsp; <kbd>↑</kbd> resetea a 0
        <br />
        (los navegadores no pueden leer los botones físicos de volumen, así
        que estos controles son el equivalente)
      </p>
      <a className="sw-back" href="/">
        ← Volver a la landing
      </a>
    </div>
  )
}
