# ARTIT.hu — Technical Architecture

## Project type

Greenfield Astro website.

No WordPress migration.

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

## Dependency rule

At scaffold time, verify current stable versions and official Astro guidance before selecting exact packages.

Do not add dependencies merely for convenience.

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

## Public assets

Use `public/` only for assets that should bypass Astro processing or need fixed public paths.

Prefer `src/assets/` for processable images where appropriate.

## Styling

Direction:

- global semantic CSS custom properties;
- component-scoped styles where appropriate;
- no unnecessary CSS framework by default.

Final CSS strategy must be selected in Task 003 based on current Astro capabilities and project needs.

## JavaScript

Default:

zero client JavaScript.

Add islands only for real interactive requirements:

- mobile nav;
- dropdown if JS is required;
- contact form enhancements;
- explanatory motion only if needed.

Do not hydrate static marketing content.

## Content Collections

Use Astro Content Collections for case studies.

Validate schemas.

Markdown/MDX decision should be based on actual case-study needs.

## Images

Use Astro image tooling where possible.

Requirements:

- responsive sizes;
- appropriate formats;
- explicit dimensions/aspect handling;
- lazy loading below fold;
- meaningful alt content;
- screenshot quality sufficient for product evidence.

## Fonts

Requirements:

- performance-aware loading;
- minimal number of families/weights;
- self-host or another justified strategy;
- avoid layout shift.

Specific fonts: TBD.

## SEO primitives

Create reusable infrastructure for:

- title;
- meta description;
- canonical;
- Open Graph;
- robots;
- structured data injection.

## Routing

Accepted Hungarian routes are defined in `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`.

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

## Documentation rule

When implementation decisions differ from this document, update the document in the same task.
