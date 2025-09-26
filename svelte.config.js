import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { createHighlighter } from 'shiki';

const theme = 'catppuccin-macchiato';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'html', 'css', 'bash', 'json', 'markdown', 'svelte']
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	},
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx']
};

export default config;
