-- ─────────────────────────────────────────────────────────────────────────────
-- Ciclo de vida de la lista de espera: bienvenida → seguimientos → invitación.
--
-- Hasta ahora `waitlist` solo guardaba la captación. Esto añade el rastro de
-- QUÉ email se le ha mandado a cada persona, para que:
--   · reintentar un envío nunca duplique correos (idempotencia por (id, kind))
--   · el cron de seguimiento sepa por cuál va cada uno
--   · se pueda dar de baja a alguien sin borrarlo de la lista (RGPD)
-- ─────────────────────────────────────────────────────────────────────────────

alter table public.waitlist
  -- Código de invitación personal, asignado al abrir la cohorte. Es 1-a-1 con
  -- invite_codes.code: así sabemos quién entró con qué sin cruzar tablas.
  add column if not exists invite_code text unique
    references public.invite_codes(code) on delete set null,
  add column if not exists invited_at timestamptz,
  -- Baja voluntaria. No se borra la fila: hay que conservar consent_at como
  -- prueba del consentimiento, y borrarla dejaría reentrar por el formulario.
  add column if not exists unsubscribed_at timestamptz,
  -- Cuántos seguimientos lleva recibidos. Lo mantiene el cron, no el cliente.
  add column if not exists followups_sent integer not null default 0;

do $$ begin
  alter table public.waitlist
    add constraint waitlist_followups_sent_ck check (followups_sent >= 0);
exception when duplicate_object then null; end $$;

-- ─────────────────────────────────────────────────────────────────────────────
-- Registro de envíos
--   kind: 'confirm' | 'confirm_reminder' | 'welcome' | 'followup:1'… | 'invite'
--   La PK compuesta es la garantía de idempotencia: si el cron se ejecuta dos
--   veces (o Resend tarda y reintentamos), el segundo insert choca y no se
--   manda nada. Por eso se inserta ANTES de llamar a Resend.
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.waitlist_emails (
  waitlist_id uuid        not null references public.waitlist(id) on delete cascade,
  kind        text        not null,
  sent_at     timestamptz not null default now(),
  provider_id text,
  primary key (waitlist_id, kind)
);

alter table public.waitlist_emails enable row level security;
-- Sin políticas a propósito: contiene el rastro de contacto de cada persona,
-- solo el service_role (Edge Functions) la toca.

-- El cron pide "confirmados, sin invitar, no dados de baja, por orden de cola".
create index if not exists waitlist_pending_followup_idx
  on public.waitlist (queue_number)
  where confirmed = true and invited_at is null and unsubscribed_at is null;

-- El recordatorio de confirmación pide "sin confirmar, por antigüedad".
create index if not exists waitlist_unconfirmed_idx
  on public.waitlist (created_at)
  where confirmed = false and unsubscribed_at is null;
