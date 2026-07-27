import { useEffect, useRef, useState } from "react"
import {
  joinWaitlist,
  mapHoursPerWeek,
  mapProjectPhase,
  WaitlistError,
} from "../../lib/waitlist"

// ─────────────────────────────────────────────────────────────────────────────
// Modelo
// ─────────────────────────────────────────────────────────────────────────────
type AnswerValue = string

type Question = {
  id: number
  text: string
  hint?: string
  type: "text" | "email" | "textarea" | "single"
  placeholder?: string
  options?: string[]
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "¿Cómo te llamas?",
    hint: "Nombre o alias, como prefieras.",
    type: "text",
    placeholder: "Tu nombre",
  },
  {
    id: 2,
    text: "¿Cuál es tu email?",
    hint: "Lo usamos solo para darte acceso. Sin spam.",
    type: "email",
    placeholder: "tu@email.com",
  },
  {
    id: 3,
    text: "¿En qué estás trabajando ahora mismo?",
    type: "text",
    placeholder: "Una app, una marca, una idea…",
  },
  {
    id: 4,
    text: "¿En qué fase está tu proyecto?",
    type: "single",
    options: ["Solo una idea", "Lo estoy construyendo", "Ya tengo usuarios o ventas"],
  },
  {
    id: 5,
    text: "¿Qué esperas encontrar aquí que no encuentras en otras comunidades?",
    type: "textarea",
    placeholder: "Sé honesto. Esto es lo que más nos importa.",
  },
  {
    id: 6,
    text: "¿Cuánto tiempo le dedicas a tu proyecto cada semana?",
    type: "single",
    options: ["Menos de 5 horas", "Entre 5 y 15 horas", "Más de 15 horas"],
  },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CONSENT_STEP = QUESTIONS.length // paso virtual tras la última pregunta
const TOTAL_STEPS = QUESTIONS.length + 1

// ─────────────────────────────────────────────────────────────────────────────
// Componente
// ─────────────────────────────────────────────────────────────────────────────
type Props = {
  /** Se invoca tras guardar y confirmar la solicitud, con el puesto en la cola. */
  onSubmit: (email: string, queueNumber: number | null) => void
  /** Cerrar y volver a la landing (Escape o ✕) */
  onClose: () => void
}

export default function AdmissionForm({ onSubmit, onClose }: Props) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({})
  const [consentChecked, setConsentChecked] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [questionKey, setQuestionKey] = useState(0) // remount → re-anima
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  const isConsentStep = index === CONSENT_STEP
  const q = isConsentStep ? null : QUESTIONS[index]
  const progress = ((index + 1) / TOTAL_STEPS) * 100
  const current = q ? answers[q.id] : undefined

  // Autofocus al cambiar pregunta
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [questionKey])

  // Escape cierra
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [onClose])

  // ── Validación por tipo ───────────────────────────────────────────────────
  const canContinue = isConsentStep
    ? consentChecked
    : (() => {
        if (!q) return false
        const v = typeof current === "string" ? current.trim() : ""
        if (q.type === "email") return EMAIL_RE.test(v)
        if (q.type === "text" || q.type === "textarea") return v.length >= 2
        if (q.type === "single") return v.length > 0
        return false
      })()

  // ── Envío final ───────────────────────────────────────────────────────────
  const submitAll = async () => {
    const projectPhase = mapProjectPhase(answers[4] ?? "")
    const hoursPerWeek = mapHoursPerWeek(answers[6] ?? "")
    const email = (answers[2] ?? "").trim()

    if (!projectPhase || !hoursPerWeek) {
      setError("Faltan respuestas del formulario. Revisa los pasos anteriores.")
      return
    }

    setSubmitting(true)
    setError(null)
    try {
      const { queueNumber } = await joinWaitlist({
        name: answers[1] ?? "",
        email,
        currentProject: answers[3] ?? "",
        projectPhase,
        expectations: answers[5] ?? "",
        hoursPerWeek,
      })
      onSubmit(email, queueNumber)
    } catch (err) {
      setError(
        err instanceof WaitlistError
          ? err.message
          : "No se pudo guardar tu solicitud. Inténtalo de nuevo."
      )
      setSubmitting(false)
    }
  }

  // ── Avance / retroceso ───────────────────────────────────────────────────
  const goNext = async () => {
    if (!canContinue || submitting) return
    if (isConsentStep) {
      await submitAll()
      return
    }
    setIndex(index + 1)
    setQuestionKey((k) => k + 1)
  }

  const goBack = () => {
    if (index === 0 || submitting) return
    setIndex(index - 1)
    setQuestionKey((k) => k + 1)
  }

  const setText = (v: string) => {
    if (!q) return
    setAnswers((prev) => ({ ...prev, [q.id]: v }))
  }

  const setSingle = (v: string) => {
    if (!q) return
    setAnswers((prev) => ({ ...prev, [q.id]: v }))
    // Auto-avance en single-choice (UX fluida)
    setTimeout(() => {
      if (index < CONSENT_STEP) {
        setIndex(index + 1)
        setQuestionKey((k) => k + 1)
      }
    }, 280)
  }

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && q?.type !== "textarea") {
      e.preventDefault()
      goNext()
    }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey) && q?.type === "textarea") {
      e.preventDefault()
      goNext()
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background:
          "radial-gradient(ellipse at top, #0a0f1a 0%, #050505 60%, #000 100%)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ─── Barra de progreso superior ─── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(255,255,255,0.05)",
          zIndex: 2100,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #3b82f6, #22d3ee, #00ff7f)",
            boxShadow: "0 0 14px rgba(59,130,246,0.65)",
            transition: "width 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>

      {/* ─── Header ─── */}
      <header
        style={{
          padding: "1.5rem 1.5rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#9ca3af",
          fontSize: "0.76rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "#3b82f6", fontWeight: 600 }}>
          · Solicitud de acceso ·
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {String(index + 1).padStart(2, "0")} / {String(TOTAL_STEPS).padStart(2, "0")}
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.5)",
              width: 32,
              height: 32,
              borderRadius: 999,
              cursor: "pointer",
              fontSize: "0.85rem",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </span>
      </header>

      {/* ─── Body centrado ─── */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1.5rem",
          overflowY: "auto",
        }}
      >
        <div
          key={questionKey}
          className="nes-fade-up"
          style={{
            width: "100%",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              color: "#22d3ee",
              fontSize: "0.74rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 600,
              margin: 0,
            }}
          >
            {isConsentStep ? "Último paso" : `Pregunta ${index + 1}`}
          </p>

          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.35rem, 3.6vw, 1.9rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              margin: 0,
              textWrap: "balance",
            }}
          >
            {isConsentStep ? "Antes de enviar tu solicitud" : q?.text}
          </h2>

          {!isConsentStep && q?.hint && (
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.88rem",
                margin: "-0.75rem 0 0",
                lineHeight: 1.5,
              }}
            >
              {q.hint}
            </p>
          )}

          {!isConsentStep && (q?.type === "text" || q?.type === "email") && (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type={q.type === "email" ? "email" : "text"}
              value={(current as string) || ""}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder={q.placeholder}
              style={inputStyle}
            />
          )}

          {!isConsentStep && q?.type === "textarea" && (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={(current as string) || ""}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder={q.placeholder}
              rows={5}
              style={{ ...inputStyle, resize: "vertical", minHeight: 130 }}
            />
          )}

          {!isConsentStep && q?.type === "single" && q.options && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {q.options.map((opt) => {
                const active = current === opt
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSingle(opt)}
                    className="nes-survey-opt"
                    style={{
                      ...optionStyle,
                      borderColor: active ? "#3b82f6" : "rgba(255,255,255,0.12)",
                      background: active
                        ? "rgba(59,130,246,0.12)"
                        : "rgba(255,255,255,0.025)",
                      color: active ? "#fff" : "#d1d5db",
                      boxShadow: active
                        ? "0 0 24px rgba(59,130,246,0.25), inset 0 0 12px rgba(59,130,246,0.08)"
                        : "none",
                    }}
                  >
                    {opt}
                    {active && (
                      <span
                        style={{
                          color: "#22d3ee",
                          fontSize: "1.1rem",
                          marginLeft: "auto",
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          )}

          {isConsentStep && (
            <>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Revisa tus respuestas cuando quieras con «← Atrás». Solo falta
                tu consentimiento para guardarlas.
              </p>

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "1rem 1.1rem",
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${
                    consentChecked ? "rgba(34,211,238,0.45)" : "rgba(255,255,255,0.1)"
                  }`,
                  borderRadius: 12,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0 }}
                />
                <span
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.5 }}
                >
                  Acepto recibir emails de NES sobre el lanzamiento y la
                  confirmación de mi puesto en la lista de espera. Consulta
                  nuestra{" "}
                  <a
                    href="/privacidad"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#22d3ee" }}
                  >
                    política de privacidad
                  </a>
                  .
                </span>
              </label>

              {error && (
                <p
                  style={{
                    color: "rgba(239,68,68,0.9)",
                    fontSize: "0.85rem",
                    margin: 0,
                  }}
                >
                  {error}
                </p>
              )}
            </>
          )}
        </div>
      </main>

      {/* ─── Footer con navegación ─── */}
      <footer
        style={{
          padding: "1.25rem 1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <button
          type="button"
          onClick={goBack}
          disabled={index === 0 || submitting}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.12)",
            color: index === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
            padding: "0.7rem 1.3rem",
            borderRadius: 999,
            fontSize: "0.85rem",
            cursor: index === 0 ? "not-allowed" : "pointer",
            letterSpacing: "0.04em",
          }}
        >
          ← Atrás
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={!canContinue || submitting}
          style={{
            background:
              canContinue && !submitting
                ? "linear-gradient(135deg, #3b82f6, #22d3ee)"
                : "rgba(255,255,255,0.06)",
            color: canContinue && !submitting ? "#001423" : "rgba(255,255,255,0.3)",
            border: "none",
            padding: "0.78rem 1.8rem",
            borderRadius: 999,
            fontSize: "0.92rem",
            fontWeight: 700,
            cursor: canContinue && !submitting ? "pointer" : "not-allowed",
            letterSpacing: "0.04em",
            boxShadow:
              canContinue && !submitting
                ? "0 10px 30px -10px rgba(59,130,246,0.5)"
                : "none",
            transition: "all 0.2s",
          }}
        >
          {submitting
            ? "Enviando…"
            : isConsentStep
              ? "Enviar solicitud →"
              : "Continuar →"}
        </button>
      </footer>
    </div>
  )
}

// ─── Estilos compartidos ───
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "1rem 1.1rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  color: "#fff",
  fontSize: "1rem",
  lineHeight: 1.5,
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.18s, background 0.18s",
}

const optionStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  textAlign: "left",
  padding: "0.95rem 1.1rem",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 12,
  fontSize: "0.96rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.18s",
  fontFamily: "inherit",
}
