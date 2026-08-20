# Task 009A — Custom Development Brand-Face / Hero Visual Exploration

## Context

Task 009 implemented the new `/egyedi-fejlesztes/` pillar page.

The implementation is structurally sound and consistent with the locked ARTIT design system:

- content hierarchy works,
- page role is clear,
- typography is strong,
- restrained surfaces are consistent,
- responsive/accessibility/performance checks pass,
- the homepage visual lock remains unaffected.

However, owner visual review identified a significant weakness:

> The page has ARTIT DNA, but it does not yet feel alive or distinctive enough. It is visually too dry and relies almost entirely on typography, whitespace, rules, and surface changes.

The missing element is not generic decoration, illustration, photography, or additional UI chrome.

The homepage established something more important through `SystemMap`:

> a content-specific visual model that gives the page a recognizable ARTIT “brand face” while simultaneously explaining how ARTIT thinks about systems, processes, and relationships.

Task 009 deliberately did not reuse `SystemMap`, which was correct. The lesson from owner review is that “reuse the grammar, not the homepage layout” must NOT be interpreted as removing the visual/modeling dimension of the brand from subsequent important pages.

Task 009A must explore and, if justified, integrate a **page-specific brand-face visual asset** for `/egyedi-fejlesztes/`.

This is not permission to decorate the whole page.

---

# 1. Primary objective

Give `/egyedi-fejlesztes/` one strong, content-justified visual focal point that:

1. makes the page recognizably ARTIT,
2. supports the page’s actual decision-framework message,
3. communicates something useful rather than decorating empty space,
4. uses the established ARTIT systems/process/technical visual language,
5. does NOT clone the homepage `SystemMap`,
6. does NOT turn conceptual alternatives into an unjustified flowchart,
7. does NOT increase visual noise throughout the rest of the page.

The expected outcome is preferably:

> one strong Hero brand-face asset + an otherwise restrained page.

Do not assume this outcome before auditing/exploring it, but treat it as the leading hypothesis.

---

# 2. Source-of-truth audit first

Before designing anything, re-read the relevant current sources:

- `DOC/00-*`
- `DOC/01-*`
- `DOC/02-*`
- `DOC/03-*`
- `DOC/04-*`
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-*`
- `DOC/09-*`
- `DOC/11-*`
- `DOC/12-*`
- `DOC/13-*`
- Task 008 visual-lock notes
- Task 009 implementation/completion notes

Inspect:

- current `/egyedi-fejlesztes/` production rendering,
- `CustomDevelopmentPage.astro`,
- its YAML content,
- `foundation.css`,
- `tokens.css`,
- homepage Hero,
- `SystemMap.astro`.

`SystemMap` is a **grammar/reference audit**, not a component/layout template.

Do not modify anything before understanding why the homepage visual works and why the Task 009 page currently feels visually flat.

---

# 3. Diagnose the current page

Document the diagnosis before implementation.

Specifically assess:

## 3.1 Visual hierarchy

Identify where the current page provides:

- focal points,
- rhythm changes,
- dense vs. quiet areas,
- structural accent,
- visual evidence,
- visual explanation.

Determine why the existing sequence:

> heading → text → whitespace → heading → text → whitespace

becomes monotonous despite individually correct sections.

## 3.2 Brand-face gap

Distinguish between:

- missing decoration,
- missing imagery,
- missing brand identity,
- missing explanatory visual model.

Do not solve the wrong problem by adding arbitrary graphics.

## 3.3 Homepage lesson

Audit what `SystemMap` contributes beyond its literal content.

Possible dimensions to examine:

- recognizable silhouette/composition,
- system/node/relationship vocabulary,
- technical/construction residue,
- controlled accent,
- meaningful interaction,
- density contrast against surrounding typography,
- immediate visual statement of ARTIT’s way of thinking.

Do NOT conclude that all these properties must be copied.

Determine which are genuinely transferable principles.

---

# 4. Lock the semantic job of the new visual before drawing it

The visual must explain the page’s central proposition:

> ARTIT does not begin with “we need custom software.”
> It begins with how the business currently operates and determines what kind of solution actually fits.

The visual may model concepts such as:

- current operating environment,
- existing systems,
- manual steps,
- process requirements,
- friction/mismatch,
- fit,
- integration,
- custom application,
- keeping an existing solution when it already works.

But it must NOT imply false factual precision.

No invented:

- customer systems,
- percentages,
- performance numbers,
- project data,
- architectural specifications,
- product capabilities,
- process guarantees.

---

# 5. Critical semantic constraint

Task 007D.1 established a locked rule:

> Do not draw a route unless there is a route to explain.

Preserve it.

This page contains conceptual alternatives, so do NOT create a decorative decision tree such as:

```text
problem
  |
  +---- custom software
  |
  +---- integration
```

unless the content genuinely describes that deterministic route.

Likewise, do not create an arbitrary funnel, pipeline, workflow, or branching flow merely because it looks technical.

The asset should primarily be a **system/fit model**, not a fake process diagram.

---

# 6. Exploration phase — mandatory before production implementation

Develop at least **3 materially different concepts**.

These must differ in information model/composition, not merely line style.

For each concept document:

- semantic idea,
- what the user learns from it,
- composition,
- relationship to the Hero copy,
- ARTIT grammar used,
- risks,
- responsive behavior,
- whether interaction is justified,
- why it is or is not preferable.

At minimum investigate these families:

## Concept A — Operating Model / Solution Fit

A visual showing a business/process requirement in relation to an existing environment and possible solution types.

Core thought:

> start from the operation; solution follows.

It may contain things analogous to:

- existing system,
- manual step,
- process,
- required capability,
- fit/mismatch,
- existing solution,
- integration,
- custom application.

Do not treat this list as required literal labels.

## Concept B — Fit / Friction Field

A less route-like visual in which current tools/processes and operational needs form a structured field around a central operating requirement.

The distinction between:

- fits,
- friction,
- missing connection,
- special requirement

could be communicated spatially rather than as a flow.

This may be especially useful if Concept A becomes too decision-tree-like.

## Concept C — System Boundary / Adaptation Model

A technical/system-boundary representation showing that the question is not simply “custom vs. ready-made,” but where adaptation belongs:

- process,
- existing systems,
- connections,
- custom layer.

Again: conceptual model, not claimed architecture.

You may develop a stronger fourth concept if the audit reveals one.

---

# 7. Do not immediately implement all concepts

The exploration must be inspectable before committing to production geometry.

Use the repository’s existing visual exploration/testing precedent if one exists.

If no suitable precedent exists, create the smallest temporary exploration surface necessary.

Do not add a permanent public route just for experimentation unless existing project practice explicitly supports that.

The exploration can use simplified labels/content where necessary, but it must remain faithful to approved concepts and must not invent marketing claims.

---

# 8. Selection criteria

Evaluate the concepts against these criteria:

## Semantic clarity
Can a visitor understand something useful without reading it as a literal software architecture?

## ARTIT distinctiveness
Could this plausibly become part of ARTIT’s recognizable visual language?

## Difference from SystemMap
Does it feel related without looking like SystemMap v2?

## Hero compatibility
Does it complement the H1 instead of competing with it?

## Restraint
Can the rest of the page remain quiet after it?

## Responsive viability
Can it meaningfully survive 390px without becoming microscopic spaghetti?

## Localization viability
Can future English labels fit without redesigning the geometry?

## Accessibility
Is the information duplicated/explained sufficiently in surrounding content if the visual is non-interactive?

## Performance
Can it remain static HTML/CSS/SVG unless interaction adds real explanatory value?

---

# 9. Interaction policy

Do NOT add interaction by default.

The homepage SystemMap is interactive because node focus/highlighting contributes to understanding.

For this asset:

- if interaction adds no information, keep it static;
- hover animation alone is not sufficient justification;
- no animation merely to make the page “feel alive”;
- no framework hydration;
- no dependency.

If static SVG/HTML/CSS communicates the model clearly, prefer that.

If interaction is genuinely useful, justify it explicitly before implementing it and preserve keyboard/reduced-motion parity.

---

# 10. Hero composition

Audit whether the current single-column Hero should become an asymmetric composition at suitable desktop widths.

Leading hypothesis:

```text
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  EYEBROW                                                │
│                                                         │
│  Mikor indokolt egyedi       [ PAGE-SPECIFIC            │
│  szoftvert fejleszteni —       SYSTEM / FIT             │
│  és mikor nem?                  VISUAL MODEL ]           │
│                                                         │
│  Lead                                                   │
│  CTA                                                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

This is NOT a required layout.

Test actual balance against:

- H1 line length,
- Hero height,
- header,
- first-section transition,
- 1440/1920 whitespace,
- intermediate widths.

Do not shrink the H1 merely to force a two-column composition.

The visual must earn its space.

---

# 11. Mobile behavior

Do not simply scale a desktop SVG down.

At narrow widths determine whether the correct solution is:

- reflowed geometry,
- simplified geometry,
- changed orientation,
- reduced secondary labels,
- or a deliberately different composition representing the same semantic model.

Preserve meaning, not coordinates.

Do not hide the entire brand-face asset on mobile unless there is a strong accessibility/performance reason.

---

# 12. Relationship to the three justification signals

The existing:

- `01` current solution has been outgrown,
- `02` operation is special,
- `03` systems do not communicate

are important inputs to the page’s argument.

Audit whether the Hero visual can subtly establish concepts that make these three later signals feel like continuation rather than a new disconnected list.

Do NOT physically connect the Hero to the section.

Do NOT automatically turn the three signals into nodes in a process.

Semantic recurrence is enough.

The desired narrative is approximately:

> question → operating/system model → recognizable situations → when custom is not justified → concrete directions.

---

# 13. Rest-of-page restraint

Do not use Task 009A as permission to redesign every section.

Default expectation:

- `When justified`: retain its clean indexed treatment unless the Hero creates a clear reason for a small alignment refinement.
- `When not justified`: retain tonal restraint.
- `Two directions`: retain typography-led conceptual alternatives; NO fork/branch diagram.
- `Approach`: remain quiet.
- `Final CTA`: remain restrained.

After integrating the Hero asset, review the full page again.

Only make secondary changes if the new Hero exposes a genuine imbalance.

Any secondary change must be individually justified in the completion report.

---

# 14. Brand-face principle

If the exploration succeeds, document a broader principle in the design system, but keep it carefully scoped.

Candidate principle:

> Important ARTIT pages may use one page-specific explanatory visual model as a brand-face asset. The model must arise from the page’s actual content and express systems, operation, relationships, fit, evidence, or progression. Reuse the visual language, not the diagram.

Do not prematurely require every future page to have one.

Some pages may be stronger without a visual model.

Likewise:

> `SystemMap` is one expression of ARTIT’s visual modeling language, not the brand asset that every page must reuse.

This distinction is important.

---

# 15. Componentization

Do not create a generic `BrandFace`, `TechnicalDiagram`, `SystemDiagram`, or similar abstraction during exploration.

If the selected visual is implemented, use a page-specific component if separation from `CustomDevelopmentPage.astro` materially improves maintainability.

Only generalize later if multiple real implementations reveal stable shared semantics/API.

Shared CSS primitives/tokens may be reused where genuinely identical.

---

# 16. Content architecture

Preserve Task 009’s YAML/localization architecture.

Do not move marketing copy back into Astro templates.

If the visual requires user-visible labels:

- classify them as content vs. structural/mechanical labels,
- put content labels in YAML,
- follow the existing localization gate,
- do not invent English marketing translation,
- do not silently fall back from missing EN.

Pure technical accessibility/mechanical labels may follow the Task 007B/SystemMap precedent if justified and documented.

---

# 17. No external generic visual assets by default

Do not add:

- stock illustration,
- stock photography,
- generic SaaS icons,
- icon packs,
- 3D blobs,
- abstract gradient artwork,
- decorative screenshots,
- AI-generated illustration,
- random isometric tech graphics.

The target is a native ARTIT visual system asset built from the existing design language.

If the audit produces an exceptional reason to use an external asset, stop and document the recommendation rather than silently adding it.

---

# 18. Visual grammar constraints

Prefer existing tokens and established ARTIT vocabulary:

- Deep Blue-Violet structural accent,
- neutral canvas/surfaces,
- thin technical rules,
- nodes/ports only where semantically justified,
- monospaced/meta labels where appropriate,
- restrained construction residue,
- strong editorial typography.

Avoid:

- neon/cyber aesthetics,
- excessive grids,
- fake dashboards,
- terminal/code clichés,
- glowing nodes,
- gratuitous animation,
- generic enterprise-network diagrams,
- excessive card UI.

The result should still feel like the same site.

---

# 19. Responsive verification

Verify the selected production implementation at minimum at:

- 390px
- 768px
- 950px
- 1100px
- 1440px
- 1920px

Check:

- horizontal overflow,
- Hero balance,
- H1 wrapping,
- visual-label wrapping,
- visual legibility,
- visual-to-copy proportion,
- section rhythm after Hero,
- mobile simplification/reflow,
- navigation behavior.

Use real rendered captures, not CSS reasoning alone.

---

# 20. Accessibility verification

Verify:

- one H1,
- unchanged logical heading order,
- decorative geometry correctly hidden,
- meaningful visual information has a textual equivalent,
- SVG has appropriate accessible treatment,
- no fake controls,
- visible keyboard focus,
- mobile menu unaffected,
- reduced-motion behavior unaffected,
- color is not the sole carrier of meaning.

If interactive:

- full keyboard parity,
- appropriate ARIA state,
- focus behavior,
- reduced-motion fallback.

---

# 21. Performance constraints

Target:

- zero new dependency,
- zero framework hydration,
- preferably zero new client JS,
- SVG/HTML/CSS first.

Measure final built page.

Do not accept a library for a diagram this small.

---

# 22. Homepage regression protection

The Task 008 homepage visual lock remains authoritative.

Do not modify homepage composition or `SystemMap` merely to make the new page easier to implement.

Re-check `/` after changes for:

- overflow,
- SystemMap interaction,
- visual regression,
- locked Problem/Decision/Process grammar.

---

# 23. Documentation

Update relevant documentation with:

1. current-page visual diagnosis,
2. explored concepts,
3. selected concept and rationale,
4. rejected concepts and why,
5. resulting brand-face principle,
6. explicit distinction between reusable visual language and reusable diagram/layout,
7. responsive/accessibility behavior,
8. componentization decision,
9. localization/content-label decision,
10. whether the rest of the page needed any refinement after Hero integration.

At minimum review/update as relevant:

- `DOC/03-*`
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-*`
- `DOC/09-*`
- `DOC/11-*`
- `DOC/12-*`
- `DOC/13-*`

Do not rewrite locked principles unnecessarily.

---

# 24. Validation

Run:

```bash
npm run check
npm run build
```

Report exact results.

Remove generated `dist/` afterward if that remains repository practice.

No commit.
No push.

---

# 25. Completion report

Return one consolidated completion report containing at least:

1. final status,
2. repository baseline,
3. source-of-truth audit,
4. current-page visual diagnosis,
5. transferable homepage/SystemMap principles identified,
6. semantic job assigned to the visual,
7. Concept A summary,
8. Concept B summary,
9. Concept C summary,
10. comparison/selection rationale,
11. selected visual model,
12. rejected approaches and reasons,
13. Hero composition change,
14. desktop visual behavior,
15. mobile visual behavior,
16. interaction decision,
17. relationship to `01–03` justification signals,
18. rest-of-page changes, if any,
19. ARTIT brand-face principle documented,
20. SystemMap-vs-new-asset distinction,
21. componentization decision,
22. YAML/content changes,
23. localization/EN-gate status,
24. accessibility result,
25. responsive verification,
26. performance/client-JS impact,
27. homepage regression status,
28. files changed,
29. documentation updated,
30. `npm run check`,
31. `npm run build`,
32. bugs found/fixed,
33. deviations,
34. repository state,
35. recommendation for owner visual review / next task boundary.

End with:

> **CUSTOM DEVELOPMENT BRAND-FACE EXPLORATION COMPLETE — READY FOR OWNER VISUAL REVIEW**
