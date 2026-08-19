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
