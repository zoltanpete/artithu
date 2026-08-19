# Task 007D.1 --- Homepage Visual Lock Corrections

## 1. Objective

Perform a **surgical correction pass** on Task 007D before the homepage
visual lock review.

This is not another polish round and not a redesign. Owner review found
exactly two visual devices that introduce unintended meaning:

1.  the new horizontal connector above the Problem section's two `JEL`
    columns;
2.  the Decision section's existing fork/branch glyph.

Remove those two sources of ambiguity, preserve the successful Task 007D
changes, verify the page, and correct the documentation so neither
device is reintroduced later.

No other visual experimentation is in scope.

## 2. Required starting point

Use the current production state after Task 007D.

Before editing, inspect: - `src/components/homepage/Homepage.astro` -
`src/styles/foundation.css` -
`DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md` - `DOC/07-DESIGN-SYSTEM.md` -
any Task 007D notes describing the Problem or Decision grammar

Inspect the current rendered homepage in a real browser. Do not revisit
the Hero/System Map or unrelated sections.

## 3. Correction 1 --- Problem: remove the horizontal connector

### Current problem

Task 007D correctly extended the diagnostic spine/node language to
`JEL / 05–06`. However, desktop also gained a horizontal line across the
top of the two diagnostic columns, with junction nodes.

This was not requested and changes the reading from "six diagnostic
signals sharing one grammar" toward "a route/network branching into two
paths."

The `4+2` layout represents **dense → open presentation**, not
branching.

### Required change

Remove completely: - the desktop top horizontal connector; - top
junction dots/nodes belonging specifically to it; -
pseudo-elements/SVG/CSS used solely for that connection.

Do not replace it with another connector.

### Must remain

Preserve: - `JEL / 01–04` vertical spine + nodes; - `JEL / 05–06`
vertical spine + nodes; - shared `JEL / 0X` indexing/technical-label
grammar; - dense/open distinction; - clear membership of all six signals
in the same diagnostic language.

The two desktop vertical spines do **not** need to be physically
connected.

**Rule:** shared grammar communicates membership; connector geometry is
used only when a real semantic route exists.

### Mobile

Task 007D's mobile solution may retain a **single continuous vertical
spine** through `JEL / 01–06`, because mobile presents the six signals
as one vertical reading sequence.

Verify: - all six signals still read as one system; - dense/open
transition remains visible; - no horizontal branching geometry
appears; - no clipping/text collision; - the spine does not imply
status/completion.

Do not change mobile merely for desktop symmetry.

## 4. Correction 2 --- Decision: remove the fork glyph

### Current problem

The small fork/branch SVG under the Decision introduction was not part
of the approved A4 exploration precedent; Task 007A already identified
it as a later implementation judgment call.

It now creates unclear semantics: it resembles a process splitting into
two paths, although this section does not describe an actual workflow
fork.

The two solution directions below already communicate the structure.

### Required change

Remove the Decision fork glyph completely: - markup/SVG; - glyph-only
styles; - spacing used only to accommodate it.

Do **not** replace it with another icon, mini-diagram, arrows, dots,
crosshair, or decorative engineering mark.

The correct replacement is **nothing**.

The Decision section should remain one of the quietest sections:
typography, supporting copy, two solution directions, and tonal surface
are sufficient.

**Rule:** when typography/content structure already communicates a
decision, do not add diagrammatic semantics without a real relationship
to encode.

## 5. Preserve successful Task 007D work

Do not rework successful changes.

### Problem

Keep vertical `JEL` spine/node treatment for all six signals, dense/open
distinction, indexing and technical labels.

### Process

Keep the corrected geometry that allows `Továbbfejlesztjük` to fit on
one line at normal large desktop widths. Keep its connected route/nodes:
this section represents a real ordered progression, so the connector is
semantically justified.

### Tardify

Keep the refined partial-edge/specification-plate treatment, lighter top
rule, restrained registration/construction mark, and current CTA
treatment unless a regression is found. Do not restore the full
generic-card border.

### Hero

Untouched.

### Other sections

No changes unless required to fix a regression caused by these removals.

## 6. Semantic distinction to lock

Document and preserve three different concepts:

### A. Membership / shared grammar

Example: `JEL / 01–06`.

Communicated through repeated indexing, spine/node vocabulary,
typography, spacing and surface logic. Physical desktop connection
between groups is not required.

### B. Real progression

Example: Process `01 → 04`.

A connected route is justified because the content represents an ordered
progression.

### C. Decision / conceptual alternatives

Example: "Nem minden problémára kell egyedi szoftver."

Do not automatically encode this as a branching diagram. Text/content
structure is sufficient unless a future approved design establishes
meaningful diagram semantics.

## 7. Documentation correction

At minimum review/update: - `DOC/07-DESIGN-SYSTEM.md` -
`DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`

Update other docs only if they explicitly mention the removed fork or
horizontal Problem connector.

Record explicitly: 1. `JEL / 01–06` is one diagnostic grammar, but
desktop dense/open groups do not require a physical horizontal
connection. 2. `4+2` means density, not branching. 3. Repeated vertical
spine/node grammar is the intended membership cue. 4. Connected route
geometry is reserved for actual progression/flow semantics. 5. Decision
intentionally has **no diagram/glyph** after owner review. 6. The old
Decision fork is superseded and is not part of the locked grammar.

Historical notes may remain accurate, but current approved rules must be
unmistakable.

## 8. Responsive verification

Verify in a real browser at minimum: - 390px - 768px - 950px - 1100px -
1150px - 1440px - 1920px

Check especially:

**Problem** - no desktop horizontal connector; - no orphan top junction
dots; - both desktop vertical spines align cleanly; - `JEL / 05–06`
clearly remain in the same grammar; - mobile continuous vertical spine
works; - dense/open distinction remains.

**Decision** - no awkward gap after fork removal; - intro → two
directions has natural rhythm; - tonal section remains deliberately
quiet.

**Process** - `Továbbfejlesztjük` remains fixed at intended desktop
widths.

**Tardify** - specification-plate treatment remains intact.

Also verify zero horizontal overflow and zero console/page errors.

## 9. Accessibility and performance

Confirm: - removed decorative SVG is gone; - no new interactive
elements; - heading order unchanged; - keyboard focus unaffected; - no
color-only meaning; - reduced-motion unaffected; - System Map keyboard
behavior unaffected.

Expected client-side impact: **zero new JS**, ideally slightly less
markup/CSS.

## 10. Localization/content architecture

Do not modify homepage marketing copy.

Preserve: - YAML content source; - bilingual field architecture; -
semantic IDs; - locale helpers; - current locale strategy and
translation gates.

No content/schema/localization change should be necessary.

## 11. Validation

Run:

``` bash
npm run check
npm run build
```

Report exact results. Perform real-browser verification, clean generated
build output according to repository workflow, and do not commit/push
unless separately instructed.

## 12. Expected file scope

Likely implementation: - `src/components/homepage/Homepage.astro` -
`src/styles/foundation.css`

Likely docs: - `DOC/07-DESIGN-SYSTEM.md` -
`DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`

Only touch additional files when genuinely required. Do not touch
historical A4 prototypes.

## 13. Completion report

Return a numbered report covering: 1. Final status 2. Repository
baseline 3. Source-of-truth audit 4. Problem horizontal-connector
diagnosis 5. Exact Problem geometry removed 6. Vertical `JEL / 01–06`
grammar retained 7. Desktop dense/open result 8. Mobile diagnostic-spine
result 9. Decision fork diagnosis 10. Exact Decision glyph/spacing
removed 11. Decision rhythm after removal 12. Process confirmation 13.
Tardify confirmation 14. Hero confirmation 15. Membership vs progression
vs decision distinction 16. YAML/localization preservation 17.
Responsive widths/results 18. Accessibility verification 19.
Performance/client-JS impact 20. Files changed 21. Documentation
corrected 22. `npm run check` 23. `npm run build` 24. Bugs/regressions
found and fixed 25. Deviations 26. Repository state 27. Recommendation
for visual lock

End with:

> **HOMEPAGE AMBIGUOUS CONNECTORS REMOVED --- READY FOR OWNER VISUAL
> LOCK REVIEW**

unless a real unresolved issue remains.

## Final intent

This task removes two cases where the engineering visual language
started implying more semantics than the content contains.

> **Do not draw a route unless there is a route to explain.**

`JEL / 01–06` needs shared diagnostic language, not a desktop branch
diagram.

Process has a real progression, so its connected route belongs.

Decision is clearer without a diagram.

Make only these corrections, verify them, and stop.
