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

### Implementation status (Task 007) — homepage + SystemMap validation

Full homepage (`/`, all nine sections) verified in a real browser (Playwright/Chromium) at 390/768/1440/1920px: exactly one `<h1>`, sequential `<h2>` per section (no skipped levels), zero console errors, zero external font/network requests, zero horizontal overflow at every width (see the three bugs below for what it took to get there). No new color contrast pairs were introduced — every homepage surface (including the new dark Longevity section and tonal Final CTA) reuses `--color-*` tokens already verified in the Task 006 record above.

**`SystemMap` interaction/accessibility**, verified end-to-end for all seven Hero nodes (five inputs, two outputs) at both desktop and mobile breakpoints:

- hover-preview, click-commit, click-to-deselect, switching selection, and keyboard Tab+Enter activation all produce the correct internal state (verified via the component's `.is-focused`/`.is-receded`/`has-focus` classes and `aria-pressed`, not assumed from the click handler existing);
- every interactive button is pixel-aligned to its visual node (`getBoundingClientRect()` diffing, sub-0.02px, all 7 desktop + 4 mobile nodes) — the same discipline every A4.x prototype needed after repeatedly finding real drift bugs this way;
- `prefers-reduced-motion: reduce` confirmed to collapse the component's transition variables to ~1ms;
- the core's focus-triggered scale response was initially measured as unchanged (`matrix(1,0,0,1,0,0)`) — turned out to be a test-timing artifact (reading `getComputedStyle()` before the 220ms CSS transition had progressed), not a real bug; re-confirmed correct (`matrix(1.045,...)`) after waiting for the transition to settle.

**Three real bugs found during the mandatory responsive review and fixed** (all via `getBoundingClientRect()`/computed-style measurement, not by eye — per this task's own standing "the absence of a scrollbar doesn't prove there's no clipping" caution, extended here to "a computed value read at the wrong moment doesn't prove there's no effect either"):

1. **Pre-existing mobile-menu overflow, unrelated to this task's own changes.** `SiteHeader.astro`'s `.mobile-menu__list` (Task 005A) set `display: flex` unconditionally on a non-`<summary>` child of `<details>`, which defeats the browser's native content-hiding for the closed state — the list was being laid out (invisible but occupying real width) even while the disclosure was closed, contributing ~6px of horizontal overflow at 768px. Fixed by defaulting the list to `display: none` and scoping `flex` to `.mobile-menu[open] .mobile-menu__list` only; re-verified the menu still opens/closes correctly (7 links become visible on click) and that the overflow is gone.
2. **A new `SystemMap` mobile-label overflow, caused by an unverified prop choice.** The Hero's `mobileSourceIds` was set to `['excel', 'other']` — but "…ÉS MINDEN MÁS FORRÁS" measures ~169 user-units at the mobile diagram's font size, well past the ~119-unit box the fixed mobile geometry provides (verified safe only up to "KÜLÖN RENDSZER", ~113 units). Fixed by using `['excel', 'kulon']` instead — the exact pair every A4.3.x prototype's mobile diagram verified — and the constraint is now documented directly in the component's own prop comment so it isn't rediscovered the hard way again.
3. **A CSS Grid/Flexbox intrinsic-sizing overflow in the new `.process-steps` section**, requiring three sequential fixes before the real cause was found: (a) `min-width: 0` on the grid item (`.process-steps__step`) — necessary but not sufficient; (b) `min-width: 0` + `overflow-wrap: break-word` on the label itself — still didn't wrap, because (c) the step's own `align-items: flex-start` (needed for the mobile row layout) does not stretch cross-axis width, so the label sized itself to its unbreakable-word content ("Továbbfejlesztjük", 216px) regardless of (a) or (b). The actual fix was `align-items: stretch` on the desktop column layout. Beyond just fixing the overflow, the 4-column layout was also revised to step in at 1100px instead of 768px (2 columns in between), since even the *fixed*, contained version still forced an ugly mid-word break at exactly 768px — a real typographic-quality issue, not only a bug.

No accessibility regression was found in any of the three cases — all were pure layout/overflow bugs, not keyboard/contrast/semantic issues.

### Implementation status (Task 007C) — homepage visual-language integration

Full homepage re-verified in a real browser (Playwright/Chromium) at 390/768/950/1440/1920px after adding the Problem diagnostic-signal field, the Decision tonal band, the Work/Tardify evidence plates, the Longevity construction mark, and the Process connected-progression line: zero horizontal overflow at any width, zero console/page errors, unchanged heading sequence (one `<h1>`, sequential `<h2>`s, `<h3>`s only inside Decision's two path titles — unchanged from Task 007). `/design-foundation` and `/404` re-checked at all four widths (shared `foundation.css` changed) — no regression, since every change was additive/scoped to homepage-specific classes. Production build re-confirmed at exactly 1 inline `<script>`, 0 `.js` files — unchanged from Task 007/007B (no new interactivity was added; every new device — index labels, spine dots, port dots, the Longevity mark — is static CSS/SVG).

**One real bug found and fixed, by direct measurement (not assumption)**: this task's own brief specifically named the risk ("the previously observed `Továbbfejlesztjük` type of awkward break must not occur"), so the fourth Process step's label was measured directly rather than eyeballed. `getBoundingClientRect()` showed it still wrapping to two lines at every width from 1100–1920px (the step's 236px column at the ≥1100px 4-column breakpoint is narrower than the word's ~262px single-line width at `--text-h3` size — Task 007/DOC/11's own note that "the 1100px step gives each genuine room" turned out to be true only relative to 768px's ~150px columns, not true in an absolute sense for this specific word), and `overflow-wrap: break-word` was breaking it at an arbitrary character boundary ("Továbbfejlesztjü-k"). Fixed with `hyphens: auto` (+ `-webkit-hyphens`) on `.process-steps__label`, which breaks at a real syllable point instead ("Továbbfejleszt-jük") using the hyphenation dictionary `<html lang="hu">` already selects — re-verified via screenshot, not assumed from the property existing. `overflow-wrap: break-word` stays as the no-dictionary fallback. Re-confirmed the word does *not* wrap at all at 768px (2-column, ~340px columns) or in the 390px mobile row layout — the fix only had visible effect in the one range where it was needed.

**New contrast pairs, computed directly (WCAG relative-luminance formula) via `getComputedStyle()` on the real rendered page**, all reusing already-verified token pairs rather than new hex values:

| Pair | Ratio | Grade |
|---|---|---|
| `--color-accent` index text on `.panel-technical`'s `--color-surface` (Work `CASE/0X`) | 9.86:1 | AAA |
| `--color-accent` index text on `--color-accent-tint` (Problem dense-field `JEL/0X`) | 9.45:1 | AAA |
| `--color-accent` step number on `--color-bg` (Process, transparent container over page background) | 10.86:1 (Task 006 figure, same pair) | AAA |

The Longevity construction mark reuses `--color-accent-on-dark` (already verified ~7.9:1 against `--color-dark-bg` in Task 006) and carries no text, so no new pair applies. No color-only meaning was introduced anywhere: every new index/dot/mark is paired with adjacent text or is purely decorative (`aria-hidden`), matching this document's existing rule.

### Implementation status (Task 007D) — final polish pass

Re-verified in a real browser (Playwright/Chromium) at 390/768/950/1100/1150/1440/1920px after the Problem-spine continuity fix, the Process column-gap change and the Tardify plate refinement: zero horizontal overflow at every width, zero console/page errors, unchanged heading sequence. Production build re-confirmed at exactly 1 inline `<script>`, 0 `.js` files — this task added no interactivity (the Problem section's now-continuous spine, the Tardify registration mark, and the Process gap change are all static CSS/SVG).

**One real bug found and fixed, by direct measurement**: the brief asked to verify "Továbbfejlesztjük" at 1440/1920px specifically. Canvas `measureText()` against the real rendered `--text-h3`/font-weight showed the word's natural single-line width at 238.96px against a measured 236px column at the previous `--space-xl` (64px) column-gap — a ~3px shortfall, not the ~26px a hand-estimate first suggested. Reducing the 1100px+ breakpoint's column-gap to `--space-lg` (32px) widens each column to 260px (21px of real margin), re-verified by rendering the word, not by the arithmetic alone: single line from ~1150px through 1920px; only the narrow ~1100–1120px band still wraps (via the Task 007C `hyphens: auto` fallback), which the task's own brief explicitly accepts as an unavoidable intermediate-viewport exception. The 2-column (768–1099px) breakpoint's gap was left unchanged — that width was never the constrained case (re-confirmed the word still doesn't wrap there).

**New/changed non-text contrast, reusing already-verified token pairs**: the Problem section's spine/dots use `--color-accent` on `--color-bg`/`--color-accent-tint` — the same pairs verified in Task 007C's own table (9.45:1–10.86:1, all AAA). (This task's shared top-rule/junction-dot connector between the two desktop columns was itself removed in Task 007D.1, along with the Decision fork glyph — see that task's own accessibility notes below; both were purely decorative/`aria-hidden` while present, so their removal is not an accessibility regression, only less markup.) The Tardify registration mark uses `--color-accent` on `--color-bg` at reduced opacity (0.55) as a deliberately quiet, purely decorative (`aria-hidden`) construction-residue mark — not the sole carrier of any required information, so WCAG 2.2 SC 1.4.11 does not apply to it, consistent with `SystemMap`'s existing registration marks and `--color-border`'s documented "decorative only" caveat above.

### Implementation status (Task 007D.1) — connector/glyph removal

Re-verified in a real browser (Playwright/Chromium) at 390/768/950/1100/1150/1440/1920px after removing the Problem section's desktop connector and the Decision fork glyph: zero horizontal overflow at every width, zero console/page errors, unchanged heading sequence. Confirmed `.decision-fork` renders zero elements (fully removed, not merely hidden) and `.problem-signals`' computed `border-block-start` is `0px none` (the connector rule is gone, not just visually suppressed). Re-confirmed keyboard focus on the Tardify links (visible outline), `SystemMap` keyboard interaction (`aria-pressed` toggles correctly), and `prefers-reduced-motion` (still collapses `SystemMap`'s transition variables to 1ms) — none of this task's changes touched interactive elements or motion. Production build re-confirmed at 1 inline `<script>`, 0 `.js` files — this task only removed static SVG/CSS, adding nothing. No new accessibility concern was introduced; the removed devices were themselves decorative/`aria-hidden` (the fork) or non-text CSS borders (the connector), so their removal has no accessibility implication beyond less markup to maintain.

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
