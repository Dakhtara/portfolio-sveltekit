<script>
	import ArticleSection from './comp/ArticlesSection/ArticleSection.svelte';
	import BeyondCodeSection from './comp/BeyondCodeSection/BeyondCodeSection.svelte';
	import ExperienceSection from './comp/ExperienceSection/ExperienceSection.svelte';
	import SectionProject from './comp/ProjectSection/ProjectSection.svelte';
	import SkillSection from './comp/SkillSection/SkillSection.svelte';
	import HeroSection from './comp/HeroSection/HeroSection.svelte';
	import * as m from "$lib/paraglide/messages";

	let { data } = $props();
</script>

<svelte:head>
	<title>Anthony Matignon - {m.less_soft_gecko_honor()}</title>
</svelte:head>

<HeroSection />

<SectionProject />

<ArticleSection articles={data.articles} />

<ExperienceSection />

<SkillSection />

<BeyondCodeSection />
