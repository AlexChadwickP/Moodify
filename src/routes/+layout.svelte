<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import { supabaseClient } from '$lib/sb';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';
	import '../app.css';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

{#if $page.data.session}
	<Navbar />
{/if}
<slot />
