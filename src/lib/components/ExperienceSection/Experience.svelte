<script lang="ts">
	import nl2br from "$lib/utils/nl2br";
	import { Calendar, MapPin } from "@lucide/svelte";


type Props = {
        title: string;
        company: string;
        description: string;
        period: string;
        location: string;
    }
    let { title, company, description, period, location }: Props = $props();

</script>

<div class="rounded-lg border py-4 bg-white/[0.02] border-white/10 backdrop-blur-sm">
	<div class="p-6">
		<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
			<div class="flex-1">
				<h3 class="text-xl font-semibold text-white mb-1">{title}</h3>
				<p class="text-lg font-medium text-cyan-400 mb-2">
					{company}
				</p>
				<p class="text-white/70 leading-relaxed">{@html nl2br(description)}</p>
			</div>
			<div class="text-sm text-white/50 lg:text-right flex-shrink-0">
				<div class="flex items-center gap-1.5 lg:justify-end mb-1">
					<Calendar class="h-3.5 w-3.5" />
					{period}
				</div>
				<div class="flex items-center gap-1.5 lg:justify-end">
					<MapPin class="h-3.5 w-3.5" />
					{location}
				</div>
			</div>
		</div>
	</div>
</div>
