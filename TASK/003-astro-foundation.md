# Task 003 — Astro Foundation

## Status

`BLOCKED_BY_TASK_002`

## Objective

Create the technical foundation of the new ARTIT.hu Astro project without implementing finished page design.

## Precondition

`Task 002 — Documentation Foundation Review` is complete.

## Research requirement

Before selecting exact versions or implementation patterns, verify current official Astro documentation for:

- current stable Astro version;
- project creation;
- TypeScript;
- Content Collections;
- image handling;
- sitemap integration if needed;
- current recommended configuration patterns.

Use primary/official sources only for technical decisions.

Record material technical decisions in `DOC/09-TECHNICAL-ARCHITECTURE.md`.

## Required implementation

1. Scaffold Astro project in the repository.
2. Enable TypeScript.
3. Create the agreed source structure where justified:
   - `src/assets/`
   - `src/components/`
   - `src/content/`
   - `src/layouts/`
   - `src/pages/`
   - `src/styles/`
   - `src/utils/`
   - `src/config/`
4. Establish:
   - base HTML document/layout;
   - global stylesheet entry;
   - initial semantic design token file;
   - SEO metadata primitive;
   - placeholder homepage route;
   - 404 route if appropriate at this phase.
5. Configure content infrastructure for case studies at a minimal level.
6. Configure image tooling using Astro-native capabilities.
7. Ensure build succeeds.

## Do not implement yet

- finished homepage sections;
- visual polish;
- final navigation;
- final typography selection;
- real case study content;
- animation system;
- contact form backend;
- analytics;
- third-party UI framework unless explicitly justified.

## CSS strategy

Prefer:

- semantic CSS custom properties;
- Astro/component-scoped styles;
- minimal dependencies.

Do not add Tailwind or another CSS framework automatically.

If proposing one, justify it against `DOC/07-DESIGN-SYSTEM.md` and obtain approval before adding.

## JavaScript policy

Default to zero client JavaScript.

Do not introduce framework hydration unless required.

## Content Collections

Create only the minimal CaseStudy collection/schema needed to validate the architecture.

Do not overmodel future content.

## Documentation updates

Update:

- `DOC/05-CONTENT-MODEL.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/10-SEO-EEAT-STRUCTURED-DATA.md` if technical SEO primitives change
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md` if implementation policy changes

## Validation

Run all appropriate available checks, at minimum:

- install;
- Astro production build;
- type/content schema checks.

## Definition of Done

- [ ] Astro project runs.
- [ ] Production build succeeds.
- [ ] TypeScript is configured.
- [ ] Base project structure exists.
- [ ] Global style/token foundation exists.
- [ ] Minimal SEO primitive exists.
- [ ] Minimal case-study content infrastructure exists.
- [ ] No unnecessary client framework is introduced.
- [ ] No final visual design is prematurely implemented.
- [ ] Documentation reflects technical decisions.

## Completion report

Return:

1. final status;
2. Astro/version/dependencies;
3. files created/changed;
4. architecture decisions;
5. checks run and results;
6. documentation updates;
7. deviations from brief;
8. proposed next task.

Expected next task:

`Task 004 — Design Tokens + Typography Foundation`
