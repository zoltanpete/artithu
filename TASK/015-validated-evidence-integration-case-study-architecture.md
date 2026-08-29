# Task 015 --- Validated Evidence Integration & Case Study Architecture

## 1. Intent

**Type:** content architecture + evidence integration + implementation
planning.

Convert the validated Case Study 01 and 02 evidence inventory into
repository source-of-truth documentation, resolve only genuinely
supported content gates, and design the information/content architecture
before visual implementation.

**Do not build the full case-study pages in this task.**

The task must establish: - what ARTIT can truthfully claim; - what
evidence supports each claim; - what remains approximate/gated; - which
screenshots support which claims; - how the cases differ; - how they
connect to `/munkaink/` and `/egyedi-fejlesztes/`; - what the eventual
detail-page architecture should be.

## 2. Repository baseline

Before changes: 1. Confirm branch and HEAD. 2. Run existing
check/validation commands. 3. Run production build. 4. Record
check/build results, page count, sitemap state and primary HU routes. 5.
Audit current docs and implementation rather than assuming this prompt
reflects the latest repo state.

## 3. Source-of-truth audit

Inspect at minimum: - `DOC/01*` - `DOC/02-INFORMATION-ARCHITECTURE.md` -
`DOC/03*` - `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md` -
`DOC/07-DESIGN-SYSTEM.md` - `DOC/08-COMPONENT-LIBRARY.md` -
`DOC/09-TECHNICAL-ARCHITECTURE.md` - `DOC/11*` - `DOC/12*` -
`DOC/13-CONTENT-GAPS-AND-VALIDATION.md` - current `/munkaink/` - current
`/egyedi-fejlesztes/` - planned child routes - current case/reference
placeholders - relevant content schemas/YAML.

Identify obsolete assumptions and conflicts.

## 4. Evidence policy

Preserve these distinctions: - `VERIFIED` - `OWNER_VALIDATED` -
`APPROXIMATE` - `ANONYMIZED_ASSET_READY` - `VERIFY_BEFORE_EXACT_CLAIM` -
`GATED` - `DO_NOT_PUBLISH`

Never turn an approximation into an exact claim. Never infer customer
identity.

Do not fabricate company names, logos, revenue, ROI, savings,
productivity metrics, uptime, transaction volume, user activity, dates,
migrations, testimonials or quotations.

## 5. Case Study 01 --- validated evidence

### Context

-   Climate/HVAC service and project company.
-   Business started from zero.
-   ARTIT already had a mature system; business operation and system
    adoption began approximately one month apart.
-   This was **not** a greenfield custom build for this customer.
-   Existing ARTIT-developed system was adapted to the customer's
    operation.
-   Underlying system development had begun significantly earlier,
    approximately 15 years ago.
-   ARTIT was founded in 2011.
-   Exact public Tardify lineage remains gated. Do not automatically
    claim this system "became Tardify".

### Initial needs / operational coverage

-   job/work tracking;
-   contract management;
-   maintenance scheduling;
-   quotation management;
-   maintenance-contract management;
-   ticket/fault handling;
-   work orders;
-   completed-work preparation for invoicing;
-   approval;
-   partner/customer records;
-   work-number management.

### Development history

-   mature existing system adapted to the business;
-   mainly smaller refinements afterward;
-   no major functional redevelopment required.

The old framing **"Egy üzleti rendszer, amely együtt nőtt a
vállalkozással"** is potentially misleading and is not locked.

Evidence-aligned working direction: **"Egy üzemi rendszer, amely tíz éve
teszi a dolgát."**

This is still editorial working copy.

### Current status

Owner-validated: - still operational today; - no other system is used
for these same functions; - owner states exactly 10 years of use.

Hard historical artefacts: - uploads-area file dated **2017-05-15**; -
partner modification dated **2017-12-20**.

These prove 2017 historical use but do not alone prove a full exact
ten-year span in 2026. Preserve that distinction.

### User scale

-   45 accounts in user list;
-   owner estimates \~70% may still be active.

Do not publish a calculated active-user count as fact. User count is
supporting context, not a headline KPI.

### Concrete before → after

Quotation handling: - before: difficult/chaotic tracking; - after:
colleagues/salespeople use one shared system; - customer/company
quotation and sales history is traceable; - it is possible to see what
was quoted and how an opportunity evolved.

No invented performance metrics.

### Technology

-   ASP.NET Web Forms web application;
-   ASP.NET MVC responsive mobile part.

Older technology is not to be hidden. If mentioned, use it as
maintainability/longevity evidence, not as a current-stack
recommendation.

### Visual evidence

Two anonymized screenshots: 1. quotation management; 2. maintenance
scheduling.

Preferred roles: - maintenance scheduling = primary operational proof; -
quotation management = supports the concrete quotation-management story.

Do not recreate them as fake/stylized UI.

## 6. Case Study 02 --- validated evidence

### Context

-   established company;
-   approximately 100--150 employees;
-   customer identity anonymous;
-   system developed specifically for this company;
-   evolved with company requirements for a long period;
-   development began around 2002;
-   roughly the last 10 years comparatively stable without major
    redevelopment;
-   still in full operational use.

Treat approximate quantities as approximate.

### Hard historical evidence

**2002:** archived Microsoft Access databases from the Classic ASP
generation.

**2003:** user guide for the `tervtár` function.

These support a conservative claim that the system's history reaches
back more than two decades. Do not imply the same untouched code has run
since 2002.

### Business coverage

-   project/work-number management;
-   status tracking;
-   payment/invoicing milestones;
-   recording/checking payments;
-   reporting;
-   project-cost planning;
-   plan-versus-actual comparison with ERP-held data;
-   partner management;
-   mini CRM;
-   service workflows;
-   design/engineering assignments;
-   manufacturing assignments;
-   delivery/shipping assignments;
-   logging/history.

ERP/back-office data/processes include: - accounting/financial; -
partner; - inventory/stock; - shipping/delivery; - work/project data.

Organize these as business processes, not a feature dump.

### Role inside the company

The system effectively became a company operational work
surface/dashboard: - managers found oversight information there; -
employees found information needed for daily work; - important company
processes were built around it.

The reason it survived surrounding system changes was the importance and
quality of the business process it encoded.

Avoid unsupported literal "everything ran in this system" claims.

## 7. Case Study 02 --- ERP/integration evidence

Owner recollection: - approximately 2--3 ERP changes; -
environment/system names include Oracle, Tandofer, Apollo, EcoLine.

Hard evidence: configuration connection-string keys/names associated
with: - Oracle; - Tandofer; - Apollo; - EcoLine.

Several existed side by side for a period because old environments
remained accessible for historical-data retrieval.

This is important real-world integration evidence: ERP replacement was
not a clean theoretical cutover; the operational system bridged old/new
environments while preserving historical access.

Never expose credentials, server/database names, raw connection strings,
topology or sensitive config.

Known integration mechanisms: - direct database connections; -
purpose-built interfaces; - dedicated/custom permissions.

Known integration flows: - work/project numbers toward accounting; -
financial data; - partner data; - inventory; - shipping; - retrieval and
presentation of ERP-held information in the ARTIT system.

Do not rewrite this as a modern REST/API architecture without evidence.

## 8. Case Study 02 --- technology evolution and scale

Technology lineage: **Classic ASP → ASP.NET Web Forms**

Accurate story: - business system/operational model persisted; -
implementation evolved; - surrounding ERP systems changed; - system
remained useful and operational.

Scale: - customer \~100--150 employees; - users \~50--100.

Both remain approximate unless hard records establish otherwise.

## 9. Case Study 02 --- visual evidence

Two anonymized screenshots are available.

The work/project **plan-versus-actual** view is currently the preferred
primary proof because it can communicate: - real project control; -
financial/operational planning; - comparison with actual ERP-derived
data; - genuine business software rather than a mockup.

Inspect both real assets before locking placement.

For each screenshot document: - what it proves; - anonymization
status; - further redaction needed; - cropping; - framing; - alt-text
direction.

Do not cosmetically redesign the software.

## 10. Keep the two cases distinct

### Case 01 --- stability / operational fit

A mature ARTIT system was adapted near the company's launch, became part
of everyday operation, required mainly refinement rather than repeated
redevelopment, and remains operational.

Editorial essence: **Good business software does not need to be
continuously reinvented to remain useful.**

### Case 02 --- adaptability / integration longevity

A custom system built around real company processes evolved over
decades, survived multiple surrounding ERP generations, bridged old/new
environments, evolved technologically and remains operational.

Editorial essence: **The surrounding systems changed. The business
operating layer remained.**

These are directions, not locked final copy.

## 11. Required evidence matrix

Create/update repository source-of-truth evidence records for every
material claim with: - case ID; - claim/topic; - evidence category; -
evidence description; - confidence/status; - allowed public wording; -
prohibited/caveated wording; - visual evidence; - anonymization
requirement; - remaining verification; - intended page/use.

Prefer existing repository terminology if equivalent classifications
already exist.

## 12. Update content gates

Review `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`.

Substantially ungate where supported: - existence of both real customer
systems; - real operational use; - described business processes; - CS01
2017 historical evidence; - CS01 anonymized screenshots; - CS02 2002
lineage evidence; - CS02 2003 documented-function evidence; - CS02
long-lived ERP integration story; - CS02 anonymized screenshots; -
Classic ASP → ASP.NET Web Forms evolution; - CS01 ASP.NET Web Forms +
MVC context.

Remain gated/caveated: - customer identities/logos; - testimonials; -
ROI/savings/impact metrics; - exact active-user counts; - exact CS02
employee/user counts unless verified; - exact ERP replacement
count/names if not sufficiently verified for public wording; - sensitive
configuration; - exact Tardify lineage; - claim that CS02 ran unchanged
since 2002; - unsupported CS01 "grew with the company" narrative.

Record resolved gates and rationale rather than simply deleting them.

## 13. Case-study content architecture

Design content architecture, **not final visual art direction**.

Avoid automatic generic agency boilerplate ("Challenge → Solution →
Results").

Evaluate evidence-native sequencing such as: 1. concise evidence-led
Hero; 2. operational context; 3. business process/problem; 4. system
responsibility; 5. real screenshot/proof; 6. concrete operational
example; 7. longevity/evolution evidence; 8. technical/integration
context where relevant; 9. what the case demonstrates about ARTIT; 10.
restrained CTA.

Do not mechanically use identical sequences.

CS02 should give more weight to evolution/integration.\
CS01 should give more weight to operational fit/stability.

## 14. Screenshot placement strategy

Define editorial roles for all four anonymized screenshots.

For each specify: - section/context; - visitor takeaway; - caption
need; - evidence/date note if useful; - desktop/mobile crop; - possible
future zoom/lightbox; - alt-text direction; - anonymization check.

If assets are not yet in repo, document required asset slots/filenames.
Do not fabricate content.

## 15. `/munkaink/` integration

Audit the current evidence hub.

The cases should no longer be vague future placeholders if evidence is
sufficient, but `/munkaink/` must not duplicate two full case studies.

It should: - introduce each case distinctly; - state why it is worth
opening; - use defensible claims; - route to future detail pages; -
avoid long-form duplication.

If detail routes do not exist, document intended routing and do not
create dead links.

Challenge both working titles and recommend evidence-aligned
title/subtitle options, clearly marking owner-approval needs.

## 16. `/egyedi-fejlesztes/` relationship

Map evidence to the existing custom-development decision framework.

CS01 supports: - operations not adequately modeled by standard tools; -
coherent handling of multiple operational processes; - long-term
operational fit over trend-driven replacement.

CS02 supports: - business logic spanning multiple enterprise systems; -
ERP not being the entire operational experience; - integration
continuity; - historical/current systems coexisting; - stable
operational layer over changing back-office technology.

Do not substantially rewrite the pillar page in this task. Document
future cross-links.

## 17. Child-route / canonical architecture

Audit planned `/egyedi-fejlesztes/` child pages.

Decide whether cases belong: - canonically under `/munkaink/...`; - as
evidence embedded into service child pages; - or both, with one
canonical long-form case and contextual excerpts elsewhere.

Avoid: - duplicate case content; - competing canonical pages; - service
pages pretending to be case studies; - case pages becoming generic
service landing pages.

Recommend: - canonical case routes; - supporting service routes; -
cross-link direction; - breadcrumbs; - future structured-data
implications.

Do not implement new routes unless repository conventions require a
trivial documentation declaration.

## 18. Structured-data planning

Planning only unless an existing metadata error requires a small
correction.

Assess future WebPage/Article/BreadcrumbList/Organization strategy
conservatively.

Do not invent a `CaseStudy` schema type.

Structured data must match visible content and preserve customer
anonymity. Never leak gated information through JSON-LD.

## 19. Visual-art-direction guard

Do not design final case-study visuals in Task 015.

Future implementation must follow ARTIT grammar: - warm/light neutral
canvas; - Ink + Deep Blue-Violet; - Swiss/editorial precision; -
meaningful technical metadata; - controlled geometry; - scarce
structural accent; - real evidence over decoration; - "reuse the
grammar, not the homepage layout."

Real screenshots are already strong evidence/visual material.

Do not assume each case needs a decorative SVG brand face.

A CS02 evolution/integration model might later be justified because a
real progression exists. Do not invent connector geometry for CS01
merely for visual complexity.

## 20. Privacy / anonymization audit

Check screenshots for: - customer/company names; - employee/contact
names; - email/phone/address; - project names; - partner names; -
sensitive financial values; - filenames; - IDs; - server/database
names; - URLs/domains; - usernames; - identifying notes.

Anonymization must preserve functional meaning and must not become
deceptive.

Document pass/fail and remaining issues per screenshot.

## 21. Copy principles

Future copy must be specific, calm, evidence-led, senior, technically
credible and understandable to a business decision-maker.

Prefer: \> "A rendszer története 2002-ig visszakövethető."

over: \> "Több mint két évtized innovációja."

Prefer: \> "Az ERP-k változtak, az üzleti folyamatokat összefogó
rendszer megmaradt."

over: \> "Jövőbiztos megoldást építettünk."

Avoid unsupported adjectives and claims such as: - cutting-edge; -
future-proof; - revolutionary; - seamless; - best-in-class; -
unsupported "mission-critical"; - unsupported numerical impact.

## 22. Documentation deliverables

By completion, repository source of truth must contain: 1. updated
evidence/content-gap status; 2. structured evidence matrix for both
cases; 3. factual narrative boundaries; 4. content architecture for each
case; 5. screenshot/evidence placement plan; 6. anonymization
status/checklist; 7. `/munkaink/` integration recommendation; 8.
`/egyedi-fejlesztes/` evidence/cross-link mapping; 9. canonical route
recommendation; 10. structured-data recommendation; 11. explicit
remaining gates; 12. prerequisites for implementation/art direction.

Prefer updating authoritative existing DOC files over document
proliferation. If a dedicated evidence document is genuinely needed,
cross-reference it from existing source-of-truth docs.

## 23. Scope guard

### In scope

-   repo/document audit;
-   evidence classification;
-   documentation updates;
-   content-gate updates;
-   information architecture;
-   narrative architecture;
-   screenshot/anonymization planning;
-   route/cross-link planning;
-   structured-data planning;
-   tiny factual corrections if clearly required.

### Out of scope

-   full case-study page implementation;
-   final art direction;
-   decorative SVGs;
-   large redesigns;
-   English copy/routes;
-   customer-name publication;
-   testimonials;
-   invented metrics;
-   screenshot fabrication;
-   major schema implementation;
-   unrelated SEO/homepage polish.

Record useful out-of-scope ideas for the next task.

## 24. Validation

After changes: 1. run normal checks; 2. run production build; 3. confirm
no accidental route/page-count changes; 4. confirm no broken internal
links; 5. confirm no customer identity leaked into content/metadata; 6.
confirm no secrets/config values copied into docs; 7. confirm screenshot
references resolve if assets were added; 8. confirm existing HU pages
remain unaffected; 9. confirm EN remains gated; 10. inspect final diff
for scope creep.

If changes are documentation-only, say so instead of inventing visual
QA.

## 25. Decision gate

End with:

**READY FOR CASE-STUDY ART DIRECTION + IMPLEMENTATION**

only if: - evidence boundaries are documented; - caveats explicit; -
screenshot roles known; - anonymization acceptable; - canonical routes
decided; - content architecture coherent; - no critical factual
dependency remains.

Otherwise:

**EVIDENCE / CONTENT BLOCKED**

with the minimum missing items.

Do not begin implementation automatically.

## 26. Completion report

Return:

### 1. Final status

`COMPLETE`, `COMPLETE WITH GATES`, or `BLOCKED`

### 2. Repository baseline

Branch, start/end HEAD, checks, build, route/page-count impact.

### 3. Source-of-truth files changed

What and why.

### 4. Case Study 01 evidence status

Verified, owner-validated, approximate, gated, remaining verification.

### 5. Case Study 02 evidence status

Same structure.

### 6. Screenshot inventory

Assets, role, anonymization, concerns.

### 7. Proposed case-study architecture

Each case separately.

### 8. IA / routing recommendation

Canonical routes, `/munkaink/`, `/egyedi-fejlesztes/`, cross-links.

### 9. Content gates changed

Opened, partially opened, still gated.

### 10. Structured-data recommendation

### 11. Scope discipline

Confirm no unsupported claims, fake metrics, identities or unrelated
redesign.

### 12. Validation results

### 13. Next-task readiness

`READY FOR CASE-STUDY ART DIRECTION + IMPLEMENTATION` or
`EVIDENCE / CONTENT BLOCKED`

## 27. Core principle

These cases are valuable because the evidence is concrete.

Do not make them sound more impressive by making them less precise.

**Case Study 01:** a system can remain useful because it fits the
operation well.

**Case Study 02:** a business operating layer can remain valuable even
while the technologies and enterprise systems around it change.

Let the evidence carry the argument.
