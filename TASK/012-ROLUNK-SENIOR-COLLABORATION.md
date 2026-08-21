# Task 012 — About / Senior Collaboration Page + TardifySpecimen Polish

## Status
**READY FOR IMPLEMENTATION**

## Objective
Implement `/rolunk/` as ARTIT's senior/direct-collaboration page, not a generic agency About page. Preserve the visual/semantic system locked through Tasks 008–011A.

Also include the owner-approved Task 011A carry-over polish:

> Increase the existing `TardifySpecimen` perceived visual intensity by roughly **15–20%**, using internal contrast only. Preserve geometry, dimensions, composition, responsive behavior and restrained character.

---

# Part 0 — TardifySpecimen polish

Increase visual authority by approximately 15–20% through:
- slightly stronger blueprint/grid contrast;
- slightly stronger construction-rule contrast where appropriate;
- slightly stronger presence of the small accent/signature mark.

Do **not** change:
- geometry or element placement;
- SVG dimensions/viewBoxes;
- desktop/mobile composition;
- open-edge treatment;
- Hero grid ratio;
- component API;
- semantic meaning;
- copy;
- number of elements.

Do not enlarge the specimen merely to make it louder.

Re-capture `/tardify/` at 390, 900 and 1440px. Confirm zero overflow/collision/clipping and that the specimen remains subordinate to the H1. Record exact opacity/stroke/token changes.

---

# Part 1 — Source-of-truth/content-gate audit

Re-read relevant DOC/00–13, especially DOC/01–03, 07–09, 11–13, plus Tasks 008–011A completion notes. Inspect current `/`, `/egyedi-fejlesztes/`, `/munkaink/`, `/tardify/`, homepage Senior/Who and Process material, and all existing brand-face components.

Establish `/rolunk/`'s exact role from DOC/02. The user question is approximately:

> Kikkel és hogyan fogok együtt dolgozni?

Do not automatically use this as public copy.

Classify all available material as:
- **publication-approved**;
- **gated / TO VERIFY**;
- **missing**.

Explicitly audit names, founder history, team size, experience years, portraits/person imagery, biographies, client counts, company dates, organizational claims, technologies, and Tardify origin/history. Never turn missing information into plausible marketing copy.

---

# Part 2 — Page thesis

Do not build a team directory, founder biography, agency-culture page, values poster, stock-photo About page, or generic “passionate developers” page.

The strongest currently supported proposition should be the **working relationship**: direct collaboration with experienced technical people, with understanding of the operation preceding technology choices, where supported by approved sources.

Explain the practical consequence of senior/direct involvement. Use exact approved wording where available. Do not invent claims.

---

# Part 3 — Art-direction exploration

State the page-specific visual problem before designing:

> What visual problem must `/rolunk/` solve that typography alone may or may not solve?

Build at least **three real rendered concepts** under `/art-direction/` (one consolidated comparison route is acceptable).

At least one must seriously test **no Hero diagram / no abstract SVG**, while still creating a strong composition.

Explore genuinely different families, for example:

### A — Direct Collaboration / Working Pair
Express direct working proximity without fake people, org charts or workflow arrows; typographic/structural pairing is valid.

### B — Technical Working Record
A document/specification/working-note inspired artifact suggesting shared technical work. Must not become fake UI.

### C — Typography-led human page
No new brand-face SVG. Use asymmetry, scale, controlled density, quotation/statement treatment or editorial composition.

These are exploration territories, not mandated solutions.

Reject anything reading as org chart, process flow, network diagram, generic consulting diagram, fake UI, fake résumé, placeholder portrait, generic people nodes, decorative geometry, or a clone of `SystemMap`, `OperatingFitField`, `LivingSystemField` or `TardifySpecimen`.

---

# Part 4 — Portrait/person imagery gate

Re-audit DOC/13's person/team imagery gap.

If no explicitly publication-approved real asset exists, do not generate fake portraits, use stock people, silhouettes, avatar placeholders, or visually imply team size. Design the page to work honestly without photography.

If a newly approved real asset exists, document source, approval, crop/use, alt text and responsive treatment.

---

# Part 5 — Content architecture

Derive architecture from approved material; do not copy the homepage sequence. Likely 4–6 sections.

Semantic jobs to consider:
1. Hero — who/how the client works with ARTIT.
2. Direct collaboration — what senior/direct involvement means.
3. Approach — understand operation before technology, if supported.
4. Continuity/responsibility — discussion through implementation/long-term work, if supported.
5. Relationship to Tardify/custom development — only if it strengthens the argument and is supported.
6. Final CTA — conversation without requiring a finished specification.

This is not a mandatory six-section template. Avoid repeating one proposition in several sections.

---

# Part 6 — Hero

Require one H1, clear page-specific proposition, restrained support copy and deliberate composition, with no unsupported personal/team claim.

Do not default to `eyebrow → giant heading → paragraph → button → empty right side`. If no visual asset wins, typography/layout itself must create the focal structure.

---

# Part 7 — Relationships

Explicitly decide and document:

- `/egyedi-fejlesztes/`: relevant to delivery model, but do not duplicate the pillar.
- `/munkaink/`: may support credibility; do not turn About into another evidence hub.
- `/tardify/`: DOC/02 indicates a possible explicit relationship. Use only approved facts; Tardify may demonstrate responsibility for ARTIT's own long-lived product decisions, without gated history/product claims.
- Homepage: expand approved Senior/Who material rather than merely duplicate it.

---

# Part 8 — CTA

Prefer one clear, low-pressure conversation path. Reuse approved CTA language where possible. Preserve the established idea that the visitor need not arrive with a finished specification, only where supported by existing approved copy.

---

# Part 9 — Visual constraints

Preserve Task 008 visual lock:
- Deep Blue-Violet scarce and structural;
- construction residue must explain something;
- physical connectors only for real relationships/progression;
- conceptual alternatives are not branching diagrams;
- reuse grammar, not layouts;
- page-specific artifact/visual optional, not mandatory;
- surface rhythm must create meaningful density changes.

Avoid gratuitous cards, generic icon grids, gradients for interest, rounded SaaS panels, fake browser chrome, excessive accent and non-informative animation.

---

# Part 10 — Componentization

Do not create generic `BrandFace`, `HeroVisual`, `TechnicalDiagram`, `Artifact`, or generic About cards merely because multiple pages have Hero visuals.

A route-level `/rolunk/` renderer is fine. A page-specific editorial/visual component is fine if the winning concept warrants it. Document in DOC/08.

---

# Part 11 — YAML/schema/localization

Follow the established page-specific collection pattern:
- dedicated `/rolunk/` YAML;
- page-specific schema if warranted;
- `LocalizedGated` for marketing prose;
- technical/categorical vocabulary classified consistently;
- no silent HU fallback.

Do not activate `/en/`.

---

# Part 12 — Language-switcher readiness

Confirm the fifth main page introduces no structural blocker. Record whether `alternateLocalePath` remains the header-level activation step, the page supports EN cleanly, and any visual labels create translation requirements. Do not activate switching without approved English routes/copy.

---

# Part 13 — SEO

Implement title and meta description from supported propositions. Do not invent Person schema, founder metadata, team/member schema, unsupported Organization claims or history facts. Structured data remains separately gated unless sources establish otherwise.

---

# Part 14 — Accessibility

Verify exactly one H1, sequential headings, real links, visible keyboard focus, mobile-menu keyboard behavior, appropriate SVG semantics, decorative marks hidden from AT, no color-only meaning, reduced-motion behavior and no fake controls.

---

# Part 15 — Responsive/browser verification

Test real browser renders at:
390 / 700 / 768 / 900 / 950 / 1100 / 1440 / 1920px.

Inspect Hero breakpoint/wrapping, any visual/editorial artifact, surface transitions, CTA, header/mobile menu and zero horizontal overflow.

---

# Part 16 — Regression verification

Re-check:
- `/`: SystemMap keyboard toggle; Problem connector absent; Decision fork absent.
- `/egyedi-fejlesztes/`: OperatingFitField geometry and fixed mobile `MŰKÖDÉS` separation.
- `/munkaink/`: stronger LivingSystemField dots remain correct, no collision/overflow.
- `/tardify/`: specimen correct after Part 0 uplift, with no geometry/layout change or overflow.

---

# Part 17 — Performance

Target zero new dependency, zero framework hydration and zero client JS unless an information-bearing interaction is explicitly justified. Report built-page script count.

---

# Part 18 — Documentation

Update at minimum:
- DOC/03 — `/rolunk/` implementation/content architecture
- DOC/07 — art direction and selected principle
- DOC/08 — componentization
- DOC/09 — collection/routing/localization
- DOC/11 — verification/regression
- DOC/12 — person/asset decision
- DOC/13 — remaining gates/withheld claims

Also record the Task 011A specimen 15–20% polish in appropriate visual/verification docs.

---

# Part 19 — Required completion report

Return a numbered report covering:

1. final status;
2. repository baseline;
3. TardifySpecimen exact polish;
4. Tardify polish verification;
5. source audit;
6. `/rolunk/` role;
7. primary user question;
8. approved content;
9. gated content;
10. portrait/person asset status;
11. public facts used;
12. withheld claims;
13. visual diagnosis;
14. Concept A;
15. Concept B;
16. Concept C;
17. rendered comparison;
18. selected direction;
19. rejection reasons;
20. final architecture;
21. Hero treatment;
22. direct collaboration;
23. senior involvement;
24. operation-before-technology;
25. continuity/responsibility;
26. `/egyedi-fejlesztes/` relationship;
27. `/munkaink/` relationship;
28. `/tardify/` relationship;
29. CTA strategy;
30. ARTIT grammar reused;
31. patterns not reused;
32. new page-specific grammar;
33. componentization;
34. YAML/schema;
35. localization/EN gate;
36. switcher readiness;
37. SEO;
38. accessibility;
39. responsive verification;
40. performance/client JS;
41. homepage regression;
42. custom-development regression;
43. Munkáink regression;
44. Tardify regression;
45. files changed;
46. docs updated;
47. `npm run check`;
48. `npm run build`;
49. bugs fixed;
50. deviations;
51. remaining gates;
52. repository state;
53. recommendation/owner-review status.

---

# Acceptance criteria

Complete only when:

1. `TardifySpecimen` receives ~15–20% more visual intensity without geometry/composition changes.
2. `/rolunk/` exists and resolves from navigation.
3. It is not a generic agency About page.
4. No unapproved biography/team-size/history/experience-year/portrait/organization claim is invented.
5. Person imagery is used only if explicitly approved.
6. At least three real concepts are rendered and compared.
7. At least one seriously tests a non-diagram editorial solution.
8. Selected direction has a page-specific semantic job.
9. No existing ARTIT brand-face geometry is cloned.
10. Density/surface rhythm avoids heading→paragraph→whitespace monotony.
11. Connector semantics obey locked rules.
12. Relationships to custom development, client evidence and Tardify are explicitly decided.
13. Localization gates remain intact.
14. Switcher readiness remains intact without premature activation.
15. Accessibility passes.
16. 390–1920px verification passes with zero overflow.
17. Existing four pages show no regression.
18. No unnecessary JS/dependency is added.
19. `npm run check` has no new error/warning.
20. `npm run build` passes.
21. Documentation reflects implementation and remaining gates.
22. Result is ready for owner visual/content review.

---

# Task boundary after 012

Do not automatically implement another page.

After owner review, reassess actual remaining sitemap/content gates. Likely candidates:
- `/kapcsolat/`, if still unimplemented and sufficiently supported;
- child custom-development pages only after Case Study 01/02 evidence approval;
- localization only after approved English marketing copy;
- `/munkaink/` or `/tardify/` evidence enrichment only when gated assets/facts become approved.

Choose the next task from actual remaining gates, not page-number momentum.
