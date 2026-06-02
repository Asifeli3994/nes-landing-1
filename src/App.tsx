import { useState } from "react"
import IntroSequence from "./components/landing/IntroSequence"
import HeroSection from "./components/landing/HeroSection"
import BreakRulesSection from "./components/landing/BreakRulesSection"
import HorizontalBenefits from "./components/landing/HorizontalBenefits"
import FinalCTASection from "./components/landing/FinalCTASection"
import Survey from "./components/survey/Survey"
import WaitingScreen from "./components/survey/WaitingScreen"
import "./styles/landing.css"

type Screen = "intro" | "landing" | "survey" | "waiting"

/**
 * Landing inmersiva con acceso restringido (encuesta de admisión).
 *
 * Flujo:
 *   intro  → Matrix + pills (solo primera visita por sesión)
 *   landing → Hero + BreakRules + Horizontal + FinalCTA
 *   survey  → 12 preguntas, una a una, con barra de progreso azul
 *   waiting → countdown 30:00 + botón de acceso inmediato al login
 */
export default function App() {
  const [screen, setScreen] = useState<Screen>(() => {
    if (typeof window === "undefined") return "intro"
    return sessionStorage.getItem("nes:introSeen") === "1" ? "landing" : "intro"
  })

  const completeIntro = () => {
    sessionStorage.setItem("nes:introSeen", "1")
    setScreen("landing")
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  const openSurvey = () => {
    window.scrollTo({ top: 0, behavior: "auto" })
    setScreen("survey")
  }

  const submitDone = () => {
    window.scrollTo({ top: 0, behavior: "auto" })
    setScreen("waiting")
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
      {screen === "intro" && <IntroSequence onComplete={completeIntro} />}

      {(screen === "landing" || screen === "survey" || screen === "waiting") && (
        <>
          <HeroSection />
          <BreakRulesSection />
          <HorizontalBenefits />
          <FinalCTASection onCrossThreshold={openSurvey} />
        </>
      )}

      {screen === "survey" && (
        <Survey
          onSubmit={submitDone}
          onClose={() => setScreen("landing")}
        />
      )}

      {screen === "waiting" && <WaitingScreen />}
    </div>
  )
}
