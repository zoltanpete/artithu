# Task 018 --- English Production Locale

## 1. Intent

**Type:** production localization + copy adaptation + locale routing +
multilingual SEO/QA.

Create a complete production-quality English locale for the current
ARTIT public site.

This is **not a literal translation task**. English must preserve the
approved positioning, evidence boundaries, hierarchy and senior tone
while reading as natural professional English.

HU remains the default locale. EN uses `/en/...`.

Do not reopen approved visual work unless English copy exposes a genuine
layout issue.

## 2. Launch context

Task 017 found the site close to launch. Final
privacy/legal/footer/domain/favicon/small launch-polish work belongs to
Task 019, not this task.

Owner-supplied facts now available for later launch work: - operator:
`ARTIT Multimédia Kft.` - address: `2013 Pomáz, Árvalányhaj u. 37.` -
contact: `pete.zoltan@gmail.com` - tax no.: `23552986-2-13` - company
reg. no.: `13-09-150805` - production domain: `artit.hu` - hosting:
FORPSI / BlazeArts Kft. - host address:
`1096 Budapest, Thaly Kálmán utca 39.` - host reg. no.: `01-09-389087` -
host tax no.: `12539833-2-43` - EU VAT: `HU12539833`

Record these safely in internal source-of-truth docs if still gated, but
**do not implement the final privacy/legal notice in Task 018** and do
not infer legal roles.

## 3. Baseline

Before changes: 1. confirm branch/HEAD and inspect `git status`; 2. run
`npm run check`; 3. run `npm run build`; 4. record
errors/warnings/hints, page count and sitemap count; 5. inventory HU
public routes and internal routes; 6. confirm current Astro i18n and
Task 017 robots/sitemap behavior.

Protect previous uncommitted Tasks 014--017 work.

## 4. Source of truth

Inspect at minimum: - `DOC/01-BRAND-POSITIONING.md` -
`DOC/02-INFORMATION-ARCHITECTURE.md` -
`DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md` -
`DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md` -
`DOC/06-CASE-STUDY-ARCHITECTURE.md` - `DOC/07-DESIGN-SYSTEM.md` -
`DOC/08-COMPONENT-LIBRARY.md` - `DOC/09-TECHNICAL-ARCHITECTURE.md` -
`DOC/10-SEO-EEAT-STRUCTURED-DATA.md` - `DOC/11*` -
`DOC/12-ASSET-STRATEGY.md` - `DOC/13-CONTENT-GAPS-AND-VALIDATION.md` -
`DOC/14-LAUNCH-READINESS.md` - current content collections,
`src/lib/i18n.ts`, Astro config, header/language switch,
metadata/breadcrumb/schema helpers and all public HU pages.

Reuse the existing localized content architecture where appropriate.

## 5. Route scope

Create EN counterparts for **every real public HU content page**.

Expected scope includes: - `/` → `/en/` - `/egyedi-fejlesztes/` - all
real service child routes - `/munkaink/` - `/munkaink/uzemi-rendszer/` -
`/munkaink/erp-integracio/` - `/tardify/` - `/rolunk/` - `/kapcsolat/`

Do not translate `/art-direction/*`, `/design-foundation`, fixtures or
tests.

Document the final HU ↔ EN route map before wiring navigation.

## 6. English URL strategy

Use natural, stable English slugs beneath `/en/`.

Requirements: - human-readable; - natural English; - no customer
identity; - no keyword stuffing; - clean one-to-one HU alternate
mapping.

Prefer natural English routes such as `/en/work/` over Hungarian slugs
under `/en/`, unless the existing architecture provides a strong reason
otherwise.

## 7. Copy adaptation

Target voice: - senior; - precise; - calm; - direct; - technically
credible; - business-first; - non-salesy.

Avoid generic agency language: "cutting-edge", "digital transformation
partner", "unlock your potential", "future-proof", "seamless
integration", "innovative solutions tailored to your needs", etc.

Preserve restraint. Do not make EN louder than HU.

## 8. Terminology

Establish a compact EN terminology map for recurring concepts such as: -
egyedi fejlesztés; - egyedi szoftver; - üzleti alkalmazás; -
rendszerintegráció; - működés; - üzemi rendszer; - munkafolyamat; -
munkalap; - hibajegy; - karbantartás-ütemezés; - ajánlatkezelés; -
terv--tény; - háttérrendszer; - működési réteg; -
partnernyilvántartás; - munkaszám; - jóváhagyás; -
számlázás-előkészítés.

Consistency matters, but natural context wins over forced one-to-one
translation.

## 9. Homepage

Adapt the full production homepage, preserving architecture and approved
visual grammar.

Localize all visible/accessible `SystemMap` labels and states.

If English labels need shortening for composition, use concise natural
copy rather than aggressive typography reduction.

## 10. Custom-development/service pages

Adapt `/egyedi-fejlesztes/` and all real production child/service pages.

Preserve the pillar's decision role: when custom software is justified
--- and when it is not.

Do not turn EN service pages into SEO boilerplate.

Localize `OperatingFitField` visible/accessibility text where
applicable.

Cross-links must point to EN case-study routes.

## 11. Work hub

Adapt `/munkaink/` as the English evidence hub. Choose natural
navigation/page terminology (e.g. `Work`) rather than mechanical
translation.

Preserve `LivingSystemField`, anonymous-case discipline and evidence-led
summaries.

## 12. Case Study 01

HU title: \> **Egy üzemi rendszer, amely egy évtizede teszi a dolgát.**

Create a natural English title preserving operational usefulness,
stability and decade-long continuity.

Possible direction: \> **An operational system that has been doing its
job for a decade.**

Improve if a more natural ARTIT-quality formulation exists.

Preserve: - mature existing ARTIT system adapted to the business; - not
a customer-specific greenfield build; - mainly refinements afterward; -
still operational; - quotation-management before/after; - real
screenshots; - 2017 evidence; - no fake metrics.

Never reintroduce the disproven "grew with the company" framing.

Localize screenshot alt/captions.

## 13. Case Study 02

HU title: \> **A rendszer, amely több ERP-t is túlélt.**

Create a natural English title.

Possible direction: \> **The system that outlasted several ERP
generations.**

Preserve: - custom-built system; - history evidenced to 2002; - 2003
documented function; - Classic ASP → ASP.NET Web Forms; - multiple
surrounding backend/ERP generations; - coexistence of old/new
environments; - durable operational layer; - real screenshots; - no
gated vendor names unless current docs explicitly allow them.

Never imply unchanged code since 2002.

## 14. Tardify

Adapt `/tardify/`.

Keep the distinction: - ARTIT = senior custom software development; -
Tardify = ARTIT's own software/product.

Do not invent Tardify origin/lineage. Preserve `TardifySpecimen`.

## 15. About

Adapt `/rolunk/` naturally without inventing people, biographies,
portraits, team size or history.

Preserve direct-collaboration/trust positioning and editorial Hero.

## 16. Contact

Adapt `/kapcsolat/` including Hero, prompts, form labels,
submit/success/error states and accessibility text.

Keep the existing Formspree endpoint unless architecture requires
otherwise.

Do not implement final privacy/legal copy here. Ensure EN can later link
cleanly to an EN privacy notice.

## 17. Language switch

Enable the prepared language-switch mechanism.

Requirements: - exact HU page ↔ exact EN counterpart; - no fallback to
locale home where a detail counterpart exists; - keyboard accessible; -
current locale understandable; - clean mobile behavior.

Use normal navigation, not runtime translation.

## 18. Alternate mapping

Create one reliable HU ↔ EN route mapping source of truth supporting: -
language switch; - canonical; - hreflang; - breadcrumbs; -
cross-links; - sitemap alternates if supported.

Avoid scattered hand-coded mappings and avoid over-engineering beyond
HU/EN.

## 19. Canonical / hreflang

For every production pair: - self canonical; - `hreflang="hu"`; -
`hreflang="en"`; - `x-default` if appropriate.

Do not emit alternates for nonexistent routes.

Production domain is `https://artit.hu`. If Task 017 intentionally
deferred final host wiring to Task 019, prepare the locale architecture
so Task 019 can set it once without rewriting metadata; document the
choice.

## 20. Sitemap / robots

Extend Task 017's sitemap/robots architecture rather than replacing it.

Verify both locales are represented while: - internal art-direction/dev
routes remain excluded/protected; - 404 excluded; - no duplicates.

## 21. Metadata

Write natural EN metadata for every EN page: - title; - description; -
OG title/description/URL; - canonical; - locale metadata where
supported.

Avoid duplicate descriptions and mechanical translation. Reuse the
default OG image unless there is a real need for more.

## 22. Structured data

Localize visible-language structured data: - WebSite/WebPage where
used; - BreadcrumbList; - Article/case-study metadata where used; -
Organization only if current factual strategy supports it.

URLs and breadcrumb names must match locale. No gated data or invented
schema.

## 23. Screenshots

Reuse the same real anonymized screenshots.

Translate alt text, captions and context.

**Do not fabricate English screenshot variants.** Embedded Hungarian
historical UI is authentic evidence and may remain Hungarian.

## 24. Visual/responsive guard

EN inherits the approved ARTIT visual system.

Audit real renders because line lengths differ.

Check Hero titles, nav, language switch, SystemMap, service titles, case
titles, metadata, CTAs, About Hero and Contact.

Allowed: small locale-aware layout/copy adjustments.\
Not allowed: redesign, global type reduction, hiding content to avoid
wrapping.

## 25. Accessibility

Verify: - root `lang="en"`; - H1/heading order; - landmarks; - skip
link; - keyboard/focus; - image alt; - forms; - breadcrumbs; -
decorative SVG hiding; - reduced motion; - no overflow; - accessible
language switch.

## 26. Internal-link locale integrity

An EN visitor should not unexpectedly fall back to HU.

Audit header, logo, CTAs, work links, service evidence links, case
links, breadcrumbs, Tardify, Contact and any footer/navigation present.

## 27. Content QA

Perform a dedicated English editorial pass for: - literal Hungarian
syntax; - unnatural grammar; - terminology inconsistency; - false
friends; - overly long headings; - agency clichés; - stronger-than-HU
claims; - spelling convention inconsistency.

Use one consistent international English convention.

## 28. Evidence parity

Compare both case studies HU vs EN claim-by-claim.

EN must not: - strengthen claims; - expose gated information; - remove
qualifications; - change dates/counts; - misdescribe screenshots; -
loosen technical-history accuracy.

## 29. Content gates

Update `DOC/13`.

Resolve the blanket EN marketing-copy/route gate once complete.

Do **not** mark EN legal/privacy copy complete; that remains Task 019.

## 30. Documentation

Update relevant source-of-truth docs: - `DOC/02` bilingual IA/route
map; - `DOC/03` route/indexability; - `DOC/09` locale/alternate
architecture; - `DOC/10` canonical/hreflang/multilingual SEO; - `DOC/11`
bilingual QA; - `DOC/13` EN gate; - `DOC/14` launch-readiness impact if
appropriate.

Document final slugs, terminology, language-switch architecture and
remaining Task 019 dependencies.

## 31. Internal routes

Do not translate internal art-direction/design-foundation routes.
Preserve Task 017 noindex/robots protections and avoid broken language
switches there.

## 32. Performance / JS

Do not introduce a client-side localization framework.

Keep Astro-native static locale routing and the low/no-JS principle.

An increased page count from real EN routes is expected.

## 33. Scope guard

### In scope

-   complete EN production copy;
-   EN routes/slugs;
-   language switch;
-   alternate mapping;
-   metadata;
-   canonical/hreflang;
-   bilingual sitemap;
-   localized breadcrumbs/schema;
-   responsive fixes required by EN;
-   bilingual content/evidence QA;
-   docs.

### Out of scope

-   final privacy/legal notice;
-   footer/imprint implementation;
-   legal compliance claims;
-   favicon creation;
-   unrelated nav polish;
-   unrelated Tardify CTA polish;
-   analytics/Search Console;
-   more cases/screenshots;
-   major redesign;
-   customer identities/metrics.

These belong to Task 019 or post-launch.

## 34. Validation

Run: 1. `npm run check` 2. `npm run build`

Then verify: - every HU route; - every EN route; - every HU↔EN switch
pair; - canonical/hreflang; - sitemap/robots; - breadcrumbs; - internal
links; - evidence parity; - form states; - screenshots; - internal-route
protection; - console; - assets; - client-JS impact.

Render QA at: - 320; - 375; - 414; - tablet/intermediate; - 1280; -
1440.

## 35. HU regression

Re-check approved HU pages after shared i18n changes.

Protect: - `SystemMap`; - `OperatingFitField`; - `LivingSystemField`; -
`TardifySpecimen`; - About Hero; - Contact Workspace; - both System
Record case pages.

HU should remain stable except intentional language-switch activation or
documented corrections.

## 36. Completion criteria

Complete only when: - every real HU production content page has a
coherent EN counterpart; - EN reads naturally; - evidence parity
holds; - switch works page-to-page; - EN routes are production-real; -
metadata localized; - canonical/hreflang correct or cleanly prepared for
final host wiring; - bilingual sitemap architecture works; - internal
routes are not exposed; - responsive and HU regression QA pass; -
checks/build pass; - blanket EN content gate is resolved; - remaining
work is isolated to Task 019.

## 37. Completion report

### 1. Final status

`COMPLETE`, `COMPLETE WITH GATES`, or `BLOCKED`

### 2. Repository baseline

Branch, HEAD, checks/build, before/after page and sitemap counts.

### 3. Final HU ↔ EN route map

### 4. English terminology decisions

### 5. Homepage adaptation

### 6. Service-page adaptation

### 7. Work-hub adaptation

### 8. Case Study 01

Final EN title, evidence parity, screenshots.

### 9. Case Study 02

Same.

### 10. Tardify / About / Contact

### 11. Language-switch architecture

### 12. SEO / canonical / hreflang / sitemap

### 13. Structured data

### 14. Accessibility / responsive QA

### 15. HU regression

### 16. Performance / JS impact

### 17. Content gates changed

### 18. Documentation updated

### 19. Validation results

### 20. Remaining launch items

Explicitly isolate Task 019 work.

### 21. Final readiness state

Use:

**`READY FOR FINAL PRE-LAUNCH TASK`**

only if EN production locale is complete enough that Task 019 can focus
on privacy/legal/footer/domain/favicon/small launch polish/deployment
readiness.

Otherwise:

**`EN PRODUCTION LOCALE BLOCKED`**

with exact reasons.

## 38. Core principle

The English site should not feel translated.

It should feel like ARTIT speaks English.

Same company. Same evidence. Same design system. Natural English.
