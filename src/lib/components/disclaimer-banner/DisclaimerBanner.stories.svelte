<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DisclaimerBanner from './DisclaimerBanner.svelte';
	import { Download } from '@lucide/svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/Disclaimer Banner',
		component: DisclaimerBanner,
		tags: ['autodocs']
	});
</script>

<!-- Composant utilisé uniquement dans les articles Anglais qui ont été traduits depuis le francais  -->
<Story name="Default" />
