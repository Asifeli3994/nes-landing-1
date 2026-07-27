-- These are SECURITY DEFINER helper functions meant to run only as part of
-- the waitlist triggers. Being in the public schema, PostgREST exposes them
-- as callable RPC endpoints by default. Revoke that so they can't be invoked
-- directly by anon/authenticated over the API.

revoke execute on function public.generate_waitlist_ref_code() from public, anon, authenticated;
revoke execute on function public.waitlist_before_insert_or_update() from public, anon, authenticated;
revoke execute on function public.waitlist_assign_queue_number() from public, anon, authenticated;
