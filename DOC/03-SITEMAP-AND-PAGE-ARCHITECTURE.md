# ARTIT.hu — Sitemap and Page Architecture

## Navigation

Desktop:

- Egyedi fejlesztés
- Munkáink
- Tardify
- Rólunk
- Beszéljünk →

Custom development dropdown:

- Áttekintés
- Üzleti alkalmazások
- Rendszerintegráció

No mega-menu.

## Page specification format

Each implemented page should be documented using:

```text
Route
Page purpose
Primary visitor question
Primary CTA
Section structure
Internal links
SEO/search intent
E-E-A-T role
Structured data role
Content source
Implementation status
```

## `/`

Purpose: positioning + qualification.

Sections:

1. Hero
2. Problem recognition
3. Decision / solution logic
4. Work / featured case studies
5. Longevity proof
6. Tardify
7. Process
8. Senior / Who
9. Final CTA

Internal links:

- `/egyedi-fejlesztes/`
- `/egyedi-fejlesztes/uzleti-alkalmazasok/`
- `/egyedi-fejlesztes/rendszerintegracio/`
- `/munkaink/`
- featured case studies
- `/tardify/`
- `/rolunk/`
- `/kapcsolat/`

## `/egyedi-fejlesztes/`

Purpose:

Explain the decision framework for custom software.

Expected content:

- symptoms;
- when packaged software is enough;
- when custom software becomes justified;
- custom application path;
- integration path;
- process digitalization as method;
- proof from case studies;
- CTA.

### `/egyedi-fejlesztes/` — implementation status (Task 009)

```text
Route                  /egyedi-fejlesztes/ (src/pages/egyedi-fejlesztes/index.astro)
Page purpose            decision framework for custom software — when it's justified, when it isn't
Primary visitor question   Mikor indokolt egyedi szoftvert fejleszteni — és mikor nem?
Primary CTA             Beszéljük át a problémát → (/kapcsolat/) — the page-specific CTA from DOC/02,
                        not the homepage's "Beszéljünk a projektről"
Section structure       6 sections: Hero (typography + one page-specific brand-face visual,
                        `OperatingFitField` — a static "fit/friction field," not a diagram of an
                        actual decision route; Task 009A — see 07-DESIGN-SYSTEM.md "Custom
                        Development brand-face"), When justified (3 plain-indexed signals,
                        deliberately not the homepage Problem section's JEL spine/dot device), When
                        not justified (tonal band, reusing the locked Decision restraint principle),
                        Two directions (Business Applications / System Integration, reusing
                        `.decision-paths` — see 07-DESIGN-SYSTEM.md), Approach (one quiet trust
                        statement, no rebuilt Process), Final CTA
Internal links          /egyedi-fejlesztes/uzleti-alkalmazasok/, /egyedi-fejlesztes/rendszerintegracio/
                        (neither built yet — linked per this document's own "approved future routes
                        may be linked" allowance), /munkaink/, /kapcsolat/
SEO/search intent       indexable (no noindex); title "ARTIT — Mikor indokolt egyedi szoftvert
                        fejleszteni?", description reuses the Hero lead verbatim (same pattern as `/`)
E-E-A-T role            decision-framework/expertise entry point; each of the two directions carries
                        its approved case-study working title as evidence (Business Applications →
                        Case Study 01, System Integration → Case Study 02, per DOC/02's own mapping)
Structured data role    none — unchanged, still deferred (see 13-CONTENT-GAPS-AND-VALIDATION.md)
Content source          01-BRAND-POSITIONING.md (verbatim quotes: "Kinőtte a kész megoldásokat?",
                        "Nem minden problémára kell egyedi szoftver...", the three problem-area
                        structure, the senior-collaboration statement), already-published homepage
                        copy reused for the same underlying facts (Decision paragraph, the two
                        directions' title/description/link, the Final CTA's friction-reducing copy),
                        02-INFORMATION-ARCHITECTURE.md (page role, CTA, child-page mapping)
Implementation status    Complete. Task 009A added the Hero brand-face visual (`OperatingFitField`) —
                        selected from a 3-concept exploration, see 07-DESIGN-SYSTEM.md. No `/en/`
                        equivalent — same translation-completeness gate as `/`.
```

## `/egyedi-fejlesztes/uzleti-alkalmazasok/`

Expected content themes:

- special workflow;
- business rules;
- roles and permissions;
- partner/work/project/work-order examples;
- mobile operational work;
- process digitalization framing where relevant;
- real project proof;
- CTA.

Do not present examples as a fixed product/module catalog.

## `/egyedi-fejlesztes/rendszerintegracio/`

Expected content themes:

- disconnected systems;
- duplicate entry;
- manual status/data transfer;
- ERP/CRM/webshop/custom database relationships;
- integration and automation;
- Case Study 02;
- CTA.

## `/munkaink/`

Structure:

- page intro;
- featured project stories;
- supporting proof if available;
- clear paths to full case studies.

Do not use generic portfolio grid as the primary pattern.

### `/munkaink/` — implementation status (Task 010)

```text
Route                  /munkaink/ (src/pages/munkaink/index.astro)
Page purpose            evidence hub — how ARTIT demonstrates that the systems it builds survive
                        real business operation, not a portfolio gallery
Primary visitor question   Tényleg megcsinálták már? (DOC/02's "Have they actually done this?")
Primary CTA             Beszéljünk róla → (/kapcsolat/), matching the homepage's own Final CTA
                        phrasing — DOC/06 §11's case-study-detail CTA ("Van hasonló problémája?")
                        is used as this section's headline instead
Section structure       4 sections: Hero (no CTA — the page states its thesis before showing
                        evidence, not before; carries the `LivingSystemField` brand-face visual as
                        of Task 010A — see 07-DESIGN-SYSTEM.md "Munkáink brand face"), evidence
                        principle (tonal band), two case entries (reusing the homepage's
                        `.work-teaser__list` evidence-record device, each linked to its related
                        custom-development direction), Final CTA. Deliberately short otherwise.
Internal links          /egyedi-fejlesztes/uzleti-alkalmazasok/, /egyedi-fejlesztes/rendszerintegracio/
                        (the approved Case Study ↔ direction mapping, DOC/02), /kapcsolat/
SEO/search intent       indexable (no noindex); title "ARTIT — Munkáink", description reuses the
                        Hero lead verbatim (same pattern as `/` and `/egyedi-fejlesztes/`)
E-E-A-T role            primary Experience hub (DOC/02); intentionally does not overstate its
                        current evidence depth — only the two approved working titles are shown,
                        no invented industry/size/duration/outcome
Structured data role    none — unchanged, still deferred (see 13-CONTENT-GAPS-AND-VALIDATION.md)
Content source          06-CASE-STUDY-ARCHITECTURE.md (the two approved working titles, the
                        Case Study ↔ direction mapping, the closing-CTA quote), already-published
                        homepage copy reused for identical underlying facts (Hero lead, Final CTA
                        copy), 02-INFORMATION-ARCHITECTURE.md (page role, visitor question)
Implementation status    Complete. Task 010A added the Hero brand-face visual (`LivingSystemField`)
                        after owner review reopened Task 010's original "no Hero visual" decision —
                        selected from a 5-concept exploration, see 07-DESIGN-SYSTEM.md. No `/en/`
                        equivalent — same translation-completeness gate as `/` and `/egyedi-fejlesztes/`.
```

### Case-study canonical route architecture — implemented (Task 016, recommended Task 015)

See `06-CASE-STUDY-ARCHITECTURE.md` for the underlying evidence.

**Canonical detail pages**: `/munkaink/[case-study]/`, confirming — not inventing — `02-INFORMATION-ARCHITECTURE.md`'s existing site-tree entry for this exact shape. This is where the full evidence-led narrative (both cases' proposed content architecture, `06-CASE-STUDY-ARCHITECTURE.md`) lives. Final slugs, decided alongside each case's approved title as recommended below: `/munkaink/uzemi-rendszer/` (CS01, from "…egy **üzemi rendszer**…") and `/munkaink/erp-integracio/` (CS02, evoking the ERP-continuity story without naming a vendor or an exact count) — both descriptive Hungarian words, matching every other route on this site, neither leaking the internal `case-01`/`case-02` ids into the URL. Implemented as two static routes (`src/pages/munkaink/uzemi-rendszer/index.astro`, `.../erp-integracio/index.astro`), each a thin wrapper around its own dedicated component (`CaseStudy01Page.astro`/`CaseStudy02Page.astro`) — not a dynamic `src/pages/munkaink/[slug].astro` template, since the two cases' real section sets genuinely differ (see `06-CASE-STUDY-ARCHITECTURE.md`'s "Proposed content architecture"); forcing both through one loop-driven template would have meant padding CS01 or flattening CS02's real integration story.

**Supporting service routes**: `/egyedi-fejlesztes/uzleti-alkalmazasok/` (CS01) and `/egyedi-fejlesztes/rendszerintegracio/` (CS02) — already the documented "Primary proof" mapping in `02-INFORMATION-ARCHITECTURE.md`. Neither child route is built yet (only the `/egyedi-fejlesztes/` pillar page itself exists); `directions.paths[].evidence` there still carries only a short working title and order index, not a duplicated case narrative — now additionally a link to the canonical case page (`evidence.href`, Task 016). This pattern is confirmed sound and should continue once the child pages themselves are built — embed a short excerpt/pointer to the relevant case, cross-link to the canonical `/munkaink/[case-study]/` page for the full story, never re-tell it in full on the service page.

**Cross-link direction — implemented (Task 016)**: canonical case page → its supporting service route (which "direction" does this case belong to) and → `/munkaink/` (the hub); service route (currently the `/egyedi-fejlesztes/` pillar page's own evidence block, pending the two child pages themselves) and `/munkaink/`'s own case list and the homepage's own Work section → canonical case page (its proof). All three content shapes (`home.work.cases[]`, `munkainkPage.cases[]`, `customDevPage.directions.paths[].evidence`) gained an optional `href` field carrying this link without breaking the case where a future case has no detail page yet.

**Breadcrumbs — implemented (Task 016)**: `<nav aria-label="Breadcrumb">` on both canonical case pages, following the route hierarchy (`/munkaink/` → case) as recommended, paired with a matching `BreadcrumbList` JSON-LD block — see "Structured-data recommendation" in `10-SEO-EEAT-STRUCTURED-DATA.md`. Not added anywhere else on the site; no other route is nested deep enough to need one yet.

**Avoid** (Task 015 §17's own explicit list, reaffirmed, honored in the Task 016 implementation): duplicate case content between the canonical page and either service route; competing canonical pages (only `/munkaink/[case-study]/` is canonical); service pages that quietly become full case studies; case pages that regress into generic service landing pages.

## `/tardify/`

Structure:

- product relationship;
- what Tardify proves about ARTIT;
- product origin/history only where validated;
- real product screenshot;
- CTA to `tardify.hu`.

### `/tardify/` — implementation status (Task 011)

```text
Route                  /tardify/ (src/pages/tardify/index.astro)
Page purpose            owned proof of ARTIT's long-term software philosophy — not a SaaS
                        marketing page for Tardify itself
Primary visitor question   Mi a Tardify, és mi a kapcsolata az ARTIT-tal? (DOC/02's "What is
                        Tardify and what is its relationship to ARTIT?")
Primary CTA             Tardify.hu → (https://tardify.hu, external) — the one page where sending
                        the visitor to the product itself is the honest primary action
Section structure       5 sections: Hero (reuses the exact already-published homepage Tardify
                        copy; Task 011A adds `TardifySpecimen`, a Hero brand-face visual, in the
                        desktop right column — see 07-DESIGN-SYSTEM.md "Tardify brand-face —
                        Product Specimen Plate"), why ARTIT has its own product (tonal band),
                        "same standard" — reuses `.tardify-proof` (Task 007D, second real usage,
                        left unchanged by Task 011A — see 07-DESIGN-SYSTEM.md "Tardify page
                        direction"), relationship to custom development (one honest cross-link to
                        /egyedi-fejlesztes/, no diagram — Task 007D.1's route-only-if-a-route-
                        exists rule still applies), Final CTA. No product screenshot — still no
                        approved evidence asset exists (re-confirmed Task 011A); see
                        07-DESIGN-SYSTEM.md and 13-CONTENT-GAPS-AND-VALIDATION.md.
Internal links          /egyedi-fejlesztes/, /kapcsolat/; external https://tardify.hu
SEO/search intent       indexable (no noindex); title "ARTIT — Tardify", description reuses the
                        Hero lead verbatim (same pattern as the other three pages)
E-E-A-T role            demonstrates product-development/UX/long-term-maintenance expertise
                        (DOC/01's "Own product" differentiator) without inventing metrics, a
                        release history, or a customer base for Tardify
Structured data role    none — unchanged, still deferred (see 13-CONTENT-GAPS-AND-VALIDATION.md)
Content source          01-BRAND-POSITIONING.md ("Own product" differentiator, shared ARTIT↔
                        Tardify positioning logic), already-published homepage Tardify copy
                        (Task 004/007) reused verbatim for the identical underlying facts,
                        02-INFORMATION-ARCHITECTURE.md (page role, visitor question)
Implementation status    Complete, including the Task 011A Hero brand-face visual. No `/en/`
                        equivalent — same translation-completeness gate as the other three pages.
                        The homepage's pre-existing "A Tardify története →" link, previously
                        pointing at an unbuilt route, now resolves correctly — confirmed, not
                        assumed.
```

## `/rolunk/`

Structure:

- who is behind ARTIT;
- senior direct collaboration;
- long-term software philosophy;
- how ARTIT works;
- Tardify relationship;
- real person/people;
- CTA.

### `/rolunk/` — implementation status (Task 012)

```text
Route                  /rolunk/ (src/pages/rolunk/index.astro)
Page purpose            trust — who ARTIT is and how direct/senior collaboration actually works,
                        not a generic agency About page
Primary visitor question   Kikkel és hogyan fogok együtt dolgozni? (DOC/02's "Who is behind ARTIT
                        and can I trust them with an important system?")
Primary CTA             Beszéljünk közvetlenül → (/kapcsolat/)
Section structure       5 sections: Hero (no CTA; already-approved homepage Senior/Who headline
                        split into two content-authored clauses — the page's entire focal device,
                        no diagram. Task 012A regridded the accent clause into a genuine two-column
                        `<h1>` at 900px+ instead of stacking it indented below the first, after
                        owner review found the original treatment left the desktop Hero's right
                        territory functionless empty space — see 07-DESIGN-SYSTEM.md "Rólunk art
                        direction"), what direct collaboration means in practice (with cross-
                        links to /egyedi-fejlesztes/ and /munkaink/), operation before technology
                        (tonal band, reuses the homepage Decision paragraph verbatim), continuity/
                        responsibility (reuses the homepage Longevity headline/statement verbatim,
                        cross-link to /tardify/), Final CTA. "real person/people" from this page's
                        own Structure list above was not built — DOC/13's person/portrait gate is
                        unconditionally unresolved (no name, role, biography, or photograph is
                        approved), so the page was designed to work honestly without one, per this
                        task's own explicit instruction.
Internal links          /egyedi-fejlesztes/, /munkaink/, /tardify/, /kapcsolat/
SEO/search intent       indexable (no noindex); title "ARTIT — Rólunk", description reuses the
                        Hero lead verbatim (same pattern as the other three implemented pages)
E-E-A-T role            demonstrates trustworthiness/experience through working-model specifics
                        (continuity of the same person, operation-before-technology approach)
                        rather than an unsupported biography or credential claim
Structured data role    none — deferred, same as every other page (13-CONTENT-GAPS-AND-VALIDATION.md)
Content source          01-BRAND-POSITIONING.md ("Senior direct collaboration" core statement),
                        already-published homepage Senior/Who, Decision, and Longevity copy (Task
                        007) reused verbatim for identical underlying facts, 02-INFORMATION-
                        ARCHITECTURE.md (page role, visitor question)
Implementation status    Complete, including the Task 012A Hero regrid. No `/en/` equivalent —
                        same translation-completeness gate as the other four pages. The homepage's
                        pre-existing "Rólunk →" link (Senior/Who CTA, previously pointing at an
                        unbuilt route) and the site nav's "Rólunk" link now both resolve correctly
                        — confirmed, not assumed.
```

## `/kapcsolat/`

Structure:

- expectation-setting;
- short contact form;
- alternative contact information if applicable;
- privacy/legal copy.

Initial form fields:

- Név
- Cég
- Email
- Röviden a probléma / projekt

### `/kapcsolat/` — implementation status (Task 013)

```text
Route                  /kapcsolat/ (src/pages/kapcsolat/index.astro)
Page purpose            conversation-entry — what's needed to start a conversation, not a generic
                        Contact Us / sales-funnel / support-portal / booking page
Primary visitor question   Mit kell elküldenem ahhoz, hogy el tudjunk kezdeni beszélni? (Task 013's
                        own framing of DOC/02's "I want to discuss the project.")
Primary CTA             Üzenet elküldése (the contact form itself — the page's one action peak)
Section structure       4 sections (Task 013A reduced this from Task 013's original 5 — see
                        below): Hero (no CTA button; the page's own four "what's useful to tell
                        us" prompts staggered in the desktop right column — "Conversation Field",
                        selected over two rejected concepts, see 07-DESIGN-SYSTEM.md "Kapcsolat
                        art direction"; locked as of Task 013A), what you don't need yet (tonal
                        band, moved ahead of the workspace), Conversation Workspace (the same four
                        prompts rendered fully as a real indexed list in the left column, the
                        actual contact form in the right column — one composition, not two
                        sections; posts to an owner-approved Formspree endpoint — name/email/
                        message only, no company/phone/budget/project-type field, per Task 013's
                        minimal-field-set rule, which deliberately supersedes this section's older
                        4-field sketch above), quiet close (no repeated CTA, since the workspace
                        form is already the action peak).

### `/kapcsolat/` — implementation status (Task 013A)

Owner visual review found the page conventional after the Hero: a standalone prompt section that
merely repeated the Hero's own four prompts with no independent job, and a form section with the
same functionless-desktop-dead-zone problem Task 012A had already fixed for `/rolunk/`'s Hero —
both confirmed on the real render, not assumed. The Hero itself was locked and not reopened. Three
post-Hero concepts were built and compared (`/art-direction/013a-contact-workspace-concepts`,
noindex): "Working Brief" (a technical frame around the same narrow form) and "Editorial Form"
(bold numbered fields, no frame) both left the same desktop dead zone; "Conversation → Starting
Point" — merging the prompts (context, left column) and the real form (the actual starting point,
right column) into one two-column composition — won, solving the dead zone and the prompt
duplication in the same move. See 07-DESIGN-SYSTEM.md "Kapcsolat post-Hero visual pass" for the
full record.
Internal links          none new — this is the page every other page's CTA already points to
SEO/search intent       indexable (no noindex); title "ARTIT — Kapcsolat", description reuses the
                        Hero lead verbatim (same pattern as every other implemented page)
E-E-A-T role            reduces the perceived barrier to starting a conversation through concrete,
                        honest guidance rather than a generic "contact us" invitation
Structured data role    none — no LocalBusiness/address/phone/Organization schema invented;
                        deferred, same as every other page (13-CONTENT-GAPS-AND-VALIDATION.md)
Content source          02-INFORMATION-ARCHITECTURE.md (page role, visitor question, friction-
                        reducing principle), the exact sitewide-reused finalCta copy (Task 007,
                        already published on five other pages) reused verbatim as this page's own
                        Hero, DOC/01's Decision-section "understand operation first" principle
                        (referenced as a concept for Section 3, not copied verbatim)
Implementation status    Complete, including the Task 013A Conversation Workspace visual pass. No
                        `/en/` equivalent — same translation-completeness gate as the other five
                        pages. Every sitewide "Beszéljünk"/contact CTA (header, every page's Final
                        CTA) now resolves to a real, functioning page instead of 404ing — audited
                        across all five other routes, not assumed.
```

## `/` — implementation status (Task 007)

```text
Route                / (src/pages/index.astro)
Page purpose          positioning + qualification
Primary visitor question   Can ARTIT solve the kind of business software problem we have?
Primary CTA            Beszéljünk a projektről → (/kapcsolat/)
Section structure       All nine sections implemented: 01 Hero (with the production SystemMap
                        component), 02 Problem/Recognition, 03 Decision, 04 Work, 05 Longevity,
                        06 Tardify, 07 Process, 08 Senior/Who, 09 Final CTA.
Internal links          /kapcsolat/, /munkaink/, /egyedi-fejlesztes/, /egyedi-fejlesztes/uzleti-alkalmazasok/,
                        /egyedi-fejlesztes/rendszerintegracio/, /tardify/, /rolunk/, https://tardify.hu —
                        none of the internal routes are built yet, linked per this document's own "approved
                        future routes may be linked" allowance; tardify.hu is external, per DOC/00's stated fact.
SEO/search intent       indexable (no noindex); title/description unchanged from Task 005A (still the
                        approved Hero copy — see 04-HOMEPAGE-CONTENT-ARCHITECTURE.md)
E-E-A-T role            positioning entry point; Sections 04/06/08 deliberately show approved
                        positioning language only — no case-study specifics, product screenshot or
                        person photo, since none is publication-safe yet (see 13-CONTENT-GAPS-AND-VALIDATION.md)
Structured data role    none yet — unchanged, still deferred (see 13-CONTENT-GAPS-AND-VALIDATION.md)
Content source          01-BRAND-POSITIONING.md, 04-HOMEPAGE-CONTENT-ARCHITECTURE.md (verbatim approved
                        copy throughout); Section 04's two case teasers use the documented working
                        titles only, with no invented specifics
Implementation status    All nine sections complete (Task 007). Hero's numeric "Proof direction" bullets
                        remain omitted (still TO VERIFY). Section 05's exact longevity numbers omitted —
                        only the underlying principle is published. Section 06 has no product screenshot
                        (none approved yet). Section 08 has no name/portrait (none verified yet).
```

Production header/navigation (`src/components/navigation/SiteHeader.astro`) implemented alongside the homepage (Task 005A) — see `09-TECHNICAL-ARCHITECTURE.md`. Task 007 fixed a real pre-existing bug in it: the mobile-menu `<ul>` had an unconditional `display: flex` that defeated the browser's native content-hiding for a closed `<details>`, causing ~6px of horizontal overflow at 768px even while visually collapsed — see `11-ACCESSIBILITY-AND-PERFORMANCE.md` for the fix and verification. No footer: no footer content (legal/contact/social) is defined anywhere in `DOC/`, and inventing it is explicitly disallowed — the page ends after Section 09.

## Task 014 — Site-wide cohesion & journey audit

A route/navigation-level summary; see `07-DESIGN-SYSTEM.md`'s "Task 014 — Site-wide cohesion audit" for the full visual-cohesion findings and `11-ACCESSIBILITY-AND-PERFORMANCE.md` for the accessibility/responsive sweep results.

**Cross-link graph, audited live** (not from source inspection alone): every one of the six primary routes is reachable from the header nav on every page. `/kapcsolat/` is a genuine internal-content dead end (its only in-body link is the external Formspree privacy policy) — confirmed intentional: it's the funnel's terminal page, and header-level reachability already covers it (Bucket C, protected). `/munkaink/`'s two case entries link only to their specific custom-development direction, not to `/egyedi-fejlesztes/` or `/rolunk/` themselves — the already-documented Case Study ↔ direction mapping (DOC/02), not an omission (Bucket C). The two custom-development child routes (`/egyedi-fejlesztes/uzleti-alkalmazasok/`, `/egyedi-fejlesztes/rendszerintegracio/`) still 404 when linked from `/`, `/egyedi-fejlesztes/`, and `/munkaink/` — re-confirmed still the existing, documented "approved future routes may be linked" convention (Task 005A/009), not a new defect (Bucket C).

**Fix (Bucket A) — homepage secondary CTA arrow**: `hero.secondaryCta.label` ("Munkáink megtekintése") was missing the trailing "→" every other `.link-standalone`-styled label on the site carries (confirmed via a site-wide grep of all 38 `.link-standalone` usages) — a typo-class inconsistency, not a content decision. Fixed to "Munkáink megtekintése →" in `src/content/pages/home/content.yaml`.

**Fix (Bucket A) — `/404` had no site navigation**: `src/pages/404.astro` rendered no `SiteHeader` and no `Container`/`.section` wrapper at all — the one route on the site a visitor can land on unintentionally (broken/mistyped link) offered exactly one way back in ("Vissza a kezdőlapra") instead of full navigation, and its content sat flush against the top divider instead of the standard section spacing every other page uses. Both added, matching the established structural pattern exactly — no new copy, no art-direction decision. Re-verified: zero overflow at 390–1920px, `<header>` count now 1 (confirmed against the built `dist/404.html`, not the dev server, which — per the established caveat in `11-ACCESSIBILITY-AND-PERFORMANCE.md` — inflates element counts via Astro's own dev-toolbar injection).

**Bucket B (recommended, not implemented) — `/tardify/`'s Final CTA duplicates the homepage's verbatim**: for a visitor whose session includes both `/` and `/tardify/` (a plausible path via the homepage's "A Tardify története →" link), seeing the identical Final CTA headline and label twice reads as redundant repetition, not reinforcement — unlike `/egyedi-fejlesztes/`, `/munkaink/`, and `/rolunk/`, which each already have their own distinct Final CTA headline over the same sitewide friction-reducing body copy. Recommend a future task write `/tardify/`'s own Final CTA headline (content decision, needs owner approval per this project's own discipline for even short headline sentences); scope small, risk low once approved.

**Bucket B (recommended, not implemented) — no current-page indication in `SiteHeader`**: confirmed no `aria-current`/active-state treatment exists anywhere in the nav. Not implemented, since the task's own brief explicitly withholds this unless it's a demonstrated real usability problem, and no such evidence was found this audit — noted for owner consideration; an `aria-current="page"`-only addition (no visual change) would be the lowest-risk variant if pursued later.

## Task 018 — Bilingual route map (HU ↔ EN)

`/en/*` is now live — 8 real, indexable production routes, one per real HU production page. English slugs are natural English words, not the Hungarian slug reused verbatim behind an `/en/` prefix (decided per-route alongside each page's final EN title, the same discipline `06-CASE-STUDY-ARCHITECTURE.md` already applied to the HU case-study slugs in Task 016) — see `09-TECHNICAL-ARCHITECTURE.md`'s Task 018 section for why this needed a dedicated route-mapping module (`src/lib/routes.ts`) rather than Astro's native locale-prefix helper alone.

| HU route | EN route |
|---|---|
| `/` | `/en/` |
| `/egyedi-fejlesztes/` | `/en/custom-development/` |
| `/munkaink/` | `/en/work/` |
| `/munkaink/uzemi-rendszer/` | `/en/work/operational-system/` |
| `/munkaink/erp-integracio/` | `/en/work/erp-integration/` |
| `/tardify/` | `/en/tardify/` (proper noun, same in both locales) |
| `/rolunk/` | `/en/about/` |
| `/kapcsolat/` | `/en/contact/` |
| `/adatkezeles/` (Task 019) | `/en/privacy/` (Task 019) |

`/egyedi-fejlesztes/uzleti-alkalmazasok/` and `/egyedi-fejlesztes/rendszerintegracio/` — still unbuilt (see the "Task 014" cross-link-graph note above and `14-LAUNCH-READINESS.md`'s "A2") — have no EN counterpart either, for the identical reason: nothing to translate until the HU route itself exists. `/art-direction/*` and `/design-foundation` are explicitly not translated (Task 018 §31) and stay HU-only exploration fixtures, unlinked from any production page in either locale.

**Language switch**: every one of the 8 pairs above links to its *exact* counterpart (verified via Playwright click-through on a sample, and via a full-build grep confirming no EN page ever links back to an untranslated HU-canonical path except the intentional language-switch link itself) — never a fallback to the locale homepage. See `09-TECHNICAL-ARCHITECTURE.md` for the `alternates`/`hreflang` implementation this shares its data with.

## Task 019 — final production route inventory

18 production routes total (9 HU + 9 EN), all indexable, all with a real unique title/description, all canonical URLs now absolute (`https://artit.hu/...`), all present in the generated sitemap:

| Locale | Route | Alternate counterpart |
|---|---|---|
| HU | `/` | `/en/` |
| HU | `/egyedi-fejlesztes/` | `/en/custom-development/` |
| HU | `/munkaink/` | `/en/work/` |
| HU | `/munkaink/uzemi-rendszer/` | `/en/work/operational-system/` |
| HU | `/munkaink/erp-integracio/` | `/en/work/erp-integration/` |
| HU | `/tardify/` | `/en/tardify/` |
| HU | `/rolunk/` | `/en/about/` |
| HU | `/kapcsolat/` | `/en/contact/` |
| HU | `/adatkezeles/` | `/en/privacy/` |
| EN | (mirror of each HU row above) | — |

Internal-only routes (28 `/art-direction/*` + `/design-foundation`, individually `noindex`, `robots.txt`-disallowed, sitemap-excluded via the same integration `filter`) and `/404` (`noindex`, sitemap-excluded) are unchanged from Task 017/018 — see that task's own inventory, still accurate.

Every route above now also carries: a footer (identity, `/kapcsolat/` + `/adatkezeles/` links, email, copyright — locale-aware); `aria-current` on its own nav entry where applicable (`"page"` for an exact match, `"true"` for a parent-section match, e.g. `/munkaink/`'s nav link while reading a case-study detail page); the sitewide favicon.

## SEO and structured data

See `10-SEO-EEAT-STRUCTURED-DATA.md`.
