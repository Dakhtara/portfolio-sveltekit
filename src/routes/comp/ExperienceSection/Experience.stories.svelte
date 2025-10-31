<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Experience from './Experience.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Homepage/Experience',
		component: Experience,
		tags: ['autodocs'],
		argTypes: {
			title: {
				control: 'text',
				description: 'Titre du poste'
			},
			company: {
				control: 'text',
				description: 'Nom de l\'entreprise'
			},
			description: {
				control: 'text',
				description: 'Description du poste et des responsabilités (supporte les retours à la ligne avec \\n)'
			},
			period: {
				control: 'text',
				description: 'Période de travail'
			},
			location: {
				control: 'text',
				description: 'Localisation du poste'
			}
		}
	});
</script>

<!-- Expérience par défaut -->
<Story
	name="Default"
	args={{
		title: 'Développeur Full Stack',
		company: 'Tech Innovation Inc.',
		description: 'Développement d\'applications web modernes avec React et Node.js.\nMise en place de CI/CD et optimisation des performances.\nCollaboration avec l\'équipe design pour améliorer l\'UX.',
		period: 'Jan 2023 - Présent',
		location: 'Paris, France'
	}}
/>

<!-- Développeur Senior -->
<Story
	name="Senior Developer"
	args={{
		title: 'Développeur Senior Frontend',
		company: 'Digital Agency',
		description: 'Lead technique sur des projets clients complexes.\nMentorat de développeurs juniors.\nArchitecture et mise en place de design systems.\nOptimisation des performances et accessibilité.',
		period: 'Mars 2021 - Déc 2022',
		location: 'Lyon, France'
	}}
/>

<!-- Développeur Junior -->
<Story
	name="Junior Developer"
	args={{
		title: 'Développeur Web Junior',
		company: 'StartUp Dynamics',
		description: 'Développement de fonctionnalités frontend avec Vue.js.\nParticipation aux code reviews.\nApprentissage des bonnes pratiques de développement.',
		period: 'Sept 2019 - Fév 2021',
		location: 'Remote'
	}}
/>

<!-- Stage -->
<Story
	name="Internship"
	args={{
		title: 'Stage Développeur Web',
		company: 'Web Solutions SARL',
		description: 'Développement de sites vitrines et e-commerce.\nIntégration de maquettes HTML/CSS.\nInitiation aux frameworks JavaScript modernes.',
		period: 'Avr 2019 - Août 2019',
		location: 'Toulouse, France'
	}}
/>

<!-- Poste avec description longue -->
<Story
	name="Long Description"
	args={{
		title: 'Lead Developer & Tech Lead',
		company: 'Enterprise Solutions Corp.',
		description: 'Direction technique d\'une équipe de 8 développeurs sur des projets d\'envergure.\nMise en place de l\'architecture microservices et migration vers le cloud.\nResponsable de la qualité du code et des bonnes pratiques.\nInterface avec les clients pour la définition des besoins techniques.\nFormation et accompagnement des équipes sur les nouvelles technologies.\nVeille technologique et innovation continue.',
		period: 'Jan 2020 - Présent',
		location: 'Paris, France'
	}}
/>

<!-- Freelance -->
<Story
	name="Freelance"
	args={{
		title: 'Développeur Full Stack Freelance',
		company: 'Indépendant',
		description: 'Développement d\'applications web sur mesure pour divers clients.\nConseil et accompagnement technique.\nGestion complète des projets de A à Z.',
		period: '2018 - Présent',
		location: 'Remote / France'
	}}
/>

<!-- Titre long -->
<Story
	name="Long Title"
	args={{
		title: 'Ingénieur Développement Logiciel & Architecte Solutions Cloud',
		company: 'Global Tech Corporation',
		description: 'Conception et développement de solutions cloud natives.\nArchitecture de systèmes distribués à grande échelle.',
		period: 'Jan 2022 - Présent',
		location: 'Paris & Remote'
	}}
/>

<!-- Liste d'expériences multiples -->
<Story name="Multiple Experiences">
    {#snippet template()}
	<div class="space-y-6 max-w-4xl">
		<Experience
			title="Lead Developer"
			company="Tech Innovation Inc."
			description="Direction technique et développement d'applications web complexes.\nMentorat de l'équipe et mise en place des bonnes pratiques.\nArchitecture et scalabilité des solutions."
			period="Jan 2023 - Présent"
			location="Paris, France"
		/>
		<Experience
			title="Développeur Full Stack Senior"
			company="Digital Agency"
			description="Développement frontend et backend sur des projets clients.\nOptimisation des performances et SEO.\nIntégration continue et déploiement automatisé."
			period="Mars 2021 - Déc 2022"
			location="Lyon, France"
		/>
		<Experience
			title="Développeur Full Stack"
			company="StartUp Dynamics"
			description="Développement de la plateforme SaaS de l'entreprise.\nTravail en méthodologie Agile/Scrum.\nParticipation aux décisions techniques."
			period="Sept 2019 - Fév 2021"
			location="Remote"
		/>
		<Experience
			title="Stage Développeur Web"
			company="Web Solutions"
			description="Développement de sites web et applications.\nApprentissage des technologies web modernes.\nTravail en équipe sur des projets réels."
			period="Avr 2019 - Août 2019"
			location="Toulouse, France"
		/>
	</div>
    {/snippet}
</Story>
