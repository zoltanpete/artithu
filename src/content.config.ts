import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
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

// --- Localization primitives (Task 007B) ------------------------------------
// See DOC/09-TECHNICAL-ARCHITECTURE.md "Localization" and src/lib/i18n.ts.
//
// `localizedText`: every locale is required — reserved for content that is
// genuinely locale-neutral or already approved in both languages (site
// chrome, technical/business vocabulary, accessibility descriptions).
//
// `localizedGated`: `hu` is required, `en` is optional. Used for approved
// Hungarian marketing/positioning copy that has no approved English
// translation yet. This is the schema-level enforcement of Task 007B's
// translation-completeness policy: a missing `en` is a valid, representable
// content state, not a build error and not something `localize()` will
// silently paper over with Hungarian text.
const localizedText = () => z.object({ hu: z.string(), en: z.string() });
const localizedGated = () => z.object({ hu: z.string(), en: z.string().optional() });

const ctaGated = () => z.object({ label: localizedGated(), href: z.string() });

const systemMapNodeIcon = z.enum(['table', 'mail', 'system', 'manual', 'api', 'dots', 'check', 'document']);

const homeSchema = z.object({
	seo: z.object({
		title: localizedGated(),
		description: localizedGated(),
	}),
	hero: z.object({
		eyebrow: localizedGated(),
		title: localizedGated(),
		lead: localizedGated(),
		primaryCta: ctaGated(),
		secondaryCta: ctaGated(),
		systemMap: z.object({
			coreLabel: localizedText(),
			caption: localizedText(),
			captionSub: localizedGated(),
			ariaLabel: localizedText(),
			mobileSourceIds: z.tuple([z.string(), z.string()]),
			sources: z
				.array(
					z.object({
						id: z.string(),
						label: localizedText(),
						icon: systemMapNodeIcon,
						route: z.enum(['primary', 'secondary', 'exception']).optional(),
					}),
				)
				.min(1),
			outputs: z.tuple([
				z.object({ id: z.string(), label: localizedText(), icon: systemMapNodeIcon }),
				z.object({ id: z.string(), label: localizedText(), icon: systemMapNodeIcon }),
			]),
		}),
	}),
	problem: z.object({
		eyebrow: localizedGated(),
		headline: localizedGated(),
		signals: z.array(z.object({ id: z.string(), quote: localizedGated() })).min(1),
		closing: localizedGated(),
		link: ctaGated(),
	}),
	decision: z.object({
		headline: localizedGated(),
		supporting: localizedGated(),
		paragraph: localizedGated(),
		paths: z
			.array(
				z.object({
					id: z.string(),
					title: localizedGated(),
					description: localizedGated(),
					link: ctaGated(),
				}),
			)
			.length(2),
	}),
	work: z.object({
		eyebrow: localizedGated(),
		headline: localizedGated(),
		cases: z.array(z.object({ id: z.string(), order: z.number().int().positive(), title: localizedGated() })).min(1),
		cta: ctaGated(),
	}),
	longevity: z.object({
		headline: localizedGated(),
		statement: localizedGated(),
	}),
	tardify: z.object({
		eyebrow: localizedGated(),
		headline: localizedGated(),
		lead: localizedGated(),
		links: z.array(ctaGated()).min(1),
	}),
	process: z.object({
		eyebrow: localizedGated(),
		headline: localizedGated(),
		steps: z.array(z.object({ id: z.string(), order: z.number().int().positive(), label: localizedGated() })).min(1),
	}),
	seniorWho: z.object({
		eyebrow: localizedGated(),
		headline: localizedGated(),
		cta: ctaGated(),
	}),
	finalCta: z.object({
		headline: localizedGated(),
		copy: localizedGated(),
		cta: ctaGated(),
	}),
});

const pages = defineCollection({
	loader: file('src/content/pages/home/content.yaml'),
	schema: homeSchema,
});

const navSchema = z.object({
	logoLabel: z.string(),
	ariaLabel: localizedText(),
	mobileMenuTriggerText: localizedText(),
	mobileMenuTriggerAriaLabel: localizedText(),
	links: z.array(z.object({ label: localizedText(), href: z.string() })).min(1),
	customDev: z.object({
		summary: localizedText(),
		items: z.array(z.object({ label: localizedText(), href: z.string() })).min(1),
	}),
	cta: z.object({ label: localizedText(), href: z.string() }),
});

const nav = defineCollection({
	loader: file('src/content/nav/content.yaml'),
	schema: navSchema,
});

export const collections = { 'case-studies': caseStudies, pages, nav };
