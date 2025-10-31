<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import AnimationHeader from './AnimationHeader.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/AnimationHeader',
		component: AnimationHeader,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen',
			docs: {
				description: {
					component: 'Animation de fond animée avec des dégradés radiaux dynamiques et une grille subtile. Utilisée en arrière-plan du header.'
				}
			}
		}
	});
</script>

<!-- AnimationHeader par défaut avec hauteur fixe -->
<Story name="Default">
    {#snippet template(args)}
	<div class="relative h-96 w-full">
		<AnimationHeader  />
	</div>
    {/snippet}
</Story>

<!-- AnimationHeader plein écran -->
<Story name="Fullscreen">
    {#snippet template(args)}
	<div class="relative h-screen w-full">
		<AnimationHeader/>
	</div>
    {/snippet}
</Story>

<!-- AnimationHeader avec contenu par-dessus -->
<Story name="With Content">
    {#snippet template(args)}
	<div class="relative h-96 w-full">
		<AnimationHeader />
		<div class="relative z-10 flex h-full items-center justify-center">
			<div class="text-center">
				<h1 class="text-4xl font-bold text-white mb-4">Titre exemple</h1>
				<p class="text-white/80">Contenu par-dessus l'animation</p>
			</div>
		</div>
	</div>
    {/snippet}
</Story>
