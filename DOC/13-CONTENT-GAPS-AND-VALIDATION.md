# ARTIT.hu — Content Gaps and Validation

## Rule

This file is the central backlog for facts/assets/content that must be verified or supplied.

Do not silently fill gaps.

## Organization

- [x] Legal company name — supplied (Task 018): `ARTIT Multimédia Kft.` **Published (Task 019)**: `/adatkezeles/`+`/en/privacy/`'s "Controller" fact block and the sitewide footer.
- [x] Registered address — supplied (Task 018): `2013 Pomáz, Árvalányhaj u. 37.` **Published (Task 019)**: privacy notice only (not repeated in the footer — Task 019's own brief explicitly doesn't require it there once it's on the privacy page).
- [x] Public email — supplied (Task 018): `pete.zoltan@gmail.com`. **Published (Task 019)**: privacy notice and sitewide footer.
- [ ] Public telephone — still not supplied. Not required — the privacy notice and footer function correctly with email only.
- [ ] Organization logo source — still not supplied; a small geometric favicon mark was created instead (Task 019, see `12-ASSET-STRATEGY.md`) — deliberately not treated as equivalent to a full logo, and not used as the `Organization` JSON-LD's `logo` property for that reason (see below).
- [ ] Relevant social/profile URLs — still not supplied; no `sameAs` added to structured data.
- [x] Tax number — supplied (Task 018): `23552986-2-13`. **Published (Task 019)**: privacy notice's "Controller" fact block.
- [x] Company registration number — supplied (Task 018): `13-09-150805`. **Published (Task 019)**: same block.
- [x] Hosting provider — supplied (Task 018): FORPSI / BlazeArts Kft., `1096 Budapest, Thaly Kálmán utca 39.`, registration no. `01-09-389087`, tax no. `12539833-2-43`, EU VAT `HU12539833`. **Published (Task 019)**: privacy notice's "Hosting" fact block, both locales.
- [x] Privacy/legal page requirements — **implemented (Task 019)**: `/adatkezeles/` (HU) and `/en/privacy/` (EN), a factual notice covering the controller's identity, how the website operates, the contact form's data flow (name/email/message → Formspree → ARTIT, no marketing/newsletter use, honeypot explained), hosting, cookies/analytics (none exist, stated plainly), and retention/rights. **`LEGAL REVIEW RECOMMENDED`**: the notice explicitly states its own limits — no fixed retention period is claimed, no specific legal basis (e.g. a GDPR Article 6 ground) is cited, and the notice's own closing sentence in the "Retention, deletion, and rights" section states outright that it "is not a legal guarantee or a statement of regulatory compliance." This is a deliberate, transparent boundary per Task 019 §14, not an oversight — see `14-LAUNCH-READINESS.md`'s Task 019 section for the full reasoning.
- [x] Current ARTIT domain canonical format — supplied (Task 018): `artit.hu`. **Wired (Task 019)**: `astro.config.mjs`'s `site: 'https://artit.hu'` — every canonical/hreflang/OG/JSON-LD URL sitewide is now absolute, verified against the production build.

**Organization structured data — implemented (Task 019)**, homepage only (both locales' canonical page, not repeated sitewide): `name`, `url`, `email`, and a `PostalAddress` — every property a verified fact from this section, nothing else. No `logo` (see above), no `sameAs`, `telephone`, or founding date — none of those facts exist yet, and none were invented to fill the schema out.

## Brand / people

- [x] Final ARTIT accent direction — **resolved (Task 004A/004B, migrated Task 006)**, not a recovered brand asset: no historical ARTIT accent color exists anywhere in the repository (confirmed by full repo search before proposing anything). The implemented accent is a new website design-system choice, not a claimed brand color — see `12-ASSET-STRATEGY.md` "Brand accent source" and `07-DESIGN-SYSTEM.md` for the current value and the Task 006 migration. This checklist item was never marked resolved despite the decision being documented elsewhere — corrected here (Task 017), not a new finding.
- [ ] Expert/person name(s) to feature
- [ ] Role/title wording
- [ ] Short biography
- [ ] Portrait/work-environment asset
- [ ] Permission to publish personal imagery/profile links

## Case Study 01

Substantially resolved by Task 015's validated evidence pass — see `06-CASE-STUDY-ARCHITECTURE.md` for the full evidence matrix and allowed/prohibited wording per claim.

- [x] Existence of the real customer system and its operational use — OWNER_VALIDATED
- [x] Main operational coverage (job/work tracking, quotation, maintenance scheduling, tickets, invoicing prep, etc.) — OWNER_VALIDATED, safe to describe as business processes
- [x] 2017 historical usage — VERIFIED (dated upload-area file, dated partner-record modification)
- [x] Technology (ASP.NET Web Forms + ASP.NET MVC mobile) — safe as longevity/maintainability evidence, not a current-stack claim
- [x] Screenshot roles decided (maintenance scheduling = primary proof, quotation management = supports the before/after story) and asset files now in the repository, published — **resolved (Task 016)**: `src/assets/case-studies/case-01-maintenance-scheduling.png`, `case-01-quotation-management.png`. This task's own pixel-level inspection found apparent real identifying data (see `12-ASSET-STRATEGY.md`'s "Screenshot intake" note); the owner then explicitly confirmed the displayed data is anonymized/fictionalized, not traceable to real values — accepted at face value as the owner's own direct statement about their own business data, and documented transparently here rather than silently dropped
- [ ] Exact system launch year
- [ ] A precise, unbroken longevity span stated as exact fact (a round/approximate "roughly a decade, documented since 2017" framing is supported; an exact "pontosan 10 éve" claim is not — see `06-CASE-STUDY-ARCHITECTURE.md`)
- [ ] Customer name/logo publication permission
- [ ] Tardify origin-story wording — remains fully gated; do not imply this system "became Tardify" in any form
- [ ] Any measurable business outcome/metric (no percentage, time-saved, or ROI figure is supported)
- [ ] Exact company size — not restated by this evidence pass; the previous "20–50 people" figure is not reconfirmed
- [x] Working title — **resolved (Task 016)**: owner-approved "Egy üzemi rendszer, amely egy évtizede teszi a dolgát." now live in all three occurrences (homepage, `/munkaink/`, `/egyedi-fejlesztes/`); see `06-CASE-STUDY-ARCHITECTURE.md`'s "Working title — resolved (Task 016)"

## Case Study 02

Substantially resolved by Task 015's validated evidence pass — see `06-CASE-STUDY-ARCHITECTURE.md` for the full evidence matrix and allowed/prohibited wording per claim.

- [x] Existence of the real customer system and its long operational history — OWNER_VALIDATED
- [x] Described business processes (project/work-number management, invoicing milestones, reporting, plan-vs-actual, partner management, service/design/manufacturing/delivery assignments) — OWNER_VALIDATED, safe as business-process description
- [x] 2002 lineage evidence — VERIFIED (archived Microsoft Access databases from the Classic ASP generation)
- [x] 2003 documented-function evidence — VERIFIED (user guide for the `tervtár` function)
- [x] Long-lived ERP integration story, at the caveated level — the *existence* of multiple ERP-era integrations is VERIFIED (connection-string config keys for four recalled systems); the exact count/timeline remains approximate; raw config/vendor-name publication remains gated (see below)
- [x] Classic ASP → ASP.NET Web Forms technology evolution — OWNER_VALIDATED/VERIFIED, safe to state as the honest technical story
- [x] Screenshot roles decided (plan-vs-actual = primary proof, cost summary = supporting proof for "Integrations and environment") and asset files now in the repository, published — **resolved (Task 016)**: `src/assets/case-studies/case-02-plan-vs-actual.png`, `case-02-cost-summary.png`. Same anonymization-confirmation resolution as CS01 above — see `12-ASSET-STRATEGY.md`'s "Screenshot intake" note. The cost-summary screenshot displays vendor/customer/personal-name-shaped text (e.g. a "Megrendelő" field and named vendor line items); alt text and captions deliberately describe only the visible UI function, never any of those displayed values, regardless of their confirmed-fictional status
- [ ] Exact system launch year
- [ ] A precise "unchanged since 2002" framing — not supported; only "traceable to 2002" is
- [ ] Exact ERP replacement count/timeline as citable fact (owner recollection: approximately 2–3; not yet a verified precise count)
- [ ] ERP/vendor names (Oracle, Tandofer, Apollo, EcoLine) published on the site — their existence is confirmed by config evidence, but public naming is a separate clearance this pass did not grant
- [ ] Raw connection strings, server/database names, credentials, topology — **gated permanently**, not a "verify later" item
- [ ] Customer name/logo publication permission
- [ ] Exact CS02 employee/user counts (~100–150 employees, ~50–100 users remain approximate)
- [ ] Any measurable business outcome/metric (no percentage, time-saved, or ROI figure is supported)
- [ ] Industry — the previous "building services / HVAC" tag applied to this case is not reconfirmed by this pass and should not be treated as validated (see `06-CASE-STUDY-ARCHITECTURE.md`'s "Superseded assumptions")

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

- [x] Form destination — Formspree endpoint `https://formspree.io/f/xppabkzq`, owner-supplied and approved (Task 013); see `09-TECHNICAL-ARCHITECTURE.md` "Forms" and the Task 013 gate note below
- [x] Hosting/deployment environment — resolved as a non-issue by the chosen approach: a static-site-compatible external POST target needs no server adapter, so this was never actually blocking (Task 013)
- [x] Spam protection approach — basic honeypot (`_gotcha`, Formspree's own convention), implemented (Task 013); a stronger mechanism (e.g. reCAPTCHA) remains a future option, not currently needed
- [x] Privacy notice wording — **implemented (Task 019)**: `/adatkezeles/`/`/en/privacy/`, linked directly from both the HU and EN contact form's privacy note (alongside the existing Formspree link, not replacing it — the form still discloses Formspree's own role directly).
- [x] Analytics/consent requirements — **resolved as "none exist" (Task 019)**: confirmed by source inspection (no analytics, tag managers, pixels, session recording, or non-essential cookies anywhere in the codebase) and stated plainly in the privacy notice's "Cookies / analytics" section; no cookie-consent banner was added, since none is needed for a site with nothing to consent to.

## SEO

- [x] Final organization structured data values — **resolved (Task 019)**: see "Organization" above.
- [x] Production canonical URL — **resolved (Task 019)**: `https://artit.hu`, wired into `astro.config.mjs`.
- [x] Default OG asset — resolved (Task 017): `public/og-default.png`.
- [ ] Search Console setup owner/process — post-launch, out of Task 019's own explicit scope.
- [x] Analytics decision — **resolved as "none, intentionally" (Task 019)**: see "Contact" above.

## Publication gate

No item marked unverified should be turned into a confident public claim.

Use TODO placeholders during development rather than invented content.

## Task 007 — homepage implementation, gate compliance

The full nine-section homepage (`/`) was implemented in Task 007 against the gates already recorded above — no new gaps were discovered, only existing ones respected in production. Specifically omitted rather than fabricated: exact longevity years/durations, case-study customer names/dates/outcomes/screenshots, the Tardify product screenshot, and the featured expert's name/role/portrait. See `04-HOMEPAGE-CONTENT-ARCHITECTURE.md`'s "Implementation status (Task 007)" for exactly which section shows which approved copy and which specific omits which gated fact.

## English translation

- [x] English translation of the homepage marketing copy — **resolved (Task 018)**: every `LocalizedGated` field in `src/content/pages/home/content.yaml` (Hero, Problem, Decision, Work, Longevity, Tardify, Process, Senior/Who, Final CTA) now carries a natural-English adaptation, not a literal translation. Verified in the production build (`/en/`), not just the source.
- [x] English translation of the homepage SEO title/description — **resolved (Task 018)**, same file.
- [x] Same resolution extended to every other production page's `LocalizedGated` content — **resolved (Task 018)**: `/egyedi-fejlesztes/`, `/munkaink/`, `/tardify/`, `/rolunk/`, `/kapcsolat/` (including all form field labels/states, which already had `en` from Task 013 as technical/functional strings — this task added the remaining gated marketing fields), and both case studies (`src/content/case-studies/*.md`).

**Blanket EN content/route gate — resolved (Task 018).** The bilingual content architecture (Task 007B) was built and validated for both locales from the start; this task closes the remaining gap — the English copy itself — and publishes `/en/*` as real, indexable production routes for the first time. See `06-CASE-STUDY-ARCHITECTURE.md`'s per-case evidence tables for the claim-by-claim EN/HU parity check performed on the two case studies specifically (the highest-stakes content, since it carries GATED/DO_NOT_PUBLISH boundaries), and `14-LAUNCH-READINESS.md`'s Task 018 section for the full route map, terminology decisions, and what remains for Task 019.

**Not resolved by this task, and explicitly out of scope**: EN legal/privacy copy (see "Organization" above) — `/en/kapcsolat/`'s equivalent (`/en/contact/`) links to the same interim Formspree privacy policy as the Hungarian, with no ARTIT-authored EN or HU privacy notice yet.

## Task 009 — `/egyedi-fejlesztes/` implementation, gate compliance

Built against the gates already recorded above — no new gap was discovered, only existing ones respected. The two case-study evidence references embedded in the "Two directions" section reuse exactly the same publication-safe working titles already approved for the homepage's Work section (no exact years, customer names, sizes or outcomes — those remain `TO VERIFY` under "Case Study 01"/"Case Study 02" above). No Tardify screenshot or mention was needed or added (Tardify was deliberately not included on this page — see `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`'s Task 009 implementation-status note for the reasoning). No English translation of this page's copy exists, for the identical reason `/`'s doesn't — see "English translation" above, which now also covers this page's `LocalizedGated` fields in `src/content/pages/egyedi-fejlesztes/content.yaml`.

## Task 009A — Custom Development brand-face, gate compliance

The `OperatingFitField` Hero visual invents nothing: its four node labels (Excel, separate system, manual data, packaged software) are the exact categories already approved in `01-BRAND-POSITIONING.md`'s "main problem areas" and already published in this page's own justification signals; no customer systems, percentages, performance numbers, project data, architectural specifications, product capabilities or process guarantees are depicted or implied. No new content gap was discovered or created.

## Task 010 — `/munkaink/` evidence hub, gate compliance

Built against the gates already recorded above ("Case Study 01"/"Case Study 02") — no new gap was discovered, only existing ones respected, and more strictly than either prior use of these facts: the page states only the two approved working titles and their already-approved relationship to the two custom-development directions (DOC/02). Nothing from either case's "Known" list in `06-CASE-STUDY-ARCHITECTURE.md` (industry, company size, exact duration, current usage status) appears anywhere on the page, since DOC/06 itself marks that list as internal working understanding, not confirmed publication-ready fact — including the general, non-numeric "continuous operation" principle language in the Hero/principle sections, which was deliberately worded to avoid even an implicit currently-in-use claim (see `07-DESIGN-SYSTEM.md` "Munkáink evidence grammar" and the Task 010 completion report for the specific wording review this required). No screenshot, no metric, no customer identity, no quote. Both cases remain genuinely un-expanded, awaiting the same approvals tracked under "Case Study 01"/"Case Study 02" above.

## Task 010A — Munkáink brand face, gate compliance

`LivingSystemField`'s Hero visual invents nothing quantitative or factual: one label ("RENDSZER"/"SYSTEM") and an ambient field of unlabeled, undifferentiated marks — no count implies a real number (the mark count is an arbitrary display choice, not a claim about anything measurable), no mark is tied to a specific fact, no exact uptime/duration/user-count/transaction-volume/named-integration/outcome is depicted or implied. Two earlier concepts were rejected specifically because they crossed this line even without literal numbers attached — see `07-DESIGN-SYSTEM.md`'s rejected Concept A (ascending bars read as an implied growth claim) and Concept B (a pulse + "AKTÍV" label read as a live-status claim, the exact case DOC/07's own "Construction / blueprint layer" rule already prohibits). The selected concept was chosen partly *because* it carries no such implication. No new content gap was discovered or created.

## Task 011 — `/tardify/` product story, gate compliance

Built against the gates already recorded above ("Tardify") — no new gap was discovered, only existing ones respected, more strictly than the homepage's own use of these facts: none of "Exact approved ARTIT ↔ Tardify origin wording," "Approved product screenshots," or "Preferred Tardify destination page" was resolved by this task — the page states only ARTIT's own-product differentiator claim already approved in `01-BRAND-POSITIONING.md` plus three homepage Hero/finalCta strings reused verbatim (never re-authored, so no new origin-wording claim was invented), links out to `tardify.hu` directly for anything about the product itself rather than asserting Tardify facts on ARTIT's own site, and carries no screenshot of any kind (see `12-ASSET-STRATEGY.md`'s Task 011 note). Any product details incidentally observed in the sibling `tardifyweb` repository during earlier i18n research were deliberately not used, since they were never approved for ARTIT.hu publication. "Product relationship structured-data approach" also remains open — no structured data describing the ARTIT↔Tardify relationship was added this task. All four Tardify gate items above remain exactly as tracked; none was silently resolved by shipping this page.

## Task 011A — Tardify brand-face reopening, gate compliance

**Product-evidence re-audit (required by this task's own brief)**: re-checked whether real Tardify screenshots/assets now exist in the ARTIT repository — they do not; `public/` and `src/assets/` remain empty. Re-checked whether `tardify.hu`'s own public imagery might legitimately be reused — no repository documentation authorizes this, so, per this task's own explicit instruction not to assume public visibility equals publication approval, none was consulted or used. "Approved product screenshots for ARTIT site" therefore remains exactly as gated as it was after Task 011; this task did not need it resolved, since `TardifySpecimen` was deliberately built as an abstract, non-UI, non-photographic device rather than a screenshot stand-in.

No new content gap was discovered or created: the specimen plate's one word ("TARDIFY") is the product's own name, not a claim; its blueprint-texture band, tick marks, and signature mark carry no count, date, version, metric, or feature label of any kind — reviewed specifically against this task's own §6/§14 rejection tests (no exact age, version count, customer count, uptime, adoption, or architecture is depicted or implied). The three remaining Tardify gates from Task 011 ("Exact approved ARTIT ↔ Tardify origin wording," "Preferred Tardify destination page," "Product relationship structured-data approach") were untouched by this task, which was scoped to the Hero visual only.

## Task 012 — `/rolunk/` senior collaboration page, gate compliance

**Person/portrait gate re-audit (required by this task's own brief)**: re-checked the "Brand / people" gate list above — all five items ("Expert/person name(s) to feature," "Role/title wording," "Short biography," "Portrait/work-environment asset," "Permission to publish personal imagery/profile links") remain exactly as unresolved as before this task. None was used, none was invented, and no stock-photo/avatar/silhouette substitute was used in their place — the page was designed from the outset to make its case without any of them, per this task's own explicit instruction, not merely to omit a missing asset the way `/tardify/` omits a missing screenshot.

Built against the gates already recorded above — no new gap was discovered, only existing ones respected, more strictly than the homepage's own use of this material: `hero.titleLead`/`hero.titleAccent`/`hero.lead`'s underlying claim, and `continuity.headline`/`continuity.statement`, are the exact already-published homepage Senior/Who and Longevity copy (Task 007) reused verbatim for the identical underlying fact. The Longevity "Built for the long term" proof inventory's exact figures ("10+ év," "20+ év," the ERP-survival claim — `01-BRAND-POSITIONING.md`) were **not** used anywhere on this page, since they remain unverified — only the already-approved, figure-free principle language ("A hosszú táv nálunk nem marketingígéret." / "A technológia eszköz. A működő rendszer a cél.") appears. The `practice` section's claim (continuity of the same person reduces context loss) is presented as a direct logical consequence of the already-approved core statement, not as a new, separately unverifiable fact about ARTIT's internal process. The Tardify cross-link references the already-approved "same standard" relationship without restating `/tardify/`'s own copy. No company founding date, team size, or organizational claim appears anywhere on the page.

## Task 012A — Rólunk Hero brand-face exploration, gate compliance

Re-audited the "Brand / people" gate list per this task's own explicit requirement (Part 4/§6) — unchanged from Task 012: all five items remain unresolved. No name, role, biography, photograph, team size, or founding-history fact was used, implied, or substituted in any of the three explored Hero concepts, including the two rejected diagram concepts (a working-surface panel and a shared-reference datum line, neither of which depicted a person or implied team size either). The selected direction changes only how the already-approved Hero copy is arranged on screen, not what it claims — no new content gap was discovered or created.

## Task 013 — `/kapcsolat/` conversation entry, gate compliance

**Mandatory contact-mechanism audit (this task's own §3), classified before any implementation began**: public email — NOT APPROVED / NOT FOUND (repo-wide search, none exists). Public telephone — NOT APPROVED / NOT FOUND. Registered address — NOT APPROVED / NOT FOUND. Legal company name — NOT APPROVED / NOT FOUND. Existing form/backend — NOT APPROVED / NOT FOUND (no form library in `package.json`, no SSR adapter in `astro.config.mjs`). Given every one of these was unresolved, the task's own hard rule applied: do not invent any of them, and do not build a non-functional form. This was surfaced to the owner directly rather than resolved by assumption, since it blocks the page's entire core function — the owner supplied a Formspree endpoint specifically for this purpose, which is now the one new, genuinely approved fact this task introduces (see the "Contact" gate list above and `09-TECHNICAL-ARCHITECTURE.md` "Forms").

**What was NOT invented despite now having a working form**: no company/phone/budget/project-type/deadline/employee-count/attachment/marketing-consent field was added (Task 013 §6's own explicit list of fields not to auto-add) — only name, email, and message. No response-time promise, office-hours claim, or "we review every message personally"-style process claim was made anywhere on the page, since none of those is verified. No success message asserts anything beyond what the Formspree API response itself confirms (the wording was written and re-checked specifically to avoid an implicit time commitment — "hamarosan" ("soon") was deliberately avoided in every draft).

**SEO**: no LocalBusiness, Organization address/phone, or Person structured data was added — `seo.title`/`seo.description` only, same restraint as every other page. The "Organization" gate list above (legal name, address, email, phone, logo, social URLs, privacy/legal page, canonical domain) remains entirely untouched by this task; shipping a working contact form did not require or imply resolving any of it.

No new content gap was discovered beyond what's now recorded in the updated "Contact" checklist above; the four still-open items there (privacy notice wording, analytics/consent, and the two now-narrower open sub-questions under spam protection/hosting) are the honest remainder, not silently dropped.

## Task 013A — Kapcsolat post-Hero visual pass, gate compliance

A visual/compositional task, not a content task — re-confirmed against this task's own explicit "do not invent" list (Part 0 §2): no company/phone/budget/deadline/project-type/consent field was added, no privacy wording was invented, no legal name/address/email/phone was introduced, no response-time promise was made. The form's three fields, its Formspree endpoint, and its success/error copy are all unchanged from Task 013 — only their position on the page changed. No item in the "Contact" or "Organization" gate lists above was touched, resolved, or newly opened by this task.

## Task 015 — validated evidence integration, gate compliance

A documentation/architecture task — no case-study pages, screenshots, or visible copy were implemented (out of scope by the task's own brief). The owner supplied a substantially richer evidence pass for both Case Study 01 and 02 than the previous "Known"/"TO VERIFY" split in `06-CASE-STUDY-ARCHITECTURE.md` represented; this task converted it into the seven-category evidence-classification system now used throughout that file (VERIFIED / OWNER_VALIDATED / APPROXIMATE / ANONYMIZED_ASSET_READY / VERIFY_BEFORE_EXACT_CLAIM / GATED / DO_NOT_PUBLISH) and re-derived both gate checklists above from it directly, rather than assuming the old checklists were still accurate.

**Genuinely ungated this task** (see the `[x]` items above for the exact claim and its allowed framing): both systems' real existence and operational use; both cases' described business processes; CS01's 2017 historical-use artifacts; CS01's technology stack as longevity evidence; CS02's 2002/2003 lineage artifacts; CS02's ERP-integration *existence* (not its exact count/names); CS02's Classic ASP → ASP.NET Web Forms evolution; both cases' screenshot *roles* (which screenshot proves what, and where it belongs).

**Explicitly re-gated or newly caveated, not loosened**: exact longevity spans stated as precise fact (only round/approximate framing, transparently sourced, is supported); CS01's exact company size (previously listed, not reconfirmed here — downgraded, not carried forward); CS02's industry tag (same — previously listed for both cases identically, which in hindsight reads as an unconfirmed placeholder, not two independently verified facts); ERP vendor names and all raw configuration detail (existence confirmed, public naming and any technical specifics remain a separate, still-closed decision); the Tardify-lineage question for CS01 (explicitly named `DO_NOT_PUBLISH` this pass, stronger than a routine "TO VERIFY").

**Found, not fixed**: the currently-*published* CS01 working title ("...amely együtt nőtt a vállalkozással.") now conflicts with the validated evidence (adaptation of an existing system, not organic co-growth) across three separate content fields (homepage, `/munkaink/`, `/egyedi-fejlesztes/`). This task deliberately did not edit any of them — the evidence-aligned replacement direction is itself still "editorial working copy," not owner-approved final text, and changing published copy without that approval would exceed this task's own scope guard. Recorded here and in `06-CASE-STUDY-ARCHITECTURE.md` as the most concrete open item for the next content-facing task.

**No screenshot file exists in the repository** (`public/`, `src/assets/` both confirmed empty by direct search) — reported anonymization status for all four screenshots is therefore recorded as claimed/OWNER_VALIDATED, not independently verified by this task; a real pixel-level anonymization pass remains required once each file is actually added, per `12-ASSET-STRATEGY.md`'s "Anonymization" section.

## Task 016 — case-study art direction + production implementation, gate compliance

**CS01 working title resolved**: the owner approved "Egy üzemi rendszer, amely egy évtizede teszi a dolgát." — implemented across all three live occurrences (homepage, `/munkaink/`, `/egyedi-fejlesztes/`). Verified in the production build, not just the source: `grep` confirmed the new string renders on all three pages and the old string appears nowhere in `src/content/`. See "Case Study 01" gate list above and `06-CASE-STUDY-ARCHITECTURE.md`'s "Working title — resolved (Task 016)".

**CS02 working title audited, kept**: "A rendszer, amely több ERP-t is túlélt." reviewed against the Task 015 evidence matrix — already uses the non-exact "több" qualifier, names no vendor, accurately reflects the ERP-continuity evidence. No revision needed or made.

**Screenshot intake — blocked, then reclassified, mid-task**: four screenshots were supplied as chat attachments (not repository files). A direct pixel inspection against `12-ASSET-STRATEGY.md`'s checklist found all four contained apparent customer/company names, a full personal name, a postal address, a username, a project identifier shared across two images, and specific financial figures — an initial `BLOCKED — REQUIRES FURTHER ANONYMIZATION` finding on every asset, reported to the user without reproducing the specific values found. The owner then confirmed directly that all values shown are fictionalized/substituted for anonymization purposes, not real underlying data — re-classifying all four as safe per that confirmation. **Separately, a purely technical blocker existed**: chat-attached images could not be extracted to the filesystem by this session's tooling; the user saved the four files into `src/assets/case-studies/` directly, unblocking the rest of the task. This distinction ("privacy-blocked" vs. "not-yet-on-disk") is recorded here for a future session's benefit even though both are now resolved.

**Filename/content mismatch caught before publication**: two of the four user-saved files had swapped names relative to their actual content (the file named `case-02-plan-vs-actual.png` actually contained the cost-summary screenshot, and vice versa) — caught by reading each file's actual pixel content rather than trusting its filename, then corrected via rename before either file was referenced in any content or component.

**Content Collection schema extended**: `src/content.config.ts`'s existing `case-studies` collection (Task 003, previously holding only a non-public dev fixture) now carries the full evidence-aware shape DOC/09's Task 015 planning note anticipated — `slug`, `essence`, `evidenceBadge`, a `screenshots[]` array (using the existing `image()` schema helper), and a `sections` object mirroring DOC/06's shared-structure vocabulary with every section past `hero` optional, so CS01 and CS02 can genuinely populate a different subset. The non-public dev fixture was removed (`src/content/case-studies/_dev-fixture.md`) now that two real entries validate the schema. Two real entries were written — `src/content/case-studies/uzemi-rendszer.md` (CS01) and `erp-integracio.md` (CS02) — every `hu` value tracing to a DOC/06 `OWNER_VALIDATED`/`VERIFIED`/`APPROXIMATE`-tagged row or an "Allowed" wording example; no `GATED`/`DO_NOT_PUBLISH` item (ERP vendor names, exact ERP-replacement count, customer identity, an unbroken-exact-decade claim, Tardify lineage) appears anywhere in either file — confirmed by grepping the built `dist/` output for the four ERP vendor names and the CS02 screenshot's apparent customer/personal names, zero matches.

**Art direction**: three concepts explored at `src/pages/art-direction/016-case-study-concepts.astro` using CS01's real content and both of its real screenshots — "Evidence Dossier" (dense, plated/panelled exhibits), "Operational Narrative" (plain editorial, no metadata at all), "System Record" (numbered ledger rows, thin-border-only screenshot frames). **Concept C — System Record — selected**; A rejected as too close to a produced spec-sheet/tech-showcase (conflicts with DOC/06's own "do not turn either story into a tech-stack showcase" rule), B rejected for losing the sitewide evidence-record register entirely (reads as generic editorial, under-differentiated from a stock case-study template). See `07-DESIGN-SYSTEM.md`'s "Case-study art direction (Task 016)" for the full rationale. The winning grammar was promoted to `foundation.css` (`.case-*` classes) and used identically by both production pages — only section content differs between them.

**Canonical routes implemented**: `/munkaink/uzemi-rendszer/` (CS01) and `/munkaink/erp-integracio/` (CS02), confirming DOC/03's "Case-study canonical route architecture" recommendation. Two dedicated static components (`CaseStudy01Page.astro`/`CaseStudy02Page.astro`), not a shared dynamic `[slug].astro` template — per this task's own instruction and because the two cases' section sets genuinely differ (CS01 omits "integrations"/"business result" as too thin; CS02 gives them real weight). Cross-links wired both directions per DOC/03: each canonical page links to its supporting `/egyedi-fejlesztes/...` direction and back to `/munkaink/`; `/munkaink/`'s and the homepage's own case-evidence items and `/egyedi-fejlesztes/`'s direction-evidence items now link directly to the canonical pages (previously plain text, or pointing only at the hub) — `content.config.ts` gained an optional `href` field on each of those three content shapes to carry this without breaking the case where a future case has no detail page yet.

**Screenshots processed through Astro's image pipeline** (`astro:assets`/`<Image>`), the site's first real usage of it (confirmed via the production build: 4 source PNGs → 12 responsive WebP variants at 480/800/1200px, e.g. the largest CS01 screenshot compressed from 219kB to a 37–88kB WebP range per width). No fake device mockups, no modernized/re-skinned legacy UI — plain thin-border frames only, per DOC/06's "Visual language" rule.

**Accessibility/responsive verification**: both pages checked via Playwright at 375/414/834/1280/1440px — single `<h1>`, no skipped heading levels, every screenshot has real (non-empty) `alt` text describing the visible UI function (never a business-outcome claim, matching DOC/06's "Alt-text direction"), a semantic `<nav aria-label="Breadcrumb">`, no horizontal overflow, zero console/page errors at any width.

**SEO**: conservative per DOC/10's own Task 015 planning note — no invented `CaseStudy` schema type; a `BreadcrumbList` JSON-LD block per page (`Munkáink → [case title]`) is the only structured data added, and it carries no customer-identity or ERP-vendor data. No `Organization`/`Person` entity data added, consistent with those facts remaining gated sitewide.

**Full validation performed**: `npm run check` (0 errors), `npm run build` (37 pages, succeeded), `dist/` inspected then deleted per this project's standing cleanup convention, a visual-regression pass across all six pre-existing pages (home, `/munkaink/`, `/egyedi-fejlesztes/`, `/rolunk/`, `/kapcsolat/`, `/tardify/`) confirmed zero console errors and no unintended layout change to any of the four existing brand-face components.

**Still open / deferred, not blocking**: exact system launch years, precise employee/user counts, customer name/logo permission, and every other item still unchecked in the "Case Study 01"/"Case Study 02" gate lists above remain exactly as gated as before — this task published only what those lists already mark resolved.

## Task 017 — pre-launch readiness audit, gate compliance

Full site-wide launch-readiness audit and matrix now live at `14-LAUNCH-READINESS.md` — that file is the authoritative home for the matrix, the production launch checklist, and the owner-input list; this section only records how the audit intersects this file's own content gates.

**No content gate was resolved by inventing a fact.** Every fix this task implemented was mechanical (a dead-link redirect, a CSS overflow fix, a default share-image built from already-approved copy, a `robots.txt`, a skip link) — none required or used any of the still-open Organization/Case-Study/Contact/SEO facts tracked above.

**One gate reclassified as launch-blocking**: "Privacy/legal page requirements" under "Organization" (see above) — previously an undifferentiated open item, now flagged as the audit's one genuine `Bucket A` finding pending owner/legal input, since the contact form collects real personal data with zero data-controller identification anywhere on the site. See `14-LAUNCH-READINESS.md` "Bucket A1" for the full, explicitly-not-legal-advice framing.

**One stale gate corrected**: "Final ARTIT accent direction" under "Brand / people" had never been marked resolved despite being documented as decided in `12-ASSET-STRATEGY.md` since Task 004A/004B — checked off above with a cross-reference, not a new decision.

**Everything else in this file is unchanged and remains exactly as gated as before this task** — the audit's own "likely non-blockers" instruction (customer identities/logos, testimonials, exact metrics, EN, Tardify lineage) matches what this file already tracks; none of it was treated as launch-blocking.

## Task 018 — English production locale, gate compliance

**The blanket EN content/route gate is resolved** — see "English translation" above for the detail; `/en/*` now exists as 8 real, indexable production routes (home, custom development, work hub, both case studies, Tardify, about, contact), matching every real HU production page one-to-one. Full route map, terminology decisions, and architecture notes are in `09-TECHNICAL-ARCHITECTURE.md`'s Task 018 section and `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`'s bilingual route map.

**Owner-supplied legal/company facts recorded, not published** — see "Organization" above for the full list (legal name, address, email, tax/registration numbers, hosting-provider details, and the confirmed `artit.hu` domain). Per this task's own explicit instruction (§2), none of these facts were used to implement a privacy notice, footer, or imprint — that remains Task 019's job. The domain fact specifically was *not* wired into `astro.config.mjs`'s `site` value either, for the same reason ("final host wiring" reserved for Task 019) — but every canonical/hreflang/OG code path this task built resolves through that one config point already, so setting it later needs no further code change (see `09-TECHNICAL-ARCHITECTURE.md`).

**Evidence parity maintained on both case studies** — every EN sentence in `src/content/case-studies/*.md` was checked against the same DOC/06 evidence matrix the Hungarian was built from; no claim was strengthened, no qualification dropped, no date/count changed, no GATED/DO_NOT_PUBLISH fact (ERP vendor names, exact ERP-replacement count, an unbroken-exact-decade claim, Tardify lineage) crossed into the English. Verified by grep against the built EN output, not assumed from the source alone.

**No content gate was resolved by inventing a fact.** The English adaptation work is translation/copywriting against already-approved Hungarian meaning, not new claims — the same discipline every previous content task in this file applied.

## Task 019 — final pre-launch implementation, gate compliance

Full findings live at `14-LAUNCH-READINESS.md`'s Task 019 update; this section records how the implementation intersects this file's own gates.

**Privacy/legal identification gap (Task 017's Bucket A1) — resolved.** `/adatkezeles/` and `/en/privacy/` publish the owner-supplied company/hosting facts factually, plus a description of the real data flow (contact form → Formspree → ARTIT) verified against the actual implementation, not assumed. See "Organization" and "Contact" above for exactly what's published where, and the `LEGAL REVIEW RECOMMENDED` note on the retention/legal-basis wording.

**Production domain wired.** `astro.config.mjs`'s `site: 'https://artit.hu'` — every previously-relative canonical/hreflang/OG/JSON-LD URL sitewide is now absolute, verified in the production build (not assumed from the config change alone).

**Post-deployment correction**: after going live on the FORPSI host, `artit.hu` was found to redirect to `www.artit.hu` — the actual canonical host. `site` was corrected to `https://www.artit.hu` (and `public/robots.txt`'s hardcoded `Sitemap:` line updated to match, since that file isn't generated from `site`); every absolute URL described above re-verified against a fresh production build to confirm `www.artit.hu` throughout, zero `artit.hu`-only (non-www) URLs remaining anywhere in the output. The same pass also fixed a second, unrelated gap the English homepage still had: `SystemMap`'s legend ("PRIMER ÚTVONAL"/"SZEKUNDER ÚTVONAL"/"KIVÉTEL / ALTERNATÍV") and the Problem section's "JEL / 0X" signal-index label were hardcoded Hungarian literals never localized when `/en/` shipped (Task 018) — both now resolve per-locale ("PRIMARY PATH"/"SECONDARY PATH"/"EXCEPTION / ALTERNATIVE", "SIGNAL / 0X"), verified not to affect the Hungarian rendering (unchanged) or overflow at 320px.

**Sitemap and favicon resolved** — see "SEO" above and `12-ASSET-STRATEGY.md`'s Task 019 favicon note.

**A new, real bug found and fixed during this task's own QA, unrelated to any specific §-numbered scope item**: two plain `<h2>` headings on the new privacy page (`Tárhelyszolgáltatás`, `Kapcsolatfelvételi űrlap`) overflowed at 320px — long unbreakable Hungarian compound words at the fluid `h2` clamp's size, the same failure class as Task 017's `/rolunk/` fix but sitting latent in the *plain sitewide* `h1`/`h2`/`h3` rules themselves rather than a custom class. Fixed with a sitewide `overflow-wrap: break-word` on all three heading levels — verified as a true no-op everywhere else via a 108-check sweep before/after (0 issues both times except this one, now fixed) and a direct screenshot comparison against `/rolunk/`'s own locked Hero. See `11-ACCESSIBILITY-AND-PERFORMANCE.md`'s Task 019 entry.

**No content gate was resolved by inventing a fact** — every new fact published (company identity, hosting identity, domain) was owner-supplied in Task 019 §3, not derived or guessed.

**Still open, intentionally**: public telephone, organization logo, social profile URLs, Search Console — all Bucket C/post-launch, none blocking.

## Task 008 — visual lock reconciliation

The homepage visual design was formally locked in Task 008 (see `07-DESIGN-SYSTEM.md` "Homepage Visual Lock"). This is a reconciliation, not a new audit: **there is no open homepage visual/design gap** in this file — every item above is a content/evidence gap (a fact, asset, permission or approval the business hasn't supplied yet), not a design decision left unresolved. The locked visual language already accommodates every gap below via omission-over-fabrication (Task 007's own rule, reused unchanged through 007C/007D/007D.1): the Work/Tardify/Longevity/Senior-Who sections' restrained, evidence-shaped treatments were specifically designed to read as intentional with the gated facts still missing, not as placeholders waiting for them. Supplying any of these facts later is a content update to `src/content/pages/home/content.yaml`, not a reason to reopen the visual lock or redesign the section that displays it.
