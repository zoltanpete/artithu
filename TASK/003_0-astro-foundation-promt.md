We are continuing the ARTIT.hu greenfield website project.

Task 001 — Repository Foundation: COMPLETE
Task 002 — Documentation Foundation Review: COMPLETE WITH OPEN DECISIONS

The documentation foundation has been reviewed and is READY FOR TASK 003.

Your next task is:

TASK/003-astro-foundation.md

Read that task file first and treat it as the authoritative task specification.

Then read the repository documentation relevant to this task before making changes.

At minimum read:

- README.md
- DOC/00-PROJECT-OVERVIEW.md
- DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md
- DOC/05-CONTENT-MODEL.md
- DOC/07-DESIGN-SYSTEM.md
- DOC/08-COMPONENT-LIBRARY.md
- DOC/09-TECHNICAL-ARCHITECTURE.md
- DOC/10-SEO-EEAT-STRUCTURED-DATA.md
- DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md
- DOC/12-ASSET-STRATEGY.md
- DOC/13-CONTENT-GAPS-AND-VALIDATION.md

Do not rely on this prompt as a replacement for the repository documentation.

The DOC/ set is the project's source of truth.


==================================================
PROJECT STATE
==================================================

This is a greenfield replacement for the previous ARTIT.hu WordPress site.

There is no legacy frontend implementation to preserve or migrate.

The repository currently contains the documentation/task foundation but intentionally does not yet contain an Astro application.

The development sequence is:

documentation
→ technical foundation
→ design tokens / typography
→ global layout / navigation
→ homepage implementation
→ subpages
→ case studies
→ final SEO/accessibility/performance QA

Task 003 is ONLY the technical foundation.

Do not start Task 004 or later work.


==================================================
IMPORTANT PRE-TASK HOUSEKEEPING
==================================================

Task 002 reported:

- `.history/` exists as an untracked editor-local-history artifact.
- `TASK/000-claude-starter-prompt.md` exists as an untracked prompt file.

Before scaffolding:

1. Add `.history/` to `.gitignore` if it is not already ignored.

2. Treat `TASK/000-claude-starter-prompt.md` as intentional project documentation.
   Do not delete it merely because it is currently untracked.

3. Review the design-system examples for any remaining illustrative metadata that looks like a real but unverified project fact.

For example:

`10+ YEARS`

If such a value is only an illustrative design example and the underlying project fact remains unverified, replace it with a clearly generic placeholder such as:

`XX+ YEARS`

Do not alter validated strategic copy or actual content architecture.

This is documentation housekeeping only.


==================================================
PRIMARY OBJECTIVE
==================================================

Create a clean, minimal, production-capable Astro foundation for ARTIT.hu.

The result should provide the technical primitives needed for future implementation without prematurely implementing the website design.

At the end of this task we should have:

- a working current Astro project;
- TypeScript;
- clean source structure;
- global CSS entry;
- semantic design-token foundation;
- base layout/document;
- minimal SEO infrastructure;
- minimal case-study content infrastructure;
- Astro-native image capability;
- successful production build;
- updated technical documentation.

We should NOT yet have:

- a finished homepage;
- finished navigation;
- final fonts;
- finished design system;
- finished page components;
- real case-study pages;
- animation system;
- contact backend;
- analytics.


==================================================
1. CURRENT ASTRO RESEARCH — REQUIRED
==================================================

Before scaffolding, verify current official Astro documentation.

Do NOT assume package versions, APIs, Content Collections syntax or configuration patterns from memory.

Use current primary/official Astro sources.

Verify at minimum:

- current stable Astro release;
- recommended project creation/scaffolding;
- TypeScript configuration;
- current Content Collections API;
- current content schema/config conventions;
- image handling / `astro:assets`;
- current sitemap integration guidance if relevant;
- current static output/default behavior;
- current recommended project structure/config patterns.

Use official Astro documentation/package sources as the authority.

Do not use random tutorials or blog posts when official documentation covers the topic.

In the completion report state:

- Astro version installed;
- Node/package requirements encountered;
- which major Astro APIs/patterns were selected based on current documentation.

Do not turn the repository documentation into a link dump.

Only record durable architectural decisions.


==================================================
2. PACKAGE MANAGER / PROJECT SCAFFOLD
==================================================

Inspect the repository and local environment before choosing commands.

Use the project's existing package-manager convention if one already exists.

If there is no convention yet, choose one reasonable package manager and document the decision.

Do not initialize a nested Astro project directory.

The repository root itself is the Astro project.

Preserve:

- DOC/
- TASK/
- README.md
- .editorconfig
- .gitignore

Do not allow a scaffold command to overwrite project documentation blindly.

If the safest approach is to create the minimal Astro files manually using current official conventions, that is acceptable.

Do not add demo/sample content that is unrelated to ARTIT.


==================================================
3. DEPENDENCY POLICY
==================================================

Keep dependencies minimal.

Astro itself is expected.

Add an official Astro integration only if Task 003 genuinely requires it.

Do NOT automatically add:

- React
- Vue
- Svelte
- Tailwind
- Bootstrap
- animation libraries
- icon libraries
- component libraries
- state-management libraries
- form libraries
- analytics
- CMS SDKs
- validation libraries already unnecessary because Astro/current dependencies provide what is needed.

If an official sitemap integration is appropriate at foundation stage, verify the current Astro recommendation first.

Every nontrivial dependency must have a reason.

No dependency should be added merely because it is common in other projects.


==================================================
4. TYPESCRIPT
==================================================

Configure TypeScript according to current Astro guidance.

Prefer a strict or appropriately strict configuration suitable for a production project.

Do not create unnecessary custom compiler complexity.

The project should be able to catch meaningful type errors during development/build checks.


==================================================
5. SOURCE STRUCTURE
==================================================

The documented target direction is:

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

Do NOT create empty directories purely to satisfy the diagram if they are not yet needed or cannot be tracked meaningfully.

Create the structure that Task 003 actually needs.

Future tasks can introduce additional directories when real components require them.

Avoid placeholder files such as `.gitkeep` unless there is a concrete reason.


==================================================
6. BASE LAYOUT
==================================================

Create a minimal reusable site/base layout.

Responsibilities should include where appropriate:

- HTML document structure;
- `lang="hu"`;
- charset;
- viewport;
- title;
- meta description;
- canonical;
- Open Graph basics;
- global stylesheet import;
- slot for page content.

Keep the API simple.

Do not build a generic enterprise SEO framework.

Do not hardcode page-specific marketing copy inside the layout.


==================================================
7. SEO PRIMITIVE
==================================================

Create only the SEO foundation required by current documented architecture.

It should be possible for a page to supply at minimum:

- title;
- description;
- canonical/path information;
- Open Graph image when later available;
- robots/noindex if needed later.

Use sensible site defaults where verified data exists.

If production domain/canonical details remain unresolved in DOC/13, do not invent them.

Design the primitive so canonical handling can be completed cleanly once the production site URL is confirmed.

Do not invent:

- organization legal data;
- social accounts;
- OG images;
- telephone;
- address.

Do not implement speculative schema markup in this task unless a minimal infrastructure primitive is clearly useful.

Structured-data content itself can come later when entity facts are verified.


==================================================
8. HOMEPAGE ROUTE
==================================================

Create `/` as a minimal structural placeholder proving that:

- routing works;
- base layout works;
- global styles load;
- metadata works;
- production build works.

This is NOT the homepage implementation task.

Do not implement the 9 homepage sections.

Do not start visual exploration.

Do not invent homepage copy beyond the minimum necessary placeholder content.

Prefer a clearly temporary development state over a premature design.


==================================================
9. 404
==================================================

If current Astro static-site conventions make a custom 404 appropriate and straightforward at this stage, create a minimal semantic 404 page.

Keep it visually minimal.

Do not spend design time on it.

If there is a technical reason to defer it, document that rather than overengineering.


==================================================
10. GLOBAL CSS FOUNDATION
==================================================

Create the global stylesheet architecture needed for Task 004.

This task should establish structure, NOT finalize the visual design.

Appropriate foundation may include:

- box-sizing normalization;
- body margin reset;
- sensible inherited typography behavior;
- image/media defaults;
- button/input font inheritance;
- accessibility-safe base behavior;
- semantic CSS custom property placeholders/tokens.

Do not install a CSS framework automatically.

Do not implement a full reset package unless genuinely needed.


==================================================
11. DESIGN TOKENS — FOUNDATION ONLY
==================================================

Create the semantic token architecture described by DOC/07.

For example roles such as:

--color-bg
--color-surface
--color-text
--color-text-muted
--color-border
--color-accent

--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--space-section

--radius-sm
--radius-md

--font-sans
--font-mono

--text-xs
--text-sm
--text-body
--text-lead
--text-h3
--text-h2
--text-display

--content-reading
--content-standard
--content-wide

However:

Task 003 should NOT finalize the design-system values.

Use conservative foundation/default values where required for the project to render, and clearly leave final visual calibration to Task 004.

Do not select final brand colors.

Do not select final fonts.

Do not prematurely implement the complete typography scale.

The important outcome is semantic token architecture, not visual polish.


==================================================
12. CONTENT COLLECTIONS
==================================================

Set up the minimum viable CaseStudy content infrastructure using the CURRENT Astro Content Collections API.

Use DOC/05 and DOC/06 as the architectural source.

Important:

Do NOT overmodel the schema.

The documentation explicitly allows flexible Markdown/MDX body content.

Implement only fields that are genuinely useful at foundation stage.

Likely concepts include some subset of:

- title
- summary
- industry
- companySize
- status
- lifecycle
- featured
- services
- heroImage
- screenshots
- timeline
- relatedServices
- seo

But do not blindly implement every field listed in the conceptual model.

Determine the minimal schema needed to establish the architecture cleanly.

Do not create fictional real case studies merely to satisfy the collection.

If Astro requires sample content for validation/testing, use an unmistakably non-public development fixture or another safe mechanism.

Do not encode unverified ARTIT project claims into fixture content.


==================================================
13. IMAGE FOUNDATION
==================================================

Use Astro-native image handling where appropriate.

Establish a path that supports future:

- real application screenshots;
- portraits;
- Tardify product images;
- responsive images.

Do not add an external image library.

Do not add fake stock assets.

Do not add generated marketing images.

No device mockups.


==================================================
14. CLIENT JAVASCRIPT
==================================================

Default target:

zero client JavaScript on the current placeholder page.

Do not introduce framework islands yet.

There is currently no Task 003 requirement that justifies React/Vue/Svelte or a client-side UI runtime.

Future navigation or interaction tasks can introduce the minimum required behavior later.

Do not solve future problems preemptively.


==================================================
15. ACCESSIBILITY FOUNDATION
==================================================

Even the minimal scaffold should establish good defaults:

- correct document language;
- semantic landmarks where appropriate;
- meaningful title/description;
- visible focus must not be globally removed;
- motion should not be introduced unnecessarily;
- media should behave responsively;
- no inaccessible interaction patterns.

Do not build accessibility abstractions before real components exist.


==================================================
16. PERFORMANCE FOUNDATION
==================================================

Maintain the project's performance philosophy:

- static-first;
- minimal dependencies;
- zero/minimal client JS;
- Astro-native asset handling;
- no unnecessary third-party scripts;
- no heavy CSS framework by default.

The ARTIT site itself should demonstrate engineering discipline.


==================================================
17. SITEMAP
==================================================

Determine from CURRENT official Astro guidance whether sitemap integration should be added now.

Consider that:

- the site will be static;
- production site URL may still be unresolved;
- most real routes are not implemented yet.

If adding the official sitemap integration now is clean and correct, do so.

If the missing production site URL makes it premature, defer it explicitly and document the reason.

Do not invent the canonical production URL.


==================================================
18. STRUCTURED DATA
==================================================

Do not populate Organization JSON-LD with guesses.

If useful, you may create a small typed/serializable infrastructure for later JSON-LD insertion, but only if it materially simplifies future implementation.

Avoid abstraction for abstraction's sake.

No fake entity data.


==================================================
19. DOCUMENTATION UPDATES
==================================================

Update repository documentation to reflect actual technical decisions.

At minimum review/update:

DOC/05-CONTENT-MODEL.md
DOC/09-TECHNICAL-ARCHITECTURE.md

Update these only if implementation decisions affect them:

DOC/07-DESIGN-SYSTEM.md
DOC/08-COMPONENT-LIBRARY.md
DOC/10-SEO-EEAT-STRUCTURED-DATA.md
DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md
DOC/12-ASSET-STRATEGY.md
DOC/13-CONTENT-GAPS-AND-VALIDATION.md

Documentation must describe what was actually implemented, not what we intended before implementation.

Do not rewrite strategic documentation unnecessarily.


==================================================
20. README
==================================================

Update README only if needed so a new developer/session can understand:

- what the project is;
- how to install dependencies;
- how to run development;
- how to build;
- where documentation lives.

Keep it concise.

Do not duplicate the DOC set inside README.


==================================================
21. QUALITY CHECKS
==================================================

Run all appropriate checks for the resulting project.

At minimum:

- dependency install succeeds;
- Astro project starts/builds correctly;
- production build succeeds;
- Astro/type/content checks succeed where available;
- no unexpected client-side JS is emitted for the placeholder page;
- no obvious broken internal imports;
- git diff reviewed.

If `astro check` requires an additional official package, evaluate whether adding it is appropriate for the project rather than blindly skipping type/template validation.

Use current official guidance.


==================================================
22. GIT / REPOSITORY HYGIENE
==================================================

Review:

- git status;
- generated files;
- package lockfile;
- ignored build output;
- local environment artifacts.

The correct lockfile should be tracked.

Build output should not be tracked.

Do not commit unless the established project workflow explicitly requires it.

Do not modify unrelated files.


==================================================
23. DO NOT DO IN TASK 003
==================================================

Explicitly do NOT:

- implement the final homepage;
- implement the final header/navigation;
- implement the final footer;
- select final fonts;
- select final ARTIT colors;
- build Case Study 01 or 02;
- create fake case-study data;
- build service pages;
- build the Tardify page;
- implement contact form backend;
- add analytics;
- add cookie/consent tooling;
- add a CMS;
- add Tailwind automatically;
- add React/Vue/Svelte automatically;
- add animation libraries;
- add icon libraries;
- add a component framework;
- add speculative schema markup;
- invent company/entity data;
- invent project facts;
- redesign approved architecture.


==================================================
24. DECISION PRINCIPLE
==================================================

When there are several technically valid options, prefer the one that is:

1. native to Astro;
2. simpler;
3. static-first;
4. dependency-light;
5. accessible;
6. maintainable;
7. easy for future Claude sessions to understand.

Do not optimize for novelty.


==================================================
DEFINITION OF DONE
==================================================

Task 003 is complete only if:

- Astro is scaffolded at repository root;
- current stable Astro conventions were verified;
- TypeScript is configured;
- production build succeeds;
- meaningful Astro/type/content validation succeeds;
- source structure is clean;
- base layout exists;
- global CSS foundation exists;
- semantic design-token foundation exists;
- minimal homepage route works;
- minimal SEO metadata infrastructure exists;
- minimal CaseStudy content infrastructure exists;
- image architecture uses Astro-native capabilities;
- no unnecessary client framework exists;
- placeholder homepage emits zero/minimal client JS;
- no unverified ARTIT facts were introduced;
- documentation reflects actual architecture;
- repository hygiene is clean enough for Task 004.


==================================================
COMPLETION REPORT
==================================================

Return a detailed completion report with exactly these sections:

## 1. Final status

Use one:

COMPLETE
COMPLETE WITH OPEN DECISIONS
BLOCKED

## 2. Current Astro foundation

Report:

- Astro version;
- Node requirement/version used;
- package manager;
- TypeScript configuration;
- official integrations added;
- other dependencies added and why.

## 3. Official Astro guidance checked

Summarize the current official guidance that materially affected implementation, especially:

- scaffold;
- Content Collections;
- images;
- TypeScript/checking;
- sitemap if applicable.

Do not paste large documentation excerpts.

## 4. Files created/changed

Group by:

- root/config;
- src;
- content;
- documentation;
- task/repository housekeeping.

Explain important files briefly.

## 5. Architecture implemented

Summarize:

- project structure;
- layout;
- SEO primitive;
- CSS/token foundation;
- content collection;
- image strategy;
- JS/hydration strategy.

## 6. Dependency audit

For every direct dependency/devDependency:

- package;
- purpose;
- why it is necessary now.

Explicitly state whether React, Vue, Svelte, Tailwind, animation libraries, icon libraries or component libraries were introduced.

## 7. Content model implementation

Describe the actual CaseStudy schema implemented.

Explain any differences from DOC/05 and why they were intentionally deferred.

## 8. SEO / sitemap status

Report:

- metadata infrastructure;
- canonical handling;
- Open Graph handling;
- sitemap decision;
- structured-data status;
- any blocked values awaiting DOC/13 validation.

## 9. Accessibility / performance foundation

Report:

- semantic defaults;
- focus behavior;
- client JS status;
- image handling;
- any relevant build/runtime observations.

## 10. Validation performed

List exact commands/checks run and results.

Include:

- production build;
- Astro/type/content check;
- relevant runtime/dev verification if performed.

## 11. Documentation updates

List which DOC files changed and why.

## 12. Open decisions / deferred items

Only list decisions genuinely deferred to later tasks.

Do not treat intentionally future work as a blocker.

## 13. Deviations from Task 003

List any deviations and justification.

If none:

None.

## 14. Repository state

Report:

- git status;
- untracked files;
- generated/ignored files;
- whether changes were committed.

## 15. Task 004 readiness

State exactly:

READY FOR TASK 004

or

NOT READY FOR TASK 004

with concise reasoning.

Stop after the completion report.

Do not start Task 004.