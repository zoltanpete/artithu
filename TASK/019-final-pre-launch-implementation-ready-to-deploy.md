# Task 019 --- Final Pre-Launch Implementation & READY TO DEPLOY Gate

## 1. Task intent

**Type:** final production implementation + launch closure +
deploy-readiness validation

**Primary goal:** close the remaining pre-launch gaps identified in
Tasks 017--018 and bring the bilingual ARTIT website to an explicit:

> **`READY TO DEPLOY`**

state.

This is the final pre-launch implementation task.

It is **not**: - another site-wide audit; - another art-direction
exploration; - a redesign; - an SEO-content expansion; - an English-copy
task; - a new feature cycle.

The approved HU and EN production site is already substantially
complete. Task 019 should make the smallest necessary set of production
changes, validate the resulting site thoroughly, and stop.

At the end there are only two valid states:

-   `READY TO DEPLOY`
-   `LAUNCH BLOCKED`

There is no intermediate "needs another polish task" state.

------------------------------------------------------------------------

# 2. Current baseline

Task 018 ended with:

> **`READY FOR FINAL PRE-LAUNCH TASK`**

Current expected build state:

-   branch: `zillu_dev`
-   baseline HEAD reported at Task 018 start/end context: `c983a51`
-   `npm run check`: clean
-   build: 45 pages
-   8 real EN production routes added
-   HU/EN route mapping complete
-   language switch complete
-   EN evidence parity complete
-   EN blanket content gate resolved
-   canonical/hreflang architecture exists but production-domain wiring
    was intentionally deferred
-   sitemap intentionally deferred
-   no new client-side localization framework
-   HU visual regression passed.

Do not assume any of these facts blindly. Verify the current repository
before editing.

------------------------------------------------------------------------

# 3. Owner-approved factual data

The following facts were supplied directly by the owner and may now be
used publicly where relevant.

## Site/operator

**Company name:**\
`ARTIT Multimédia Kft.`

**Registered address:**\
`2013 Pomáz, Árvalányhaj u. 37.`

**Public contact email:**\
`pete.zoltan@gmail.com`

**Hungarian tax number:**\
`23552986-2-13`

**Company registration number:**\
`13-09-150805`

## Production domain

`artit.hu`

Canonical HTTPS origin:

`https://artit.hu`

## Hosting

Service/platform:

`FORPSI`

Hosting company:

`BlazeArts Kft.`

Address:

`1096 Budapest, Thaly Kálmán utca 39.`

Company registration number:

`01-09-389087`

Tax number:

`12539833-2-43`

EU VAT number:

`HU12539833`

These are approved factual inputs.

Do not alter, normalize or "correct" legal identifiers without owner
approval.

------------------------------------------------------------------------

# 4. Important legal/content guard

This task may implement a factual privacy notice and
legal/company-information surface, but it must **not pretend to provide
legal certification**.

Rules:

-   do not state that the site is "GDPR compliant";
-   do not state that the notice guarantees legal compliance;
-   do not invent statutory bases, retention periods, processor roles or
    transfer mechanisms without support;
-   do not invent company facts;
-   distinguish verified implementation facts from legal interpretation;
-   where the exact legal basis cannot be responsibly established from
    repository facts, use restrained factual wording and mark
    legal-review items explicitly.

The implementation should be practically useful and transparent, not
pseudo-legal boilerplate.

------------------------------------------------------------------------

# 5. Repository baseline

Before changes:

1.  Confirm branch and HEAD.
2.  Inspect `git status`.
3.  Preserve all existing Tasks 014--018 work.
4.  Run `npm run check`.
5.  Run `npm run build`.
6.  Record:
    -   errors;
    -   warnings;
    -   hints;
    -   page count;
    -   sitemap state;
    -   public HU routes;
    -   public EN routes;
    -   internal routes.
7.  Inspect Task 017/018 documentation and current implementation rather
    than relying only on completion reports.

------------------------------------------------------------------------

# 6. Source-of-truth audit

Read at minimum:

-   `DOC/01-BRAND-POSITIONING.md`
-   `DOC/02-INFORMATION-ARCHITECTURE.md`
-   `DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md`
-   `DOC/07-DESIGN-SYSTEM.md`
-   `DOC/08-COMPONENT-LIBRARY.md`
-   `DOC/09-TECHNICAL-ARCHITECTURE.md`
-   `DOC/10-SEO-EEAT-STRUCTURED-DATA.md`
-   `DOC/11*`
-   `DOC/12-ASSET-STRATEGY.md`
-   `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`
-   `DOC/14-LAUNCH-READINESS.md`
-   Task 018 route/locale documentation.

Also inspect:

-   Astro config;
-   layout/meta components;
-   language mapping;
-   header/navigation;
-   contact form;
-   robots implementation;
-   current public assets;
-   existing OG asset;
-   sitemap/package dependencies;
-   all production routes.

------------------------------------------------------------------------

# 7. Scope summary

Task 019 should complete exactly these areas:

1.  HU + EN privacy notice;
2.  minimal production footer/legal access;
3.  `artit.hu` production-domain wiring;
4.  absolute canonical/hreflang/OG/schema URLs;
5.  sitemap integration;
6.  robots finalization;
7.  favicon/site icon;
8.  current-page navigation indication;
9.  Tardify CTA redundancy/wording correction;
10. final bilingual production QA;
11. final launch documentation/checklist.

Do not expand beyond this without a genuine launch blocker.

------------------------------------------------------------------------

# 8. Privacy notice --- first inspect the real data flow

Before drafting privacy copy, inspect the actual implementation.

Document factual answers to:

-   what form fields are collected?
-   which are required?
-   is a honeypot used?
-   where does the form POST?
-   what JavaScript/progressive enhancement is used?
-   what data is transmitted to Formspree?
-   does the repository configure analytics?
-   are there marketing pixels?
-   session recording?
-   third-party embeds?
-   non-essential cookies?
-   external fonts?
-   other client-side third parties?
-   does hosting necessarily process request/server data?
-   is any database or ARTIT-owned backend involved?

Do not write the notice first and retrofit facts afterward.

------------------------------------------------------------------------

# 9. Formspree factual verification

The contact form uses Formspree.

Inspect the actual current integration and existing disclosure.

For the privacy notice, include only statements supported by:

-   actual site implementation;
-   Formspree's role as observable from the integration;
-   owner-supplied company facts;
-   any authoritative processor/privacy information already documented
    in the repository.

If external legal/provider wording must be verified and internet access
is available, use authoritative first-party sources only.

Do not copy large sections of third-party privacy policies.

Do not guess data retention duration.

If Formspree controls retention or processing details not established by
the repository, phrase this carefully and/or link to the relevant
provider information if appropriate.

------------------------------------------------------------------------

# 10. Hosting privacy relevance

FORPSI / BlazeArts Kft. is the hosting provider.

Determine what is appropriate to state based on actual hosting facts.

A normal factual statement that hosting infrastructure may process
technical request/server data can be appropriate if supported.

Do not invent:

-   exact server location;
-   exact log retention;
-   subprocessors;
-   security certifications;
-   data-processing agreement terms.

Use the owner-supplied BlazeArts facts exactly where identification is
needed.

------------------------------------------------------------------------

# 11. Privacy notice architecture

Create a dedicated privacy route in both locales.

Preferred route pattern unless current IA suggests a better established
convention:

HU:

`/adatkezeles/`

EN:

`/en/privacy/`

Add them to the HU ↔ EN route mapping.

The pages should be normal production pages, indexability decided
deliberately.

A privacy page may be indexable, but SEO value is not the goal.

Do not add it to primary navigation.

It must be accessible from:

-   footer;
-   contact-form disclosure/context;
-   its exact language counterpart.

------------------------------------------------------------------------

# 12. Privacy notice content --- HU

Write a concise, readable Hungarian privacy notice grounded in the real
site.

Expected factual structure:

## Adatkezelő / üzemeltető

-   ARTIT Multimédia Kft.
-   registered address
-   company registration number
-   tax number
-   public email.

## A weboldal működése

Explain relevant technical processing factually and concisely.

## Kapcsolatfelvételi űrlap

Explain: - what the user submits; - purpose: responding to the inquiry /
communication; - Formspree involvement; - no invented marketing use; -
no invented newsletter use.

## Tárhelyszolgáltatás

Identify the hosting provider where appropriate.

## Sütik / analitika

State only what the implementation proves.

If the production site currently has no analytics, marketing pixels or
non-essential cookies, say so plainly rather than introducing a consent
banner.

## Megőrzés / törlés / rights

Be careful.

Do not invent a fixed retention period.

Use only wording defensible from the actual process and owner practices
established in the repository. If exact retention policy requires
owner/legal confirmation, flag it instead of fabricating one.

## Kapcsolat

Use the approved public email.

Keep the page understandable to a normal visitor.

Avoid dense legalistic walls of text.

------------------------------------------------------------------------

# 13. Privacy notice content --- EN

Create a natural English counterpart.

Do not mechanically translate Hungarian legal phrasing.

Use clear labels such as:

-   Data controller / site operator
-   Contact form
-   Hosting
-   Cookies and analytics
-   Contact / data-related requests

Preserve exact factual parity with HU.

Do not strengthen legal claims in English.

------------------------------------------------------------------------

# 14. Legal-review boundary

If the implementation cannot establish an exact legal basis, retention
period, statutory citation or controller/processor classification with
sufficient confidence:

-   do not invent it;
-   do not block the technical task automatically;
-   record it as `LEGAL REVIEW RECOMMENDED` in the completion report;
-   ensure the published page remains factually transparent.

However, if a required privacy statement would be materially misleading
without such information, classify that as a real launch blocker.

Use judgment, not boilerplate.

------------------------------------------------------------------------

# 15. Minimal production footer

The site currently lacks a footer.

Create a **small, restrained ARTIT footer**, not a generic corporate
mega-footer.

It should feel like a quiet production closure to the page.

Required information/access:

-   ARTIT / ARTIT Multimédia Kft. identity;
-   contact route or public email, whichever fits the design better;
-   Privacy / Adatkezelés link;
-   locale-aware internal links;
-   optional concise copyright line if it fits.

Company registration and tax numbers do not need to be repeated on every
page if clearly available on the privacy/legal page.

Do not turn the footer into a full sitemap.

Do not add social icons without real approved profiles.

Do not add fake office hours, phone numbers or locations.

------------------------------------------------------------------------

# 16. Footer visual direction

Reuse the established ARTIT grammar:

-   restrained typography;
-   thin rules;
-   warm/light neutral canvas or an existing approved surface;
-   precise alignment;
-   minimal accent;
-   no decorative illustration;
-   no new brand-face SVG;
-   no giant dark SaaS footer.

The footer should work on:

-   homepage;
-   service pages;
-   case studies;
-   Tardify;
-   About;
-   Contact;
-   privacy pages;
-   HU and EN.

Use a shared component.

No separate art-direction concept task is needed.

------------------------------------------------------------------------

# 17. Contact-page privacy integration

Update HU and EN contact pages so the visitor can access the relevant
privacy notice directly from the form context.

The wording should remain short.

Do not add a required "I accept the privacy policy" checkbox unless
there is a real legal/product requirement established by the
implementation.

A privacy notice link and factual processing disclosure are preferable
to invented consent mechanics.

Preserve the working Formspree submission flow.

Re-test success/error/native fallback behavior after changes.

------------------------------------------------------------------------

# 18. Production domain wiring

Wire the confirmed production domain:

`https://artit.hu`

into the correct central Astro/site configuration.

Avoid hard-coding the origin independently across many pages.

After this change, verify generated absolute URLs for:

-   canonical;
-   hreflang;
-   `x-default`;
-   OG URL;
-   structured data;
-   sitemap;
-   any other absolute metadata.

No `localhost`, preview host or relative canonical should remain in the
production build.

------------------------------------------------------------------------

# 19. Canonical + hreflang finalization

Task 018 created the bilingual alternate architecture.

Now verify every production pair against the real origin.

Expected examples:

-   `https://artit.hu/`
-   `https://artit.hu/en/`
-   corresponding HU/EN detail routes.

For each production page:

-   self canonical is correct;
-   HU alternate is correct;
-   EN alternate is correct;
-   `x-default` follows the documented strategy;
-   no internal/dev alternate;
-   no duplicate URL forms.

Privacy HU/EN routes must also be handled consistently.

------------------------------------------------------------------------

# 20. Sitemap integration

Install/configure the appropriate Astro sitemap integration if not
already present.

Requirements:

-   production origin = `https://artit.hu`;
-   include all intended HU production pages;
-   include all intended EN production pages;
-   include case studies;
-   include privacy pages if intentionally public;
-   exclude `/404`;
-   exclude `/art-direction/*`;
-   exclude `/design-foundation`;
-   exclude fixtures/dev/test routes;
-   no duplicate URLs.

Prefer the standard Astro-supported solution rather than custom sitemap
code unless the current architecture gives a compelling reason.

Verify the built sitemap contents directly.

Record final URL count.

------------------------------------------------------------------------

# 21. Robots finalization

Task 017 added robots protections.

Re-evaluate after sitemap/domain changes.

Requirements:

-   public production pages crawlable;
-   internal art-direction/design-foundation routes remain protected;
-   sitemap URL references the real production sitemap;
-   no accidental blocking of CSS/assets/public pages;
-   no contradictory page-level robots metadata.

Do not overcomplicate crawler rules.

------------------------------------------------------------------------

# 22. Favicon / site icon

No favicon asset existed at Task 017.

Create a minimal production favicon solution derived from the existing
ARTIT visual identity.

This is **not a logo redesign**.

Requirements:

-   recognizable at tiny size;
-   geometric/simple;
-   compatible with current brand;
-   no detailed wordmark squeezed into 16px;
-   no decorative concept exploration;
-   no unrelated icon metaphor.

A simple ARTIT initial/mark derived from existing typography/geometry is
acceptable.

Create only the asset variants actually useful for a modern production
site.

Wire them correctly in document metadata.

Do not add a PWA manifest unless genuinely useful.

------------------------------------------------------------------------

# 23. Favicon verification

Verify at least:

-   browser favicon reference resolves;
-   SVG/PNG/ICO references, whichever are used, exist;
-   no broken asset;
-   light/dark browser UI does not make it unreadable where reasonably
    testable;
-   production build includes the assets.

Document the chosen mark briefly.

------------------------------------------------------------------------

# 24. Current-page navigation indication

Task 014 carried this as an optional improvement.

Now implement it only in a restrained, accessible way.

Requirements:

-   current top-level section is understandable;
-   use `aria-current="page"` where semantically correct;
-   child pages may indicate their parent section where helpful without
    falsely marking the parent link as the exact current page;
-   HU and EN;
-   desktop and mobile;
-   do not introduce a loud tab/navigation redesign.

The visual state should fit existing header interaction/focus grammar.

------------------------------------------------------------------------

# 25. Tardify CTA redundancy

Task 014 identified CTA duplication/redundancy on `/tardify/`.

Audit the current HU and EN page in context.

Fix the wording/destination so the CTAs have distinct jobs.

Examples of distinct roles:

-   learn/understand Tardify;
-   discuss a custom-development/business need;
-   contact ARTIT.

Do not invent a Tardify product URL or product capability.

Do not turn the page into SaaS marketing.

Keep HU and EN semantically aligned.

------------------------------------------------------------------------

# 26. Footer + language routing

All footer links must be locale-aware.

HU pages should link to HU: - contact; - privacy; - other footer
destinations.

EN pages should link to EN counterparts.

Language switching from the privacy page must go to the exact privacy
counterpart.

Update the centralized route map rather than adding scattered special
cases.

------------------------------------------------------------------------

# 27. Metadata for privacy pages

Create sensible metadata.

Avoid SEO-sales language.

Examples of intent:

HU: - `Adatkezelés | ARTIT`

EN: - `Privacy | ARTIT`

Descriptions should explain that the page describes how ARTIT handles
information submitted through the site/contact form.

No keyword stuffing.

------------------------------------------------------------------------

# 28. Structured data after company facts

Re-audit Organization/site structured data now that factual company
identity is available.

Do **not** automatically add a large Organization schema just because
facts now exist.

If the existing architecture already has an appropriate Organization
entity, it may now use verified facts.

If adding Organization structured data is a small, clean and useful
production improvement consistent with `DOC/10`, it is allowed.

Only use factual properties.

Do not invent: - logo URLs if no suitable logo asset exists; - social
profiles; - telephone; - founding date; - employees; - sameAs; -
customer relationships.

If not useful now, leave it post-launch.

------------------------------------------------------------------------

# 29. Cookie/consent decision

Make an explicit final decision based on actual source/runtime.

If the site has:

-   no analytics;
-   no marketing pixels;
-   no non-essential cookie-setting integrations;

then do **not** add a cookie banner merely for convention.

Document the observed state.

If Task 019 discovers a real non-essential cookie/tracker, either: -
implement the required consent handling if small and clearly defined; -
or mark launch blocked if it cannot be responsibly solved in scope.

------------------------------------------------------------------------

# 30. Security/privacy re-check

Repeat the production-output scan for:

-   secrets;
-   credentials;
-   tokens;
-   internal connection strings;
-   CS02 gated ERP/vendor evidence;
-   unintended personal/customer data;
-   environment leakage;
-   debug output.

Do not print secrets into the completion report.

Report only category/path/remediation.

------------------------------------------------------------------------

# 31. Public route inventory after Task 019

Produce the final authoritative production route map.

It should now include the privacy pair in addition to the Task 018
routes.

For every route record:

-   locale;
-   route;
-   title;
-   canonical;
-   indexability;
-   sitemap inclusion;
-   alternate counterpart.

Also record internal routes separately.

------------------------------------------------------------------------

# 32. Final bilingual link audit

Programmatically or systematically verify:

-   zero broken internal production links;
-   zero unintended HU leaks from EN;
-   zero unintended EN leaks from HU;
-   exact language-switch counterparts;
-   breadcrumbs;
-   footer;
-   privacy;
-   Contact;
-   case studies;
-   logo/home;
-   CTAs;
-   Tardify.

Do not count deliberate language-switch links as locale leaks.

------------------------------------------------------------------------

# 33. Final contact-form verification

After privacy/footer changes:

Test HU and EN:

-   required validation;
-   email validation;
-   keyboard navigation;
-   focus;
-   submit;
-   success;
-   error;
-   honeypot;
-   no-JS/native fallback where designed;
-   privacy link;
-   processor disclosure.

Do not repeatedly send real submissions.

Task 017 already verified one real HTTP 200 submission.

Use mocked/non-destructive verification unless a new live test is
genuinely necessary.

------------------------------------------------------------------------

# 34. Final responsive sweep

Test all production pages at representative widths.

At minimum:

-   320 px;
-   375 px;
-   414 px;
-   tablet/intermediate;
-   1280 px;
-   1440 px.

Pay special attention to new/shared elements:

-   footer;
-   privacy page;
-   language switch;
-   current-page nav;
-   favicon/meta has no visual regression relevance but asset resolution
    should be checked;
-   Tardify CTA.

Also regression-check the approved brand faces.

No horizontal overflow.

------------------------------------------------------------------------

# 35. Final accessibility sweep

Verify:

-   one meaningful H1;
-   headings;
-   landmarks;
-   skip link;
-   keyboard;
-   focus;
-   nav semantics;
-   `aria-current`;
-   form labels/errors;
-   privacy links;
-   footer landmark;
-   breadcrumb semantics;
-   image alt;
-   decorative SVG hiding;
-   correct `lang`;
-   reduced motion;
-   contrast.

Privacy content should remain readable and not collapse into tiny legal
text.

------------------------------------------------------------------------

# 36. Final runtime/performance sweep

Check production build for:

-   console errors;
-   broken asset requests;
-   hydration/client-script errors;
-   favicon 404;
-   sitemap generation;
-   robots;
-   malformed JSON-LD;
-   client JS regression;
-   image regressions;
-   unnecessary new third-party requests.

The footer/privacy/domain work should not materially increase client JS.

------------------------------------------------------------------------

# 37. Final SEO/search readiness

Verify:

-   titles/descriptions;
-   canonical absolute URLs;
-   hreflang absolute URLs;
-   `x-default`;
-   OG URLs;
-   OG image;
-   sitemap;
-   robots;
-   indexability;
-   404 noindex;
-   internal route noindex/protection;
-   structured data URLs;
-   favicon/site identity.

No speculative "AI SEO" additions.

No `llms.txt` requirement unless already intentionally planned.

------------------------------------------------------------------------

# 38. Deployment-readiness checklist

Create/update a concise launch-day checklist.

It should include at minimum:

-   clean production build;
-   `https://artit.hu` configured on host;
-   HTTPS active;
-   root + EN home return 200;
-   all public routes return 200;
-   404 behavior;
-   sitemap reachable;
-   robots reachable;
-   canonical host correct;
-   hreflang correct;
-   favicon;
-   OG/share preview;
-   contact form;
-   privacy pages;
-   no internal route in sitemap;
-   no secrets;
-   mobile smoke test;
-   console clean.

Distinguish:

-   repository-ready checks;
-   host/deployment checks that can only be verified after publishing.

Do not mark post-deployment checks as failed merely because the local
environment cannot verify DNS/HTTPS.

------------------------------------------------------------------------

# 39. Documentation updates

Update authoritative docs to reflect final production state.

At minimum consider:

-   `DOC/02` --- privacy routes/footer IA;
-   `DOC/03` --- final public route map;
-   `DOC/09` --- production domain/sitemap;
-   `DOC/10` --- canonical/hreflang/sitemap/privacy indexability;
-   `DOC/11` --- final launch checklist;
-   `DOC/12` --- favicon asset;
-   `DOC/13` --- legal/privacy gate resolution status;
-   `DOC/14` --- launch readiness.

Update README production facts where appropriate.

Do not duplicate the same checklist into every document.

------------------------------------------------------------------------

# 40. Content-gate closure

Revisit every open launch-related gate in `DOC/13` and `DOC/14`.

Expected outcomes:

-   EN gate: already resolved;
-   privacy/company facts: supplied;
-   production domain: supplied;
-   favicon: resolved in this task;
-   sitemap: resolved;
-   current-page nav: resolved;
-   Tardify CTA: resolved.

Do not close unrelated future gates such as:

-   customer identities;
-   logos;
-   testimonials;
-   additional metrics;
-   Tardify lineage;
-   more screenshots.

Those remain intentionally gated/post-launch.

------------------------------------------------------------------------

# 41. Scope guard

## In scope

-   privacy HU/EN;
-   factual legal/company identity surface;
-   minimal footer;
-   contact privacy links;
-   production domain;
-   absolute metadata URLs;
-   sitemap;
-   robots;
-   favicon;
-   current nav state;
-   Tardify CTA;
-   final QA;
-   launch docs.

## Out of scope

-   redesign;
-   new case studies;
-   customer-name publication;
-   testimonials;
-   analytics installation;
-   Search Console setup;
-   new Tardify screenshots;
-   new service pages;
-   EN rewrite beyond bugs;
-   major content marketing;
-   animation polish;
-   social-media campaign assets;
-   speculative legal claims.

------------------------------------------------------------------------

# 42. Validation commands

At minimum run:

1.  `npm run check`
2.  `npm run build`

Then inspect final built output.

Record:

-   final page count;
-   final sitemap URL count;
-   errors/warnings/hints;
-   git status;
-   changed files.

If sitemap integration adds generated files without adding routes,
explain page-count vs sitemap-count difference.

------------------------------------------------------------------------

# 43. Final launch gate

Task 019 ends with exactly one of these.

## `READY TO DEPLOY`

Use only if:

-   no known repository-level launch blocker remains;
-   privacy/legal identification is published factually;
-   HU + EN production pages are complete;
-   production origin is wired;
-   canonical/hreflang are correct;
-   sitemap/robots are correct;
-   favicon exists;
-   form remains functional;
-   no broken links;
-   responsive/accessibility/runtime QA passes;
-   no secret/privacy leakage;
-   remaining checks are genuinely post-deployment host checks.

## `LAUNCH BLOCKED`

Use if any genuine launch blocker remains.

For each blocker state:

-   exact issue;
-   evidence;
-   why it blocks launch;
-   who/what must resolve it;
-   whether it is owner input, implementation, hosting or legal review.

Do not use "blocked" for optional post-launch improvements.

Do not recommend Task 020 unless a blocker genuinely requires another
implementation task.

------------------------------------------------------------------------

# 44. Completion report format

## 1. Final status

`COMPLETE` or `BLOCKED`

## 2. Final launch gate

`READY TO DEPLOY` or `LAUNCH BLOCKED`

## 3. Repository baseline

-   branch;
-   start/end HEAD;
-   git status;
-   check/build;
-   before/after page count;
-   final sitemap URL count.

## 4. Privacy implementation

-   HU route;
-   EN route;
-   factual data flow;
-   Formspree treatment;
-   hosting treatment;
-   cookies/analytics statement;
-   any `LEGAL REVIEW RECOMMENDED` items.

## 5. Footer implementation

-   structure;
-   locale behavior;
-   responsive/accessibility behavior.

## 6. Production domain

-   Astro/site config;
-   canonical;
-   hreflang;
-   x-default;
-   OG;
-   schema URLs.

## 7. Sitemap + robots

-   final behavior;
-   included/excluded routes;
-   counts.

## 8. Favicon

-   chosen concept;
-   assets;
-   verification.

## 9. Navigation current state

## 10. Tardify CTA correction

## 11. Final public HU ↔ EN route inventory

## 12. Contact-form regression

## 13. Accessibility/responsive/runtime QA

## 14. SEO/search readiness

## 15. Security/privacy scan

## 16. Performance/JS impact

## 17. Content gates closed

## 18. Remaining post-launch gates

Only genuine non-blocking future work.

## 19. Documentation updated

## 20. Deployment checklist

Separate repository-ready from host-only checks.

## 21. Validation results

## 22. Final recommendation

If `READY TO DEPLOY`, say so clearly and stop proposing new
implementation work.

If `LAUNCH BLOCKED`, identify the minimum resolution path.

------------------------------------------------------------------------

# 45. Core principle

This task is about **closure**.

Do not search for another round of polish.

Do not reopen approved design decisions.

Do not add conventional website machinery without a demonstrated need.

Implement the remaining factual production essentials, validate them,
and decide whether the repository is ready to publish.

> **The desired outcome is not "almost ready." It is
> `READY TO DEPLOY`.**
