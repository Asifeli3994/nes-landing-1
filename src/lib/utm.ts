// UTM de la campaña que trajo a la persona a la landing.
//
// Se leen una sola vez, al cargar la página (App.tsx), porque la query
// string solo está disponible en esa carga inicial — si el usuario navega
// un poco antes de abrir el formulario, ya la habríamos perdido. Por eso se
// guardan en sessionStorage y joinWaitlist() los lee de ahí al enviar.
//
// Nomenclatura (mantenla así: es lo que hace comparables los reportes por
// utm_content entre piezas — ver supabase/migrations/*_add_waitlist_utm_columns.sql):
//   utm_source   siempre "instagram"
//   utm_medium   "reel" | "story" | "bio" según el formato
//   utm_campaign nombre de campaña en minúsculas y guiones, ej. "verano-2026"
//   utm_content  pieza en formato r0NN-tema, ej. "r047-equipo" — siempre
//                minúsculas y guiones, nunca espacios

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const
type UtmKey = (typeof KEYS)[number]
export type UtmParams = Record<UtmKey, string | null>

const STORAGE_PREFIX = "nes:"

/**
 * Lee los utm_* de la URL actual y los persiste en sessionStorage. Idempotente
 * y no destructivo: si la URL no trae un parámetro, no borra el que ya
 * hubiera guardado (útil si el usuario recarga la landing sin querer).
 */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return
  const params = new URLSearchParams(window.location.search)
  for (const key of KEYS) {
    const value = params.get(key)
    if (value) sessionStorage.setItem(STORAGE_PREFIX + key, value)
  }
}

/** Los UTM guardados en esta sesión. null en los que no llegaron (tráfico directo). */
export function getStoredUtmParams(): UtmParams {
  const out = {} as UtmParams
  for (const key of KEYS) {
    out[key] = typeof window === "undefined" ? null : sessionStorage.getItem(STORAGE_PREFIX + key)
  }
  return out
}
