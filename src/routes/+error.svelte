<script>
	import AnimationHeader from "$lib/components/animation-header/AnimationHeader.svelte";
	import Button from "$lib/components/button/Button.svelte";
	import { localizeHref } from "$lib/paraglide/runtime";
	import * as m from "$lib/paraglide/messages.js";

</script>

<svelte:head>
    <title>{m.error_page_title()}</title>
    <meta name="description" content={m.error_page_description()} />
</svelte:head>


<section  class="relative min-h-[54dvh] w-full overflow-hidden pt-24">
    <AnimationHeader />
    <div class="relative z-10 flex h-full flex-col items-center justify-center">
		<div class="max-w-6xl px-6 text-center text-white">


			<h1
				class="mt-20 mb-6 text-2xl leading-[0.9] font-bold tracking-tight text-balance md:text-5xl lg:text-5xl"
			>
				{m.error_page_heading()}
			</h1>
			<p
				class=" text-2xl leading-relaxed text-white/70"
			>
				{m.error_page_content()}
			</p>
			
			<div
				class="flex mt-12 items-center pb-12 justify-center gap-3"
			>
				<Button href={localizeHref('/')}>
					{m.error_page_back_home()}
				</Button>
			</div>
		</div>
	</div>
</section>