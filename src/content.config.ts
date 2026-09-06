import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/caseStudies' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			client: z.string(),
			number: z.string(), // "002" — landing-card eyebrow + case badge
			disciplines: z.array(z.string()), // dot-separated list on the landing card
			summary: z.string(), // landing-card paragraph
			thumbnail: image(), // landing card + browser-mock screenshot
			thumbnailAlt: z.string(),

			projectHeading: z.string(), // "The Problem" | "The Project"
			projectSectionId: z.string(), // "problem" | "project"
			meta: z.array(z.object({ label: z.string(), value: z.string() })),
			inShort: z.object({ lead: z.string(), boldClaim: z.string() }),

			impact: z.array(z.object({ number: z.string(), text: z.string() })),

			processHeading: z.string(), // "My Process" | "The Process"
			stepsTotal: z.number(), // count of <ProcessStep> instances in the MDX body
			hasKeyFindings: z.boolean().default(false),
			endProductHeading: z.string(),
			decisionsTotal: z.number(), // count of <Decision> instances (the TOC array itself lives in the MDX body)

			outcomeHeading: z.string(),
			stats: z.array(z.object({ figure: z.string(), caption: z.string() })), // figure is a free string ("SUS 75", "1 → 12")
			rolloutLabel: z.string(),

			seoDescription: z.string().optional(),
		}),
});

const snapshots = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/snapshots' }),
	schema: () =>
		z.object({
			title: z.string(),
			client: z.string(),
			number: z.string(),
			intro: z.string(),
			tags: z.array(z.string()), // domain-tag strip at the top of the page
			seoDescription: z.string().optional(),
		}),
});

export const collections = { caseStudies, snapshots };
