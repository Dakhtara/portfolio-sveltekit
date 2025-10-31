<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	import { Download } from '@lucide/svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		tags: ['autodocs']
	});
</script>

<!-- Button utilisé dans les cartes  -->
<Story name="Default">Default Button</Story>

<Story name="Outline" args={{ variant: 'outline' }}>Outline Button</Story>

<Story name="Icon" args={{ size: 'icon' }}>
	<Download />
</Story>

<Story name="Link Button" args={{ href: '#' }}>Link Button</Story>

<Story name="Ghost" args={{ variant: 'ghost' }}>Ghost Button</Story>
