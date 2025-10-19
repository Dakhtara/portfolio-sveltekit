<script lang="ts">
	type Props = {
		sources: [{ src: string; format: string }];
        alt: string;
	};

	let { sources, alt }: Props = $props();
</script>

<picture>
    {#each sources as source}
        <source srcset={source.src} type={source.format} />
    {/each}
    <img src={sources[0].src} alt={alt} class="rounded-md border border-white/10" />
</picture>
