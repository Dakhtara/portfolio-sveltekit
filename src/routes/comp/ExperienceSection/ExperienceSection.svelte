<script lang="ts">
	import HeadingSectionAnimation from '../HeadingSectionAnimation.svelte';
	import Experience from './Experience.svelte';
	import * as m from '$lib/paraglide/messages';

	const experiences = [
		{
			title: 'Senior Developer Front-end',
			company: 'Zei',
			period: m.loose_least_cow_cry(),
			location: m.stock_heroic_gibbon_push(),
			description: m.that_tense_shrimp_aspire()
		},
		{
			title: 'Full-Stack Developer',
			company: 'Farmitoo',
			period: m.tiny_nice_moose_dial(),
			location: m.stock_heroic_gibbon_push(),
			description: m.dirty_awful_orangutan_pride()
		},
		{
			title: 'Frontend Developer',
			company: 'Codes Rousseau',
			period: m.loose_safe_kitten_believe(),
			location: m.lucky_just_frog_clasp(),
			description:
				m.misty_frail_monkey_care()
		},
		{
			title: 'Full-Stack Developer',
			company: 'Digital Garden',
			period: m.sweet_topical_puffin_smile(),
			location: 'Nantes',
			description:
				m.least_quick_cat_devour()
		},
		{
			title: 'Full-Stack Developer',
			company: '37 Deux',
			period: m.kind_any_stingray_lock(),
			location: "Les Sables d'Olonne",
			description:
				m.grassy_tiny_bulldog_lift()
		}
	];
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-4xl">
		<HeadingSectionAnimation
			heading={m.misty_spry_cow_trip()}
			subheading={m.heroic_busy_jurgen_hope()}
		/>

		<div class="space-y-6">
			{#each experiences as experience}
				<Experience {...experience} />
			{/each}
		</div>
	</div>
</section>
