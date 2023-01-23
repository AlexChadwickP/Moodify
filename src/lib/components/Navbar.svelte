<script lang="ts">
	import { supabaseClient } from '$lib/sb';

	const logout = async () => {
		await supabaseClient.auth.signOut();
	};
</script>

<div class="absolute w-full bg-white top-0 left-0">
	<nav class="p-2 shadow-md">
		<ul>
			<li><a href="/dashboard">Dashboard</a></li>
			<li><button on:click={logout}>Log out</button></li>
		</ul>
	</nav>
</div>

<style lang="postcss">
	li {
		@apply inline;
	}

	li > * {
		@apply px-4 py-2 rounded-md hover:bg-purple-100;
	}
</style>
