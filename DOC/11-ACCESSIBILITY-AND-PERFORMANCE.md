# ARTIT.hu — Accessibility and Performance

## Principle

Accessibility and performance are product/design requirements.

They are not end-of-project audit items.

## Accessibility baseline

Target at minimum:

WCAG 2.2 AA where applicable.

Requirements:

- semantic HTML;
- logical heading structure;
- keyboard-accessible navigation;
- visible focus states;
- accessible mobile menu;
- accessible dropdown behavior;
- sufficient contrast;
- usable target sizes;
- reflow/zoom support;
- no information conveyed only by color;
- meaningful alt text;
- empty alt for decorative images;
- form labels and error states;
- reduced motion support.

### Implementation status (Task 004B)

Contrast verified (WCAG relative-luminance formula, computed directly, not estimated) for every real text usage in the implemented palette: body 15.97:1 (AAA), muted text 5.56:1 (AA), accent-as-link-text 6.96:1 (AA), white-on-accent CTA 7.58:1 (AAA), dark-section text 15.42:1 (AAA), dark-section muted 7.10:1 (AAA). Focus indicators use `--color-accent`, which clears the WCAG 2.2 SC 1.4.11 non-text 3:1 minimum by a wide margin (6.96:1). `:focus-visible` was never removed (still present in `global.css`, unchanged from Task 003). All interactive fixture elements are real `<a href>`/`<button>` elements — no custom interactive widgets, so native keyboard reachability holds without extra ARIA work. Verified with real-browser screenshots (Playwright/Chromium) at 360/768/1280/1680px — no horizontal overflow at any width, heading order in the fixture is sequential (h1 → h2 → h3, no skipped levels).

**Known caveat**: the decorative border color (`--color-border`) does not itself meet the 3:1 non-text contrast minimum against `--color-bg`/`--color-surface` (~1.3:1). This is acceptable for purely decorative dividers but means no future component may rely on that border alone to communicate a required boundary (e.g. an input's edges) — see `07-DESIGN-SYSTEM.md` for the full rule.

### Implementation status (Task 004C)

No color values changed in this task (only spacing and font-weight), so every contrast figure above still applies unchanged — re-confirmed by inspection, not recomputed. Re-verified with a programmatic overflow check (not just visual inspection) at 390/768/1440/1920px: `document.documentElement.scrollWidth` equals `clientWidth` at all four widths — zero horizontal overflow. `:focus-visible` and reduced-motion handling untouched.

## Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Nonessential motion should be removed or substantially reduced.

## Image accessibility

Screenshots:

Alt text should describe the business-relevant visible information when needed.

Do not write generic:

> Screenshot of application.

Decorative UI crops may use empty alt if the same information is already conveyed in nearby text.

## Performance principle

A senior software engineering site must not feel technically heavy or slow.

## JavaScript budget

Default:

minimal to zero client JS per page.

Hydrate only interactive components.

Avoid large animation frameworks unless a real explanatory need justifies them.

## Images

Requirements:

- responsive images;
- correct source sizing;
- no oversized source pushed far beyond usable detail;
- lazy loading below fold;
- modern formats where appropriate;
- explicit dimensions/layout stability.

## Fonts

- minimal families;
- minimal weights;
- subset where appropriate;
- avoid blocking font strategy;
- no unnecessary icon font.

### Implementation status (Task 004B)

Two families (Work Sans variable, Space Mono static Regular-only), self-hosted, each split into exactly the two glyph subsets Hungarian text needs (basic Latin + Latin Extended-A) — 4 files, ~118KB total. `font-display: swap` throughout, so text is never invisible while fonts load. No icon font was added.

## Third parties

Every third-party script requires justification.

Evaluate:

- privacy;
- performance;
- reliability;
- user value.

## Core Web Vitals

Treat current CWV metrics as implementation quality signals.

Do not optimize only for synthetic scores.

## QA

At relevant milestones verify:

- keyboard navigation;
- focus order;
- mobile reflow;
- 200% zoom;
- reduced motion;
- image loading;
- no obvious layout shifts;
- production performance.
