<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import slugify from '$lib/utils/slugify';
	import { BookOpen } from '@lucide/svelte';
	import { onMount } from 'svelte';

	type Props = {
		markdown: string;
	};
	let { markdown }: Props = $props();

	let headings: Set<{ text: string; id: string; level: number }> = $state(new Set());
	let headerHeight = $state(0);
	let activeSection = $state('');

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
		const handleScroll = () => {
			const sections = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
			let currentSection = '';
			const scrollPosition = window.scrollY + 200; // Adjust offset as needed

			sections.forEach((section) => {
                // @ts-expect-error
				if (section.offsetTop <= scrollPosition) {
					currentSection = section.id;
				}
			});

			activeSection = currentSection;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial call to set the active section

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<aside class="hidden w-64 shrink-0 lg:block">
	<div class="sticky top-16">
		<div class="p-6 backdrop-blur-sm">
			<div class="mb-4 flex items-center gap-2">
				<BookOpen class="size-4 text-slate-400" />
				<span class="text-sm font-medium text-slate-500">Sommaire</span>
			</div>
			<nav class="space-y-1">
				{#each Array.from(headings) as heading}
					<a
						href={'#' + heading.id}
						class={cn(
							'block rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition-colors ease-in hover:text-slate-100',
							{ 'from-orange-500 bg-gradient-to-l text-transparent to-pink-500 bg-clip-text': activeSection === heading.id }
						)}
						style="margin-left: {(heading.level - 1) * 10}px"
						onclick={(e) => scrollToHeading(e, heading.id)}>{heading.text}</a
					>
				{/each}
			</nav>
		</div>
	</div>
</aside>
