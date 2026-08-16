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

## `/` — implementation status (Task 005A)

```text
Route                / (src/pages/index.astro)
Page purpose          positioning + qualification
Primary visitor question   Can ARTIT solve the kind of business software problem we have?
Primary CTA            Beszéljünk a projektről → (/kapcsolat/)
Section structure       01 Hero, 02 Problem/Recognition, 03 Decision — implemented.
                        04–09 (Work, Longevity, Tardify, Process, Senior/Who, Final CTA) — not yet implemented; page ends after Section 03.
Internal links          /kapcsolat/, /munkaink/, /egyedi-fejlesztes/, /egyedi-fejlesztes/uzleti-alkalmazasok/, /egyedi-fejlesztes/rendszerintegracio/ (none of these routes are built yet — linked per the accepted architecture, per this document's own "Approved future routes may be linked even if not yet implemented" allowance)
SEO/search intent       indexable (no noindex); title/description set from approved positioning copy (see 04-HOMEPAGE-CONTENT-ARCHITECTURE.md)
E-E-A-T role            positioning entry point; no evidence/proof claims published yet (see below)
Structured data role    none yet — deferred, no verified Organization/entity facts exist (see 13-CONTENT-GAPS-AND-VALIDATION.md)
Content source          01-BRAND-POSITIONING.md, 04-HOMEPAGE-CONTENT-ARCHITECTURE.md (verbatim approved copy); one short working-copy paragraph in Section 03, faithful to the documented message architecture (see 04's "Key copy" direction)
Implementation status    Sections 01–03 complete (Task 005A). Hero's "Proof direction" bullets (20+/10+ years, Tardify) intentionally omitted — still TO VERIFY per 13-CONTENT-GAPS-AND-VALIDATION.md.
```

Production header/navigation (`src/components/navigation/SiteHeader.astro`) implemented alongside the homepage — see `09-TECHNICAL-ARCHITECTURE.md`. No footer yet: no footer content (legal/contact/social) is defined anywhere in `DOC/`, and inventing it is explicitly disallowed.

## SEO and structured data

See `10-SEO-EEAT-STRUCTURED-DATA.md`.
