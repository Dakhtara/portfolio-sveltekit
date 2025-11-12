<script lang="ts">
	import HeadingSectionAnimation from '../HeadingSectionAnimation.svelte';
	import Project from './Project.svelte';
	import * as m from '$lib/paraglide/messages';
	import NtfySveltekitImg from '$lib/assets/ntfy-sveltekit/homepage.png?enhanced';
	import CrossfitLsdImg from '$lib/assets/crossfit-lsd.webp?enhanced';
	import AfterlifeImg from '$lib/assets/afterlife.webp?enhanced';
	import AprilMarineImg from '$lib/assets/logo-april-marine.webp?enhanced';
	import MusicPlayerImg from '$lib/assets/lecteur-musique.webp?enhanced';
</script>

<section class="px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<HeadingSectionAnimation
			heading={m.teary_salty_shrimp_flow()}
			subheading={m.bold_east_zebra_greet()}
		/>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			<Project
				title="NTFY Sveltekit"
				description={m.factual_teal_crocodile_gaze()}
				tags={['Sveltekit', 'TailwindCSS', 'NTFY']}
				src={NtfySveltekitImg}
			/>
			
			<Project
				title="Crossfit Les Sables d'Olonne"
				description={m.gross_even_trout_loop()}
				tags={['Astro', 'TailwindCSS']}
				src={CrossfitLsdImg}
			/>
			<Project
				title="Afterlife"
				description={m.alert_watery_warbler_jest()}
				tags={['ThreeJS']}
				src={AfterlifeImg}
			/>
			<Project
				title="April Marine"
				description={m.sleek_topical_rooster_laugh()}
				tags={['Symfony', 'API']}
				src={AprilMarineImg}
			/>
			<Project
				title={m.new_green_anaconda_arise()}
				description={m.bold_heroic_cuckoo_laugh()}
				tags={['Vue', 'Express', 'FFMpeg']}
				src={MusicPlayerImg}
			/>
		</div>
	</div>
</section>
