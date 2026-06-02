import { useState } from "react"
import IntroSequence from "./components/landing/IntroSequence"
import HeroSection from "./components/landing/HeroSection"
import BreakRulesSection from "./components/landing/BreakRulesSection"
import HorizontalBenefits from "./components/landing/HorizontalBenefits"
import FinalCTASection from "./components/landing/FinalCTASection"
import "./styles/landing.css"

/**
 * Landing inmersiva (standalone). Flujo:
 *   1. Si es la primera visita de la sesión → intro Matrix + pills.
 *   2. Tras "Adelante" (o si ya la vio) → Landing completa.
 *
 * Los botones CTA (Entrar, Unirme a la tribu, Cruzar el umbral) abren la URL
 * del proyecto del login (configurable en src/lib/loginUrl.ts o vía
 * VITE_LOGIN_URL).
 */
export default function App() {
  const [introDone, setIntroDone] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return sessionStorage.getItem("nes:introSeen") === "1"
  })

  const completeIntro = () => {
    sessionStorage.setItem("nes:introSeen", "1")
    setIntroDone(true)
    window.scrollTo({ top: 0, behavior: "auto" })
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
      {!introDone && <IntroSequence onComplete={completeIntro} />}

      {introDone && (
        <>
          <HeroSection />
          <BreakRulesSection />
          <HorizontalBenefits />
          <FinalCTASection />
        </>
      )}
    </div>
  )
}
