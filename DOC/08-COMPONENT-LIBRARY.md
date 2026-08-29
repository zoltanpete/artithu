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

#### `CustomDevelopmentPage`

Purpose:

Shared, locale-parameterized renderer for the Custom Development pillar page — the same architectural pattern as `Homepage`, applied to a second, structurally different page.

**Implemented (Task 009)**: `src/components/custom-development/CustomDevelopmentPage.astro`. Props: `locale` (`Locale`, required) and `alternateLocalePath` (`string?`). Loads the `customDevPage/egyedi-fejlesztes` content entry (its own Content Collection — see `09-TECHNICAL-ARCHITECTURE.md`) and renders `BaseLayout` + `SiteHeader` + six page-specific sections. Route wrapper: `src/pages/egyedi-fejlesztes/index.astro` is `<CustomDevelopmentPage locale="hu" />`, mirroring `Homepage`'s wrapper exactly.

This is not a generalization of `Homepage` into a shared "page renderer" — the two components share a *pattern* (locale prop, self-loaded content, thin route wrapper), not markup or a base class. Each page's actual section markup remains its own, matching its own content shape. See `07-DESIGN-SYSTEM.md` "Homepage as reference implementation" — "reuse the grammar, not the layout" applies to components too.

Used on: `/egyedi-fejlesztes/` (Task 009; not yet `/en/`).

#### `OperatingFitField`

Purpose:

Page-specific Hero brand-face visual for `/egyedi-fejlesztes/` — a static "field" model (not a flow) showing the business's operation as a central reference point with satellite nodes for typical current-state elements, distinguishing fit from friction. See `07-DESIGN-SYSTEM.md` "Custom Development brand-face (Task 009A)" for the full selection rationale (3-concept exploration) and the locked principle it establishes.

**Implemented (Task 009A)**: `src/components/custom-development/OperatingFitField.astro`.

Inputs (props):

```text
id            string — wrapper element id
centerLabel   string — the central anchor's label
nodes         exactly four { id, label, friction: boolean } — geometry only verified at this count
legend        { friction: string, fit: string }
ariaLabel     string — required, full accessible description
```

Variants: none — narrow API, matching `SystemMap`'s own "keep APIs narrow" precedent.

Responsive behavior: separately composed desktop (radial field, viewBox 0 0 440 440) and mobile (top anchor + 2×2 node grid, viewBox 0 0 320 260) SVGs, toggled by CSS `display` at 900px — not one diagram scaled down, per the same responsive philosophy `SystemMap` established.

Accessibility notes: both SVGs carry `role="img"` and the same required `ariaLabel`. No interactive elements — reviewed explicitly and rejected (see DOC/07): nothing here is hidden until hovered, unlike `SystemMap`'s node focus, so interaction would add motion without adding information. Friction vs. fit is distinguished by line style (dashed vs. solid) and colour together, not colour alone.

Used on: `/egyedi-fejlesztes/` Hero (Task 009A).

Do:

- keep `nodes` at exactly four — the geometry (both desktop and mobile) is only verified for that count;
- keep labels short technical/categorical terms (matching `SystemMap`'s own label register), not sentences.

Don't:

- add interaction without a genuine, explicit information-gain justification (see DOC/07's reasoning for why this component doesn't have any);
- reuse this component's exact geometry for an unrelated page's visual — it's page-specific, not a generalized "BrandFace" abstraction (see DOC/07 "reuse the grammar, not the diagram").

**Fixed (Task 010, Part 0)**: the mobile composition's four connector lines originally shared a single origin point directly below the core, so their initial near-vertical travel passed through the `MŰKÖDÉS` label sitting right below it — a real collision on the owner's own device, not a hypothetical one. Fixed by giving the two left-side and two right-side connectors their own already-offset origin points on the core's circumference (`M_CORE_EXIT_LEFT`/`M_CORE_EXIT_RIGHT` in the component) instead of a shared center-bottom point, so every line is horizontally clear of the label's column before it reaches the label's row. Re-verified via De Casteljau curve evaluation (not just a visual glance) and a real-browser screenshot at 390px and 700px. Desktop geometry and the selected concept are unchanged.

#### `MunkainkPage`

Purpose:

Shared, locale-parameterized renderer for `/munkaink/`, the evidence hub — same route-wrapper pattern as `Homepage`/`CustomDevelopmentPage`.

**Implemented (Task 010)**: `src/components/munkaink/MunkainkPage.astro`. Props: `locale` (`Locale`, required), `alternateLocalePath` (`string?`). Loads the `munkainkPage/munkaink` content entry and renders `BaseLayout` + `SiteHeader` + four sections: Hero, an evidence-principle statement (tonal band), the two case entries (reusing the homepage's own `.work-teaser__list` evidence-record device — see `07-DESIGN-SYSTEM.md` "Munkáink evidence grammar"), and a closing CTA (tonal band).

**Updated (Task 010A)**: the Hero now carries a page-specific brand-face visual, `LivingSystemField` (below) — Task 010's original "no Hero visual" decision was reopened after owner review and superseded; see DOC/07 "Munkáink brand face (Task 010A)" for the full 5-concept exploration and rationale. The other three sections (evidence-principle, case entries, closing CTA) are unchanged.

Used on: `/munkaink/` (Task 010; not yet `/en/`).

#### `LivingSystemField`

Purpose:

Page-specific Hero brand-face visual for `/munkaink/` — a static "ambient field" model representing a system that persists inside ongoing business operation, distinct from `SystemMap` (a flow) and `OperatingFitField` (a directional field). See `07-DESIGN-SYSTEM.md` "Munkáink brand face (Task 010A)" for the full 5-concept, 2-round selection rationale.

**Implemented (Task 010A)**: `src/components/munkaink/LivingSystemField.astro`.

Inputs (props):

```text
id          string — wrapper element id
label       string — the central anchor's label
ariaLabel   string — required, full accessible description
```

Variants: none — narrow API, matching `SystemMap`/`OperatingFitField`'s own "keep APIs narrow" precedent.

Responsive behavior: separately composed desktop (18-mark ambient field, viewBox 0 0 260 260) and mobile (11-mark field, viewBox 0 0 220 220) SVGs, toggled by CSS `display` at 900px — not one diagram scaled down.

Accessibility notes: both SVGs carry `role="img"` and the same required `ariaLabel`. No interactive elements — reviewed explicitly and rejected for the same reason `OperatingFitField` has none: nothing here is hidden until interacted with. The ambient marks are deterministic (a fixed formula, not `Math.random()`), so the composition is stable across renders and reviewable/reproducible, not a different random scatter every build.

Used on: `/munkaink/` Hero (Task 010A).

**Polish (Task 011 Part 0)**: ambient-mark size/opacity increased ~15% on both desktop and mobile per owner review — see DOC/07's "Polish (Task 011 Part 0)" note for the exact before/after values. Same variation/irregularity, same core geometry, no new marks, no lines, no labels, no animation.

Do:

- keep the label a short technical/categorical term, matching `SystemMap`/`OperatingFitField`'s own label register.

Don't:

- add background rings or labeled satellite nodes to this component — that's specifically what would make it a variant of `OperatingFitField` instead of its own distinct device (see DOC/07);
- add ascending/ordered visual weight to the ambient marks — an earlier concept did exactly this and it read as an invented growth chart (see DOC/07's rejected Concept A).

#### `TardifyPage`

Purpose:

Shared, locale-parameterized renderer for `/tardify/` — same route-wrapper pattern as `Homepage`/`CustomDevelopmentPage`/`MunkainkPage`.

**Implemented (Task 011; Hero visual added Task 011A)**: `src/components/tardify/TardifyPage.astro`. Props: `locale` (`Locale`, required), `alternateLocalePath` (`string?`). Loads the `tardifyPage/tardify` content entry and renders `BaseLayout` + `SiteHeader` + five sections: Hero (product-destination CTA to `tardify.hu`, plus `TardifySpecimen` in the desktop right column at a `5fr/4fr` grid — Task 011A), "why ARTIT has its own product" (tonal band), "same standard" (reuses `.tardify-proof` unchanged — see `07-DESIGN-SYSTEM.md` "Tardify page direction"), relationship to custom development (one honest cross-link, no diagram), and a closing CTA (tonal band). **No product screenshot** — still no approved evidence asset exists, re-confirmed Task 011A; see DOC/07 and DOC/13.

Used on: `/tardify/` (Task 011/011A; not yet `/en/`).

#### `TardifySpecimen`

Purpose:

Page-specific Hero brand-face visual for `/tardify/` (Task 011A) — a "Product Specimen Plate": a bounded technical specification plate (identity band → rule → blueprint-texture band → rule → signature mark), not a system diagram. Selected from a 3-concept exploration over "Layered Product Surface" (rejected — read as stacked browser windows once rendered) and "Product Fragment / Evidence Window" (rejected — too sparse to solve the page's actual empty-Hero-territory problem, and its pointer line risked an annotation/flowchart reading). See `07-DESIGN-SYSTEM.md` "Tardify brand-face — Product Specimen Plate (Task 011A)" for the full exploration and DOC/09 for the API record.

**Implemented**: `src/components/tardify/TardifySpecimen.astro`. Props: `id` (`string`, required — used to scope internal `<clipPath>`/`<pattern>` ids), `ariaLabel` (`string`, required). Desktop (viewBox `0 0 410 460`, plate open on its right edge) and mobile (viewBox `0 0 300 240`, closed plate, fewer bands, no tick marks) are separately composed, not one scaled down — same responsive philosophy as `SystemMap`/`OperatingFitField`/`LivingSystemField`. The one visible word, "TARDIFY," is a hardcoded literal (the product's own proper noun), not a prop — no schema field models it. Static (no JS, no hover/focus state): the plate has no additional information to reveal on interaction.

**Relationship to `.tardify-proof`**: the corner registration-mark bracket reuses `.tardify-proof__mark`'s exact stroke color/width/opacity — the Hero specimen and the downstream `.tardify-proof` plate are members of the same product-specific grammar, not two unrelated devices. `.tardify-proof` itself is unchanged by this task.

Do:

- keep the plate's open-right-edge treatment fully inside its own viewBox (no CSS `overflow: visible`, no cross-viewBox clipping) — the "partial-edge" effect comes from omitting the fourth stroke of the boundary path, not from letting geometry escape its frame; this is what keeps it a zero-overflow-risk implementation at every width;
- keep the mobile composition a genuinely separate, simplified plate (closed, fewer bands), not the desktop viewBox scaled down.

Don't:

- add a count, date, version, metric, or feature label to the plate — the blueprint-texture band is deliberately unlabeled construction residue, not a data display;
- reuse this component's geometry as a template for a future page's brand face — it is Tardify-specific by design (Task 011A §22), not a generalized `ProductSpecimen`/`BrandFace` component.

Used on: `/tardify/` Hero (Task 011A; not yet `/en/`).

**Polish (Task 012 Part 0)**: owner-approved ~15–20% perceived-intensity uplift, internal contrast only — `.specimen__grid-line`/`.specimen__tick`/`.specimen__signature` opacity increased (0.35→0.42, 0.5→0.58, 0.7→0.82). No geometry, viewBox, composition, or prop-API change; `.specimen__reg-mark` untouched (stays identical to `.tardify-proof__mark`). Verified in a real browser at 390/900/1440px.

#### `RolunkPage`

Purpose:

Shared, locale-parameterized renderer for `/rolunk/` — same route-wrapper pattern as `Homepage`/`CustomDevelopmentPage`/`MunkainkPage`/`TardifyPage`.

**Implemented (Task 012)**: `src/components/rolunk/RolunkPage.astro`. Props: `locale` (`Locale`, required), `alternateLocalePath` (`string?`). Loads the `rolunkPage/rolunk` content entry and renders `BaseLayout` + `SiteHeader` + five sections: Hero (no CTA; a two-tier `<h1>` — plain clause then an indented, accent-colored clause — is the page's entire focal device, see `07-DESIGN-SYSTEM.md` "Rólunk art direction"), "what direct collaboration means in practice" (with two cross-links, to `/egyedi-fejlesztes/` and `/munkaink/`), "operation before technology" (tonal band, reuses the homepage Decision section's paragraph verbatim), "continuity/responsibility" (reuses the homepage Longevity headline/statement verbatim, plus a cross-link to `/tardify/`), and a closing CTA (tonal band). **No brand-face SVG component and no person imagery** — both explicit, documented decisions; see DOC/07 and DOC/13.

Used on: `/rolunk/` (Task 012; not yet `/en/`).

**Hero regrid (Task 012A)**: owner review found the Task 012 Hero's stacked-and-indented accent clause left the desktop right territory functionless empty space. `.rolunk-hero__heading` (the `<h1>`) becomes a two-column CSS grid at 900px+, with the accent-clause `<span>` as the second column's content at a larger fluid scale — see `07-DESIGN-SYSTEM.md` "Rólunk Hero regrid (Task 012A)" for the 3-concept exploration that selected this over two rejected diagram concepts. Kept in `RolunkPage.astro`/`foundation.css`, not extracted into a component (Task 012A §17's own preference for the winning "keep it in the page" outcome), since there's no reusable device here — just a grid placement of content that was already there.

#### `KapcsolatPage`

Purpose:

Shared, locale-parameterized renderer for `/kapcsolat/` — same route-wrapper pattern as `Homepage`/`CustomDevelopmentPage`/`MunkainkPage`/`TardifyPage`/`RolunkPage`.

**Implemented (Task 013; post-Hero visual pass Task 013A)**: `src/components/kapcsolat/KapcsolatPage.astro`. Props: `locale` (`Locale`, required), `alternateLocalePath` (`string?`). Loads the `kapcsolatPage/kapcsolat` content entry and renders `BaseLayout` + `SiteHeader` + four sections: Hero (no CTA button; the page's own four "what's useful to tell us" prompts staggered in the desktop right column — "Conversation Field", see `07-DESIGN-SYSTEM.md` "Kapcsolat art direction"; **locked as of Task 013A**), "what you don't need yet" (tonal band), the Conversation Workspace (the same four prompts rendered fully as a real indexed list in the left column, the actual contact form in the right column — one composition, see "Kapcsolat post-Hero visual pass" below), and a quiet close with no repeated CTA. `c.prompts` is authored once and rendered in exactly these two places (Hero teaser + Workspace's full list), never duplicated in YAML.

**The form**: minimal field set — name, email, message only (Task 013 §6's own instruction against auto-adding company/phone/budget/project-type). Native `required`/`type="email"` provide accessible baseline validation before any script runs. A small inline `<script>` (via `define:vars`, no dependency) progressively enhances the native POST into a fetch-based submission with idle/submitting/success/error states, communicated by text content (never color alone) and confirmed via `aria-live="polite"` plus an explicit focus move to the status message on both outcomes. Without JS the form still natively POSTs to Formspree and works (Formspree renders its own confirmation page) — the script is an enhancement, not a requirement. Honeypot field (`_gotcha`, Formspree's own documented convention) for basic spam protection, `tabindex="-1"`/`aria-hidden="true"` so it's invisible to keyboard/AT users specifically, not just visually hidden. The message field carries more visual weight than name/email (`.contact-form__field--message` — Task 013A, larger label, taller textarea, extra top margin), since describing the current situation is the page's real question.

**A real bug found and fixed during Task 013's own verification** (not a pre-existing defect): the status-message `<p>` was originally a child of the `<form>` element; since a successful submission hides the entire form (`formEl.hidden = true`), the status message was being hidden along with it — the success confirmation would never actually become visible. Caught by an automated success/error-state test before shipping, not assumed to work from the markup alone. Fixed by moving the status paragraph to be a sibling of the form, given its own `id`, and selected by that id rather than via `formEl.querySelector(...)`. Task 013A restructured the surrounding markup further (merging two sections into one workspace) but preserved this fix and re-verified the success/error states still work correctly after the restructuring, not assumed.

Used on: `/kapcsolat/` (Task 013/013A; not yet `/en/`).

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

## Componentization audit (Task 008)

Performed as part of the Task 008 homepage visual lock — a check on whether any homepage-specific pattern now has enough real reuse pressure to justify extraction, not a refactor pass.

**Already legitimate shared primitives**: `Container`, `SiteHeader`, `SystemMap`, `Homepage` (Astro components); `.panel-technical`, `.surface--tonal`, `.technical-label`, `.meta`, `.status-dot`, `.btn`/`.btn-primary`/`.btn-secondary`, `.link-standalone` (CSS primitives, all already in production use in more than one place).

**Still homepage-specific** (all homepage-section CSS in `foundation.css`, not components): `.hero-map*`, `.problem-signals*`, `.decision-paths*`, `.work-teaser*`, `.longevity__mark`, `.tardify-proof*`, `.process-steps*`.

**Conclusion: no extraction warranted.** Two candidate "families" exist — an index+device pattern (Problem's `JEL/0X` spine/dots, Work's `CASE/0X` in a `.panel-technical` box) and a specification-plate pattern (Tardify's top-rule + corner-mark) — but each has exactly one or two real instances, each with genuinely different treatment (Problem's spine/dot device vs. Work's bordered plate are deliberately *not* the same component, per "family resemblance, not repetition" — see `07-DESIGN-SYSTEM.md`). Forcing a shared component now would mean either losing those deliberate differences or building a configuration surface to preserve them — abstracting CSS prematurely, not improving consistency, accessibility or maintainability. This follows the same reasoning Task 006 already used to defer the `SystemMap` component itself until Task 007 supplied a second real instance to generalize from (see "Production architecture decision (Task 006)" above) — the project's standing default is no new component until genuine reuse pressure exists, not speculative generalization.

## Componentization audit (Task 009)

Task 009 built `/egyedi-fejlesztes/`, the first real test of whether any "still homepage-specific" pattern above actually gets reused. Result: **`.decision-paths`/`.decision-paths__path` graduates to a genuinely shared primitive** — it now backs two pages' two-path editorial splits (`/`'s Decision section, `/egyedi-fejlesztes/`'s "Two directions" section) for the same underlying semantic relationship. No rename or extraction into a component was needed: the class names were already generic, and CSS reuse across pages needs nothing beyond "the selector already exists" — this is exactly the "improves consistency without abstracting prematurely" case the Task 008 audit above was watching for, not a reason to promote it further into an Astro component. `.hero-map*`, `.problem-signals*`, `.work-teaser*`, `.longevity__mark`, `.tardify-proof*`, `.process-steps*` remain homepage-specific — none was reused this task. Two new page-specific patterns were added for `/egyedi-fejlesztes/` only (`.justification-signals*`, `.decision-paths__evidence*`) — deliberately not generalized from `.problem-signals`/`.work-teaser__index` respectively, since the content shapes differ (see `07-DESIGN-SYSTEM.md`'s "First reuse test" note). No new component beyond `CustomDevelopmentPage` itself (the route-level renderer, not a reusable content-section component) was created.

## Componentization audit (Task 009A)

Task 009A's brief explicitly warned against creating a generic `BrandFace`/`TechnicalDiagram`/`SystemDiagram` abstraction during exploration, and against generalizing prematurely. `OperatingFitField` was built as a genuinely page-specific component (its own file, its own geometry, its own prop shape) rather than a configurable "diagram" primitive — it has exactly one real usage. If a future page independently needs a similar field/fit visual model, that would be the moment to look for a shared abstraction (matching every other extraction decision in this document); inventing one now, from a single instance, would be exactly the premature generalization this project's dependency rule and `SystemMap`'s own history (deferred until a second real need existed) both warn against.

## Componentization audit (Task 010)

Task 010's brief explicitly named `EvidenceCard`/`CaseCard` as abstractions not to create solely because they sound reusable. No such component was created: `.work-teaser__list`/`__index`/`__title` (CSS, already existing) was reused directly for `/munkaink/`'s case entries — this is the second real usage of that exact device (after the homepage's own Work teaser), which is precisely the kind of genuine reuse evidence this document's own standing rule looks for, and it needed nothing beyond "the selector already exists" — no new component, no new abstraction, just one small addition (`.work-teaser__direction`) for the one genuinely new element this page's cases need that the homepage's briefer teaser doesn't. `MunkainkPage` itself is the only new component, and it's a route-level renderer (page-specific by construction), not a reusable content-section component.

## Componentization audit (Task 010A)

Task 010A's brief explicitly warned against generic `BrandFace`/`TechnicalDiagram`/`ArtitVisual` abstractions "unless genuinely justified by repeated real structure." Three page-specific Hero-visual components now exist — `SystemMap`, `OperatingFitField`, `LivingSystemField` — which is real repetition of the *pattern* (a page-specific static SVG brand-face component with a narrow prop API), but not of any *structure* worth abstracting: each has a genuinely different geometry, prop shape, and semantic model (flow / directional field / ambient field), by deliberate design — see DOC/07's "Distinction from `SystemMap` and `OperatingFitField`" note. A shared component would either have to be a lowest-common-denominator wrapper (an empty `<svg>` shell with no real behavior) or a configuration surface flexible enough to describe three unrelated diagrams — the same "generic diagram schema" antipattern this project rejected for `SystemMap` itself in Task 006. No abstraction was created. `LivingSystemField` is the only new component this task added.

## Componentization audit (Task 011)

Task 011's brief explicitly warned against generic `ProductHero`/`BrandFace`/`ProductEvidence`/`VisualModel` abstractions "unless real reuse now justifies them," and explicitly against refactoring `SystemMap`/`OperatingFitField`/`LivingSystemField` "just because a fourth page exists." Neither happened: `/tardify/` needed no fourth brand-face component at all (see DOC/07's "Tardify page direction" — the explicit no-new-diagram decision), and `.tardify-proof` was reused as existing CSS, not refactored into a component. `TardifyPage` is the only new component, and it's a route-level renderer, page-specific by construction, same as the other three.

## Componentization audit (Task 011A)

Task 011A's brief explicitly named the acceptable direction as a Tardify-specific component (e.g. `TardifySpecimen`) and explicitly forbade `BrandFace`/`VisualModel`/`TechnicalDiagram`, and forbade refactoring `SystemMap`/`OperatingFitField`/`LivingSystemField` into a shared abstraction "during this task." Both were honored: `TardifySpecimen` is page-specific by name and by construction (its own file, its own geometry, its own two-prop API), and none of the other three brand-face components was touched. Four page-specific Hero-visual components now exist, each a genuinely different geometric family (flow / directional field / ambient field / bounded plate) — still not a case for a shared abstraction, for the same reason recorded in the Task 010A audit above: a shared wrapper would have to be either an empty `<svg>` shell or a configuration surface flexible enough to describe four unrelated devices, the "generic diagram schema" this project has rejected since `SystemMap`'s own Task 006 history. `TardifySpecimen` is the only new component this task added; `TardifyPage` was edited in place (Hero markup), not replaced.

## Componentization audit (Task 012)

Task 012's brief explicitly forbade generic `BrandFace`/`HeroVisual`/`TechnicalDiagram`/`Artifact`/generic-About-card abstractions "merely because multiple pages have Hero visuals," while explicitly allowing a page-specific editorial/visual component "if the winning concept warrants it." The winning concept (Concept C, typography-led) didn't warrant one at all — no SVG, no geometry, no prop-bearing visual model, just two content-authored H1 clauses styled differently in `foundation.css`. `RolunkPage` is the only new component this task added, and it's a route-level renderer, page-specific by construction, same as the other four. The four existing brand-face components (`SystemMap`/`OperatingFitField`/`LivingSystemField`/`TardifySpecimen`) were not touched beyond `TardifySpecimen`'s own scoped Part 0 polish (a value change, not a structural one).

## Componentization audit (Task 012A)

Task 012A's brief explicitly permitted a page-specific component such as `RolunkCollaborationArtifact` if a diagram concept (A or C) won, and explicitly preferred keeping the fix inside `RolunkPage.astro` if the editorial concept (B) won instead. B won, so no new component was created — the two rejected diagram concepts never reached the point of needing one. `RolunkPage.astro`'s Hero markup and `foundation.css`'s `.rolunk-hero__*` rules were edited in place, not replaced. No other component was touched.

## Componentization audit (Task 013)

Task 013's brief explicitly forbade prematurely creating generic `BrandFace`/`ContactHero`/`TechnicalDiagram`/`VisualModel`/`ContactCard`/`FormSection` components, while allowing a page-specific component "if genuinely needed" and preferring the route-level renderer if a typography/CSS-only concept won. The winning Hero concept (Conversation Field) is real content (`c.prompts`) given a CSS-only staggered arrangement — no SVG, no geometry, nothing that isn't already plain HTML list markup — so it stayed in `KapcsolatPage.astro`/`foundation.css`, same as `/rolunk/`'s own Concept B outcome. `KapcsolatPage` is the only new component. The contact form itself was also kept inline rather than extracted into a `ContactForm`/`FormSection` component: it has exactly one real usage, and extracting a single-use component before a second real need exists would be the same premature generalization this project's dependency rule has rejected consistently since `SystemMap`'s own Task 006 history. No existing brand-face component was touched.

## Componentization audit (Task 013A)

Task 013A's brief explicitly forbade generic `Workspace`/`TechnicalForm`/`BrandForm`/`ConversationSurface`/`FormShell`/`BrandFace` components "unless a second genuine reuse case exists," while allowing a page-specific `ContactWorkspace.astro` if the winning composition became unwieldy inline. It didn't: the merged prompts+form workspace is markup reorganization plus new CSS grid rules (`.kapcsolat-workspace*`), no new geometry, no new interactive behavior, nothing that strains `KapcsolatPage.astro`'s existing size or readability. It stayed inline. No new component was created this task; `KapcsolatPage.astro` was restructured in place, and `foundation.css`'s dead `.kapcsolat-prompt-grid*` rules (from the now-removed standalone section) were deleted rather than left as unreferenced code.

## Componentization audit (Task 016)

Two new route-level components, `CaseStudy01Page.astro`/`CaseStudy02Page.astro` (`src/components/case-studies/`) — not the speculative `CaseStudyTeaser`/`ScreenshotFrame`/`Timeline` names sketched under "Case studies / evidence" above. Those were written before any real case content or screenshot existed and don't match what was actually needed: `CaseStudyTeaser` was never built as a separate component because both existing teaser usages (`Homepage.astro`'s Work section, `MunkainkPage.astro`'s case list) already had their own working `.work-teaser__*` markup from Tasks 007/010 — Task 016 only added an optional link to each, not a new component. `ScreenshotFrame` and `Timeline` were not built either: screenshot framing turned out to need no component at all, only three shared CSS classes (`.case-frame` + the two padding/plate variants explored and rejected — see `07-DESIGN-SYSTEM.md`'s "Case-study art direction (Task 016)"), since every screenshot in both cases is presented identically (`<figure class="case-frame"><Image .../></figure>`); no real progression exists that would justify a `Timeline` component (`06-CASE-STUDY-ARCHITECTURE.md`'s longevity/long-term sections are prose plus a date, not a multi-point sequence).

`CaseStudy01Page`/`CaseStudy02Page` were kept as two separate components rather than one generic case-study renderer, following the same "narrow shape per genuine difference" rule applied to every page-type collection in `09-TECHNICAL-ARCHITECTURE.md` — the two cases' real section sets differ (CS01 has no "integrations"/"business result" content), so a shared template would force padding or flattening. Both import identically from `foundation.css`'s new `.case-*` rules and `astro:assets`' `<Image>`; nothing else is duplicated between them beyond the section-selection JSX itself, which is inherently different per case.

## Possible later components

Only introduce when implementation demonstrates real reuse. Updated (Task 008) to match what actually shipped — Decision is now locked to have **no** diagram (see `07-DESIGN-SYSTEM.md` "Homepage Visual Lock"), so `DecisionDiagram` is removed from this list rather than left as a stale future candidate:

- `ProblemQuotes` / `DiagnosticSignalField` — only if a second page needs the same `JEL/0X`-style dense/open indexed-signal treatment; the current Problem CSS is homepage-specific until then
- `EvidencePlate` — only if a second page needs the Work `CASE/0X` treatment or the Tardify specification-plate treatment; currently one real instance each
- `TardifyFeature`
- `PersonProfile`
- `ContactForm`

## Component API rule

Prefer simple props and slots.

Do not encode editorial copy deep inside generic components unless the content is truly global.
