import { env } from '$env/dynamic/public';
import { createClient } from '@supabase/auth-helpers-sveltekit';

if (!env.PUBLIC_SUPABASE_URL || !env.PUBLIC_SUPABASE_ANON_KEY) {
	throw new Error('Supabase public URL and anon key must be set in environment variables');
}

export const supabaseClient = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);
