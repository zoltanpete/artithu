# ARTIT.hu — Technical Architecture

## Project type

Greenfield Astro website.

No WordPress migration.

Astro scaffolded at repository root as of Task 003. See "Implementation status (Task 003)" notes below for what actually exists.

## Technical principles

- Astro static-first;
- TypeScript;
- semantic HTML;
- content-driven case studies;
- minimal client-side JavaScript;
- progressive enhancement;
- responsive image pipeline;
- accessibility by default;
- performance as a brand signal.

`tsconfig.json` extends `astro/tsconfigs/strict` (Task 003), the level the current official Astro guidance recommends for TypeScript projects.

## Dependency rule

At scaffold time, verify current stable versions and official Astro guidance before selecting exact packages.

Do not add dependencies merely for convenience.

### Implementation status (Task 003)

- Astro `^7.2.2`, verified against current official docs (docs.astro.build) at implementation time.
- Node.js `>=22.12.0` required by Astro; developed against Node 22.19.0.
- Package manager: **npm** — chosen because no package-manager convention existed yet and npm is the only manager available in the reference environment (ships with Node). No pnpm/yarn-specific tooling was assumed.
- `package-lock.json` is the tracked lockfile.
- Dependencies: `astro` only. Dev dependencies: `@astrojs/check` and `typescript`, both required by `astro check` per current official guidance — without them, type/content validation cannot run at all.
- No UI framework (React/Vue/Svelte), no CSS framework, no animation/icon/component libraries, no CMS SDK, no analytics were added.

## Proposed source structure

```text
src/
├── assets/
├── components/
│   ├── case-study/
│   ├── content/
│   ├── layout/
│   ├── navigation/
│   ├── typography/
│   └── ui/
├── content/
│   └── case-studies/
├── layouts/
├── pages/
├── styles/
├── utils/
└── config/
```

Adjust only when implementation provides a clear reason.

### Implementation status (Task 003)

Only the directories Task 003 actually needed were created:

```text
src/
├── config/       — site.ts (non-secret site defaults: name, default description, language)
├── content/
│   └── case-studies/
├── content.config.ts
├── layouts/      — BaseLayout.astro
├── pages/        — index.astro, 404.astro
└── styles/       — tokens.css, global.css
```

`src/assets/`, `src/components/`, `src/utils/` do not exist yet — nothing in the repository needs them yet. Create them when real components/utilities/processable images exist, following this same source-of-truth structure.

### Implementation status (Task 007B)

Added `src/lib/i18n.ts` (locale types/helpers — see "Localization" below), `src/components/homepage/Homepage.astro` (shared homepage renderer), `src/content/pages/home/content.yaml` and `src/content/nav/content.yaml` (localized content sources). `src/utils/` still doesn't exist — `src/lib/` was introduced instead, matching the sibling Tardify project's own convention (`../tardifyweb/src/lib/`) for the same kind of small, non-content-collection helper code.

### Implementation status (Task 004B)

Added:

```text
src/
├── components/
│   └── layout/
│       └── Container.astro   — reading/standard/wide width primitive
├── fonts/                    — self-hosted Work Sans + Space Mono WOFF2 files + license/provenance
├── pages/
│   └── design-foundation.astro   — internal, noindex design-foundation fixture
└── styles/
    ├── fonts.css        — @font-face declarations
    └── foundation.css   — typography/links/buttons/containers/surfaces/screenshot-frame CSS
```

`src/components/` now exists with exactly one primitive (`Container.astro`) — introduced because containers are used repeatedly across the fixture and will be used site-wide. No other component subdirectory (`case-study/`, `content/`, `navigation/`, `typography/`, `ui/`) was created; each is still empty of real need.

### Implementation status (Task 005A)

Added `src/components/navigation/SiteHeader.astro` — real cross-page reuse justified it (already documented as a planned component in `08-COMPONENT-LIBRARY.md`). It is deliberately used from `index.astro` only, not hoisted into `BaseLayout.astro`, so `/404` and the internal `/design-foundation` fixture remain exactly as Task 004C left them — hoisting it would have visually altered the fixture, which Task 005A's brief said not to do. Revisit once more real pages exist and a sitewide header genuinely needs a single source of truth. `case-study/`, `content/`, `typography/`, `ui/` still don't exist — still no real need.

### Implementation status (Task 007)

Added `src/components/system-map/SystemMap.astro` — the real homepage content/geometry that Task 006 deferred the component on now exists. Its own `<style>` block holds all diagram-specific styling (node/port/path/ring/core CSS), reusing the shared `--color-*` tokens and the `.panel-technical` primitive from Task 006 for its legend, rather than duplicating either. Homepage-section-specific CSS that isn't a stable cross-page concept yet (`.hero-map`, `.decision-fork`, `.work-teaser`, `.process-steps`) was added to `foundation.css` instead, following this project's existing convention (the same file already held `.problem-grid`/`.decision-paths` from Task 005A for the same reason) rather than introducing scoped `<style>` blocks in `index.astro` or fragmenting into new files. (`.decision-fork` was removed in Task 007D.1 — see that task's notes under "Page-wide communication grammar" above; kept here as an accurate record of what Task 007 actually added at the time.) `case-study/`, `content/`, `typography/`, `ui/` still don't exist.

### Implementation status (Task 009)

Added `src/components/custom-development/CustomDevelopmentPage.astro` (see `08-COMPONENT-LIBRARY.md`) and `src/pages/egyedi-fejlesztes/index.astro`. `case-study/`, `content/`, `typography/`, `ui/` still don't exist — no genuine need for any of them arose from this page either.

### Implementation status (Task 009A)

Added `src/components/custom-development/OperatingFitField.astro` (see `08-COMPONENT-LIBRARY.md`) and three temporary exploration prototypes under `src/pages/art-direction/009a-concept-{a,b,c}-*.astro` (`noindex`, not linked from navigation — the same exploration precedent the A/A2/A3/A4.x prototypes established; kept in the repository as historical exploration evidence, not deleted after selection, matching that precedent).

### Implementation status (Task 010)

Added `src/components/munkaink/MunkainkPage.astro` (see `08-COMPONENT-LIBRARY.md`) and `src/pages/munkaink/index.astro`, plus one exploration prototype, `src/pages/art-direction/010-munkaink-evidence-concepts.astro` (`noindex`) — consolidating all three evidence-treatment concepts onto one comparison route rather than three separate ones (an efficiency adaptation of the usual one-route-per-concept precedent; still three real, independently rendered, screenshotted concepts, not reasoned about abstractly). Also fixed a real mobile-geometry collision in the already-shipped `OperatingFitField.astro` (Task 010 Part 0 — see `08-COMPONENT-LIBRARY.md`'s "Fixed" note on that component).

### Implementation status (Task 010A)

Added `src/components/munkaink/LivingSystemField.astro` (see `08-COMPONENT-LIBRARY.md`) and one exploration prototype file reused across two rounds, `src/pages/art-direction/010a-munkaink-brand-face-concepts.astro` (`noindex`) — overwritten in place between round 1 (3 rejected concepts) and round 2 (2 revised concepts, one selected) rather than kept as five separate files, since the round-1 rejections are fully recorded in `07-DESIGN-SYSTEM.md` and the file itself is a working exploration surface, not a permanent historical record the way the A/A2/A3 prototypes are.

### Implementation status (Task 011)

Added `src/components/tardify/TardifyPage.astro` (see `08-COMPONENT-LIBRARY.md`) and one exploration prototype, `src/pages/art-direction/011-tardify-concepts.astro` (`noindex`). No new brand-face component this task — the explicit decision was no fourth diagram (see `07-DESIGN-SYSTEM.md`). Also applied the small, requested `LivingSystemField` ambient-point polish (Part 0) to the already-shipped component — no new file for that.

### Implementation status (Task 011A)

Owner review reopened Task 011's "no fourth diagram" decision specifically at the Hero (see `07-DESIGN-SYSTEM.md` "Tardify brand-face — Product Specimen Plate"). Added `src/components/tardify/TardifySpecimen.astro` (see `08-COMPONENT-LIBRARY.md`) and one consolidated exploration prototype, `src/pages/art-direction/011a-tardify-brand-face-concepts.astro` (`noindex`, three concepts on one route, matching the Task 010 efficiency precedent). `TardifyPage.astro`'s Hero markup was edited in place to add a `tardify-hero__grid` two-column composition; its four other sections are unchanged. `tardifyPageSchema` gained one field (`hero.visual.ariaLabel`); `foundation.css` gained one new Hero-grid rule block (`.tardify-hero__grid`), placed alongside the equivalent `/egyedi-fejlesztes/`/`/munkaink/` blocks.

### Implementation status (Task 012)

Added `src/components/rolunk/RolunkPage.astro` (see `08-COMPONENT-LIBRARY.md`), `src/pages/rolunk/index.astro`, and one consolidated exploration prototype, `src/pages/art-direction/012-rolunk-concepts.astro` (`noindex`, three concepts on one route). No new brand-face component — the selected concept (Concept C, typography-led) needed none; `rolunkPageSchema` was added; `foundation.css` gained one new Hero-typography rule block (`.rolunk-hero__*`), placed alongside the equivalent Hero blocks for the other four pages even though this one has no grid (single-column typography, not a two-column composition). Also applied the small, requested `TardifySpecimen` internal-contrast polish (Part 0) to the already-shipped component — no new file for that.

### Implementation status (Task 013)

Added `src/components/kapcsolat/KapcsolatPage.astro` (see `08-COMPONENT-LIBRARY.md`), `src/pages/kapcsolat/index.astro`, and one exploration prototype, `src/pages/art-direction/013-kapcsolat-concepts.astro` (`noindex`). No new brand-face component — the selected Hero concept (Conversation Field) is real content in a CSS-only staggered arrangement; `kapcsolatPageSchema` was added along with the page's first `.url()`-validated field (`contact.form.endpoint`); `foundation.css` gained three new rule blocks (`.kapcsolat-hero__grid`/`.kapcsolat-prompt-field`, `.kapcsolat-prompt-grid`, `.contact-form*`). This is also the first task to add a real, functioning `<form>` and a second genuine client-side script (after `SystemMap`'s) — see "JavaScript" below.

## Localization

ARTIT is bilingual: Hungarian (primary/default) and English (published, Task 018 — see below).

### Implementation status (Task 007B)

**URL strategy**: `/` = Hungarian (default, unprefixed), `/en/` = English. Implemented via Astro's **native i18n routing** (`i18n: { defaultLocale: 'hu', locales: ['hu', 'en'], routing: { prefixDefaultLocale: false } }` in `astro.config.mjs`), not a hand-rolled router. This was a direct, audited decision, not a guess: the sibling Tardify project (`../tardifyweb`, available locally on this machine) already ships bilingual `hu`/`en_US` with the identical `/`/`/en/` strategy, using this exact native-i18n config. Reusing Astro's own mechanism instead of reimplementing it means locale-aware URL generation (`getRelativeLocaleUrl`, used by `src/lib/i18n.ts`'s `homePath()`) and `Astro.currentLocale` are correct for free and stay correct if the routing config changes.

**Content source**: `src/content/pages/home/content.yaml`, an Astro Content Collection (`pages`, `file()` loader) validated by a Zod schema in `src/content.config.ts`. Every text field is one of two localized primitives (see `src/lib/i18n.ts`):

- `Localized` (`{ hu: string; en: string }`) — both locales required; used only for content classified as safely structural/non-marketing (System Map technical/business vocabulary, accessibility descriptions of the diagram mechanism).
- `LocalizedGated` (`{ hu: string; en?: string }`) — `hu` required, `en` optional; used for every piece of marketing/positioning prose (eyebrows, headlines, leads, paragraphs, CTA sentences, Problem signals, Decision copy, Work case titles, Longevity statement, Tardify copy, Process labels, Senior/Who copy, Final CTA copy). No approved English translation of ARTIT's homepage marketing copy exists anywhere in the repository (confirmed by audit — see `04-HOMEPAGE-CONTENT-ARCHITECTURE.md`), so every `LocalizedGated` field's `en` is currently absent by design. This is a real, representable content state — Zod validates it as valid, not a build error — not an invented translation and not something rendered as a silent Hungarian fallback on an English page.

Sitewide header/navigation chrome (`src/content/nav/content.yaml`, `nav` collection) is treated differently: it is pure wayfinding text, not a marketing claim, so both locales are fully populated there.

**Locale resolution**: `src/lib/i18n.ts` exports `Locale = 'hu' | 'en'`, the `Localized`/`LocalizedGated` types, `localize(value, locale)` (fully-translated fields), `localizeGated(value, locale)` (returns `string | null`, never falls back to `hu`), `hasTranslation()`, and `homePath(locale)`. Templates read locale-aware content through these instead of `locale === 'hu' ? … : …` ternaries.

**Route sharing**: one shared renderer, `src/components/homepage/Homepage.astro`, accepts a `locale` prop and loads the `pages/home` entry itself. `src/pages/index.astro` is a two-line wrapper: `<Homepage locale="hu" />`. There is no second, duplicated homepage implementation and no duplicated System Map instance — `SystemMap.astro` itself stays language-agnostic (labels arrive via props); the one string it generates internally (each node button's "highlight this node" accessible name) is now driven by a `locale` prop through a two-entry lookup table rather than a hardcoded Hungarian suffix.

**Why `/en/` is not live yet**: `Homepage.astro` renders correctly for `locale="en"` (verified via `astro check`/`astro build` type-checking the `en` branch and via a real-browser Playwright pass against a temporary local invocation), but no `src/pages/en/index.astro` route file was created this task. Since essentially every homepage content field is currently `LocalizedGated` with `en` absent, a live English homepage would either have to invent marketing copy (explicitly disallowed) or render as mostly blank sections next to a fully English header — neither is an honest "real page," and Task 007B's own brief explicitly sanctions withholding the route until approved content exists. Adding the route later is a ~5-line file (`<Homepage locale="en" />` plus its `alternateLocalePath` wiring) once an approved English translation pass fills in the gated fields — no architecture changes required.

**Language switch**: `SiteHeader.astro` accepts an optional `alternateLocalePath` prop; when present it renders one small semantic `<a>` (`.site-header__lang`, restrained mono chip, no flags) to the equivalent page in the other locale, both in the desktop header and the mobile menu. `index.astro` does not currently pass this prop, since `/en/` doesn't exist yet — rendering a locale link to a non-existent page would be a misleading broken link, which Task 007B's brief explicitly disallows. Wiring it up is a one-line change once `/en/` exists.

**Runtime cost**: zero. All localization resolves at build time; the SystemMap's existing 810-byte inline interaction script is unchanged (locale only affects which string it's initialized with, not its behavior). No i18n library dependency was added — `astro:i18n` is part of Astro core, `js-yaml`/`yaml` (used by Astro's built-in Content Collections `file()` loader for the new `.yaml` sources) were already present as transitive dependencies of Astro itself, not newly installed.

**Implementation status (Task 009)**: the architecture generalized to a second page with one small, genuinely-needed addition — `src/lib/i18n.ts`'s `homePath()` (hardcoded to `'/'`) was generalized into `localePath(locale, path)`, with `homePath()` now a one-line wrapper (`localePath(locale, '/')`) so existing callers didn't change. `CustomDevelopmentPage.astro` uses `localePath(locale, '/egyedi-fejlesztes/')` directly. Everything else — the `LocalizedGated` translation-completeness policy, `localizeGated()`'s no-silent-fallback behavior, the withheld-`/en/`-route pattern, the locale-wrapper component shape — required zero changes to reach a second page; `/en/egyedi-fejlesztes/` is withheld for the identical reason `/en/` is (no approved English marketing copy exists for this page either).

**Implementation status (Task 010)**: generalized to a third page with zero further changes — `MunkainkPage.astro` uses `localePath(locale, '/munkaink/')`, `munkainkPageSchema` uses the same `localizedGated()` primitive throughout, and `/en/munkaink/` is withheld for the identical reason. The language switcher was deliberately **not** activated (no `alternateLocalePath` passed anywhere, matching `/` and `/egyedi-fejlesztes/`) — that remains scoped to a future, separate **Localization Activation** task once approved English marketing copy exists for all three pages, not something to partially wire up per-page. Findings for that future task, recorded here as requested: the architecture needs no structural change to support it — every page already resolves its own canonical path via `localePath()`, every content schema already separates gated marketing prose from required technical vocabulary, and `SiteHeader`'s switch-link mechanism already exists and only needs `alternateLocalePath` values supplied once real `/en/*` routes exist. The activation task's real work is entirely content (translation) and route creation, not architecture.

**Implementation status (Task 011)**: generalized to a fourth page, again with zero architecture change — `TardifyPage.astro` uses `localePath(locale, '/tardify/')`, `tardifyPageSchema` is entirely `localizedGated()`. `/en/tardify/` withheld, language switcher still not activated. No new finding for the future Localization Activation task — the pattern held on the fourth try exactly as it held on the second and third.

**Implementation status (Task 012)**: generalized to a fifth page, still with zero architecture change — `RolunkPage.astro` uses `localePath(locale, '/rolunk/')`, `rolunkPageSchema` is entirely `localizedGated()` (including the two split Hero clauses, `titleLead`/`titleAccent` — splitting a headline into styled clauses is a presentational decision, not a localization one, so it required no new i18n primitive). `/en/rolunk/` withheld, language switcher still not activated (no `alternateLocalePath` passed). No structural blocker was found, and none was expected: every page-implementation task since Task 009 has confirmed the same result, and this task's own brief asked for that confirmation to be recorded again — the architecture generalizes to a fifth page for the identical reason it generalized to the second through fourth.

**Implementation status (Task 013)**: generalized to a sixth page, again with zero architecture change — `KapcsolatPage.astro` uses `localePath(locale, '/kapcsolat/')`, `kapcsolatPageSchema` mixes `localizedGated()` (marketing prose) with `localizedText()` (`prompts[].label` — short categorical questions, not gated positioning copy, classified the same way `OperatingFitField`'s node labels were) and one genuinely locale-neutral field (`contact.form.endpoint`, `contact.form.subject` — technical configuration, not content, so plain `z.string()`/`z.url()`, no localization primitive at all). `/en/kapcsolat/` withheld, switcher still not activated. The one new architectural surface this task adds — the contact form's own client script — is entirely locale-neutral by construction (it reads its user-facing strings from already-localized props via `define:vars`, no hardcoded language), so it needs no changes to support a future `/en/kapcsolat/` either.

### Implementation status (Task 018) — English production locale

`/en/*` is now live: 8 real, indexable routes, one per real HU production page (home, custom development, work hub, both case studies, Tardify, about, contact). Every page-type content collection's `LocalizedGated`/`Localized` fields now carry real `en` values — no schema change was needed anywhere; Tasks 007B–013's own bet (translation is the only remaining gap, not the mechanism) held exactly as recorded through Tasks 009–013 above.

**The one real architectural discovery this task made**: `localePath()`/`homePath()` (Astro's native `getRelativeLocaleUrl`) only *prefixes* a path with `/en` — it has no way to know that `/munkaink/` and its English counterpart are meant to be different words (`/en/work/`), not `/en/munkaink/`. This was invisible through Tasks 009–013 because no EN route existed yet to expose it. Every English URL in this project uses a natural English slug, not the Hungarian slug reused verbatim (`/en/work/`, `/en/custom-development/`, `/en/about/`, `/en/contact/`, `/en/work/operational-system/`, `/en/work/erp-integration/` — only `/en/tardify/` matches its HU slug, since "Tardify" is a proper noun in both languages) — see `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`'s Task 018 route map for the full table and the naming reasoning per route.

**Resolution — `src/lib/routes.ts` (new)**: one explicit HU↔EN path-pair table (`ROUTE_PAIRS`), plus:

- `translateHref(href, locale)` — the single function every internal `<a href>` in every page component now routes through. `hu` → passthrough (content is authored against HU paths, unchanged). `en` → looks up the HU path in the table and returns its EN counterpart; anything not in the table (external URLs — `tardify.hu`, `formspree.io` — a bare anchor fragment's base, anything not a known internal page) passes through completely unchanged. A `#fragment` suffix (the Task 017 anchor fix on `/egyedi-fejlesztes/`) is split off, the base is mapped, the fragment is reattached unchanged (anchor ids are DOM identifiers, not locale text).
- `huEquivalentOf(enPath)` / `enEquivalentOf(huPath)` — the two lookup directions, used by each route wrapper (`src/pages/{...}/index.astro`, `src/pages/en/{...}/index.astro`) to compute `alternateLocalePath` without hand-maintaining a second copy of the map at 16 call sites.

Every page component's own canonical `path` computation (previously `localePath(locale, '/munkaink/')`, which is exactly the bug above) now reads `translateHref('/munkaink/', locale)` instead — the same function, reused, since "translate this page's own canonical path" and "translate a link's href" are the same operation. `localePath()`/`homePath()` remain correct and unchanged for the one case where they were never wrong: `/` ↔ `/en/` has no slug difference, so `Homepage.astro` still uses `homePath(locale)` directly.

**`alternates`/`hreflang` — newly implemented this task** (the `alternates` prop existed on `BaseLayout.astro` since Task 007B but no page had ever passed it, since no second locale route existed to alternate to). `src/lib/i18n.ts` gained `alternatesFor(locale, alternateLocalePath)`, a thin helper that turns the one value every component already computes for its visible language-switch link into the `{ en: path }`/`{ hu: path }` shape `BaseLayout`'s `alternates` prop expects — so the visible switch link and the invisible `hreflang` metadata can never drift out of sync (one prop feeds both). `BaseLayout.astro` itself now also emits a **self-referencing** `hreflang` entry (previously only the *other* locale was emitted, a common real SEO mistake) and an `x-default` entry pointing at the HU version, computed once rather than requiring each page to remember it. Confirmed in the production build: every page pair emits exactly `hreflang="hu"`, `hreflang="en"`, `hreflang="x-default"`, all three resolving to real, correct paths — including the case-study pages, where the slug differs between locales, the exact case the old `localePath()`-only approach would have gotten wrong.

**Breadcrumb/JSON-LD locale-awareness**: `CaseStudy01Page.astro`/`CaseStudy02Page.astro`'s breadcrumb ("Munkáink"/"Work") and their `BreadcrumbList` JSON-LD now compute the label and the hub href per-locale (`locale === 'hu' ? 'Munkáink' : 'Work'`, `translateHref('/munkaink/', locale)`) rather than the Task 016 hardcoded Hungarian literal. The two hardcoded `ELŐTTE`/`UTÁNA` before/after labels inside `CaseStudy01Page.astro`'s concrete-example section (missed by the original `localizedGated()` schema design, since they were written directly in the template rather than as content fields) got the same locale-conditional treatment — `BEFORE`/`AFTER` in English.

**Runtime cost**: still zero. `translateHref`/`alternatesFor`/the route-pair table all resolve at build time; no new client-side code, no i18n library, no change to the SystemMap/contact-form scripts' existing behavior.

**Production domain deliberately not wired**: the owner supplied the confirmed production domain (`artit.hu`) this task, but `astro.config.mjs`'s `site` was **not** set — Task 018's own brief explicitly reserves "final host wiring" for Task 019 (see `13-CONTENT-GAPS-AND-VALIDATION.md` "Organization"). Every canonical/hreflang/OG code path above already resolves through the existing `Astro.site &&` conditional pattern (unchanged from Task 017), so setting `site: 'https://artit.hu'` in a future task requires zero further code change — every relative path already emitted becomes correctly absolute automatically.

### Implementation status (Task 019) — production domain, sitemap, privacy/footer collections, current-nav state

**Production domain wired**: `astro.config.mjs` now sets `site: 'https://artit.hu'`, exactly the config point every canonical/hreflang/OG/JSON-LD URL already resolved through — confirmed in the production build that every one of those is now a real absolute URL, zero further code changes required, exactly as Task 018 anticipated.

**Sitemap**: `@astrojs/sitemap` (the standard Astro-supported integration, not custom code) added to `integrations`. Its `filter` option excludes `/art-direction/*`, `/design-foundation`, and `/404` — the same route set `public/robots.txt`'s `Disallow` rules already target, read from one mental model instead of two independently-maintained lists. Output: `sitemap-index.xml` → `sitemap-0.xml`, 18 URLs (9 HU + 9 EN production routes), confirmed by direct inspection of the built XML.

**Two new content collections** (`src/content.config.ts`), following the exact pattern every prior page-type/chrome collection in this file established:

- `privacyPage` (`src/content/pages/privacy/content.yaml`) — one schema object per notice section (`controller`, `websiteOperation`, `contactForm`, `hosting`, `cookiesAnalytics`, `retentionRights`, `contact`), matching `06-CASE-STUDY-ARCHITECTURE.md`'s own "narrow schema over generic sections list" discipline — there is exactly one real entry, so a flexible/looped shape would be speculative generality. Facts identical regardless of locale (company/hosting-provider identity — name, address, registration/tax numbers) are plain `z.string()`, not `localizedGated()`, the same classification already used for `kapcsolatPage.contact.form.endpoint`.
- `footer` — the site's first shared cross-page chrome collection besides `nav`; same `localizedText`/plain-fact classification as `nav`, since footer content is wayfinding/identity, not marketing prose.

**`SiteHeader.astro` current-page/current-section state** (Task 019 §24): a new optional `currentPath` prop, threaded through every page component (all 8 existing `<BaseLayout>`-wrapping components plus the new `PrivacyPage.astro`). `aria-current="page"` only when a nav link's target (fragment stripped) exactly equals the current page; `aria-current="true"` — WAI-ARIA's own generic "current item in a set" token — when the current page sits *underneath* a nav link's target (e.g. the "Munkáink"/"Our work" link while actually on a case-study detail page), deliberately never `"page"` in that case per the task's own explicit instruction not to falsely mark a parent as the exact current page. Visual treatment (`foundation.css`): an underline, not color alone, on `[aria-current]` — satisfies the "no information by color alone" rule the same way every other stateful indicator on this site already does.

**`Footer.astro`** — one shared component (`src/components/navigation/`, alongside `SiteHeader.astro`), rendered on every page. Reuses `translateHref()` for its links, so it's automatically locale-correct with zero special-casing. No new brand-face SVG, no new surface token — a thin top border and the existing `--color-bg`, matching the task's own "quiet production closure" instruction.

**`PrivacyPage.astro`** — the ninth page-type component, same locale-wrapper pattern as every other page (`interface Props { locale; alternateLocalePath }`, `getEntry()`, `translateHref()` for its own canonical path). Not linked from primary navigation (only the footer and `/kapcsolat/`'s own form context link to it), per the task's own instruction.

**Homepage-only `Organization` JSON-LD**: `name`, `url`, `email`, `address` (a `PostalAddress`), each a verified owner-supplied fact — no `logo`/`sameAs`/`telephone`/founding date, none of which exist yet. Resolved via `Astro.site` the same way canonical URLs are.

**A sitewide CSS fix, not scoped to Task 019's own feature list**: `overflow-wrap: break-word` added to the base `h1`/`h2`/`h3` rules after the new privacy page's own `<h2>Tárhelyszolgáltatás</h2>` overflowed at 320px — see `11-ACCESSIBILITY-AND-PERFORMANCE.md`'s Task 019 entry for the full root-cause note and the verification that it changes nothing on any page where no heading currently overflows.

**Runtime cost**: still zero new client JS. The sitemap integration and `Organization` JSON-LD both resolve entirely at build time.

## Public assets

Use `public/` only for assets that should bypass Astro processing or need fixed public paths.

Prefer `src/assets/` for processable images where appropriate.

## Styling

Direction:

- global semantic CSS custom properties;
- component-scoped styles where appropriate;
- no unnecessary CSS framework by default.

Final CSS strategy must be selected in Task 003 based on current Astro capabilities and project needs.

### Implementation status (Task 003)

Chosen: plain global CSS, no framework. `src/styles/tokens.css` defines the semantic custom-property architecture from `07-DESIGN-SYSTEM.md`; `src/styles/global.css` imports it and adds a minimal reset (box-sizing, body margin, media defaults, form-control font inheritance, visible focus, `prefers-reduced-motion` handling). `BaseLayout.astro` imports `global.css` once.

Token *values* (colors, spacing scale, font stacks) are conservative foundation placeholders only — final calibration is Task 004's job, not this one.

### Implementation status (Task 004B)

CSS split into four small files, each with one concern: `tokens.css` (semantic custom properties, now with final calibrated values — see `07-DESIGN-SYSTEM.md`), `fonts.css` (`@font-face` only), `foundation.css` (typography element styles, links, buttons, containers, section rhythm, dark-section variant, screenshot-frame placeholders), `global.css` (reset/base, now also imports the other three). No CSS framework, Sass, CSS-in-JS, or utility framework was added — native CSS throughout, per the task's explicit preference.

### Implementation status (Task 004C)

Same four-file architecture, no new files. Changes confined to `tokens.css` (two-tier section-spacing tokens) and `foundation.css` (`.section--major` modifier, H3/lead weight). See `07-DESIGN-SYSTEM.md` for the calibrated values and the visual reasoning behind each change.

### Implementation status (Task 006)

Still the same four-file architecture, no new files — the Task 005D Art Direction Lock's production migration fit entirely inside `tokens.css` (accent-value swap plus three new tokens) and `foundation.css` (two new bug-fix rules, five new small primitives). No new CSS file, no framework, no CSS-in-JS. Full accent-migration audit, new token values, and contrast results are in `07-DESIGN-SYSTEM.md`. Zero new dependencies.

The one architectural decision this task made explicitly: **no `SystemMap` component was created.** The exploration's diagram-specific devices (guidelines, ports, node/path SVG structure) have nowhere to attach in production yet — no page has real System Map content — so productionizing them now would mean either freezing one prototype's incidental geometry into shared code, or building a generic graph-abstraction layer this project's own dependency rule forbids. Only the two genuinely content-agnostic pieces (`.technical-label`, `.panel-technical`) were promoted. See `07-DESIGN-SYSTEM.md` → "Production architecture decision (Task 006)" for the full rationale; this is Task 007's decision to pick back up once real homepage content/geometry exists.

### Implementation status (Task 007)

Still the same four-file *global* architecture — no changes to `tokens.css`/`fonts.css`/`global.css`/`foundation.css`'s roles, only additions within `foundation.css` (see "Source structure" above). One new file: the `SystemMap` component's own scoped `<style>` block, which is component CSS, not global CSS, per this document's own "component-scoped styles where appropriate" direction. No CSS framework, no CSS-in-JS. See `08-COMPONENT-LIBRARY.md` for the component's full prop API and `07-DESIGN-SYSTEM.md` for how its geometry relates to the approved A4.3.3 reference.

### Implementation status (Task 007C)

Same four-file architecture, no new CSS file, no new token values. All changes are within `foundation.css`'s existing homepage-section rules (Problem/Decision/Work/Longevity/Tardify/Process) implementing `07-DESIGN-SYSTEM.md`'s page-wide communication grammar — see that document's own "Implementation status (Task 007C)" note. `src/components/homepage/Homepage.astro`'s markup changed to match (new wrapper elements/classes for the dense/open Problem field, the Work/Tardify `.panel-technical` plates); no new `.astro` component and no new dependency. One real bug found and fixed during the mandatory responsive review — see `11-ACCESSIBILITY-AND-PERFORMANCE.md`.

### Implementation status (Task 007D)

Same architecture, no new file, no new token, no new dependency. A final polish pass on Task 007C's own output: `.problem-signals`' spine moved from the dense sub-group to the container/columns (so it continues through all six signals — see `07-DESIGN-SYSTEM.md`'s "Diagnostic / Signal" clarification); `.process-steps`' 1100px+ column-gap was reduced from `--space-xl` to `--space-lg` (a measured fix, not an estimate — see `11-ACCESSIBILITY-AND-PERFORMANCE.md`); `.tardify-proof` dropped `.panel-technical` for its own lighter top-rule + corner-mark treatment. Zero new client JS — confirmed against the production build (1 inline `<script>`, 0 `.js` files, unchanged from Task 007/007B/007C).

### Implementation status (Task 008)

Documentation-only task — production code confirmed unchanged by this task (the final regression audit found no bug; see `11-ACCESSIBILITY-AND-PERFORMANCE.md`). Formally locked the homepage visual language (see `07-DESIGN-SYSTEM.md` "Homepage Visual Lock"). Localization architecture re-audited and confirmed intact: `/` renders `locale="hu"`, `astro.config.mjs`'s native `i18n` config remains defined but no `src/pages/en/` route exists, `SiteHeader`'s `alternateLocalePath` prop is still not passed from `index.astro` (no broken locale link), and `localizeGated()` still returns `null` rather than falling back to Hungarian for a missing `en` value — nothing in Task 008 required changing any of this.

## JavaScript

Default:

zero client JavaScript.

Add islands only for real interactive requirements:

- mobile nav;
- dropdown if JS is required;
- contact form enhancements;
- explanatory motion only if needed.

Do not hydrate static marketing content.

### Implementation status (Task 003)

Confirmed: the built `/` and `/404` pages emit zero client-side JavaScript (no `<script>` tags, no `_astro/*.js` bundle in `dist/`). No framework integration was added.

### Implementation status (Task 005A)

Still zero client JS, re-confirmed after adding real header navigation. The header's dropdown and mobile menu use native `<details>`/`<summary>` — a case the "Add islands only for real interactive requirements: mobile nav; dropdown if JS is required" rule above anticipated, and it turned out JS wasn't required at all: `<details>` provides click/keyboard activation and correct focus/ARIA semantics natively. Verified via keyboard-only activation (`Enter` on a focused `<summary>`) in a real browser, not just code inspection.

### Implementation status (Task 006)

Still zero client JS — confirmed directly against the production `dist/` output (`find dist -name "*.js"` → 0 files; no `<script>` tags in the rendered HTML of any page). Since the System Map interaction model was explicitly deferred to Task 007 (see "Styling" above), `/design-foundation` and `/` stay fully static this task, matching the brief's stated preferred outcome.

### Implementation status (Task 007)

Production `/` now carries **one small inline module script**, from the `SystemMap` component: **810 bytes minified** (`grep`-extracted and measured directly against the built `dist/index.html`, not estimated), no `_astro/*.js` bundle file, no framework runtime, no hydration directive of any kind. It is a deterministic `classList`-based state machine (hover/focus preview, click/Enter commit, keyboard parity) — the same interaction *language* every A4.x prototype used, re-derived rather than copied, and generalized to work with page-supplied node ids instead of the prototypes' hardcoded ones (see `08-COMPONENT-LIBRARY.md`). `/design-foundation` and `/404` remain fully static — the script only loads on pages that actually render a `SystemMap`. Still zero UI-framework/graph-library/animation-library dependency.

### Implementation status (Task 009)

`/egyedi-fejlesztes/` carries no `SystemMap` and no other interactive element — confirmed `grep -c '<script'` returns 0 against the built `dist/egyedi-fejlesztes/index.html`. Static-first by content, not by an explicit decision to omit interactivity: this page's own brief (Task 009 §20) expected no additional client JavaScript, and nothing on the page needed any.

### Implementation status (Task 009A)

Still 0 `<script>` tags after adding the `OperatingFitField` Hero visual — confirmed against the rebuilt `dist/egyedi-fejlesztes/index.html`. Interaction was explicitly considered and rejected for this component (see `07-DESIGN-SYSTEM.md`), not merely defaulted away from — the deciding factor was that hover/focus would add no information here, unlike `SystemMap`'s node highlighting.

### Implementation status (Task 010)

0 `<script>` tags on `/munkaink/` — confirmed against `dist/munkaink/index.html`. No component on this page has any interactive behavior at all; the page is purely static HTML/CSS.

### Implementation status (Task 010A)

Still 0 `<script>` tags after adding `LivingSystemField` — confirmed against the rebuilt `dist/munkaink/index.html`. Interaction was explicitly reviewed and rejected for the same reason as `OperatingFitField`: nothing in this ambient-field visual is hidden until interacted with.

### Implementation status (Task 011)

0 `<script>` tags on `/tardify/` — confirmed against `dist/tardify/index.html`. No diagram, no interactive element of any kind on this page.

### Implementation status (Task 011A)

Still 0 `<script>` tags after adding `TardifySpecimen` — confirmed against the rebuilt `dist/tardify/index.html` (also 0 `<button>`, 1 `<h1>`, 2 `role="img"` SVGs). Interaction was explicitly reviewed and rejected for the same reason as the other three brand-face visuals: the plate has no additional information to reveal on hover/focus.

### Implementation status (Task 012)

0 `<script>` tags on `/rolunk/` — confirmed against `dist/rolunk/index.html` (also 0 `<button>`, 1 `<h1>`, 0 `role="img"` SVGs — the page has no SVG of any kind). The fifth page in a row with zero client JS.

### Implementation status (Task 013)

`/kapcsolat/` breaks the zero-client-JS streak, deliberately and for a real reason: 1 `<script>` tag, 1 `<button>`, 1 `<form>` — confirmed against `dist/kapcsolat/index.html`. This is the site's second genuine client-side script (after `SystemMap`'s 810-byte interaction script) and is justified exactly the way the "Add islands only for real interactive requirements" rule at the top of this section anticipates: submitting a form to an external endpoint and reporting success/failure is not achievable with zero JS if the UX is to show inline idle/submitting/success/error states rather than a full-page navigation. The script is a small inline module (via `define:vars`, no external file, no bundler dependency) that progressively enhances a form which already works without it — with JS disabled, the `<form>`'s native `action`/`method` attributes still POST to Formspree and Formspree renders its own confirmation page, so the page is never actually broken without JS, only less smooth. No framework, no client-side router, no form-library dependency was added.

Use Astro Content Collections for case studies.

Validate schemas.

Markdown/MDX decision should be based on actual case-study needs.

### Implementation status (Task 003)

A minimal `case-studies` collection exists at `src/content.config.ts`, using the current `glob()` loader (`astro/loaders`) and a Zod schema (imported from `astro/zod` — the `z` re-export on `astro:content` is deprecated in the installed Astro version). See `05-CONTENT-MODEL.md` for the implemented field list and what was deferred. A single non-public, clearly-labeled dev fixture entry validates the schema; it is not rendered anywhere.

### Implementation status (Task 007B)

Added two `file()`-loader collections: `pages` (`src/content/pages/home/content.yaml`, entry id `home`) and `nav` (`src/content/nav/content.yaml`, entry id `main`) — Astro's built-in Content Collections `file()` loader parses `.yaml` natively (via its bundled `js-yaml` dependency), so no new dependency was needed. `pages` currently holds only the homepage; if/when a second page's content is migrated, revisit whether `file()` (one collection per page) or `glob()` (one collection scanning `src/content/pages/*/content.yaml`) is the better fit — not decided speculatively now, per this document's own "adjust only when implementation provides a clear reason" rule. See "Localization" below for the localized-field schema design.

### Implementation status (Task 009)

Resolved the "revisit" note above now that a second page's content actually exists: **kept `file()`, one collection per page-type**, not `glob()` over one shared `pages` collection. The reason is a schema mismatch, not a loader preference — Astro Content Collections apply exactly one schema per collection, and the homepage's section shape (hero/problem/decision/work/longevity/tardify/process/seniorWho/finalCta) and the Custom Development pillar page's shape (hero/justified/notJustified/directions/approach/finalCta) are genuinely different, not variations of one shape. Unifying them would need either a Zod discriminated union (real complexity for two data points) or scattering optional fields that only apply to one page-type — both are premature generalization the same way a generic `SystemMap` diagram schema was rejected in Task 006. Added `customDevPage` (`src/content/pages/egyedi-fejlesztes/content.yaml`, entry id `egyedi-fejlesztes`) as its own collection with its own schema, alongside — not merged into — `pages`. `pages` was not renamed despite arguably being homepage-specific by convention now; renaming working, already-approved code purely for naming symmetry was judged out of scope for a page-implementation task (see `08-COMPONENT-LIBRARY.md`'s Task 009 componentization audit for the parallel CSS-reuse decision).

### Implementation status (Task 009A)

Extended `customDevPageSchema` with `hero.visual` (the `OperatingFitField` labels: `centerLabel`, `ariaLabel`, `legend.{friction,fit}`, and exactly four `nodes`) — no new collection, no schema restructuring, since this is genuinely part of the same page's Hero section. Every field uses `localizedText` (both locales required), not `localizedGated` — classified the same way `SystemMap`'s own source/output labels were in Task 007B: short technical/categorical vocabulary, not marketing prose, so both `hu`/`en` are populated (reusing the exact English terms already established in `home/content.yaml` — "SEPARATE SYSTEM", "MANUAL DATA" — for sitewide vocabulary consistency).

### Implementation status (Task 010)

Added `munkainkPage` — its own `file()`-loader collection with its own schema (`src/content/pages/munkaink/content.yaml`, entry id `munkaink`), not folded into `pages` or `customDevPage`, for the identical reason `customDevPage` got its own collection in Task 009: a genuinely different section shape, not a variant of an existing one. The `cases[]` array reuses the exact stable ids (`case-01`/`case-02`) already used in `home/content.yaml`'s `work.cases[]` and `egyedi-fejlesztes/content.yaml`'s `directions.paths[].evidence.caseId` — the same real-world case studies referenced from three places, kept consistent rather than reinvented, so a future case-study detail page can be linked from all three without an id mismatch. Every field is `localizedGated` — nothing on this page is technical/structural vocabulary the way `OperatingFitField`'s labels are; it's all positioning prose or a real fact (a working title, a direction link), so the gated policy applies throughout.

### Implementation status (Task 010A)

Extended `munkainkPageSchema` with `hero.visual` (`LivingSystemField`'s `label`/`ariaLabel`) — `localizedText`, not `localizedGated`, classified the same way `OperatingFitField`'s and `SystemMap`'s own labels were: a single technical/categorical word ("RENDSZER"/"SYSTEM"), not marketing prose.

### Implementation status (Task 011)

Added `tardifyPage` — its own `file()`-loader collection with its own schema (`src/content/pages/tardify/content.yaml`, entry id `tardify`), same reasoning as the other three page collections. No `hero.visual` field exists in this schema at all — unlike the other three pages, `/tardify/` has no brand-face visual, so there's nothing for such a field to describe. Every field is `localizedGated`.

### Implementation status (Task 011A)

Extended `tardifyPageSchema` with `hero.visual` (`{ ariaLabel: localizedText() }`) — the same minimal footprint as `munkainkPageSchema`'s own `hero.visual` addition in Task 010A, `localizedText` not `localizedGated` since it's an accessibility description, not marketing prose. No `label`/`tag` field was added: `TardifySpecimen`'s one visible word, "TARDIFY," is a hardcoded literal in the component (the product's own proper noun, identical in every locale), not a content-authored decision — so, unlike `OperatingFitField`'s/`LivingSystemField`'s labels, there is nothing here for a schema field to model beyond the accessible name.

### Implementation status (Task 012)

Added `rolunkPage` — its own `file()`-loader collection with its own schema (`src/content/pages/rolunk/content.yaml`, entry id `rolunk`), same reasoning as the other four page collections. No `hero.visual` field exists in this schema at all — like `tardifyPageSchema`, `/rolunk/` has no brand-face visual, so there's nothing for such a field to describe. One schema detail specific to this page: `hero.titleLead`/`hero.titleAccent` are two separate `localizedGated` fields rather than one `hero.title` string, so the two visually-different clauses are content-authored from the start rather than split from a longer string inside the template — consistent with this project's standing rule that every visible string is its own content field. Every other field is `localizedGated`.

### Implementation status (Task 013)

Added `kapcsolatPage` — its own `file()`-loader collection with its own schema (`src/content/pages/kapcsolat/content.yaml`, entry id `kapcsolat`), same reasoning as the other five page collections. `prompts` (the "what's useful to tell us" list) is authored once at the top level and referenced from both the Hero template and Section 2's template — not duplicated content, just reused rendering of the same array, matching the project's standing "author once" rule. `prompts[].label` uses `localizedText` (both locales required) — short categorical questions, not gated positioning prose, classified the same way `OperatingFitField`'s node labels were in Task 009A. `contact.form.endpoint`/`contact.form.subject` are the schema's first genuinely locale-neutral content fields — plain `z.url()`/`z.string()`, no `Localized`/`LocalizedGated` wrapper at all, since a Formspree endpoint URL and an email subject line aren't content in any locale, they're configuration. Every other field is `localizedGated`.

### Planning note (Task 015) — future case-study collection shape

Not implemented — Task 015 was documentation/architecture only (see `06-CASE-STUDY-ARCHITECTURE.md`, `13-CONTENT-GAPS-AND-VALIDATION.md`). Recorded here so the eventual case-study implementation task doesn't have to re-derive the collection shape from scratch. The existing `case-studies` `glob()` collection (Task 003, `src/content/case-studies/`, currently holding only a non-public dev-fixture entry, confirmed still unrendered anywhere) is the natural home once real cases are ready — extend its schema with the evidence-classification-aware fields `06-CASE-STUDY-ARCHITECTURE.md` now documents (e.g. per-claim status tags, a screenshot array using the existing `image()` schema helper rather than the current single `heroImage`), rather than creating a parallel `munkainkCasePage`-style collection — this content genuinely is what `case-studies` was reserved for, unlike the six page-type collections (`pages`/`customDevPage`/etc.), which model distinct *pages*, not distinct *entries within one page type*. Whether canonical case pages render via one dynamic `src/pages/munkaink/[slug].astro` route reading this collection, or two static files, is an implementation-time decision, not a schema one.

### Implementation status (Task 016)

Extended `caseStudies`'s schema per the plan above, resolving both open questions. **Schema shape**: `caseId` (the existing cross-page id) plus a separate `slug` (the URL segment — deliberately not the same value, since every route on this site is a descriptive Hungarian word, never a technical id — see `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`); `title`/`essence`/`summary` now `localizedGated` (previously plain `z.string()`); `evidenceBadge` (optional, the restrained "IN USE / [duration]" label `12-ASSET-STRATEGY.md`'s "Legacy screenshots" rule calls for); `screenshots[]` replacing the single `heroImage` (each entry: `id`, `image()`, `alt` as `localizedText` — both locales required, an accessibility description not marketing prose — and an optional `caption`); a `sections` object mirroring `06-CASE-STUDY-ARCHITECTURE.md`'s shared-structure vocabulary, every section past `hero` optional so CS01 and CS02 can each populate a genuinely different subset; `directionLink` (canonical page → supporting service route) and `finalCta`, matching the other five page-type collections' own `finalCta` shape. Removed rather than carried forward: `industry`/`companySize`/`status`/`lifecycle`/`featured`/`services` — none had a confirmed real value or an actual consumer, so they were dropped instead of speculatively retained, per this task's own "do not over-generalize" instruction. The non-public dev fixture (`_dev-fixture.md`) was removed now that two real entries validate the schema.

**Routing decision**: two static routes (`src/pages/munkaink/uzemi-rendszer/index.astro`, `.../erp-integracio/index.astro`), each a thin wrapper around its own dedicated component (`CaseStudy01Page.astro`/`CaseStudy02Page.astro`, `src/components/case-studies/`) — not a dynamic `[slug].astro` template. Reason: the two cases' real section sets genuinely differ (CS01 has no "integrations"/"business result" content; CS02's real weight sits there), so a loop-driven shared template would force either padding or flattening — the same "narrow schema/component per genuine shape difference" reasoning already applied to every other page-type collection above. Both components import the same `caseStudies` collection entries by slug (`getEntry('case-studies', 'uzemi-rendszer' | 'erp-integracio')`) and share their visual grammar entirely through `foundation.css`'s `.case-*` classes (see `07-DESIGN-SYSTEM.md`'s "Case-study art direction (Task 016)"), so nothing is actually duplicated between them beyond the section-selection logic itself.

## Images

Use Astro image tooling where possible.

Requirements:

- responsive sizes;
- appropriate formats;
- explicit dimensions/aspect handling;
- lazy loading below fold;
- meaningful alt content;
- screenshot quality sufficient for product evidence.

### Implementation status (Task 003)

The `CaseStudy.heroImage` schema field uses the Content Collections `image()` schema helper, so any future entry providing a real hero image gets Astro-native validation/optimization automatically. No real images exist yet, so this is unexercised beyond schema validation. No external image library was added.

### Implementation status (Task 016)

First real usage of the pipeline referenced above: `caseStudies.screenshots[].image` (the schema's `heroImage` field was replaced by this per-case array — see `06-CASE-STUDY-ARCHITECTURE.md`'s screenshot-placement strategy) and the `<Image>` component (`astro:assets`) in both `CaseStudy01Page.astro`/`CaseStudy02Page.astro`. Each `<Image>` requests three widths (`widths={[480, 800, 1200]}`) with a `sizes` attribute matched to the frame's own max-width, producing a responsive `srcset` of WebP variants at build time — confirmed in the production build output (4 source PNGs → 12 WebP files, e.g. the largest source shrinking from 219kB to a 37–88kB range across the three widths). No explicit `loading`/`decoding` override anywhere — Astro's `<Image>` default (`loading="lazy" decoding="async"`) applies to every screenshot on both pages, which is correct here since none sits inside the Hero/above the fold. Alt text is sourced from the content collection (`screenshots[].alt`, `localizedText` — both locales required, matching the accessibility-description precedent set by `SystemMap`/`OperatingFitField`'s own `ariaLabel` fields) — never a generic/empty alt, per DOC/06's "Alt-text direction."

## Fonts

Requirements:

- performance-aware loading;
- minimal number of families/weights;
- self-host or another justified strategy;
- avoid layout shift.

Specific fonts: TBD.

### Implementation status (Task 003)

`--font-sans`/`--font-mono` tokens currently hold system-font-stack placeholders (`system-ui, sans-serif` / `ui-monospace, monospace`) purely so the foundation renders with zero font-loading cost. Real typeface selection remains Task 004's decision per the Font rule in `TASK/004-design-tokens-typography-foundation.md`.

### Implementation status (Task 004B)

**Work Sans** (primary, variable, weights 400/500/600/700) and **Space Mono** (metadata only, static, Regular 400) are implemented and self-hosted. Both are SIL OFL 1.1, sourced from the same `google/fonts` upstream builds verified in Task 004A.

- Files: `src/fonts/work-sans-variable-{latin,latin-ext}.woff2`, `src/fonts/space-mono-400-{latin,latin-ext}.woff2` — 4 files, ~118KB combined. Two subsets per family (basic Latin + Latin Extended-A) because Hungarian text needs both — this mirrors Google's own delivery split rather than shipping one fat merged file.
- License/provenance preserved at `src/fonts/PROVENANCE.md`, `src/fonts/WORK-SANS-OFL.txt`, `src/fonts/SPACE-MONO-OFL.txt`.
- Manually vendored rather than via an `@fontsource-*` npm package — kept the file count and provenance trivial enough that a package added no real benefit, per this document's dependency rule.
- `font-display: swap` on every `@font-face` rule.
- Work Sans's two subset files are preloaded in `BaseLayout.astro` (`<link rel="preload" as="font">`) since Work Sans carries nearly all text on every page; Space Mono is not preloaded, per the task brief.
- Confirmed zero runtime request to `fonts.googleapis.com`/`fonts.gstatic.com` — verified directly against the production `dist/` output.
- Hungarian glyph coverage (Ő/ő/Ű/ű) was verified two ways: directly parsing the un-subsetted upstream `.ttf` binaries' `cmap` tables (Task 004A), and confirming the vendored subset files' declared `unicode-range` covers U+0150–0151/0170–0171 (Task 004B). Visually re-confirmed by rendering the fixture in a real Chromium browser via Playwright and inspecting screenshots at four viewport widths — no missing-glyph ("tofu") boxes.

## SEO primitives

Create reusable infrastructure for:

- title;
- meta description;
- canonical;
- Open Graph;
- robots;
- structured data injection.

### Implementation status (Task 003)

`BaseLayout.astro` accepts `title`, `description`, `path`, `ogImage`, `noindex` props and renders title/meta-description/OG basics directly — no separate SEO component, per the "do not build a generic enterprise SEO framework" brief.

Canonical and absolute `og:url` are rendered only when both `Astro.site` and a page's `path` prop are set; `Astro.site` is intentionally left unconfigured (see "Sitemap" below), so neither renders yet. Nothing was invented in their place. No default/fallback OG image was added, since none exists.

No structured-data (JSON-LD) infrastructure was added — the task treats this as premature before entity facts are verified (see `13-CONTENT-GAPS-AND-VALIDATION.md`).

## Sitemap

The official `@astrojs/sitemap` integration requires `site` to be set in `astro.config.mjs` to a real deployed URL.

Deferred: the production ARTIT.hu canonical domain is unresolved (`13-CONTENT-GAPS-AND-VALIDATION.md`), and most real routes don't exist yet. Add `site` and `@astrojs/sitemap` together once the domain is confirmed.

## Routing

Accepted Hungarian routes are defined in `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`.

### Implementation status (Task 003)

Only `/` and `/404` exist, both minimal structural placeholders (no homepage sections, no real copy). No other route from the accepted sitemap has been built yet.

### Implementation status (Task 005A)

`/` is now a real production homepage (Sections 01–03; see `03-SITEMAP-AND-PAGE-ARCHITECTURE.md` for the full page-spec record). `/404` is unchanged from Task 003. No other route exists yet — `/egyedi-fejlesztes/`, `/munkaink/`, `/tardify/`, `/rolunk/`, `/kapcsolat/`, and the two `/egyedi-fejlesztes/` sub-pages are all linked from the homepage per the accepted sitemap but not yet built, so those links currently 404. This is expected at this stage of the rollout, not a defect.

### Implementation status (Task 007B)

Astro's native `i18n` routing is configured (see "Localization" above) and would serve `/en/index.astro` automatically if it existed, but it does not yet — withheld until an approved English translation pass exists (see "Localization"). `/` itself is unchanged in URL/content-shape; it is now rendered via the shared `Homepage.astro` component instead of inlining all copy, which is an internal implementation change, not a routing change.

### Implementation status (Task 009)

Added `/egyedi-fejlesztes/` (`src/pages/egyedi-fejlesztes/index.astro`, a directory + `index.astro` rather than a flat `egyedi-fejlesztes.astro` file — deliberately, since this route will have real children, `/egyedi-fejlesztes/uzleti-alkalmazasok/` and `/egyedi-fejlesztes/rendszerintegracio/`, matching the existing `art-direction/` directory precedent rather than `design-foundation.astro`'s flat-file one, which has no children). Same locale-wrapper pattern as `/`: a thin route file rendering `<CustomDevelopmentPage locale="hu" />`. No `/en/egyedi-fejlesztes/` — same translation-completeness gate as `/`. The two child routes are linked from this page (per `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`'s "approved future routes may be linked" allowance) but not built — they currently 404, same expected-not-a-defect status Task 005A recorded for `/`'s own future links.

### Implementation status (Task 010)

Added `/munkaink/` (`src/pages/munkaink/index.astro`, directory form — no real children of its own currently planned, but kept consistent with the other two page routes' directory shape rather than a flat file, for the same reasoning). Same locale-wrapper pattern (`<MunkainkPage locale="hu" />`). No `/en/munkaink/`. Confirmed the existing nav already resolved correctly to this route before this task started (`SiteHeader`'s "Munkáink" link has pointed at `/munkaink/` since Task 005A/007B) — no navigation change was required.

### Implementation status (Task 011)

Added `/tardify/` (`src/pages/tardify/index.astro`, directory form, same reasoning as the other three). Same locale-wrapper pattern (`<TardifyPage locale="hu" />`). No `/en/tardify/`. The existing nav's "Tardify" link (pointed at `/tardify/` since Task 005A) now resolves — no navigation change required. One real, previously-expected-404 link now resolves as a side effect: the homepage's own "A Tardify története →" (Task 007) pointed at `/tardify/` before this route existed; confirmed via a real browser request, not assumed, that it now returns the built page.

### Implementation status (Task 011A)

No routing change — `/tardify/` is the same route, same `src/pages/tardify/index.astro` wrapper, same nav entry. Only the Hero's internal markup changed (see "Source structure" above).

### Implementation status (Task 012)

Added `/rolunk/` (`src/pages/rolunk/index.astro`, directory form, same reasoning as the other four). Same locale-wrapper pattern (`<RolunkPage locale="hu" />`). No `/en/rolunk/`. The existing nav's "Rólunk" link (pointed at `/rolunk/` since Task 005A) now resolves — no navigation change required. One real, previously-expected-404 link now resolves as a side effect: the homepage's own "Rólunk →" (Senior/Who section CTA, Task 007) pointed at `/rolunk/` before this route existed; confirmed via a real browser request, not assumed, that it now returns the built page.

### Implementation status (Task 013)

Added `/kapcsolat/` (`src/pages/kapcsolat/index.astro`, directory form, same reasoning as the other five). Same locale-wrapper pattern (`<KapcsolatPage locale="hu" />`). No `/en/kapcsolat/`. This route is the destination of every "Beszéljünk"/contact CTA on the site (header CTA, every implemented page's Final CTA) — audited across all five other routes via a real browser (not assumed from the YAML), confirming every one resolves to `/kapcsolat/` and, now that the route exists, every one resolves to a real page instead of 404ing. This is the last of the six main accepted-sitemap routes; `/`, `/egyedi-fejlesztes/`, `/munkaink/`, `/tardify/`, `/rolunk/`, and `/kapcsolat/` are all now live.

### Implementation status (Task 004B)

Added `/design-foundation` — an internal, `noindex` design-foundation fixture (not part of the accepted sitemap, not linked from any navigation). It exists to let the owner visually review typography/color/spacing before homepage implementation begins. Note: `src/pages/_design.astro` (the task's suggested underscore-prefixed name) was deliberately **not** used — Astro's file-based router excludes any `_`-prefixed file in `src/pages/` from routing entirely (confirmed against current official docs), so that name would silently produce no route at all. `design-foundation` was chosen instead, exactly as the task's own fallback allowed ("another clearly internal development route... with noindex").

## Forms

Contact form implementation: TBD.

Selection criteria:

- reliable delivery;
- privacy;
- minimal third-party JS;
- spam protection;
- deployment compatibility.

Do not choose a vendor until deployment architecture is known.

### Implementation status (Task 013)

Chosen: **Formspree** (`https://formspree.io/f/xppabkzq`), owner-supplied and explicitly approved during this task specifically to unblock `/kapcsolat/` — no vendor comparison was performed, since the decision was made directly by the business, not derived from the criteria above. Reconciled against them anyway: reliable delivery (Formspree is a managed third-party service, not build-time infrastructure this project maintains); privacy (the form's own privacy note links to Formspree's policy — see DOC/12); minimal third-party JS (zero — the vendor is used purely as a POST target, no Formspree script/widget is loaded on the page, the only JS is this project's own small inline enhancement); spam protection (Formspree's documented honeypot convention, `_gotcha`, implemented — no reCAPTCHA/JS challenge added); deployment compatibility (a plain HTML `action`/`method` POST to an external origin needs no server adapter, so the static `output` mode in `astro.config.mjs` is unaffected — confirmed, not assumed, since this was the deciding technical constraint before the endpoint was supplied). No API key or secret is involved: Formspree endpoint ids are meant to be embedded client-side, so storing it in the committed YAML content file is the vendor's own intended usage, not a leaked credential.

## Deployment

TBD.

Record final hosting/deployment decision here when chosen.

## Deployment

TBD.

Record final hosting/deployment decision here when chosen.

## Analytics

TBD.

Do not add analytics by default before a deliberate privacy/performance decision.

## Quality gates

At minimum:

- production build;
- type/schema checks;
- broken link validation if tooling is introduced;
- accessibility review;
- responsive QA;
- structured data validation;
- performance review.

### Implementation status (Task 003)

`npm run build` (production build) and `npm run check` (`astro check`, via `@astrojs/check`) both run and pass with 0 errors/warnings. `npm run dev` starts correctly and serves `/` (200) and unknown paths (404). Accessibility/responsive/structured-data/performance review remain for later tasks once there is real UI to review.

### Implementation status (Task 004B)

`npm run check`/`npm run build` re-verified after implementation: 0 errors, 0 warnings, 1 informational hint (`Container.astro`'s `Props` interface flagged as "unused" by plain TypeScript — expected and harmless; Astro's compiler consumes it for `Astro.props` typing even though it isn't referenced via an explicit type annotation). Production build output inspected directly for font references, external requests, and generated JS. Real-browser visual QA was performed with Playwright (Chromium, already available in the environment, not added as a project dependency) at 360/768/1280/1680px, which caught and fixed one real bug: `align-items: stretch` (flexbox default) was overriding the screenshot-frame placeholders' individual `aspect-ratio` values — fixed with a dedicated `.screenshot-row { align-items: flex-start }` class instead of reusing the generic `.meta-row`.

## Documentation rule

When implementation decisions differ from this document, update the document in the same task.
