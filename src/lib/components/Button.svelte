<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";


    type Props = {
        children: Snippet;
        variant?: "white"|"outline"|"ghost"
        className?: string;
    } & HTMLButtonAttributes;

    let {children, variant = "white" , className, ...props}: Props = $props();

    let classes = {
        base: "h-12 cursor-pointer rounded-lg px-6 py-3 font-medium transition-all duration-200",
        white: "bg-white text-black hover:bg-white/90",
        outline: "border py-2 border-white/20 bg-transparent text-white hover:bg-white/5",
        ghost: "bg-transparent text-white hover:bg-white/5"
    };

    let variantClasses = classes[variant];
</script>

<button
	class={cn(classes.base, variantClasses, className)}
	{...props}
>
	{@render children()}
</button>
