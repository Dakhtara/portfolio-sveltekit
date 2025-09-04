<script lang="ts">
	import ListArticles from '$lib/articles/ListArticles';
	import Article from './Article.svelte';

	let { articles } = $props();
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-4xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
				Articles récents
			</h2>
			<p class="text-lg text-white/60">
				Découvrez mes derniers articles sur le développement web et les technologies.
			</p>
		</div>
		<div class="space-y-4">
			{#each articles as article}
				<Article {...article} />
			{/each}
		</div>
	</div>
</section>
