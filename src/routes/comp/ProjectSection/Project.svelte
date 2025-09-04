<script lang="ts">
	import nl2br from '$lib/utils/nl2br';
	import Badge from '$lib/components/Badge.svelte';

    type Props = {
        title: string;
        description: string;
        tags: string[];
        src: string;
    }
    let {title, description, tags, src}: Props = $props();
</script>

<div
	class="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] py-3 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10"
>
	<div class="relative overflow-hidden">
		<img
			class="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
			src={src}
			loading="lazy"
			alt="Description de {title}"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</div>
	<div class="p-6">
		<div class="mb-3 flex items-start justify-between">
			<h3 class="text-xl font-semibold text-white transition-colors group-hover:text-cyan-500">
				{title}
			</h3>
		</div>
		<div class="mb-4 text-base leading-relaxed text-white/70">
			<p>{@html nl2br(description)}</p>
		</div>
		<div class="flex flex-wrap gap-2">
            {#each tags as tag}
                <Badge>{tag}</Badge>
            {/each}
		</div>
	</div>
</div>
