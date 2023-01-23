import { createClient } from '@supabase/auth-helpers-sveltekit';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
	throw new Error('Supabase public URL and anon key must be set in environment variables');
}

export const supabaseClient = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);
