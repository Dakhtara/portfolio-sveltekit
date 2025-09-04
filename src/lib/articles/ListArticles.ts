import type { Component } from "svelte";
import { render } from "svelte/server";

type Article = {
    slug: string;
    title: string;
    description: string;
    date: string;
    content: {
        html: string;
        body: string;
    }
}

type ArticleMetadata = {
    slug: string;
    title: string;
    description: string;
    date: string;
};

export default async function ListArticles(): Promise<Article[]> {
    // grep all the articles from the dir content
    const articles = import.meta.glob("./**/*.svx");
    const processed = [];
    for (const path in articles) {
        const source: { metadata: ArticleMetadata; default: Component } = await articles[path]() as { metadata: ArticleMetadata; default: Component };
        processed.push({...source.metadata, content: render(source.default)});
    }

    // Sort descending by date by default
    return processed.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
