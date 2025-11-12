import { paraglideVitePlugin } from '@inlang/paraglide-js';
import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { thumbnailRegistryPlugin } from './vite-plugins/thumbnail-registry.js';

export default defineConfig({
	plugins: [
		thumbnailRegistryPlugin(), // Generate thumbnail registry from assets
		tailwindcss(),
        enhancedImages(), // must come before the SvelteKit plugin
		sveltekit(),
		devtoolsJson(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ["url", "cookie", "baseLocale"]
		})
	]
});
