# Task 010 — `/munkaink/` Evidence Hub: Content Architecture + Art Direction + Implementation

## Context

Task 008 formally locked the approved ARTIT homepage visual baseline.

Task 009 implemented `/egyedi-fejlesztes/` as the first pillar page. Owner review found the initial implementation structurally correct but visually too flat and lacking a page-specific ARTIT brand face.

Task 009A therefore established an important additional principle:

> Important ARTIT pages may use one page-specific explanatory visual model when the content genuinely benefits from it. Reuse the ARTIT visual language — nodes, ports, technical rules, restrained accent, density contrast, structural relationships — but do not clone an existing diagram merely to create decoration.

Task 009A's selected `OperatingFitField` successfully gave `/egyedi-fejlesztes/` its own identity while remaining part of the same design system.

The owner has visually approved the Task 009A direction with one small known mobile geometry issue described below.

The next page is:

`/munkaink/`

This is the ARTIT **evidence / work hub**.

Its job is not to become a generic portfolio gallery or a collection of marketing case-study cards. It should establish how ARTIT demonstrates that the systems it builds survive real business operation over time.

Detailed Case Study 01/02 facts remain gated. Do not invent customer names, industries, company sizes, dates, metrics, outcomes, screenshots, quotes, or longevity numbers that have not been approved.

---

# Part 0 — Small Task 009A mobile polish

Before beginning the main Task 010 work, fix the known mobile issue in `OperatingFitField`.

On the mobile composition, the center label:

`MŰKÖDÉS`

currently overlaps / visually collides with the outgoing connector geometry, reducing legibility and making the center area unnecessarily noisy.

Fix the **mobile-only geometry or label placement** so that:

- `MŰKÖDÉS` has clear visual separation from the connector lines;
- the label is immediately readable;
- the relationship between the center anchor and surrounding nodes remains understandable;
- the approved desktop composition remains unchanged;
- the selected Fit / Friction Field concept remains unchanged;
- no new decorative element is introduced merely to mask the collision.

Treat this as a local polish correction, not a redesign.

Verify at minimum at 390px and one intermediate mobile/tablet width.

Document the fix briefly in the relevant implementation/verification documentation. Do not create a separate task for it.

---

# Part 1 — Re-establish the source of truth

Before designing `/munkaink/`, read the current relevant project documentation fresh.

At minimum inspect:

- `DOC/00`
- `DOC/01`
- `DOC/02`
- `DOC/03`
- `DOC/04`
- `DOC/07`
- `DOC/08`
- `DOC/09`
- `DOC/10`
- `DOC/11`
- `DOC/12`
- `DOC/13`
- Task 008 visual-lock notes
- Task 009 completion notes
- Task 009A completion notes

Also inspect the current implementations of:

- `/`
- `/egyedi-fejlesztes/`
- `Homepage.astro`
- `CustomDevelopmentPage.astro`
- `SystemMap.astro`
- `OperatingFitField.astro`
- current navigation/header
- content schemas
- locale helpers
- `foundation.css`
- `tokens.css`

Use the homepage and `/egyedi-fejlesztes/` as **visual-language references, not page templates**.

Preserve the Task 008 rule:

> Reuse the grammar, not the homepage layout.

And the Task 009A extension:

> A page-specific brand face must explain something real about that page. It is not a decorative requirement.

---

# Part 2 — Perform a strict `/munkaink/` content/evidence audit first

Before implementation, establish exactly what is currently approved for this page.

Determine and document:

1. the page role defined by the IA;
2. the primary user question;
3. all approved Hungarian copy relevant to `/munkaink/`;
4. approved Case Study 01/02 information;
5. gated Case Study information;
6. existing working titles;
7. existing relationships between Case Study 01/02 and the custom-development directions;
8. approved longevity / product-history claims, if any;
9. available screenshots/assets and their approval status;
10. intended internal links;
11. intended CTA(s);
12. SEO copy availability;
13. English-copy status.

**Do not turn working assumptions into facts.**

If documentation contains only:

- Case Study 01 working title;
- Case Study 02 working title;

then those are the only case-specific facts available.

Do not infer customer sector, size, duration, results, implementation scope, technology stack, or business impact.

---

# Part 3 — Define the page's argument before its layout

Determine what `/munkaink/` should actually communicate with the evidence currently available.

The page must not pretend to be a complete traditional portfolio if the evidence required for that presentation is still gated.

Explore whether its strongest current role is instead something closer to:

**Evidence framework / proof index**

— showing what kinds of systems ARTIT builds, how those examples relate to the problems described elsewhere on the site, and what ARTIT considers meaningful evidence.

Possible underlying thesis:

> Real software is proven by how it becomes part of real business operation, not by how impressive its launch presentation looks.

This wording is illustrative only. Do not publish it unless supported or appropriately composed from approved source material.

Determine the final argument from the documentation.

---

# Part 4 — Art direction must precede final page implementation

Do **not** repeat Task 009's sequence of building a structurally correct typography-only page and then discovering that it has no visual identity.

Before final implementation, determine the page's visual thesis.

Ask:

> What is the visual thing that makes `/munkaink/` recognizably ARTIT and specifically an evidence page?

Do not assume the answer must be an SVG diagram.

Explore the best representation for **evidence / systems in operation / records / continuity / relationship between problem and delivered system**.

Potential visual families may include, but are not limited to:

- evidence record;
- system dossier;
- technical archive/index;
- operating-history trace;
- proof ledger;
- system lineage;
- structured case index;
- another model justified by the actual content.

These are conceptual prompts, not prescribed designs.

---

# Part 5 — Explore at least three genuine art-direction concepts

Create at least **three meaningfully different visual/compositional concepts** before choosing the final direction.

They must differ in semantic model, not merely border radius or layout.

For each concept document:

- what it represents;
- why it belongs specifically on `/munkaink/`;
- what real information it communicates;
- which locked ARTIT visual principles it uses;
- what misleading interpretation it could create;
- responsive implications;
- whether it requires unavailable/gated content.

Build inspectable prototypes where necessary, following the existing art-direction exploration precedent.

Compare them visually in a real browser.

Do not select based solely on CSS reasoning.

---

# Part 6 — Explicitly avoid generic portfolio design

The following should be treated as warning signs:

- generic image cards;
- equal-sized SaaS feature cards;
- logo walls;
- fake client logos;
- fake metrics;
- testimonial placeholders presented as real;
- decorative dashboards;
- stock imagery;
- generic "Our Projects" grids;
- gradients/glows added simply to create excitement;
- copying the homepage SystemMap;
- copying `OperatingFitField`;
- turning every case into the same bordered card.

ARTIT's evidence language should feel closer to **records, systems, operation and accumulated proof** than an agency showcase.

---

# Part 7 — Determine the correct page architecture

After the content and art-direction audits, design the page architecture.

Do not assume a particular section count.

Possible semantic needs include:

- page proposition;
- explanation of what ARTIT considers meaningful evidence;
- Case Study 01;
- Case Study 02;
- relationship to the two custom-development directions;
- evidence limitations / current proof state if appropriate;
- long-term system thinking;
- CTA.

Only include sections justified by approved content.

Do not stretch two working case titles into an artificially long portfolio page.

Whitespace is preferable to fabricated content.

---

# Part 8 — Case Study presentation

Design Case Study 01/02 so that their **current limited evidence state is honest but intentional**.

If only working titles are approved, do not create empty metadata rows such as:

`INDUSTRY — TBD`  
`YEAR — TBD`  
`RESULT — TBD`

unless the project documentation explicitly calls for visible placeholders.

The page should look intentionally designed with the evidence we have today, not like a CMS waiting for missing fields.

At the same time, its architecture should be able to accept richer future evidence later:

- customer identity;
- context;
- problem;
- intervention;
- screenshots;
- outcome;
- longevity;
- metrics;
- quotes;

without requiring a complete redesign.

Document how the selected structure expands when those gates open.

---

# Part 9 — Relationship to `/egyedi-fejlesztes/`

The evidence hub must connect naturally to the decision framework already implemented.

The existing semantic mapping is important:

- Business Applications ↔ Case Study 01
- System Integration / Automation ↔ Case Study 02

Preserve this relationship if supported by the source documentation.

However, do not physically draw connecting routes merely because there is a conceptual relationship.

Task 008 remains locked:

> Do not draw a route unless there is a route to explain.

Membership or association may be communicated through repeated grammar, labels, indexing or placement.

---

# Part 10 — Decide whether `/munkaink/` needs a page-specific brand-face asset

Make an explicit decision.

If the page needs one, it must explain evidence or operating history.

If the selected evidence composition itself already creates sufficient ARTIT identity, **do not add a separate Hero diagram just because `/egyedi-fejlesztes/` has one.**

This distinction is important.

The Task 009A lesson is:

> important pages may have an explanatory visual model;

not:

> every page needs an SVG beside its H1.

Prefer one strong semantic visual system over multiple decorative technical devices.

---

# Part 11 — Surface and density rhythm

Audit the entire page as one composition.

The final result should have deliberate changes in:

- density;
- surface;
- typography;
- evidence weight;
- whitespace;
- technical detail.

Avoid:

`heading → paragraph → whitespace → heading → paragraph → whitespace`

repeating uniformly down the page.

But also avoid adding visual noise merely to solve that problem.

The page should feel like ARTIT:

- restrained;
- engineered;
- precise;
- mature;
- technical without being sci-fi;
- confident without marketing spectacle.

---

# Part 12 — Componentization

Only extract reusable components when justified by actual reuse.

Do not create generic abstractions such as:

- `BrandFace`
- `TechnicalDiagram`
- `EvidenceCard`
- `CaseCard`

solely because they sound reusable.

A `/munkaink/`-specific component is acceptable if its semantics are genuinely page-specific.

If an existing visual grammar now reaches a second or third legitimate usage and abstraction becomes warranted, document the evidence before extracting it.

---

# Part 13 — Content architecture and YAML

Keep marketing/content copy in the content layer.

Do not move page copy into Astro templates.

Extend the existing content architecture according to the actual page shape.

Prefer a dedicated schema if `/munkaink/` has meaningfully different structure rather than forcing it into an unrelated existing page schema.

Preserve stable semantic IDs where future case expansion will benefit from them.

Do not encode layout-specific arbitrary values into YAML unless they are genuine content semantics.

---

# Part 14 — Localization readiness and language-switcher boundary

The site localization architecture must remain ready for future activation.

Currently:

- Hungarian is the published locale;
- approved English marketing copy is still gated;
- `/en/` routes must not be silently created;
- Hungarian copy must not be used as an English fallback;
- the language switcher must not link users to incomplete/non-existent localized pages.

For Task 010:

1. keep all new marketing fields compatible with the existing `LocalizedGated` architecture;
2. do not invent English marketing translations;
3. do not create `/en/munkaink/`;
4. do not activate the language switcher yet;
5. verify that the new route/page architecture can participate cleanly in future locale routing;
6. record any additional requirement discovered for eventual language-switcher activation.

The language switcher itself is intentionally deferred to a later **Localization Activation** task, once approved English marketing copy exists.

That later task should cover as one coherent activation:

- approved EN content population;
- `/en/` routes;
- localized internal navigation;
- language-switcher UI;
- `alternateLocalePath`;
- locale persistence/expected switching behavior;
- canonical URLs;
- `hreflang`;
- sitemap behavior;
- localized metadata;
- 404/fallback behavior;
- responsive header behavior;
- accessibility;
- cross-locale regression testing.

Do not partially activate this infrastructure in Task 010.

---

# Part 15 — Navigation

Verify that `/munkaink/` resolves correctly from the existing navigation.

Do not redesign the global navigation unless a real integration issue is found.

No language-switcher implementation in this task.

---

# Part 16 — SEO

Use only defensible page-specific title/description content.

If exact SEO copy does not exist, compose restrained metadata from approved page content and disclose that in the completion report.

Do not add unsupported structured data.

If Case Study pages do not yet exist, do not expose fake detail URLs.

---

# Part 17 — Accessibility

Verify at minimum:

- exactly one `<h1>`;
- logical heading hierarchy;
- semantic links;
- no fake controls;
- keyboard-visible focus;
- decorative visual elements hidden appropriately;
- meaningful visuals labeled appropriately;
- no information encoded through color alone;
- reduced-motion behavior where relevant;
- mobile navigation remains keyboard-accessible.

Any new evidence visualization must remain understandable without relying solely on geometry or color.

---

# Part 18 — Responsive behavior

Verify in a real browser at minimum:

- 390px
- 768px
- 950px
- 1100px
- 1440px
- 1920px

Do not merely scale desktop visual compositions down.

If a complex evidence/brand-face composition requires a separate mobile arrangement, design it intentionally as Task 009A did.

Check:

- overflow;
- text wrapping;
- evidence readability;
- visual hierarchy;
- spacing rhythm;
- header/navigation;
- CTA;
- any technical labels.

---

# Part 19 — Performance

Preserve the current low-JS architecture.

Prefer HTML/CSS/SVG.

Do not add client-side JavaScript unless the content genuinely requires interaction.

If interaction is proposed, first explain what information is unavailable without it.

Decorative animation is not sufficient justification.

Report the final JS impact explicitly.

---

# Part 20 — Homepage and `/egyedi-fejlesztes/` regression

After implementation, re-check both existing approved pages.

For `/`:

- Task 008 visual lock must remain intact;
- SystemMap behavior must remain intact;
- removed ambiguous connectors must remain absent.

For `/egyedi-fejlesztes/`:

- Task 009A approved Hero composition must remain intact;
- desktop `OperatingFitField` must remain unchanged;
- the mobile `MŰKÖDÉS` collision must be fixed;
- no new regression introduced.

---

# Part 21 — Documentation

Update all documentation materially affected by the task.

At minimum consider:

- page/content architecture;
- design-system / art-direction rules;
- component inventory;
- source structure;
- localization readiness;
- asset strategy;
- verification notes;
- content/evidence gates.

Record the selected `/munkaink/` evidence grammar clearly enough that future case-study pages can reuse its principles without blindly cloning its layout.

---

# Part 22 — Required completion report

Return a structured completion report containing at minimum:

1. final status;
2. repository baseline;
3. Task 009A mobile-fix result;
4. source-of-truth audit;
5. `/munkaink/` page role;
6. primary user question;
7. approved content found;
8. gated evidence found;
9. Case Study 01 approved facts;
10. Case Study 02 approved facts;
11. art-direction problem statement;
12. Concept A;
13. Concept B;
14. Concept C;
15. visual comparison findings;
16. selected direction and rationale;
17. rejected directions and reasons;
18. final page architecture;
19. Hero treatment;
20. page-specific brand-face decision;
21. evidence/case-study treatment;
22. future richer-case expansion strategy;
23. relationship to `/egyedi-fejlesztes/`;
24. locked ARTIT grammar reused;
25. patterns deliberately not reused;
26. new visual grammar introduced;
27. density/surface rhythm audit;
28. componentization decision;
29. YAML/schema changes;
30. localization/English-gate status;
31. language-switcher readiness findings;
32. navigation integration;
33. SEO implementation/gaps;
34. accessibility verification;
35. responsive verification;
36. performance/client-JS impact;
37. homepage regression status;
38. `/egyedi-fejlesztes/` regression status;
39. files changed;
40. documentation updated;
41. `npm run check`;
42. `npm run build`;
43. bugs found/fixed;
44. deviations;
45. remaining content/asset gates;
46. repository state;
47. recommended next task boundary.

End with a concise owner-review status statement.

---

## Scope guard

Do not:

- invent Case Study facts;
- invent customer identities;
- create fake screenshots;
- create fake metrics;
- create English marketing copy;
- activate `/en/`;
- implement the language switcher;
- redesign the global header;
- redesign the homepage;
- redesign the approved `/egyedi-fejlesztes/` page beyond the named mobile geometry fix;
- implement the gated child pages;
- add generic visual decoration simply to make `/munkaink/` look busier;
- commit or push unless explicitly instructed.

**Goal:** `/munkaink/` should establish ARTIT's evidence language with the same strength that the homepage established the overall brand grammar and Task 009A gave `/egyedi-fejlesztes/` its own explanatory face — while remaining completely honest about the evidence that is and is not currently approved.
