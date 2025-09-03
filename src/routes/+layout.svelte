<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-black text-white">
	<div class="container mx-auto min-h-dvh">
		<Header />
		{@render children?.()}

		<Footer />
	</div>
</div>
