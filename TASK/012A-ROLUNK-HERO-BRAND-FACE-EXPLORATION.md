# Task 012A — Rólunk Hero Brand-Face Exploration

## Status
**READY FOR IMPLEMENTATION**

## Context
Task 012 implemented `/rolunk/` successfully from a content, architecture, accessibility, localization and technical perspective, but owner review did **not approve the Hero visually**.

The current Hero uses an eyebrow, a two-tier H1 with the second clause in Deep Blue-Violet, and supporting copy. The content and argument are approved. The problem is visual: at desktop width it remains a large typographic block surrounded by too much functionless empty canvas.

This task reopens **only the `/rolunk/` Hero art direction**. Do not redesign the whole page.

## 1. Objective
Explore and compare **three materially different Hero compositions** that solve the visual-flatness problem while preserving the thesis: direct collaboration with the experienced developer who understands the problem and carries it from the first conversation through to the live system.

The winner must feel recognizably ARTIT without becoming a generic About/team page, process diagram, fake UI, org chart, portrait substitute, or clone of an existing brand-face.

## 2. Scope lock
May change: Hero composition/CSS/markup, a page-specific visual component if justified, Hero YAML/schema if genuinely required, prototype routes, relevant docs.

Must not change: downstream `/rolunk/` sections, approved marketing copy except structural splitting of identical words, page argument, navigation, CTA strategy, localization gate, other pages/components except direct regression fixes.

## 3. Baseline
The Task 012 typography-led Hero is the **baseline/control**, not one of the three new concepts.

Capture it at 1440px before implementation and record:
> The typography is strong enough to carry the proposition, but not strong enough by itself to organize the available desktop canvas. The right-hand territory has no semantic or visual job, so the Hero feels sparse rather than deliberately restrained.

## 4. Audit
Re-read Task 012 notes and DOC/07, 08, 11, 12, 13. Inspect the live Hero plus `SystemMap`, `OperatingFitField`, `LivingSystemField`, `TardifySpecimen`, `RolunkPage`, foundation CSS and tokens. Existing visuals are grammar references only, never templates.

Re-confirm the unresolved person/portrait gate.

## 5. Hard asset/content constraints
Unless explicitly publication-approved now, do not use or imply: portrait, founder portrait, person name/title/biography, team photo/size, exact experience years, founding history, stock/generated people, avatars or silhouettes.

## 6. Semantic requirement
Every treatment must answer: **why does this belong specifically on a page about direct senior collaboration?**

It must communicate shared problem understanding, direct working relationship, continuity of context, the same experienced technical person staying close to the problem, and/or collaboration around a real operational problem. “It fills empty space” is not sufficient.

## 7. Concept A — Shared Working Surface / Collaboration Artifact
Build a real rendered Hero around an abstract **shared technical working surface**: restrained annotations, short generic labels, construction marks, shared reference area/line, margin/specification residue, registration marks or partial rule/grid structures.

Semantic idea: client and developer work on the same problem surface instead of handing it through organizational layers.

Do **not** make it resemble Figma, Jira, Notion, browser UI, dashboard, source code, Kanban, wireframe, fake requirements document or flowchart. Do not invent customer/project facts.

## 8. Concept B — Editorial Collaboration Composition
Build a serious **SVG-free** alternative where typography remains primary but becomes a true editorial field.

The accent H1 clause may remain, but it must no longer simply sit below the black clause in one narrow column. Test controlled displacement, meaningful annotation/margin layer, structural rule, asymmetrical alignment, the clause extending into the currently empty right territory, or restrained mono micro-copy where meaningful.

No giant quotation marks, random decorative rules, novelty rotation, illegible overlap or magazine gimmicks. At 1440px the right-hand territory must have a deliberate job.

## 9. Concept C — Direct Collaboration Marker / Shared Reference
Build a materially different technical object based on **two positions aligned to one shared reference/problem context**.

Possible vocabulary: paired registration/reference positions, common alignment datum, shared boundary, one central reference with two distinct contact points.

It must not read as people icons, org chart, network, timeline, process flow, before/after, or decision tree. No arrows without real direction.

Do not reuse radial/satellite geometry, ambient scatter, specimen-plate geometry, or input/core/output logic from existing brand-faces.

## 10. Comparison prototype
Preferred route:
`/art-direction/012a-rolunk-hero-concepts`

Render four realistic Hero compositions:
- Baseline — current Task 012
- Concept A
- Concept B
- Concept C

Use real container/font/token conditions. Do not judge isolated SVG thumbnails.

## 11. Required review
Capture all four at 1440px first. For each answer:
1. What occupies the former empty territory?
2. What semantic job does it perform?
3. Where is the density peak?
4. Does H1 remain dominant?
5. Does it feel human/direct without fake humans?
6. Does it accidentally read as process/org chart/fake UI/timeline/chart/generic diagram?
7. Is it an existing ARTIT visual with different labels?
8. Is it meaningfully better than baseline?

Then test surviving concepts at 390px.

## 12. Selection rule
Choose by semantic specificity, ARTIT recognizability, visual authority, restraint, differentiation, responsive clarity, and factual honesty.

If none clearly beats baseline, **do not force a winner**. Report failure and reasons instead.

## 13. Critical desktop acceptance test
At ~1440px the Hero must no longer contain a large right-side region that reads as **functionless empty space**.

Negative space is still required. Intentional negative space supports composition; unassigned empty space looks unfinished.

## 14. Mobile
Deliberately recompose at 390px. Separate mobile visual geometry is allowed for A/C. Recompose typography explicitly for B.

Verify readability, no collisions/clipping/overflow, sensible density, no tiny labels, and that support copy is not pushed excessively far down.

## 15. Interaction/performance
Default static. No hover animation, parallax, mouse-follow, reveal effects, canvas or client JS merely for interest. Target zero new dependency, zero hydration, zero new client JS.

## 16. Accent discipline
Deep Blue-Violet remains scarce and structural. Audit the existing accent H1 clause together with any new accent use. Prefer small structural emphasis, not broad fills.

## 17. Componentization
If A/C wins, a page-specific semantic component such as `RolunkCollaborationArtifact.astro` is acceptable. No generic `BrandFace`, `HeroVisual`, `TechnicalDiagram`, `VisualModel` or diagram primitives.

If B wins, prefer keeping it in `RolunkPage.astro` unless extraction genuinely improves maintainability.

## 18. YAML/schema/localization
Do not parameterize geometry through YAML. Add content fields only for meaningful localized text. Marketing prose remains `LocalizedGated`. Do not activate English routes.

## 19. Accessibility
Informative SVG: `role="img"` + localized aria-label. Decorative marks hidden from AT. No color-only meaning.

Typography concept: exactly one semantic H1, natural DOM reading order, visual spans must not fragment heading semantics.

Re-check keyboard focus and mobile menu.

## 20. Responsive verification
Test 390 / 700 / 768 / 900 / 950 / 1100 / 1440 / 1920px.

Confirm zero overflow/clipping, correct breakpoints, readable line lengths, H1/visual balance and no dead zones, especially at 900–1100px.

## 21. Regression checks
`/`: SystemMap keyboard behavior intact; `.decision-fork` and Problem connector absent.

`/egyedi-fejlesztes/`: OperatingFitField unchanged; mobile `MŰKÖDÉS` separation intact.

`/munkaink/`: LivingSystemField unchanged; stronger dots intact.

`/tardify/`: Task 012 TardifySpecimen +15–20% polish intact.

`/rolunk/`: only Hero changes; downstream Task 012 sections/content unchanged.

## 22. Documentation
Update DOC/03, DOC/07, DOC/08, DOC/11, DOC/12; DOC/09 only if schema/content structure changes; DOC/13 only if gate state changes or an unchanged gate needs explicit task record.

## 23. Required completion report
Return a numbered report covering:
1. final status;
2. repository baseline;
3. owner-review reason for reopening;
4. baseline Hero diagnosis;
5. source audit;
6. person/portrait gate;
7. semantic job;
8. baseline screenshot;
9–14. A/B/C descriptions and rendered findings;
15. desktop comparison;
16. mobile comparison;
17. selected direction or explicit no-winner;
18. selection rationale;
19. rejection reasons;
20. relationship to existing brand-faces;
21. final Hero composition;
22. desktop behavior;
23. mobile behavior;
24. accent audit;
25. interaction;
26. componentization;
27. YAML/schema;
28. localization;
29. accessibility;
30. responsive verification;
31. performance/JS;
32–36. regressions;
37. files changed;
38. docs;
39. `npm run check`;
40. `npm run build`;
41. bugs;
42. deviations;
43. remaining gates;
44. repository state;
45. recommendation/owner-review status.

## 24. Acceptance criteria
Complete only when:
1. baseline captured;
2. three new materially different real Hero concepts built;
3. A genuinely tests shared working surface;
4. B genuinely tests editorial/SVG-free art direction;
5. C genuinely tests shared-reference alignment;
6. all compared at 1440px;
7. survivors checked at 390px;
8. winner clearly beats baseline, or no winner is honestly declared;
9. selected Hero has no functionless desktop-right dead zone;
10. H1 remains primary;
11. no fake people/person facts/history/experience figures;
12. no fake UI/process/org chart/timeline/network;
13. no existing brand-face geometry cloned;
14. accent remains controlled;
15. mobile deliberately composed;
16. zero overflow 390–1920;
17. no unnecessary JS;
18. downstream `/rolunk/` unchanged;
19. four existing pages unregressed;
20. `npm run check` has no new errors/warnings;
21. `npm run build` passes;
22. docs record selected and rejected concepts;
23. ready for owner visual review.

## 25. Task boundary
Do **not** begin Task 013 automatically.

After owner review, if 012A passes, close 012/012A and assess `/kapcsolat/` as the likely next page. After `/kapcsolat/`, prefer a full site-level visual/content consistency review before gated child pages or localization.

Immediate goal:
> Make the `/rolunk/` Hero visually worthy of the content already approved.
