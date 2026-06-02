/**
 * URL del Login externo (proyecto principal). Configurable vía env var
 * `VITE_LOGIN_URL`. En Vercel se define en Project Settings → Environment Variables.
 *
 * Fallback: la URL de producción actual del proyecto principal.
 */
export const LOGIN_URL: string =
  import.meta.env.VITE_LOGIN_URL ||
  "https://no-emprendas-solo.vercel.app/login"

/** Navega a la web del login (full-page redirect, no SPA). */
export function goToLogin(): void {
  window.location.href = LOGIN_URL
}
