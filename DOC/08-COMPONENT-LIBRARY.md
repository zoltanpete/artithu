# ARTIT.hu — Component Library

## Component philosophy

Create reusable components only for repeated visual or semantic patterns.

Do not build a framework for its own sake.

Not every content block is a component.

Not every component is a card.

## Documentation template

For each meaningful component document:

```text
Component
Purpose
Variants
Inputs
Responsive behavior
Accessibility notes
Used on
Do
Don't
```

## Initial expected components

### Layout

#### `SiteHeader`

Purpose:

Primary navigation and CTA.

Requirements:

- desktop + mobile behavior;
- accessible menu controls;
- visible focus;
- optional subtle sticky/compact state.

**Implemented (Task 005A)**: `src/components/navigation/SiteHeader.astro`. Desktop (≥900px): logo, flat nav list with one native `<details>`/`<summary>` dropdown for "Egyedi fejlesztés" (Áttekintés/Üzleti alkalmazások/Rendszerintegráció), primary CTA button. Below 900px: a single `<details class="mobile-menu">` disclosure with all 7 links flattened. Both use native HTML disclosure semantics — no client JS, no hover-only interaction (click/keyboard-activated), correct built-in keyboard/focus behavior. Not sticky — no compact/scroll state implemented, no demonstrated need yet. Currently used on the homepage only, not hoisted into `BaseLayout.astro`, so it does not affect `/404` or the internal `/design-foundation` fixture — see `09-TECHNICAL-ARCHITECTURE.md` for the reasoning.

#### `SiteFooter`

Purpose:

Site navigation, organization/contact/legal links.

Content TBD.

#### `Container`

Variants:

- reading;
- standard;
- wide.

Avoid excessive nested containers.

**Implemented (Task 004B)**: `src/components/layout/Container.astro`. Props: `width` (`'reading' | 'standard' | 'wide'`, default `'standard'`), `as` (tag name, default `'div'`). Renders `<Tag class="container container--{width}">`; the actual widths live in `foundation.css` as semantic tokens (`--content-reading/standard/wide`), not hardcoded in the component.

#### `Section`

Provides semantic section spacing/layout primitives without forcing a visual card.

Foundation stage (Task 004B) uses a plain `.section` CSS class (`padding-block: var(--space-section)`) rather than a component — no prop-driven variation was needed yet. Promote to a component if real section composition later demonstrates a need.

### Navigation / actions

#### `Button`

Likely variants:

- primary;
- secondary if genuinely needed.

Foundation stage (Task 004B) uses CSS classes (`.btn`, `.btn-primary`, `.btn-secondary`) applied directly to real `<button>`/`<a>` elements rather than an Astro component — no reusable prop surface was justified yet (no shared icon/loading-state logic exists). Promote to a component if real usage demonstrates a need.

#### `TextLink`

Arrow/reveal interaction permitted.

Foundation stage (Task 004B): `.link-standalone` CSS class, same reasoning as `Button` above.

#### `Breadcrumbs`

Accessible hierarchy.

Structured data integration should not be tightly coupled to presentation.

### Typography / metadata

#### `Eyebrow`

Small section/context label.

May use sans or restrained metadata treatment depending on final tokens.

#### `EngineeringMeta`

Purpose:

Display verified system/project metadata.

Example:

```text
STATUS        ACTIVE
LIFECYCLE     XX+ YEARS
```

Never use fake decorative values.

Foundation stage (Task 004B): `.meta` CSS class (Space Mono, small, uppercase, wide tracking) demonstrates the treatment in `design-foundation.astro` using illustrative placeholder values only (`STATUS ACTIVE`, `LIFECYCLE XX+ ÉV`). Promote to a component once real case-study metadata exists to drive its props.

**Related primitives (Task 006)**: `.technical-label` (a quieter, lower-opacity mono variant for background-layer "engineering residue" annotation — distinct from `.meta`'s normal-contrast metadata use) and `.panel-technical` (bordered specification-plate surface) were added to `foundation.css`, extracted from the Task 005C System Map exploration's legend/annotation treatment. Both are CSS classes, not components, for the same "no real reuse pressure yet" reason as `Button`/`TextLink` below. `.status-dot` / `.status-dot--success` (always paired with a text label, never color-only) demonstrates the new semantic-status color role. See `07-DESIGN-SYSTEM.md` → "Construction / blueprint layer" and "Colour language" for the design rationale.

#### `ProofStat`

Purpose:

Large factual proof such as lifecycle.

Avoid stat-card styling by default.

### Case studies / evidence

#### `CaseStudyTeaser`

Editorial project teaser.

Inputs likely include:

- title;
- summary;
- metadata;
- image;
- href;
- layout direction.

#### `ScreenshotFrame`

Purpose:

Present real product UI as evidence.

Variants may include:

- modern;
- legacy;
- minimal browser context if required.

Do not use device mockups by default.

#### `Timeline`

Purpose:

Long-term project evolution.

Must work vertically on narrow screens.

All dates must be verified.

### Process

#### `ProcessSteps`

Purpose:

Display:

1. Megértjük
2. Megtervezzük
3. Megépítjük
4. Továbbfejlesztjük

Avoid four floating SaaS cards unless design exploration proves otherwise.

### Conversion

#### `FinalCTA`

Reusable final contact section.

## Possible later components

Only introduce when implementation demonstrates real reuse:

- `ProblemQuotes`
- `DecisionDiagram`
- `TardifyFeature`
- `PersonProfile`
- `ContactForm`

## Component API rule

Prefer simple props and slots.

Do not encode editorial copy deep inside generic components unless the content is truly global.
