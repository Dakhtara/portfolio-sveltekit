<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
		variant?: 'default' | 'white' | 'outline' | 'ghost';
		className?: string;
	} & HTMLButtonAttributes &
		HTMLAnchorAttributes;

	let { children, variant = 'white', class: className, ...props }: Props = $props();

	let classes = {
		base: 'h-12 flex items-center [&_svg]:mr-2 cursor-pointer rounded-lg px-6 py-3 font-medium transition-all duration-200',
		default: 'border',
		white: 'bg-white text-black hover:bg-white/90',
		outline: 'border py-2 border-white/20 bg-transparent text-white hover:bg-white/5',
		ghost: 'bg-transparent rounded-lg text-white hover:bg-white/5'
	};

	let variantClasses = classes[variant];
</script>

{#if props.href}
	<a class={cn(classes.base, variantClasses, className)} {...props}>
		{@render children()}
	</a>
{:else}
	<button class={cn(classes.base, variantClasses, className)} {...props}>
		{@render children()}
	</button>
{/if}
