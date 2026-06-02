// ─────────────────────────────────────────────────────────────────────────────
// Almacenamiento de respuestas de la encuesta de admisión.
// Hoy: localStorage. Mañana: swap a Supabase/API cambiando UNA función.
// ─────────────────────────────────────────────────────────────────────────────

export type AnswerValue = string | string[]

export type SurveyResponse = {
  id: string
  submittedAt: string // ISO
  answers: Record<number, AnswerValue>
}

const KEY = "nes:surveyResponses"

/**
 * Envía una respuesta. Devuelve el registro almacenado (con id + timestamp).
 *
 * Para migrar a Supabase: cambiar el cuerpo de esta función por un INSERT en
 * la tabla `survey_responses`. La firma se mantiene.
 */
export async function submitSurvey(
  answers: Record<number, AnswerValue>
): Promise<SurveyResponse> {
  const response: SurveyResponse = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    submittedAt: new Date().toISOString(),
    answers,
  }

  try {
    const all = JSON.parse(localStorage.getItem(KEY) || "[]") as SurveyResponse[]
    all.push(response)
    localStorage.setItem(KEY, JSON.stringify(all))
  } catch {
    // localStorage llena / bloqueada: lo ignoramos para no romper el flujo
  }

  return response
}

export function getSurveyResponses(): SurveyResponse[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]") as SurveyResponse[]
  } catch {
    return []
  }
}
