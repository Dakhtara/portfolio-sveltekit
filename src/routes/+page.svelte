<script>
	import ArticleSection from './comp/ArticlesSection/ArticleSection.svelte';
	import BeyondCodeSection from './comp/BeyondCodeSection/BeyondCodeSection.svelte';
	import ExperienceSection from './comp/ExperienceSection/ExperienceSection.svelte';
	import SectionProject from './comp/ProjectSection/ProjectSection.svelte';
	import SkillSection from './comp/SkillSection/SkillSection.svelte';
	import HeroSection from './comp/HeroSection/HeroSection.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Anthony Matignon - Développeur Front et Back</title>
</svelte:head>

<HeroSection />

<SectionProject />

<ArticleSection articles={data.articles} />

<ExperienceSection />

<SkillSection />

<BeyondCodeSection />
