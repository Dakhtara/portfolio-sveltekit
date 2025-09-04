<script lang="ts">
	import Experience from './Experience.svelte';

	const experiences = [
		{
			title: 'Senior Developer',
			company: 'Zei',
			period: 'Sept 2023 - Aujourd\'hui',
			location: 'Paris - Full Télétravail',
			description: 'Entreprise facilitant la RSE pour tous.\n Développement de l\'application et le site vitrine.\n SAAS pour les entreprises afin de gérer leur référentiels et indicateurs.\n Le site tourne sous Symfony et React  hybride.'
		},
		{
			title: 'Développeur Full-Stack',
			company: 'Farmitoo',
			period: 'Décembre 2021 - Mai 2023',
			location: 'Paris - Full Télétravail',
			description: 'Farmitoo est une plateforme de vente en ligne de produits agricoles. En renforcement dans l\'équipe technique, j\'ai pu intervenir sur plusieurs aspects du site. Que ce soit pour l\'espace partenaire ou pour la partie shop.\r J\'ai aussi contribué à faire évoluer le code existant.'
		},
		{
			title: 'Frontend Developer',
			company: 'Codes Rousseau',
			period: 'Aout 2018 - Novembre 2021',
			location: 'Les Sables d\'Olonne - Hybride',
			description: "Easysystème est le produit central chez Codes Rousseau, il gère les auto-écoles adhérentes, gère les abonnements et crédits des auto-ecoles, propose les séries de code aux élèves.\rCe produit existant depuis plusieurs années et dans le besoin d'orienter le site vers une API, une grande partie du projet a du être revu dans ces principes.\rPlusieurs composants Symfony ont été ajoutés afin de moderniser l'ensemble."
		},
        {
            title: "Développeur Full-Stack",
            company: "Digital Garden",
            period: "Aout 2017 - Juillet 2018",
            location: "Nantes",
            description: "Création d'API sous Symfony 2/3 avec Front-End sous VueJS et Angular (2+).\rCréation de sites vitrine et sites de contact pour différents clients externe"
        },
        {
            title: "Développeur Full-Stack",
            company: "37 Deux",
            period: "Janvier 2016 - Mai 2017",
            location: "Les Sables d'Olonne",
            description: "Création et maintenance de sites internet sous Symfony 2.\rMigration du site voyagebohemechic de Wordpress vers Symfony 2.\rDéveloppement d'une solution e-commerce en interne sous Symfony."
        }
	];
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-4xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Experiences</h2>
			<p class="text-lg text-white/60">Mon parcours dans la création de projets web</p>
		</div>

		<div class="space-y-6">
			{#each experiences as experience}
				<Experience {...experience} />
			{/each}
		</div>
	</div>
</section>
