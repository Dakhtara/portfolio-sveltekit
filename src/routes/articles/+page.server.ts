import { ListArticlesByLang } from '$lib/articles/ListArticles';
import { getLocale } from '$lib/paraglide/runtime';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const locale = getLocale();
	const articles = await ListArticlesByLang(locale);
	return { articles };
};
