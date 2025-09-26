import { ListArticlesByLang } from "$lib/articles/ListArticles";
import { getLocale } from "$lib/paraglide/runtime";
import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = async () => {
    const locale = getLocale();
    const articlesByLang = await ListArticlesByLang(locale);
	return articlesByLang.map(article => ({ slug: article.slug }));
};


export const load: PageServerLoad = async ({ params }) => {
    const locale = getLocale();
    const articles = await ListArticlesByLang(locale);
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) {
        redirect(303, '/articles');
    }
    return { article };
};
