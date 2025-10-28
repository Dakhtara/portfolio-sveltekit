import type { Component } from 'svelte';
import { render } from 'svelte/server';

type Article = ArticleMetadata & {
	content: {
		html: string;
		body: string;
	};
};

type ArticleMetadata = {
	slug: string;
	title: string;
	description: string;
	date: string;
	readTime?: string;
	category?: string;
	tags?: string[];
	thumbnail?: string;
	lang: string;
};

export default async function ListArticles(): Promise<Article[]> {
	// grep all the articles from the dir content
	const articles = import.meta.glob('./content/**/*.svx');
	const processed = [];
	for (const path in articles) {
		const source: { metadata: ArticleMetadata; default: Component } = (await articles[path]()) as {
			metadata: ArticleMetadata;
			default: Component;
		};
		const rendered = render(source.default);
		processed.push({ 
			...source.metadata, 
			content: {
				html: rendered.html,
				body: rendered.body
			}
		});
	}

	// Sort descending by date by default
	return processed.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
}

export async function ListArticlesByLang(lang: string): Promise<Article[]> {
	const articles = await ListArticles();
	return articles.filter((article) => article.lang === lang);
}
