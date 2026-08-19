# Task 007 — Homepage Implementation

## 1. Context

Tasks 005 and 006 are complete.

The project now has:

- a formally approved ARTIT art direction;
- A4.3.3 as the approved visual reference;
- the approved design language documented in `DOC/07-DESIGN-SYSTEM.md`;
- production design tokens and primitives integrated in Task 006;
- the Deep Blue-Violet / Ink operating accent migrated into production;
- semantic green separated from the brand accent;
- the refreshed `/design-foundation` confirmed by owner visual review;
- no unnecessary client JavaScript in the production foundation;
- the System Map grammar approved as an ARTIT brand asset;
- no shared `SystemMap` component yet — deliberately deferred until this task.

Task 007 is the first production page implementation that should fully express the approved visual language.

This task must implement the **real ARTIT homepage** based on the accepted information architecture, homepage content architecture and production design system.

This is no longer an art-direction experiment.

Do not create another prototype route.

Do not continue A4.x exploration.

Do not redesign the approved visual language.

The goal is:

> **Build the real homepage from the approved system.**

---

## 2. Primary objective

Implement the production homepage `/` so that it:

- follows the accepted homepage content architecture;
- communicates the approved ARTIT positioning clearly;
- uses the locked art direction consistently;
- uses the approved design-system primitives rather than prototype CSS;
- introduces the production System Map in a deliberate, maintainable way;
- preserves accessibility and performance standards;
- remains content-first, not decoration-first;
- feels recognizably ARTIT.

The result should feel like:

> **Swiss / Scandinavian restraint × digital systems engineering × editorial typography × structured data visualization**

and should visually reinforce:

> **„Értjük a komplexitást, átlátjuk a káoszt, és letisztult struktúrává formáljuk.”**

---

## 3. Read before editing

Before changing code, read and audit at minimum:

- `DOC/00-PROJECT-OVERVIEW.md`
- `DOC/01-BRAND-POSITIONING.md`
- `DOC/02-INFORMATION-ARCHITECTURE.md`
- `DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md`
- `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
- `DOC/05-CONTENT-MODEL.md`
- `DOC/06-CASE-STUDY-ARCHITECTURE.md`
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/10-SEO-EEAT-STRUCTURED-DATA.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
- `DOC/12-ASSET-STRATEGY.md`
- `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Inspect:

- current production `/`;
- `src/layouts/BaseLayout.astro`;
- production tokens/styles;
- shared components;
- `/design-foundation`;
- approved A4.3.3 reference implementation;
- historical homepage/prototype work only as context, not as production source.

The authoritative order is:

1. accepted content architecture;
2. locked design principles;
3. production design system;
4. prototype reference.

Do not let prototype markup override accepted content architecture.

---

## 4. Scope

This task owns the **production homepage implementation**.

Implement the homepage sections defined in `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`.

Do not invent new top-level homepage sections unless the source-of-truth documentation explicitly permits it.

Do not use placeholder section names or generic marketing filler.

If a section depends on unresolved factual evidence, follow the documentation’s verification rules rather than fabricating proof.

### In scope

- production `/`;
- homepage-specific components;
- production `SystemMap` component if justified;
- section composition;
- homepage responsive behavior;
- homepage SEO metadata already supported by the architecture;
- limited documentation updates reflecting actual implementation;
- accessibility/performance validation.

### Out of scope

- redesigning the global visual language;
- service-page implementation;
- case-study detail pages;
- about/contact page implementation;
- new content strategy;
- new brand claims;
- invented facts;
- new dependencies unless absolutely necessary;
- site-wide animation system;
- generic graph engine.

---

## 5. Homepage content fidelity

Follow `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md` closely.

Preserve the accepted hierarchy and strategic narrative.

The homepage should move the visitor through a coherent sequence:

1. immediate positioning;
2. recognition of operational complexity / mismatch;
3. ARTIT’s role and decision logic;
4. proof / capability;
5. long-term engineering credibility;
6. relevant solution or service pathways;
7. trust / evidence;
8. clear next action.

Use the actual section structure from the repository docs rather than this summary if naming/order differs.

Do not flatten the page into:

- Hero;
- six cards;
- testimonials;
- CTA.

The homepage architecture was intentionally designed to be more editorial and evidence-driven.

---

## 6. Hero — production implementation

The approved Hero art direction is represented by A4.3.3, but Task 007 must **rebuild it through production primitives**, not copy the experimental page wholesale.

The Hero must retain:

- existing approved production headline/copy;
- current navigation/header architecture;
- Deep Blue-Violet operating accent;
- warm neutral canvas;
- editorial typography;
- the System Map as the main visual brand asset;
- left-to-right operational narrative;
- strong whitespace;
- disciplined technical annotation;
- controlled interaction.

Do not reintroduce:

- green brand CTA;
- generic screenshot placeholder;
- generic SaaS dashboard;
- decorative 3D visuals;
- gradients/glass;
- fake telemetry;
- fake product UI.

---

## 7. Production System Map — architecture decision

Task 006 deliberately chose **Option A**:

> lower-level primitives now, actual System Map deferred until real homepage context exists.

That context now exists.

Task 007 must decide and implement the narrowest sensible production `SystemMap` architecture.

### 7.1 Requirements

Do not build a generic graph framework.

Do not add D3, React, canvas libraries or visualization dependencies.

Prefer:

- Astro;
- semantic HTML;
- inline SVG;
- small page/component-scoped JS only where interaction creates real value.

The component should express the approved grammar:

- icon-bearing source nodes;
- explicit ports;
- curved relationships;
- arrowheads;
- primary / secondary / exception routes;
- dominant transformation core;
- blue-violet transformation field;
- structured outputs;
- semantic green status markers;
- optional construction guides;
- optional legend/spec plate;
- accessible focus/select behavior.

### 7.2 Content model

Do not hardcode the A4.3.3 DOM so tightly that future reuse becomes impossible.

At the same time, do not over-abstract.

A reasonable narrow model may expose:

- source nodes;
- core label;
- output nodes;
- route type;
- selected/default route;
- accessible labels.

But only create the API actually needed by the homepage and foreseeable immediate reuse.

The exact API is an implementation decision for this task.

Document the rationale.

---

## 8. System Map interaction

Preserve the approved interaction principles:

- static-first;
- hover/focus previews relationship;
- click/keyboard may persist selection;
- selected route becomes clearer;
- unrelated routes recede;
- core responds subtly;
- motion remains restrained;
- state is not communicated through colour alone;
- keyboard parity;
- reduced-motion support.

Do not add:

- physics simulation;
- draggable graph;
- pan/zoom;
- minimap;
- graph controls;
- continuous decorative animation;
- particles.

The System Map should feel alive, not like a demo widget.

---

## 9. Construction / engineering language

Use the approved construction layer selectively:

- guide lines;
- coordinates;
- crosshairs;
- registration marks;
- mono annotations.

The Hero/System Map may carry the richest use of this grammar.

Elsewhere on the homepage, use it sparingly.

Do not cover every section in grids.

The visual language must remain premium/editorial.

---

## 10. Section rhythm

A major goal of the art-direction exploration was avoiding a homepage where every section repeats:

`container → heading → cards`

Use the locked composition principles:

- alternate dense and quiet areas;
- vary alignment intentionally;
- combine tonal surfaces with plain editorial space;
- use major/editorial section spacing where justified;
- allow one section to carry rich technical density and another to be nearly typographic;
- preserve hierarchy and calm.

Do not create variation for its own sake.

The page should still feel like one system.

---

## 11. Problem / recognition section

This section should preserve the strategic role already accepted in the homepage architecture.

The visitor should recognize situations such as:

- spreadsheets stretching beyond their intended role;
- manual data transfer;
- isolated systems;
- repeated work;
- workflows forced around software limitations.

Do not turn the content into a generic “pain points” grid.

Use the approved editorial/diagnostic language carefully.

The System Map Hero already carries the richest technical visual. The Problem section should feel like **structured diagnosis**, not another dashboard.

Avoid fake live-state labels.

---

## 12. Decision / what ARTIT does

This section should clarify:

- not every problem requires custom software;
- when custom software is appropriate, it should fit the business precisely;
- ARTIT’s role is to understand, structure and build.

Do not convert this into a giant service catalogue.

Keep it editorial, decisive and calm.

The section should visually feel like **clarity after complexity**.

---

## 13. Proof / work / case-study treatment

Follow the approved homepage architecture and case-study documentation.

If case studies or proof points are included:

- use only verified/approved facts;
- obey `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`;
- do not invent customer names, years, durations, ERP names or outcomes;
- do not publish placeholder values like `XX YEARS`;
- use working titles only if documentation explicitly permits them;
- if proof is not yet publication-safe, represent the section structurally without fabricated evidence.

Real product screenshots may be used only if approved assets actually exist.

The System Map is not a substitute for product evidence; product screenshots are not a substitute for the System Map.

---

## 14. Long-term engineering / longevity

The locked positioning includes long-term engineering credibility.

Use the homepage architecture and verified claim status exactly as documented.

Do not invent:

- exact project ages;
- “20+ years” claims;
- continuous daily-use durations;
- ERP-survival claims;
- customer-size figures.

If evidence is still gated, do not turn it into marketing copy.

The section may still communicate the **principle of building for long-term operation** without unsupported specifics.

---

## 15. Tardify relationship

Respect the accepted ARTIT ↔ Tardify architecture.

Tardify is:

- a separate branded product;
- evidence of ARTIT’s engineering/product capability;
- not the identity of the ARTIT website.

Do not make the homepage look like a Tardify mirror.

Use the homepage architecture to determine where/how Tardify appears.

Do not introduce it earlier or more prominently than the accepted structure supports.

---

## 16. CTA strategy

Use the accepted CTA hierarchy.

Primary CTA should use the locked Deep Blue-Violet interaction language.

Secondary CTA should remain visually subordinate.

Do not introduce:

- multiple competing primary CTAs per section;
- sticky conversion widgets;
- popups;
- marketing urgency;
- fake scarcity.

The page should feel confident, not salesy.

---

## 17. Header / navigation

Reuse the established production header/navigation architecture.

Do not redesign navigation in this task unless a real homepage integration issue requires a small production fix.

Preserve:

- responsive behavior;
- keyboard accessibility;
- zero/minimal JS approach;
- approved routes.

Do not introduce a mega-menu.

---

## 18. Footer boundary

If the repository already has a production footer architecture, use it.

If not, only implement the minimal footer required by existing project documentation.

Do not invent:

- company addresses;
- legal details;
- VAT/company numbers;
- social links;
- email/phone details not already verified.

Follow `DOC/13`.

---

## 19. SEO / metadata

Use existing SEO primitives.

Set homepage:

- title;
- description;
- OG basics where supported.

Use only approved positioning language.

Do not add speculative schema.

Structured data should only be added if:

- the project documentation explicitly supports it;
- entity facts required by the schema are verified;
- it provides real value.

Do not add FAQ schema simply for SEO.

Canonical/domain limitations remain governed by existing architecture.

---

## 20. Accessibility

Homepage must meet the project’s existing standard.

Verify:

- one logical H1;
- sequential heading hierarchy;
- semantic sections;
- descriptive links;
- real buttons/anchors;
- keyboard-accessible System Map controls;
- visible focus;
- sufficient contrast;
- no colour-only state;
- touch targets;
- no hover-only meaning;
- readable line lengths;
- no clipping;
- no horizontal overflow;
- reduced motion.

If the System Map is interactive, screen readers must receive a meaningful representation of its purpose and controls.

---

## 21. Performance

Preserve static-first Astro.

Expected:

- no framework hydration;
- no React/Vue/Svelte;
- no external fonts;
- no graph dependency;
- minimal inline/page/component JS only for System Map interaction;
- no animation library;
- no oversized decorative images.

The homepage should remain extremely lightweight.

Report actual client-JS impact.

---

## 22. Responsive behavior

Inspect the complete homepage at:

- 390px
- 768px
- 1440px
- 1920px

Do not merely confirm no overflow.

Review:

- Hero text wrapping;
- System Map composition;
- System Map node/label legibility;
- CTA rhythm;
- section spacing;
- major vs normal rhythm;
- tonal surfaces;
- case-study/proof layouts;
- Problem-section scanability;
- navigation;
- footer if present.

Mobile must feel intentionally composed.

The System Map should use a genuinely simplified/recomposed mobile layout rather than scaling desktop.

---

## 23. Production component strategy

Before creating components, distinguish:

### Stable reusable site concepts

Examples may include:

- section heading/eyebrow composition;
- technical annotation;
- evidence frame;
- System Map;
- case-study teaser;
- CTA group;
- route/service link.

### Homepage-only composition

Do not abstract these prematurely.

A component should exist because it represents a stable concept, not because the markup is visually large.

Keep APIs narrow.

Update `DOC/08-COMPONENT-LIBRARY.md` only for real production components.

---

## 24. Styling strategy

Use production tokens/primitives from Task 006.

Do not copy A4.3.3’s page-scoped CSS wholesale.

It is acceptable to use A4.3.3 as a visual reference for:

- System Map proportions;
- line hierarchy;
- node grammar;
- construction detail;
- interaction feel.

But production CSS should belong in the correct architecture:

- shared primitive styles where reusable;
- component-scoped styles where component-specific;
- page-scoped composition where truly homepage-only.

Avoid one giant homepage stylesheet if the project architecture suggests cleaner separation.

Do not over-fragment styles either.

---

## 25. Historical prototypes

Do not modify or delete:

- A;
- A2;
- A3;
- A4;
- A4.1;
- A4.2;
- A4.3;
- A4.3.1;
- A4.3.2;
- A4.3.3.

A4.3.3 remains the approved historical/reference snapshot.

Production implementation may differ in incidental geometry while preserving the locked language.

---

## 26. `/design-foundation`

Do not redesign it in Task 007.

Task 006 already integrated and owner-approved the production foundation.

Only modify it if homepage implementation exposes a genuine design-system gap that must be demonstrated there.

If no gap exists, leave it untouched.

---

## 27. Browser review workflow

Do not declare the homepage complete from code/build alone.

Use real-browser inspection.

Perform at least one genuine visual-review pass before finalizing.

At each viewport ask:

### Hero
- Does ARTIT’s positioning read immediately?
- Does the System Map feel like a brand asset rather than decoration?
- Is the H1 still dominant without suppressing the map?
- Is the interaction useful and restrained?

### Problem
- Does the visitor recognize operational disorder?
- Does it feel editorial/diagnostic rather than card-based?

### Middle page
- Does visual rhythm vary naturally?
- Are evidence/proof sections credible?
- Are sections calm enough after the dense Hero?

### Whole page
- Does it feel like one coherent ARTIT language?
- Does it avoid generic SaaS rhythm?
- Is there enough emotional pull?
- Does the page communicate competence without looking cold?
- Is the page visually alive without becoming noisy?

If an obvious issue appears, iterate before reporting completion.

---

## 28. Factual verification gate

Before publishing any factual claim, compare against:

`DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Classify content as:

- verified/publication-safe;
- working copy;
- unresolved/to verify.

Production `/` must not display unresolved factual placeholders.

If the architecture expects proof that is not publication-safe yet:

- omit the unsupported specific;
- use a non-factual structural treatment;
- document the gap.

Do not silently invent believable numbers.

---

## 29. Documentation

Update only genuinely affected docs.

Expected candidates:

### `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
Record production implementation status and only real deviations/implementation decisions.

### `DOC/07-DESIGN-SYSTEM.md`
Only if production implementation exposes a new stable design rule not already documented.

### `DOC/08-COMPONENT-LIBRARY.md`
Record actual homepage/shared components.

### `DOC/09-TECHNICAL-ARCHITECTURE.md`
System Map production architecture, JS footprint and stylesheet/component organization.

### `DOC/10-SEO-EEAT-STRUCTURED-DATA.md`
Only if actual homepage SEO/schema decisions materially change.

### `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
Record homepage/System Map validation if relevant.

### `DOC/12-ASSET-STRATEGY.md`
Only if real screenshot/evidence usage changes asset handling.

### `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`
Add newly discovered unresolved factual/content gaps.

Do not update docs just to mention Task 007.

---

## 30. Validation

Run:

```bash
npm run check
npm run build
```

Use real Chromium/Playwright if already available in the environment; do not add it as a dependency.

Verify:

- `/`;
- `/design-foundation`;
- `/404`;
- production routes affected by shared components if any.

Programmatically check where practical:

- horizontal overflow;
- critical clipping;
- console errors;
- external font/network requests;
- script count/JS footprint;
- focus behavior;
- System Map overlay/node alignment;
- reduced-motion;
- `noindex` still present on internal fixture/prototypes as appropriate.

Do not track test screenshots.

---

## 31. Bug policy

Actively look for real bugs during visual review.

Especially:

- System Map node/button drift;
- SVG clipping;
- output clipping;
- mobile label collision;
- H1/map collision;
- CTA wrapping;
- section overflow;
- hidden focus;
- stale `aria-pressed`;
- reduced-motion regressions;
- dark/light contrast;
- accidental old green brand usage;
- production `/` metadata mistakes.

If found:

1. fix;
2. rerun relevant checks;
3. document root cause and verification.

---

## 32. Repository hygiene

- no commit;
- no push;
- no unrelated cleanup;
- no dependency unless explicitly justified;
- do not edit historical prototypes;
- do not track `dist/`, `.astro/`, `node_modules/`, screenshots or Playwright artifacts;
- preserve unrelated repo state.

---

## 33. Required Completion Report

Return a detailed report containing at least:

1. Final status
2. Repository baseline
3. Source-of-truth audit
4. Homepage architecture implemented
5. Hero implementation
6. Production System Map architecture
7. System Map interaction/accessibility
8. Problem/recognition section
9. Decision/ARTIT-role section
10. Remaining homepage sections
11. Copy/factual validation
12. Case-study/proof handling
13. Longevity/trust handling
14. Tardify handling
15. CTA strategy
16. Component architecture
17. Styling architecture
18. Locked design-system usage
19. Responsive verification
20. Accessibility verification
21. Performance/client-JS impact
22. SEO/metadata
23. Files changed
24. Documentation updates
25. Validation performed
26. Bugs found and fixed
27. Deferred items/gaps
28. Deviations
29. Repository state
30. Final checkpoint

---

## 34. Final checkpoint

Only if:

- the full accepted homepage architecture is implemented;
- no unverified facts were invented;
- A4.3.3’s visual language is faithfully translated into production;
- System Map is production-ready and accessible;
- responsive behavior is intentional;
- the page does not regress into generic SaaS patterns;
- check/build succeed;
- real-browser review is complete;

report:

> **HOMEPAGE IMPLEMENTED — READY FOR OWNER VISUAL & CONTENT REVIEW**

Do not call the homepage finally approved.

Owner review remains the next gate.

---

## 35. Final instruction

Task 007 is where ARTIT stops being a collection of foundations and prototypes and becomes a real website.

Do not optimize for:

> “How closely can I copy A4.3.3?”

Optimize for:

> **“How faithfully can I express the approved ARTIT design language through the real homepage content architecture?”**

The System Map is a brand asset.

The homepage is the narrative.

The design system is the grammar.

Build the three as one coherent production page.
