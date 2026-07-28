import { supabase } from "./supabaseClient"
import { getStoredUtmParams } from "./utm"

export type ProjectPhase = "idea" | "building" | "users"
export type HoursPerWeek = "<5" | "5-15" | ">15"

export type WaitlistSignup = {
  name: string
  email: string
  currentProject: string
  projectPhase: ProjectPhase
  expectations: string
  hoursPerWeek: HoursPerWeek
}

const PROJECT_PHASE_MAP: Record<string, ProjectPhase> = {
  "Solo una idea": "idea",
  "Lo estoy construyendo": "building",
  "Ya tengo usuarios o ventas": "users",
}

const HOURS_PER_WEEK_MAP: Record<string, HoursPerWeek> = {
  "Menos de 5 horas": "<5",
  "Entre 5 y 15 horas": "5-15",
  "Más de 15 horas": ">15",
}

export function mapProjectPhase(option: string): ProjectPhase | null {
  return PROJECT_PHASE_MAP[option] ?? null
}

export function mapHoursPerWeek(option: string): HoursPerWeek | null {
  return HOURS_PER_WEEK_MAP[option] ?? null
}

export class WaitlistError extends Error {
  code?: string
  constructor(message: string, code?: string) {
    super(message)
    this.code = code
  }
}

/**
 * Único insert con todas las respuestas del formulario. RLS solo permite
 * INSERT público (con confirmed/queue_number/confirmed_at bloqueados a sus
 * valores por defecto), así que la clave anon es segura aquí.
 */
export type JoinResult = {
  /** Puesto en la cola. Sin doble opt-in por email: se confirma al instante. */
  queueNumber: number | null
}

export async function joinWaitlist(signup: WaitlistSignup): Promise<JoinResult> {
  const email = signup.email.trim().toLowerCase()

  const utm = getStoredUtmParams()

  const { error } = await supabase.from("waitlist").insert({
    name: signup.name.trim(),
    email,
    current_project: signup.currentProject.trim(),
    project_phase: signup.projectPhase,
    expectations: signup.expectations.trim(),
    hours_per_week: signup.hoursPerWeek,
    consent_at: new Date().toISOString(),
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_content: utm.utm_content,
  })

  if (error) {
    if (error.code === "23505") {
      throw new WaitlistError("Este email ya está en la lista de espera.", error.code)
    }
    throw new WaitlistError(
      "No se pudo guardar tu solicitud. Inténtalo de nuevo.",
      error.code
    )
  }

  // La fila ya está guardada: confirmarla es solo para asignar puesto en la
  // cola, así que un fallo aquí no debe bloquear el alta ni prometer un
  // reintento que chocaría contra el índice único del email.
  const { data, error: confirmError } = await supabase.functions.invoke("waitlist-mailer", {
    body: { action: "confirm", email },
  })

  const queueNumber =
    !confirmError && typeof data?.queueNumber === "number" ? data.queueNumber : null

  return { queueNumber }
}
