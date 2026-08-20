# ARTIT.hu — Content Gaps and Validation

## Rule

This file is the central backlog for facts/assets/content that must be verified or supplied.

Do not silently fill gaps.

## Organization

- [ ] Legal company name
- [ ] Registered address if public
- [ ] Public email
- [ ] Public telephone
- [ ] Organization logo source
- [ ] Relevant social/profile URLs
- [ ] Privacy/legal page requirements
- [ ] Current ARTIT domain canonical format

## Brand / people

- [ ] Final ARTIT accent direction based on existing brand assets
- [ ] Expert/person name(s) to feature
- [ ] Role/title wording
- [ ] Short biography
- [ ] Portrait/work-environment asset
- [ ] Permission to publish personal imagery/profile links

## Case Study 01

- [ ] Exact system launch year
- [ ] Exact lifecycle claim
- [ ] Exact current usage status
- [ ] Exact workflow
- [ ] Main modules/processes verification
- [ ] Customer name publication permission
- [ ] Customer logo permission
- [ ] Screenshot availability
- [ ] Screenshot anonymization
- [ ] Tardify origin-story wording
- [ ] Any measurable business outcome that can be verified

## Case Study 02

- [ ] Exact system launch year
- [ ] Exact 20+ year claim
- [ ] ERP generations/timeline
- [ ] Which ERP/vendor names may be published
- [ ] Integration details suitable for public communication
- [ ] Exact business workflows
- [ ] Customer name publication permission
- [ ] Customer logo permission
- [ ] Screenshot availability
- [ ] Screenshot anonymization
- [ ] Explanation of why the system survived multiple ERP generations
- [ ] Any measurable business outcome that can be verified

## Supporting proof

- [ ] Smaller company/reference details
- [ ] 20+ year Classic ASP application exact age
- [ ] Whether supporting references may be named publicly

## Tardify

- [ ] Exact approved ARTIT ↔ Tardify origin wording
- [ ] Approved product screenshots for ARTIT site
- [ ] Preferred Tardify destination page
- [ ] Product relationship structured-data approach after implementation review

## Contact

- [ ] Form destination
- [ ] Hosting/deployment environment
- [ ] Spam protection approach
- [ ] Privacy notice wording
- [ ] Analytics/consent requirements

## SEO

- [ ] Final organization structured data values
- [ ] Production canonical URL
- [ ] Default OG asset
- [ ] Search Console setup owner/process
- [ ] Analytics decision

## Publication gate

No item marked unverified should be turned into a confident public claim.

Use TODO placeholders during development rather than invented content.

## Task 007 — homepage implementation, gate compliance

The full nine-section homepage (`/`) was implemented in Task 007 against the gates already recorded above — no new gaps were discovered, only existing ones respected in production. Specifically omitted rather than fabricated: exact longevity years/durations, case-study customer names/dates/outcomes/screenshots, the Tardify product screenshot, and the featured expert's name/role/portrait. See `04-HOMEPAGE-CONTENT-ARCHITECTURE.md`'s "Implementation status (Task 007)" for exactly which section shows which approved copy and which specific omits which gated fact.

## English translation

- [ ] Approved English translation of the homepage marketing copy (Hero, Problem, Decision, Work, Longevity, Tardify, Process, Senior/Who, Final CTA — every `LocalizedGated` field in `src/content/pages/home/content.yaml`, see `09-TECHNICAL-ARCHITECTURE.md` "Localization")
- [ ] Approved English translation of the homepage SEO title/description (`content.yaml`'s `seo` block)

The bilingual content architecture (Task 007B) is built and validated for both locales; only the English homepage copy itself is missing approval, not the mechanism to publish it. `/en/` is intentionally not published until this is resolved — see `09-TECHNICAL-ARCHITECTURE.md` "Localization" for why, and for exactly which strings (System Map technical vocabulary, site navigation) already have approved English equivalents and don't belong on this list.

## Task 009 — `/egyedi-fejlesztes/` implementation, gate compliance

Built against the gates already recorded above — no new gap was discovered, only existing ones respected. The two case-study evidence references embedded in the "Two directions" section reuse exactly the same publication-safe working titles already approved for the homepage's Work section (no exact years, customer names, sizes or outcomes — those remain `TO VERIFY` under "Case Study 01"/"Case Study 02" above). No Tardify screenshot or mention was needed or added (Tardify was deliberately not included on this page — see `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`'s Task 009 implementation-status note for the reasoning). No English translation of this page's copy exists, for the identical reason `/`'s doesn't — see "English translation" above, which now also covers this page's `LocalizedGated` fields in `src/content/pages/egyedi-fejlesztes/content.yaml`.

## Task 009A — Custom Development brand-face, gate compliance

The `OperatingFitField` Hero visual invents nothing: its four node labels (Excel, separate system, manual data, packaged software) are the exact categories already approved in `01-BRAND-POSITIONING.md`'s "main problem areas" and already published in this page's own justification signals; no customer systems, percentages, performance numbers, project data, architectural specifications, product capabilities or process guarantees are depicted or implied. No new content gap was discovered or created.

## Task 010 — `/munkaink/` evidence hub, gate compliance

Built against the gates already recorded above ("Case Study 01"/"Case Study 02") — no new gap was discovered, only existing ones respected, and more strictly than either prior use of these facts: the page states only the two approved working titles and their already-approved relationship to the two custom-development directions (DOC/02). Nothing from either case's "Known" list in `06-CASE-STUDY-ARCHITECTURE.md` (industry, company size, exact duration, current usage status) appears anywhere on the page, since DOC/06 itself marks that list as internal working understanding, not confirmed publication-ready fact — including the general, non-numeric "continuous operation" principle language in the Hero/principle sections, which was deliberately worded to avoid even an implicit currently-in-use claim (see `07-DESIGN-SYSTEM.md` "Munkáink evidence grammar" and the Task 010 completion report for the specific wording review this required). No screenshot, no metric, no customer identity, no quote. Both cases remain genuinely un-expanded, awaiting the same approvals tracked under "Case Study 01"/"Case Study 02" above.

## Task 010A — Munkáink brand face, gate compliance

`LivingSystemField`'s Hero visual invents nothing quantitative or factual: one label ("RENDSZER"/"SYSTEM") and an ambient field of unlabeled, undifferentiated marks — no count implies a real number (the mark count is an arbitrary display choice, not a claim about anything measurable), no mark is tied to a specific fact, no exact uptime/duration/user-count/transaction-volume/named-integration/outcome is depicted or implied. Two earlier concepts were rejected specifically because they crossed this line even without literal numbers attached — see `07-DESIGN-SYSTEM.md`'s rejected Concept A (ascending bars read as an implied growth claim) and Concept B (a pulse + "AKTÍV" label read as a live-status claim, the exact case DOC/07's own "Construction / blueprint layer" rule already prohibits). The selected concept was chosen partly *because* it carries no such implication. No new content gap was discovered or created.

## Task 008 — visual lock reconciliation

The homepage visual design was formally locked in Task 008 (see `07-DESIGN-SYSTEM.md` "Homepage Visual Lock"). This is a reconciliation, not a new audit: **there is no open homepage visual/design gap** in this file — every item above is a content/evidence gap (a fact, asset, permission or approval the business hasn't supplied yet), not a design decision left unresolved. The locked visual language already accommodates every gap below via omission-over-fabrication (Task 007's own rule, reused unchanged through 007C/007D/007D.1): the Work/Tardify/Longevity/Senior-Who sections' restrained, evidence-shaped treatments were specifically designed to read as intentional with the gated facts still missing, not as placeholders waiting for them. Supplying any of these facts later is a content update to `src/content/pages/home/content.yaml`, not a reason to reopen the visual lock or redesign the section that displays it.
