<script lang="ts">
	import { Check, Globe } from '@lucide/svelte';
	import { getLocale, setLocale } from '$lib/paraglide/runtime.js';
	import Portal from 'svelte-portal';
	import * as m from '$lib/paraglide/messages';
	import { cn } from '$lib/utils/cn';

	type Props = {
		class?: string;
		anchorPosition?: 'bottom-right' | 'bottom-left';
	};
	let { class: className, anchorPosition = 'bottom-right' }: Props = $props();
	let currentLocale = getLocale();

	let isOpen = $state(false);

	let position = $state({ x: 0, y: 0 });

	$effect(() => {
		if (isOpen) {
			// Position the dropdown in a visible area
			position = { x: 0, y: 0 };
		}
	});

	function positionAnchorCss() {
		if (anchorPosition === 'bottom-right') {
			return 'left: anchor(left)';
		} else {
			return 'right: anchor(right)';
		}
	}
</script>

{#if isOpen}
	<Portal target="body">
		<div class="fixed inset-0 z-10" aria-hidden="true" onclick={() => (isOpen = false)}></div>
	</Portal>
{/if}
<div class="relative z-20">
	<button
		style="anchor-name: --my-anchor"
		onclick={() => (isOpen = !isOpen)}
		class={cn(
			'flex  cursor-pointer items-center gap-4 rounded-lg border border-white/20 px-2 py-1 text-white/90 transition-colors ease-in hover:bg-white/10',
			className
		)}
	>
		<Globe class="size-4" />
		{#if currentLocale === 'fr'}
			FR
		{:else}
			EN
		{/if}
	</button>
	{#if isOpen}
		<div
			class={cn(
				'fixed mt-2 w-32 rounded-lg border border-white/20 bg-slate-900/80 text-white/90 backdrop-blur-sm'
			)}
			style={`position-anchor: --my-anchor;  ${positionAnchorCss()}`}
		>
			<div class="flex w-full flex-col items-start">
				{@render languageButton('en', m.fluffy_drab_chicken_cherish(), currentLocale)}
				{@render languageButton('fr', m.gray_grassy_dog_persist(), currentLocale)}
			</div>
		</div>
	{/if}
</div>

{#snippet languageButton(locale: 'fr' | 'en', language: string, currentLocale: string)}
	<button
		class="flex w-full cursor-pointer items-center justify-between p-2 text-left text-sm ease-in hover:bg-white/10"
		onclick={() => setLocale(locale)}
	>
		{language}
		{#if currentLocale === locale}
			<Check class="size-4" />
		{/if}
	</button>
{/snippet}
