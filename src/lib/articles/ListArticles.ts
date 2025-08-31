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

export default async function ListArticles(): Promise<Article[]> {
    // grep all the articles from the dir content
    const articles = import.meta.glob("./**/*.svx");
    const processed = [];
    for (const path in articles) {
        const source = await articles[path]();
        processed.push({...source.metadata, content: render(source.default)});
    }

    return processed;
}
