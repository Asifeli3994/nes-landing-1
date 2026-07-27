-- Waitlist table for NoEmprendasSolo (NES) pre-launch landing.
-- Captures public email signups, assigns a queue position on double opt-in
-- confirmation, and tracks referrals via short ref codes.

create extension if not exists pgcrypto;

-- Dedicated sequence used to assign queue_number atomically on confirmation.
-- nextval() is guaranteed race-free across concurrent transactions, which is
-- why confirmation uses this instead of a SELECT MAX(queue_number)+1 pattern.
create sequence if not exists public.waitlist_queue_number_seq
  start 1
  increment 1;

create table if not exists public.waitlist (
  id            uuid primary key default gen_random_uuid(),
  email         text not null,
  created_at    timestamptz not null default now(),
  queue_number  integer unique,
  ref_code      text not null unique
                  check (ref_code ~ '^[A-Za-z0-9]{6,8}$'),
  referred_by   text,
  source        text,
  consent_at    timestamptz not null,
  confirmed     boolean not null default false,
  confirmed_at  timestamptz
);

-- Case-insensitive uniqueness on email (email is also normalized to
-- lowercase by trigger before every insert/update, this index is defense
-- in depth against any row written outside that path).
create unique index if not exists waitlist_email_lower_idx
  on public.waitlist (lower(email));

-- Count referrals per person.
create index if not exists waitlist_referred_by_idx
  on public.waitlist (referred_by);

-- Order by queue position (already backed by the UNIQUE constraint's
-- implicit btree index, kept explicit here for discoverability).
create index if not exists waitlist_queue_number_idx
  on public.waitlist (queue_number);

-- ---------------------------------------------------------------------
-- ref_code generation
-- ---------------------------------------------------------------------

-- SECURITY DEFINER so the uniqueness lookup inside works even when called
-- from the BEFORE INSERT trigger during a public (anon) insert, which only
-- has INSERT privilege on the table, not SELECT.
create or replace function public.generate_waitlist_ref_code()
returns text
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  alphabet   text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; -- no 0/O/1/I to avoid ambiguity
  code       text;
  code_len   int;
  i          int;
  attempts   int := 0;
begin
  loop
    code_len := 6 + floor(random() * 3)::int; -- 6 to 8 chars
    code := '';
    for i in 1..code_len loop
      code := code || substr(alphabet, floor(random() * length(alphabet))::int + 1, 1);
    end loop;

    exit when not exists (
      select 1 from public.waitlist w where w.ref_code = code
    );

    attempts := attempts + 1;
    if attempts > 20 then
      raise exception 'Could not generate a unique ref_code after % attempts', attempts;
    end if;
  end loop;

  return code;
end;
$$;

create or replace function public.waitlist_before_insert_or_update()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  new.email := lower(trim(new.email));

  if new.ref_code is null or length(trim(new.ref_code)) = 0 then
    new.ref_code := public.generate_waitlist_ref_code();
  end if;

  return new;
end;
$$;

drop trigger if exists trg_waitlist_before_insert_or_update on public.waitlist;
create trigger trg_waitlist_before_insert_or_update
  before insert or update on public.waitlist
  for each row
  execute function public.waitlist_before_insert_or_update();

-- ---------------------------------------------------------------------
-- Atomic queue_number assignment on first confirmation
-- ---------------------------------------------------------------------

create or replace function public.waitlist_assign_queue_number()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if new.confirmed = true and coalesce(old.confirmed, false) = false then
    if new.queue_number is null then
      new.queue_number := nextval('public.waitlist_queue_number_seq');
    end if;
    if new.confirmed_at is null then
      new.confirmed_at := now();
    end if;
  end if;

  return new;
end;
$$;

drop trigger if exists trg_waitlist_assign_queue_number on public.waitlist;
create trigger trg_waitlist_assign_queue_number
  before update on public.waitlist
  for each row
  when (new.confirmed is distinct from old.confirmed)
  execute function public.waitlist_assign_queue_number();

-- ---------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------

alter table public.waitlist enable row level security;

-- Public landing can insert a signup, but cannot set itself as already
-- confirmed or claim a queue position/confirmation time directly.
create policy "waitlist_public_insert"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (
    confirmed = false
    and queue_number is null
    and confirmed_at is null
  );

-- No select/update/delete policies: only the service role (which bypasses
-- RLS) can read, confirm, or remove rows.
grant insert on public.waitlist to anon, authenticated;
