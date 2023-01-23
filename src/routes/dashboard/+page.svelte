<script lang="ts">
	import { supabaseClient } from '$lib/sb';
	import dayjs from 'dayjs';

	let moodHistory = supabaseClient.from('mood').select();
</script>

<div class="mt-16 p-6">
	<h1 class="text-2xl font-extrabold">Dashboard</h1>

	<p>{import.meta.env.DEV}</p>

	<!-- Add entry -->
	<p class="font-extrabold text-gray-500 mt-5 mb-2">Add a new entry!</p>
	<form method="POST">
		<div class="flex space-x-10">
			<div>
				<label class="block text-green-500">
					<input type="radio" name="mood_rating" value="5" />
					Fantastic
				</label>
				<label class="block text-blue-500">
					<input type="radio" name="mood_rating" value="4" />
					Good
				</label>
				<label class="block text-gray-600">
					<input type="radio" name="mood_rating" value="3" />
					Meh
				</label>
				<label class="block text-orange-500">
					<input type="radio" name="mood_rating" value="2" />
					Bad
				</label>
				<label class="block text-red-500">
					<input type="radio" name="mood_rating" value="1" />
					Awful
				</label>
			</div>
			<div>
				<textarea name="notes" class="h-full rounded-md" />
			</div>
		</div>
		<button type="submit" class="rounded-md shadow-sm border border-black px-4 py-2 mt-4"
			>Add entry</button
		>
	</form>

	<div class="mt-10">
		{#await moodHistory}
			<p>Loading moods...</p>
		{:then moods}
			<table class="w-full">
				<thead>
					<tr class="text-left bg-gray-200">
						<th class="w-1/6 px-6 py-4 uppercase text-gray-700 font-bold">EntryDate</th>
						<th class="w-1/6 px-6 py-4 uppercase text-gray-700 font-bold">Mood Rating</th>
						<th class="px-6 py-4 uppercase text-gray-700 font-bold">Notes</th>
					</tr>
				</thead>
				<tbody>
					{#each [...moods.data] as mood}
						<tr class="hover:bg-gray-100">
							<td class="px-6 py-4 text-gray-500"
								>{dayjs(mood.created_at).format('DD/MM/YYYY HH:mm')}</td
							>
							<td class="px-6 py-4 text-gray-500">{mood.rating}</td>
							<td class="px-6 py-4 text-gray-500">{mood.notes}</td>
						</tr>{/each}
				</tbody>
			</table>
		{/await}
	</div>
</div>
