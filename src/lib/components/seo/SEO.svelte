<script lang="ts">
	import { page } from '$app/state';
	import { getLocale, locales, localizeHref, baseLocale } from '$lib/paraglide/runtime';

	const SITE_URL = 'https://amatignon.fr';

	type Props = {
		title: string;
		description: string;
		image?: string;
		type?: string;
		article?: {
			publishedTime?: string;
			author?: string;
			tags?: string[];
		};
	};

	let { title, description, image, type = 'website', article }: Props = $props();

	let locale = $derived(getLocale());
	let ogLocale = $derived(locale === 'fr' ? 'fr_FR' : 'en_GB');
	let canonicalUrl = $derived(SITE_URL + localizeHref(page.url.pathname));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content={type} />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:site_name" content="Anthony Matignon" />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}

	<!-- Article-specific OG tags -->
	{#if article}
		{#if article.publishedTime}
			<meta property="article:published_time" content={article.publishedTime} />
		{/if}
		{#if article.author}
			<meta property="article:author" content={article.author} />
		{/if}
		{#if article.tags}
			{#each article.tags as tag}
				<meta property="article:tag" content={tag} />
			{/each}
		{/if}
	{/if}

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if image}
		<meta name="twitter:image" content={image} />
	{/if}

	<!-- Hreflang alternate links -->
	{#each locales as loc}
		<link
			rel="alternate"
			hreflang={loc}
			href={SITE_URL + localizeHref(page.url.pathname, { locale: loc })}
		/>
	{/each}
	<link
		rel="alternate"
		hreflang="x-default"
		href={SITE_URL + localizeHref(page.url.pathname, { locale: baseLocale })}
	/>
</svelte:head>
