// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
	// Fully static: no server islands, no client-side framework runtime.
	output: 'static',
	adapter: vercel(),
	integrations: [mdx()],
	markdown: {
		remarkPlugins: [remarkGfm],
	},
});
