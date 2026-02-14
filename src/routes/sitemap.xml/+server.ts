import { ListArticlesByLang } from '$lib/articles/ListArticles';
import { locales, baseLocale } from '$lib/paraglide/runtime';

const SITE_URL = 'https://amatignon.fr';

const staticPages = ['', '/articles', '/contact'];

function localizedPath(path: string, locale: string): string {
	if (locale === baseLocale) {
		return path || '/';
	}
	return `/${locale}${path}`;
}

export const prerender = true;

export async function GET() {
	const articlesByLocale = await Promise.all(
		locales.map(async (locale) => {
			const articles = await ListArticlesByLang(locale);
			return { locale, articles };
		})
	);

	const urls: string[] = [];

	// Static pages with hreflang alternates
	for (const page of staticPages) {
		const alternates = locales
			.map(
				(loc) =>
					`    <xhtml:link rel="alternate" hreflang="${loc}" href="${SITE_URL}${localizedPath(page, loc)}" />`
			)
			.join('\n');
		const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${localizedPath(page, baseLocale)}" />`;

		for (const locale of locales) {
			urls.push(`  <url>
    <loc>${SITE_URL}${localizedPath(page, locale)}</loc>
${alternates}
${xDefault}
  </url>`);
		}
	}

	// Article pages with hreflang alternates
	// Group articles by slug across locales
	const slugMap = new Map<string, { locale: string; date: string }[]>();
	for (const { locale, articles } of articlesByLocale) {
		for (const article of articles) {
			if (!slugMap.has(article.slug)) {
				slugMap.set(article.slug, []);
			}
			slugMap.get(article.slug)!.push({ locale, date: article.date });
		}
	}

	for (const [slug, entries] of slugMap) {
		const alternates = entries
			.map(
				(entry) =>
					`    <xhtml:link rel="alternate" hreflang="${entry.locale}" href="${SITE_URL}${localizedPath(`/articles/${slug}`, entry.locale)}" />`
			)
			.join('\n');

		for (const entry of entries) {
			urls.push(`  <url>
    <loc>${SITE_URL}${localizedPath(`/articles/${slug}`, entry.locale)}</loc>
    <lastmod>${new Date(entry.date).toISOString().split('T')[0]}</lastmod>
${alternates}
  </url>`);
		}
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
