# Task 005C --- ARTIT Accent Direction Exploration

## Context

We have completed the initial ARTIT homepage art-direction exploration
(A, B, C, A2, A3).

The owner's current preference is closest to **Art Direction A**, with
selected improvements from A2/A3. The goal is not to invent another
composition. We now want to isolate and evaluate one unresolved visual
variable:

**the ARTIT accent color.**

The current dark green feels too conservative and does not feel like the
ARTIT brand. It communicates stability, but also carries a traditional
enterprise / consulting / financial-services feeling. The desired
emotional direction is fresher, cleaner, more contemporary and more
technological, while remaining restrained, credible and long-lived.

We also identified one spacing regression in A3: the vertical gap
between the site header/navigation and the hero content is too large. A2
handled this better.

This task is therefore a **controlled visual experiment**, not a
redesign.

## Objective

Create **three directly comparable accent-color variants** of the same
homepage composition.

The variants must answer one question:

> Which accent direction makes ARTIT feel fresh, modern, precise and
> technological without becoming trendy, generic SaaS, playful or
> startup-like?

Everything except the accent treatment should remain visually equivalent
between the three variants.

## Base composition

Use the strongest currently identified combination:

-   retain the editorial/engineering character of Art Direction A;
-   retain the **left-aligned Problem-section heading** from A/A3;
-   retain the stronger software-evidence presence developed in A2/A3;
-   retain the restrained micro-label / metadata language;
-   retain the current typography and neutral palette;
-   retain the established CTA/link concepts;
-   retain zero-client-JS;
-   do not change production `/`.

### Important spacing correction

For the hero's vertical position below the header:

**use A2 as the reference, not A3.**

A3 currently has too much empty space between navigation and the
beginning of hero content.

The hero should feel generous but immediately connected to the header
--- editorial breathing room, not an empty upper field.

Do not globally compress the design. This is specifically a correction
of the header → hero gap.

## Composition constraint

Do **not** create three different layouts.

All three variants must use the same header, hero composition, H1
dimensions/wrapping rules, copy, CTA positions, evidence/screenshot
geometry, Problem-section composition, section spacing, typography,
neutral surfaces, border treatment, metadata placement and responsive
behavior.

Only the accent system may change.

This is essential because we want to judge color emotionally without
composition becoming a confounding variable.

# Variant 1 --- Mineral / Steel Blue

This is the primary candidate.

Explore a restrained, slightly desaturated **mineral / steel blue**.

Desired associations: precision, engineering, software, clarity,
contemporary technology, quiet confidence and professionalism.

Avoid corporate Microsoft blue, bright royal blue, generic SaaS blue,
pastel baby blue, obvious Tailwind-default aesthetics and high
saturation.

It should feel as if the blue belongs naturally beside the existing
warm-neutral/off-white ARTIT foundation.

The accent should have enough presence to create emotional freshness,
but should never dominate the page.

# Variant 2 --- Deep Blue-Violet / Ink

Explore a restrained **deep blue-violet / ink-like accent**.

Desired associations: digital, sophisticated, contemporary, slightly
more distinctive than the steel-blue direction, premium without
luxury-brand affectation.

Avoid neon purple, AI-startup purple, gradient aesthetics, Web3/crypto
associations, playful violet and magenta.

This variant may carry slightly more personality than Variant 1, but it
must remain credible for a company building long-lived business
software.

# Variant 3 --- Cool Petrol / Cyan-Blue

Explore a cool **petrol / cyan-blue** direction that conceptually sits
between the existing green and a modern technological blue --- but
should clearly read on the blue/cyan side rather than as green.

Desired associations: freshness, technical systems, data, clarity and
modern industrial/digital character.

Avoid teal SaaS branding, turquoise, healthcare colors,
eco/sustainability green, bright cyan and neon.

This should be the closest evolutionary step from the current palette
while removing the conservative-green feeling.

## Accent-system rules

Do not treat this merely as "change the button color".

For each variant, derive a small coherent accent system from its primary
accent.

Use the accent selectively in places such as the primary CTA,
eyebrow/section micro-labels where appropriate, tiny engineering
markers/connector dots, active or emphasized metadata/tag treatment,
link hover/focus treatment where already supported, and very subtle
evidence-related detail if compositionally useful.

However, **the page must remain overwhelmingly neutral.** The accent is
punctuation, not background decoration.

Do not create large blue/purple/cyan sections merely to demonstrate the
color. Do not add gradients, decorative blobs, glows, glass effects or
illustrations. Do not recolor every micro-element just because an accent
token exists.

## Neutral palette

Preserve the approved Restrained Industrial Neutral foundation unless a
very small derived tint is technically necessary for the experiment.

The neutral background, text hierarchy and dark values should remain
visually stable between all three variants.

If an accent-derived pale tint is needed, derive it systematically and
document it. Do not casually invent unrelated colors.

No broad palette redesign is permitted in this task.

## CTA requirement

The current dark green CTA is specifically under review.

Each variant must make the primary CTA feel modern, confident, calm,
high-quality and unmistakably interactive.

It must not feel loud, consumer-oriented, playful, old-school enterprise
or generic Bootstrap/SaaS.

Check contrast for normal, hover and focus states.

Do not solve freshness simply by increasing saturation.

## Software evidence

Keep the software-evidence idea prominent because it is an important
part of the desired ARTIT direction.

If the repository still does not contain usable real ARTIT software
screenshots, continue to use **honest labelled placeholders**. Do not
fabricate application UI.

The color experiment must not be distorted by fake interface artwork.

If real evidence assets have appeared in the repository since the
previous task, inspect them first and use them only if they are clearly
appropriate.

## Problem section

Keep the editorial/engineering treatment and the **left-aligned
heading**.

Do not return to A2's centered/indented heading treatment.

Use the same Problem-section composition for all three color variants.

The purpose of this task is not to explore another symptom layout.

## Freshness target

The owner's current assessment is:

-   the overall design quality is already good;
-   it is credible and professional;
-   but it still lacks some **freshness, cleanliness, harmony and
    emotional pull**;
-   A is the closest art direction;
-   C is too forceful;
-   B is too simple;
-   A2/A3 contain useful refinements but are not themselves the final
    answer;
-   the existing green does not feel like an ARTIT color.

Interpret "fresh" carefully.

Fresh does **not** mean trendy, colorful, animated, rounded,
gradient-heavy, startup-like or visually busy.

For ARTIT, freshness should come from confident whitespace, crisp
hierarchy, contemporary color temperature, precise composition, software
evidence, controlled contrast and small moments of visual energy.

## Implementation

Create three experimental pages, for example:

-   `/art-direction/accent-steel`
-   `/art-direction/accent-ink`
-   `/art-direction/accent-petrol`

Names may differ if the existing experimental-page convention suggests
better ones.

All must remain experimental, noindex, absent from production
navigation, absent from sitemap if that is the established prototype
behavior, and clearly marked as non-final/internal using the existing
experimental mechanism.

Reuse existing shared components wherever possible.

Do not duplicate production architecture unnecessarily.

Page-scoped experimental styles are acceptable and preferred if
consistent with the existing A/A2/A3 experiments.

Do not modify production `/`.

## Responsive verification

Inspect all three variants in a real browser at 390px, 768px, 1440px and
1920px.

Confirm no horizontal overflow; hero starts at an intentionally tighter
A2-like distance below the header; heading wrapping remains natural;
evidence composition simplifies gracefully; CTA remains appropriately
sized; accent does not become visually overpowering on mobile; Problem
section retains hierarchy and readability.

Do not judge the variants from code alone.

## Accessibility / performance

For every variant:

-   verify text/background contrast;
-   verify CTA normal/hover/focus contrast;
-   preserve visible `:focus-visible`;
-   preserve keyboard semantics;
-   preserve reduced-motion behavior;
-   add no unnecessary client JS;
-   add no external font request;
-   add no new dependency unless absolutely unavoidable.

The expected outcome is still zero client JS for these static
experiments.

## Visual comparison requirement

After implementation, make a deliberate visual comparison of the three
variants at the same desktop viewport.

Evaluate each against these questions:

1.  Which feels freshest?
2.  Which feels most recognizably technological without becoming generic
    SaaS?
3.  Which best harmonizes with the warm-neutral ARTIT foundation?
4.  Which gives the CTA enough pull without making it visually loud?
5.  Which feels credible for a company building bespoke business systems
    intended to last many years?
6.  Which has the strongest chance of becoming a distinctive ARTIT brand
    accent?
7.  Does any candidate introduce an unwanted association (finance,
    healthcare, AI startup, eco brand, consumer SaaS, etc.)?

Do not automatically declare a winner simply because Variant 1 is
described as the primary candidate.

Report what the actual rendered comparison shows.

## Documentation

Update `DOC/07-DESIGN-SYSTEM.md` only as an **experimental accent
exploration**.

Document exact accent values used, any derived tint values, where accent
was applied, contrast results, visual observations, and that no accent
direction is approved yet.

Do not rewrite the locked production palette as though a decision has
already been made.

## Completion report

Return a structured completion report including:

1.  final task status;
2.  pages/files created or changed;
3.  confirmation production `/` is untouched;
4.  A2-style hero-spacing correction;
5.  exact Variant 1 accent values and rationale;
6.  exact Variant 2 accent values and rationale;
7.  exact Variant 3 accent values and rationale;
8.  accent application points;
9.  neutral palette preservation;
10. software-evidence handling;
11. responsive verification at all four widths;
12. accessibility/contrast results;
13. performance/client-JS regression check;
14. documentation changes;
15. visual comparison findings;
16. which variant appears strongest from the rendered result and why ---
    **as an observation, not an approval**;
17. deviations;
18. repository state;
19. final checkpoint: `READY FOR OWNER VISUAL REVIEW`.

## Final principle

This task is not about making ARTIT "more colorful".

It is about finding the smallest controlled color intervention that
makes the existing visual language feel:

**fresher, cleaner, more contemporary, more technological and more
emotionally attractive --- while preserving ARTIT's seriousness,
precision and long-term credibility.**
