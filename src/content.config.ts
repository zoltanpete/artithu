import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			industry: z.string().optional(),
			companySize: z.string().optional(),
			status: z.string().optional(),
			lifecycle: z.string().optional(),
			featured: z.boolean().default(false),
			services: z.array(z.string()).default([]),
			heroImage: image().optional(),
			seo: z
				.object({
					title: z.string().optional(),
					description: z.string().optional(),
					noindex: z.boolean().default(false),
				})
				.optional(),
		}),
});

export const collections = { 'case-studies': caseStudies };
