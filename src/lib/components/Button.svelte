<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
		variant?: 'default' | 'white' | 'outline' | 'ghost';
		className?: string;
		size?: 'default' | 'icon';
	} & HTMLButtonAttributes &
		HTMLAnchorAttributes;

	let {
		children,
		variant = 'white',
		class: className,
		size = 'default',
		...props
	}: Props = $props();

	let classes = {
		base: 'h-12 flex items-center cursor-pointer rounded-lg px-6 py-3 font-medium transition-all duration-200',
		default: 'border',
		white: 'bg-white text-black hover:bg-white/90',
		outline: 'border py-2 border-white/20 bg-transparent text-white hover:bg-white/5',
		ghost: 'bg-transparent rounded-lg text-white hover:bg-white/5'
	};

	let sizes = {
		default: 'h-12 px-6 py-3 [&_svg]:mr-2',
		icon: 'h-10 w-10 p-0 justify-center'
	};

	let variantClasses = classes[variant];
	let sizeClasses = sizes[size];
</script>

{#if props.href}
	<a class={cn(classes.base, variantClasses, sizeClasses, className )} {...props}>
		{@render children()}
	</a>
{:else}
	<button class={cn(classes.base, variantClasses, sizeClasses, className)} {...props}>
		{@render children()}
	</button>
{/if}
