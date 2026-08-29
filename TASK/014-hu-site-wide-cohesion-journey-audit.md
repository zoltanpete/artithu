# Task 014 — HU Site-wide Cohesion & Journey Audit

## 0. Task intent

The main Hungarian ARTIT site is now functionally complete enough that the next useful step is **not another isolated page build**.

Tasks 004–013A established the homepage and the primary HU routes, then repeatedly showed the same important lesson: a page can be structurally correct, accessible, responsive, and factually disciplined while still failing at the level of the **rendered experience**.

Task 014 therefore changes scale.

This is a **site-wide cohesion and user-journey audit** of the current Hungarian experience. Its job is to inspect the site as one system rather than as a collection of individually completed pages.

The task is deliberately **audit-first**.

Do not begin by redesigning pages, inventing new sections, or normalizing everything into one template. First establish what actually happens when a visitor moves through the current site in a real browser.

The desired outcome is:

1. a reliable picture of the current HU site as a whole;
2. correction of small, objective, low-risk inconsistencies where the intended solution is already established;
3. a prioritized list of larger issues that require owner review before implementation;
4. a clear recommendation for the next task boundary.

---

# Part 0 — Freeze the approved page-level work

Treat the currently approved page-level art direction as the baseline.

In particular:

- `/` — existing homepage composition and `SystemMap` grammar;
- `/egyedi-fejlesztes/` — approved page and `OperatingFitField` treatment;
- `/munkaink/` — approved page and polished `LivingSystemField`;
- `/tardify/` — approved `TardifySpecimen`, including Task 012's 15–20% visual-strength polish;
- `/rolunk/` — approved Task 012A editorial Hero regrid;
- `/kapcsolat/` — approved Task 013 Hero + Task 013A Conversation Workspace.

Do **not** reopen any of these merely because another aesthetic direction is possible.

A page-level change is justified in Task 014 only if the site-wide audit reveals a concrete cross-page problem, regression, inconsistency, misleading journey, accessibility issue, or objectively weak transition.

If a larger visual/content change appears desirable but is subjective or architectural, document it for owner review instead of silently implementing it.

---

# Part 1 — Re-establish the source of truth

Before making changes:

1. Read the current project documentation, especially:
   - DOC/00–04;
   - DOC/07–09;
   - DOC/11–13;
   - the relevant completion notes for Tasks 008–013A.
2. Inspect the current implementations of:
   - `SiteHeader`;
   - sitewide layout/container primitives;
   - buttons and standalone links;
   - surface/section primitives;
   - all six primary HU page renderers;
   - all four existing SVG/brand-face components;
   - contact-form behavior;
   - SEO/head generation;
   - sitemap/robots/404 handling where applicable.
3. Run the current baseline:
   - `npm run check`;
   - `npm run build`.
4. Record the baseline result before touching code.

Do not assume the previous completion reports are sufficient evidence. They describe the state at the time of each task; Task 014 must inspect the current repository and current rendered site directly.

---

# Part 2 — Define the actual HU visitor journeys

Audit at least these journeys as continuous experiences rather than isolated pages.

## Journey A — Custom-development prospect

Start at `/` and follow the most natural path for someone considering custom software.

Expected candidate route:

`/` → `/egyedi-fejlesztes/` → `/munkaink/` and/or `/rolunk/` → `/kapcsolat/`

Do not force that exact route if the live navigation/content suggests a different natural path. Record what the site actually encourages.

Evaluate:

- whether the homepage makes the next step obvious;
- whether `/egyedi-fejlesztes/` deepens rather than repeats the homepage;
- whether proof/trust arrives at the right moment;
- whether `/munkaink/` and `/rolunk/` have distinct jobs;
- whether the path to `/kapcsolat/` feels earned rather than mechanically repeated;
- whether the visitor has enough context before being asked to contact ARTIT.

## Journey B — Proof-seeking visitor

Start from `/munkaink/` or reach it from the homepage/navigation.

Evaluate:

- whether the page clearly communicates what can and cannot currently be published;
- whether the current evidence level feels intentional rather than incomplete;
- whether the next useful route is clear;
- whether any CTA or cross-link promises more proof than the site currently has.

## Journey C — Trust / working-model visitor

Follow the path toward `/rolunk/`.

Evaluate:

- whether the page answers “who/how will I work with?” as far as approved facts allow;
- whether the absence of named people/portraits feels like a deliberate content gate rather than a broken About page;
- whether `/rolunk/`, `/egyedi-fejlesztes/`, and `/munkaink/` complement rather than duplicate each other.

## Journey D — Tardify / owned-product visitor

Follow `/` → `/tardify/` and inspect the external Tardify handoff.

Evaluate:

- whether ARTIT.hu explains why Tardify matters to ARTIT without becoming a duplicate product site;
- whether the external CTA is clearly differentiated from ARTIT's own contact path;
- whether returning to the broader ARTIT proposition remains understandable;
- whether the Tardify page still respects all unresolved evidence/content gates.

## Journey E — Ready-to-talk visitor

Enter `/kapcsolat/` directly and also reach it from at least two other pages.

Evaluate:

- whether the visitor immediately understands what information is useful;
- whether the site has removed unnecessary specification pressure;
- whether the form feels like the natural end of the site argument;
- whether the Formspree disclosure is visible but not disproportionately prominent;
- whether success/error/native fallback behavior remains correct.

---

# Part 3 — Site-wide visual cohesion audit

This is not a request to make every page look alike.

The site deliberately contains different page-specific compositions. Audit whether they feel like **different members of one ARTIT system**, not whether they share identical geometry.

Inspect and compare:

## 3.1 Hero rhythm

Capture all six primary HU Heroes at the same desktop viewport and at the same mobile viewport.

Recommended comparison widths:

- desktop: 1440px;
- mobile: 390px.

Also inspect the 900px transition where relevant.

Compare:

- top spacing below the header;
- Hero vertical height;
- eyebrow placement and weight;
- H1 scale and line length;
- lead width and spacing;
- CTA presence/absence and whether that absence is intentional;
- visual density;
- balance between text and visual territory;
- transition into the next section.

Do **not** normalize differences that are serving page-specific meaning.

Flag only differences that read as accidental, weak, or inconsistent with the established system.

## 3.2 Brand-face family

Review together:

- `SystemMap`;
- `OperatingFitField`;
- `LivingSystemField`;
- `TardifySpecimen`;
- `/rolunk/` editorial Hero;
- `/kapcsolat/` Conversation Field/Workspace grammar.

Check whether the family now has:

- recognizable shared ARTIT vocabulary;
- sufficient differentiation between semantic jobs;
- consistent restraint;
- no accidental chart/timeline/fake-UI/org-chart readings;
- no one page that suddenly feels materially louder or cheaper than the others.

Do not create a generic `BrandFace` abstraction merely because six pages now exist.

Only propose abstraction if actual implementation duplication now demonstrates a stable shared API and the abstraction would reduce complexity rather than erase semantic distinctions.

## 3.3 Section rhythm

Review full-page screenshots at desktop for all primary routes.

Look for:

- repeated `heading → paragraph → whitespace → tonal band` rhythms becoming monotonous across the site;
- sections that are too tall for their content;
- abrupt density changes;
- visually weak middle sections;
- CTA sections that all feel identical regardless of page argument;
- tonal bands used so frequently that they stop carrying hierarchy;
- excessive empty canvas that has no semantic job.

Important: Tasks 009A–013A repeatedly demonstrated that **functionless empty space is not automatically restraint**. Apply that lesson site-wide, but do not overcorrect into decorative density.

## 3.4 Typography and micro-layout

Compare:

- H1/H2 hierarchy;
- paragraph measure;
- mono-label sizes;
- eyebrow tracking/case;
- standalone links;
- button sizes;
- border/rule strength;
- spacing between headings, body copy, and actions;
- form typography relative to editorial typography.

Identify accidental one-off values that should use an existing token or established pattern.

Do not refactor simply for theoretical purity if the current values intentionally serve a page-specific composition.

---

# Part 4 — Navigation and information architecture audit

Audit the site header and all meaningful cross-links.

## 4.1 Header

Verify on desktop and mobile:

- current primary navigation labels;
- order of items;
- active/current-page behavior if any;
- `Beszéljünk →` destination;
- mobile menu behavior;
- keyboard operation;
- focus visibility;
- whether every main route is reachable without relying on homepage body links.

Do not invent an active-state treatment unless the lack of one is demonstrated to be a real usability problem. If it is a larger visual decision, report it instead.

## 4.2 Cross-link graph

Create a simple route/link inventory for the six primary HU pages.

For each page, record:

- primary outgoing internal links;
- CTA destination(s);
- external destinations;
- whether the link advances the page argument;
- whether any important page becomes a dead end;
- whether any route is over-linked or under-linked.

Pay particular attention to distinctions already established:

- `/munkaink/` = client evidence;
- `/tardify/` = owned-product proof;
- `/rolunk/` = trust/direct collaboration;
- `/egyedi-fejlesztes/` = custom-development proposition;
- `/kapcsolat/` = conversation entry.

Do not collapse these roles.

## 4.3 CTA language audit

Inventory all prominent buttons and major standalone CTA links.

Check:

- consistency of arrow usage;
- whether labels accurately predict destinations;
- whether the same label is used for different actions;
- whether page-final CTAs feel relevant to the argument that precedes them;
- whether Tardify's external CTA is clearly different from ARTIT contact CTAs;
- whether there are too many repeated `Beszéljünk` actions in close proximity.

Small objective wording inconsistencies may be fixed only when they do not require new content approval.

Anything that materially changes positioning or tone must be reported for owner review.

---

# Part 5 — Content cohesion and duplication audit

Do not rewrite the site wholesale.

Instead, identify where the same idea is being repeated without a new job.

Audit recurring themes such as:

- long-term maintainability/developability;
- operation before technology;
- direct senior collaboration;
- no finished specification required;
- real systems / proof;
- Tardify as owned-product proof.

For every meaningful repetition, classify it as one of:

1. **useful reinforcement** — same principle, different job/context;
2. **necessary orientation** — visitor may enter directly on this page;
3. **redundant repetition** — adds no new meaning and weakens the journey;
4. **potential contradiction** — wording creates different expectations across pages.

Only fix category 3 automatically when the correction is obvious and low risk (for example, an exact duplicated block whose removal does not damage direct-entry comprehension).

Bring any substantive rewrite back for owner review.

---

# Part 6 — Evidence and claim-discipline audit

Re-check the current site against the established evidence gates.

Search the rendered output and source content for accidental claims involving:

- years/durations;
- customer counts;
- user counts;
- uptime;
- project counts;
- company sizes;
- ERP survival/integration specifics;
- named clients;
- person names/roles/biographies;
- legal/company details;
- Tardify usage/product facts not approved for ARTIT.hu.

Confirm that no previously gated fact has slipped into visible copy, metadata, alt text, aria labels, structured data, prototype routes, or SEO descriptions.

Also check that art-direction prototype routes are `noindex` and are not exposed through normal site navigation/sitemap unless intentionally documented otherwise.

Do not resolve any content gate by inference.

Update DOC/13 only when the audit establishes a genuinely changed gate status.

---

# Part 7 — SEO / metadata / technical discoverability audit

Review the six primary HU pages as a set.

Check:

- unique and sensible `<title>` values;
- meta descriptions;
- canonical behavior if implemented;
- heading uniqueness;
- sitemap inclusion;
- accidental inclusion of prototype/art-direction routes;
- robots/noindex behavior;
- 404 behavior;
- internal-link integrity;
- external-link behavior for `tardify.hu` and Formspree disclosure;
- structured data currently present or intentionally absent.

Do not invent Organization, Person, LocalBusiness, customer, review, product, or other structured data whose facts remain gated.

If sitemap/prototype behavior is objectively wrong, fix it in this task.

If a structured-data enhancement requires owner-approved facts, report it as a gate instead.

---

# Part 8 — Accessibility consistency audit

Do a site-wide pass, not just isolated component checks.

At minimum verify:

- one H1 per primary page;
- sensible heading order;
- visible keyboard focus;
- mobile navigation keyboard operation;
- interactive SVG behavior on the homepage;
- non-interactive SVG accessibility on the other pages;
- link purpose clarity;
- form labels and status behavior;
- color is not the sole carrier of meaning;
- reduced-motion handling;
- no keyboard traps;
- no accidental focusable decorative elements;
- reasonable reading order where CSS grids visually rearrange content;
- external-link behavior does not create inaccessible surprises.

Use real browser interaction where relevant, not static source inspection alone.

Small objective accessibility defects should be fixed immediately.

Any fix that changes visible art direction substantially should be reported before implementation unless necessary for accessibility.

---

# Part 9 — Responsive system audit

Run a consistent multi-route sweep.

Minimum widths:

- 390px;
- 700px;
- 768px;
- 900px;
- 950px;
- 1100px;
- 1440px;
- 1920px.

For every primary HU route verify:

- no horizontal overflow;
- no clipped content;
- no Hero collisions;
- no broken line wrapping that changes meaning;
- no unusably narrow form controls;
- no orphaned visual devices;
- no sudden whitespace/dead-zone regressions;
- no breakpoint where section hierarchy collapses;
- no console errors.

Give special attention to 900px because multiple page-specific desktop compositions activate there.

Where possible, automate the mechanical sweep, but visually inspect representative screenshots rather than trusting numeric overflow checks alone.

---

# Part 10 — Performance and client-JS consistency

Audit built output for all primary routes.

Record:

- script count per route;
- whether any unexpected client JS has appeared;
- dependency changes since the earlier tasks;
- obvious asset bloat;
- SVG size/duplication concerns if material;
- whether contact-form enhancement remains the only intentional page-specific script besides previously approved homepage behavior.

Do not introduce a framework/hydration abstraction to solve a problem that does not exist.

The site's low-JS/static character is an established strength and should remain the default.

---

# Part 11 — Fix policy for Task 014

Task 014 is **not** a blanket implementation task.

Use three buckets.

## Bucket A — Fix now

You may implement directly when all of the following are true:

- the problem is objectively demonstrated;
- the intended behavior is already established elsewhere in the site or docs;
- the change is small and low-risk;
- it does not introduce new claims;
- it does not materially alter approved art direction;
- it does not require owner preference.

Examples:

- broken internal link;
- accidental route 404;
- inconsistent arrow caused by a typo;
- prototype route incorrectly indexed;
- missing focus style;
- responsive overflow;
- accidental duplicated block with no independent function;
- wrong heading level;
- stale documentation contradicted by current implementation.

## Bucket B — Recommend, do not implement

Use this when the issue is real but the solution involves taste, positioning, content approval, or meaningful architecture.

Examples:

- changing a Hero composition;
- introducing a new brand-face;
- materially rewriting CTA language;
- changing navigation order;
- removing a whole approved section;
- introducing new cross-page content;
- activating English;
- publishing customer/person/legal facts;
- new structured-data strategy.

For every Bucket B item provide:

- evidence;
- impact;
- recommended direction;
- estimated scope/risk;
- suggested future task boundary.

## Bucket C — Leave alone

Explicitly record cases that look different but are intentional and healthy.

This matters: the audit should protect useful variation from accidental normalization.

---

# Part 12 — Browser evidence / comparison board

Create a temporary noindex audit route if useful, for example:

`/art-direction/014-site-cohesion-audit`

It may contain:

- linked thumbnails or framed captures of the six Heroes;
- key section transitions;
- CTA inventory;
- route/link graph;
- concise audit annotations.

However:

- do not turn the audit page into a new production design system;
- do not ship screenshot assets into production unless necessary;
- keep the route noindex;
- exclude it from sitemap/navigation;
- remove temporary generated screenshots from the repository unless there is a documented reason to retain them.

The actual judgment must still come from the real rendered pages.

---

# Part 13 — Documentation updates

Update only documentation whose truth changed.

Likely candidates:

- DOC/03 — route/page architecture or CTA journey findings if changed;
- DOC/07 — site-wide visual-system findings and protected distinctions;
- DOC/08 — only if component/shared-pattern decisions change;
- DOC/09 — only if routing/localization/content architecture changes;
- DOC/11 — accessibility/performance/quality findings as appropriate;
- DOC/12 — evidence/publication rules if the audit exposes a new issue;
- DOC/13 — only for actual gate-status changes or newly discovered gates.

Do not mechanically touch every document just because previous implementation tasks did.

Add a concise Task 014 audit record that distinguishes:

- findings;
- fixes made;
- recommendations deferred;
- intentionally preserved differences.

---

# Part 14 — Required final verification

After any permitted fixes:

1. Run `npm run check`.
2. Run `npm run build`.
3. Inspect the built primary HU routes.
4. Re-run the 8-width responsive sweep.
5. Re-run keyboard/accessibility checks on relevant interactions.
6. Re-check the contact form after any shared CSS/layout changes.
7. Re-check homepage `SystemMap` interaction after any shared CSS/layout changes.
8. Confirm all art-direction/audit routes remain noindex and out of normal navigation/sitemap.
9. Remove `dist/` and temporary artifacts if that remains the repository convention.
10. Inspect `git status --short` and report unexpected files.

Do not commit or push unless explicitly instructed.

---

# Acceptance criteria

Task 014 is complete only when all of the following are true:

1. The six primary Hungarian routes have been reviewed as one connected experience in a real browser.
2. At least the five defined visitor journeys have been walked and documented.
3. Hero rhythm has been compared consistently on desktop and mobile.
4. Full-page visual rhythm has been reviewed, not just above-the-fold areas.
5. The current brand-face family has been assessed for both cohesion and healthy differentiation.
6. Navigation and the cross-link graph have been audited.
7. CTA wording/destination consistency has been audited.
8. Repeated content themes have been classified as reinforcement/orientation/redundancy/contradiction.
9. Existing evidence/content gates have been re-checked without inventing facts.
10. SEO/meta/sitemap/noindex/internal-link behavior has been reviewed.
11. Accessibility has been checked site-wide using real interaction where applicable.
12. All six primary routes pass the 390/700/768/900/950/1100/1440/1920 responsive sweep with no unresolved objective defect.
13. Performance/client-JS impact has been recorded.
14. Every discovered issue has been placed into Bucket A, B, or C.
15. Bucket A fixes have been implemented and re-verified.
16. Bucket B issues have **not** been silently implemented; each has a concrete recommendation and future-task boundary.
17. Intentional page differences have been explicitly protected in Bucket C.
18. `npm run check` passes at the end of the task, with any pre-existing hints clearly identified.
19. `npm run build` passes at the end of the task.
20. No stray screenshots, build artifacts, or temporary files remain unless explicitly documented.
21. The repository is not committed or pushed by the implementer.
22. The completion report provides a clear recommendation for what should happen next.

---

# Required completion report

Return one completion report with at least the following numbered sections:

1. Final status.
2. Repository baseline.
3. Baseline `npm run check` / `npm run build`.
4. Source-of-truth audit performed.
5. Routes audited.
6. Journey A findings.
7. Journey B findings.
8. Journey C findings.
9. Journey D findings.
10. Journey E findings.
11. Site-wide Hero comparison findings.
12. Full-page rhythm findings.
13. Brand-face family findings.
14. Typography/micro-layout findings.
15. Header/navigation findings.
16. Cross-link graph findings.
17. CTA-language findings.
18. Content-duplication/cohesion findings.
19. Evidence/claim-discipline findings.
20. SEO/metadata findings.
21. Sitemap/noindex/prototype-route findings.
22. Accessibility findings.
23. Responsive findings.
24. Performance/client-JS findings.
25. Bucket A issues found.
26. Bucket A fixes implemented.
27. Bucket B issues/recommendations.
28. Bucket C intentional differences preserved.
29. Componentization/refactor decision.
30. Schema/content-architecture changes, if any.
31. Documentation updated and why.
32. Regression verification — homepage.
33. Regression verification — `/egyedi-fejlesztes/`.
34. Regression verification — `/munkaink/`.
35. Regression verification — `/tardify/`.
36. Regression verification — `/rolunk/`.
37. Regression verification — `/kapcsolat/` including form behavior.
38. Final `npm run check` result.
39. Final `npm run build` result.
40. Bugs found/fixed.
41. Deviations from this brief.
42. Remaining gates.
43. Repository state / stray-artifact check.
44. Prioritized next-task recommendation.
45. Owner-review status.

End with one concise status line in the established project style, for example:

> **HU SITE-WIDE COHESION & JOURNEY AUDIT COMPLETE — READY FOR OWNER REVIEW**

---

# Important constraints

- **Audit first, redesign second.**
- Do not reopen approved page art direction without evidence of a site-wide problem.
- Do not normalize page-specific visual identities into one template.
- Do not invent facts to make pages feel more complete.
- Do not activate English as part of this task.
- Do not add customer/person/legal/Tardify facts that remain gated.
- Do not introduce new dependencies unless an objectively necessary audit fix cannot reasonably be achieved with the existing stack.
- Do not create client-side JS merely for visual polish.
- Do not commit or push.
- Use rendered browser evidence for visual judgments.
- A technically clean audit that fails to notice a visibly weak site-wide transition is incomplete.
- Equally, an audit that redesigns healthy intentional differences merely to make everything uniform is also incomplete.

The objective is not uniformity. The objective is for the completed Hungarian ARTIT site to feel **deliberate, coherent, credible, and navigable as one product**.
