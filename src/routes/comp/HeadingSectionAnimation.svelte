<script lang="ts">
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let { heading, subheading } = $props();

	let containerRef: HTMLDivElement;
	let headingRef: HTMLHeadingElement;
	let subheadingRef: HTMLParagraphElement;

	onMount(() => {
		if (!browser) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animate();
						observer.unobserve(entry.target); // Stop observing after the first intersection
					}
				});
			},
			{ threshold: 1 }
		); // Trigger when 10% of the element is visible
		observer.observe(containerRef);
	});

	function animate() {
		gsap.fromTo(
			headingRef,
			{
				y: -30,
				opacity: 0,
				ease: 'power4.out'
			},
			{
				duration: 1.2,
				y: 0,
				opacity: 1
			}
		);

		gsap.fromTo(
			subheadingRef,
			{
				y: -20,
				opacity: 0,
				ease: 'power4.out'
			},
			{
				duration: 1,
				delay: 0.5,
				y: 0,
				opacity: 1
			}
		);
	}
</script>

<div bind:this={containerRef} class="mb-16 text-center">
	<h2
		bind:this={headingRef}
		class="mb-4 text-4xl font-bold tracking-tight text-balance opacity-0 md:text-5xl"
	>
		{heading}
	</h2>
	<p bind:this={subheadingRef} class="mx-auto max-w-xl text-lg text-white/60 opacity-0">
		{subheading}
	</p>
</div>
