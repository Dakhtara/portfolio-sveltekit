<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.jpg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { browser, dev } from '$app/environment';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	{#if browser && !dev}
		<script
			defer
			src="https://umami.amatignon.fr/script.js"
			data-website-id="57bc1b7b-6e09-43f9-8fad-e8509503f25e"
		></script>
		<script
			defer
			data-domain="amatignon.fr"
			src="https://plausible.amatignon.fr/js/script.outbound-links.js"
		></script>
	{/if}
</svelte:head>

<div class="min-h-dvh bg-slate-900 text-white">
	<div class="container mx-auto">
		<Header />
		{@render children?.()}
	</div>
	<Footer />
</div>
