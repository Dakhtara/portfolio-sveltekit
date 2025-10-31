<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TableOfContent from './TableOfContent.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Articles/TableOfContent',
		component: TableOfContent,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen',
			docs: {
				description: {
					component:
						'Table des matières interactive qui s\'adapte au scroll et propose une version mobile avec un bouton flottant.'
				}
			}
		},
		argTypes: {
			markdown: {
				control: 'text',
				description: 'Contenu HTML/Markdown avec des titres (h1-h6) pour générer la table des matières'
			}
		}
	});

	const simpleMarkdown = `
		<h1 id="introduction">Introduction</h1>
		<h2 id="getting-started">Getting Started</h2>
		<h2 id="installation">Installation</h2>
		<h3 id="prerequisites">Prerequisites</h3>
		<h3 id="setup">Setup</h3>
		<h2 id="usage">Usage</h2>
		<h2 id="conclusion">Conclusion</h2>
	`;

	const complexMarkdown = `
		<h1 id="guide-complet-sveltekit">Guide complet SvelteKit</h1>
		<h2 id="introduction">Introduction</h2>
		<h3 id="pourquoi-sveltekit">Pourquoi SvelteKit ?</h3>
		<h3 id="prerequisites">Prérequis</h3>
		<h2 id="installation">Installation</h2>
		<h3 id="creation-projet">Création du projet</h3>
		<h4 id="npm">Avec npm</h4>
		<h4 id="pnpm">Avec pnpm</h4>
		<h3 id="structure-projet">Structure du projet</h3>
		<h2 id="routing">Routing</h2>
		<h3 id="routes-statiques">Routes statiques</h3>
		<h3 id="routes-dynamiques">Routes dynamiques</h3>
		<h4 id="paramètres">Paramètres</h4>
		<h4 id="groupes">Groupes de routes</h4>
		<h2 id="data-loading">Data Loading</h2>
		<h3 id="page-data">Page Data</h3>
		<h3 id="layout-data">Layout Data</h3>
		<h2 id="forms">Formulaires</h2>
		<h3 id="form-actions">Form Actions</h3>
		<h3 id="validation">Validation</h3>
		<h2 id="deployment">Déploiement</h2>
		<h3 id="adapters">Adapters</h3>
		<h3 id="optimisation">Optimisation</h3>
		<h2 id="conclusion">Conclusion</h2>
	`;

	const blogPostMarkdown = `
		<h1 id="comment-créer-une-table-des-matières">Comment créer une table des matières élégante</h1>
		<h2 id="introduction">Introduction</h2>
		<h2 id="les-avantages">Les avantages d'une table des matières</h2>
		<h3 id="navigation-rapide">Navigation rapide</h3>
		<h3 id="meilleure-ux">Meilleure expérience utilisateur</h3>
		<h3 id="seo">Amélioration du SEO</h3>
		<h2 id="implementation">Implémentation</h2>
		<h3 id="parsing-markdown">Parser le markdown</h3>
		<h3 id="génération-ids">Génération des IDs</h3>
		<h3 id="scroll-spy">Scroll Spy</h3>
		<h4 id="intersection-observer">Intersection Observer API</h4>
		<h4 id="highlight-active">Mise en évidence de la section active</h4>
		<h2 id="responsive-design">Design Responsive</h2>
		<h3 id="version-desktop">Version Desktop</h3>
		<h3 id="version-mobile">Version Mobile</h3>
		<h4 id="bouton-flottant">Bouton flottant</h4>
		<h4 id="drawer-bottom">Drawer depuis le bas</h4>
		<h2 id="conclusion">Conclusion</h2>
	`;

	const shortMarkdown = `
		<h1 id="quick-guide">Quick Guide</h1>
		<h2 id="step-1">Step 1</h2>
		<h2 id="step-2">Step 2</h2>
		<h2 id="step-3">Step 3</h2>
	`;

	const deepNestingMarkdown = `
		<h1 id="titre-principal">Titre principal</h1>
		<h2 id="section-1">Section 1</h2>
		<h3 id="sous-section-1-1">Sous-section 1.1</h3>
		<h4 id="detail-1-1-1">Détail 1.1.1</h4>
		<h5 id="sous-detail-1-1-1-1">Sous-détail 1.1.1.1</h5>
		<h6 id="note-1-1-1-1-1">Note 1.1.1.1.1</h6>
		<h4 id="detail-1-1-2">Détail 1.1.2</h4>
		<h3 id="sous-section-1-2">Sous-section 1.2</h3>
		<h2 id="section-2">Section 2</h2>
		<h3 id="sous-section-2-1">Sous-section 2.1</h3>
		<h4 id="detail-2-1-1">Détail 2.1.1</h4>
	`;
</script>

<!-- Table des matières simple -->
<Story name="Simple" args={{ markdown: simpleMarkdown }}>
	{#snippet template(args)}
		<div class="flex gap-8 p-8">
			<TableOfContent {...args} />
			<div class="flex-1">
				<div class="prose prose-invert max-w-none">
					<h1 id="introduction">Introduction</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>

					<h2 id="getting-started">Getting Started</h2>
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.
					</p>

					<h2 id="installation">Installation</h2>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

					<h3 id="prerequisites">Prerequisites</h3>
					<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>

					<h3 id="setup">Setup</h3>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>

					<h2 id="usage">Usage</h2>
					<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>

					<h2 id="conclusion">Conclusion</h2>
					<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<!-- Table des matières complexe avec imbrication -->
<Story name="Complex Nesting" args={{ markdown: complexMarkdown }}>
	{#snippet template(args)}
		<div class="flex gap-8 p-8">
			<TableOfContent {...args} />
			<div class="flex-1">
				<div class="prose prose-invert max-w-none">
					<h1 id="guide-complet-sveltekit">Guide complet SvelteKit</h1>
					<p>Un guide complet pour démarrer avec SvelteKit.</p>

					<h2 id="introduction">Introduction</h2>
					<p>Découvrez les bases de SvelteKit.</p>

					<h3 id="pourquoi-sveltekit">Pourquoi SvelteKit ?</h3>
					<p>Les avantages de SvelteKit par rapport aux autres frameworks.</p>

					<h3 id="prerequisites">Prérequis</h3>
					<p>Ce dont vous avez besoin avant de commencer.</p>

					<h2 id="installation">Installation</h2>
					<p>Comment installer SvelteKit sur votre machine.</p>

					<h3 id="creation-projet">Création du projet</h3>
					<p>Plusieurs méthodes pour créer un projet.</p>

					<h4 id="npm">Avec npm</h4>
					<p>Utilisation de npm pour créer le projet.</p>

					<h4 id="pnpm">Avec pnpm</h4>
					<p>Utilisation de pnpm comme alternative.</p>

					<h2 id="routing">Routing</h2>
					<p>Comprendre le système de routing de SvelteKit.</p>

					<h2 id="conclusion">Conclusion</h2>
					<p>Résumé et prochaines étapes.</p>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<!-- Article de blog -->
<Story name="Blog Post" args={{ markdown: blogPostMarkdown }}>
	{#snippet template(args)}
		<div class="flex gap-8 p-8">
			<TableOfContent {...args} />
			<div class="flex-1">
				<div class="prose prose-invert max-w-none">
					<h1 id="comment-créer-une-table-des-matières">
						Comment créer une table des matières élégante
					</h1>
					<p>Un tutoriel complet sur la création d'une table des matières interactive.</p>

					<h2 id="introduction">Introduction</h2>
					<p>
						Les tables des matières sont essentielles pour les longs articles. Elles permettent aux
						lecteurs de naviguer rapidement.
					</p>

					<h2 id="les-avantages">Les avantages d'une table des matières</h2>
					<p>Explorons les bénéfices d'avoir une bonne table des matières.</p>

					<h3 id="navigation-rapide">Navigation rapide</h3>
					<p>Accéder instantanément à la section désirée.</p>

					<h3 id="meilleure-ux">Meilleure expérience utilisateur</h3>
					<p>Améliore grandement l'expérience de lecture.</p>

					<h2 id="implementation">Implémentation</h2>
					<p>Comment implémenter techniquement une table des matières.</p>

					<h3 id="parsing-markdown">Parser le markdown</h3>
					<p>Extraction des titres du contenu markdown.</p>

					<h2 id="conclusion">Conclusion</h2>
					<p>Récapitulatif et ressources supplémentaires.</p>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<!-- Table des matières courte -->
<Story name="Short Content" args={{ markdown: shortMarkdown }}>
	{#snippet template(args)}
		<div class="flex gap-8 p-8">
			<TableOfContent {...args} />
			<div class="flex-1">
				<div class="prose prose-invert max-w-none">
					<h1 id="quick-guide">Quick Guide</h1>
					<p>Un guide rapide en 3 étapes.</p>

					<h2 id="step-1">Step 1</h2>
					<p>Première étape du processus.</p>

					<h2 id="step-2">Step 2</h2>
					<p>Deuxième étape à suivre.</p>

					<h2 id="step-3">Step 3</h2>
					<p>Dernière étape pour terminer.</p>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<!-- Imbrication profonde -->
<Story name="Deep Nesting" args={{ markdown: deepNestingMarkdown }}>
	{#snippet template(args)}
		<div class="flex gap-8 p-8">
			<TableOfContent {...args} />
			<div class="flex-1">
				<div class="prose prose-invert max-w-none">
					<h1 id="titre-principal">Titre principal</h1>
					<p>Contenu du titre principal.</p>

					<h2 id="section-1">Section 1</h2>
					<p>Contenu de la section 1.</p>

					<h3 id="sous-section-1-1">Sous-section 1.1</h3>
					<p>Contenu de la sous-section.</p>

					<h4 id="detail-1-1-1">Détail 1.1.1</h4>
					<p>Niveau de détail 4.</p>

					<h5 id="sous-detail-1-1-1-1">Sous-détail 1.1.1.1</h5>
					<p>Niveau de détail 5.</p>

					<h6 id="note-1-1-1-1-1">Note 1.1.1.1.1</h6>
					<p>Niveau de détail maximum.</p>

					<h2 id="section-2">Section 2</h2>
					<p>Contenu de la section 2.</p>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<!-- Version mobile -->
<Story name="Mobile View" args={{ markdown: blogPostMarkdown }}>
	{#snippet template(args)}
		<div class="max-w-md">
			<TableOfContent {...args} />
			<div class="p-4">
				<div class="prose prose-invert max-w-none">
					<h1 id="comment-créer-une-table-des-matières">
						Comment créer une table des matières élégante
					</h1>
					<p>Testez le bouton flottant en bas à droite sur mobile.</p>

					<h2 id="introduction">Introduction</h2>
					<p>Contenu de l'introduction.</p>

					<h2 id="les-avantages">Les avantages d'une table des matières</h2>
					<p>Les bénéfices d'une bonne table des matières.</p>

					<h2 id="implementation">Implémentation</h2>
					<p>Comment l'implémenter techniquement.</p>
				</div>
			</div>
		</div>
	{/snippet}
</Story>
