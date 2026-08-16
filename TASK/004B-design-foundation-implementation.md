# Task 004B — Design Foundation Implementation

## Status

`READY`

## Phase

Implementation of the approved Task 004A direction.

## Approved direction

Task 004A is approved with the following direction:

> **Work Sans + Space Mono + Restrained Industrial Neutral**

The approved intent is:

> **Software built to last.**  
> Restrained · Editorial · Engineering

The direction is approved, but **optical calibration is explicitly allowed** during implementation.

This means the following are directionally approved but not immutable numerical specifications:

- exact green accent shade around the proposed `#2B5D4B`;
- exact display font sizes within the approved scale envelope;
- exact Work Sans display weights;
- exact spacing values;
- exact muted/border neutral calibration.

Any adjustment must preserve the approved character and must be documented.

---

# Claude execution prompt

We are continuing the ARTIT.hu greenfield website project.

Completed:

- Task 001 — Repository Foundation
- Task 002 — Documentation Foundation Review
- Task 003 — Astro Foundation
- Task 004A — Typography + Color Direction Proposal

Task 004A has been reviewed by the owner.

The approved design direction is:

> **Work Sans + Space Mono + Restrained Industrial Neutral**

Your task is now:

# Task 004B — Design Foundation Implementation

This is the implementation checkpoint for typography, color, spacing, containers and foundational UI states.

Do not implement the homepage architecture yet.

Do not start Task 005 or later work.

---

## 1. Read the repository first

Before changing anything, read:

- `README.md`
- `DOC/00-PROJECT-OVERVIEW.md`
- `DOC/01-BRAND-POSITIONING.md`
- `DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md`
- `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
- `DOC/12-ASSET-STRATEGY.md`
- `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Also inspect the current implementation:

- `package.json`
- `astro.config.mjs`
- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/pages/404.astro`
- `src/config/site.ts`

Read the Task 004A proposal/result if it exists in the repository.

Do not treat this prompt as a replacement for repository documentation.

---

# 2. Approved visual direction

The site must communicate:

- seniority;
- precision;
- calm confidence;
- engineering competence;
- longevity;
- clarity;
- business relevance.

It must not feel like:

- a generic SaaS landing page;
- a startup template;
- an AI startup;
- a developer portfolio;
- a generic digital agency;
- a luxury editorial site disconnected from software engineering;
- a corporate ERP vendor.

The primary visual system is typography, grid, whitespace and evidence.

The UI should remain quieter than the real software screenshots that will later appear inside it.

---

# 3. Approved typography

## Primary

**Work Sans**

Approved role:

- body;
- lead;
- headings;
- navigation later;
- buttons/CTAs;
- general interface text.

Use a variable font if the selected delivery source supports a practical WOFF2 variable file.

Likely used weights:

- 400;
- 500;
- 600;
- 700.

Do not load unnecessary italics or weights.

## Metadata

**Space Mono**

Approved role is deliberately narrow:

- case identifiers;
- status labels;
- lifecycle metadata;
- timeline labels;
- technical annotations;
- small engineering metadata.

Examples:

```text
CASE / 01
STATUS        ACTIVE
LIFECYCLE     XX+ YEARS
```

Do NOT use Space Mono for:

- body copy;
- navigation;
- ordinary buttons;
- long labels;
- general UI text;
- decorative terminal aesthetics.

The mono should be a recognizable secondary voice, not a theme.

---

# 4. Font source and delivery

Before downloading or installing anything, verify current authoritative font sources and licenses.

Requirements:

- self-host fonts;
- no Google Fonts CDN request at runtime;
- WOFF2 preferred;
- Hungarian glyphs must be supported;
- minimize file count;
- no unnecessary font package/runtime dependency.

Preferred architecture:

- one Work Sans variable WOFF2 file if practical;
- one Space Mono Regular WOFF2 file;
- Space Mono Bold only if implementation demonstrates a real need.

Prefer locally vendored font files over adding font-delivery npm dependencies if doing so remains simple and maintainable.

If manually vendoring files:

- use authoritative upstream font files;
- preserve required license information in the repository;
- place files in a clear asset/font location;
- document provenance.

Do not copy random font files from third-party download sites.

If an official/reliable package-based solution is materially safer or simpler, you may use it, but explain why.

---

# 5. Approved color direction

Task 004A proposed:

```text
Background        #F6F5F3
Surface           #ECEAE6
Text              #1A1A1A
Muted text        #656260
Border            #D9D6D1
Accent            #2B5D4B
Accent strong     #1A3C30

Dark background   #1A1A1A
Dark text         #F2F1EF
Dark muted        #A8A5A1
```

This is the approved direction.

However, optical calibration is allowed.

You may slightly adjust:

- accent;
- accent strong;
- muted text;
- border;
- surface;

if actual browser rendering demonstrates that an adjustment materially improves:

- contrast;
- hierarchy;
- screenshot compatibility;
- interaction clarity;
- visual balance.

Do NOT change the basic character:

- neutral;
- slightly warm/industrial;
- dark charcoal;
- restrained deep green accent.

No blue/purple replacement.

No gradient.

No decorative color expansion.

Any adjustment must be reported with before/after values and reasoning.

---

# 6. Semantic color tokens

Implement a durable semantic token system.

At minimum support roles equivalent to:

```css
--color-bg
--color-surface
--color-text
--color-text-muted
--color-border
--color-accent
--color-accent-strong

--color-dark-bg
--color-dark-text
--color-dark-text-muted
```

Add interaction-specific or focus tokens only where they improve semantic clarity.

Do not create dozens of near-duplicate color tokens.

Avoid raw color values scattered across component CSS.

---

# 7. Typography token system

Implement a coherent fluid typography foundation.

The Task 004A design envelope was approximately:

```text
Hero/display      72–96px max desktop
H2                48–64px max desktop
H3                28–36px
Lead              20–24px
Body              17–19px
Small             14–15px
Metadata          11–13px
```

Do not treat these as mandatory fixed values.

Use modern CSS such as `clamp()` where appropriate so the system scales naturally from mobile to desktop.

Create semantic tokens for roles rather than device-specific arbitrary values.

Likely roles:

```css
--text-display
--text-h1
--text-h2
--text-h3
--text-lead
--text-body
--text-small
--text-meta
```

If `display` and `h1` are genuinely identical at foundation stage, avoid unnecessary duplication.

The resulting scale must work at narrow mobile widths without overflow or absurd wrapping.

---

# 8. Typography behavior

Implement deliberate line-height and tracking.

General direction:

## Display / H1 / H2

- relatively tight line-height;
- subtle negative tracking where visually appropriate;
- Work Sans SemiBold/Bold only as needed;
- avoid oversized startup-style billboard typography.

## Body

- comfortable reading line-height;
- regular weight;
- optimized for long-form case studies and business content.

## Lead

- visibly distinct from body;
- not simply "body but huge";
- comfortable for introductory copy.

## Metadata

- Space Mono;
- small;
- controlled positive tracking;
- uppercase only where semantically/design-wise appropriate;
- never allowed to dominate.

Hungarian accented uppercase text must render cleanly.

---

# 9. Spacing system

Implement the real spacing scale for the site.

The current Task 003 values are placeholders.

Use a compact semantic scale that supports:

- inline spacing;
- component spacing;
- content rhythm;
- section rhythm.

At minimum preserve or refine semantic roles such as:

```css
--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--space-section
```

You may introduce one or two additional levels if real composition requires them.

Prefer fluid section spacing where useful.

Do not create a huge utility-style spacing taxonomy.

---

# 10. Content widths / containers

Implement the approved three-width content architecture:

```text
reading
standard
wide
```

Their roles:

## Reading

Long-form text / case-study prose.

Target roughly:

- 65–75 readable characters per line;
- comfortable Hungarian prose.

## Standard

Primary page content.

Used for most section layouts.

## Wide

Evidence-heavy layouts:

- screenshots;
- case-study visuals;
- diagrams;
- wide grids.

Use CSS custom properties and/or small reusable layout primitives.

Do not build a large utility framework.

Container padding must work responsively down to mobile.

---

# 11. Radius, borders and shadows

Approved direction:

- low radius;
- restrained borders;
- little or no shadow;
- no floating SaaS cards.

Implement foundation tokens accordingly.

Likely:

```css
--radius-sm
--radius-md
```

Do not introduce pill-shaped generic containers.

Buttons may use controlled radius, but should not look like rounded SaaS capsules unless there is a strong reason.

Borders should remain subtle for decorative separation.

Remember Task 004A's accessibility observation:

the proposed subtle border does not by itself meet the 3:1 non-text contrast requirement.

Therefore:

- decorative dividers may remain subtle;
- required control boundaries must not rely only on that subtle border.

Do not solve nonexistent form components yet.

Document the rule.

---

# 12. Focus and interaction states

Create robust global interaction foundations.

Links:

- clearly recognizable;
- accent may be used;
- hover/focus behavior should be deliberate;
- do not rely solely on color where context requires stronger affordance.

Focus:

- visible;
- high contrast;
- `:focus-visible` preferred;
- never globally removed.

Buttons/CTA fixture states should demonstrate:

- default;
- hover;
- focus-visible;
- disabled only if useful to demonstrate semantics.

Do not create a full button component library unless it is genuinely justified by the current task.

Foundation CSS or a tiny primitive is enough.

---

# 13. Reduced motion

Preserve Task 003's reduced-motion handling.

Do not add an animation system.

If any tiny transition is used for fixture interaction states:

- keep it subtle;
- make it non-essential;
- disable/reduce appropriately under `prefers-reduced-motion`.

---

# 14. Design Foundation Fixture

Create one **internal development-only design-foundation fixture page**.

Purpose:

to visually evaluate the system before homepage implementation.

This page should allow the owner to inspect the approved design direction in a browser.

Recommended route:

```text
/_design
```

or another clearly internal development route.

The route must NOT be treated as a public content page.

It should be excluded from indexing.

If Astro's static build makes environment-only route omission unnecessarily complex, it may exist in the build but must include `noindex` and be documented as an internal design fixture.

Do not add it to navigation or sitemap.

---

# 15. Fixture content

The fixture must demonstrate the system using **generic, non-factual placeholder content**.

Do not introduce unverified ARTIT claims.

It should show at minimum:

## Typography

- display/H1;
- H2;
- H3;
- lead;
- body;
- small text;
- metadata.

Include Hungarian text with accented characters, including:

```text
Árvíztűrő tükörfúrógép
Ő ő Ű ű
```

so glyph rendering is visually verifiable.

## Metadata

Show restrained examples such as:

```text
CASE / XX
STATUS        ACTIVE
LIFECYCLE     XX+ YEARS
```

These are illustrative placeholders only.

## Links

- inline link;
- standalone/action link.

## CTA/button

Show a restrained primary CTA treatment and, only if justified, a secondary treatment.

## Surfaces

Show:

- main background;
- surface background;
- border/divider;
- dark section.

## Containers

Demonstrate:

- reading;
- standard;
- wide.

## Spacing

Show enough section/component rhythm to evaluate vertical spacing.

Do not turn the fixture into a full design-system documentation application.

---

# 16. Screenshot compatibility fixture

This is important.

We do not yet have approved real screenshots in the repo.

Therefore do NOT invent a fake software screenshot.

Instead create neutral screenshot placeholders that simulate only **bounding boxes / image frames**, not fictional UI.

For example:

- a wide neutral rectangle;
- a legacy screenshot frame;
- a modern screenshot frame;

with simple labels such as:

```text
REAL SOFTWARE SCREENSHOT
LEGACY UI EVIDENCE
TARDIFY PRODUCT UI
```

The purpose is to evaluate:

- surrounding neutral background;
- border treatment;
- spacing;
- caption/metadata relationship.

Do not draw fake dashboards, charts, forms or application interfaces.

---

# 17. Dark section fixture

Include one dark-section sample.

It should demonstrate:

- dark background;
- dark text;
- muted text;
- metadata;
- link or CTA;
- accent behavior.

This is a foundation preview for sections such as future Longevity content.

Do not implement actual Longevity homepage copy.

---

# 18. Responsive verification

The fixture must be usable at:

- narrow mobile;
- tablet-ish width;
- desktop;
- wide desktop.

Check especially:

- display wrapping;
- H2 wrapping;
- container padding;
- metadata overflow;
- button/link behavior;
- dark section;
- screenshot placeholder width.

No horizontal scrolling should occur due to the design foundation.

---

# 19. Font loading and performance

Implement font loading with performance discipline.

Requirements:

- self-hosted;
- WOFF2;
- `font-display` chosen deliberately;
- no runtime third-party font request;
- avoid unnecessary files;
- avoid unnecessary preload.

If Work Sans is preloaded, explain why.

Do not preload Space Mono unless measurement/architecture gives a real reason.

Inspect the production output/network references enough to confirm that the implementation behaves as intended.

---

# 20. Accessibility checks

At minimum verify:

- body/background contrast;
- muted/background contrast;
- accent text/background contrast if used for links;
- CTA contrast;
- dark text/background contrast;
- dark muted/background contrast;
- focus indicator contrast;
- keyboard reachability of interactive fixture elements;
- no heading-order abuse;
- no horizontal overflow at mobile width.

Use WCAG 2.2 AA as minimum target.

Do not claim automated accessibility tooling proves full accessibility.

If you use an automated checker, report it as supplemental only.

---

# 21. CSS architecture

Keep the implementation understandable.

A reasonable structure may remain:

```text
src/styles/
  tokens.css
  global.css
```

and optionally add a small file if a genuine foundation concern deserves separation, such as typography or layout.

Do not split CSS into many tiny files without benefit.

Do not add:

- Tailwind;
- Sass unless there is a compelling reason;
- CSS-in-JS;
- utility frameworks;
- design-token build tooling.

Native CSS is preferred.

---

# 22. Components

Task 004B may create a very small number of foundational primitives if they materially improve reuse.

Possible examples:

- `Container.astro`
- small metadata primitive
- simple action/button primitive

But do not create components merely to populate the documented component directory.

The design fixture itself can use semantic HTML and classes where reuse is not yet proven.

Avoid premature component abstraction.

---

# 23. Homepage remains out of scope

Do NOT implement:

- Hero section;
- Problem section;
- Decision section;
- Work section;
- Longevity section;
- Tardify section;
- Process section;
- Senior/Who section;
- Final CTA section.

Do not reinterpret `DOC/04` into actual homepage UI yet.

The existing `/` route should remain a minimal placeholder unless a tiny update is needed to keep it compatible with the new foundation.

The design fixture, not `/`, is where Task 004B visual validation happens.

---

# 24. Navigation/footer remain out of scope

Do not implement the final:

- header;
- desktop navigation;
- mobile navigation;
- footer.

Those require their own composition decisions later.

---

# 25. Real brand/logo work remains out of scope

No ARTIT brand assets currently exist in the repo.

Do not:

- invent a logo;
- redesign the logo;
- generate a wordmark;
- create favicon art;
- derive fake brand history from the new green accent.

The green is a new website design-system direction, not a historical ARTIT brand claim.

---

# 26. Documentation updates

Update documentation to reflect the approved and implemented direction.

At minimum review/update:

- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
- `DOC/12-ASSET-STRATEGY.md`

Update `DOC/08-COMPONENT-LIBRARY.md` only if actual reusable primitives were introduced.

Update `README.md` only if developers need to know about the internal design fixture or font handling.

Document:

- approved font families;
- font delivery;
- final implemented token values;
- any optical calibration from 004A;
- container widths;
- typography scale;
- fixture route/status;
- accessibility caveats around decorative borders.

Do not rewrite unrelated strategy.

---

# 27. Quality checks

Run at minimum:

```text
npm run check
npm run build
```

Also run the dev server and inspect:

```text
/
404
/_design
```

or the selected fixture route.

Verify production output for:

- font references;
- no external Google Fonts/CDN request;
- no unexpected client JS;
- correct `noindex` on the design fixture;
- correct metadata behavior;
- no broken asset references.

Use browser/dev tooling or another reasonable method to inspect responsive behavior.

---

# 28. Dependency policy

Do not add dependencies unless genuinely required.

Expected outcome is likely:

- no new runtime dependencies;
- no client framework;
- no CSS framework;
- no icon library;
- no animation library.

If a font npm package is added, justify why that is better than locally vendored files.

Do not add a dependency merely for convenience.

---

# 29. Optical calibration protocol

You are explicitly allowed to calibrate the approved direction while implementing it.

Calibration must be conservative.

Allowed examples:

- slightly darken/lighten the green;
- adjust muted gray;
- adjust border visibility;
- move display max from e.g. 96px to 88px;
- choose Work Sans 600 instead of 700 for display;
- adjust line-height/tracking;
- refine section spacing.

Not allowed:

- replacing Work Sans;
- replacing Space Mono;
- replacing green with another hue family;
- changing the site into a different visual concept;
- introducing gradients/shadows/rounded-card styling contrary to the approved system.

For every calibration, ask:

> Does this improve the approved direction, or am I redesigning it?

If redesigning it, stop.

---

# 30. Definition of Done

Task 004B is complete only if:

- Work Sans is implemented and self-hosted;
- Space Mono is implemented and self-hosted;
- Hungarian glyphs render correctly;
- font licensing/provenance is preserved;
- no runtime external font request exists;
- semantic color tokens are implemented;
- semantic typography tokens are implemented;
- spacing scale is implemented;
- reading/standard/wide containers are implemented;
- border/radius foundation is implemented;
- focus/link interaction foundation is implemented;
- dark-section tokens/styles are demonstrated;
- internal design fixture exists;
- fixture is noindex and not in navigation;
- fixture contains no unverified ARTIT claims;
- screenshot compatibility is demonstrated without fake UI;
- mobile/tablet/desktop behavior was checked;
- WCAG AA target combinations were checked;
- production build succeeds;
- Astro check succeeds;
- no unnecessary client JS was introduced;
- documentation reflects the actual implementation;
- owner can visually review the design foundation before homepage implementation.

---

# Completion report

Return the result with exactly these sections:

## 1. Final status

Use one:

`COMPLETE`
`COMPLETE WITH OPEN DECISIONS`
`BLOCKED`

## 2. Approved direction implemented

Confirm:

- primary font;
- metadata font;
- palette;
- overall design character.

## 3. Font implementation

Report:

- font source/provenance;
- license;
- files added;
- variable/static status;
- weights actually used;
- `font-display`;
- preload decision;
- fallback stacks;
- Hungarian glyph verification;
- runtime external font requests.

## 4. Final design tokens

Report the actual implemented values for:

- colors;
- typography;
- spacing;
- containers;
- radius;
- any other foundational semantic tokens.

Clearly mark any value changed from the 004A proposal.

## 5. Optical calibrations

For each calibration:

- original proposal;
- implemented value;
- reason.

If none:

`None.`

## 6. Design fixture

Report:

- route;
- indexing status;
- what it demonstrates;
- whether it contains only generic placeholder content;
- screenshot-frame strategy;
- dark-section demonstration.

## 7. Components / CSS architecture

List:

- files created/changed;
- reusable primitives introduced;
- why each abstraction is justified.

## 8. Accessibility verification

Report checked contrast values/results for:

- body;
- muted;
- accent/link;
- CTA;
- dark text;
- dark muted;
- focus indicator.

Also report:

- keyboard behavior;
- heading semantics;
- mobile overflow status.

## 9. Responsive verification

Report the widths/viewports inspected and any adjustments made.

## 10. Performance / client JS

Report:

- font delivery behavior;
- font file count;
- preload behavior;
- external requests;
- generated client JS;
- any relevant production-build observations.

## 11. Dependency audit

List any dependencies added and why.

Explicitly state whether any:

- UI framework;
- CSS framework;
- icon library;
- animation library;
- font package

was added.

## 12. Documentation updates

List changed documentation files and why.

## 13. Validation performed

List exact commands/checks and results.

At minimum include:

- `npm run check`
- `npm run build`
- dev/runtime inspection.

## 14. Open decisions

Only list decisions that genuinely require owner review before the next implementation phase.

Do not list ordinary future work as an open decision.

## 15. Deviations

List deviations from this task and justification.

If none:

`None.`

## 16. Repository state

Report:

- git status;
- changed/untracked files;
- generated ignored files;
- whether changes were committed.

## 17. Visual review checkpoint

End with exactly one of:

`READY FOR OWNER VISUAL REVIEW`

or

`NOT READY FOR OWNER VISUAL REVIEW`

Do not start homepage implementation.

Do not start the next task.

Stop after the completion report.
