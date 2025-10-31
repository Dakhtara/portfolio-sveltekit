<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import LocaleSwitcher from './LocaleSwitcher.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/LocaleSwitcher',
		component: LocaleSwitcher,
		tags: ['autodocs'],
		argTypes: {
			anchorPosition: {
				control: { type: 'select' },
				options: ['bottom-right', 'bottom-left'],
				description: 'Position du menu déroulant par rapport au bouton'
			}
		}
	});
</script>

<!-- LocaleSwitcher par défaut avec position bottom-right -->
<Story name="Default">
	<LocaleSwitcher />
</Story>

<!-- LocaleSwitcher avec position bottom-left -->
<Story name="Bottom Left" args={{ anchorPosition: 'bottom-left' }}>
	<LocaleSwitcher anchorPosition="bottom-left" />
</Story>

<!-- LocaleSwitcher avec classe personnalisée -->
<Story name="Custom Class" args={{ class: 'px-4 py-2' }}>
	<LocaleSwitcher class="px-4 py-2" />
</Story>
