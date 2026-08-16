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

## Documentation rule

When implementation decisions differ from this document, update the document in the same task.
