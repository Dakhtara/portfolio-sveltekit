<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Project from './Project.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Homepage/Project',
		component: Project,
		tags: ['autodocs'],
		argTypes: {
			title: {
				control: 'text',
				description: 'Titre du projet'
			},
			description: {
				control: 'text',
				description: 'Description du projet (supporte les retours à la ligne avec \\n)'
			},
			tags: {
				control: 'object',
				description: 'Liste des technologies/tags du projet'
			},
			src: {
				control: 'text',
				description: 'URL de l\'image du projet'
			}
		}
	});
</script>

<!-- Projet par défaut -->
<Story
	name="Default"
	args={{
		title: 'Portfolio Personnel',
		description: 'Site web portfolio moderne et responsive construit avec SvelteKit.\nIntégration d\'animations GSAP et optimisation des performances.',
		tags: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'GSAP'],
		src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
	}}
/>

<!-- E-commerce -->
<Story
	name="E-commerce"
	args={{
		title: 'Plateforme E-commerce',
		description: 'Application e-commerce complète avec panier, paiement et gestion des commandes.\nInterface admin pour la gestion des produits et des stocks.',
		tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
		src: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop'
	}}
/>

<!-- Application SaaS -->
<Story
	name="SaaS Application"
	args={{
		title: 'CRM SaaS',
		description: 'Solution CRM cloud pour PME avec gestion des contacts et pipeline de ventes.\nTableau de bord analytique en temps réel.',
		tags: ['Vue.js', 'Firebase', 'TypeScript', 'Chart.js'],
		src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
	}}
/>

<!-- Application mobile -->
<Story
	name="Mobile App"
	args={{
		title: 'Application de Fitness',
		description: 'Application mobile de suivi d\'entraînement et de nutrition.\nSynchronisation cross-platform et mode hors ligne.',
		tags: ['React Native', 'TypeScript', 'SQLite', 'Redux Toolkit'],
		src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop'
	}}
/>

<!-- Projet avec peu de tags -->
<Story
	name="Few Tags"
	args={{
		title: 'Blog Minimaliste',
		description: 'Blog personnel avec système de markdown et optimisation SEO.',
		tags: ['Astro', 'TypeScript'],
		src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop'
	}}
/>

<!-- Projet avec beaucoup de tags -->
<Story
	name="Many Tags"
	args={{
		title: 'Plateforme de Streaming',
		description: 'Service de streaming vidéo avec lecteur personnalisé.\nArchitecture microservices et CDN pour la diffusion mondiale.',
		tags: [
			'Next.js',
			'Node.js',
			'PostgreSQL',
			'Redis',
			'Docker',
			'Kubernetes',
			'AWS',
			'TypeScript',
			'GraphQL',
			'WebSocket'
		],
		src: 'https://images.unsplash.com/photo-1574267432644-f610fa1d0679?w=800&h=400&fit=crop'
	}}
/>

<!-- Projet avec titre long -->
<Story
	name="Long Title"
	args={{
		title: 'Système de Gestion de Ressources Humaines Complet',
		description: 'Solution RH tout-en-un pour la gestion des employés, congés et paie.',
		tags: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
		src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop'
	}}
/>

<!-- Projet avec description longue -->
<Story
	name="Long Description"
	args={{
		title: 'Réseau Social Professionnel',
		description: 'Plateforme de networking professionnel avec système de messagerie en temps réel.\nFil d\'actualité personnalisé basé sur les intérêts.\nGestion de profils détaillés avec CV et portfolio intégrés.\nSystème de recommandations d\'emploi intelligent.\nIntégration avec les principales plateformes de recrutement.',
		tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'ElasticSearch'],
		src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop'
	}}
/>

<!-- Grille de projets multiples -->
<Story name="Multiple Projects">
    {#snippet template()}
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
		<Project
			title="Portfolio Personnel"
			description="Site web portfolio moderne et responsive.\nAnimations et optimisation des performances."
			tags={['SvelteKit', 'TypeScript', 'TailwindCSS']}
			src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
		/>
		<Project
			title="E-commerce"
			description="Plateforme de vente en ligne complète.\nPaiement sécurisé et gestion des stocks."
			tags={['React', 'Node.js', 'Stripe']}
			src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop"
		/>
		<Project
			title="CRM SaaS"
			description="Solution CRM cloud pour PME.\nGestion des contacts et analytics."
			tags={['Vue.js', 'Firebase', 'TypeScript']}
			src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
		/>
		<Project
			title="Application Mobile"
			description="App de fitness avec suivi d'entraînement.\nMode hors ligne et synchronisation."
			tags={['React Native', 'SQLite']}
			src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop"
		/>
		<Project
			title="Blog Personnel"
			description="Blog minimaliste avec markdown.\nOptimisé pour le SEO."
			tags={['Astro', 'TypeScript']}
			src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop"
		/>
		<Project
			title="Dashboard Analytics"
			description="Tableau de bord avec visualisations.\nMise à jour en temps réel."
			tags={['React', 'D3.js', 'WebSocket']}
			src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
		/>
	</div>
    {/snippet}
</Story>
