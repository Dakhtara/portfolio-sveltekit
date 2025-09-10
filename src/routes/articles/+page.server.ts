import ListArticles from '$lib/articles/ListArticles';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const articles = await ListArticles();
	return { articles };
};
