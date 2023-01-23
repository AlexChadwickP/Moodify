<script lang="ts">
	import { supabaseClient } from '$lib/sb';

	let emailAddress = '';

	const login = async () => {
		await supabaseClient.auth.signInWithOtp({ email: emailAddress });
	};
</script>

<div class="bg-purple-900 h-screen w-full flex items-center justify-center">
	<div class="bg-white p-10 rounded-lg shadow-md">
		<p class="uppercase text-2xl font-extrabold">Log in</p>
		<label class="block text-sm uppercase font-bold">
			Email
			<input
				type="email"
				bind:value={emailAddress}
				class="block border border-black rounded-lg px-2 py-1 text-base font-normal"
			/>
		</label>
		<button
			class="mt-4 px-4 py-2 border border-black rounded-lg hover:bg-purple-100"
			on:click={login}>Log In</button
		>
	</div>
</div>
