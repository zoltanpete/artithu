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

## `/tardify/`

Structure:

- product relationship;
- what Tardify proves about ARTIT;
- product origin/history only where validated;
- real product screenshot;
- CTA to `tardify.hu`.

## `/rolunk/`

Structure:

- who is behind ARTIT;
- senior direct collaboration;
- long-term software philosophy;
- how ARTIT works;
- Tardify relationship;
- real person/people;
- CTA.

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

## SEO and structured data

See `10-SEO-EEAT-STRUCTURED-DATA.md`.
