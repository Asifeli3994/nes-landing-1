import { supabase } from "./supabaseClient"

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
  /** false si el correo de confirmación no llegó a salir (Resend caído/mal configurado). */
  emailSent: boolean
}

export async function joinWaitlist(signup: WaitlistSignup): Promise<JoinResult> {
  const email = signup.email.trim().toLowerCase()

  const { error } = await supabase.from("waitlist").insert({
    name: signup.name.trim(),
    email,
    current_project: signup.currentProject.trim(),
    project_phase: signup.projectPhase,
    expectations: signup.expectations.trim(),
    hours_per_week: signup.hoursPerWeek,
    consent_at: new Date().toISOString(),
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

  // El fallo de email NO se lanza como error: la fila ya está guardada y
  // reintentar el formulario chocaría contra el índice único ("ya estás en la
  // lista"), dejando a la persona en un callejón sin salida. Se devuelve como
  // dato para que la pantalla de éxito avise en vez de prometer un correo que
  // no ha salido.
  const { data, error: mailError } = await supabase.functions.invoke("waitlist-mailer", {
    body: { action: "confirm", email },
  })

  return { emailSent: !mailError && data?.ok === true }
}
