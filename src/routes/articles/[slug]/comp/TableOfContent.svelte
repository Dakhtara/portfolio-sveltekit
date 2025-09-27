<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import slugify from '$lib/utils/slugify';
	import { BookOpen, X } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import { slide } from 'svelte/transition';
	import * as m from '$lib/paraglide/messages';

	type Props = {
		markdown: string;
	};
	let { markdown }: Props = $props();

	let headings: Set<{ text: string; id: string; level: number }> = $state(new Set());
	let headerHeight = $state(0);
	let activeSection = $state('');
	let isMobileOpen = $state(false);
	let isMobile = new MediaQuery('(max-width: 767px)');

	onMount(() => {
		headerHeight = document.querySelector('header')?.clientHeight || 0;
		const parser = new DOMParser();
		const doc = parser.parseFromString(markdown, 'text/html');
		const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

		headings = new Set(
			Array.from(headingElements).map((heading) => ({
				text: heading.textContent || '',
				id: heading.id || slugify(heading.textContent || ''),
				level: parseInt(heading.tagName.substring(1))
			}))
		);
	});

	function scrollToHeading(e: MouseEvent, id: string) {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
			console.log(elementTop, headerHeight);
			window.scrollTo({
				top: elementTop - headerHeight - 20,
				behavior: 'smooth'
			});
		}
	}

	$effect(() => {
		const sections = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{
				rootMargin: `-${headerHeight + 20}px 0px -70% 0px`,
				threshold: 0
			}
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

{#if !isMobile.current || (isMobile.current && isMobileOpen)}
	<aside
		transition:slide={{ duration: 300 }}
		class={cn('bottom-0  h-[40dvh] shrink-0 md:h-auto', {
			'fixed z-50 rounded-t-[25px] bg-slate-800/90 backdrop-blur-sm lg:static lg:bg-transparent':
				isMobileOpen,
			'hidden w-64 lg:block': !isMobileOpen
		})}
	>
		<!-- Mobile layout with flexbox -->
		<div class="flex h-full flex-col lg:hidden">
			<div class="flex-shrink-0 p-6 pb-2">
				<div class="mb-2 flex items-center gap-2">
					<BookOpen class="size-4 text-slate-400" />
					<span class="text-sm font-medium text-slate-500">{m.legal_clear_bear_bump()}</span>
					{#if isMobileOpen}
						<button
							onclick={() => (isMobileOpen = false)}
							aria-label="Close table of contents"
							class="ml-auto rounded-md p-2 text-slate-400 transition hover:bg-slate-700 hover:text-slate-200"
						>
							<X class="size-4" />
						</button>
					{/if}
				</div>
			</div>
			<nav class="flex-1 space-y-1 overflow-y-auto px-6 pb-6">
				{#each Array.from(headings) as heading}
					{@render title(heading.id, heading.level, heading.text)}
				{/each}
			</nav>
		</div>

		<!-- Desktop layout with sticky positioning -->
		<div class="hidden lg:sticky lg:top-16 lg:block">
			<div class="p-6 lg:backdrop-blur-sm">
				<div class="mb-4 flex items-center gap-2">
					<BookOpen class="size-4 text-slate-400" />
					<span class="text-sm font-medium text-slate-500">{m.legal_clear_bear_bump()}</span>
				</div>
				<nav class="space-y-1">
					{#each Array.from(headings) as heading}
						{@render title(heading.id, heading.level, heading.text)}
					{/each}
				</nav>
			</div>
		</div>
	</aside>
{/if}
<button
	onclick={() => (isMobileOpen = true)}
	class="bg-primary text-primary-foreground fixed right-6 bottom-6 z-40 rounded-full bg-gradient-to-l from-orange-500 to-pink-500 p-3 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl lg:hidden"
	aria-label="Open table of contents"
>
	<BookOpen class="h-5 w-5" />
</button>

{#snippet title(id: string, level: number, text: string)}
	<a
		href={'#' + id}
		class={cn(
			'block rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition-colors ease-in hover:text-slate-100',
			{
				'bg-gradient-to-l from-orange-500 to-pink-500 bg-clip-text text-transparent':
					activeSection === id
			}
		)}
		style="margin-left: {(level - 1) * 10}px"
		onclick={(e) => scrollToHeading(e, id)}>{text}</a
	>
{/snippet}
