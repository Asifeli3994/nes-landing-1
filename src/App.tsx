import { useState } from "react"
import HeroSection from "./components/landing/HeroSection"
import PainSection from "./components/landing/PainSection"
import HowItWorksSection from "./components/landing/HowItWorksSection"
import FounderSection from "./components/landing/FounderSection"
import FinalCTASection from "./components/landing/FinalCTASection"
import AdmissionForm from "./components/survey/AdmissionForm"
import WaitlistScreen from "./components/survey/WaitlistScreen"
import { captureUtmParams } from "./lib/utm"
import "./styles/landing.css"

type Screen = "landing" | "form" | "waitlist"

/**
 * Landing mono-objetivo para tráfico social (Instagram → mobile).
 *
 * Estructura (framework PAS):
 *   1. Hero — headline + CTA en primera persona
 *   2. Agitación → giro a solución (BAB)
 *   3. Cómo funciona en 3 pasos
 *   4. Credibilidad early-stage (fundador)
 *   5. CTA final repetido
 *
 * Flujo: landing → formulario (6 preguntas) → beta cerrada + lista de espera.
 */
export default function App() {
  // useState(initializer) para que corra una sola vez, en el primer render,
  // antes de que el usuario pueda navegar y perder la query string.
  useState(captureUtmParams)
  const [screen, setScreen] = useState<Screen>("landing")
  const [queueNumber, setQueueNumber] = useState<number | null>(null)

  const openForm = () => setScreen("form")

  const submitDone = (_email: string, queueNumber: number | null) => {
    setQueueNumber(queueNumber)
    window.scrollTo({ top: 0, behavior: "auto" })
    setScreen("waitlist")
  }

  return (
    <div
      style={{
        background: "#050505",
        color: "#fff",
        overflowX: "clip",
        fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
      }}
    >
      {screen !== "waitlist" && (
        <>
          <HeroSection onCta={openForm} />
          <PainSection />
          <HowItWorksSection />
          <FounderSection />
          <FinalCTASection onCta={openForm} />
        </>
      )}

      {screen === "form" && (
        <AdmissionForm
          onSubmit={submitDone}
          onClose={() => setScreen("landing")}
        />
      )}

      {screen === "waitlist" && <WaitlistScreen queueNumber={queueNumber} />}
    </div>
  )
}
