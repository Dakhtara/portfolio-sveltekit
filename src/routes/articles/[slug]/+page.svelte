<script lang="ts">
	import 'shiki/themes/catppuccin-macchiato.mjs';
	import { fr, enGB } from 'date-fns/locale';
	import { format } from 'date-fns';
	import type { PageProps } from './$types';
	import { getLocale } from '$lib/paraglide/runtime';
	import { Clock } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.article.title} - Anthony Matignon</title>
	<meta name="description" content={data.article.description} />
	<meta property="og:title" content={data.article.title + ' - Anthony Matignon'} />
	<meta property="og:description" content={data.article.description} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={data.article.date} />
	<meta property="article:author" content="Anthony Matignon" />
	{#if data.article.tags}
		{#each data.article.tags as tag}
			<meta property="article:tag" content={tag} />
		{/each}
	{/if}
	<meta property="og:url" content={'https://amatignon.fr/articles/' + data.article.slug} />
</svelte:head>

<div class="mx-auto max-w-3xl py-24 lg:px-8">
	{#if data.article.thumbnail}
		<div class="relative mb-12">
			<div class="">
				<img src={data.article.thumbnail} alt={data.article.title} class=" rounded-lg" />
			</div>
			<div
				class="absolute bottom-0 w-full rounded-b-lg bg-gradient-to-b from-transparent to-black pt-18 pb-8"
			>
				<h1 class="mb-4 text-center text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl" in:fly|global={{ y: 20, delay: 500, duration: 500, easing: cubicOut }}>
					{data.article.title}
				</h1>
				<p class="flex items-center justify-center gap-2 text-center text-sm text-zinc-100" in:fly|global={{ y: 20,delay: 900, duration: 500, easing: cubicOut }}>
					{format(new Date(data.article.date), 'MMMM dd, yyyy', {
						locale: getLocale() === 'fr' ? fr : enGB
					})}
					- <Clock class="inline h-4 w-4" />
					{data.article.readTime}
				</p>
			</div>
		</div>
	{:else}
		<p class="border-l border-zinc-100 pl-4 text-sm">
			{format(new Date(data.article.date), 'MMMM dd, yyyy', {
				locale: getLocale() === 'fr' ? fr : enGB
			})}
		</p>
		<h1 class="mt-6 mb-8 text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
			{data.article.title}
		</h1>
	{/if}
	<div class="prose max-w-full prose-invert prose-h1:mt-18">
		{@html data.article.content.html}
	</div>
</div>
