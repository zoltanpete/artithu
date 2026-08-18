# ARTIT.hu — Asset Strategy

## Asset categories

```text
brand
people
client-systems
case-studies
tardify
icons
decorative
```

## Asset record

For important assets track:

```text
source
owner
permission
publication status
anonymization requirement
language
crop/use
alt role
verification status
```

## Brand assets

TBD:

- current ARTIT logo;
- vector versions;
- favicon/app icons.

Do not assume legacy WordPress visual styling should be retained.

**Brand accent source — resolved as a new design-system proposal (Task 004A/004B)**: no historical ARTIT accent color exists anywhere in this repository (verified by a full repo search before proposing anything). The implemented accent (`#2b5d4b`, deep restrained green) is a new website design-system choice, not a recovered or claimed brand color — see `07-DESIGN-SYSTEM.md`. Logo and favicon remain genuinely TBD; no logo work was done in Task 004A/004B.

## Typeface assets (Task 004B)

Work Sans (primary) and Space Mono (metadata) are self-hosted under `src/fonts/`, sourced from the official Google Fonts-distributed builds, SIL OFL 1.1 licensed. Provenance and license text are kept alongside the font files (`src/fonts/PROVENANCE.md` and the `*-OFL.txt` files) rather than only in documentation, so the license travels with the asset. See `09-TECHNICAL-ARCHITECTURE.md` for delivery details.

## People

Preferred:

- real portrait;
- real work environment;
- authentic professional context.

Avoid:

- generic stock developers;
- staged meeting imagery;
- artificial "team collaboration" imagery.

## System Maps vs. screenshot evidence (Task 006)

These serve different purposes and should not substitute for one another:

- **System Maps** (the Task 005C/005D-locked visual grammar — see `07-DESIGN-SYSTEM.md`) explain *structure and process*: how ARTIT turns heterogeneous, fragmented inputs into a coherent system. They are diagrams, not evidence — never a real screenshot, never implying they depict an actual running interface.
- **Real product screenshots** (this section, below) provide *product evidence*: proof that a real system exists and works, in its own real UI.

A case study or process page may reasonably use both — a System Map to explain how the underlying complexity was resolved, and a real screenshot to prove the resulting system is real — but one should never be dressed up to look like the other. Do not fabricate a screenshot-styled panel to imply a System Map is "the app," and do not decorate a real screenshot with System Map devices (ports, arrowheads, construction guides).

## Client system screenshots

These are evidence assets.

### Modern screenshots

- preserve sharpness;
- use meaningful crops;
- avoid tiny UI displayed at oversized marketing widths;
- minimal framing.

### Legacy screenshots

Do not visually modernize.

Do not hide their age.

Contextualize them using verified metadata such as:

```text
STATUS / ACTIVE
IN USE / XX+ YEARS
```

The age is part of the proof.

## Anonymization

If customer permission is unavailable:

- remove customer-identifying data;
- review personal data;
- remove sensitive operational details;
- verify that anonymization does not create misleading content.

Keep original source files private where required.

## Tardify assets

Use real Tardify product UI.

Do not recreate fake product screens.

Keep Tardify's own visual identity inside product screenshots.

## Icons

Use sparingly.

Prefer text and arrows where sufficient.

If icons are needed:

- one consistent line-based family;
- functional meaning;
- no decorative icon wall.

## Decorative assets

Keep to a minimum.

Do not generate abstract 3D tech objects, gradient orbs or AI-startup backgrounds.

## Asset quality rule

Never enlarge a crop beyond its effective source detail when that causes visible softness.

Prefer a larger original crop or a different source screenshot.
