<script>
	import ArticleSection from './comp/ArticlesSection/ArticleSection.svelte';
	import BeyondCodeSection from './comp/BeyondCodeSection/BeyondCodeSection.svelte';
	import ExperienceSection from './comp/ExperienceSection/ExperienceSection.svelte';
	import SectionProject from './comp/ProjectSection/ProjectSection.svelte';
	import SkillSection from './comp/SkillSection/SkillSection.svelte';
	import HeroSection from './comp/HeroSection/HeroSection.svelte';
	import SEO from '$lib/components/seo/SEO.svelte';
	import * as m from "$lib/paraglide/messages";

	let { data } = $props();
</script>

<SEO
	title="Anthony Matignon - {m.less_soft_gecko_honor()}"
	description={m.seo_homepage_description()}
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Anthony Matignon",
		"url": "https://amatignon.fr",
		"author": {
			"@type": "Person",
			"name": "Anthony Matignon",
			"url": "https://amatignon.fr",
			"jobTitle": m.less_soft_gecko_honor(),
			"sameAs": [
				"https://github.com/Dakhtara",
				"https://www.linkedin.com/in/anthonymatignon/"
			]
		}
	})}</script>`}
</svelte:head>

<HeroSection />

<SectionProject />

<ArticleSection articles={data.articles} />

<ExperienceSection />

<SkillSection />

<BeyondCodeSection />
