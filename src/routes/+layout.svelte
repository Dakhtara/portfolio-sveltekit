<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.jpg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-slate-900 text-white min-h-dvh">
	<div class="container mx-auto">
		<Header />
		{@render children?.()}

	</div>
	<Footer />
</div>
