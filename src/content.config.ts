import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

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

// `caseStudies` (Task 003, schema extended Task 016) — the canonical
// `/munkaink/[case-study]/` detail-page content, one Markdown entry per case.
// Kept as the existing `glob()` collection rather than folded into a new
// page-type collection, per DOC/09-TECHNICAL-ARCHITECTURE.md's Task 015
// planning note: this genuinely is multiple *entries within one page type*
// (unlike `pages`/`customDevPage`/etc., which each model one distinct page),
// so one shared schema across CS01/CS02 entries is the right shape — not a
// parallel collection per case.
//
// `caseId` is the stable cross-page linking key already used in
// home/munkaink/egyedi-fejlesztes content YAML (`case-01`/`case-02`); `slug`
// is the separate, descriptive-Hungarian-word URL segment — the two are
// deliberately different fields because the site's own routing convention
// (every route is a descriptive word, never a technical id) rules out
// reusing `caseId` directly in the URL (see DOC/03's "Case-study canonical
// route architecture" note).
//
// `sections` mirrors DOC/06-CASE-STUDY-ARCHITECTURE.md's "shared structure"
// vocabulary (hero → starting situation → why packaged software was not
// enough → solution logic → how it works in practice → integrations →
// business result → long term → what we learned → CTA), but every section
// past `hero` is optional: DOC/06's own "Proposed content architecture"
// deliberately sequences and weights CS01 and CS02 differently (e.g. CS01
// omits "why not enough"/"integrations" as too thin; CS02 gives
// "integrations" real weight) — one schema, two genuinely different real
// entries, not a forced-identical template. `screenshotId` on a section
// cross-references `screenshots[].id` rather than duplicating image data.
//
// No `heroImage` (single-image) field — the old Task 003 placeholder shape —
// since DOC/06's screenshot-placement strategy calls for a per-case array,
// now `screenshots[]`. Fields with no confirmed real content yet (`industry`
// unconfirmed for CS02, `companySize` gated, `featured`/`services` with no
// current consumer) are deliberately omitted rather than carried forward
// speculatively — see Task 016's own "do not over-generalize" instruction.
const caseStudySectionCore = () => z.object({ headline: localizedGated(), body: localizedGated(), screenshotId: z.string().optional() });

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
	schema: ({ image }) =>
		z.object({
			caseId: z.string(),
			slug: z.string(),
			title: localizedGated(),
			// The one-sentence editorial-essence statement from DOC/06's "Case
			// Study 01 vs. 02 — editorial distinction" — the thesis the Hero
			// states directly, not a generic "meet our client" opener.
			essence: localizedGated(),
			summary: localizedGated(),
			// A restrained, verified-duration badge (DOC/12-ASSET-STRATEGY.md's
			// "Legacy screenshots" rule: "IN USE / [verified duration]", not a
			// placeholder-style status label) — optional since the exact
			// wording is a per-case editorial decision, not every case needs one.
			evidenceBadge: localizedGated().optional(),
			screenshots: z
				.array(
					z.object({
						id: z.string(),
						image: image(),
						alt: localizedText(),
						caption: localizedGated().optional(),
					}),
				)
				.default([]),
			sections: z.object({
				hero: z.object({ eyebrow: localizedGated().optional(), statement: localizedGated() }),
				startingSituation: caseStudySectionCore().optional(),
				whyNotEnough: caseStudySectionCore().optional(),
				solutionLogic: caseStudySectionCore().optional(),
				practice: caseStudySectionCore().optional(),
				concreteExample: z
					.object({ headline: localizedGated(), before: localizedGated(), after: localizedGated(), screenshotId: z.string().optional() })
					.optional(),
				integrations: caseStudySectionCore().optional(),
				businessResult: caseStudySectionCore().optional(),
				longTerm: caseStudySectionCore().optional(),
				learned: caseStudySectionCore().optional(),
			}),
			// Canonical page → supporting service route (DOC/03's "Cross-link
			// direction"): which `/egyedi-fejlesztes/...` direction this case
			// belongs to.
			directionLink: ctaGated(),
			finalCta: z.object({ headline: localizedGated(), copy: localizedGated(), cta: ctaGated() }),
			seo: z.object({
				title: localizedGated(),
				description: localizedGated(),
				noindex: z.boolean().default(false),
			}),
		}),
});

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
		cases: z
			.array(
				z.object({
					id: z.string(),
					order: z.number().int().positive(),
					title: localizedGated(),
					// Canonical case-detail route (Task 016). Optional: a case may be
					// listed here before its own detail page exists — see the
					// homepage Work section's own header comment.
					href: z.string().optional(),
				}),
			)
			.min(1),
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
						// Canonical case-detail route (Task 016) — same optional-href
						// reasoning as `munkainkPage.cases[].href`.
						href: z.string().optional(),
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
				// Canonical case-detail route (Task 016), separate from `direction`
				// below (the supporting service route) — DOC/03's two distinct
				// cross-link directions. Optional for the same reason as the
				// homepage's own `work.cases[].href`.
				href: z.string().optional(),
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

// `tardifyPage` (Task 011, Hero specimen reopened Task 011A) — same
// reasoning as `customDevPage`/`munkainkPage`: its own collection, its own
// schema. Task 011 shipped with no `hero.visual` field at all; Task 011A
// reopened that decision after owner review found the page visually inert
// and added `TardifySpecimen` (see DOC/07 "Tardify brand-face — Product
// Specimen Plate (Task 011A)"). The specimen's one wordmark ("TARDIFY") is
// a hardcoded literal in the component, not YAML content — it's the
// product's own proper noun, not a locale-authored decision — so the only
// new field is the accessible description, the same minimal footprint as
// every other page's `hero.visual.ariaLabel`.
const tardifyPageSchema = z.object({
	seo: z.object({
		title: localizedGated(),
		description: localizedGated(),
	}),
	hero: z.object({
		eyebrow: localizedGated(),
		title: localizedGated(),
		lead: localizedGated(),
		cta: ctaGated(),
		visual: z.object({
			ariaLabel: localizedText(),
		}),
	}),
	ownProduct: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	sameStandard: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	relationship: z.object({
		headline: localizedGated(),
		body: localizedGated(),
		link: ctaGated(),
	}),
	finalCta: z.object({
		headline: localizedGated(),
		copy: localizedGated(),
		cta: ctaGated(),
	}),
});

const tardifyPage = defineCollection({
	loader: file('src/content/pages/tardify/content.yaml'),
	schema: tardifyPageSchema,
});

// `rolunkPage` (Task 012) — same reasoning as the other three page
// collections: its own `file()` collection, its own schema. No brand-face
// visual field exists here at all — Task 012's Hero is a typography-led
// composition (Concept C, selected over two rejected diagram concepts; see
// DOC/07 "Rólunk art direction (Task 012)"), so `hero.titleLead`/
// `hero.titleAccent` split the already-approved homepage Senior/Who
// headline into two content-authored clauses (not a template-side string
// split) purely so the two can be styled differently — the same rule this
// project already applies everywhere: every visible string is a content
// field, never sliced from a longer one in a component.
const rolunkPageSchema = z.object({
	seo: z.object({
		title: localizedGated(),
		description: localizedGated(),
	}),
	hero: z.object({
		eyebrow: localizedGated(),
		titleLead: localizedGated(),
		titleAccent: localizedGated(),
		lead: localizedGated(),
	}),
	practice: z.object({
		headline: localizedGated(),
		body: localizedGated(),
		links: z.array(ctaGated()).min(1),
	}),
	approach: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	continuity: z.object({
		headline: localizedGated(),
		statement: localizedGated(),
		body: localizedGated(),
		tardifyLink: ctaGated(),
	}),
	finalCta: z.object({
		headline: localizedGated(),
		copy: localizedGated(),
		cta: ctaGated(),
	}),
});

const rolunkPage = defineCollection({
	loader: file('src/content/pages/rolunk/content.yaml'),
	schema: rolunkPageSchema,
});

// `kapcsolatPage` (Task 013) — same reasoning as the other four page
// collections: its own `file()` collection, its own schema. `hero.prompts`
// are the "what's useful to tell us" prompts (Section 2's own content) —
// authored once, reused by both the Hero visual (if the winning concept
// needs them) and Section 2 itself, never duplicated in YAML. Every prompt
// is short/categorical (a question, not a claim about ARTIT or the
// visitor), so `localizedText` applies the same way `OperatingFitField`'s
// node labels do. The `form` object holds only field labels/placeholders
// and the Formspree endpoint — no submitted data is ever stored in this
// repo; see DOC/13 for the approval record of the endpoint itself.
const kapcsolatPageSchema = z.object({
	seo: z.object({
		title: localizedGated(),
		description: localizedGated(),
	}),
	hero: z.object({
		eyebrow: localizedGated(),
		title: localizedGated(),
		lead: localizedGated(),
	}),
	prompts: z
		.array(z.object({ id: z.string(), label: localizedText() }))
		.min(1),
	useful: z.object({
		headline: localizedGated(),
	}),
	notNeeded: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	contact: z.object({
		headline: localizedGated(),
		form: z.object({
			endpoint: z.url(),
			subject: z.string(),
			nameLabel: localizedText(),
			emailLabel: localizedText(),
			messageLabel: localizedText(),
			submitLabel: localizedText(),
			submittingLabel: localizedText(),
			successMessage: localizedText(),
			errorMessage: localizedText(),
		}),
		privacyNote: localizedGated(),
	}),
	closing: z.object({
		statement: localizedGated(),
	}),
});

const kapcsolatPage = defineCollection({
	loader: file('src/content/pages/kapcsolat/content.yaml'),
	schema: kapcsolatPageSchema,
});

// `privacyPage` (Task 019) — same reasoning as the other six page
// collections: its own `file()` collection, its own schema. Split into one
// object per notice section (matching DOC/13's §12 structure exactly) so
// the component can render each as its own plain section without any
// generic "sections list" abstraction — there is exactly one real entry,
// so a flexible/looped shape would be speculative generality, the same
// judgment already applied throughout this file. Facts that are identical
// regardless of locale (the company/hosting-provider identity block) are
// plain `z.string()`, not `localizedGated()` — a registration number or a
// street address is not marketing prose to translate, the same
// classification already used for `kapcsolatPage.contact.form.endpoint`.
const privacyPageSchema = z.object({
	seo: z.object({
		title: localizedGated(),
		description: localizedGated(),
	}),
	hero: z.object({
		title: localizedGated(),
		lead: localizedGated(),
	}),
	controller: z.object({
		headline: localizedGated(),
		intro: localizedGated(),
		companyName: z.string(),
		address: z.string(),
		registrationNumber: z.string(),
		taxNumber: z.string(),
		email: z.string(),
	}),
	websiteOperation: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	contactForm: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	hosting: z.object({
		headline: localizedGated(),
		body: localizedGated(),
		providerName: z.string(),
		providerAddress: z.string(),
		providerRegistrationNumber: z.string(),
		providerTaxNumber: z.string(),
		providerVat: z.string(),
	}),
	cookiesAnalytics: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	retentionRights: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
	contact: z.object({
		headline: localizedGated(),
		body: localizedGated(),
	}),
});

const privacyPage = defineCollection({
	loader: file('src/content/pages/privacy/content.yaml'),
	schema: privacyPageSchema,
});

// `footer` (Task 019) — the site's first shared cross-page chrome
// collection besides `nav`, same reasoning: pure wayfinding/identity text,
// not marketing prose, so `localizedText`/plain facts throughout, no
// `localizedGated`. One entry, rendered identically (locale-parameterized)
// on every page via a shared `Footer.astro` component.
const footerSchema = z.object({
	companyName: z.string(),
	tagline: localizedText(),
	links: z.array(z.object({ label: localizedText(), href: z.string() })).min(1),
	// No public email here (removed post-Task-019 at the owner's request) —
	// the address stays published once, on the privacy notice, where it
	// serves a real role as the controller/contact address
	// (`privacyPage.controller.email`/`.contact.email`), rather than
	// repeated as a second, less contextualized copy in the footer.
	// The year itself is computed at render time (`new Date().getFullYear()`),
	// not stored as content — a hardcoded year would silently go stale.
	rightsReservedLabel: localizedText(),
});

const footer = defineCollection({
	loader: file('src/content/footer/content.yaml'),
	schema: footerSchema,
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

export const collections = {
	'case-studies': caseStudies,
	pages,
	customDevPage,
	munkainkPage,
	tardifyPage,
	rolunkPage,
	kapcsolatPage,
	privacyPage,
	nav,
	footer,
};
