# Task 017 --- ARTIT Pre-Launch Readiness Audit & Prioritized Launch Plan

## 1. Intent

**Type:** site-wide production-readiness audit + launch-gap
prioritization.

Determine exactly what remains between the current ARTIT site and a
credible public launch. Separate genuine launch blockers from pre-launch
quality work, post-launch improvements, and intentional decisions.

This is **not another visual redesign task**.

Answer one question:

> **What still has to be done before ARTIT can launch publicly with
> confidence?**

Protect already-approved work. Do not manufacture work merely because
further polish is possible.

## 2. Production baseline to preserve

Treat these as approved unless a genuine functional, factual,
accessibility, privacy, SEO or launch-readiness issue is found:

-   homepage + `SystemMap`;
-   `/egyedi-fejlesztes/` + `OperatingFitField`;
-   `/munkaink/` + `LivingSystemField`;
-   `/tardify/` + `TardifySpecimen`;
-   `/rolunk/` editorial Hero;
-   `/kapcsolat/` Conversation Workspace and real form;
-   CS01 `/munkaink/uzemi-rendszer/`;
-   CS02 `/munkaink/erp-integracio/`;
-   System Record case-study visual system;
-   real anonymized screenshots.

CS01 approved title:

> **Egy üzemi rendszer, amely egy évtizede teszi a dolgát.**

Do not visually equalize CS01 and CS02 merely because CS02 naturally has
more evidence.

## 3. Repository baseline

Before changes:

1.  Confirm branch/HEAD.
2.  Run `npm run check`.
3.  Run `npm run build`.
4.  Record errors/warnings/hints, page count, sitemap count and build
    result.
5.  Inventory production/public routes.
6.  Inventory `/art-direction/`, `/design-foundation/`, preview,
    fixture, test and experimental routes.
7.  Inspect `git status`.

Do not assume Task 016's counts are still current.

## 4. Source-of-truth audit

Inspect current authoritative docs, including at minimum:

-   `DOC/00*`
-   `DOC/01-BRAND-POSITIONING.md`
-   `DOC/02-INFORMATION-ARCHITECTURE.md`
-   `DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md`
-   `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
-   `DOC/06-CASE-STUDY-ARCHITECTURE.md`
-   `DOC/07-DESIGN-SYSTEM.md`
-   `DOC/08-COMPONENT-LIBRARY.md`
-   `DOC/09-TECHNICAL-ARCHITECTURE.md`
-   `DOC/10-SEO-EEAT-STRUCTURED-DATA.md`
-   `DOC/11*`
-   `DOC/12-ASSET-STRATEGY.md`
-   `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Also inspect README/deployment config, Astro config, environment
examples, public assets and production-relevant scripts.

## 5. Finding buckets

Classify every meaningful finding:

### A --- LAUNCH BLOCKER

Examples: broken critical route/form, privacy leak, secret, wrong
production indexing/canonical, gated/false claim, severe
accessibility/mobile failure, broken deployment configuration, genuinely
required missing legal information.

### B --- SHOULD FIX BEFORE LAUNCH

Important credibility/quality issue: sitemap/robots, metadata
inconsistency, favicon/OG problem, dead link, contact UX issue, minor
accessibility problem, important placeholder.

### C --- POST-LAUNCH

Useful but unnecessary to launch: EN, more cases, richer schema,
analytics, content marketing, optional animation/polish, future
permissions.

### D --- INTENTIONAL / DO NOT CHANGE

Anonymous cases, no unsupported metrics, no fake testimonials, gated EN,
different case density, old real UI screenshots, restrained JS,
page-specific brand faces.

Do not turn Bucket D into work.

## 6. Public route/indexability inventory

From actual source/build, record for every route:

-   route;
-   purpose;
-   public vs internal;
-   intended indexability;
-   canonical;
-   sitemap inclusion;
-   navigation status.

Explicitly inspect: - `/`; - `/egyedi-fejlesztes/`; - service child
routes; - `/munkaink/`; - both case pages; - `/tardify/`; -
`/rolunk/`; - `/kapcsolat/`; - `/404`; - all
art-direction/design-foundation/dev routes; - accidental fixtures; - EN
routes.

The final public surface must be intentional.

## 7. Search/indexing readiness

Audit rendered production output for:

-   robots meta;
-   canonicals;
-   sitemap;
-   `robots.txt`;
-   production hostname/site URL;
-   accidental `noindex`;
-   accidental indexability of internal routes;
-   internal routes in sitemap;
-   case-study canonicals;
-   404 indexing.

Production pages should be indexable unless explicitly intended
otherwise.

Art-direction/dev/design-foundation routes must not become search
landing pages. Decide whether they should remain built + noindex, be
sitemap-excluded, or be removed from production routing. Choose the
simplest robust solution.

## 8. Sitemap and robots

Previously deferred; now explicitly audit and, if small/low-risk,
implement.

Check: - sitemap integration; - emitted routes; - internal-route
exclusions; - `robots.txt`; - sitemap reference; - production host; -
case routes; - 404 exclusion.

Avoid elaborate crawler policy.

## 9. Metadata and sharing

Audit all public HU pages for: - unique title; - unique meta
description; - canonical; - `lang`; - OG title/description/URL; - OG
image strategy; - Twitter/X metadata only if used; - favicon/site icon.

Check whether sharing currently has a valid OG image. A single strong
ARTIT default OG image is sufficient for launch if pragmatic. Do not
turn this into a social-media design project.

## 10. Site identity assets

Audit: - favicon; - SVG icon if used; - Apple touch icon if relevant; -
logo rendering; - browser title/site name consistency.

Do not create PWA infrastructure without a requirement.

## 11. Contact journey --- launch critical

Test: 1. homepage CTA → contact; 2. service CTA → contact; 3. case CTA →
contact; 4. understand what to send; 5. required fields; 6. submission;
7. success state; 8. failure state; 9. keyboard; 10. mobile; 11.
native/no-JS fallback where designed.

The current approved Formspree endpoint is production-relevant.

Do not spam it. One controlled test is enough if safe. If live
submission cannot be performed, report that limitation.

Audit labels, email field, honeypot, errors, success, focus, processor
disclosure and privacy wording.

## 12. Legal/privacy/company-information audit

Do **not** invent legal requirements or legal/company facts.

Inspect what the site collects and exposes. Determine whether launch
genuinely needs owner-supplied: - privacy notice; -
data-controller/company identification; - Formspree processing
disclosure; - company/imprint details; - cookie information.

Separate implementation facts from legal advice.

Never guess company name, address, tax/company number, public email or
other legal details.

If no non-essential cookies/trackers exist, do not invent a
cookie-banner requirement.

## 13. Analytics/tracking audit

Inspect source for: - analytics; - tag managers; - pixels; - session
recording; - third-party embeds; - tracking cookies; - external
resources with privacy implications.

Classify as configured/broken/absent intentionally/post-launch useful.

Analytics is not automatically a launch blocker. Do not add it just
because websites often have it.

## 14. External dependencies

Inventory production third parties such as Formspree, external fonts,
analytics, CDNs, embeds/APIs.

Record: - purpose; - core vs optional; - failure behavior; - privacy
relevance; - client/build-time; - secret exposure risk.

Never document secret values.

## 15. Security/secrets audit

Search source and built output for accidental: - API keys/tokens; -
credentials; - connection strings; - server/database names; - private
customer info; - unintended personal data; - committed environment
files; - debug output.

Specifically confirm CS02's internal ERP/config evidence did not leak.

Do not reproduce secrets in the report.

## 16. Content gates

Review `DOC/13`.

For every remaining gate determine: - launch blocker? - future-only
blocker? - obsolete? - intentional?

Likely non-blockers, subject to actual copy: - customer
identities/logos; - testimonials; - exact metrics; - EN; - Tardify
lineage.

Do not treat optional evidence expansion as a site-wide launch blocker.

## 17. Tardify audit

Check `/tardify/`: - why Tardify appears on ARTIT is understandable; -
no overstatement of product/customer evidence; - no unapproved origin
history; - CTA makes sense; - custom development vs product distinction
is clear; - no broken link.

Do not redesign if already clear.

## 18. About/trust audit

Check `/rolunk/` without inventing team members, portraits, bios, team
size or history.

Classify missing person/legal identity as blocker, pre-launch
improvement or future E-E-A-T improvement based on actual site needs.

## 19. Navigation/orientation/footer/404

Audit: - header/footer navigation; - current-page indication; -
logo/home; - CTA consistency; - breadcrumbs; - case return paths; -
keyboard/mobile nav; - footer identity/contact/legal links if
required; - no dead links; - 404 recovery/status/indexing/mobile.

Only small fixes are in scope.

## 20. Accessibility launch sweep

At minimum: - one meaningful H1; - heading order; - landmarks; - skip
link if architecture uses one; - keyboard; - focus; - form
labels/errors; - image alt; - decorative SVG hiding; - contrast; -
reduced motion; - link purpose; - breadcrumb semantics; - language; - no
narrow-width overflow.

Classify severity. Do not destabilize approved design for theoretical
perfection.

## 21. Performance audit

Using production build inspect: - client JS by route; - image
payloads; - screenshot variants; - font loading; - render-blocking
resources; - oversized assets; - unused art-direction production
assets; - third-party requests; - layout-shift risks.

Protect the low/no-client-JS principle. Avoid meaningless
micro-optimization.

## 22. Responsive/runtime sweep

Inspect real renders at representative widths: - 320; - 375; -
390/414; - tablet; - 1280; - 1440.

Prioritize nav, Heroes, brand faces, screenshots, forms, CTAs, footer,
case pages, overflow/collisions.

Also test representative pages for console errors, broken assets, script
failures, malformed JSON-LD and navigation failures.

Do not claim browser coverage not actually tested.

## 23. Structured data

Audit rendered JSON-LD: - valid JSON; - matches visible content; - no
gated data; - correct canonical URLs; - breadcrumbs; - factual
Organization data only; - no fictional schema; - no
duplicate/conflicting entities.

Do not schema-spam.

## 24. Locale

HU remains production locale.

Confirm: - no accidental `/en/` routes; - no dead language switch; - no
hreflang to unavailable EN; - no placeholder EN leakage.

EN is post-launch/content-gated, not a HU launch blocker.

## 25. Hosting/deployment readiness

Inspect repository-known production configuration: - build command; -
output; - site/base URL; - redirects; - 404 behavior; - environment
variables; - Formspree; - HTTPS assumptions; - caching/static assets
where configured.

Do not invent host-specific config. If host verification needs owner
input, create a precise manual launch item.

## 26. Small fixes allowed

Small, obvious, low-risk launch corrections may be implemented, e.g.: -
noindex/sitemap exclusion; - simple robots.txt; - canonical
correction; - existing favicon wiring; - dead link; - small
accessibility attribute; - metadata duplication; - trivial 404 issue.

Do **not** implement: - major new pages; - assumed legal copy; - new
brand identity; - analytics platform; - EN; - new cases; - large
footer/contact redesign; - speculative SEO content; - non-essential
visual polish.

Larger work becomes a follow-up task.

## 27. Launch-gap matrix

Produce an authoritative matrix:

  -------------------------------------------------------------------------------
  ID       Area     Finding   Bucket   Evidence   Required   Owner    Suggested
                                                  action     input    task
                                                             needed   
  -------- -------- --------- -------- ---------- ---------- -------- -----------

  -------------------------------------------------------------------------------

Use only meaningful items.

## 28. Prioritized path to launch

Produce the **smallest credible path to launch**.

Separate: 1. genuine blockers; 2. coherent pre-launch quality pass; 3.
deploy/smoke test; 4. post-launch backlog.

Do not assume another large task is needed.

## 29. Owner-input list

List only facts/assets/decisions only the owner can provide.

For each state: - why needed; - whether launch-blocking; - where used.

Do not ask for unnecessary information.

## 30. Production launch checklist

Create a reusable launch-day checklist covering only actionable items,
such as: - production build; - domain/canonical; - HTTPS; -
sitemap/robots; - public 200s; - 404; - form; - internal/noindex
routes; - screenshots; - console; - mobile smoke; - share metadata; -
secrets; - analytics only if intentionally configured.

## 31. Documentation

Update source-of-truth docs only where the audit establishes a real
decision.

Consider: - `DOC/03`; - `DOC/09`; - `DOC/10`; - `DOC/11`; - `DOC/12`; -
`DOC/13`.

If useful, create: `DOC/14-LAUNCH-READINESS.md`

only if it becomes the clear authoritative home for the
matrix/checklist.

## 32. Validation

After any source/config fixes: 1. `npm run check`; 2. `npm run build`;
3. compare page count; 4. compare sitemap; 5. verify indexability; 6.
rerun affected runtime/visual checks; 7. inspect final diff.

Even for docs-only changes, run normal repository validation unless
there is a concrete reason not to.

## 33. Final readiness state

End with exactly one:

### `READY FOR FINAL LAUNCH TASK`

No Bucket A blocker; remaining Bucket B work is clear enough for one
final launch task.

### `READY TO DEPLOY`

No Bucket A blocker and no meaningful Bucket B pre-launch work remains.

### `LAUNCH BLOCKED`

At least one genuine blocker needs owner input or non-trivial
implementation.

Do not use `LAUNCH BLOCKED` merely because optional improvements remain.

## 34. Completion report

### 1. Final status

`COMPLETE`, `COMPLETE WITH FIXES`, or `BLOCKED`

### 2. Launch readiness

One of the three states above.

### 3. Repository baseline

Branch, HEAD, checks/build, page/sitemap counts, git status.

### 4. Public route/indexability inventory

### 5. Bucket A --- launch blockers

State `NONE` if none.

### 6. Bucket B --- should fix before launch

### 7. Bucket C --- post-launch improvements

### 8. Bucket D --- intentional/protected decisions

### 9. Search/SEO readiness

Canonical, sitemap, robots, metadata, OG, schema, internal routes.

### 10. Contact journey

### 11. Legal/privacy status

Separate facts from owner/legal input.

### 12. Security/privacy audit

### 13. Accessibility/responsive/runtime QA

### 14. Performance/dependencies

### 15. Small fixes implemented

Files + rationale.

### 16. Owner input required

### 17. Launch-gap matrix

### 18. Recommended next sequence

### 19. Production launch checklist

### 20. Documentation updated

### 21. Validation results

### 22. Final recommendation

State what Task 018 should be **only if Task 018 is actually
necessary**.

## 35. Core principle

The purpose is not to discover how much more work could be done.

It is to discover how little work still **must** be done before ARTIT
can launch credibly.

Protect what is already good. Separate evidence from preference.
Separate launch blockers from future ambition.

Leave the project with a short, explicit, defensible path to production.
