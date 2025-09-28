<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.jpg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { browser, dev } from '$app/environment';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { PUBLIC_UMAMI_WEBSITE_ID } from '$env/static/public';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	{#if browser && !dev}
		<script
			defer
			src="https://umami.amatignon.fr/script.js"
			data-website-id={PUBLIC_UMAMI_WEBSITE_ID}
		></script>
		<script
			defer
			data-domain="amatignon.fr"
			src="https://plausible.amatignon.fr/js/script.outbound-links.js"
		></script>
	{/if}
</svelte:head>
<div class="hidden">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
<div class="min-h-dvh bg-slate-900 text-white">
	<div class="container mx-auto">
		<Header />
		{@render children?.()}
	</div>
	<Footer />
</div>
