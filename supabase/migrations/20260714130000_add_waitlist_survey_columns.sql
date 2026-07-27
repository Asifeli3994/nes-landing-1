-- Adds the 6-question admission survey fields to waitlist, so the whole
-- form can be saved in a single insert instead of email-only.

alter table public.waitlist
  add column if not exists name text,
  add column if not exists current_project text,
  add column if not exists project_phase text
    check (project_phase is null or project_phase in ('idea', 'building', 'users')),
  add column if not exists expectations text,
  add column if not exists hours_per_week text
    check (hours_per_week is null or hours_per_week in ('<5', '5-15', '>15'));
