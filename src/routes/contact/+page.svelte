<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { Check, Send } from '@lucide/svelte';
	import * as m from '$lib/paraglide/messages';
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { onDestroy } from 'svelte';
	let { form }: PageProps = $props();

	let token: string | null = null;
	const onSubmit: SubmitFunction = async (event) => {
		if (token == null) {
			event.cancel();

            // @ts-expect-error
			grecaptcha.ready(async () => {
                // @ts-expect-error
				token = await grecaptcha.execute(PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' });
				setTimeout(() => event.formElement.requestSubmit());
			});

			return;
		}
		event.formData.append('token', token);
	};

	onDestroy(() => {
		// Remove Grecaptcha script to avoid multiple loading
		const script = document.querySelector( 'script[data-recaptcha="google"]' );
		if (script) {
			script.remove();
		}
		token = null;
	})
</script>

<svelte:head>
	<title>Contact - Anthony Matignon</title>
	<meta name="description" content={m.that_curly_anteater_sew()} />
	<script data-recaptcha="google" src="https://www.google.com/recaptcha/api.js?render={PUBLIC_RECAPTCHA_SITE_KEY}"></script>
</svelte:head>

<section class="relative overflow-hidden pt-32 pb-20">
	<div class="absolute inset-0">
		<div
			class="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 blur-3xl"
		></div>
		<div
			class="absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
		></div>
		<div
			class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
		></div>
	</div>

	<div class="relative mx-auto max-w-4xl px-6 text-center">
		<h1
			class="mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
		>
			{m.light_best_bee_support()}
		</h1>
		<p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-400">
			{m.helpful_any_pug_pride()}
		</p>
	</div>
</section>

<section class="py-8 md:py-20">
	<div class="mx-auto max-w-6xl px-6">
		<div>
			<div class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
				<h2 class="mb-6 text-3xl font-bold">{m.broad_large_slug_gasp()}</h2>
				{#if form?.success}
					<div class="py-12 text-center">
						<Check class="mx-auto mb-4 size-16 text-green-500" />
						<h3 class="mb-2 text-2xl font-semibold">{m.slow_vexed_kangaroo_drop()}</h3>
						<p class="text-gray-400">
							{m.gross_icy_sheep_agree()}
						</p>
					</div>
				{:else}
					<form class="space-y-6" method="POST" use:enhance={onSubmit}>
						<div class="grid gap-4 md:grid-cols-2">
							<div>
								<label for="name" class="mb-2 block text-sm font-medium"
									>{m.wise_only_shark_trip()}</label
								>
								<input
									type="text"
									id="name"
									name="name"
									required
									class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								/>
							</div>
							<div>
								<label for="email" class="mb-2 block text-sm font-medium"
									>{m.glad_polite_javelina_buy()}</label
								>
								<input
									type="email"
									id="email"
									name="email"
									required
									class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								/>
							</div>

							<div>
								<label for="subject" class="mb-2 block text-sm font-medium"
									>{m.crisp_tiny_shark_drip()}</label
								>
								<input
									type="text"
									id="subject"
									name="subject"
									required
									class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								/>
							</div>
							<div>
								<label for="message" class="mb-2 block text-sm font-medium"
									>{m.free_bald_quail_bump()}</label
								>
								<textarea
									id="message"
									name="message"
									rows="4"
									required
									class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								></textarea>
							</div>
						</div>

						<input type="text" name="lastname" class="hidden" />

                        {#if form?.error}
                            <p class="text-sm text-red-500">{form.error}</p>
                        {/if}
						<Button
							type="submit"
							class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 py-3 font-semibold text-white transition-all duration-300 hover:from-orange-600 hover:to-pink-600"
						>
							<Send class="size-6" />
							{m.known_heroic_anaconda_dash()}
						</Button>
					</form>
				{/if}
			</div>
		</div>
		<div
			class="mt-8 rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6"
		>
			<div class="mb-2 flex items-center gap-3">
				<div class="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
				<h3 class="font-semibold text-green-400">{m.vivid_large_gorilla_swim()}</h3>
			</div>
			<p class="text-sm text-gray-300">
				{m.bright_quick_butterfly_forgive()}
			</p>
		</div>
	</div>
</section>
