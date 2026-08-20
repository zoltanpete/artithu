# Task 009 --- Custom Development Pillar Page (`/egyedi-fejlesztes/`)

## 1. Objective

Design and implement the first production page after the now-locked
homepage: `/egyedi-fejlesztes/`.

This is the **Custom Development pillar page** and the first real test
that the approved ARTIT visual direction is a reusable design language
rather than merely a successful homepage composition.

The page must derive its composition from its own content role,
selectively reuse the locked ARTIT grammar, avoid cloning the homepage,
explain clearly **when custom software is justified --- and when it is
not**, establish the parent relationship to the future Business
Applications and System Integration child pages, use the bilingual YAML
architecture from Task 007B, preserve all factual/content gates, and
remain production-quality.

This is a production implementation task, not an art-direction
experiment.

## 2. Source-of-truth audit

Before editing, read all relevant project documentation, including at
minimum DOC/02, DOC/04, DOC/07--09, DOC/11--13 and any
positioning/content documents relevant to custom development.

Inspect current production layouts, navigation, tokens/foundation
styles, content collections/schema, i18n helpers, YAML patterns,
homepage, and SystemMap only as a reference for the locked grammar.

If repository documentation contains a more specific approved
architecture for `/egyedi-fejlesztes/`, it takes precedence over
illustrative suggestions here.

Authority order:

**approved page role/content → factual gates → locked design language →
production primitives → page-specific composition**

Do not start from homepage markup and replace the text.

## 3. Mandatory page-specific audit

Before implementation determine and report:

1.  documented page role;
2.  intended audience/user question;
3.  approved Hungarian copy;
4.  missing copy;
5.  approved claims;
6.  gated/unverified claims;
7.  intended CTAs;
8.  required internal links;
9.  SEO title/description availability;
10. English translation availability;
11. asset/evidence availability;
12. relationship to the two future child pages;
13. relationship to `/munkaink/`, `/tardify/`, and conversion routes
    where documented.

Do not silently fill gaps. Use only wording supported by approved
sources. Omit/defer unsupported claims.

## 4. Page role

The page should answer:

> **Mikor indokolt egyedi szoftvert fejleszteni --- és mikor nem?**

It should help a business decision-maker distinguish between an
operational/process problem, something an existing product can solve, a
genuine custom business-application need, an integration problem, and a
case where custom development would add unnecessary complexity.

Core positioning:

**ARTIT does not sell custom development as the answer to every problem;
it understands the operation first and chooses the justified solution.**

Do not make this a generic development-services page, technology-stack
catalogue, capabilities grid, "we build anything" pitch, or SEO keyword
wall.

## 5. Information architecture

Follow approved repository architecture first. If the docs define the
role but not a full sequence, derive a restrained semantic progression
such as:

1.  Hero / proposition
2.  Decision problem
3.  When custom development is justified
4.  When it is not
5.  Two principal directions --- Business Applications / System
    Integration
6.  ARTIT approach
7.  Evidence / related work
8.  Closing CTA

This is not a mandatory visual template. Every section must have a
distinct communication job.

## 6. Composition from content

Before choosing visual devices, classify each section by meaning:
decision, diagnosis, comparison, evidence, progression, explanation,
child-topic navigation, conversion, etc.

Then choose only semantically justified locked grammar.

Do not reuse a spine because the homepage used a spine. Use one only if
the content is genuinely diagnostic/sequential.

Use connector geometry only for actual flow/progression. Use evidence
grammar for evidence. Use tonal surfaces and technical plates only when
semantically useful. Keep construction residue and accent structural and
scarce.

**Reuse the grammar, not the homepage layout.**

## 7. Hero

The Hero must unmistakably belong to ARTIT without copying the homepage
Hero.

Requirements: - strong editorial hierarchy; - decision-oriented
proposition; - approved supporting copy; - one primary CTA maximum; -
optional secondary link only if justified; - no stock imagery; - no fake
software screenshot; - no automatic reuse of the full SystemMap.

The homepage SystemMap is a richness ceiling/brand asset, not a
mandatory Hero component.

Determine whether "decision before development" benefits from a visual
at all. Do not create an arbitrary fork diagram merely because
alternatives exist. Task 007D.1 locked that conceptual alternatives do
not automatically become branching diagrams.

## 8. When custom development is justified

Help readers recognize genuine custom-development conditions using only
criteria supported by approved project content.

Potential concepts may include operation-specific workflows,
disconnected/manual processes, off-the-shelf limitations, business
logic, or integration/data-flow requirements --- but only where project
sources support them.

Treat them as **decision signals**, not generic feature cards. Avoid an
icon-card grid.

## 9. When it is not justified

This is strategically important. ARTIT should demonstrate that custom
software is not the default recommendation.

Keep it calm and confident. No fabricated cost/ROI comparisons. Do not
imply packaged software is inferior.

Semantic message:

**the correct solution matters more than selling custom development.**

The quiet Decision principle may inform this section, but do not clone
the homepage Decision layout.

## 10. Child-page gateway

Establish the relationship to:

-   `/egyedi-fejlesztes/uzleti-alkalmazasok/`
-   `/egyedi-fejlesztes/rendszerintegracio/`

First verify these routes/names remain current in DOC/02.

If child pages do not exist, follow established project conventions.
Default: do not create empty placeholder pages solely to make links
live.

The two directions must not look like generic product cards. Each should
explain the problem type it addresses, why it is distinct, and where the
deeper future page will go, without inventing gated details.

## 11. ARTIT approach / process

If approved content supports a working method, communicate it according
to its real semantics.

Do not automatically copy the homepage four-step Process. Determine
whether this page needs a progression, decision method, editorial
explanation, or no dedicated process section.

If there is a real ordered progression, connector grammar is allowed.

> **Do not draw a route unless there is a route to explain.**

## 12. Evidence / related work

Audit evidence carefully. Connect to `/munkaink/` or future cases only
as supported.

Do not fabricate customer names, sizes, years, outcomes, screenshots,
testimonials, or metrics.

If only structural evidence/working titles are approved, use
evidence-record grammar in principle but derive a page-specific
composition.

Missing evidence must not block the pillar page.

## 13. Tardify relationship

Audit whether Tardify belongs on this page. Do not force it in.

If mentioned, use approved positioning only, preserve the distinction
between custom project work and the owned product, and do not fabricate
screenshots/features.

## 14. CTA strategy

Use approved CTA wording only. No urgency tactics or competing primary
CTAs.

Likely pattern: one Hero primary CTA, contextual child/evidence links,
one restrained closing CTA --- but follow approved repository content.

## 15. Bilingual YAML architecture

Use Task 007B's architecture. Do not hardcode marketing content into
Astro.

Add the page to the existing content collection/schema pattern. Do not
create a parallel system.

Use existing required localized and gated localized field strategy.

Hungarian remains publishable. Do not invent English marketing copy. If
English is unapproved, keep gated `en` absent and do not publish
`/en/egyedi-fejlesztes/`. Never silently fall back to Hungarian.

Use stable semantic IDs for repeated content where useful; IDs represent
meaning, not display order.

## 16. Routing

Implement production Hungarian route `/egyedi-fejlesztes/` using
existing Astro i18n/default-locale conventions.

Do not create an English route without approved English marketing
content.

Verify canonical behavior, `html lang`, internal navigation, header
behavior, and language-switch behavior.

## 17. SEO

Audit approved SEO content. Implement page title, meta description,
canonical/locale behavior and existing OG basics where supported.

Do not invent keyword-stuffed copy or structured data without approved
basis. Record genuine SEO content gaps.

## 18. Design-system constraints

Use existing production typography, spacing, accent, surfaces, geometry,
focus treatment, technical labels and panels where justified.

No new font, brand hue, radius language, SaaS shadows/cards, decorative
gradients, or arbitrary icon library.

The page must feel ARTIT without copying the homepage.

## 19. Components/primitives

Default to no new shared component.

Extract only when a pattern has clear semantic identity, likely
recurrence, and real consistency/accessibility/maintenance benefit. Do
not componentize merely to reduce line count.

Document any justified new primitive.

## 20. Interaction

Static quality first. Do not add interaction merely because SystemMap is
interactive.

Expected outcome: **no additional client JavaScript**.

## 21. Responsive behavior

Intentionally verify at: - 390px - 768px - 950px - 1100px - 1440px -
1920px

Also inspect around new breakpoints.

Mobile should be recomposed where necessary, not merely scaled down.

Verify zero overflow/clipping/collisions, intentional word wrapping, no
orphan rules/nodes, and no Hungarian-width hacks that make future
English structurally impossible.

## 22. Accessibility

Verify one H1, sequential headings, semantic landmarks, keyboard
navigation, visible focus, contrast, no color-only meaning, decorative
geometry hidden appropriately, reduced-motion if relevant, logical DOM
order, meaningful links, and no fake controls.

If diagrams exist, expose meaningful accessible semantics rather than
raw SVG noise.

## 23. Performance

Maintain no new dependency, no external fonts, no framework hydration,
minimal/no new client JS, static Astro output, and optimized assets.

Report actual impact.

## 24. Navigation/site integration

After adding the route confirm desktop/mobile navigation, current link
behavior if supported, no stale placeholder href, and no regression on
`/`.

Do not redesign SiteHeader.

## 25. Documentation

Update as actually required: - DOC/02 - relevant content/page
architecture docs - DOC/07 - DOC/08 - DOC/09 - DOC/11 - DOC/12 - DOC/13

Do not rewrite locked homepage rules. Record page-specific applications
as applications, not new global rules unless they truly generalize.

## 26. Mandatory visual review

Perform a genuine real-browser visual review.

Ask:

1.  Does it clearly belong to the same ARTIT brand?
2.  Does it avoid looking like "homepage 2"?
3.  Does it help the reader make a decision rather than indiscriminately
    sell development?
4.  Is hierarchy driven by content meaning?
5.  Is it calmer than the homepage Hero where appropriate?
6.  Is technical residue semantic rather than decorative?
7.  Are child directions clear without generic cards?
8.  Is there a satisfying beginning → reasoning → resolution → CTA arc?
9.  Is any route drawn where there is no route to explain?
10. Does any section fall back to generic SaaS design?

If a key answer is no, perform a real refinement pass before completion.

## 27. Regression verification

Recheck: - `/` - `/egyedi-fejlesztes/` - `/design-foundation` - `/404`

Verify zero horizontal overflow, zero console/page errors,
header/navigation integrity, no global CSS regression, and unchanged
homepage visual lock.

If shared CSS changes, direct comparison against `/` is mandatory.

## 28. Validation

Run:

``` bash
npm run check
npm run build
```

Report exact results. Clean generated build output according to
repository workflow.

No commit. No push.

## 29. Expected scope

Likely: - new Hungarian route; - new YAML page content; - schema changes
only if genuinely required; - page-specific renderer/markup; -
restrained page-specific CSS; - navigation adjustment only if needed to
activate approved route; - documentation.

Do not touch historical art-direction prototypes or homepage markup
unless a genuine shared regression requires it.

## 30. Completion report

Return a numbered report covering:

1.  Final status
2.  Repository baseline
3.  Source-of-truth audit
4.  Page-specific content/gap audit
5.  Page role and user question
6.  Final section architecture
7.  Composition rationale per section
8.  Hero implementation
9.  "When justified" treatment
10. "When not justified" treatment
11. Business Applications gateway
12. System Integration gateway
13. Process/approach treatment
14. Evidence/related-work treatment
15. Tardify relationship decision
16. CTA strategy
17. Locked ARTIT grammar reused
18. Homepage patterns deliberately not reused
19. New page-specific visual grammar, if any
20. Componentization decision
21. YAML/content architecture
22. Localization/English gate
23. Route/i18n behavior
24. Navigation integration
25. SEO implementation/gaps
26. Responsive verification
27. Accessibility verification
28. Performance/client-JS impact
29. Homepage regression status
30. Files changed
31. Documentation updated
32. `npm run check`
33. `npm run build`
34. Bugs found and fixed
35. Deviations
36. Remaining content/asset gates
37. Repository state
38. Recommended next task boundary

End with:

> **CUSTOM DEVELOPMENT PILLAR PAGE IMPLEMENTED --- READY FOR OWNER
> VISUAL & CONTENT REVIEW**

unless a genuine unresolved issue prevents that status.

## 31. Final intent

The homepage proved the ARTIT design direction.

This page must prove that the direction can **travel**.

Do not make "homepage 2."

Build a page whose composition grows naturally from:

> **Mikor indokolt egyedi szoftvert fejleszteni --- és mikor nem?**

Use the locked ARTIT grammar to clarify the answer.

The result should feel like the same company, precision and judgment ---
expressed through a page with a different job.
