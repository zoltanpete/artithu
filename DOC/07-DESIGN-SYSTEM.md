# ARTIT.hu — Design System Direction

## Internal concept

> Software built to last.

Not necessarily a public tagline.

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

## Monospace metadata

Use only for metadata/system labels.

Examples:

```text
CASE / 02

STATUS        ACTIVE
SINCE         20XX
LIFECYCLE     20+ YEARS
```

Do not use monospace for normal body content.

Do not make the site look like a developer terminal.

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

10+ YEARS
ACTIVE

[REAL SOFTWARE]
```

## Longevity

Signature visual language:

large numbers + engineering metadata.

Example:

```text
20+
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

## Initial semantic token direction

```css
--color-bg;
--color-surface;
--color-text;
--color-text-muted;
--color-border;
--color-accent;

--space-xs;
--space-sm;
--space-md;
--space-lg;
--space-xl;
--space-section;

--radius-sm;
--radius-md;

--font-sans;
--font-mono;

--text-xs;
--text-sm;
--text-body;
--text-lead;
--text-h3;
--text-h2;
--text-display;

--content-reading;
--content-standard;
--content-wide;
```

Token names should describe roles, not literal values.
