<script lang="ts">
	import type { Snippet } from "svelte";


    type Props = {
        children: Snippet;
        variant?: "white"|"outline"|"ghost"
    }

    let {children, variant = "white"}: Props = $props();

    let classes = {
        base: "h-12 cursor-pointer rounded-lg px-6 py-3 font-medium transition-all duration-200",
        white: "bg-white text-black hover:bg-white/90",
        outline: "border border-white/20 bg-transparent text-white hover:bg-white/5",
        ghost: "bg-transparent text-white hover:bg-white/5"
    };

    let variantClasses = classes[variant];
</script>

<button
	class={classes.base + " " + variantClasses}
>
	{@render children()}
</button>
