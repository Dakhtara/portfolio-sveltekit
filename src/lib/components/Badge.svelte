<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<span class="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
	{@render children()}
</span>
