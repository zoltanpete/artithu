# Task 011A --- Tardify Brand-Face / Product Specimen Exploration

## Status

**READY FOR IMPLEMENTATION**

## Context

Task 011 implemented `/tardify/` correctly at the content, architecture,
localization, accessibility, performance, and routing levels.

Owner visual review did **not** approve the page as visually finished.

The problem is not incorrect typography or spacing. The problem is that
the page has returned to a repeated pattern of:

> large heading → short paragraph → whitespace → surface change → large
> heading → short paragraph

This makes the page calm but visually inert. The reused `.tardify-proof`
construction line is not strong enough by itself to create a page-level
focal point or recognizable product identity.

This is closely related to the issue previously found on
`/egyedi-fejlesztes/` before Task 009A, but the solution must **not** be
to copy `OperatingFitField`, `SystemMap`, or `LivingSystemField`.

Task 011A is therefore a **focused art-direction correction**, not a
content rewrite and not a new page implementation.

------------------------------------------------------------------------

# 1. Objective

Give `/tardify/` a distinctive ARTIT product-story identity by finding
and implementing **one meaningful Tardify-specific brand-face /
product-specimen treatment**.

The result should make the page feel like:

> **ARTIT presenting a real product it owns and continues to develop**

rather than:

> a generic SaaS landing page

or:

> a sequence of well-typeset editorial sections.

The new visual treatment must create a genuine focal point and density
contrast while preserving Task 011's approved content argument.

------------------------------------------------------------------------

# 2. Scope

Primary scope:

-   `/tardify/` Hero and its immediate visual composition;
-   one Tardify-specific brand-face / product-specimen exploration;
-   any minimal downstream rhythm adjustment that becomes necessary
    after Hero integration.

Out of scope unless a real regression requires correction:

-   rewriting the page argument;
-   redesigning navigation;
-   changing `/`;
-   changing `/egyedi-fejlesztes/`;
-   changing `/munkaink/`;
-   changing the Task 011 CTA strategy;
-   activating localization;
-   inventing Tardify facts;
-   building a full product-tour section;
-   creating fake product UI.

------------------------------------------------------------------------

# 3. Preserve Task 011's approved content architecture

The existing five-part argument remains the baseline:

1.  Hero
2.  Why ARTIT has its own product
3.  Same standard
4.  Relationship to custom development
5.  Final CTA

Do **not** restructure the page merely to create visual variety.

First solve the missing focal point.

After integration, review the full page. Only make a secondary rhythm
adjustment if the new Hero exposes a concrete imbalance.

------------------------------------------------------------------------

# 4. Mandatory source-of-truth audit

Before designing, re-read the current relevant sources fresh:

-   DOC/00--13 as relevant;
-   Task 008 visual lock;
-   Task 009 / 009A;
-   Task 010 / 010A;
-   Task 011 and its completion notes.

Inspect in the real browser:

-   `/`
-   `/egyedi-fejlesztes/`
-   `/munkaink/`
-   `/tardify/`

Inspect source:

-   `SystemMap.astro`
-   `OperatingFitField.astro`
-   `LivingSystemField.astro`
-   Tardify page/component/YAML
-   `.tardify-proof` implementation
-   `foundation.css`
-   `tokens.css`
-   relevant content schemas/localization helpers.

The goal is to understand the existing visual language **without
treating any existing diagram as a template**.

------------------------------------------------------------------------

# 5. Reconfirm the visual diagnosis

Document the current `/tardify/` problem before editing.

Specifically evaluate:

-   Hero focal strength;
-   copy/visual balance;
-   density contrast;
-   section-to-section rhythm;
-   whether `.tardify-proof` currently functions as a true visual object
    or merely a construction accent;
-   whether the page is recognizably ARTIT without relying only on
    typography/accent color;
-   whether the page feels like a product story;
-   whether the large empty desktop Hero territory is earning its space.

Do not solve the problem before stating it clearly.

------------------------------------------------------------------------

# 6. Core semantic job of the new visual

The visual must communicate something close to:

> **This is an owned software product --- a real thing that is built,
> maintained, and evolved under the same engineering discipline ARTIT
> applies to client systems.**

It must **not** claim or imply:

-   exact age;
-   number of versions;
-   number of customers;
-   number of modules;
-   usage volume;
-   release frequency;
-   growth;
-   uptime;
-   adoption;
-   chronology;
-   feature completeness;
-   specific architecture;
-   specific integrations;

unless those facts are separately approved in the repository.

The visual should communicate **product-ness, ownership, continuity,
construction, and evolution**, not fabricated product data.

------------------------------------------------------------------------

# 7. Product evidence audit --- revisit before abstraction

Task 011 found no approved screenshot evidence.

Re-check this status.

Explicitly report:

-   whether real Tardify screenshots/assets now exist in the ARTIT
    repository;
-   whether their publication status is approved;
-   whether `tardify.hu` contains public imagery that may legitimately
    be reused on ARTIT.hu;
-   whether repository documentation authorizes such reuse.

Do **not** assume that publicly visible material on another site is
automatically approved for copying into this project.

Do **not** use sibling-repository product details unless ARTIT's
source-of-truth documentation approves them.

If real approved evidence exists, it should materially influence the
concept exploration.

If not, continue with an honest abstract product-specimen direction.

------------------------------------------------------------------------

# 8. Art-direction thesis

Explore a different visual family from the three existing page models.

Existing semantic families:

-   `SystemMap` = connected transformation / operational relationship;
-   `OperatingFitField` = fit and friction around operation;
-   `LivingSystemField` = ambient persistence / system living in
    operation.

Task 011A should investigate:

> **Product specimen / engineered artifact**

This is not another system map.

The visual language may draw from:

-   specification sheets;
-   engineering plates;
-   layered surfaces;
-   crop/registration marks;
-   product fragments;
-   revision-like layering without numeric chronology;
-   structural labels;
-   technical framing;
-   partial off-canvas geometry;
-   assembled surfaces.

But every device must serve the product-story meaning.

------------------------------------------------------------------------

# 9. Mandatory real concept exploration

Build and inspect at least **three meaningfully different real rendered
concepts**.

Do not select from prose or static CSS reasoning alone.

Use one consolidated comparison route if efficient, e.g.:

`/art-direction/011a-tardify-brand-face-concepts`

Mark exploration routes `noindex`.

Screenshot concepts at least at representative desktop width; inspect
mobile feasibility before selection.

------------------------------------------------------------------------

# 10. Concept A --- Product Specimen Plate

Explore a large engineered product-object / specimen-sheet composition.

Possible characteristics:

-   one dominant rectangular or partially cropped product surface;
-   technical frame/rules;
-   registration/crop marks;
-   sparse structural annotations;
-   restrained layering;
-   one clear Tardify/product identifier;
-   deliberate off-canvas or partial-edge treatment.

The object should feel **built**, not illustrated.

It must not resemble:

-   a browser mockup;
-   a fake dashboard;
-   a generic card;
-   a pricing panel;
-   a wireframe pretending to be real UI.

### Question to test

Does this make Tardify feel like a tangible owned product without
fabricating product functionality?

------------------------------------------------------------------------

# 11. Concept B --- Layered Product Surface

Explore a composition where one product object is represented through
layered or offset surfaces.

The semantic idea:

> the same owned product remains one thing while being continually
> worked on and evolved.

Possible characteristics:

-   two or three offset planes;
-   partial overlap;
-   technical edge marks;
-   sparse shared anchor points;
-   no arrows;
-   no timeline;
-   no version numbers;
-   no increasing size sequence.

### Critical constraint

The layers must **not** read as:

-   Version 1 → Version 2 → Version 3;
-   growth;
-   stack of feature cards;
-   browser windows;
-   chronological steps.

### Question to test

Can evolution/continued development be communicated without inventing
chronology?

------------------------------------------------------------------------

# 12. Concept C --- Product Fragment / Evidence Window

Explore a more editorial/specimen direction where the Hero contains a
cropped "window" into the product identity rather than a complete
diagram.

If approved real screenshot material exists, this is the strongest place
to test it.

If no screenshot is approved, the fragment must remain abstract and
explicitly non-UI.

Possible characteristics:

-   large crop;
-   strong asymmetry;
-   technical boundary;
-   a few structural labels;
-   partial product mark;
-   negative space;
-   visible construction residue.

### Question to test

Can a partial artifact create more presence than a complete explanatory
diagram?

------------------------------------------------------------------------

# 13. Additional concepts

If the audit suggests a stronger fourth concept, build it.

Do not force A/B/C to win.

The selected direction must be the strongest rendered answer to the
page's actual problem.

------------------------------------------------------------------------

# 14. Rejection tests

Reject any concept that reads primarily as:

-   another node diagram;
-   another radial field;
-   another SystemMap;
-   a network;
-   a flowchart;
-   a branching decision tree;
-   a timeline;
-   a growth chart;
-   a generic SaaS dashboard;
-   a fake browser;
-   a feature grid;
-   a loading skeleton;
-   abstract decoration with no product meaning.

Also reject a concept if its explanation is more convincing than the
rendered result.

------------------------------------------------------------------------

# 15. Hero composition target

The current text-only Hero is too passive on desktop.

Test an **asymmetric two-part Hero** at desktop widths:

-   copy remains the semantic primary;
-   product specimen becomes the visual focal counterweight;
-   visual should occupy meaningful territory;
-   neither side should feel like an afterthought.

Do not automatically reuse `/egyedi-fejlesztes/`'s `3fr 2fr` or
`/munkaink/`'s `2fr 1fr`.

Determine the ratio from the selected visual.

The H1 should remain strong and readable.

The `Tardify.hu →` CTA remains unless the audit reveals a real issue
with the existing approved strategy.

------------------------------------------------------------------------

# 16. Mobile composition

Do not merely scale down a complex desktop specimen.

Design a deliberate mobile composition.

Possible approaches:

-   simplified crop;
-   reduced layer count;
-   different aspect ratio;
-   reordered copy → CTA → specimen;
-   fewer technical marks.

Preserve semantic identity while removing detail that becomes noise.

Explicitly check:

-   label collisions;
-   illegible microtext;
-   clipping;
-   accidental horizontal scrolling;
-   specimen overpowering the Hero copy;
-   excessive Hero height.

------------------------------------------------------------------------

# 17. Relationship to `.tardify-proof`

Task 011 graduated `.tardify-proof` into shared grammar.

Do not remove it merely because a stronger Hero is added.

Instead decide explicitly:

### Option 1

Hero gets the new specimen; `.tardify-proof` remains a quiet downstream
structural echo.

### Option 2

The new specimen evolves directly from `.tardify-proof`, making the Hero
and downstream section members of the same product-specific grammar.

### Option 3

The new Hero makes the downstream `.tardify-proof` redundant, in which
case simplify the downstream use --- but only if the full-page render
proves duplication.

Do not mechanically repeat the same large visual twice.

------------------------------------------------------------------------

# 18. Downstream section rhythm

After Hero integration, inspect the full page again.

The section beginning:

> "Ugyanaz a mérce vonatkozik a sajátunkra is."

may remain visually quiet **if the Hero now supplies the missing density
peak**.

Do not automatically decorate it.

Only adjust it if the new full-page composition still shows a concrete
rhythm problem.

The goal is contrast:

> strong focal Hero → quieter argument → restrained proof echo →
> relationship → close

not:

> every section competing for attention.

------------------------------------------------------------------------

# 19. ARTIT visual grammar

Reuse vocabulary where useful:

-   Deep Blue-Violet structural accent;
-   thin rules;
-   mono technical labels;
-   construction marks;
-   restrained tonal surfaces;
-   precise geometry;
-   partial-edge/specification treatment;
-   typography hierarchy.

But introduce a **new semantic composition**, not merely new SVG
geometry.

The brand should increasingly feel like a system with multiple
expressions, not a library of repeated diagrams.

------------------------------------------------------------------------

# 20. Content discipline

Task 011's copy remains the baseline.

Do not add product marketing claims merely to feed the visual.

Do not invent:

-   module names;
-   feature labels;
-   release labels;
-   "active" status badges;
-   fake technical IDs;
-   fake version strings;
-   dates;
-   metrics.

If structural micro-labels are needed, prefer approved/categorical
vocabulary such as:

-   `SAJÁT TERMÉK`
-   `TARDIFY`
-   neutral structural terms already present in approved copy/docs.

Any newly composed label must be disclosed in the completion report.

------------------------------------------------------------------------

# 21. Interaction

Static by default.

Do not add hover, focus, animation, tabs, carousel, product tour,
parallax, or JS merely to make the object feel alive.

Interaction is justified only if it reveals meaningful approved
information.

Expected result: **zero new client JS**.

------------------------------------------------------------------------

# 22. Componentization

If the selected visual deserves its own component, give it a semantic
Tardify-specific name.

Examples of acceptable direction:

-   `TardifySpecimen.astro`
-   `ProductSpecimen.astro` only if genuinely justified beyond this
    page.

Prefer page-specific semantics.

Do **not** create:

-   `BrandFace.astro`
-   `VisualModel.astro`
-   `TechnicalDiagram.astro`

Do not refactor the existing three brand-face components into a shared
abstraction during this task.

------------------------------------------------------------------------

# 23. YAML / schema

If the selected visual requires labels or accessibility text:

-   place content in YAML;
-   use existing localization architecture;
-   classify technical/categorical vocabulary correctly;
-   keep marketing copy gated;
-   do not activate English routes.

Do not create schema fields for visual content that the selected concept
does not actually need.

------------------------------------------------------------------------

# 24. Accessibility

For the selected specimen:

-   decide whether it is meaningful or decorative;
-   if meaningful, provide concise accessible meaning;
-   if decorative, hide it correctly;
-   do not expose meaningless technical micro-labels as noisy
    screen-reader content;
-   maintain heading order;
-   visible focus;
-   CTA keyboard accessibility;
-   no color-only meaning.

If a real screenshot is used, alt text must describe what is actually
visible, not make product claims.

------------------------------------------------------------------------

# 25. Responsive verification

Verify in real browser:

-   390
-   700
-   768
-   900
-   950
-   1100
-   1440
-   1920px

Pay special attention to the breakpoint where the Hero becomes
two-column.

Check:

-   overflow;
-   specimen clipping;
-   intended partial-edge behavior vs accidental clipping;
-   H1 wrapping;
-   CTA position;
-   visual balance;
-   label readability;
-   Hero height;
-   section transition after Hero.

------------------------------------------------------------------------

# 26. Performance

Preserve the site's architecture:

-   zero new dependency;
-   zero framework hydration;
-   zero new JS unless explicitly justified;
-   inline/static SVG preferred for abstract specimen;
-   optimized local asset if real imagery is used;
-   no external fonts.

Report actual built-page script impact.

------------------------------------------------------------------------

# 27. Regression protection

Re-check:

## `/`

Homepage visual lock unchanged; SystemMap keyboard interaction intact.

## `/egyedi-fejlesztes/`

OperatingFitField desktop/mobile unchanged, including the fixed
`MŰKÖDÉS` label separation.

## `/munkaink/`

Task 011 LivingSystemField dot-emphasis polish unchanged; core remains
dominant.

## `/tardify/`

New Hero/specimen works at all target widths and does not disturb Task
011's content/CTA logic.

Also re-check `/design-foundation` and `/404` if shared CSS is modified.

------------------------------------------------------------------------

# 28. Documentation

Update relevant docs, especially:

-   DOC/03
-   DOC/07
-   DOC/08
-   DOC/09
-   DOC/11
-   DOC/12
-   DOC/13

Document:

-   why Task 011 was visually reopened;
-   current-page diagnosis;
-   product-evidence re-audit;
-   all rendered concepts;
-   rejection reasons;
-   selected brand-face direction;
-   relationship to `.tardify-proof`;
-   screenshot decision;
-   componentization;
-   localization/accessibility;
-   responsive findings;
-   regression results.

Add a design-system principle equivalent to:

> **"No new diagram" does not mean "no focal visual." A page may need a
> strong product artifact rather than an explanatory diagram.**

Phrase it consistently with the existing DOC/07 language.

------------------------------------------------------------------------

# 29. Validation

Run:

``` bash
npm run check
npm run build
```

Report exact results.

Clean `dist/` according to established workflow.

No commit. No push.

------------------------------------------------------------------------

# 30. Scope guard

Do not:

-   rewrite the Tardify story;
-   invent product facts;
-   invent UI;
-   invent screenshots;
-   use unapproved sibling-repository facts;
-   create a generic SaaS Hero;
-   add feature cards;
-   add metrics;
-   add a timeline;
-   add a fourth node/radial system diagram;
-   activate English;
-   activate language switcher;
-   redesign header/navigation;
-   redesign unrelated pages;
-   refactor all brand-face components;
-   add dependencies;
-   add gratuitous JS.

------------------------------------------------------------------------

# 31. Acceptance criteria

Task 011A is complete only if:

1.  current visual weakness is documented from a real render;
2.  product evidence is re-audited;
3.  at least 3 materially different concepts are rendered;
4.  concepts are judged visually, not only theoretically;
5.  selected treatment communicates owned product / engineered artifact;
6.  it does not imply unapproved facts;
7.  it is visibly distinct from SystemMap;
8.  it is visibly distinct from OperatingFitField;
9.  it is visibly distinct from LivingSystemField;
10. it does not resemble generic SaaS UI;
11. desktop Hero has a meaningful focal counterweight;
12. mobile is intentionally composed;
13. downstream rhythm is re-reviewed after integration;
14. `.tardify-proof` relationship is explicitly resolved;
15. zero invented product UI/facts;
16. localization gate remains intact;
17. accessibility is clean;
18. zero unintended client-JS increase;
19. all target widths are overflow-free;
20. prior pages remain regression-free;
21. `npm run check` passes;
22. `npm run build` passes;
23. documentation is reconciled;
24. no commit/push occurs.

------------------------------------------------------------------------

# 32. Required completion report

Report at minimum:

1.  final status;
2.  repository baseline;
3.  reason Task 011 was reopened;
4.  current `/tardify/` visual diagnosis;
5.  source-of-truth audit;
6.  product-evidence re-audit;
7.  screenshot/publication status;
8.  semantic job of the new visual;
9.  Concept A;
10. Concept B;
11. Concept C;
12. any additional concept;
13. rendered comparison findings;
14. selected direction;
15. rejected directions and exact reasons;
16. final Hero composition;
17. desktop behavior;
18. mobile behavior;
19. relationship to `.tardify-proof`;
20. downstream rhythm decision;
21. ARTIT grammar reused;
22. visual patterns deliberately not reused;
23. new product-specific grammar introduced;
24. componentization decision;
25. YAML/schema changes;
26. localization/EN gate;
27. accessibility result;
28. responsive verification;
29. performance/client-JS impact;
30. `/` regression status;
31. `/egyedi-fejlesztes/` regression status;
32. `/munkaink/` regression status;
33. files changed;
34. docs updated;
35. `npm run check`;
36. `npm run build`;
37. bugs found/fixed;
38. deviations;
39. remaining content/asset gates;
40. repository state;
41. recommendation / owner-review status.

End with:

> **TARDIFY PRODUCT-SPECIMEN EXPLORATION COMPLETE --- READY FOR OWNER
> VISUAL REVIEW**

unless a real unresolved implementation issue prevents that status.

------------------------------------------------------------------------

# Final intent

The page does **not** need another explanatory diagram.

It needs a visual object strong enough to make Tardify feel like a real,
owned, engineered product.

The target distinction is:

> `SystemMap` explains relationships.\
> `OperatingFitField` explains fit.\
> `LivingSystemField` expresses persistence.\
> **Tardify's specimen should express product-ness.**

Do not decorate the page.

Give it an artifact.
