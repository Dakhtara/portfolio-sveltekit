<script lang="ts">
	import HeadingSectionAnimation from '../HeadingSectionAnimation.svelte';
	import Article from './Article.svelte';
	import * as m from '$lib/paraglide/messages';
	let { articles } = $props();
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-4xl">
		<HeadingSectionAnimation
			heading={m.orange_frail_ray_pull()}
			subheading={m.awake_wacky_grebe_roam()}
		/>
		<div class="space-y-4">
			{#each articles as article}
				<Article {...article} />
			{/each}
		</div>
	</div>
</section>
