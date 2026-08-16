# ARTIT.hu — Design System Direction

## Internal concept

> Software built to last.

Not necessarily a public tagline.

## Approved direction (Task 004A / 004B)

The direction below is no longer only a proposal — it is approved and implemented in `src/styles/tokens.css`, `src/styles/fonts.css`, `src/styles/foundation.css`:

> Work Sans (primary sans) + Space Mono (restrained metadata mono) + Restrained Industrial Neutral palette.

See "Typography", "Monospace metadata" and "Color" below for the specific implemented values, and `DOC/09-TECHNICAL-ARCHITECTURE.md` for font delivery/provenance.

## Character

- restrained;
- editorial;
- engineering.

The site should feel like an experienced software engineering studio, not a generic agency or AI startup.

## Core visual principles

- typography is the primary visual system;
- rigorous grid;
- generous whitespace;
- real software interfaces as evidence;
- subtle engineering metadata;
- almost no decorative UI;
- borders and spacing over shadows;
- minimal card usage.

## Layout

Desktop base:

12-column grid with controlled asymmetry.

Content widths:

- `reading`
- `standard`
- `wide`

Reading measure:

approximately 60–75ch.

Do not force every section into the same centered container.

## Spacing

Desktop section spacing direction:

approximately 120–180px, implemented fluidly.

Not every section receives identical spacing.

Whitespace creates hierarchy and rhythm.

### Implemented (Task 004C)

Task 004B's single `--space-section` (clamp 64–128px) read as too generous for ordinary sections once seen in a real browser at desktop widths. Calibrated into two semantic roles:

```text
--space-section       clamp(4rem, 3rem + 4vw, 6rem)   → 64–96px   (ordinary content sections)
--space-section-lg    clamp(6rem, 5rem + 4vw, 8rem)   → 96–128px  (major/editorial sections, e.g. Longevity)
```

`.section` uses `--space-section` by default; the `.section--major` modifier (composable with `.section--dark`, independent concepts) opts into `--space-section-lg`. Confirmed via real-browser screenshots at 390/768/1440/1920px that ordinary sections now feel more cohesive without feeling cramped, while the dark/Longevity-style section keeps its authority.

## Typography

Primary:

modern grotesk / neo-grotesk sans.

Requirements:

- strong display performance;
- excellent body readability;
- not overly geometric;
- not startup-generic;
- not decorative for its own sake.

Scale direction:

```text
Hero H1       72–96px max desktop
Section H2    48–64px
H3            28–36px
Lead          20–24px
Body          17–19px
Small         14–15px
Metadata      11–13px
```

Use fluid `clamp()` sizing.

### Implemented (Task 004B)

**Primary sans: Work Sans** (variable, self-hosted, SIL OFL 1.1 — see `DOC/09` for provenance). Weights in use: 400/500/600/700, all served from one variable file per glyph subset.

Implemented fluid scale (`src/styles/tokens.css`, `clamp()`-based, mobile-safe):

```text
--text-display / --text-h1   40–88px   (calibrated down from the 72–96px envelope — see below)
--text-h2                     32–56px
--text-h3                     22–28px
--text-lead                   18–22px
--text-body                   17px (flat, not fluid — long-form reading stays constant across viewports)
--text-small                  14px
--text-meta                   12px
```

`--text-h1` is aliased to `--text-display` — Task 004B found no genuine content need to differentiate them yet at foundation stage, per the task's own "avoid unnecessary duplication" guidance.

### Weight hierarchy — calibrated (Task 004C)

```text
Display / H1    Work Sans 600   (line-height tight, tracking tight)
H2              Work Sans 600   (line-height tight, tracking tight)
H3              Work Sans 500   (line-height snug)   — was 600, stepped down for a genuine H2→H3 break
Lead            Work Sans 500   (line-height relaxed) — was 400, given presence without becoming a heading
Body            Work Sans 400   (line-height normal)
Small           Work Sans 400, muted color
Metadata        Space Mono 400, uppercase, wide tracking
```

**Display weight, 600 vs 700 — visually compared, not assumed.** Both were rendered side-by-side in the fixture and screenshotted. 700 read heavier and closer to startup-billboard impact, which the brief explicitly warns against; 600 kept the same size and presence while reading calmer and more editorial — confirming the task's own hypothesis. 600 was kept (no change from Task 004B); the comparison markup was removed from the fixture after the decision.

The H3 and lead weight changes are what actually fixed the "same-weight headings at different sizes" problem the task flagged for mobile — H3 now visibly steps down from H2, and lead now reads as "a paragraph with more presence" rather than "a smaller heading," at every viewport tested (390/768/1440/1920px).

## Monospace metadata

Use only for metadata/system labels.

Examples:

```text
CASE / 02

STATUS        ACTIVE
SINCE         20XX
LIFECYCLE     XX+ YEARS
```

Do not use monospace for normal body content.

Do not make the site look like a developer terminal.

### Implemented (Task 004B)

**Space Mono**, static, Regular (400) only — self-hosted, SIL OFL 1.1 (see `DOC/09`). Bold not loaded; add only if a real need appears. Used exclusively for the `.meta` utility class (case identifiers, status/lifecycle labels, timeline labels) — never for body, navigation or buttons, per this document's rule above.

## Color

Neutral-first:

- warm off-white/light neutral background;
- dark charcoal foreground;
- restrained gray scale;
- one controlled ARTIT accent.

Accent roles:

- CTA;
- link;
- active state;
- diagram highlight;
- minimal metadata highlight.

No decorative gradients or glow.

### Implemented (Task 004B)

Direction 3 from Task 004A ("Restrained Industrial Neutral"), implemented as-proposed with no calibration needed — Task 004A's own WCAG contrast verification already showed AA/AAA across every real text usage:

```text
--color-bg              #f6f5f3
--color-surface         #eceae6
--color-text             #1a1a1a
--color-text-muted       #656260   (5.56:1 on bg — AA)
--color-border           #d9d6d1   (decorative only — see accessibility note below)
--color-accent           #2b5d4b   (6.96:1 as text on bg — AA; 7.58:1 white-on-accent CTA — AAA)
--color-accent-strong    #1a3c30   (hover/active state)

--color-dark-bg          #1a1a1a
--color-dark-text        #f2f1ef   (15.42:1 — AAA)
--color-dark-text-muted  #a8a5a1   (7.10:1 — AAA)
```

**Accessibility note on borders**: `--color-border` against `--color-bg`/`--color-surface` measures ~1.3:1, well under the WCAG 2.2 SC 1.4.11 non-text 3:1 minimum. This is intentional for decorative dividers (matches "subtle 1px neutral lines" above) but means a border must never be the *only* affordance for a required control boundary — focus states use `--color-accent` instead (4.78–8.39:1 against background across all three Task 004A directions), which is what `global.css`'s `:focus-visible` rule relies on.

## Dark sections

Use rarely.

Longevity is a good candidate.

A dark section should be a deliberate rhythm change, not a repeated pattern.

## Borders / radius / shadows

Borders:

subtle 1px neutral lines.

Radius:

small and restrained, roughly 2–8px direction.

Shadows:

none by default.

Use minimal depth only where required for screenshot separation.

## Card policy

Content is not automatically a card.

Do not turn:

- quotes;
- services;
- process steps;
- statistics;

into floating rounded cards by default.

Prefer:

- typography;
- grid;
- whitespace;
- borders;
- separators.

## Buttons

Primary CTA:

clear rectangular/low-radius button.

Secondary actions:

text links where appropriate.

Hover:

- arrow motion;
- underline/reveal;
- subtle background transition.

No glow.

## Navigation

Clean and spacious.

Sticky behavior is allowed if subtle.

Dropdown should be minimal.

## Hero

Typography-first.

No required hero image, stock photo, laptop mockup or dashboard.

## Problem section

Editorial quote composition.

Controlled asymmetry on desktop.

Linear readable order on mobile.

## Engineering diagrams

Use:

- text;
- thin lines;
- minimal accent.

No 3D illustrations.

## Screenshot treatment

Real UI is evidence.

Modern UI:

- large;
- sharp;
- minimal framing.

Legacy UI:

- preserve visual truth;
- contextualize with metadata;
- do not fake-modernize.

## Case study teaser

Use editorial composition rather than portfolio cards.

Example structure:

```text
CASE / 01

Egy üzleti rendszer,
amely együtt nőtt
a vállalkozással.

XX+ YEARS
ACTIVE

[REAL SOFTWARE]
```

## Longevity

Signature visual language:

large numbers + engineering metadata.

Example:

```text
XX+
YEARS

OLDEST ACTIVE CLIENT SYSTEM
```

## Timeline

Example:

```text
200X ───── SYSTEM LAUNCH
 │
20XX ───── ERP CHANGE
 │
2026 ───── ACTIVE
```

Use verified years only.

## Tardify

ARTIT section structure + real Tardify UI.

Do not restyle the Tardify product into an ARTIT mockup.

## Human presence

Use real person/people when appropriate.

Avoid generic team/meeting stock photography.

## Motion

Interaction:

150–250ms direction.

Content reveal:

subtle opacity/translate/clip.

Explanatory motion:

diagram/timeline only when it improves understanding.

Never:

- scroll hijacking;
- cursor gimmicks;
- 3D device motion;
- endless floating objects;
- loading intros;
- excessive parallax.

Respect `prefers-reduced-motion`.

## Responsive

Mobile is not compressed desktop.

Semantic DOM order must remain correct.

Desktop horizontal diagrams may become vertical on mobile.

## Anti-patterns

DO NOT use:

- gradient orbs;
- aurora backgrounds;
- glassmorphism;
- glowing borders;
- neon tech aesthetic;
- fake terminal;
- code rain;
- giant custom cursor;
- decorative random grid background;
- floating cards;
- excessive rounded cards;
- pills everywhere;
- tech logo wall;
- stock developer photography;
- fake dashboards;
- fake metrics;
- fake testimonials;
- generic abstract 3D objects;
- 3D laptop/device mockups;
- excessive dark/light alternation;
- generic SaaS feature grids;
- AI-startup visual clichés.

## Semantic token architecture — implemented (Task 004B)

The token names below are implemented in `src/styles/tokens.css`. Actual values are documented inline in the "Typography" and "Color" sections above; see also `DOC/09-TECHNICAL-ARCHITECTURE.md`.

```css
--color-bg;
--color-surface;
--color-text;
--color-text-muted;
--color-border;
--color-accent;
--color-accent-strong;

--color-dark-bg;
--color-dark-text;
--color-dark-text-muted;

--space-xs;
--space-sm;
--space-md;
--space-lg;
--space-xl;
--space-2xl;
--space-section;
--space-section-lg;

--radius-sm;
--radius-md;

--font-sans;
--font-mono;

--text-display;
--text-h1;
--text-h2;
--text-h3;
--text-lead;
--text-body;
--text-small;
--text-meta;

--leading-tight;
--leading-snug;
--leading-normal;
--leading-relaxed;

--tracking-tight;
--tracking-normal;
--tracking-wide;

--content-reading;
--content-standard;
--content-wide;
```

`--space-2xl` and the `--leading-*`/`--tracking-*` roles were added during Task 004B implementation — real composition (dark-section rhythm, display vs. body line-height/tracking behavior) demonstrated a genuine need for them, consistent with this document's "add one or two additional levels if real composition requires them" allowance. `--space-section-lg` was added in Task 004C once browser inspection showed a single section-spacing value couldn't serve both ordinary and major/editorial sections well. `--text-xs`/`--text-sm` from the original direction were renamed to `--text-meta`/`--text-small` to match their actual semantic roles once implemented.

Token names should describe roles, not literal values.
