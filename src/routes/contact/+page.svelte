<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { Check } from '@lucide/svelte';

	let submitted = $state(false);
</script>

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
			Get In Touch
		</h1>
		<p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-400">
			Ready to bring your ideas to life? Let's discuss your next project and create something
			amazing together.
		</p>
	</div>
</section>

<section class="py-20">
	<div class="mx-auto max-w-6xl px-6">
		<div>
			<div class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
				<h2 class="mb-6 text-3xl font-bold">Envoyer un message</h2>
				{#if submitted}
					<div class="py-12 text-center">
						<Check class="mx-auto mb-4 size-16 text-green-500" />
						<h3 class="mb-2 text-2xl font-semibold">Message envoyé !</h3>
						<p class="text-gray-400">
							Merci de m'avoir contacté. Je vous répondrai dès que possible.
						</p>
					</div>
				{:else}
					<form class="space-y-6">
						<div class="grid gap-4 md:grid-cols-2">
							<div>
								<label for="name" class="mb-2 block text-sm font-medium">Prénom</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								/>
							</div>
							<div>
								<label for="email" class="mb-2 block text-sm font-medium">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								/>
							</div>

							<div>
								<label for="subject" class="mb-2 block text-sm font-medium">Sujet</label>
								<input
									type="text"
									id="subject"
									name="subject"
									required
									class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								/>
							</div>
							<div>
								<label for="message" class="mb-2 block text-sm font-medium">Message</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									required
									class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
								></textarea>
							</div>
						</div>

						<Button
							type="submit"
							class="w-full rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 py-3 font-semibold text-white transition-all duration-300 hover:from-orange-600 hover:to-pink-600"
							onclick={() => (submitted = true)}
						>
							Envoyer
						</Button>
					</form>
				{/if}
			</div>
		</div>
		<div
			class="rounded-xl mt-8 border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6"
		>
			<div class="mb-2 flex items-center gap-3">
				<div class="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
				<h3 class="font-semibold text-green-400">Disponible pour de nouveaux projets</h3>
			</div>
			<p class="text-sm text-gray-300">
                Je suis actuellement ouvert à de nouvelles opportunités et collaborations. N'hésitez
                pas à me contacter pour discuter de votre projet.
			</p>
		</div>
	</div>
</section>
