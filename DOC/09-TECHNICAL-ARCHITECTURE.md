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

## Content Collections

Use Astro Content Collections for case studies.

Validate schemas.

Markdown/MDX decision should be based on actual case-study needs.

### Implementation status (Task 003)

A minimal `case-studies` collection exists at `src/content.config.ts`, using the current `glob()` loader (`astro/loaders`) and a Zod schema (imported from `astro/zod` — the `z` re-export on `astro:content` is deprecated in the installed Astro version). See `05-CONTENT-MODEL.md` for the implemented field list and what was deferred. A single non-public, clearly-labeled dev fixture entry validates the schema; it is not rendered anywhere.

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
