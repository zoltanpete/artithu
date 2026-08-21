# Task 011 — Tardify Product Story Page (`/tardify/`) + LivingSystemField Polish

## Status
**READY FOR IMPLEMENTATION**

## Context
The current production site has three approved page-level visual expressions:
- `/` — SystemMap: relationships / transformation / connected operation
- `/egyedi-fejlesztes/` — OperatingFitField: operational fit / friction
- `/munkaink/` — LivingSystemField: operational persistence / evidence over time

Task 010A gave `/munkaink/` a distinct ARTIT brand face. Owner review approved the direction with one small polish note: the ambient points around the LivingSystemField core could be slightly more visible.

The next production page is `/tardify/`.

This page should explain ARTIT's own product in a way that supports the broader philosophy: what ARTIT says about long-term maintainability, operational fit, and continued development is also applied to its own product.

This must not become a generic SaaS product page.

---

# Part 0 — LivingSystemField polish

Before starting the main task, make one small adjustment to `LivingSystemField`.

Increase the visual presence of the ambient points slightly:
- roughly 10–20% stronger emphasis;
- preserve size/opacity variation;
- preserve irregularity;
- keep the central `RENDSZER` object dominant.

You may slightly increase opacity, selected radii, or both.

Do not:
- make points uniform;
- add connecting lines;
- add labels;
- turn the field into a network/star map;
- add animation;
- alter the core geometry or semantic model.

Verify desktop and mobile.

---

# Part 1 — Objective

Design and implement production `/tardify/`.

The page must explain:
1. what Tardify is in ARTIT's ecosystem;
2. why ARTIT has its own product;
3. how Tardify demonstrates the same long-term software philosophy ARTIT brings to client work;
4. what can responsibly be stated today;
5. where deeper product information belongs;
6. how Tardify relates to custom development without confusing the two.

The page must feel like **ARTIT talking about its own product**, not a SaaS marketing template.

---

# Part 2 — Mandatory source-of-truth audit

Before writing or designing, read the current relevant docs fresh:
- DOC/00–13 as relevant;
- Task 008 homepage lock;
- Task 009 / 009A;
- Task 010 / 010A.

Inspect:
- `/`
- `/egyedi-fejlesztes/`
- `/munkaink/`
- `SystemMap.astro`
- `OperatingFitField.astro`
- `LivingSystemField.astro`
- YAML schemas/content
- nav/header
- `foundation.css`
- `tokens.css`
- localization helpers.

Treat existing pages as visual-language references, not templates.

---

# Part 3 — Tardify content/fact audit

Determine and report:
1. page role in IA;
2. primary user question;
3. approved Hungarian Tardify copy;
4. approved factual claims;
5. gated facts;
6. screenshot availability;
7. screenshot publication approval;
8. exact age/longevity approval;
9. approved product metrics;
10. approved customer facts;
11. approval/status of external `tardify.hu` linking;
12. approved feature descriptions;
13. intended CTA(s);
14. SEO availability;
15. English-copy status;
16. relationship to `/egyedi-fejlesztes/`;
17. relationship to `/munkaink/`;
18. relationship to ARTIT's long-term software positioning.

Do not convert internal understanding into publication-ready fact.

---

# Part 4 — Core page role

The strongest ARTIT-specific role is likely:

> **Owned proof of philosophy.**

ARTIT says software should fit the operation, remain maintainable, evolve over time, and become part of the business rather than a short-lived project artifact.

Tardify matters because ARTIT applies the same standard to its own product.

Do not overclaim. If exact longevity, adoption, customer, or performance facts remain gated, the page must still work without them.

---

# Part 5 — Primary user question

Determine the exact question from approved sources.

Likely territory:
- What does Tardify prove about how ARTIT builds software?
- Why does ARTIT have its own product?

Do not publish either wording unless supported or appropriately composed from approved content.

Avoid answering a different question such as “Why should I buy this SaaS right now?” unless repository IA explicitly defines the page that way.

---

# Part 6 — Art direction first

Before final implementation, determine the visual thesis of `/tardify/`.

Explicitly decide:
- does the page need a unique explanatory visual model?
- does a real approved screenshot/product artifact already provide the page's face?
- does it need both?
- would one make the other redundant?

Do not assume a diagram is required.

---

# Part 7 — Asset strategy audit

Distinguish:

## Product evidence
Real Tardify screenshots / UI / assets.

## ARTIT explanatory modeling
Abstract systems/fit/relationship visual language.

Use the established principle:

> **System Maps explain structure; screenshots prove reality. They do not substitute for one another.**

If approved screenshots exist, prefer honest evidence over fabricated abstract substitutes.

If screenshots exist but are not publication-approved, do not use them.

If no approved screenshot exists, design honestly around available content. Never create fake UI.

---

# Part 8 — Mandatory visual concept exploration

Explore at least 3 meaningfully different page directions and inspect them in a real browser.

### Concept A — Product as Proof
Visual identity comes from restrained real product evidence, if approved.

Risk: generic SaaS screenshot marketing.

### Concept B — Product Lineage / Continuity
Conceptual model of a maintained/evolving product without claiming exact chronology or metrics.

Risk: implying unapproved age/timeline.

### Concept C — Owned System / Same Standard
A system/engineering composition communicating that the same standards applied to client systems are applied to ARTIT's own product.

Risk: becoming abstract or repeating SystemMap/OperatingFitField/LivingSystemField.

Replace these if stronger concepts emerge.

Do not select from prose alone.

---

# Part 9 — Avoid generic SaaS design

Treat these as anti-patterns unless strongly justified:
- generic screenshot in rounded browser frame;
- feature-card grids;
- fake stats;
- pricing-style sections;
- logo walls;
- testimonial sliders;
- “all-in-one platform” claims;
- gradients/glows for excitement;
- huge feature lists;
- fake app mockups;
- product-tour tabs;
- fake UI;
- unapproved “trusted by” claims.

Tardify is a product, but this is still the ARTIT site.

---

# Part 10 — Page architecture

After audits, define a page architecture that fits available evidence.

Possible semantic needs:
1. Hero / proposition
2. Why ARTIT has its own product
3. What Tardify represents
4. Real product evidence if approved
5. Long-term / continued-development principle
6. Relationship to custom development
7. External Tardify destination if approved
8. Closing CTA/navigation

Do not force all sections. Avoid padding with generic product copy.

---

# Part 11 — Relationship to custom development

Clearly distinguish:

## Custom development
Built around a specific customer's operation/problem.

## Tardify
ARTIT's own product with its own scope/evolution.

Do not imply Tardify answers every custom-development problem.

Do not imply custom development is simply “what happens when Tardify doesn't fit.”

Relationship is philosophical/organizational, not necessarily a decision tree.

Preserve:

> **Do not draw a route unless there is a route to explain.**

---

# Part 12 — Relationship to `/munkaink/`

Audit whether `/munkaink/` should be linked as broader implementation evidence.

Do not turn Tardify into Case Study 03 unless documentation explicitly defines it that way.

Preserve category clarity: Tardify is an owned product, not automatically a client case.

---

# Part 13 — Long-term software message

This page is a natural place for ARTIT's long-term software philosophy.

Distinguish:
- approved principle: maintainable/evolvable software that becomes part of operation;
- potentially gated proof: exact years, customers, versions, deployments, etc.

Do not substitute gated figures with fake technical metadata.

---

# Part 14 — Brand-face decision

Explicitly determine whether final page uses:
- no dedicated visual model;
- approved product imagery as face;
- a page-specific ARTIT model;
- a deliberate combination.

If a new model is chosen, it must express something that SystemMap, OperatingFitField, and LivingSystemField do not.

Do not create “diagram number four” merely to complete a family.

---

# Part 15 — New visual model rules

If justified:
- render at least 3 concepts;
- page-specific semantic component preferred;
- static by default;
- no dependency;
- no JS unless semantically justified;
- separate mobile composition if needed;
- no fake metrics;
- no unapproved timeline labels;
- no arbitrary branching.

---

# Part 16 — Screenshot rules

If approved real screenshots are used:
- preserve authenticity;
- crop intentionally;
- avoid fake browser/device chrome unless compositionally justified;
- do not fabricate UI;
- accurate alt text;
- responsive/optimized;
- screenshot must not be sole source of understanding;
- document source/approval status.

If screenshots are not approved, do not use placeholders that resemble product proof.

---

# Part 17 — YAML/localization

Use existing bilingual YAML architecture.

Do not hardcode marketing copy into Astro.

Create a dedicated page schema/content file if needed.

Use `LocalizedGated` for marketing copy without approved English.

Do not create `/en/tardify/`.

---

# Part 18 — Language-switcher boundary

Language switcher remains intentionally deferred until approved English marketing copy exists.

Task 011 must:
- keep localization-ready;
- not create English marketing translation;
- not create `/en/tardify/`;
- not expose a broken alternate locale;
- not activate language switcher.

Record any new requirement for future Localization Activation.

---

# Part 19 — Navigation and external Tardify linking

Verify existing nav to `/tardify/`.

If `tardify.hu` is approved, determine its role:
- contextual secondary link;
- product destination;
- final CTA;
- or no link yet.

Do not send users away before ARTIT page has fulfilled its explanatory role.

Do not redesign SiteHeader.

---

# Part 20 — CTA strategy

Use approved CTA wording only.

Potential roles:
- learn more about Tardify;
- visit Tardify;
- discuss an operational problem;
- return toward custom development.

Avoid competing primary CTAs and urgency tactics.

---

# Part 21 — SEO

Audit title/description availability.

If absent, derive restrained metadata only from approved content and disclose it.

Do not add unsupported Product structured data, pricing, reviews, ratings, availability, or organization claims.

---

# Part 22 — Componentization

Default to page-specific markup/components.

Do not create generic `ProductHero`, `BrandFace`, `ProductEvidence`, or `VisualModel` unless real reuse now justifies them.

Do not refactor SystemMap/OperatingFitField/LivingSystemField just because a fourth page exists.

---

# Part 23 — Surface / density rhythm

Avoid generic:
`heading → paragraph → screenshot → heading → feature cards → CTA`

Audit density/surface intentionally.

Target:
- precise;
- mature;
- owned;
- technically confident;
- product-aware;
- distinctly ARTIT.

Use canvas/tonal/technical plate/dark interruption only when semantically useful.

Do not mechanically repeat homepage rhythm.

---

# Part 24 — Interaction

Static-first.

No carousel, tabs, fake product tour, autoplay, or motion merely to feel modern.

If interaction does not reveal meaningful approved information, ship zero new JS.

---

# Part 25 — Accessibility

Verify:
- one H1;
- sequential headings;
- visible focus;
- meaningful links;
- screenshot alt text;
- diagram accessibility if used;
- decorative geometry hidden;
- no color-only meaning;
- keyboard/mobile nav;
- reduced-motion;
- external-link clarity where appropriate.

---

# Part 26 — Responsive behavior

Verify in real browser:
- 390
- 700
- 768
- 950
- 1100
- 1440
- 1920px

If screenshots/model are used, design mobile intentionally.

Check overflow, clipping, headline wraps, visual/content balance, crops, technical-label collisions, CTA hierarchy, section rhythm.

---

# Part 27 — Performance

Preserve low-JS architecture:
- zero new dependency;
- zero hydration;
- zero new JS unless justified;
- optimized local images if used;
- no external fonts.

Report actual final impact.

---

# Part 28 — Regression protection

Re-check:

## `/`
Task 008 lock unchanged; SystemMap intact.

## `/egyedi-fejlesztes/`
OperatingFitField desktop/mobile unchanged.

## `/munkaink/`
LivingSystemField point-emphasis polish correct; Task 010A concept unchanged; evidence grammar unchanged.

## `/tardify/`
New implementation clean.

Also check `/design-foundation` and `/404` if shared CSS changes.

---

# Part 29 — Documentation

Update relevant docs, especially:
- DOC/02
- relevant positioning/content docs
- DOC/07
- DOC/08
- DOC/09
- DOC/11
- DOC/12
- DOC/13

Record Tardify fact audit, selected/rejected art directions, screenshot decision, brand-face decision, relationship to custom development, localization gate, componentization, responsive/accessibility results, and remaining gates.

Do not rewrite locked homepage rules.

---

# Part 30 — Validation

Run:

```bash
npm run check
npm run build
```

Report exact results.

Clean `dist/` according to established workflow.

No commit. No push.

---

# Part 31 — Scope guard

Do not:
- invent Tardify features;
- invent users/customers;
- invent metrics;
- invent longevity figures;
- invent testimonials;
- invent screenshots;
- publish unapproved assets;
- implement English;
- activate language switcher;
- redesign navigation;
- redesign `/`;
- redesign `/egyedi-fejlesztes/`;
- redesign `/munkaink/` beyond the named dot-emphasis polish;
- build gated child pages;
- add generic SaaS patterns.

---

# Part 32 — Required completion report

Report at minimum:
1. final status;
2. baseline;
3. LivingSystemField polish result;
4. source audit;
5. Tardify page role;
6. primary user question;
7. approved Hungarian content;
8. approved facts;
9. gated facts;
10. screenshot availability;
11. screenshot approval decision;
12. longevity/metrics status;
13. relationship to custom development;
14. relationship to `/munkaink/`;
15. page argument;
16. Concept A;
17. Concept B;
18. Concept C;
19. rendered comparison findings;
20. selected art direction;
21. rejected directions/reasons;
22. final page architecture;
23. Hero treatment;
24. brand-face decision;
25. screenshot/product-evidence treatment;
26. long-term software treatment;
27. CTA strategy;
28. external `tardify.hu` linking decision;
29. ARTIT grammar reused;
30. patterns deliberately not reused;
31. componentization decision;
32. YAML/schema changes;
33. localization/EN gate;
34. language-switcher readiness;
35. route/navigation integration;
36. SEO implementation/gaps;
37. accessibility;
38. responsive verification;
39. performance/client-JS impact;
40. `/` regression;
41. `/egyedi-fejlesztes/` regression;
42. `/munkaink/` regression;
43. files changed;
44. docs updated;
45. `npm run check`;
46. `npm run build`;
47. bugs fixed;
48. deviations;
49. remaining gates;
50. repository state;
51. recommended next task boundary.

End with:

> **TARDIFY PAGE IMPLEMENTED — READY FOR OWNER VISUAL & CONTENT REVIEW**

unless a real unresolved gate prevents that status.

---

# Final intent

Task 011 should answer:

> **How does ARTIT talk about its own product without suddenly becoming a generic SaaS company?**

The strongest result should make Tardify feel like **owned proof of ARTIT's software philosophy**.

Use real product evidence when genuinely approved.

Use a page-specific visual model only if it adds meaning.

Do not fabricate proof to make the page more impressive.
