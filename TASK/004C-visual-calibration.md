# Task 004C — Visual Calibration: Typography Hierarchy + Vertical Rhythm

## Status
`READY`

## Context
Task 004B passed technical and desktop/mobile visual review. The approved direction remains:

> **Work Sans + Space Mono + Restrained Industrial Neutral**

This task is a narrow calibration pass before homepage implementation. It is **not a redesign**.

# Claude execution prompt

We are continuing the ARTIT.hu greenfield website project.

Completed: Tasks 001, 002, 003, 004A and 004B.

The internal fixture is:

`/design-foundation`

Your task is **Task 004C — Visual Calibration: Typography Hierarchy + Vertical Rhythm**.

Do not start homepage implementation or reopen Task 004A decisions.

## 1. Inspect first
Read the relevant current repository state, especially:
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/pages/design-foundation.astro`
- any fixture/layout primitives and font declarations/assets.

Inspect `/design-foundation` in a real browser on desktop and mobile before editing.

## 2. Locked decisions
Do not replace:
- Work Sans (primary)
- Space Mono (metadata)
- the industrial-neutral palette
- self-hosted WOFF2 font architecture
- zero-client-JS approach

Keep the Task 004B palette unchanged unless calibration exposes a genuine accessibility defect:
- Background `#F6F5F3`
- Surface `#ECEAE6`
- Text `#1A1A1A`
- Muted `#656260`
- Border `#D9D6D1`
- Accent `#2B5D4B`
- Accent strong `#1A3C30`
- Dark bg `#1A1A1A`
- Dark text `#F2F1EF`
- Dark muted `#A8A5A1`

Keep the restrained/editorial/engineering language: low radius, minimal borders, little/no shadow, no gradients, no SaaS-card aesthetic.

## 3. Calibration A — Vertical rhythm
Current general section spacing reaches roughly 128px (`--space-section: clamp(4rem, 8vw, 8rem)`), which is too large for ordinary sections on desktop.

Create a semantic distinction between:
1. normal content-section spacing;
2. major/editorial section spacing.

Directional target:
- normal: roughly 64–96px
- major/editorial: roughly 96–128px

Choose final values through browser inspection. A small token model such as `--space-section` and `--space-section-lg` is appropriate.

Do **not** shrink everything globally. The dark Longevity-style fixture section benefits from generous whitespace and should retain authority.

## 4. Calibration B — Display/H1 weight
The current max display size around 88px is approved; do not reduce it automatically.

Visually compare Work Sans **600 vs 700** in the fixture. Evaluate seniority, editorial character, authority, wrapping, Hungarian accents and dark-section compatibility.

Hypothesis: 600 may feel more senior/editorial than 700, but this is not pre-decided. Keep whichever is visibly better and document the choice.

## 5. Calibration C — H2/H3 hierarchy
Mobile review suggests the levels can read as several differently sized bold headings.

Refine toward:
`display → section heading → subsection heading → lead → body → metadata`

Evaluate weight first, then line-height, size and tracking. Likely territory is H2 600 and H3 500/600, but choose by actual rendering.

Do not weaken H3; make the hierarchy intentional.

## 6. Calibration D — Lead vs body
The 17px body foundation is approved and should remain unless a real defect is found.

Make lead text more clearly distinct without turning it into another heading. Prefer subtle changes in weight, line-height and/or max-width before inflating size.

It must work later for hero supporting copy, section intros and case-study intros.

## 7. Preserve accent strategy
Keep `#2B5D4B`. The fixture's restrained use is not a reason to change the color or add decorative green.

Future production use may selectively include links, CTA, metadata emphasis, timeline markers, status, diagrams and active states. No green headings or decorative green sections.

## 8. Preserve flexible screenshot framing
The placeholders prove that the neutral foundation can frame heterogeneous software evidence. Do not invent fake UI and do not turn the current border/surface treatment into a universal screenshot-component contract.

Future Tardify, legacy and customer screenshots may need different framing.

## 9. Mobile
The current mobile foundation is strong. Preserve:
- natural headline wrapping
- 17px body readability
- readable Space Mono metadata
- restrained/non-full-width CTAs where appropriate
- container collapse behavior
- dark-section character
- zero horizontal overflow

Do not solve calibration by simply making mobile typography smaller.

## 10. Expected implementation scope
Keep the diff small. Prefer changes only to:
- design tokens
- minimal foundation CSS
- fixture markup/styles where necessary to demonstrate the calibration
- documentation reflecting final values

Do not create a new component architecture.

Do not change unless an actual defect requires it:
- font families/source/file architecture
- color palette
- body base size
- container widths
- radius system
- button/link/focus concepts
- screenshot concept
- Astro/content/SEO architecture

## 11. Homepage remains out of scope
Do not implement Hero, Problem, Decision, Work, Longevity, Tardify, Process, Senior/Who or Final CTA sections.

The dark fixture remains illustrative only. Do not introduce publication-ready ARTIT claims. Placeholder facts must remain clearly generic.

## 12. Browser verification
After calibration inspect approximately:
- 390px
- 768px
- 1440px
- 1920px

Verify:
- display/H1 wrapping
- H2/H3 hierarchy
- lead/body hierarchy
- metadata
- normal vs major section rhythm
- screenshot placeholder layout
- dark section
- CTA/link states
- no horizontal overflow

If existing project tooling uses nearby widths, that is acceptable.

## 13. Accessibility/performance regression
Confirm:
- text remains readable
- links remain distinguishable
- focus-visible remains intact
- keyboard behavior remains correct
- no clipping/overflow
- reduced-motion behavior remains intact
- existing contrast results still apply if colors are unchanged
- no new dependency
- no new client JS
- no external font request
- font file count remains unchanged unless genuinely necessary

## 14. Documentation
Review/update only as necessary:
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`

Document final:
- display/H1 weight
- H2/H3 hierarchy
- lead treatment
- normal section spacing
- major/editorial section spacing

Do not manufacture documentation changes where architecture did not change.

## 15. Validation
Run:
- `npm run check`
- `npm run build`

Run the dev server and inspect:
- `/design-foundation`
- `/`
- `/404`

Confirm the fixture remains `noindex`, fonts remain local, no unexpected client JS/assets appear, and layout has no overflow.

## 16. Visual comparison
Compare before vs after and report:
- whether ordinary sections became more cohesive without becoming cramped;
- whether the dark/major section retained authority;
- whether display weight improved senior/editorial character;
- whether H2/H3 are more distinct;
- whether lead separates from body without becoming a heading;
- whether mobile quality was preserved.

If an experiment does not improve the design, revert it.

# Definition of Done
Task 004C is complete only if:
- approved design direction remains intact;
- normal vs major spacing is semantically differentiated;
- display 600 vs 700 was visually tested and the better result documented;
- H2/H3 hierarchy was calibrated;
- lead/body hierarchy was calibrated;
- body/mobile readability was preserved;
- dark-section authority was preserved;
- palette stayed unchanged unless a genuine defect was found;
- screenshot framing was not over-engineered;
- no homepage work or unnecessary abstraction was introduced;
- no client JS/unnecessary dependency was added;
- browser and accessibility regression checks passed;
- `npm run check` and `npm run build` passed;
- documentation reflects final calibrated values;
- fixture is ready for final owner visual review.

# Completion report
Return exactly these sections:

## 1. Final status
Use `COMPLETE`, `COMPLETE WITH OPEN DECISIONS`, or `BLOCKED`.

## 2. Scope confirmation
Confirm calibration-only scope and preservation of Work Sans, Space Mono, palette and visual direction.

## 3. Vertical rhythm calibration
Previous value; final normal value; final major/editorial value; usage; rationale.

## 4. Display/H1 calibration
600 vs 700 comparison; chosen weight; size behavior; desktop/mobile result.

## 5. H2/H3 hierarchy calibration
Previous values; final values; changes; rationale.

## 6. Lead/body calibration
Previous/final lead treatment; body treatment; rationale.

## 7. Preserved decisions
Confirm palette, body size, fonts/delivery, container widths, radius, button concept, screenshot concept and dark palette.

## 8. Fixture changes
Explain `/design-foundation` changes and confirm internal + `noindex` + generic/non-factual status.

## 9. Responsive verification
Widths inspected; wrapping, spacing, metadata, dark section and overflow results.

## 10. Accessibility regression check
Readability, links, focus, keyboard, clipping/overflow, reduced motion and contrast validity.

## 11. Performance / client JS regression check
Dependencies, font files, external requests, client JS and build observations.

## 12. Files changed
List files and why.

## 13. Documentation updates
List changes and final locked values.

## 14. Validation performed
Include exact commands/checks and results, at minimum `npm run check`, `npm run build`, and browser/runtime inspection.

## 15. Deviations
Use `None.` if none.

## 16. Repository state
Git status, changed/untracked files, commit status.

## 17. Final design-foundation checkpoint
End with exactly:
`READY FOR FINAL OWNER VISUAL REVIEW`
or
`NOT READY FOR FINAL OWNER VISUAL REVIEW`

Do not start homepage implementation or the next task. Stop after the report.
