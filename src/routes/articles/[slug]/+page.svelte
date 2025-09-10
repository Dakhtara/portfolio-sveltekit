<script lang="ts">
	import 'shiki/themes/catppuccin-macchiato.mjs';
	import { format } from 'date-fns';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="mx-auto max-w-2xl lg:px-8 py-24">
	<p class="text-sm border-l border-zinc-100 pl-4">{format(new Date(data.article.date), 'MMMM dd, yyyy')}</p>
	<h1 class="mt-6 mb-8 text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
		{data.article.title}
	</h1>
	<div class="prose prose-invert">
		{@html data.article.content.html}
	</div>
</div>
