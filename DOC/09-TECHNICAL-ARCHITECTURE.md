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

## Localization

ARTIT is bilingual: Hungarian (primary, currently published) and English (architecture-ready, not yet published — see below).

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

## Content Collections

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
