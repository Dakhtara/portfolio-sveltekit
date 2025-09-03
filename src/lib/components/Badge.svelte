<script lang="ts">
	import type { Snippet } from "svelte";


type Props = {
    children: Snippet
}

let { children }: Props = $props();
</script>

<span class="inline-block bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full">
    {@render children()}
    </span>