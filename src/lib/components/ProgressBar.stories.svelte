<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ProgressBar from './ProgressBar.svelte';
	import { fn } from 'storybook/test';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/ProgressBar',
		component: ProgressBar,
		tags: ['autodocs'],
	});
</script>

<!-- ProgressBar utilisé dans les cartes  -->
<Story name="Default" args={{ level: 50 }} />

<Story name="Full" args={{ level: 100 }} />


<Story name={"t 25 percent"} args={{ level: 25 }} />
