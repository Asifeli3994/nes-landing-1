-- Tracking de qué reel/story/bio de Instagram trae qué alta a la waitlist.
-- Nomenclatura (mantener consistente para que los reportes por utm_content
-- sean comparables entre piezas):
--   utm_source   siempre 'instagram'
--   utm_medium   'reel' | 'story' | 'bio' según el formato
--   utm_campaign nombre de campaña en minúsculas y guiones, ej. 'verano-2026'
--   utm_content  pieza en formato r0NN-tema, ej. 'r047-equipo' — minúsculas
--                y guiones, nunca espacios
-- Nullable: tráfico directo o sin UTM no debe romper el insert.
alter table public.waitlist
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists utm_content text;

comment on column public.waitlist.utm_source is 'Siempre ''instagram'' en la campaña actual.';
comment on column public.waitlist.utm_medium is E'''reel'' | ''story'' | ''bio''.';
comment on column public.waitlist.utm_campaign is 'minúsculas-y-guiones, ej. verano-2026.';
comment on column public.waitlist.utm_content is 'r0NN-tema en minúsculas-y-guiones, ej. r047-equipo.';
