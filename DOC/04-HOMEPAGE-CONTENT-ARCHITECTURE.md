# ARTIT.hu — Homepage Content Architecture

## Narrative

The homepage should follow:

> recognition → understanding → solution → evidence → trust → contact

## Implementation status (Task 007)

All nine sections are implemented in `src/pages/index.astro`. Sections 01–03 (Task 005A) are unchanged in copy; Section 01's Hero now also carries the production `SystemMap` component (see `07-DESIGN-SYSTEM.md` and `09-TECHNICAL-ARCHITECTURE.md`). Sections 04–09 are new in this task, each following the factual verification gate below.

Hero's "Proof direction" bullets remain **not** published — still gated `TO VERIFY` (see `13-CONTENT-GAPS-AND-VALIDATION.md`). Add them once the underlying facts are verified.

Section 03's "Key copy" (packaged-software/understand-the-business-first direction) is documented here only as message architecture, not exact Hungarian copy — the implemented working copy is faithful to it but is not a verbatim quote from this file. Section 03 also gained a small inline-SVG "decision fork" glyph (one input, two paths) per Task 007's "simple engineering decision diagram" requirement — deliberately not a second System Map; see `07-DESIGN-SYSTEM.md`'s construction-layer rule that the Hero carries the richest use of that grammar.

**Sections implemented with a factual gap** (per this document's own sections below and `13-CONTENT-GAPS-AND-VALIDATION.md` — omitted rather than fabricated, per Task 007 §28):

- **04 — Work**: shows the two documented working titles only (`Egy üzleti rendszer, amely együtt nőtt a vállalkozással.` / `A rendszer, amely több ERP-t is túlélt.`), styled as an editorial "CASE / 0X" pair, each linking to `/munkaink/` (the hub, not a specific case-study detail page — none exists yet). No screenshot, no year, no customer name, no outcome claim — none is publication-safe yet.
- **05 — Longevity**: publishes only the headline/principle (`A hosszú táv nálunk nem marketingígéret.` / `A technológia eszköz. A működő rendszer a cél.`), exactly as Task 007 §14 explicitly allows — no `20+ év` or `10+ év` figure, since those remain unverified.
- **06 — Tardify**: full approved copy published (it's positioning language, not a customer-specific claim); no product screenshot, since none exists in the repository yet (verified: `public/`, `src/assets/` both empty).
- **08 — Senior/Who**: full approved copy published; no name, role wording, biography or portrait — none is verified yet, and no stock-photo substitute was used (explicitly disallowed).

This is not new information — every one of these gaps was already tracked in `13-CONTENT-GAPS-AND-VALIDATION.md` before this task; implementation simply respected the existing gates rather than working around them.

## Content source (Task 007B)

The Hungarian copy recorded below is no longer hardcoded in `src/pages/index.astro`. It has been migrated verbatim into `src/content/pages/home/content.yaml`, a schema-validated Content Collection entry (`src/content.config.ts`), and is rendered through the shared `src/components/homepage/Homepage.astro` component. This document remains the source of truth for *what the approved copy says*; the YAML file is the structured, localization-ready, build-validated place that copy actually lives. The semantic section structure below (Hero/Problem/Decision/Work/Longevity/Tardify/Process/Senior-Who/Final CTA, and within Problem the six-signal collection, within Work the case records, within Process the ordered steps) is preserved 1:1 in the YAML shape — editing the Hungarian headline of any section is now a YAML edit, not an Astro-template edit.

**English**: no approved English translation of this copy exists anywhere in the repository. Every field is stored as `{ hu: "...", en?: "..." }`; `en` is present only for the small set of fields classified as safely structural (System Map technical vocabulary — see `09-TECHNICAL-ARCHITECTURE.md` "Localization" and `07-DESIGN-SYSTEM.md`'s System Map section). Every other field's `en` is absent — a tracked content gap (see `13-CONTENT-GAPS-AND-VALIDATION.md`), not an invented translation. No `/en/` homepage is published yet as a result.

## Communication-mode alignment (Task 007C)

The "Communication mode per section" table above records the *intended* mode; this records production's actual alignment after Task 007C's visual-language integration pass (see `07-DESIGN-SYSTEM.md` "Page-wide communication grammar" for the underlying principles, which this task implemented but did not change):

| Section | Alignment |
|---|---|
| Hero | aligned (unchanged — Task 007C/007D/007D.1 did not touch it) |
| Problem | aligned — indexed (`JEL/0X`) dense/open signal field, all six signals sharing one spine/node/index grammar at every breakpoint; the two desktop columns' spines are visually independent (Task 007D.1 removed a shared top connector — see note below) |
| Decision | aligned — the locked "tonal band" surface is applied; the small fork glyph Task 007 added is removed (Task 007D.1) — typography, the two solution directions and the tonal surface communicate the section on their own |
| Work | aligned — cases sit in the shared `.panel-technical` evidence plate with an accent `CASE/0X` index |
| Longevity | aligned — a small textless construction mark (`.longevity__mark`) supplies the "minimal technical residue" the section previously lacked |
| Tardify | aligned — a lighter top-rule + corner-mark "specified plate" treatment (Task 007D), keeping the Task 007C port-dot CTAs |
| Process | aligned — steps read as one connected route (kept as-is by Task 007D.1 — this is the one section where a real ordered progression justifies connector geometry); the fourth step's ("Továbbfejlesztjük") desktop line-wrap was fixed (Task 007D) via a measured column-gap reduction |
| Senior/Who | aligned (unchanged — DOC/07A classified it aligned, left untouched throughout Task 007C/007D/007D.1) |
| Final CTA | aligned (unchanged, same reason) |

No content changed in any of these passes — every field above still comes from `src/content/pages/home/content.yaml` (Task 007B); only `src/components/homepage/Homepage.astro`'s markup and `src/styles/foundation.css` changed.

**Task 007D — `JEL / 01–06` continuity**: the Problem section's dense/open split expresses *density*, not *membership*. All six signals belong to one diagnostic system and share the same spine/index/node device; only the tonal-wash background, padding and the open field's looser spacing distinguish dense from open.

**Task 007D.1 — connector/glyph removal**: Task 007D's own desktop fix over-corrected by physically joining the two Problem columns' spines with a shared top rule and junction dots, which read as a route branching into two paths rather than two groups sharing one grammar. Removed, with nothing replacing it — membership is now communicated purely through the repeated `JEL/0X`/spine/node vocabulary itself, no physical connection required. The Decision fork glyph (Task 007's own addition, never part of the approved exploration precedent) was removed for the same underlying reason: it implied a workflow fork this section doesn't have. Process's own connector is unaffected — it represents a real four-step progression, the case where connector geometry is actually justified. See `07-DESIGN-SYSTEM.md`'s "Diagnostic / Signal" and "Decision / Resolution" sections for the locked rules.

## Communication mode per section (Task 007A)

This document records section *content*; `07-DESIGN-SYSTEM.md` → "Page-wide communication grammar" records how each content type should visually communicate — the audit that added it found production `/` had drifted from the validated pattern in Problem's case, and had no validated pattern at all to drift from for Work/Longevity/Tardify/Process. Cross-referenced here, not duplicated:

| Section | Communication mode | Visual principle | Anti-pattern to avoid |
|---|---|---|---|
| Hero | transformation/system | richest System Map grammar | generic hero image/dashboard |
| Problem | diagnosis/signals | indexed signal field, dense/open split (locked by the exploration; not yet in production) | floating quotes with no structure |
| Decision | resolution/choice | calm after diagnosis; a branching glyph is optional, not required | turning it into a feature block |
| Work | evidence/record | indexed case reference, real evidence only | portfolio-tile proof |
| Longevity | structural confidence | sparse statement + technical residue | decorative dark banner |
| Tardify | owned proof | product/system evidence when an asset is approved | plain text aside |
| Process | progression | connected/indexed sequence, not disconnected steps | four generic SaaS cards |
| Senior/Who | direct trust | quiet editorial | — |
| Final CTA | clarity/action | minimal, confident | — |

## 01 — Hero

Purpose:

Position ARTIT in 3–5 seconds.

Eyebrow:

> Amikor a kész szoftver már nem elég.

H1:

> A szoftver alkalmazkodjon a vállalkozásához. Ne fordítva.

Lead:

> Egyedi webes üzleti alkalmazásokat tervezünk és fejlesztünk olyan vállalkozásoknak, amelyek működése már túl speciális az Excelhez vagy egy kompromisszumos kész rendszerhez.

Primary CTA:

> Beszéljünk a projektről →

Secondary CTA:

> Munkáink megtekintése

Proof direction:

- 20+ év — longest-running client system
- 10+ év — continuous daily use
- Tardify — own business software

All longevity and continuous-use claims above: TO VERIFY before publication. See `13-CONTENT-GAPS-AND-VALIDATION.md`.

Visual:

Typography-first. No mandatory hero image.

## 02 — Problem recognition

Eyebrow:

> Ismerős helyzet?

Headline:

> A legtöbb egyedi rendszer nem azzal kezdődik, hogy „egyedi szoftvert szeretnénk”.

Use real problem statements:

- „Ezt Excelben vezetjük.”
- „Innen kézzel átmásoljuk oda.”
- „Erre van egy külön rendszerünk.”
- „Ezt csak egy ember tudja, hogyan működik.”
- „Megnéztünk több kész rendszert, de egyik sem kezeli jól a folyamatunkat.”
- „A rendszereink működnek, csak éppen nem kommunikálnak egymással.”

Closing thought:

> Ezek önmagukban még nem jelentik azt, hogy egyedi szoftverre van szükség. Azt viszont gyakran jelzik, hogy a vállalkozás működése és az azt támogató eszközök már nincsenek összhangban.

Link:

> Mikor érdemes egyedi fejlesztésben gondolkodni? →

Visual:

Editorial statements, not cards.

## 03 — Decision

Headline:

> Nem minden problémára kell egyedi szoftver.

Supporting:

> Amire viszont igen, arra pontosan illeszkedőt építünk.

Key copy:

If packaged software supports the business well, rebuilding it makes little sense.

First understand how the company works; then decide what software is needed.

Two paths:

### Egyedi üzleti alkalmazások

If the process is special.

### Rendszerintegráció és automatizáció

If the systems already exist but the connection is missing.

Visual:

Simple engineering decision diagram.

## 04 — Work

Eyebrow:

> Valódi rendszerek. Valódi működésben.

Headline:

> Olyan szoftvereket építünk, amelyek hosszú távon a vállalkozás működésének részévé válnak.

Featured Case 01:

> Egy üzleti rendszer, amely együtt nőtt a vállalkozással.

Featured Case 02:

> A rendszer, amely több ERP-t is túlélt.

Use real software screenshots as evidence.

Featured Case headlines are working titles; the underlying claims (ERP-survival, continuous co-growth with the business) remain TO VERIFY per `13-CONTENT-GAPS-AND-VALIDATION.md`.

## 05 — Longevity

Headline:

> A hosszú táv nálunk nem marketingígéret.

Key statement:

> A technológia eszköz. A működő rendszer a cél.

Visual:

Large data typography + engineering metadata.

Potential dark section.

All numbers and long-term-use claims must be verified. See `13-CONTENT-GAPS-AND-VALIDATION.md`.

## 06 — Tardify

Eyebrow:

> Saját termékünk

Headline:

> Nem csak ügyfeleinknek építünk szoftvert.

Key thought:

> Amit ügyfeleinknek hosszú távú fejleszthetőségről mondunk, azt a saját termékünknél magunkon is számon kérjük.

Visual:

Real Tardify product UI.

CTA:

- A Tardify története →
- Tardify.hu →

## 07 — Process

Eyebrow:

> Nem a technológiával kezdjük.

Headline:

> Először a működést értjük meg. A technológia utána jön.

Steps:

1. Megértjük
2. Megtervezzük
3. Megépítjük
4. Továbbfejlesztjük

Do not force this into four SaaS cards.

## 08 — Senior / Who

Eyebrow:

> Közvetlen együttműködés

Headline:

> A problémán tapasztalt fejlesztő dolgozik az első beszélgetéstől az éles rendszerig.

Visual:

Real human presence when asset is available.

CTA:

> Rólunk →

## 09 — Final CTA

Headline:

> Van egy folyamat, amit ideje lenne jobban megoldani?

Copy:

> Nem kell kész specifikációval érkeznie. Elég, ha elmondja, hogyan működik most, mi okozza a problémát, és mit szeretne jobban csinálni.

CTA:

> Beszéljünk róla →
