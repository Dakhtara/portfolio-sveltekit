<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
    import gsap from 'gsap';
	type Props = {
		level: number;
	};

	let { level }: Props = $props();

    let ref: HTMLDivElement;

    onMount(() => {
        if (browser) {
            animate();

        }
	});

    function animate() {
        if (ref) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        fillBar();
                        observer.unobserve(entry.target); // Stop observing after the first intersection
                    }
                });
            }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
            observer.observe(ref);
        }
    }

    function fillBar() {
        gsap.fromTo(ref, 
            { width: '0%' }, 
            { width: `${level}%`, duration: 1.5, ease: 'power2.out' }
        );
    }
</script>

<div class="h-2 overflow-hidden rounded-full bg-white/5">
	<div 
        bind:this={ref}
		class="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
		style={`width: 0%`}
	></div>
</div>
