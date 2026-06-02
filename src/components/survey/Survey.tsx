import { useEffect, useRef, useState } from "react"
import { submitSurvey, type AnswerValue } from "../../lib/surveyStorage"

// ─────────────────────────────────────────────────────────────────────────────
// Modelo
// ─────────────────────────────────────────────────────────────────────────────
type QuestionBase = {
  id: number
  text: string
  hint?: string
}

type Question =
  | (QuestionBase & { type: "text" | "textarea"; placeholder?: string })
  | (QuestionBase & { type: "single"; options: string[] })
  | (QuestionBase & { type: "multi"; options: string[] })

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "¿En qué sector o industria estás intentando construir tu proyecto actual?",
    type: "text",
    placeholder: "SaaS, e-commerce, consultoría, IA…",
  },
  {
    id: 2,
    text: "¿Cuál es el mayor obstáculo que te impide avanzar al siguiente nivel ahora mismo?",
    type: "textarea",
    placeholder: "Sé honesto. Cuanto más concreto, mejor.",
  },
  {
    id: 3,
    text: "¿Tu proyecto ya genera ingresos o estás en fase de idea y desarrollo?",
    type: "single",
    options: ["Fase de Idea", "En Desarrollo", "Ya genera ingresos"],
  },
  {
    id: 4,
    text: "¿Qué habilidades o conocimientos únicos aportarías al resto de miembros de la comunidad?",
    type: "textarea",
    placeholder: "Lo que tú aportas a los demás.",
  },
  {
    id: 5,
    text: "¿Por qué crees que la mayoría de los emprendedores en solitario fracasan en sus primeros meses?",
    type: "textarea",
    placeholder: "Tu hipótesis personal.",
  },
  {
    id: 6,
    text: "¿Estás dispuesto a compartir tus errores y aprendizajes de forma abierta y honesta con otros miembros?",
    type: "single",
    options: ["Sí, totalmente", "Me cuesta, pero lo intentaré", "Prefiero ser reservado"],
  },
  {
    id: 7,
    text: "¿Qué buscas en esta tribu que no hayas encontrado en grupos de Telegram, Discord o redes sociales comunes?",
    type: "textarea",
    placeholder: "Lo que falta en los demás sitios.",
  },
  {
    id: 8,
    text: "¿Cuántas personas de tu entorno actual (amigos/familia) entienden realmente tu visión y tus proyectos?",
    type: "single",
    options: ["Nadie", "Muy pocas", "La mayoría"],
  },
  {
    id: 9,
    text: "Si eres aceptado/a, ¿cuánto tiempo semanal planeas dedicar a conectar y hacer sinergias en la plataforma?",
    type: "single",
    options: ["1-2 horas", "3-5 horas", "+5 horas a la semana"],
  },
  {
    id: 10,
    text: "¿Estás buscando socios, feedback honesto para tus ideas, o simplemente un entorno de alto rendimiento?",
    type: "multi",
    options: ["Socios", "Feedback honesto", "Entorno de alto rendimiento"],
  },
  {
    id: 11,
    text: "¿Cuál ha sido tu mayor fracaso emprendiendo hasta la fecha y qué aprendiste de él?",
    type: "textarea",
    placeholder: "Si aún no has fracasado, cuéntanos un error importante.",
  },
  {
    id: 12,
    text: "El acceso es estrictamente limitado. ¿Por qué deberíamos priorizar tu solicitud sobre la de otros 100 emprendedores?",
    type: "textarea",
    placeholder: "Tu mejor argumento. Sé directo.",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Componente
// ─────────────────────────────────────────────────────────────────────────────
type Props = {
  /** Se invoca cuando el usuario envía la encuesta */
  onSubmit: () => void
  /** Permitir cerrar la encuesta y volver a la landing (Escape) */
  onClose?: () => void
}

export default function Survey({ onSubmit, onClose }: Props) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({})
  const [submitting, setSubmitting] = useState(false)
  const [questionKey, setQuestionKey] = useState(0) // remount → re-anima
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  const q = QUESTIONS[index]
  const total = QUESTIONS.length
  const progress = ((index + 1) / total) * 100
  const current = answers[q.id]

  // Autofocus al cambiar pregunta
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 80)
  }, [questionKey])

  // Escape cierra (si está permitido)
  useEffect(() => {
    if (!onClose) return
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [onClose])

  // ── Validación / disponibilidad de "Continuar" ───────────────────────────
  const canContinue = (() => {
    if (q.type === "text" || q.type === "textarea") {
      const v = (current as string) || ""
      return v.trim().length >= 2
    }
    if (q.type === "single") return typeof current === "string" && current.length > 0
    if (q.type === "multi")
      return Array.isArray(current) && current.length > 0
    return false
  })()

  // ── Avance / retroceso ───────────────────────────────────────────────────
  const goNext = async () => {
    if (!canContinue || submitting) return
    if (index < total - 1) {
      setIndex(index + 1)
      setQuestionKey((k) => k + 1)
    } else {
      // Última pregunta → enviar
      setSubmitting(true)
      try {
        await submitSurvey(answers)
      } finally {
        onSubmit()
      }
    }
  }

  const goBack = () => {
    if (index === 0 || submitting) return
    setIndex(index - 1)
    setQuestionKey((k) => k + 1)
  }

  // ── Handlers por tipo de pregunta ────────────────────────────────────────
  const setText = (v: string) =>
    setAnswers((prev) => ({ ...prev, [q.id]: v }))

  const setSingle = (v: string) => {
    setAnswers((prev) => ({ ...prev, [q.id]: v }))
    // Auto-avance para single-choice (UX más fluido)
    setTimeout(() => {
      if (index < total - 1) {
        setIndex(index + 1)
        setQuestionKey((k) => k + 1)
      }
    }, 280)
  }

  const toggleMulti = (v: string) => {
    setAnswers((prev) => {
      const arr = Array.isArray(prev[q.id]) ? (prev[q.id] as string[]) : []
      const next = arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]
      return { ...prev, [q.id]: next }
    })
  }

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && q.type === "text") {
      e.preventDefault()
      goNext()
    }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey) && q.type === "textarea") {
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
      {/* ─── Progress bar azul superior ─── */}
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

      {/* ─── Header fino ─── */}
      <header
        style={{
          padding: "1.5rem 1.75rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#9ca3af",
          fontSize: "0.78rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "#3b82f6", fontWeight: 600 }}>
          · Encuesta de admisión ·
        </span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>
          {String(index + 1).padStart(2, "0")} / {total}
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
            maxWidth: "640px",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
          }}
        >
          {/* Etiqueta pequeña */}
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
            Pregunta {index + 1}
          </p>

          {/* Pregunta */}
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.4rem, 3.6vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
              margin: 0,
              textWrap: "balance",
            }}
          >
            {q.text}
          </h2>

          {/* Input según tipo */}
          {q.type === "text" && (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              value={(current as string) || ""}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder={q.placeholder}
              style={inputStyle}
            />
          )}

          {q.type === "textarea" && (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={(current as string) || ""}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder={q.placeholder}
              rows={5}
              style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}
            />
          )}

          {q.type === "single" && (
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

          {q.type === "multi" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {q.options.map((opt) => {
                const arr = Array.isArray(current) ? current : []
                const active = arr.includes(opt)
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleMulti(opt)}
                    style={{
                      ...optionStyle,
                      borderColor: active ? "#22d3ee" : "rgba(255,255,255,0.12)",
                      background: active
                        ? "rgba(34,211,238,0.1)"
                        : "rgba(255,255,255,0.025)",
                      color: active ? "#fff" : "#d1d5db",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 18,
                        height: 18,
                        border: `1.5px solid ${active ? "#22d3ee" : "rgba(255,255,255,0.3)"}`,
                        borderRadius: 4,
                        marginRight: "0.6rem",
                        background: active ? "#22d3ee" : "transparent",
                        color: "#001218",
                        fontSize: "0.78rem",
                        fontWeight: 800,
                      }}
                    >
                      {active ? "✓" : ""}
                    </span>
                    {opt}
                  </button>
                )
              })}
              <p
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "0.78rem",
                  marginTop: "0.25rem",
                }}
              >
                Selecciona una o varias.
              </p>
            </div>
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
            : index === total - 1
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
