<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Article from './Article.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Homepage/Article',
		component: Article,
		tags: ['autodocs'],
		argTypes: {
			title: {
				control: 'text',
				description: 'Titre de l\'article'
			},
			description: {
				control: 'text',
				description: 'Description de l\'article'
			},
			date: {
				control: 'text',
				description: 'Date de publication (format ISO)'
			},
			readTime: {
				control: 'text',
				description: 'Temps de lecture estimé'
			},
			slug: {
				control: 'text',
				description: 'Slug de l\'article pour l\'URL'
			}
		}
	});
</script>

<!-- Article par défaut avec données exemple -->
<Story
	name="Default"
	args={{
		title: 'Comment créer une table des matières élégante',
		description: 'Découvrez comment créer une table des matières interactive et responsive pour vos articles avec Svelte et TypeScript.',
		date: '2024-03-15',
		readTime: '5 min de lecture',
		slug: 'table-of-content-how-to-make-a-nice-one'
	}}
/>

<!-- Article avec titre long -->
<Story
	name="Long Title"
	args={{
		title: 'Guide complet pour optimiser les performances de votre application SvelteKit avec des techniques avancées',
		description: 'Un guide approfondi sur l\'optimisation des performances dans SvelteKit.',
		date: '2024-03-20',
		readTime: '12 min de lecture',
		slug: 'optimisation-sveltekit-guide-complet'
	}}
/>

<!-- Article avec description courte -->
<Story
	name="Short Description"
	args={{
		title: 'Introduction à Astro',
		description: 'Qu\'est-ce qu\'Astro et pourquoi l\'utiliser ?',
		date: '2024-01-10',
		readTime: '3 min de lecture',
		slug: 'astro-cest-quoi'
	}}
/>

<!-- Article récent -->
<Story
	name="Recent Article"
	args={{
		title: 'Les nouveautés de Svelte 5',
		description: 'Explorez les nouvelles fonctionnalités et améliorations apportées par Svelte 5, incluant les runes et la nouvelle API de réactivité.',
		date: '2024-10-28',
		readTime: '8 min de lecture',
		slug: 'svelte-5-nouveautes'
	}}
/>

<!-- Liste d'articles -->
<Story name="Multiple Articles">
    {#snippet template()}
	<div class="space-y-4 max-w-4xl">
		<Article
			title="CSS Grid : Le guide complet"
			description="Maîtrisez CSS Grid avec ce guide pratique et des exemples concrets."
			date="2024-02-15"
			readTime="10 min de lecture"
			slug="css-grid"
		/>
		<Article
			title="Notifications push avec ntfy et SvelteKit"
			description="Implémentez un système de notifications push simple et efficace."
			date="2024-03-01"
			readTime="7 min de lecture"
			slug="ntfy-sveltekit"
		/>
		<Article
			title="Table des matières interactive"
			description="Créez une table des matières élégante pour vos articles."
			date="2024-03-15"
			readTime="5 min de lecture"
			slug="table-of-content"
		/>
	</div>
    {/snippet}
</Story>
