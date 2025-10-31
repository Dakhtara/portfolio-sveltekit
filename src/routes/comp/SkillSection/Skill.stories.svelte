<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Skill from './Skill.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Homepage/Skill',
		component: Skill,
		tags: ['autodocs'],
		argTypes: {
			title: {
				control: 'text',
				description: 'Nom de la compétence'
			},
			level: {
				control: { type: 'range', min: 0, max: 100, step: 5 },
				description: 'Niveau de maîtrise en pourcentage (0-100)'
			}
		}
	});
</script>

<!-- Compétence par défaut -->
<Story
	name="Default"
	args={{
		title: 'JavaScript',
		level: 90
	}}
/>

<!-- Compétence experte -->
<Story
	name="Expert Level"
	args={{
		title: 'TypeScript',
		level: 95
	}}
/>

<!-- Compétence avancée -->
<Story
	name="Advanced Level"
	args={{
		title: 'React',
		level: 85
	}}
/>

<!-- Compétence intermédiaire -->
<Story
	name="Intermediate Level"
	args={{
		title: 'Vue.js',
		level: 70
	}}
/>

<!-- Compétence débutante -->
<Story
	name="Beginner Level"
	args={{
		title: 'Rust',
		level: 40
	}}
/>

<!-- Compétence en apprentissage -->
<Story
	name="Learning"
	args={{
		title: 'Go',
		level: 25
	}}
/>

<!-- Compétence niveau 100% -->
<Story
	name="Perfect Score"
	args={{
		title: 'HTML/CSS',
		level: 100
	}}
/>

<!-- Compétence avec nom long -->
<Story
	name="Long Skill Name"
	args={{
		title: 'PostgreSQL & Base de données relationnelles',
		level: 80
	}}
/>

<!-- Liste de compétences multiples -->
<Story name="Multiple Skills - Frontend">
    {#snippet template(args)}
	<div class="space-y-6 max-w-2xl">
		<Skill title="JavaScript" level={95} />
		<Skill title="TypeScript" level={90} />
		<Skill title="React" level={85} />
		<Skill title="SvelteKit" level={90} />
		<Skill title="Vue.js" level={75} />
		<Skill title="HTML/CSS" level={95} />
		<Skill title="TailwindCSS" level={90} />
	</div>
    {/snippet}
</Story>

<!-- Liste de compétences Backend -->
<Story name="Multiple Skills - Backend">
    {#snippet template(args)}
	<div class="space-y-6 max-w-2xl">
		<Skill title="Node.js" level={90} />
		<Skill title="Python" level={80} />
		<Skill title="PostgreSQL" level={85} />
		<Skill title="MongoDB" level={75} />
		<Skill title="Docker" level={80} />
		<Skill title="Redis" level={70} />
		<Skill title="GraphQL" level={75} />
	</div>
    {/snippet}
</Story>

<!-- Liste de compétences variées -->
<Story name="Multiple Skills - Mixed Levels">
    {#snippet template(args)}
	<div class="space-y-6 max-w-2xl">
		<Skill title="JavaScript/TypeScript" level={95} />
		<Skill title="SvelteKit" level={90} />
		<Skill title="React" level={85} />
		<Skill title="Node.js" level={88} />
		<Skill title="PostgreSQL" level={80} />
		<Skill title="Docker" level={75} />
		<Skill title="AWS" level={65} />
		<Skill title="Kubernetes" level={50} />
		<Skill title="Rust" level={35} />
		<Skill title="Machine Learning" level={25} />
	</div>
    {/snippet}
</Story>
