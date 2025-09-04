<script lang="ts">
	import { Check, Globe } from '@lucide/svelte';
	import { getLocale, setLocale } from '$lib/paraglide/runtime.js';
	import Portal from 'svelte-portal';
    import * as m from "$lib/paraglide/messages";

	let currentLocale = getLocale();

	let isOpen = $state(false);
</script>

{#if isOpen}
	<Portal target="body">
		<div class="fixed inset-0 z-10" aria-hidden="true" onclick={() => (isOpen = false)}></div>
	</Portal>
{/if}
<div class="relative z-20">
	<button
		onclick={() => (isOpen = !isOpen)}
		class="flex cursor-pointer items-center gap-4 rounded-lg border border-white/20 px-2 py-1 text-white/90 transition-colors ease-in hover:bg-white/10"
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
			class="absolute right-0 mt-2 w-32 rounded-lg border border-white/20 bg-slate-900/80 text-white/90 backdrop-blur-sm"
		>
			<div class="flex w-full flex-col items-start">
                {@render languageButton('en', m.fluffy_drab_chicken_cherish(), currentLocale)}
                {@render languageButton('fr', m.gray_grassy_dog_persist(), currentLocale)}
			</div>
		</div>
	{/if}
</div>

{#snippet languageButton(locale: 'fr'|'en', language: string, currentLocale: string)}
    <button
        class="w-full flex justify-between items-center cursor-pointer p-2 text-left text-sm ease-in hover:bg-white/10"
        onclick={() => setLocale(locale)}
    >
        {language}
        {#if currentLocale === locale}
            <Check class="size-4" />
        {/if}
    </button>
{/snippet}