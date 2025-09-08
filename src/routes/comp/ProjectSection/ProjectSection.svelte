<script lang="ts">
	import HeadingSectionAnimation from '../HeadingSectionAnimation.svelte';
	import Project from './Project.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<HeadingSectionAnimation
			heading={m.teary_salty_shrimp_flow()}
			subheading={m.bold_east_zebra_greet()}
		/>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			<Project
				title="Crossfit Les Sables d'Olonne"
				description="Reprise complète du site Crossfit des Sables d'Olonne.
Passage d'un Wordpress a un site Astro avec Contentful
Il s'agit principalement d'un redesign complet du site.
Les librairies utilisées sont principalement Astro pour la génération du site. TailwindCSS pour le design et Contentful pour la gestion de certains blocs et pages personnalisés."
				tags={['Astro', 'TailwindCSS']}
				src="/crossfit-lsd.webp"
			/>
			<Project
				title="Afterlife"
				description="C'est un projet qui a démarré par l'envie de revoir le site internet. La version était très perfectible sur certains aspects.
J'ai démarré par lister les fonctionnalités et ce qui pouvait être amélioré. Ensuite j'ai crée les maquettes avec les idées, pour au final crée le site web.
Ce projet contient ThreeJS qui permet de créer des objets et animations en 3D."
				tags={['ThreeJS']}
				src="/afterlife.webp"
			/>
			<Project
				title="April Marine"
				description="Pour le besoin de développement d'un outil en interne, je suis intervenu pour continuer le développement de leur solution.
Il s'agissait de créer de nouvelles routes pour leur API ainsi que d'améliorer l'interface de gestion des utilisateurs."
				tags={['Symfony', 'API']}
				src="/logo-april-marine.webp"
			/>
			<Project
				title="Lecteur de musique"
				description="Création d'un lecteur de musique personnel avec une gestion de playlist.
Ce projet est crée sous Vue avec un serveur express et une gestion des stream pour les fichiers musicaux
"
				tags={['Vue', 'Express', 'FFMpeg']}
				src="/lecteur-musique.webp"
			/>
		</div>
	</div>
</section>
