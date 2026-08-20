# Task 010A — Munkáink Brand-Face Exploration & Integration

## Status
**READY FOR IMPLEMENTATION**

## Context
Task 010 implemented `/munkaink/` as a deliberately restrained evidence hub. Owner review confirms the page is structurally sound, but visually slightly too muted compared with `/egyedi-fejlesztes/` after Task 009A.

This is **not a redesign**. The task is a focused art-direction exploration and integration pass to determine and implement one meaningful page-specific ARTIT visual model / brand face.

## 1. Primary objective
Explore, compare, select, and integrate a page-specific visual model for `/munkaink/`.

It should make this proposition perceptible:

> **The proof is not the demo moment. The proof is that a system becomes part of real operation and continues to live there.**

The visual must add meaning, not decoration.

## 2. Preserve the architecture
Keep the current four-section architecture:
1. Hero
2. Evidence principle
3. Two case entries
4. Final CTA

Do not reopen information architecture, copy strategy, evidence hierarchy, or case-study gating. Keep the existing case plates calm.

## 3. Source-of-truth audit
Before editing, re-read relevant DOC/00–13, Task 008 visual-lock notes, Task 009A brand-face rationale, and Task 010's `/munkaink/` exploration/rejections.

Inspect current `/`, `/egyedi-fejlesztes/`, `/munkaink/`, plus `SystemMap.astro`, `OperatingFitField.astro`, `MunkainkPage.astro`, relevant YAML/schema, `foundation.css`, and `tokens.css`.

Treat SystemMap and OperatingFitField as visual-language references, not templates.

## 4. Explicitly reopen Task 010's no-visual decision
Document why owner review changes the conclusion:
- the page is correct but visually muted;
- evidence-record typography alone gives it less page identity than `/egyedi-fejlesztes/`;
- the Hero has unused visual territory, especially desktop;
- case entries should not carry the burden of visual personality.

Reopen only this question:

> **Can one meaningful Hero visual express operational proof without inventing customer evidence?**

## 5. Semantic job
The visual should represent continued operation, system persistence, accumulated operational record, adaptation/change being absorbed, or a system remaining part of business operation rather than existing only as a delivery/demo artifact.

It must not imply exact uptime, years, user counts, customer size, transaction volume, named integrations, measurable outcomes, unapproved chronology, or any gated Case Study 01/02 fact.

**No invented quantitative evidence.**

## 6. Preferred exploration territory
Strong starting hypothesis: **Operational Record / Living System**.

Possible abstract vocabulary: `SYSTEM`, `OPERATION`, `ACTIVE`, `CONTINUOUS`, `CHANGE`, `ABSORBED`, `RECORD`, `01…n`.

These are examples, not mandatory copy.

Available ARTIT grammar includes thin technical rules, ports/nodes, sparse accent, mono labels, record/index notation, layered/repeated state marks, restrained construction residue, and controlled density contrast. The final geometry must earn its place.

## 7. Mandatory concept exploration
Create **at least 3 genuinely different browser-rendered concepts** before selection. They must differ semantically, not merely stylistically.

Suggested starting directions:

### Concept A — Operational Record / Living System
Persistent central system/state with accumulated operational/state records.

### Concept B — Continuity / State Accumulation
Repeated states/records communicating persistence without becoming a conventional timeline.

### Concept C — System-in-Operation Boundary
A system embedded in an operating field/environment, where continued participation rather than delivery is the evidence.

Improve or replace these if a stronger concept emerges.

## 8. Critical semantic constraints
**No false relationship between cases.** Never connect Case 01 and Case 02 with a route, timeline, lifecycle, or dependency.

**No fake process.** Do not create `build → launch → operate → prove` unless the page genuinely explains that ordered process.

Preserve the Task 007D.1 rule:

> **Do not draw a route unless there is a route to explain.**

No branching decision diagram. No decorative diagram that merely repeats the Hero sentence in boxes/arrows.

## 9. Preferred placement
First test the visual in the **Hero**, primarily in the open right-hand desktop area.

Expected direction:
- copy left;
- visual right;
- H1 remains primary;
- neither side dominates.

Do not automatically copy `/egyedi-fejlesztes/`'s grid ratio. Determine composition from this page.

## 10. Mobile behavior
Compose mobile intentionally; do not merely shrink desktop SVG.

Test at least 390px and ~700px, plus transition into desktop. Ensure legible labels, no collisions, no overflow.

## 11. Relationship to case entries
Hero visual must not make cases nodes inside itself. No Case 01/02 connectors, arrows to cards, shared case spine, or fake metrics.

Hierarchy:

**Hero visual = model of durable operational evidence**  
**Case plates = actual currently publishable evidence records**

Semantic relationship only, no physical connection.

## 12. Evidence principle section
Re-evaluate the tonal section after Hero integration, but do not redesign it by default and do not add a second diagram.

## 13. Brand-face consistency audit
Compare:
- Homepage/SystemMap — relationships/transformation;
- `/egyedi-fejlesztes/`/OperatingFitField — operation and fit/friction;
- `/munkaink/` — operational persistence/living evidence/accumulated record.

They should share grammar without becoming variants of one diagram. Document the distinction.

## 14. Componentization
Use a page-specific semantic component name if needed, e.g. `OperationalRecord.astro` or `LivingSystemField.astro`.

Do not create generic `BrandFace`, `TechnicalDiagram`, or `ArtitVisual` abstractions unless genuinely justified by repeated real structure.

## 15. Content/YAML/localization
Store meaningful visible labels in content/YAML where appropriate. Preserve localization architecture and the distinction between technical vocabulary and gated marketing prose.

Do not activate English routes or silently fall back to Hungarian marketing copy. Do not invent content to enrich the visual.

## 16. Interaction
Default to **static**. Add interaction only if it reveals meaningful otherwise unavailable information. Avoid decorative hover/focus animation. Prefer zero client JS.

## 17. Accessibility
Provide appropriate accessible name/description; use `role="img"` or equivalent where suitable; hide decorative internals; do not rely on color alone; preserve contrast; ensure no label collisions. Static visuals must not become tabbable.

## 18. Performance
Target zero new dependency, zero hydration, and zero new client JS unless semantically justified. Prefer inline SVG/CSS.

## 19. Responsive verification
Verify `/munkaink/` at:
- 390
- 768
- 950
- 1100
- 1440
- 1920px

Check overflow, clipping, collisions, Hero balance, dead space, section rhythm, and case readability using real browser renders/screenshots.

## 20. Regression checks
### `/`
Homepage visual lock unchanged; SystemMap interaction unaffected; removed ambiguous connectors remain absent.

### `/egyedi-fejlesztes/`
Task 010 OperatingFitField mobile fix remains intact; desktop/mobile geometry unaffected; no accidental CSS coupling.

### `/munkaink/`
Existing copy unchanged unless implementation genuinely requires otherwise; evidence gate intact; no fabricated facts.

## 21. Documentation
Update relevant DOC/03, DOC/07, DOC/08, DOC/09 if needed, DOC/11, DOC/12, DOC/13.

Record the three concepts, rendered comparison, selected concept, rejection reasons, why the visual earns its place, and its distinction from SystemMap/OperatingFitField.

## 22. Acceptance criteria
Complete only if:
- 3 genuinely different concepts are rendered and inspected;
- final concept communicates operational/living evidence;
- no unapproved fact/metric appears;
- cases are not visually connected;
- no fake workflow/branching appears;
- page identity materially improves;
- Hero message remains primary;
- evidence principle/cases remain calm;
- mobile geometry is intentional;
- no tested overflow/collision;
- accessibility passes;
- no unnecessary JS/dependency;
- `/` and `/egyedi-fejlesztes/` regressions absent;
- `npm run check` passes at baseline;
- `npm run build` passes.

## 23. Scope guard
Do not use this task to invent case content, build detail pages, redesign case plates, activate English/language switcher, redesign navigation, redesign `/egyedi-fejlesztes/`, revisit homepage lock, add generic illustrations, or add animation for personality.

## 24. Expected completion report
Report: final status; baseline; source audit; owner-review diagnosis; reason for reopening; semantic job; Concepts A/B/C; rendered findings; selected/rejected concepts; Hero desktop/mobile composition; evidence/case relationship; SystemMap and OperatingFitField distinctions; brand consistency; interaction/componentization/YAML/localization/accessibility/responsive/performance results; regressions; files/docs changed; check/build; bugs; deviations; remaining gates; repo state; recommendation and owner-review status.

> **TASK 010A GOAL: GIVE `/MUNKAINK/` A DISTINCTIVE, MEANINGFUL ARTIT BRAND FACE WITHOUT TURNING EVIDENCE INTO DECORATION OR INVENTING PROOF.**
