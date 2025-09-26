<script lang="ts">
	import { SquareMenu, X } from '@lucide/svelte';
	import Button from '../Button.svelte';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	import LocaleSwitcher from '../LocaleSwitcher.svelte';
	import { slide } from 'svelte/transition';
	import * as m from '$lib/paraglide/messages';
	let isMenuOpen = $state(false);
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-slate-900/20 backdrop-blur-md"
>
	<div class="mx-auto max-w-7xl px-6 py-2 md:py-4">
		<div class="flex items-center justify-between">
			<a href={localizeHref('/')} class="text-xl font-bold text-white">Anthony Matignon</a>

			<nav class="hidden items-center space-x-8 md:flex">
				<a href={localizeHref('/')} class="text-white/80 transition-colors hover:text-white">
					{m.stout_bright_shrimp_fade()}
				</a>
				<!-- <a href={localizeHref('/#projects')} class="text-white/80 transition-colors hover:text-white"> {m.caring_dull_lemur_flip()} </a> -->
				<a
					href={localizeHref('/articles')}
					class="text-white/80 transition-colors hover:text-white"
				>
					{m.yummy_wacky_meerkat_trip()}
				</a>
				<a href={localizeHref('/contact')} class="text-white/80 transition-colors hover:text-white">
					{m.gaudy_level_myna_trim()}
				</a>
			</nav>

			<div class="hidden items-center space-x-4 md:flex">
				<LocaleSwitcher />
			</div>

			<div class="text-white md:hidden">
				<Button size="icon" class="px-2" variant="ghost" onclick={() => (isMenuOpen = !isMenuOpen)}>
					{#if isMenuOpen}
						<X class="size-5" />
					{:else}
						<SquareMenu class="size-5" />
					{/if}
				</Button>
			</div>
		</div>
		{#if isMenuOpen}
			<div transition:slide class="mt-4 border-t border-white/10 pb-4 md:hidden">
				<nav class="mt-4 flex flex-col space-y-4">
					<a
						href={localizeHref('/')}
						class="text-white/80 transition-colors hover:text-white"
						onclick={() => (isMenuOpen = false)}
					>
						{m.stout_bright_shrimp_fade()}
					</a>
					<!-- <a
						href={localizeHref('/#projects')}
						class="text-white/80 transition-colors hover:text-white"
						onclick={() => (isMenuOpen = false)}
					>
						{m.caring_dull_lemur_flip()}
					</a> -->
					<a
						href={localizeHref('/articles')}
						class="text-white/80 transition-colors hover:text-white"
						onclick={() => (isMenuOpen = false)}
					>
						{m.yummy_wacky_meerkat_trip()}
					</a>
					<a
						href={localizeHref('/contact')}
						class="text-white/80 transition-colors hover:text-white"
						onclick={() => (isMenuOpen = false)}
					>
						{m.gaudy_level_myna_trim()}
					</a>
				</nav>
				<div class="mt-4 flex items-center space-x-4 border-t border-white/10 pt-4">
					<LocaleSwitcher />
					<Button className="py-2 h-auto">{m.gross_mellow_capybara_pray()}</Button>
				</div>
			</div>
		{/if}
	</div>
</header>
