# ARTIT.hu — Launch Readiness

Authoritative home for the pre-launch audit (Task 017): the launch-gap matrix, the production launch checklist, and the owner-input list. Cross-references `DOC/13-CONTENT-GAPS-AND-VALIDATION.md` for content/evidence gates rather than duplicating them — this file is about *launch mechanics* (routes, indexing, links, forms, legal exposure, performance), `DOC/13` is about *what copy is safe to publish*.

**Update (Task 018)**: the "Owner input required" table below has moved — the legal company name/address/email and the production domain (`artit.hu`) were supplied by the owner in Task 018 and are now recorded in `13-CONTENT-GAPS-AND-VALIDATION.md`'s "Organization" section. Per Task 018's own explicit scope guard, none of these facts were used to implement a privacy notice, footer, or the `astro.config.mjs` `site` value — **Bucket A1 below is still open**, now blocked only on *implementing* the privacy notice (the facts it needs already exist) rather than on obtaining them. Task 018 also added a second production surface this file's counts predate: 8 English routes under `/en/*`, fully covered by Task 018's own bilingual QA sweep (see `11-ACCESSIBILITY-AND-PERFORMANCE.md`'s Task 018 entry) — the launch-gap matrix below still describes the HU-only site as it stood at the end of Task 017; nothing in it was invalidated by adding EN, but it was not re-run against the doubled route count either. The rest of this file remains Task 017's own unedited record.

## Final readiness state (Task 017)

> **`LAUNCH BLOCKED`**

One genuine blocker remains, and it needs owner input, not more implementation from this task: the site collects personal data (name, email, message) through a public contact form with **zero data-controller identification anywhere on the site** — no privacy notice of ARTIT's own, no company/imprint details, nothing beyond a link to Formspree's own third-party policy. This is very likely a real compliance gap for an EU-facing business site (see "Bucket A" below for the precise, non-legal-advice framing) and it cannot be resolved by this task without inventing legal/company facts, which is explicitly prohibited. Once the owner supplies the required facts, closing this gap is a small, well-scoped follow-up (a short privacy-notice paragraph + minimal footer/imprint block) — see "Recommended next sequence."

Every other launch-blocking issue this audit found (two sitewide dead-link clusters, one mobile-overflow bug, a missing default share image, a missing `robots.txt`, a missing skip link) was fixed in this same task — see "Small fixes implemented" below. With the legal item resolved, this site would be `READY TO DEPLOY` — Bucket B is short and mostly already closed.

## Repository baseline (Task 017)

- Branch: `zillu_dev`. HEAD at task start: `c983a51` ("013A — Contact Form / Conversation Workspace Visual Pass"). All Task 014–017 work remains uncommitted (per this engagement's standing rule: never commit/push without explicit instruction).
- `npm run check`: 0 errors, 0 warnings, 2 pre-existing hints (both harmless — see `DOC/09` if detail is ever needed), unchanged before/after this task's fixes.
- `npm run build`: 37 pages, succeeds, unchanged count before/after this task's fixes (fixes were content/CSS/config, not new/removed routes).
- `git status` at task start: 12 modified `DOC/*` files, 12 modified `src/*` files, 1 deletion (`_dev-fixture.md`), several untracked new files/directories — all Task 014–016 work, already reviewed and reported in this engagement's prior turns.

## Public route / indexability inventory

9 production routes (all HU, all indexable, none carry `noindex`):

| Route | Purpose | Canonical | Sitemap | Nav |
|---|---|---|---|---|
| `/` | Homepage | not emitted (`site` unset) | not yet built | primary logo/home |
| `/egyedi-fejlesztes/` | Custom-dev pillar page | " | " | primary link |
| `/munkaink/` | Evidence hub | " | " | primary link |
| `/munkaink/uzemi-rendszer/` | Case Study 01 | " | " | via `/munkaink/` + homepage + nav anchor |
| `/munkaink/erp-integracio/` | Case Study 02 | " | " | via `/munkaink/` + homepage + nav anchor |
| `/tardify/` | Own-product page | " | " | primary link |
| `/rolunk/` | About/trust page | " | " | primary link |
| `/kapcsolat/` | Contact page | " | " | primary link + header CTA |
| `/404` | Error page | n/a (`noindex`) | excluded | reachable only via broken link |

28 internal-only routes under `/art-direction/*` and `/design-foundation` — all individually `noindex`, all now additionally disallowed in `robots.txt` (Task 017). Not linked from navigation or any production page. Left built (not removed) per this engagement's established convention of keeping the exploration record — see `DOC/07-DESIGN-SYSTEM.md`'s "Exploration log."

No `/en/` routes exist. No accidental fixtures found beyond the intentional art-direction/design-foundation set.

## Bucket A — launch blockers

**A1 — Legal/privacy identification gap (OPEN, owner input required).** The `/kapcsolat/` form collects name, email, and free-text message and POSTs it to a third-party processor (Formspree). The only privacy-relevant disclosure anywhere on the site is one sentence linking to Formspree's own privacy policy (`src/content/pages/kapcsolat/content.yaml`'s `contact.privacyNote`) — there is no ARTIT-authored privacy notice, no stated legal/company name, no address, no data-controller identification, and no footer of any kind carrying such information. This task cannot resolve it: `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`'s "Organization" section already lists legal company name, address, and public email as unresolved, and this task's own instructions explicitly prohibit inventing legal/company facts. **This is not legal advice** — only a functional/compliance-shaped observation: a business collecting personal data from EU visitors through a public form, with no stated controller identity anywhere on the site, is a common real launch blocker for exactly this kind of business, and the owner (or their counsel) should make the actual call. See "Owner input required" and "Recommended next sequence" below for the precise, small scope of what closing this actually takes.

**A2 — Sitewide dead links (RESOLVED this task).** Six separate content locations — the primary nav dropdown (every page, desktop and mobile), the homepage's own Decision-section fork, `/egyedi-fejlesztes/`'s own directions section, `/munkaink/`'s case list, and both case pages' `directionLink` — linked to `/egyedi-fejlesztes/uzleti-alkalmazasok/` and `/egyedi-fejlesztes/rendszerintegracio/`, neither of which was ever built (confirmed 404 in the production build). This was reachable from the site's own primary navigation on literally every page. Fixed by pointing every reference at a real destination: the two now-anchored sections on `/egyedi-fejlesztes/` itself (`id="custom-applications"`/`id="systems-integration"`, added to `CustomDevelopmentPage.astro`) for five of the six locations, and `/munkaink/` for `/egyedi-fejlesztes/`'s own (previously self-referencing) direction links. Verified: zero remaining references to either dead path anywhere in `src/`; the fixed nav-dropdown link was clicked end-to-end via Playwright and correctly lands on the anchor.

**A3 — `/rolunk/` Hero horizontal overflow at 320px (RESOLVED this task).** A 15px horizontal-scroll bug on the approved Hero, present only at the 320px breakpoint (375px/390px/414px and the 900px+ two-column layout all measured clean — this is why Task 012A's own verification, done at 390px, missed it). Root cause: the Hero heading's two clauses are CSS Grid items; grid items default to `min-width: auto`, so the widest unbreakable Hungarian compound word in each clause refused to shrink below its intrinsic width and blew out of the `1fr` track. Fixed with `min-width: 0` + `overflow-wrap: break-word` + `hyphens: auto`, scoped to a `max-width: 374px` media query specifically so the already-approved 375px+ and 900px+ states are pixel-identical to before (verified via screenshot comparison — a sitewide, unscoped version of the same fix was tried first and rejected because it visibly re-hyphenated the locked desktop Hero at 1440px, which this task's own baseline explicitly protects).

## Bucket B — should fix before launch

Resolved this task:

- **B1 — No default Open Graph / share image anywhere** (`ogImage` prop existed in `BaseLayout.astro` but no page ever passed it). Fixed: a single restrained default card (`public/og-default.png`, 1200×630) generated from already-approved content only — the "ARTIT" wordmark styled identically to the header logo, and the homepage's own already-published SEO tagline ("Egyedi üzleti szoftverfejlesztés senior tapasztalattal.") — wired as `BaseLayout`'s default `ogImage`, resolved to an absolute URL the same way `canonicalURL` already is, plus `twitter:card=summary_large_image` so it actually renders large on X. See `DOC/12-ASSET-STRATEGY.md` for the generation method.
- **B2 — No `robots.txt`** (`public/` didn't exist at all). Added: disallows `/art-direction/` and `/design-foundation/` as a second, independent layer on top of their existing per-page `noindex` meta tags. No `Sitemap:` line yet — see B4.
- **B3 — No skip link anywhere on the site.** Added to `SiteHeader.astro` (rendered first on every page), targeting a new `id="main-content" tabindex="-1"` on every page's `<main>` — verified via keyboard: first Tab focuses the skip link, activating it moves both scroll and DOM focus to `#main-content`.
- **B5 — Stale `README.md`** (still said "Homepage sections, navigation and footer are not implemented yet," true only through Task 004B, false since Task 007). Rewritten to reflect the current 9-route production state and to point at this file.

Open, genuinely small, not yet done (this task's own scope explicitly excludes "major new pages"/"assumed legal copy" but these are neither):

- **B4 — No sitemap, no production domain.** `astro.config.mjs`'s `site` is intentionally unset (the canonical ARTIT.hu domain isn't confirmed — see `DOC/13` "Organization"). This blocks: real absolute `<link rel="canonical">` (currently emitted nowhere on the site — confirmed sitewide, not new to this task), absolute `og:url`/`og:image` (the new default card currently resolves to a relative `/og-default.png`, which most real crawlers accept but the spec technically wants absolute), and a sitemap (`@astrojs/sitemap` requires `site` to generate absolute `<loc>` entries, and isn't installed yet — confirmed via `package.json`). Once the domain is confirmed: set `site` in `astro.config.mjs`, `npm install @astrojs/sitemap`, add it to `integrations`, add a `Sitemap:` line to `robots.txt`. All three are mechanical once the one fact exists.
- **B6 — Case-study `BreadcrumbList` JSON-LD uses relative URLs** (`"item": "/munkaink/"` instead of an absolute URL) — valid JSON, matches visible content, but not spec-pure. Same root cause as B4; auto-resolves once `site` is set and the JSON-LD construction is updated to use `canonicalURL`'s own resolution pattern (one-line change per case page).
- **B7 — No favicon or site icon of any kind** (confirmed: zero `.ico`/favicon/logo asset anywhere in the repository — `DOC/12-ASSET-STRATEGY.md` already lists this as TBD). Deliberately **not** created by this task: unlike the OG image (which reuses the already-approved wordmark/tagline verbatim), a favicon needs a genuinely new icon-scale mark, and inventing one would cross this task's own "no new brand identity" boundary. Needs either an owner-supplied mark or an explicit go-ahead for a minimal text-based placeholder in a follow-up task.
- **B8 — No current-page navigation indication** (carried forward from Task 014's own Bucket B finding — `SiteHeader.astro`'s nav links never mark the active route). Cosmetic, not fixed here; still valid.
- **B9 — Tardify's duplicated Final CTA** (also carried forward from Task 014 — `/tardify/`'s Final CTA reads slightly redundant against its own body copy). Cosmetic, not fixed here; still valid.

## Bucket C — post-launch improvements

English translation and `/en/` (explicitly not a HU launch blocker per this task's own framing); more case studies; Tardify's own approved product screenshot; Search Console setup; a stronger spam-protection mechanism than the honeypot if it ever proves insufficient in practice; hreflang once EN ships; `/rolunk/`'s named-person/portrait E-E-A-T improvement once real identity information is approved; ~480KB of orphaned full-resolution source screenshots present in the build output at `dist/_astro/*.png` (Astro's content-collection image pipeline copies the original alongside the resized WebP variants; confirmed zero HTML references them — unlinked, unindexed, not a privacy issue since the same already-approved content is already published in resized form, just a minor build-hygiene item); Organization structured data (name/address/phone) once those facts exist.

## Bucket D — intentional / protected decisions

Confirmed still respected, none touched this task: anonymous case studies (no customer names/logos anywhere — reconfirmed by grep against the full build output); no unsupported metrics or fabricated testimonials; gated `/en/`; CS01 vs. CS02's genuinely different evidence density (not equalized); real, un-modernized legacy-UI screenshots (no fake device mockups, no restyling); the near-zero client-JS budget (1 script on `/`, 1 on `/kapcsolat/`, 1 JSON-LD block each on the two case pages, 0 everywhere else — unchanged by this task); all four page-specific brand-face components (`SystemMap`, `OperatingFitField`, `LivingSystemField`, `TardifySpecimen`) — visually regression-tested via full-page screenshot at 1280px, byte-identical in behavior; no analytics/tracking of any kind (confirmed by source grep, intentionally absent, not treated as a blocker per this task's own instruction).

## Search/SEO readiness

Canonical: not emitted anywhere (sitewide, pre-existing, tied to B4 above — not "wrong," simply absent; most crawlers infer self-canonical from a page with no tag). Sitemap: none yet (B4). `robots.txt`: added this task (B2). Metadata: every production page has a unique `<title>`/meta description sourced from its own content collection entry (spot-checked all 9). OG: title/description present everywhere (pre-existing); image now present everywhere (B1, this task). Structured data: `BreadcrumbList` on both case pages only, valid JSON, matches visible breadcrumb text, no gated data (re-verified by grepping the built output for the CS02 evidence's gated ERP-vendor/customer-name-shaped strings — zero matches), relative `item` URLs (B6). Internal-only routes: individually `noindex` (confirmed on all 28) and now `robots.txt`-disallowed (B2).

## Contact journey

Walked homepage → primary CTA → `/kapcsolat/`, and confirmed CTAs from `/egyedi-fejlesztes/`, `/munkaink/`, both case pages, `/tardify/`, and `/rolunk/` all converge on `/kapcsolat/` correctly (7 independent CTA locations, all verified via grep against every content YAML/Markdown source). Form: name/email/message, all `required`, email field uses `type="email"`, honeypot (`_gotcha`, `aria-hidden` + `tabindex="-1"` + `autocomplete="off"`) present. Verified via Playwright with mocked responses (no real traffic): success state hides the form, shows and focuses the status message (`aria-live="polite"`, screen-reader announced); error state keeps the form visible for retry, re-enables the submit button, restores its label; keyboard Tab order flows message field → submit button correctly. **One real, controlled live submission was also sent** (with the owner's explicit go-ahead) directly to the production Formspree endpoint from an actual browser session — real HTTP 200, `{"ok":true}`, correct success UI end-to-end. The message is clearly labeled as an automated Task 017 audit test in Hungarian, states it needs no reply, and should appear in the owner's Formspree-connected inbox.

## Legal/privacy status

See Bucket A1 above — this is the one substantive open item. Everything else in `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`'s "Contact"/"Organization"/"SEO" sections that touches legal facts (company name, address, tax number, public email/phone) remains exactly as gated as before; this task did not resolve, invent, or guess any of them.

## Security/privacy audit

No `.env`/secret files exist or are committed (confirmed via `find` + `.gitignore` inspection — `.env*` already ignored). No API keys, credentials, connection strings, or debug output found in source (targeted grep, zero real matches — one false-positive hit on the English word "clarity" inside a code comment). Formspree's form-id (`xppabkzq`) is not a secret — it's a public POST target by design, the same way every Formspree integration works. **CS02's internal ERP/config evidence confirmed not leaked**: grepped the full production build output for all four recalled system names (Oracle/Tandofer/Apollo/EcoLine) and the CS02 screenshot's apparent customer/personal-name-shaped text (a company name, a full name) — zero matches anywhere, including inside the JSON-LD blocks.

## Accessibility/responsive/runtime QA

Full sweep at 320/375/414/768/1280/1440px across all 9 production routes (54 combinations): single `<h1>` everywhere, zero horizontal overflow after the A3 fix, zero broken images, zero console/page errors, zero failed requests. Skip link (B3) verified keyboard-functional end-to-end. Heading order re-confirmed clean on both case pages (from Task 016, unchanged). `lang="hu"` present on every page (confirmed programmatically, no page ever renders with a missing/wrong `lang`).

## Performance/dependencies

Client JS: 1 script on `/` (SystemMap, ~810 bytes), 1 on `/kapcsolat/` (form handler), 1 non-executing JSON-LD `<script type="application/ld+json">` on each case page, 0 everywhere else — unchanged by this task, budget protected. Images: largest responsive screenshot variant is 92KB (WebP); total `dist/` is 1.9MB including all 28 internal-only exploration routes. Fonts: 124KB total (2 families, self-hosted, `font-display: swap`). External dependencies: Formspree (core to the contact form's function; failure mode is a shown error state with retry, not a broken page; no secret exposure — see above), self-hosted fonts (no Google Fonts CDN request at runtime, confirmed by source grep), `schema.org` (JSON-LD `@context` string only, not a live request), `tardify.hu` (external product link, `rel="noopener"` applied, no `target="_blank"` surprise). No analytics, no tag managers, no CDNs, no third-party embeds.

## Small fixes implemented (this task)

| File(s) | Fix |
|---|---|
| `src/styles/foundation.css` | `/rolunk/` 320px overflow fix (A3) |
| `src/styles/global.css` | `.skip-link` styles |
| `src/components/navigation/SiteHeader.astro` | Added the skip link |
| `src/components/case-studies/CaseStudy01Page.astro`, `CaseStudy02Page.astro`, `src/components/custom-development/CustomDevelopmentPage.astro`, `src/components/homepage/Homepage.astro`, `src/components/kapcsolat/KapcsolatPage.astro`, `src/components/munkaink/MunkainkPage.astro`, `src/components/rolunk/RolunkPage.astro`, `src/components/tardify/TardifyPage.astro`, `src/pages/404.astro` | `id="main-content" tabindex="-1"` added to each page's `<main>` (skip-link target) |
| `src/components/custom-development/CustomDevelopmentPage.astro` | Added `id="custom-applications"`/`id="systems-integration"` anchors (A2) |
| `src/content/nav/content.yaml`, `src/content/pages/home/content.yaml`, `src/content/pages/egyedi-fejlesztes/content.yaml`, `src/content/pages/munkaink/content.yaml`, `src/content/case-studies/uzemi-rendszer.md`, `src/content/case-studies/erp-integracio.md` | Six dead-link fixes (A2) |
| `src/components/homepage/Homepage.astro` | Updated a now-inaccurate comment about the Work section's case links |
| `src/layouts/BaseLayout.astro` | Default `og:image` + `twitter:card` (B1) |
| `public/og-default.png` (new) | Default share image (B1) |
| `public/robots.txt` (new) | Internal-route disallow rules (B2) |
| `README.md` | Corrected stale project-status section, added a Deployment section (B5) |

## Owner input required

| Item | Why needed | Launch-blocking? | Where used |
|---|---|---|---|
| Legal company name, address, and a real privacy-notice basis (or explicit confirmation none is needed) | A1 — the contact form collects personal data with no stated data-controller | **Likely, pending owner/legal confirmation** | A future footer/imprint block + `contact.privacyNote` |
| Canonical ARTIT.hu production domain | Enables `site` in `astro.config.mjs`, unlocking real canonical URLs, absolute OG/Twitter images, and the sitemap (B4) | No (site functions without it) | `astro.config.mjs` |
| Hosting platform decision | No platform-specific config exists yet (no `netlify.toml`/`vercel.json`/etc.) — the build is a plain static `dist/` and works on any static host, so this is a choice, not a blocker | No | Deployment |
| A favicon/icon mark, or explicit approval for a minimal placeholder | B7 — no icon asset exists anywhere in the repository | No | `<link rel="icon">` (not yet added) |
| Search Console verification/setup process | Bucket C | No | Post-launch |
| Analytics decision (or explicit confirmation none is wanted) | Currently, and intentionally, absent | No | Post-launch |

## Launch-gap matrix

| ID | Area | Finding | Bucket | Evidence | Required action | Owner input needed | Suggested task |
|---|---|---|---|---|---|---|---|
| A1 | Legal | No data-controller identification anywhere on a form collecting personal data | A | Full-repo grep + content read | Owner-supplied facts, then a small privacy-notice/footer implementation | **Yes** | Follow-up task once facts supplied |
| A2 | Navigation | Six locations linked to two never-built `/egyedi-fejlesztes/` child routes (404) | A | `find dist`, sitewide href extraction, live click test | **Fixed this task** | No | — |
| A3 | Responsive | `/rolunk/` Hero overflows 15px at 320px (CSS Grid `min-width:auto` blowout) | A | Playwright sweep + DOM measurement | **Fixed this task** | No | — |
| B1 | SEO/sharing | No default `og:image` anywhere | B | Source grep, meta-tag inspection | **Fixed this task** | No | — |
| B2 | SEO | No `robots.txt` | B | `find public/` | **Fixed this task** | No | — |
| B3 | Accessibility | No skip link | B | Source grep, keyboard test | **Fixed this task** | No | — |
| B4 | SEO | No production domain → no canonical/absolute OG/sitemap | B | `astro.config.mjs`, `package.json` | Set `site`, install `@astrojs/sitemap` | **Yes** (domain) | Follow-up task, small |
| B5 | Docs | `README.md` status section stale since Task 004B | B | Direct read | **Fixed this task** | No | — |
| B6 | SEO | BreadcrumbList JSON-LD uses relative URLs | B | JSON-LD extraction | One-line fix once `site` is set | No (blocked on B4) | Bundle with B4 |
| B7 | Brand | No favicon/icon asset anywhere | B | `find` for `.ico`/favicon/logo | Owner-supplied mark, or approval for a placeholder | **Yes** | Follow-up task, small |
| B8 | Navigation | No current-page nav indication | B | Carried from Task 014 | Small CSS/markup addition | No | Follow-up task, small |
| B9 | Content | Tardify Final CTA reads redundant | B | Carried from Task 014 | Copy tweak | No | Follow-up task, small |
| C1–C7 | Various | EN, more cases, product screenshot, Search Console, stronger spam protection, orphaned build PNGs, Organization schema | C | See "Bucket C" above | None required for launch | Varies | Backlog |

## Prioritized path to launch

1. **Genuine blocker (A1)**: owner supplies real company/legal facts (or confirms a lawyer has already cleared launching without a formal notice); implement a short privacy-notice paragraph and a minimal footer/imprint block referencing only supplied facts. This is the only step that cannot proceed without the owner.
2. **Coherent pre-launch quality pass (B4/B6/B7/B8/B9)**: once a production domain is chosen, set `site`, add the sitemap integration, fix the two relative JSON-LD URLs, resolve the favicon (owner asset or approved placeholder), and pick up the two small carried-forward Task 014 items (current-page nav indication, Tardify CTA wording) — all small, all independent of A1, can proceed in parallel with step 1.
3. **Deploy/smoke test**: build, deploy to the chosen host, re-run this file's "Production launch checklist" against the live URL.
4. **Post-launch backlog**: Bucket C, in whatever order the owner prioritizes.

## Production launch checklist

Run this against the live production URL once deployed — not against localhost:

- [ ] `npm run build` succeeds with 0 errors
- [ ] Production domain resolves over HTTPS
- [ ] `site` in `astro.config.mjs` matches the real deployed domain
- [ ] Every one of the 9 production routes returns a real 200 (not a host-level fallback page)
- [ ] `/404` renders correctly for a genuinely unmatched path and itself returns a 404 status (not 200)
- [ ] `/robots.txt` is reachable and its rules match what's deployed
- [ ] Sitemap (once implemented) is reachable and referenced from `robots.txt`
- [ ] All 28 internal-only `/art-direction/*`/`/design-foundation` routes are unlinked from any production page and individually `noindex` (spot-check a few post-deploy)
- [ ] Contact form: submit one real message on the live domain (not just localhost) and confirm it arrives
- [ ] Share a production URL in Slack/Discord/a link-preview debugger and confirm the OG image/title/description render
- [ ] Open browser DevTools console on each of the 9 production routes — zero errors
- [ ] Quick mobile smoke test (a real phone or device emulation) on `/`, `/kapcsolat/`, one case page
- [ ] Confirm no secrets, `.env` files, or debug output shipped in the deployed `dist/`
- [ ] Analytics: only if and once intentionally configured — otherwise confirm it's still intentionally absent

## Documentation updated (Task 017)

This file (new). `DOC/13-CONTENT-GAPS-AND-VALIDATION.md` (new Task 017 section; two stale checklist items corrected). `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md` (new Task 017 entry: skip link, the `/rolunk/` overflow fix, the widened sweep). `DOC/12-ASSET-STRATEGY.md` (default OG image generation method documented). `README.md` (status/deployment). No changes were needed to `DOC/03`, `DOC/09`, or `DOC/10` — none of this task's findings changed an architectural or SEO-strategy decision those files record; the JSON-LD/canonical-URL findings are launch-mechanics detail already fully covered above (Bucket B4/B6) and in `DOC/12`'s cross-reference.
