<script lang="ts">
	import { Calendar, ChevronRight } from '@lucide/svelte';

	type Props = {
		title: string;
		description: string;
		date: string;
		readTime: string;
        slug: string;
	};
	let { title, description, date, readTime, slug }: Props = $props();
</script>

<a
    href={'/articles/' + slug}
	class="group block cursor-pointer rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/5"
>
	<div class="p-6">
		<div class="flex items-start justify-between">
			<div class="flex-1">
				<div
					class="mb-3 flex items-center text-xl font-semibold text-white transition-colors group-hover:text-cyan-400"
				>
					{title}
					<ChevronRight class="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
				</div>
				<div class="text-base leading-relaxed text-white/70">
					{description}
				</div>
			</div>
		</div>
		<div class="mt-4 flex items-center gap-4 border-t border-white/5 pt-4 text-sm text-white/50">
			<span class="flex items-center gap-1.5">
				<Calendar class="h-3.5 w-3.5" />
				{new Date(date).toLocaleDateString()}
			</span>
			<span>{readTime}</span>
		</div>
	</div>
</a>
