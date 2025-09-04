<script lang="ts">
	import HeadingSectionAnimation from '../HeadingSectionAnimation.svelte';
import Skill from './Skill.svelte';

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
		<HeadingSectionAnimation heading="Compétences" subheading="Technologies et compétences que j'utilise régulièrement dans mes projets." />
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each skills as skill}
				<Skill title={skill.title} level={skill.level} />
			{/each}
		</div>
	</div>
</section>
