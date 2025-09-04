<script>
	import AnimationHeader from '$lib/components/AnimationHeader.svelte';
	import ArticleSection from '$lib/components/ArticlesSection/ArticleSection.svelte';
	import BeyondCodeSection from '$lib/components/BeyondCodeSection/BeyondCodeSection.svelte';
	import Button from '$lib/components/Button.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection/ExperienceSection.svelte';
	import SectionProject from '$lib/components/SectionProject/SectionProject.svelte';
	import SkillSection from '$lib/components/SkillSection/SkillSection.svelte';

	let {data} = $props(); 
</script>

<svelte:head>
	<title>Anthony Matignon - Développeur Front et Back</title>
</svelte:head>

<section class="relative min-h-[50dvh] w-full overflow-hidden pt-24">
	<AnimationHeader />
	<div class="relative z-10 flex h-full flex-col items-center justify-center">
		<div class="max-w-6xl px-6 text-center text-white">
			<div class="mb-8">
				<div
					class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm"
				>
					<div class="size-2 animate-pulse rounded-full bg-green-400"></div>
					Disponible pour des missions en freelance
				</div>
			</div>

			<h1
				class="mb-6 text-5xl leading-[0.9] font-bold tracking-tight text-balance md:text-7xl lg:text-8xl"
			>
				Anthony Matignon
				<span
					class="block bg-gradient-to-r from-orange-400 via-red-400 to-cyan-400 bg-clip-text text-transparent"
				>
					Développeur Front et Back
				</span>
			</h1>
			<p
				class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-pretty text-white/70 md:text-xl"
			>
				Développeur web passionné par la création d'expériences utilisateur fluides et engageantes.
			</p>
			<div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
				<Button>Voir mes projets</Button>
				<Button variant="ghost">Me contacter</Button>
			</div>
		</div>
	</div>
</section>

<SectionProject />

<ArticleSection articles={data.articles} />

<ExperienceSection />

<SkillSection />

<BeyondCodeSection />