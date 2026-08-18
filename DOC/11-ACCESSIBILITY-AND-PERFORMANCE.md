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

### Implementation status (Task 006) — accent migration contrast re-verification

Color values *did* change in this task (the Task 005D-locked accent migrated from green to Ink / Deep Blue-Violet in production — see `07-DESIGN-SYSTEM.md`), so every accent-dependent figure was recalculated from scratch — by the WCAG relative-luminance formula, and cross-checked against `getComputedStyle()` on the actual rendered page in a real browser (Playwright/Chromium), not estimated:

| Pair | Ratio | Grade |
|---|---|---|
| Body text on bg | 15.97:1 | AAA (unchanged) |
| Muted text on bg | 5.56:1 | AA (unchanged) |
| Accent-as-link-text on bg | 10.86:1 | AAA |
| White on primary-accent CTA | 11.83:1 | AAA |
| Focus outline (accent) vs. bg | 10.86:1 | AAA |
| Focus outline (accent) vs. surface | 9.85:1 | AAA |
| Body text on new tonal-accent surface (`--color-accent-tint`) | 13.88:1 | AAA |
| Muted text on tonal-accent surface | 4.83:1 | AA |
| Accent text on tonal-accent surface | 9.44:1 | AAA |
| Dark-section text on dark bg | 15.42:1 | AAA (unchanged) |
| Dark-section muted text on dark bg | 7.10:1 | AAA (unchanged) |
| `--color-status-success` (new) on bg | 4.60:1 | AA |

**Two accessibility bugs found by this recalculation and fixed** (full technical detail in `07-DESIGN-SYSTEM.md`; summarized here for the accessibility record):

1. **Accent-colored text/borders/focus rings were effectively invisible inside `.section--dark`** — measured at ~1.47:1 against `--color-dark-bg`, failing WCAG 2.2 SC 1.4.11's 3:1 non-text minimum by a wide margin (and failing 4.5:1 text contrast even more badly). This affected any plain `<a>` inside a dark section, `.link-standalone`'s hover border, and — since `:focus-visible` was one global rule — **keyboard focus visibility for any focused element inside a dark section, sitewide**. The original green accent had the same defect (~2.30:1, also failing), so this was a latent, pre-existing gap that had never been caught, not a regression introduced by the migration. Fixed with a new `--color-accent-on-dark` token (the same hue, lightened) and three scoped overrides in `foundation.css`; re-verified at 7.91:1, and confirmed via `getComputedStyle()` that a keyboard-focused element inside `.section--dark` now actually renders the corrected outline color (not just that the CSS rule exists).
2. **The A4.3.x exploration's brighter demo status-green (`#22c55e`) fails non-text contrast on the locked canvas** — ~2.09:1 against `--color-bg`, ~1.90:1 against `--color-surface`, both under the 3:1 minimum for a small non-text indicator such as a status dot. No live production usage existed yet, so nothing user-facing was broken, but shipping this exact value for Task 007's first real status indicator would have shipped a known-failing color. Production's `--color-status-success` was set to a deeper, still-clearly-green value (`#15803D`, 4.60:1) instead — see `07-DESIGN-SYSTEM.md` for the reasoning and the constraint this leaves for Task 007 if a brighter tone is ever wanted back.

Reduced-motion, `:focus-visible` presence, and keyboard reachability were otherwise unaffected by this task (no interactive elements were added or removed; `/design-foundation` and `/` remain fully static — see `09-TECHNICAL-ARCHITECTURE.md`). Re-verified zero horizontal overflow at 390/768/1440/1920px on both `/design-foundation` and `/` after the shared-style changes, and zero console errors.

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
