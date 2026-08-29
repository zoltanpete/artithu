# ARTIT.hu — SEO, E-E-A-T and Structured Data

## Principle

SEO is part of information and content architecture, not a layer added after implementation.

Do not optimize pages by creating thin content solely for keywords.

## Foundations

Every indexable page should have:

- unique title;
- meaningful meta description;
- canonical;
- Open Graph metadata;
- semantic heading hierarchy;
- crawlable HTML;
- meaningful internal links.

Site-level:

- XML sitemap;
- robots configuration;
- stable URLs;
- production 404 behavior.

### Implementation status (Task 005A)

Homepage (`/`): title "ARTIT — Egyedi üzleti szoftverfejlesztés senior tapasztalattal" and meta description reuse the approved Hero lead copy verbatim — neither was invented. Canonical/OG-URL remain unrendered (same conditional logic since Task 003 — `Astro.site` is still unset, production domain still unresolved per `13-CONTENT-GAPS-AND-VALIDATION.md`). Heading hierarchy verified in a real browser: exactly one `<h1>`, sequential `<h2>`/`<h3>`, no skipped levels. No structured data (JSON-LD) was added — no verified Organization/entity facts exist yet to populate it correctly, consistent with this document's "do not invent or publish incomplete guesses" rule.

## Multilingual SEO / `hreflang` (Task 018)

Every production page now emits a complete, self-consistent `hreflang` set: the page's own locale, its real counterpart in the other locale, and `x-default` (pointing at the HU version, since HU is the default unprefixed locale). All three were previously either entirely absent (no `/en/*` route existed to alternate to) or, when the underlying `alternates` mechanism is used generically, an easy place to under-emit (a bare "other locale" link with no self-referencing entry is a common real mistake this implementation deliberately avoids) — see `09-TECHNICAL-ARCHITECTURE.md`'s Task 018 section for the `BaseLayout.astro`/`alternatesFor()` implementation.

Canonical URLs and `hreflang` `href` values are still emitted as relative paths, not absolute URLs — the same `Astro.site`-gated conditional as every other canonical/OG URL on the site, unchanged by this task (the production domain, `artit.hu`, was confirmed by the owner in Task 018 but deliberately not wired into `astro.config.mjs`'s `site` — see "Organization" in `13-CONTENT-GAPS-AND-VALIDATION.md`). Relative `hreflang` values are non-standard per the strict spec (Google's own guidance prefers absolute URLs) but are commonly tolerated in practice; treat this as accurate-but-incomplete until `site` is set in a future task, at which point every `hreflang`/canonical/OG URL on the site becomes absolute automatically, with no further code change.

**Implementation status (Task 019)**: `site` is now set (`https://artit.hu`) — every canonical, `hreflang` (including `x-default`), `og:url`, `og:image`, and JSON-LD URL sitewide is now a real absolute URL, verified directly against the production build (self canonical, HU alternate, EN alternate, and `x-default` all checked on a homepage pair and a case-study pair, where the two locales' slugs genuinely differ — the exact case a naive fix could get wrong). The new `/adatkezeles/`/`/en/privacy/` pair is handled identically to every other route — no special-casing was needed. Sitemap: `@astrojs/sitemap` now generates 18 URLs from this same absolute origin; see `09-TECHNICAL-ARCHITECTURE.md`'s Task 019 section for the integration detail.

## E-E-A-T

Treat E-E-A-T as a content quality/trust framework, not a single ranking factor.

### Experience

Show:

- real software;
- real screenshots;
- 10–20+ year project histories;
- real business processes;
- long-term evolution.

### Expertise

Demonstrate:

- business-process reasoning;
- custom-vs-standard decision logic;
- integration experience;
- first-hand lessons from case studies.

### Authoritativeness

Build through:

- detailed case studies;
- consistent expertise;
- own product;
- later, genuine knowledge content.

### Trust

Use:

- real people;
- verified claims;
- clear organization information;
- clear ARTIT ↔ Tardify relationship;
- transparent contact information;
- no invented metrics, quotes or testimonials.

## Entity clarity

ARTIT should be represented consistently as an organization.

Tardify relationship:

> A Tardify az ARTIT saját fejlesztésű üzleti szoftvere.

The relationship should be reflected consistently in visible content and structured data where semantically valid.

## Structured data

Use JSON-LD.

### Organization

Implement with verified organization information.

Potential properties:

- name;
- legalName;
- url;
- logo;
- email;
- telephone;
- address;
- sameAs.

**Implementation status (Task 019)**: implemented, homepage only (both locales), using only the properties with a verified fact behind them — `name`, `url`, `email`, `address` (a `PostalAddress` built from the owner-supplied street/postal code/city). `logo` was deliberately omitted: the new favicon (see `12-ASSET-STRATEGY.md`) is a small icon-scale mark, not a suitable Organization logo asset for rich-result display, and using it anyway would be exactly the "invent a logo URL" this document's own instruction warns against. `telephone` and `sameAs` remain omitted for the same reason — no verified fact exists yet.

Do not invent or publish incomplete guesses.

### BreadcrumbList

Use on hierarchical internal pages.

**Implementation status (Task 018)**: the two case-study pages' existing `BreadcrumbList` (Task 016) is now locale-aware — the hub label ("Munkáink"/"Work") and its `item` URL (`/munkaink/`/`/en/work/`) resolve per-locale rather than the Task 016 hardcoded Hungarian literal. Verified valid JSON and correct URLs on both locales in the production build.

### WebSite / WebPage

Use only where semantically useful.

### Article / BlogPosting

Future knowledge content only.

### Case studies / services

Do not force a schema type merely because schema.org contains one.

Before using a type verify:

1. semantic correctness;
2. search engine relevance/support;
3. visible content matches markup.

**Planning note (Task 015)**: schema.org has no `CaseStudy` type — do not invent one. Once the canonical case-detail pages (`/munkaink/[case-study]/`, see `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`) exist, the conservative options are plain `WebPage` (always valid, lowest risk) or `Article` if the page's own editorial framing genuinely reads as an article rather than a service/proof page — decide once real content exists, not now. A `BreadcrumbList` reflecting the actual route hierarchy (`/munkaink/` → case) is low-risk and can be added once the routes exist. **Do not** attempt an `Organization`/`Person` entity inside case-study structured data while the customer remains anonymous and ARTIT's own Organization facts (legal name, address, phone) remain gated (`13-CONTENT-GAPS-AND-VALIDATION.md`) — any structured data must match only what's already safe in visible copy (the evidence-matrix `GATED`/`DO_NOT_PUBLISH` items in `06-CASE-STUDY-ARCHITECTURE.md` apply identically to JSON-LD; a fact too sensitive for body copy is equally too sensitive to leak through markup). No structured-data implementation was made this task — planning only, per this task's own scope guard.

**Implementation status (Task 016)**: `BreadcrumbList` implemented on both canonical case pages (`Munkáink → [case title]`, matching the real route hierarchy) — the only structured data added, per this note's own conservative recommendation. No `WebPage`/`Article` type was added (neither was judged necessary once real content existed; the visible `<title>`/meta description already carry that role, and adding a schema type not clearly load-bearing would be exactly the "force a type merely because schema.org contains one" anti-pattern this section warns against above). No `Organization`/`Person` entity data — confirmed by grepping the built output for the gated ERP vendor names and the CS02 screenshot's apparent customer/personal names, zero matches anywhere in either page's markup, including the JSON-LD block itself.

## AI search

Do not implement unsupported "AI SEO" hacks automatically.

Priority:

- crawlable HTML;
- explicit entities;
- clear claims;
- first-hand evidence;
- high information density;
- strong context;
- valid structured data.

Do not automatically add:

- mass FAQ content;
- artificial GEO pages;
- `llms.txt`;
- hidden AI-targeted copy.

These require separate decisions.

## Internal linking

Link by meaning, not SEO pattern.

Primary graph:

- homepage → service pages;
- service pages → relevant case studies;
- case studies → relevant services;
- ARTIT → Tardify;
- trust/about → contact.

## Content validation

All longevity, customer and integration claims must be verified before publication.

See `13-CONTENT-GAPS-AND-VALIDATION.md`.
