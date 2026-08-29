# Task 016 --- Case Study Art Direction + Production Implementation

## 1. Task intent

**Type:** production implementation + art direction + evidence
integration\
**Primary goal:** turn the validated Case Study 01 and Case Study 02
evidence architecture from Task 015 into two production-quality,
evidence-led ARTIT case-study pages, integrate them coherently into the
existing HU site journey, and use the real anonymized screenshots as
primary proof.

Task 015 is the source of truth for factual boundaries. Do not reopen
the evidence inventory unless the actual screenshot files reveal a
privacy/factual problem.

This task may begin once the four screenshot files are present in the
repository.

------------------------------------------------------------------------

## 2. Newly owner-approved decision

The Case Study 01 title is now approved:

> **Egy üzemi rendszer, amely egy évtizede teszi a dolgát.**

Treat this as owner-approved HU case-study title.

Update all existing live occurrences of the obsolete/inaccurate CS01
framing:

> "Egy üzleti rendszer, amely együtt nőtt a vállalkozással."

where those occurrences refer to this case.

Do not mechanically replace unrelated prose.

Case Study 02's working title remains:

> **A rendszer, amely több ERP-t is túlélt.**

Audit it against the Task 015 evidence architecture. It may remain if it
is accurate and editorially strong. If exact public wording around "több
ERP" is still considered gated, preserve the concept while using a
defensible public formulation and report the decision.

------------------------------------------------------------------------

# 3. Repository baseline

Before changes:

1.  Confirm branch and HEAD.
2.  Run `npm run check`.
3.  Run `npm run build`.
4.  Record:
    -   check result;
    -   build result;
    -   page count;
    -   sitemap URL count if applicable;
    -   current relevant routes.
5.  Inspect Task 015 documentation changes before implementation.

At minimum read:

-   `DOC/01-BRAND-POSITIONING.md`
-   `DOC/02-INFORMATION-ARCHITECTURE.md`
-   `DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md`
-   `DOC/06-CASE-STUDY-ARCHITECTURE.md`
-   `DOC/07-DESIGN-SYSTEM.md`
-   `DOC/08-COMPONENT-LIBRARY.md`
-   `DOC/09-TECHNICAL-ARCHITECTURE.md`
-   `DOC/10-SEO-EEAT-STRUCTURED-DATA.md`
-   `DOC/11*`
-   `DOC/12-ASSET-STRATEGY.md`
-   `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Also inspect the current rendered/source implementations of:

-   `/`
-   `/munkaink/`
-   `/egyedi-fejlesztes/`
-   `/egyedi-fejlesztes/uzleti-alkalmazasok/` if present
-   `/rendszerintegracio/` if present
-   existing detail-page/breadcrumb patterns
-   current content collections and schemas.

Do not assume this prompt supersedes newer repository truth.

------------------------------------------------------------------------

# 4. Screenshot intake is a hard prerequisite

Four real anonymized screenshots are expected.

Expected semantic roles:

### Case Study 01

1.  maintenance scheduling --- preferred primary operational proof;
2.  quotation management --- supports the quotation-management story.

### Case Study 02

3.  project/work-number plan-versus-actual view --- preferred primary
    proof;
4.  second anonymized operational screenshot --- determine its actual
    function from the asset itself.

Do not invent the fourth screenshot's meaning.

If the files have different filenames than previously planned, use their
actual files and normalize names only if useful.

------------------------------------------------------------------------

# 5. Screenshot privacy/anonymization gate

Before any page implementation that exposes an image publicly, inspect
the actual pixels using the checklist in `DOC/12-ASSET-STRATEGY.md`.

Check for:

-   company/customer names;
-   logos;
-   employee names;
-   contact names;
-   emails;
-   phone numbers;
-   postal addresses;
-   project names;
-   partner/customer names;
-   usernames;
-   URLs/domains;
-   internal IDs where sensitive;
-   financial values that should not be public;
-   filenames/document names;
-   server/database names;
-   internal network details;
-   identifying free-text notes.

For each asset record:

-   `PASS`
-   `PASS WITH NON-SENSITIVE BUSINESS DATA`
-   or `BLOCKED — REQUIRES FURTHER ANONYMIZATION`

Do not attempt to "hide" sensitive information through CSS cropping if
the original public asset would remain downloadable.

If any screenshot fails privacy review:

-   do not publish that asset;
-   continue with the rest of the task if possible;
-   use a clearly documented temporary evidence slot rather than a fake
    screenshot;
-   report the exact blocking category without reproducing sensitive
    values.

Do not fabricate replacement UI.

------------------------------------------------------------------------

# 6. Content/evidence discipline

Task 015's evidence classifications are binding.

Do not invent:

-   customer identities;
-   customer quotes;
-   revenue;
-   ROI;
-   savings;
-   productivity percentages;
-   uptime;
-   transaction volumes;
-   exact active-user counts;
-   exact company size where only approximate;
-   exact ERP-change count where approximate;
-   exact vendor history beyond approved wording;
-   Tardify lineage;
-   unsupported migration detail.

The case studies should feel strong because they are precise.

Prefer observable evidence over marketing adjectives.

------------------------------------------------------------------------

# 7. Case Study 01 --- production narrative

## Approved title

> **Egy üzemi rendszer, amely egy évtizede teszi a dolgát.**

## Core theme

**Stability / operational fit**

The story is not "we continuously rebuilt a system as the company grew."

The accurate story is:

-   ARTIT already had a mature business system;
-   it was adapted to the customer's operation near the beginning of the
    business;
-   it covered concrete everyday processes;
-   later work was mainly refinement rather than repeated major
    redevelopment;
-   the same operational system remains in use.

## Key evidence

Owner-validated: - climate/HVAC service and project context; -
operational use today; - no parallel system for these functions; -
maintenance scheduling; - quotation management; - maintenance
contracts; - tickets/faults; - work orders; - invoicing
preparation/approval; - partner records; - work-number management; -
ASP.NET Web Forms; - ASP.NET MVC responsive/mobile component.

Hard historical evidence: - 2017-05-15 uploads-area artefact; -
2017-12-20 partner modification.

Available real visual proof: - maintenance scheduling; - quotation
management.

## Concrete operational story

Quotation handling is the clearest before/after example.

Before: - quotations were difficult/chaotic to track.

After: - colleagues/salespeople use one shared system; - quotation/sales
history is traceable by customer/company; - users can see what was
quoted and how the opportunity evolved.

Do not add numeric impact.

## Important longevity wording

The owner approves the title using "egy évtizede".

Do not turn this into unsupported precision elsewhere such as:

-   "exactly 10 years and X months";
-   "continuous 100% operation for 10 years";
-   "unchanged for 10 years".

The body copy should distinguish longevity from immutability.

------------------------------------------------------------------------

# 8. Case Study 02 --- production narrative

## Working title

> **A rendszer, amely több ERP-t is túlélt.**

## Core theme

**Adaptability / integration longevity**

The story:

-   a custom system was developed around the company's real operating
    processes;
-   its history is evidenced back to 2002;
-   it evolved technologically;
-   surrounding ERP/back-office systems changed;
-   old and new environments sometimes had to coexist;
-   the custom operational layer remained useful and in active use.

## Hard evidence

-   archived 2002 Microsoft Access databases from the Classic ASP
    generation;
-   2003 user guide for the `tervtár` function;
-   configuration evidence for several ERP/environment connections.

## Owner-validated business coverage

-   project/work-number management;
-   project/work status;
-   planned payment/invoicing milestones;
-   actual payment recording/checking;
-   reporting;
-   project cost planning;
-   plan-versus-actual comparison;
-   partner management;
-   mini CRM;
-   service workflows;
-   design/engineering assignments;
-   manufacturing assignments;
-   delivery/shipping assignments;
-   history/logging.

## Integration story

Known integration categories: - accounting/financial data; - partner
data; - inventory; - shipping/delivery; - project/work-number data.

Known mechanisms: - direct database connections; - purpose-built
interfaces; - dedicated/custom permissions.

Several old/new environment connections coexisted because historical
data still needed to remain retrievable.

This is a valuable detail. Use it to explain real integration continuity
rather than reducing the story to "we connected APIs."

## Technology evolution

> Classic ASP → ASP.NET Web Forms

Do not imply unchanged code since 2002.

The durable thing is the **business operating model/system role**, not
every implementation detail.

------------------------------------------------------------------------

# 9. Art-direction objective

These pages must feel unmistakably part of ARTIT, but they must not be
homepage clones.

Follow the established principle:

> **Reuse the grammar, not the homepage layout.**

Existing ARTIT grammar includes:

-   warm/light neutral canvas;
-   Ink + Deep Blue-Violet;
-   Swiss/editorial precision;
-   technical metadata when meaningful;
-   sharp/controlled geometry;
-   sparse structural accent;
-   canvas / tonal band / specification plate / dark interruption;
-   real evidence over decorative illustration;
-   strong responsive composition;
-   no generic SaaS-card wall.

The screenshots are the visual protagonists.

Do not bury them inside tiny laptop/browser mockups.

Do not make them look like stock product screenshots.

Do not place fake browser chrome around them unless a real editorial
need is demonstrated.

------------------------------------------------------------------------

# 10. Required art-direction exploration

Before committing the final case-detail design, create **three genuinely
different rendered art-direction concepts** for the case-study
detail-page system.

The concepts should use the real screenshot assets.

They may share content but must differ meaningfully in composition,
hierarchy and evidence treatment.

Suggested exploration axes --- not mandatory templates:

### Concept A --- Evidence dossier

Editorial/technical case file: - strong evidence metadata; - large real
screenshot; - restrained historical artefact references; - precise
annotation/caption system.

### Concept B --- Operational narrative

More immersive editorial progression: - business context; - real UI
entering early; - alternating operational story/evidence; - strong
typographic pacing.

### Concept C --- System record

A more engineered/specification-like case presentation: - structured
facts; - chronology/evolution where real; - screenshot plates; -
technical residue and evidence markers.

Do not create three superficial color/layout variants.

Render the concepts at real desktop width and inspect them visually.

If practical, also check a representative mobile viewport before
selection.

Select the strongest direction based on:

-   ARTIT distinctiveness;
-   evidence clarity;
-   readability;
-   screenshot prominence;
-   suitability for both cases without making them identical;
-   mobile resilience;
-   lack of decorative over-design.

Document the choice and why the other two were rejected.

------------------------------------------------------------------------

# 11. Case-specific visual differentiation

The two pages should clearly belong to the same case-study system while
retaining distinct emphasis.

## CS01

Prefer: - calm; - stable; - operational; - less chronology; -
screenshot-led proof; - restrained historical metadata.

Avoid forcing a timeline or connector system.

There is no need for an explanatory SVG if the real screenshots and
editorial composition already carry the page.

## CS02

A real historical/evolution dimension exists.

It is legitimate to visually communicate:

-   2002 artefact;
-   2003 documentation;
-   Classic ASP → ASP.NET Web Forms;
-   changing surrounding ERP environments;
-   current operational continuity.

If using route/connector/evolution geometry, it must correspond to this
actual progression.

Do not imply a precise ERP chronology that the evidence does not
establish.

Do not draw named ERP logos unless public use has explicitly cleared
those names/assets.

------------------------------------------------------------------------

# 12. Historical artefact treatment

The 2002 Access database and 2003 user guide are evidence, but may not
have public visual assets suitable for display.

If actual safe-to-publish artefact images/files are not in the
repository:

-   represent the facts typographically;
-   use date/evidence metadata;
-   do not fabricate screenshots of Access, Classic ASP, documents or
    old software.

For example, a restrained evidence record may communicate:

-   `2002 — archived application database`
-   `2003 — documented user-facing function`

without pretending to reproduce the artefact.

The exact wording must remain consistent with Task 015 evidence
boundaries.

------------------------------------------------------------------------

# 13. Page architecture

Use `DOC/06-CASE-STUDY-ARCHITECTURE.md` as the primary content
architecture source.

Do not mechanically force identical sections onto both cases.

Each page should nevertheless provide a coherent visitor journey.

Expected ingredients may include:

-   breadcrumb;
-   evidence-led Hero;
-   concise context;
-   primary screenshot/proof;
-   operational responsibility;
-   concrete process story;
-   longevity/evolution proof;
-   technical/integration context where relevant;
-   "what this demonstrates" ARTIT interpretation;
-   contextual next step / CTA.

Do not write a generic "Challenge / Solution / Result" agency template.

------------------------------------------------------------------------

# 14. Canonical routes

Use the Task 015 IA recommendation:

> `/munkaink/[case-study]/`

Choose final slugs conservatively.

Requirements: - Hungarian; - stable; - concise; - descriptive; - not
dependent on customer identity; - not needlessly tied to an exact
year/count that may age poorly.

Before implementation, document the chosen two slugs.

Update: - `/munkaink/` links; - relevant service-page contextual
links; - breadcrumbs; - sitemap via normal Astro routing; - canonical
metadata.

Do not create duplicate canonical versions under service routes.

------------------------------------------------------------------------

# 15. `/munkaink/` integration

Update the evidence hub now that the detail pages exist.

Requirements:

-   use the approved CS01 title;
-   use the final defensible CS02 title;
-   distinguish the cases clearly;
-   provide concise evidence-led summaries;
-   link to canonical case pages;
-   avoid reproducing the full case content;
-   preserve the existing `LivingSystemField` role unless the new
    evidence genuinely requires a small adjustment.

Do not redesign `/munkaink/` from scratch.

------------------------------------------------------------------------

# 16. Service-page cross-links

Audit and update the relevant contextual evidence pointers.

Expected mapping:

### CS01

`/egyedi-fejlesztes/uzleti-alkalmazasok/`

### CS02

`/rendszerintegracio/`

If the current routes differ, follow repository IA.

Cross-links should read as proof/context, not promotional cards pasted
everywhere.

Do not introduce circular or redundant CTA chains.

------------------------------------------------------------------------

# 17. Breadcrumbs

Use the established breadcrumb grammar from the existing site.

Case detail pages should communicate:

> Munkáink → \[Case title\]

Do not add redundant visual height if the existing Hero
eyebrow/breadcrumb pattern supports a like-for-like replacement.

Ensure semantic navigation and accessibility.

If BreadcrumbList structured data is already implemented through shared
infrastructure, extend it appropriately rather than duplicating logic.

------------------------------------------------------------------------

# 18. Screenshot presentation

The screenshots must remain legible enough to function as evidence.

Requirements:

-   preserve useful aspect ratio;
-   avoid excessive perspective distortion;
-   avoid tiny decorative placement;
-   avoid fake device mockups;
-   use framing consistent with ARTIT's specification-plate language if
    helpful;
-   captions should explain **what the screenshot proves**, not merely
    restate its filename;
-   ensure mobile treatment does not reduce them to unreadable
    thumbnails.

Evaluate whether mobile should use: - full-width scaled image; -
controlled horizontal detail window; - or a responsive crop.

Do not crop away the feature being discussed.

If a screenshot contains intentionally anonymized regions, do not
visually "repair" them.

------------------------------------------------------------------------

# 19. Image performance

Process the screenshot assets responsibly.

Determine appropriate: - dimensions; - format; - compression; - Astro
image pipeline usage; - responsive `srcset`/sizes behavior; - lazy/eager
loading.

Primary above-the-fold evidence may be loaded differently from
lower-page screenshots.

Do not materially degrade text/UI legibility through aggressive
compression.

Avoid shipping unnecessarily huge source images directly to mobile.

Record source and generated asset sizes in the completion report if
useful.

------------------------------------------------------------------------

# 20. Accessibility

Requirements:

-   meaningful alt text based on the screenshot's editorial role;
-   decorative framing must be hidden from assistive tech;
-   breadcrumb semantics;
-   logical heading hierarchy;
-   keyboard-accessible links/actions;
-   visible focus states;
-   adequate contrast;
-   no information encoded by color alone;
-   reduced-motion compliance if any motion is introduced.

Avoid animation unless it materially improves comprehension.

Static is preferred for evidence content.

------------------------------------------------------------------------

# 21. Responsive QA

Validate at representative widths including at least:

-   narrow mobile around 320--375 px;
-   larger mobile around 390--430 px;
-   tablet/intermediate width;
-   desktop around 1280--1440 px;
-   wide desktop if the layout uses large screenshot compositions.

Specifically inspect:

-   long HU title wrapping;
-   breadcrumb wrapping;
-   screenshot legibility;
-   captions;
-   metadata;
-   historical/evolution treatment;
-   CTA density;
-   no accidental horizontal overflow;
-   no functionless empty space;
-   no screenshot/typography collisions.

Do not infer responsiveness only from CSS. Inspect rendered pages.

------------------------------------------------------------------------

# 22. SEO / metadata / structured data

Implement conservative metadata consistent with existing site
architecture.

For each case page:

-   unique HU title;
-   unique meta description;
-   canonical URL;
-   appropriate Open Graph metadata using existing infrastructure;
-   breadcrumb metadata if supported.

Structured data:

-   use `WebPage` or `Article` only if consistent with the existing
    strategy and actual visible content;
-   use `BreadcrumbList` where appropriate;
-   do not use a fictional `CaseStudy` schema type;
-   do not expose customer identity;
-   do not add gated ERP/vendor details only in JSON-LD;
-   do not invent dates such as `datePublished` unless genuinely
    known/appropriate.

Structured data must match visible content.

------------------------------------------------------------------------

# 23. Content collection / architecture

Follow the repository's existing content architecture.

If case studies are best represented as a new/extended content
collection, implement the smallest coherent schema that supports:

-   localized title structure consistent with the project;
-   slug;
-   summary;
-   evidence metadata where needed;
-   screenshots;
-   alt/caption;
-   section content;
-   SEO metadata.

Do not over-generalize into a CMS framework for hypothetical future
cases.

HU is the production locale.

EN content/routes remain gated unless already explicitly approved
elsewhere.

------------------------------------------------------------------------

# 24. No fake evidence

Strict prohibition:

-   no fake customer logo;
-   no fake quote;
-   no fake dashboard;
-   no invented "before" screenshot;
-   no fake timeline artefact;
-   no fake Access screenshot;
-   no invented ERP architecture diagram;
-   no fabricated metrics.

If a real evidence asset is absent, use honest typography/metadata or
omit it.

------------------------------------------------------------------------

# 25. Implementation quality

Prefer: - semantic Astro; - shared components where there is real
repeated structure; - zero client JS unless necessary; - CSS/layout
solutions over script; - existing tokens/utilities; - minimal new
component API surface.

Do not force both pages through an over-abstract generic component if
that damages their distinct editorial composition.

Shared primitives are good. Identical page templates are not mandatory.

------------------------------------------------------------------------

# 26. Documentation updates

After implementation update relevant source-of-truth docs:

-   case-study architecture/status;
-   sitemap/page architecture;
-   asset strategy;
-   content gates;
-   technical architecture if collection/schema changes;
-   component library if reusable case-study components are introduced;
-   SEO/structured-data docs if implementation differs from prior
    planning.

Record: - final routes; - final titles; - screenshot filenames; -
evidence status; - art-direction selection; - remaining gates.

The approved CS01 title must no longer be marked pending.

------------------------------------------------------------------------

# 27. Validation

Run at minimum:

1.  `npm run check`
2.  `npm run build`

Then verify:

-   both case routes build;
-   sitemap count changes as expected;
-   no broken internal links;
-   canonical URLs correct;
-   `/munkaink/` links correct;
-   service-page cross-links correct;
-   breadcrumbs correct;
-   no accidental EN routes;
-   screenshots load;
-   responsive image output works;
-   no privacy leaks;
-   no secrets/config strings;
-   no customer identity;
-   no console errors on pages with client JS;
-   no unexpected JS added to case pages;
-   no regression to existing primary HU pages.

Perform real rendered visual QA.

------------------------------------------------------------------------

# 28. Visual regression guard

Do not accidentally alter approved page-specific brand faces:

-   homepage `SystemMap`;
-   `/egyedi-fejlesztes/` `OperatingFitField`;
-   `/munkaink/` `LivingSystemField`;
-   `/tardify/` `TardifySpecimen`;
-   `/rolunk/` editorial Hero;
-   `/kapcsolat/` Conversation Workspace.

Small `/munkaink/` content/link changes are expected, but its approved
visual identity should remain intact unless explicitly justified.

------------------------------------------------------------------------

# 29. Completion criteria

Task 016 is complete only when:

-   screenshot privacy audit has passed for every published asset;
-   final CS01 title is implemented consistently;
-   two canonical case-study pages exist;
-   both use real evidence;
-   the two pages are visually coherent but narratively distinct;
-   three art-direction concepts were genuinely explored and one
    selected;
-   `/munkaink/` routes correctly to them;
-   relevant service pages cross-link appropriately;
-   metadata/canonicals/breadcrumbs are correct;
-   responsive QA passes;
-   check/build pass;
-   documentation is updated.

If a screenshot privacy problem prevents one case from being honestly
implemented, do not fake completion. Report the blocker.

------------------------------------------------------------------------

# 30. Completion report format

## 1. Final status

`COMPLETE`, `COMPLETE WITH GATES`, or `BLOCKED`

## 2. Repository baseline

-   branch;
-   start/end HEAD;
-   baseline/final checks;
-   baseline/final build;
-   page and sitemap counts.

## 3. Screenshot intake & privacy audit

For each of four assets: - filename; - semantic role; - anonymization
result; - publication status.

## 4. Final routes and titles

Both cases.

## 5. Art-direction exploration

-   Concept A;
-   Concept B;
-   Concept C;
-   selected concept;
-   selection rationale;
-   rejected-concept rationale.

Include real rendered capture references if the project workflow
supports them.

## 6. Case Study 01 implementation

-   architecture;
-   evidence used;
-   screenshots;
-   wording decisions;
-   caveats.

## 7. Case Study 02 implementation

Same structure.

## 8. `/munkaink/` integration

## 9. Service-page integration

## 10. Components/content architecture

-   new/changed components;
-   content collections/schema changes;
-   JS impact.

## 11. SEO / metadata / structured data

## 12. Responsive/accessibility QA

## 13. Performance/assets

-   image handling;
-   material asset-size observations;
-   client-JS impact.

## 14. Documentation updated

## 15. Remaining gates

Explicitly list anything still gated.

## 16. Validation results

## 17. Final visual assessment

State whether the two case pages now feel like evidence-led ARTIT pages
rather than generic agency portfolio pages, and identify any
intentionally preserved differences between them.

------------------------------------------------------------------------

# 31. Core principle

These pages do not need to *look like proof* through decoration.

They contain proof.

Use the real systems, real history and real operational detail as the
visual and editorial substance.

**Case Study 01:** operational fit and stability.

**Case Study 02:** adaptability and integration longevity.

The design should make that evidence easier to understand --- never
louder than it needs to be.
