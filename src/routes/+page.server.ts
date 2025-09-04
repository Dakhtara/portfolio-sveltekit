import ListArticles from '$lib/articles/ListArticles';

export const load = async () => {
	const articles = await ListArticles();
	return { articles };
};
