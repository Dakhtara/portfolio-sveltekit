<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.jpg';
	import faviconSvg from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { browser, dev } from '$app/environment';
	import { env } from '$env/dynamic/public';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="icon" type="image/svg+xml" href={faviconSvg} />
	<link rel="apple-touch-icon" href={favicon} />

	{#if browser && !dev}
		<script
			defer
			src="https://umami.amatignon.fr/script.js"
			data-website-id={env.PUBLIC_UMAMI_WEBSITE_ID}
		></script>
	{/if}
</svelte:head>
<div class="min-h-dvh bg-slate-900 text-white">
	<div class="container mx-auto">
		<Header />
		<main>
			{@render children?.()}
		</main>
	</div>
	<Footer />
</div>
