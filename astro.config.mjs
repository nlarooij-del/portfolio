// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	// Server output is required for the "Currently listening" server island
	// (NowPlayingContent.astro) to actually get an on-demand Vercel Function —
	// every other page opts back into static prerendering individually via
	// `export const prerender = true`.
	output: 'server',
	adapter: vercel(),
});
