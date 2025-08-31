import ListArticles from "$lib/articles/ListArticles";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = async () => {
    const articles = await ListArticles();

	return articles.map(article => ({ slug: article.slug }));
};


export const load: PageServerLoad = async ({ params }) => {
    const articles = await ListArticles();
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) {
        throw new Error('Article not found');
    }
    return { article };
};