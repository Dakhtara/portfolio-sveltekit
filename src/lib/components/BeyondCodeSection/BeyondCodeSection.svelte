<script lang="ts">
	import BeyondCodeCard from './BeyondCodeCard.svelte';

	const interests = [
		{
			title: 'CrossFit',
			description: "Passionné par le sport et l'entraînement à haute intensité.",
			icon: '🏋️'
		},
		{
			title: 'Production musicale',
			description: 'Création de musique électronique et expérimentation avec le design sonore.',
			icon: '🎵'
		},
		{
			title: 'Gaming',
			description: "Des FPS aux RPG, pour la détente et l'évasion.",
			icon: '🎮'
		}
	];
</script>

<section class="px-6 py-25">
	<div class="mx-auto max-w-4xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
				Au-delà du code 🚀
			</h2>
			<p class="text-lg text-white/60">Ce qui me passionne en dehors du code.</p>
		</div>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each interests as interest, index}
				<BeyondCodeCard {...interest} />
			{/each}
		</div>
	</div>
</section>
