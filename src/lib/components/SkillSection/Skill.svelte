<script lang="ts">
	import ProgressBar from "../ProgressBar.svelte";

	type Props = {
		title: string;
		level: number;
	};

	let { title, level }: Props = $props();
</script>

<div class="space-y-3">
	<div class="flex items-center justify-between">
		<span class="text-lg font-medium text-white">{title}</span>
		<span class="font-mono text-sm text-white/60">{level}%</span>
	</div>
	<ProgressBar level={level} />
</div>
