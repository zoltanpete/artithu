# ARTIT.hu — Case Study Architecture

## Purpose

Case studies are evidence, not portfolio decoration.

Narrative:

> business context → problem → why standard software was insufficient → solution logic → practical system → result → long-term evolution

## Evidence classification system (Task 015)

Every material claim below is tagged with one of seven categories. Use these tags consistently across this file, `13-CONTENT-GAPS-AND-VALIDATION.md`, and future case-study content YAML — do not invent a parallel classification system.

- **VERIFIED** — a real artifact/record exists (a dated file, a config key, a documented technical fact) and was directly cited as evidence, not recalled.
- **OWNER_VALIDATED** — the owner stated this directly (context, process description, current status); no independent artifact was cited, but it is not mere assumption either.
- **APPROXIMATE** — explicitly a range, estimate, or "around/approximately" figure. Never round this into an exact number in public copy.
- **ANONYMIZED_ASSET_READY** — a screenshot exists and has reportedly been anonymized, but the actual asset file is not yet in this repository, so this task could not independently inspect it. Treat as "role and claim decided, pixel-level anonymization pass still required once the file lands" — see "Screenshot inventory" below.
- **VERIFY_BEFORE_EXACT_CLAIM** — the general shape of the claim is supported, but the *exact* wording/number/date needs one more confirmation step before it can be stated as precise fact (as opposed to a round/approximate framing, which is already safe).
- **GATED** — real, but not cleared for any public wording yet (customer identity, sensitive config, etc.).
- **DO_NOT_PUBLISH** — a framing this evidence pass explicitly rejects, even in caveated form (see each case's own list).

"Known" facts in the previous version of this file conflated several of these tiers into one undifferentiated list. That version is superseded by the tables below — see "Superseded assumptions" at the end of each case for exactly what changed and why.

## Shared structure (unchanged reference)

> 01 Hero → 02 Starting situation → 03 Why packaged software was not enough → 04 Solution logic → 05 How it works in practice → 06 Integrations and environment → 07 Business result → 08 Long term → 09 What we learned → 10 Related competency → 11 CTA

This remains the *available* section vocabulary for a future case detail page, not a mandatory template — Task 015 §13 explicitly asks each case to sequence evidence differently. See "Proposed content architecture" below for how CS01 and CS02 actually use it.

---

## Case Study 01 — validated evidence (Task 015)

### Context

| Claim | Status | Note |
|---|---|---|
| Climate/HVAC service and project company | OWNER_VALIDATED | |
| Business started from zero; system adoption began ~1 month after business operation started | OWNER_VALIDATED | |
| **This was not a greenfield custom build for this customer** — an existing, already-mature ARTIT system was *adapted* to the customer's operation | OWNER_VALIDATED | Corrects the previous version's framing — see "Superseded assumptions" below |
| Underlying system's own development began ~15 years ago | APPROXIMATE | |
| ARTIT founded 2011 | OWNER_VALIDATED | New fact this pass surfaced about ARTIT itself, not this customer — see "Organization" gate cross-reference below |
| Exact public Tardify lineage | **GATED / DO_NOT_PUBLISH** | Do not state or imply "this system became Tardify" or "this is Tardify's predecessor" in any form |

### Operational coverage (OWNER_VALIDATED)

Job/work tracking; contract management; maintenance scheduling; quotation management; maintenance-contract management; ticket/fault handling; work orders; completed-work preparation for invoicing; approval; partner/customer records; work-number management.

Publish as a described operational scope, not a feature-dump list.

### Development history (OWNER_VALIDATED)

Mature existing system adapted to the business; mainly smaller refinements afterward; no major functional redevelopment required. This is the concrete basis for the case's editorial essence (see below) — the story is *fit*, not reinvention.

### Longevity claim — exact boundary

| Evidence | Status |
|---|---|
| Uploads-area file dated 2017-05-15 | VERIFIED |
| Partner-record modification dated 2017-12-20 | VERIFIED |
| Owner states exactly 10 years of use, still operational today, no other system used for these functions | OWNER_VALIDATED |
| A precise, unbroken 10.0-year span as of publication | **VERIFY_BEFORE_EXACT_CLAIM** |

The 2017 artifacts prove real historical use at that date; they do not, by themselves, prove an unbroken decade through today. The owner's own decade estimate is credible but self-reported. Combine both tiers transparently rather than rounding up to a bare "10 years" fact claim.

- **Allowed**: "A rendszer 2017-es használatát rendszeradatok igazolják, és azóta — a tulajdonos elmondása szerint — folyamatosan, körülbelül egy évtizede használatban van." / a round, non-exact "évtizede" framing generally.
- **Prohibited**: "Pontosan 10 éve, megszakítás nélkül működik." (states an exact, unbroken span the evidence doesn't independently prove) — or any wording that presents the owner's estimate as if it were a verified record.

### User scale

| Claim | Status |
|---|---|
| 45 accounts in the user list | VERIFIED (a real count from a real list) |
| ~70% of those may still be active | APPROXIMATE — owner estimate |

**Do not publish a calculated active-user count as fact, and do not publish "45 active users."** Supporting context only, never a headline KPI — this evidence isn't strong enough to carry a number-led claim.

### Concrete before → after (OWNER_VALIDATED, safe to publish)

Quotation handling — before: difficult/chaotic tracking. After: colleagues/salespeople use one shared system; customer/company quotation and sales history is traceable; it's possible to see what was quoted and how an opportunity evolved. No invented percentage or time-saved figure attached to this.

### Technology (OWNER_VALIDATED / VERIFIED)

ASP.NET Web Forms web application; ASP.NET MVC responsive mobile part. Use as longevity/maintainability evidence ("still runs, still maintained, still extended") — never as a current-stack recommendation, and don't hide it.

### Working title — resolved (Task 016)

**Owner-approved and implemented**, replacing the previous, now-inaccurate title across all three occurrences (homepage Work section, `/munkaink/`, `/egyedi-fejlesztes/` directions evidence — independently-authored content fields, updated together, not partially):

> "Egy üzemi rendszer, amely egy évtizede teszi a dolgát."

This resolves the inaccuracy Task 015 flagged: the retired title ("...amely együtt nőtt a vállalkozással.") implied the system grew up organically together with the business, which conflicts with the validated evidence (an already-mature ARTIT system was *adapted* to a newly-started business). The approved title instead states operational duration ("egy évtizede," a decade) without claiming co-growth — consistent with the longevity-claim boundary documented above (round/approximate framing, not a precise "pontosan 10 éve" claim).

Note the exact final wording differs slightly from Task 015's own suggested working direction ("...amely tíz éve teszi a dolgát.") — the owner approved "egy évtizede" over "tíz éve," a synonymous but distinct phrasing choice. Use the approved wording exactly, not the earlier draft.

### Screenshot evidence

See "Screenshot inventory" below (covers both cases together).

### Superseded assumptions (what changed from the pre-Task-015 version of this file)

- Removed: "approx. 20–50 people" (company size) — not restated by this evidence pass; do not treat as still validated.
- Removed: "considered a professional predecessor to Tardify" — this pass explicitly gates the Tardify lineage; the old wording overclaimed relative to what's now confirmed.
- Corrected: "system used since company start" reframed as "an existing ARTIT system adapted near the company's start" — a materially different, more accurate story (fit, not co-growth).
- Working title flagged as now-inaccurate rather than merely unconfirmed.

---

## Case Study 02 — validated evidence (Task 015)

### Context

| Claim | Status |
|---|---|
| Established company, customer identity anonymous | OWNER_VALIDATED |
| ~100–150 employees | APPROXIMATE |
| System developed specifically for this company; evolved with company requirements over a long period | OWNER_VALIDATED |
| Development began around 2002 | APPROXIMATE |
| Roughly the last ~10 years comparatively stable, without major redevelopment | APPROXIMATE |
| Still in full operational use | OWNER_VALIDATED |

Industry was **not** restated in this evidence pass. The pre-Task-015 version of this file tagged this case "building services / HVAC" — that tag is not reconfirmed here and should not be treated as validated going forward (see "Superseded assumptions" below).

### Hard historical evidence

| Evidence | Date | Status |
|---|---|---|
| Archived Microsoft Access databases from the Classic ASP generation | 2002 | VERIFIED |
| User guide for the `tervtár` function | 2003 | VERIFIED |

These support a conservative "history reaches back more than two decades" framing. **Do not imply the same, untouched code has run since 2002** — the technology itself changed (see "Technology evolution" below).

- **Allowed** (Task 015's own preferred example): "A rendszer története 2002-ig visszakövethető."
- **Prohibited**: "2002 óta változatlanul fut ugyanaz a rendszer/kód." / "Több mint két évtized innovációja." (unsupported adjective-led framing)

### Business coverage (OWNER_VALIDATED)

Project/work-number management; status tracking; payment/invoicing milestones; recording/checking payments; reporting; project-cost planning; plan-vs-actual comparison against ERP-held data; partner management; mini CRM; service workflows; design/engineering assignments; manufacturing assignments; delivery/shipping assignments; logging/history.

ERP/back-office data and processes touched: accounting/financial, partner, inventory/stock, shipping/delivery, work/project data. Present as business processes the system organizes, not a feature list.

### Role inside the company (OWNER_VALIDATED)

The system functioned as a company operational work surface: managers found oversight information there, employees found what they needed for daily work, and important company processes were built around it. It survived surrounding system changes because of the importance and quality of the business process it encoded — that is the case's actual argument, not the technology itself.

**Do not publish an unsupported literal "everything ran in this system" claim** — the role was central, not total.

### ERP / integration evidence

| Evidence | Status |
|---|---|
| Owner recollection: approximately 2–3 ERP changes over the system's life | OWNER_VALIDATED / APPROXIMATE |
| Environment/system names recalled: Oracle, Tandofer, Apollo, EcoLine | OWNER_VALIDATED |
| Configuration connection-string keys/names associated with those same four systems | **VERIFIED** — confirms the systems existed and were integrated, independent of memory alone |
| Several systems existed side by side for a period (old environments kept accessible for historical-data retrieval) | OWNER_VALIDATED — genuinely useful integration-continuity evidence |
| Exact ERP replacement count/timeline as a precise, citable number | VERIFY_BEFORE_EXACT_CLAIM |
| Raw connection strings, server/database names, credentials, topology | **GATED / DO_NOT_PUBLISH — permanently**, not just "until verified" |
| ERP vendor names (Oracle/Tandofer/Apollo/EcoLine) themselves, published on the site | **GATED** pending explicit publication approval — the config-key evidence confirms they're real, not that naming them publicly is cleared |

Known integration mechanisms (OWNER_VALIDATED, safe as a general story): direct database connections; purpose-built interfaces; dedicated/custom permissions. Known integration flows: work/project numbers toward accounting; financial data; partner data; inventory; shipping; retrieval and presentation of ERP-held information inside the ARTIT system.

**Do not rewrite this as a modern REST/API architecture** — no evidence supports that framing; the real story (direct connections, purpose-built bridges, coexisting old/new environments) is more credible and more interesting precisely because it's specific.

- **Allowed**: "A rendszer több, egymást követő háttérrendszer-generáció idején is megőrizte a szerepét, miközben a mögöttes ERP-környezetek cserélődtek." (no exact count, no vendor names)
- **Prohibited**: naming the four systems publicly without separate clearance; asserting a specific "X ERP-t élt túl" count as settled fact.

### Technology evolution and scale

Technology lineage (OWNER_VALIDATED / VERIFIED): Classic ASP → ASP.NET Web Forms. Accurate story: the business system/operational model persisted while the implementation evolved and the surrounding ERP systems changed around it — the system remained useful and operational throughout.

| Scale claim | Status |
|---|---|
| ~100–150 employees (customer) | APPROXIMATE |
| ~50–100 users (system) | APPROXIMATE |

Both remain approximate unless a hard record establishes a precise figure — do not round these into an exact headline number.

### Screenshot evidence

See "Screenshot inventory" below. The work/project **plan-vs-actual** view is the currently preferred primary proof (real project control + financial/operational planning + genuine business software, not a mockup) — confirm this preference once the actual asset is inspected, not decided from description alone.

### Working title — audited, kept (Task 016)

> "A rendszer, amely több ERP-t is túlélt."

Audited against the evidence matrix above and **kept, unchanged** — it does not need the correction CS01's title needed. It uses "több" (several), not an exact count, matching this file's own allowed-wording pattern for the ERP claim; it names no vendor; "túlélt" (survived) accurately reflects the validated ERP-continuity story. Editorially, it also already matches CS01's approved title's register and rhythm (short, evidence-stated, no adjective-led claim). No revision needed or made.

### Superseded assumptions

- Removed: "building services / HVAC company" tag — not restated by this evidence pass; the pre-Task-015 file applied the *same* HVAC tag to both CS01 and CS02, which in hindsight reads as a placeholder guess rather than two independently confirmed facts. Treat CS02's industry as unstated until a future pass confirms it.
- Refined: "approx. 30–200 people" narrowed to "~100–150 employees" per this pass's own more specific estimate.
- Refined: "20+ year direction" is now grounded in a specific 2002 origin date plus "~last 10 years stable," a more precise and more defensible framing than a bare round-number claim.

---

## Case Study 01 vs. Case Study 02 — editorial distinction

Keep these genuinely different arguments, not two instances of one template (Task 015 §10, §13):

**Case Study 01 — stability / operational fit.** A mature ARTIT system was adapted near the company's launch, became part of everyday operation, required mainly refinement rather than repeated redevelopment, and remains operational.

> Editorial essence: good business software does not need to be continuously reinvented to remain useful.

**Case Study 02 — adaptability / integration longevity.** A custom system built around real company processes evolved over decades, survived multiple surrounding ERP generations, bridged old and new environments, evolved technologically, and remains operational.

> Editorial essence: the surrounding systems changed; the business operating layer remained.

Both essence statements are directions, not locked final copy — they're accurate summaries of the validated evidence, safe to build content architecture around, but the exact published sentence still needs the same review as any other headline claim.

## Proposed content architecture (Task 015 §13 — architecture only, not implemented)

Both draw from the shared section vocabulary above but sequence and weight it differently, reflecting each case's own actual evidence shape — not a mechanically identical structure.

### Case Study 01 — weighted toward operational fit

1. **Hero** — evidence-led, states the fit thesis directly (not a generic "meet our client" opener).
2. **Starting situation** — a new business, an existing ARTIT system available to adapt (the real, more interesting story than "built from scratch").
3. **Operational coverage** — the described business processes (job tracking through invoicing), organized as processes, not a feature list.
4. **How it works in practice** — the maintenance-scheduling screenshot as primary proof (see "Screenshot inventory").
5. **Concrete example** — the quotation-handling before/after, in the customer's own operational terms, no invented metric.
6. **Longevity** — the 2017 artifacts + the owner's decade framing, stated with the exact boundary documented above, not rounded up.
7. **What this demonstrates about ARTIT** — fit and restraint over reinvention; ties to `/rolunk/`'s "operation before technology" principle without repeating its copy.
8. **CTA** — restrained, matching the sitewide friction-reducing pattern already established everywhere else.

Given how thin the "why packaged software was insufficient" and "integrations" sections would be for this case (no strong evidence supplied for either), the shared-structure sections `03` and `06` are candidates to omit for CS01 rather than fill with padding — confirm once real content is drafted.

### Case Study 02 — weighted toward evolution / integration

1. **Hero** — states the "systems changed, the layer remained" thesis directly.
2. **Starting situation / solution logic** — a system built specifically for this company's real processes, evolving with company needs.
3. **How it works in practice** — the plan-vs-actual screenshot as primary proof.
4. **Business result / role in the company** — the "operational work surface" framing, with the explicit "not literally everything" caveat preserved in the copy, not just internally.
5. **Integrations and environment** — the ERP-continuity story (Classic ASP → ASP.NET Web Forms; 2–3 ERP generations; old/new environments coexisting for historical access), told at the caveated level documented above — this section carries real weight here, unlike CS01.
6. **Long term** — the 2002/2003 hard evidence, framed exactly as "traceable to 2002," not "unchanged since 2002."
7. **What this demonstrates about ARTIT** — integration continuity and long-term stewardship, distinct from CS01's fit argument.
8. **CTA** — same restrained, sitewide pattern.

## Screenshot placement strategy (Task 015 §14)

Four screenshots are described as available and anonymized; **none of the actual asset files exist in this repository yet** (`public/`, `src/assets/` are both empty — confirmed by direct repository search, not assumed). Every row below documents the *required slot*, not a delivered asset.

| # | Case | Content | Primary role | Section | Anonymization | Alt-text direction |
|---|---|---|---|---|---|---|
| 1 | CS01 | Maintenance scheduling | **Primary proof** for CS01 | "How it works in practice" | ANONYMIZED_ASSET_READY (claimed, not yet independently inspected) | Describe what's visibly shown (a scheduling view), not a business-outcome claim |
| 2 | CS01 | Quotation management | Supports the concrete before/after story | "Concrete example" (paired with the quotation-handling text) | ANONYMIZED_ASSET_READY (as above) | Describe the visible UI function, not an inferred benefit |
| 3 | CS02 | Plan-vs-actual (work/project) view | **Primary proof** for CS02 | "How it works in practice" | ANONYMIZED_ASSET_READY (as above) | Describe the comparison view shown, not a "proves ROI" claim |
| 4 | CS02 | (second CS02 screenshot — exact content not yet specified in the evidence pass beyond "two are available") | Secondary/supporting, exact section TBD once inspected | TBD | ANONYMIZED_ASSET_READY (as above) | TBD once identified |

**Required asset slots** (filenames are a recommendation, not yet created): `src/assets/case-studies/cs01-maintenance-scheduling.png`, `src/assets/case-studies/cs01-quotation-management.png`, `src/assets/case-studies/cs02-plan-vs-actual.png`, `src/assets/case-studies/cs02-[tbd].png` — using Astro's `image()` schema helper already referenced in `05-CONTENT-MODEL.md`'s `CaseStudy.heroImage` field, extended to a per-case array rather than a single hero image, once the collection is actually built.

For every screenshot, once the real file exists, run the full anonymization checklist in `12-ASSET-STRATEGY.md`'s "Anonymization" section before publication — this task could not perform that inspection itself (no file to inspect) and did not mark any screenshot as a verified pass. Legacy-system screenshots (both CS01's and CS02's likely qualify, given the underlying technology) should follow `12-ASSET-STRATEGY.md`'s "Legacy screenshots" rule: do not visually modernize, do not hide their age, contextualize with verified metadata (e.g., a restrained "IN USE / [verified duration]" label once the exact duration wording above is settled) rather than the current placeholder-style status labels.

## Visual language

Use: real screenshots; engineering metadata; timelines *only where a real progression exists* (CS02's ERP continuity is a real progression; do not invent one for CS01 — see `07-DESIGN-SYSTEM.md`'s locked "physical connectors only for real relationships/progression" rule); large evidence statements.

Do not: redesign legacy UI to look modern; hide their age; use fake device mockups; turn either story into a tech-stack showcase. Do not assume either case needs a decorative SVG brand-face merely because the other four production pages each have one — real screenshots already are strong visual/evidence material; a new diagram is justified only if it explains something the screenshots and copy can't (see `07-DESIGN-SYSTEM.md`'s locked "not every page needs a new visual model" principle, extended here to "a case detail page may need zero").

## Implementation status (Task 016)

Both cases are now live, production pages, not architecture-only: `/munkaink/uzemi-rendszer/` (CS01) and `/munkaink/erp-integracio/` (CS02) — see `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`'s "Case-study canonical route architecture" for the routing decision and `09-TECHNICAL-ARCHITECTURE.md` for the final collection schema. Source content: `src/content/case-studies/uzemi-rendszer.md`, `erp-integracio.md`.

**Screenshot inventory — resolved.** All four files identified in "Screenshot placement strategy" above now exist and are published: `src/assets/case-studies/case-01-maintenance-scheduling.png` (Exhibit 1, primary proof, CS01 "How it works in practice"), `case-01-quotation-management.png` (Exhibit 2, CS01 "Concrete example"), `case-02-plan-vs-actual.png` (Exhibit 3, primary proof, CS02 "How it works in practice"), and the previously-TBD fourth slot resolved as `case-02-cost-summary.png` (a "Vállalkozási és szállítási költségösszesítő" — contracting/delivery cost summary — used as supporting proof for CS02's "Integrations and environment" section, since it visibly demonstrates the system surfacing vendor/financial data of the kind that flows toward the ERP layer described in that section). Anonymization: see `12-ASSET-STRATEGY.md`'s "Screenshot intake (Task 016)" note for the full resolution (an initial pixel-level `BLOCKED` finding, then the owner's direct confirmation that displayed values are anonymized/fictionalized).

**Art direction**: three concepts explored and one selected — see `07-DESIGN-SYSTEM.md`'s "Case-study art direction (Task 016)" for the full record. "System Record" (numbered ledger rows, thin-border screenshot frames, no padded plate) won over "Evidence Dossier" (too dense/produced) and "Operational Narrative" (lost the evidence-record register entirely).

**Editorial essence statements** (from "Case Study 01 vs. Case Study 02 — editorial distinction" above) are published as each case's `essence` field, rendered nowhere verbatim as a section of its own but informing the Hero `statement` copy in both cases' Markdown source.
