import { useState } from "react"
import HeroSection from "./components/landing/HeroSection"
import PainSection from "./components/landing/PainSection"
import HowItWorksSection from "./components/landing/HowItWorksSection"
import FounderSection from "./components/landing/FounderSection"
import FinalCTASection from "./components/landing/FinalCTASection"
import AdmissionForm from "./components/survey/AdmissionForm"
import WaitlistScreen, { type WaitlistMode } from "./components/survey/WaitlistScreen"
import "./styles/landing.css"

type Screen = "landing" | "form" | "waitlist"

/**
 * confirm-waitlist-signup devuelve a la persona aquí con ?confirmado=1 (y
 * &puesto=N) tras pinchar el enlace del correo. Se lee una sola vez, al
 * montar, y se limpia de la URL para que un refresco no la deje clavada en
 * la pantalla de confirmación.
 */
function readConfirmParams(): { confirmed: boolean; queueNumber: number | null } {
  if (typeof window === "undefined") return { confirmed: false, queueNumber: null }
  const params = new URLSearchParams(window.location.search)
  const confirmed = params.get("confirmado") === "1"
  if (!confirmed) return { confirmed: false, queueNumber: null }

  const raw = Number(params.get("puesto"))
  window.history.replaceState({}, "", window.location.pathname)
  return { confirmed: true, queueNumber: Number.isInteger(raw) && raw > 0 ? raw : null }
}

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
  // useState(initializer) para que readConfirmParams corra una sola vez y no
  // en cada render (limpia la query string como efecto secundario).
  const [confirmParams] = useState(readConfirmParams)
  const [screen, setScreen] = useState<Screen>(
    confirmParams.confirmed ? "waitlist" : "landing"
  )
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [mode, setMode] = useState<WaitlistMode>(
    confirmParams.confirmed ? "confirmed" : "pending"
  )

  const openForm = () => setScreen("form")

  const submitDone = (email: string, emailSent: boolean) => {
    setSubmittedEmail(email)
    setMode(emailSent ? "pending" : "email-failed")
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

      {screen === "waitlist" && (
        <WaitlistScreen
          email={submittedEmail}
          mode={mode}
          queueNumber={confirmParams.queueNumber}
        />
      )}
    </div>
  )
}
