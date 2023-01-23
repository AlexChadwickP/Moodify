import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const { request } = event;
		const data = await request.formData();
		const rating = data.get('mood_rating');
		const notes = data.get('notes');

		const { session, supabaseClient } = await getSupabase(event);

		if (!session) {
			throw error(403, { message: 'Unauthorised' });
		}

		await supabaseClient
			.from('mood')
			.insert({ rating: parseInt(rating as string), notes, user_id: session.user.id });

		return { success: true };
	}
} satisfies Actions;
