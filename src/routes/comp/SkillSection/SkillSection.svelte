<script lang="ts">
	import HeadingSectionAnimation from '../HeadingSectionAnimation.svelte';
	import Skill from './Skill.svelte';
	import * as m from '$lib/paraglide/messages';
	let skills = [
		{
			title: 'SvelteKit',
			level: 85
		},
		{
			title: 'Javascript',
			level: 80
		},
		{
			title: 'Node.JS',
			level: 75
		},
		{
			title: 'PHP',
			level: 90
		},
		{
			title: 'Symfony',
			level: 90
		},
		{
			title: 'ThreeJS',
			level: 30
		},
		{
			title: 'Supabase',
			level: 60
		},
		{
			title: 'PostgreSQL',
			level: 70
		}
	];
</script>

<section class="px-6 py-25">
	<div class="mx-auto max-w-4xl">
		<HeadingSectionAnimation
			heading={m.known_crisp_lamb_gaze()}
			subheading={m.hour_polite_okapi_clasp()}
		/>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each skills as skill}
				<Skill title={skill.title} level={skill.level} />
			{/each}
		</div>
	</div>
</section>
