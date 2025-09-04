<script lang="ts">
	import { Menu, SquareMenu, X } from '@lucide/svelte';
	import Button from '../Button.svelte';
	import LocaleSwitcher from '../LocaleSwitcher.svelte';
	import { fade, fly, slide } from 'svelte/transition';

	let isMenuOpen = $state(false);
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-slate-900/20 backdrop-blur-md"
>
	<div class="mx-auto max-w-7xl px-6 py-4">
		<div class="flex items-center justify-between">
			<p class="text-xl font-bold text-white">Anthony Matignon</p>

			<nav class="hidden items-center space-x-8 md:flex">
				<a href="/" class="text-white/80 transition-colors hover:text-white"> Accueil </a>
				<a href="/#projects" class="text-white/80 transition-colors hover:text-white"> Projets </a>
				<a href="/#articles" class="text-white/80 transition-colors hover:text-white"> Articles </a>
				<a href="/#contact" class="text-white/80 transition-colors hover:text-white"> Contact </a>
			</nav>

			<div class="hidden items-center space-x-4 md:flex">
				<LocaleSwitcher />
			</div>

			<div class="text-white md:hidden">
				<Button variant="ghost" onclick={() => (isMenuOpen = !isMenuOpen)}>
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
						href="/"
						class="text-white/80 transition-colors hover:text-white"
						onclick={() => (isMenuOpen = false)}
					>
						Accueil
					</a>
					<a
						href="/#projects"
						class="text-white/80 transition-colors hover:text-white"
						onclick={() => (isMenuOpen = false)}
					>
						Projets
					</a>
					<a
						href="/#articles"
						class="text-white/80 transition-colors hover:text-white"
						onclick={() => (isMenuOpen = false)}
					>
						Articles
					</a>
					<a
						href="/#contact"
						class="text-white/80 transition-colors hover:text-white"
						onclick={() => (isMenuOpen = false)}
					>
						Contact
					</a>
				</nav>
				<div class="flex items-center space-x-4 border-t border-white/10 pt-4">
					<LocaleSwitcher />
					<Button className="py-2 h-auto">Book Meeting</Button>
				</div>
			</div>
		{/if}
	</div>
</header>
