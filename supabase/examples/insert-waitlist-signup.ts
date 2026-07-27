// Reference example only — this repo (nes-landing) is a Vite SPA, not
// Next.js. This shows how the waitlist insert looks as a Next.js 14+
// App Router Server Action, for whichever backend ends up handling the
// public signup form.
//
// app/actions/waitlist.ts
'use server';

import { createClient } from '@supabase/supabase-js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Anon key is enough here: RLS only grants this role INSERT on waitlist.
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export type JoinWaitlistResult =
  | { ok: true }
  | { ok: false; error: string };

export async function joinWaitlist(formData: FormData): Promise<JoinWaitlistResult> {
  const emailRaw = String(formData.get('email') ?? '').trim();
  const consentAccepted = formData.get('consent') === 'on';
  const source = formData.get('source')?.toString() || null;
  const referredBy = formData.get('ref')?.toString() || null;

  if (!EMAIL_RE.test(emailRaw)) {
    return { ok: false, error: 'Email inválido.' };
  }
  if (!consentAccepted) {
    return { ok: false, error: 'Debes aceptar el consentimiento para continuar.' };
  }

  const { error } = await supabase.from('waitlist').insert({
    email: emailRaw.toLowerCase(),
    consent_at: new Date().toISOString(),
    source,
    referred_by: referredBy,
    // ref_code, queue_number, confirmed, confirmed_at are all
    // server-generated/defaulted — never sent from the client.
  });

  if (error) {
    // Unique violation on lower(email) means this address already signed up.
    if (error.code === '23505') {
      return { ok: false, error: 'Este email ya está en la lista de espera.' };
    }
    return { ok: false, error: 'No se pudo guardar el registro, inténtalo de nuevo.' };
  }

  return { ok: true };
}
