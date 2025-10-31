<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HeroSection from './HeroSection.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Homepage/Hero Section',
		component: HeroSection,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen',
			docs: {
				description: {
					component: 'Section hero de la page d\'accueil avec animation de fond, titre animé et boutons d\'action. Utilise GSAP pour les animations de texte.'
				}
			}
		}
	});
</script>

<!-- HeroSection par défaut -->
<Story name="Default">
	<HeroSection />
</Story>
