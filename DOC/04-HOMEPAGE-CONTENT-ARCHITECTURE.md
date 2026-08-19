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
