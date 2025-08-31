<script lang="ts">
	import 'shiki/themes/catppuccin-macchiato.mjs';
	import { format } from 'date-fns';
	let { data } = $props();
</script>

<div class="mx-auto max-w-2xl lg:px-8 mt-8">
	<p class="text-sm border-l border-zinc-300 pl-4">{format(new Date(data.article.date), 'MMMM dd, yyyy')}</p>
	<h1 class="mt-6 mb-8 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
		{data.article.title}
	</h1>
	<div class="prose">
		{@html data.article.content.html}
	</div>
</div>
