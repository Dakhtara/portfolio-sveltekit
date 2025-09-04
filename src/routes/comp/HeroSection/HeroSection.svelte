<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import AnimationHeader from '$lib/components/AnimationHeader.svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

    import * as m from "$lib/paraglide/messages";

    let heading: HTMLHeadingElement;
	let subheading: HTMLSpanElement;
    let buttonContainer: HTMLDivElement;
    let description: HTMLParagraphElement;
	onMount(() => {
		if (!browser) {
			return;
		}
		gsap.registerPlugin(SplitText);

		const splitHeading = new SplitText(heading, { type: 'words,chars' });
		gsap.from(splitHeading.chars, {
			duration: 1,
			y: -50,
			opacity: 0,
			stagger: 0.05,
			ease: 'power4.out'
		});

		gsap.from(subheading, {
			duration: 1,
            delay: 0.8,
			y: -40,
			opacity: 0,
			stagger: 0.1,
			ease: 'power4.out'
		});

        gsap.from(description, {
            duration: 1,
            delay: 1.3,
            y: -40,
            opacity: 0,
            ease: 'power4.out'
        })

        gsap.from(buttonContainer, {
            duration: 1.5,
            y: 40,
            delay: 1.3,
            opacity: 0,
            stagger: 1,
            ease: 'power4.out'
        })
	});
</script>

<section class="relative min-h-[54dvh] w-full overflow-hidden pt-24">
	<AnimationHeader />
	<div class="relative z-10 flex h-full flex-col items-center justify-center">
		<div class="max-w-6xl px-6 text-center text-white">
			<div class="mb-8">
				<div
					class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm"
				>
					<div class="size-2 animate-pulse rounded-full bg-green-400"></div>
					{m.long_game_sawfish_cry()}
				</div>
			</div>

			<h1
				bind:this={heading}
				class="mb-6 text-5xl leading-[0.9] font-bold tracking-tight text-balance md:text-7xl lg:text-8xl"
			>
				Anthony Matignon
			</h1>
			<p
				bind:this={subheading}
				class="text-5xl bg-gradient-to-r from-orange-400 via-red-400 to-cyan-400 bg-clip-text text-transparent"
			>
				{m.merry_blue_coyote_slide()}
        </p>
			<p
                bind:this={description}
				class="mx-auto mt-4 mb-10 max-w-2xl text-lg leading-relaxed font-light text-pretty text-white/70 md:text-xl"
			>
				{m.sour_sound_vole_enjoy()}
			</p>
			<div bind:this={buttonContainer} class="flex flex-col items-center justify-center gap-3 sm:flex-row">
				<Button>{m.any_stale_samuel_buzz()}</Button>
				<Button variant="ghost">{m.blue_bland_antelope_thrive()}</Button>
			</div>
		</div>
	</div>
</section>
