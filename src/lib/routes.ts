/**
 * HU ↔ EN canonical route map (Task 018) — the single source of truth
 * `18-...` asked for (§18 "Alternate mapping"): one place that knows every
 * real production page's path in both locales, used by the language
 * switch, `hreflang` generation, breadcrumbs, and every internal link.
 *
 * English slugs are natural English words, not literal HU-word transliterations
 * (§6) — `/munkaink/` → `/en/work/`, `/egyedi-fejlesztes/` →
 * `/en/custom-development/`, etc. — decided together with each page's final
 * EN title, not before it (same discipline `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`
 * already applied to the HU case-study slugs in Task 016).
 *
 * Deliberately NOT a schema-level change (content YAML/Markdown `href` fields
 * still store plain HU-canonical path strings, exactly as before Task 018) —
 * `translateHref()` below resolves any such HU path to its EN equivalent at
 * render time when needed. This keeps every existing content file untouched
 * and avoids the schema churn a "store both locales' hrefs in content" design
 * would have required across a dozen already-shipped page schemas — the
 * "reuse the existing localized content architecture where appropriate"
 * instruction (§4), applied to hrefs the same way `localize()`/`localizeGated()`
 * already apply to text.
 */

import type { Locale } from './i18n';

/** Every real, production HU page this site has — the map's own keys are
 * only used internally by this module; nothing else needs to import them. */
const ROUTE_PAIRS: [hu: string, en: string][] = [
	['/', '/en/'],
	['/egyedi-fejlesztes/', '/en/custom-development/'],
	['/munkaink/', '/en/work/'],
	['/munkaink/uzemi-rendszer/', '/en/work/operational-system/'],
	['/munkaink/erp-integracio/', '/en/work/erp-integration/'],
	['/tardify/', '/en/tardify/'],
	['/rolunk/', '/en/about/'],
	['/kapcsolat/', '/en/contact/'],
	// Task 019 — privacy notice. `/adatkezeles/` ("data handling/processing")
	// rather than a literal "adatvédelem" (data protection) — matches the
	// task's own preferred route pattern (§11) and reads as the more
	// commonly used real-world term for this exact page type on HU sites.
	['/adatkezeles/', '/en/privacy/'],
];

const HU_TO_EN = new Map(ROUTE_PAIRS);
const EN_TO_HU = new Map(ROUTE_PAIRS.map(([hu, en]) => [en, hu]));

/**
 * Resolve a stored (HU-canonical) href to the given locale's real path.
 * `hu` → returned unchanged (content is authored against HU paths).
 * `en` → mapped to its EN counterpart if the href is a known internal page;
 * anything not in the map (external URLs — `https://tardify.hu`,
 * `https://formspree.io/...`; a bare `mailto:`; a Formspree form `action`)
 * passes through completely unchanged, since those aren't locale-dependent.
 * A `#fragment` suffix (the Task 017 anchor fix on `/egyedi-fejlesztes/`) is
 * split off, the base path is mapped, and the same fragment is reattached —
 * anchor ids are DOM identifiers, not locale text, so they don't change.
 */
export function translateHref(href: string, locale: Locale): string {
	if (locale === 'hu') return href;

	const hashIndex = href.indexOf('#');
	const base = hashIndex === -1 ? href : href.slice(0, hashIndex);
	const fragment = hashIndex === -1 ? '' : href.slice(hashIndex);

	const mapped = HU_TO_EN.get(base);
	return mapped ? mapped + fragment : href;
}

/** The EN path's HU counterpart — used by EN route wrappers to set
 * `alternateLocalePath` on `<SiteHeader>` without hand-maintaining a second
 * copy of the map at each call site. */
export function huEquivalentOf(enPath: string): string | undefined {
	return EN_TO_HU.get(enPath);
}

/** The HU path's EN counterpart — the mirror of the above, used by HU route
 * wrappers so the language switch works in both directions. */
export function enEquivalentOf(huPath: string): string | undefined {
	return HU_TO_EN.get(huPath);
}
