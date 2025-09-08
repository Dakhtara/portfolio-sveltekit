<script lang="ts">
	import HeadingSectionAnimation from '../HeadingSectionAnimation.svelte';
	import BeyondCodeCard from './BeyondCodeCard.svelte';
	import * as m from '$lib/paraglide/messages';
	const interests = [
		{
			title: 'CrossFit',
			description: m.slimy_raw_lynx_conquer(),
			icon: '🏋️'
		},
		{
			title: m.misty_crisp_zebra_hack(),
			description: m.hour_each_ocelot_aspire(),
			icon: '🎵'
		},
		{
			title: 'Gaming',
			description: m.awful_salty_husky_snip(),
			icon: '🎮'
		}
	];
</script>

<section class="px-6 py-25">
	<div class="mx-auto max-w-4xl">
		<HeadingSectionAnimation
			heading={m.gaudy_known_panda_view()}
			subheading={m.neat_fuzzy_emu_feast()}
		/>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each interests as interest, index}
				<BeyondCodeCard {...interest} />
			{/each}
		</div>
	</div>
</section>
