<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import BeyondCodeCard from './BeyondCodeCard.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Homepage/BeyondCodeCard',
		component: BeyondCodeCard,
		tags: ['autodocs'],
		argTypes: {
			icon: {
				control: 'text',
				description: 'Icône emoji ou caractère pour la carte'
			},
			title: {
				control: 'text',
				description: 'Titre de la carte'
			},
			description: {
				control: 'text',
				description: 'Description du contenu de la carte'
			}
		}
	});
</script>

<!-- Carte par défaut avec icône sport -->
<Story
	name="Default"
	args={{
		icon: '🏃',
		title: 'Sport & Bien-être',
		description: 'Passionné de course à pied et de fitness, je crois en l\'importance de l\'équilibre entre corps et esprit.'
	}}
/>

<!-- Carte avec icône lecture -->
<Story
	name="Reading"
	args={{
		icon: '📚',
		title: 'Lecture & Apprentissage',
		description: 'Toujours à la recherche de nouvelles connaissances à travers les livres et articles techniques.'
	}}
/>

<!-- Carte avec icône musique -->
<Story
	name="Music"
	args={{
		icon: '🎵',
		title: 'Musique',
		description: 'Amateur de musique électronique et de jazz, la musique accompagne mes sessions de code.'
	}}
/>

<!-- Carte avec icône voyage -->
<Story
	name="Travel"
	args={{
		icon: '✈️',
		title: 'Voyages & Découvertes',
		description: 'Explorer de nouveaux horizons et cultures pour élargir ma perspective du monde.'
	}}
/>

<!-- Carte avec icône jeux vidéo -->
<Story
	name="Gaming"
	args={{
		icon: '🎮',
		title: 'Jeux Vidéo',
		description: 'Passionné de gaming, j\'apprécie les jeux qui racontent des histoires captivantes.'
	}}
/>

<!-- Carte avec titre long -->
<Story
	name="Long Title"
	args={{
		icon: '🎨',
		title: 'Design & Créativité Artistique',
		description: 'La créativité ne se limite pas au code, l\'art et le design font aussi partie de mon quotidien.'
	}}
/>

<!-- Carte avec description longue -->
<Story
	name="Long Description"
	args={{
		icon: '🌱',
		title: 'Écologie',
		description: 'Engagé pour un avenir durable, je m\'efforce d\'adopter des pratiques éco-responsables dans ma vie quotidienne et professionnelle. Chaque petit geste compte pour préserver notre planète.'
	}}
/>

<!-- Grille de cartes multiples -->
<Story name="Multiple Cards">
    {#snippet template()}    
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
		<BeyondCodeCard
			icon="🏃"
			title="Sport & Bien-être"
			description="Passionné de course à pied et de fitness pour maintenir un équilibre."
		/>
		<BeyondCodeCard
			icon="📚"
			title="Lecture"
			description="Toujours à la recherche de nouvelles connaissances."
		/>
		<BeyondCodeCard
			icon="🎵"
			title="Musique"
			description="La musique accompagne mes sessions de code."
		/>
		<BeyondCodeCard
			icon="✈️"
			title="Voyages"
			description="Explorer de nouveaux horizons et cultures."
		/>
		<BeyondCodeCard
			icon="🎮"
			title="Gaming"
			description="Amateur de jeux vidéo avec des histoires captivantes."
		/>
		<BeyondCodeCard
			icon="🎨"
			title="Créativité"
			description="L'art et le design font partie de mon quotidien."
		/>
	</div>
    {/snippet}
</Story>
