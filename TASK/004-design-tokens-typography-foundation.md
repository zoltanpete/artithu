# Task 004 — Design Tokens + Typography Foundation

## Status

`BLOCKED_BY_TASK_003`

## Objective

Translate the approved Design System Direction into a working visual foundation.

Do not build the homepage yet.

## Required work

1. Finalize semantic color roles.
2. Finalize spacing scale.
3. Finalize container widths.
4. Finalize fluid typography scale.
5. Select primary sans and restrained monospace strategy.
6. Implement:
   - body/default typography;
   - display headings;
   - body/lead/small;
   - engineering metadata;
   - links;
   - focus states;
   - base button treatment.
7. Create a temporary internal visual test page or component fixture if useful.
8. Verify mobile and desktop behavior.

## Font rule

Before choosing fonts, consider:

- licensing;
- web delivery;
- available weights;
- Hungarian character support;
- performance;
- display quality;
- body readability.

Do not select a font solely because it resembles a reference website.

## Design intent

Must remain:

- restrained;
- editorial;
- engineering;
- neutral-first;
- typography-led.

## Anti-patterns

Do not introduce:

- gradients;
- glow;
- glassmorphism;
- oversized rounded cards;
- pill-heavy UI;
- decorative tech effects.

## Documentation updates

Update:

- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md` if font delivery changes architecture
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`

## Definition of Done

- [ ] Tokens implemented.
- [ ] Typography is responsive/fluid.
- [ ] Hungarian text renders correctly.
- [ ] Focus states meet accessibility intent.
- [ ] Monospace is used only as metadata language.
- [ ] Mobile and desktop test successfully.
- [ ] No homepage-specific design has been prematurely locked in.
