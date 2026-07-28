-- Cuántos emails ha traído cada pieza de contenido (utm_content), de mayor a
-- menor. Pégala tal cual en el SQL Editor de Supabase y ejecuta.
--
-- "(sin utm_content)" agrupa el tráfico directo o sin parámetros — no lo
-- descarta, para que el total de la tabla siga cuadrando con el total real
-- de altas.
select
  coalesce(utm_content, '(sin utm_content)') as utm_content,
  utm_medium,
  utm_campaign,
  count(*) as emails
from public.waitlist
group by utm_content, utm_medium, utm_campaign
order by emails desc;
