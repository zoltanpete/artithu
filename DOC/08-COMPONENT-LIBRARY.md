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

**Updated (Task 007B)**: all copy now comes from the `nav`/`main` content entry (`src/content/nav/content.yaml`) instead of being hardcoded — see `09-TECHNICAL-ARCHITECTURE.md` "Localization". New props: `locale` (`Locale`, default `'hu'`) and `alternateLocalePath` (`string?`). When `alternateLocalePath` is provided, a small semantic language-switch link (`.site-header__lang`) renders in both the desktop header and mobile menu — real `<a>`, no client-side state, no flags. `index.astro` does not currently pass it, since `/en/` doesn't exist yet.

#### `Homepage`

Purpose:

Shared, locale-parameterized renderer for the full homepage — one implementation for every locale, per Task 007B's content-architecture requirement (see `09-TECHNICAL-ARCHITECTURE.md` "Localization").

**Implemented (Task 007B)**: `src/components/homepage/Homepage.astro`. Props: `locale` (`Locale`, required) and `alternateLocalePath` (`string?`, forwarded to `SiteHeader`). Loads the `pages/home` content entry itself via `getEntry()`, resolves every field through `localize()`/`localizeGated()`, and renders `BaseLayout` + `SiteHeader` + all nine homepage sections + the Hero `SystemMap` instance. Route files are thin wrappers: `src/pages/index.astro` is `<Homepage locale="hu" />`. No second copy of the markup or the System Map exists for other locales — a future `src/pages/en/index.astro` would be `<Homepage locale="en" />` plus its `alternateLocalePath`.

Used on: `/` (Task 007B; not yet `/en/` — see `09-TECHNICAL-ARCHITECTURE.md`).

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

### Data visualization

#### `SystemMap`

**Implemented (Task 007)**: `src/components/system-map/SystemMap.astro`.

Purpose:

Production implementation of the Task 005D-locked System Map brand-asset grammar (heterogeneous inputs → transformation core → structured outputs). Visual/interaction reference: the approved A4.3.3 prototype — geometry re-derived as a parameterized component, not copied.

Inputs (props):

```text
id              string — DOM id prefix / interaction-script scope
sources[]       { id, label, icon, route? } — icon ∈ table|mail|system|manual|api|dots;
                route ∈ primary|secondary(default)|exception
coreLabel       string
outputs         exactly two { id, label, icon } — icon ∈ check|document
mobileSourceIds [string, string]? — which two `sources` the separately-composed
                mobile diagram shows; defaults to the first two. Must be short
                labels — see the "Don't" below.
caption/captionSub  string? — the legend/signature zone's mono captions
legend          boolean, default true
ariaLabel       string — required, full accessible description of the diagram
locale          Locale, default 'hu' (Task 007B) — see below
```

Variants: none beyond the props above — no visual variant system, per this document's "keep APIs narrow" rule.

Responsive behavior: a genuinely separately-composed mobile diagram (its own coordinate system, its own reduced two-source set), not the desktop SVG scaled down — matches the locked responsive philosophy. Desktop/mobile SVGs both render in the DOM; CSS `display` (media-query gated) toggles which is visible, avoiding any client-side layout branching.

Accessibility notes: every interactive node is a real `<button>` overlay (not raw interactive SVG), percentage-positioned from the exact same geometry the visual node uses (verified sub-0.02px alignment, not assumed from the formula). `aria-pressed` reflects committed selection; keyboard Tab+Enter fully parallels mouse/hover. Both SVGs carry `role="img"` and the same required `ariaLabel`. Interaction state (`.is-focused`/`.is-receded`/`.has-focus`, applied via `classList`, not inline styles) never relies on color alone — opacity, stroke-width and position all move together. `prefers-reduced-motion: reduce` collapses both transition variables to ~1ms.

Used on: `/` (Hero, Task 007).

**Updated (Task 007B)**: the component was already language-agnostic by design (every visible label arrives via props), with one exception: each interactive node button's accessible name was generated internally as `` `${label} kiemelése}` `` — hardcoded Hungarian. This is now driven by the new `locale` prop through a small internal `{ hu, en }` lookup table (`NODE_HIGHLIGHT_LABEL`), the one deliberate exception to "no internal locale dictionary" for this component, documented in its own prop JSDoc. No other change — geometry, interaction state machine and CSS are all unchanged and remain locale-independent.

Do:

- keep `sources`/`outputs` narrow and specific to the page's real content — the grammar is locked, the exact vocabulary is not (see `07-DESIGN-SYSTEM.md`);
- pick short `mobileSourceIds` labels — the fixed mobile box width gives ~119 user-units of room, verified safe up to "KÜLÖN RENDSZER" (~113 units).

Don't:

- pass a `mobileSourceIds` label longer than that without re-verifying it fits — a real overflow bug at 768px was caused by exactly this (the quiet "…ÉS MINDEN MÁS FORRÁS" source, ~169 units, picked for mobile without checking) and is now documented in the component's own prop comment;
- expect more than two `outputs` to lay out correctly — the geometry assumes exactly two (one above, one below the core's vertical centre);
- assume the six-source desktop geometry is pixel-verified for other source counts — it generalizes by formula but has only been checked for six.

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
