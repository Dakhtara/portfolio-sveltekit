<script lang="ts">
	import ListArticles from '$lib/articles/ListArticles';
	import HeadingSectionAnimation from '../HeadingSectionAnimation.svelte';
	import Article from './Article.svelte';

	let { articles } = $props();
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-4xl">
		<HeadingSectionAnimation heading="Articles récents" subheading="Découvrez mes derniers articles sur le développement web et les technologies." />
		<div class="space-y-4">
			{#each articles as article}
				<Article {...article} />
			{/each}
		</div>
	</div>
</section>
