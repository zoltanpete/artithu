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

// `customDevPage` (Task 009) is deliberately its own collection with its own
// narrow schema, not folded into `pages` above. Astro Content Collections
// apply one schema per collection; the homepage and this pillar page have
// genuinely different section shapes (no System Map, no Longevity/Tardify/
// Process equivalents here), so sharing a schema would mean either a
// discriminated union (real complexity for exactly two data points) or
// silently-optional fields that don't belong to either page. Each new
// page-type gets its own collection instead — narrow schema per real need,
// the same reasoning already used for `SystemMap`'s prop API (see
// DOC/07-DESIGN-SYSTEM.md "Production architecture decision (Task 006)").
const customDevPageSchema = z.object({
	seo: z.object({
		title: localizedGated(),
		description: localizedGated(),
	}),
	hero: z.object({
		eyebrow: localizedGated(),
		title: localizedGated(),
		lead: localizedGated(),
		cta: ctaGated(),
		// Task 009A brand-face visual ("Fit / Friction Field" — see
		// OperatingFitField.astro). Every label here is short technical/
		// categorical vocabulary (the same category as SystemMap's source/
		// output labels), not marketing prose, so — matching that precedent —
		// both locales are required rather than gated.
		visual: z.object({
			centerLabel: localizedText(),
			ariaLabel: localizedText(),
			legend: z.object({
				friction: localizedText(),
				fit: localizedText(),
			}),
			nodes: z
				.tuple([
					z.object({ id: z.string(), label: localizedText(), friction: z.boolean() }),
					z.object({ id: z.string(), label: localizedText(), friction: z.boolean() }),
					z.object({ id: z.string(), label: localizedText(), friction: z.boolean() }),
					z.object({ id: z.string(), label: localizedText(), friction: z.boolean() }),
				])
				.describe('Exactly four — the component geometry is only verified at this count.'),
		}),
	}),
	justified: z.object({
		headline: localizedGated(),
		signals: z
			.array(
				z.object({
					id: z.string(),
					order: z.number().int().positive(),
					title: localizedGated(),
					body: localizedGated(),
				}),
			)
			.min(1),
	}),
	notJustified: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	directions: z.object({
		headline: localizedGated(),
		paths: z
			.array(
				z.object({
					id: z.string(),
					title: localizedGated(),
					description: localizedGated(),
					link: ctaGated(),
					evidence: z.object({
						caseId: z.string(),
						order: z.number().int().positive(),
						title: localizedGated(),
					}),
				}),
			)
			.length(2),
		evidenceLink: ctaGated(),
	}),
	approach: z.object({
		headline: localizedGated(),
		statement: localizedGated(),
	}),
	finalCta: z.object({
		headline: localizedGated(),
		copy: localizedGated(),
		cta: ctaGated(),
	}),
});

const customDevPage = defineCollection({
	loader: file('src/content/pages/egyedi-fejlesztes/content.yaml'),
	schema: customDevPageSchema,
});

// `munkainkPage` (Task 010) — the evidence-hub page. Its own collection,
// same reasoning as `customDevPage`: a genuinely different section shape
// (no System Map, no justified/notJustified/directions structure), so its
// own narrow schema rather than a forced fit into an existing one.
const munkainkPageSchema = z.object({
	seo: z.object({
		title: localizedGated(),
		description: localizedGated(),
	}),
	hero: z.object({
		eyebrow: localizedGated(),
		title: localizedGated(),
		lead: localizedGated(),
		// Task 010A brand-face visual ("Ambient Operating Field" — see
		// LivingSystemField.astro). One short technical/categorical label,
		// same classification as SystemMap's/OperatingFitField's own labels
		// — not marketing prose — so both locales are required.
		visual: z.object({
			label: localizedText(),
			ariaLabel: localizedText(),
		}),
	}),
	principle: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	// Stable per-case ids (`case-01`/`case-02`) already used as the same
	// semantic identifiers in home/content.yaml (`work.cases[].id`) and
	// egyedi-fejlesztes/content.yaml (`directions.paths[].evidence.caseId`)
	// — kept consistent here rather than reinvented, so a future case-study
	// detail page can be linked from all three places without an ID
	// mismatch. Only the working title is content; `direction` records the
	// already-approved Case Study ↔ custom-development-direction mapping
	// (DOC/02) as a real link, not a decorative connector.
	cases: z
		.array(
			z.object({
				id: z.string(),
				order: z.number().int().positive(),
				title: localizedGated(),
				direction: z.object({ label: localizedGated(), href: z.string() }),
			}),
		)
		.min(1),
	finalCta: z.object({
		headline: localizedGated(),
		copy: localizedGated(),
		cta: ctaGated(),
	}),
});

const munkainkPage = defineCollection({
	loader: file('src/content/pages/munkaink/content.yaml'),
	schema: munkainkPageSchema,
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

export const collections = { 'case-studies': caseStudies, pages, customDevPage, munkainkPage, nav };
