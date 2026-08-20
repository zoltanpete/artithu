# ARTIT.hu — Design System Direction

## Internal concept

> Software built to last.

Not necessarily a public tagline.

## Approved direction (Task 004A / 004B)

The direction below is no longer only a proposal — it is approved and implemented in `src/styles/tokens.css`, `src/styles/fonts.css`, `src/styles/foundation.css`:

> Work Sans (primary sans) + Space Mono (restrained metadata mono) + Restrained Industrial Neutral palette.

See "Typography", "Monospace metadata" and "Color" below for the specific implemented values, and `DOC/09-TECHNICAL-ARCHITECTURE.md` for font delivery/provenance. **The operating accent recorded in "Color" below is superseded by the Task 005D lock — see "Art Direction Lock" immediately below for the current value.**

## Art Direction Lock (Task 005D) — APPROVED

> **A4.3.3 is APPROVED as the ARTIT Art Direction Lock.**

This closes the exploration phase begun in Task 005C. `/art-direction/a4-3-3` remains available as the visual reference implementation of the approved direction, but it is **not automatically production code**: it has not been refactored into shared components, and production `/` is unchanged by this decision. That migration is separate future work.

This section is the canonical, current-state answer to "what is the ARTIT visual direction, and what part of it is actually locked." The chronological exploration log below (A → A2 → A3 → accent variants → A4 → A4.1 → A4.2 → A4.3 → A4.3.1 → A4.3.2 → A4.3.3) is preserved as a historical record of how the decision was reached — see "Exploration history — decision summary" at the end of that log for the explicit status of each entry. It is not itself a set of independent approvals.

### Conceptual foundation

The approved direction must communicate, through its visual system rather than as displayed text:

> „Értjük a komplexitást, átlátjuk a káoszt, és letisztult struktúrává formáljuk.”

Summarized as a design language:

> **Swiss / Scandinavian restraint × digital systems engineering × editorial typography × structured data visualization.**

This is deliberately more specific than "minimalist," "SaaS," "clean tech," "dashboard UI," or "corporate website" — those labels are true of the surface but don't explain why ARTIT looks the way it does. The direction exists to make a credibility argument: a company that can look at operational chaos, understand it, and turn it into a precise, connected, understandable system should *look* like it does that, not merely claim it in copy.

### 1. Composition

- strong editorial hierarchy — large typography carries real weight in the composition, not just the diagram;
- generous negative space; density is earned locally, not spread evenly;
- asymmetric compositions rather than generic centred SaaS layouts;
- controlled density localized around meaningful information (e.g. the System Map), not decorative busyness;
- deliberate tension between large typography and technical/system visuals in the same frame;
- sections may vary compositionally rather than repeating one container + heading + grid rhythm;
- visual complexity should resolve into clarity — the composition should *demonstrate* the "chaos → structure" claim, not just state it.

The approved Hero demonstrates this as **message / proposition → system transformation → structured outcome**, but this exact Hero layout is not mandatory for every future page — see "What is NOT locked" below.

### 2. Typography

Locked role/hierarchy:

- large, assertive editorial sans-serif display typography;
- smaller, highly controlled body copy — legibility over display presence;
- monospace used selectively for technical/system metadata (labels, coordinates, path legends) — never for navigation or normal prose;
- dramatic scale contrast between display and body is welcome, reinforcing an "editorial confidence" character;
- typography should feel engineered and editorial, not decorative.

Current implementation (already locked separately, at foundation level, by Task 004A/004B — not re-derived or re-decided by this task): **Work Sans** (primary sans) + **Space Mono** (restrained metadata mono), with the fluid type scale and weight hierarchy documented under "Typography" / "Monospace metadata" below. A4.3.3 reuses these unchanged and introduces no font choice of its own beyond one scoped local H1 size override — a composition decision, not a new font-role decision.

### 3. Colour language

**This task locks an update to the operating accent.** Task 004A/004B originally locked a green (`#2b5d4b` / `#1a3c30`) as `--color-accent` / `--color-accent-strong`. The entire A4–A4.3.3 exploration (Task 005C and its refinement sequence) treated an **Ink / Deep Blue-Violet** accent as its explicit, repeatedly-stated "current working direction, not yet locked" — and A4.3.3's approval now locks it:

```text
Operating accent (locked by this task)
--color-accent (proposed)          #37325C
--color-accent-strong (proposed)   #282442
--ad-tint (proposed)               #E7E5E7   (8% mix of accent into bg, same derivation as every prior tint)
```

These are **existing, already-documented values** carried forward from the exploration (first derived and contrast-verified in the Task 005C accent-color exploration, reused unchanged through every subsequent iteration) — nothing here is newly derived.

The rest of the neutral palette locked by Task 004A/004B is unchanged and still governs: warm/light-neutral canvas (`--color-bg #f6f5f3`, `--color-surface #eceae6`), near-black primary typography (`--color-text #1a1a1a`), restrained neutral borders/secondary structure (`--color-text-muted #656260`, `--color-border #d9d6d1`).

The original green (`#2b5d4b`) is **retired as the brand/operating accent** and is not currently in production use for any role. A brighter green (`#22c55e`), introduced during the A4.3.x refinement specifically for output status dots, is the semantic-status colour demonstrated by the locked reference — narrow role (resolved/healthy output indicators only), never the brand accent, never implying live/fabricated telemetry.

Four colour roles:

| Role | Value | Usage |
|---|---|---|
| Brand / operating accent | `#37325C` (`#282442` strong) | CTA, links, active state, primary diagram paths, transformation-field tint |
| Tonal accent | `#E7E5E7` (8% mix of accent into bg) | subtle technical surfaces/washes — a resolution-feeling section background, an evidence-panel fill; never text |
| Neutral structural colour | bg/surface/text/text-muted/border (Task 004A/004B values, unchanged) | canvas, body copy, secondary structure |
| Semantic status colour | `#15803D` (production value — see note below) | resolved/healthy output indicators only — never the brand accent, never a live-status claim |

**Implemented in production (Task 006).** `src/styles/tokens.css` now defines `--color-accent: #37325C`, `--color-accent-strong: #282442`, `--color-accent-tint: #E7E5E7`, `--color-accent-on-dark: #AFADBE`, and `--color-status-success: #15803D`. Every existing production usage of `--color-accent`/`--color-accent-strong` (CTA background, link color, `.eyebrow`, hover/active states, focus outline, nav-dropdown active state) was individually audited before the migration and confirmed to be a brand/interaction/focus role — none was a disguised status usage — so the migration is a token-*value* swap with zero consuming-CSS changes, not a blind hex find/replace. See "Colour-token migration and contrast verification (Task 006)" below for the full audit, the two accessibility bugs the migration surfaced, and why the production semantic-status value differs from the exploration's demo hex.

Colour continues to gain power through scarcity — the system should remain predominantly neutral, with the accent appearing only where it earns attention.

#### Colour-token migration and contrast verification (Task 006)

**Audit of every existing production `--color-accent`/`--color-accent-strong` usage**, classified before remapping (per this task's explicit "audit every old accent usage, do not blind-replace" requirement):

| Usage | File | Role |
|---|---|---|
| `a { color }` | `global.css` | Brand / link |
| `:focus-visible { outline }` | `global.css` | Focus indicator |
| `.eyebrow { color }` | `foundation.css` | Brand emphasis |
| `.link-standalone:hover { border-color }` | `foundation.css` | Interaction/hover |
| `.btn-primary { background }` / `:hover` | `foundation.css` | Brand / CTA |
| `.btn-secondary:hover { border-color, color }` | `foundation.css` | Interaction/hover |
| `.section--dark a { color }` | `foundation.css` | Brand / link (dark context — found broken, see below) |
| `.section--dark .link-standalone:hover { border-color }` | `foundation.css` | Interaction/hover (dark context — found broken, see below) |
| `.site-nav__list > li > a:hover { color }` | `foundation.css` | Interaction/hover |
| `.nav-dropdown[open] summary { color }` / `:hover` | `foundation.css` | Active/interaction state |

Every usage is brand, interaction, or focus — none needed to become the new semantic-status token instead. No production status usage of green (dot, badge, label) exists yet.

**Contrast, recalculated (WCAG relative-luminance formula), not reused from Task 004** — verified both by manual computation and by re-reading the actual computed styles in a real rendered browser (Playwright/Chromium), which matched the manual figures:

| Pair | Ratio | Grade |
|---|---|---|
| Body text on bg | 15.97:1 | AAA (unchanged) |
| Muted text on bg | 5.56:1 | AA (unchanged) |
| Accent-as-link-text on bg | 10.86:1 | AAA |
| White on accent CTA | 11.83:1 | AAA |
| Focus outline (accent) vs. bg / vs. surface | 10.86:1 / 9.85:1 | AAA / AAA |
| Body text on tonal-accent surface | 13.88:1 | AAA |
| Muted text on tonal-accent surface | 4.83:1 | AA |
| Accent-as-text on tonal-accent surface | 9.44:1 | AAA |
| Dark-section text on dark bg | 15.42:1 | AAA (unchanged) |
| Dark-section muted text on dark bg | 7.10:1 | AAA (unchanged) |
| `--color-status-success` on bg | 4.60:1 | AA (passes as text or as a non-text indicator) |

**Two real accessibility bugs found by this recalculation, both fixed:**

1. **Accent text/borders/focus outlines were near-invisible on dark sections.** `--color-accent` measures only **~1.47:1** against `--color-dark-bg` — nowhere near the WCAG 2.2 SC 1.4.11 non-text 3:1 minimum, let alone 4.5:1 for text. (The *original* green scored little better — ~2.30:1 — so this was a pre-existing, never-caught defect, not something the migration introduced.) It affected `.section--dark a`, `.section--dark .link-standalone:hover`'s border, and — because `:focus-visible` is a single global rule — any keyboard focus ring landing inside a dark section. Fixed by introducing `--color-accent-on-dark: #AFADBE` (the same accent hue, 60% mixed toward white — not a new hue) and scoping `.section--dark a`, `.section--dark .link-standalone:hover`, and a new `.section--dark :focus-visible` override to it. Re-verified in a real browser: `7.91:1` against `--color-dark-bg`, and the two rules' higher selector specificity (`.section--dark :focus-visible` vs. the global `:focus-visible`) confirmed to win regardless of source order.
2. **The exploration's demo status-green (`#22c55e`) fails non-text contrast on the locked canvas.** Measured at only **~2.09:1** against `--color-bg` and **~1.90:1** against `--color-surface` — both fail SC 1.4.11's 3:1 minimum for a small non-text indicator (e.g. a status dot), regardless of the dot's size (the WCAG large-text size exemption applies to text, not non-text UI components). This was never caught during the exploration because no formal contrast check was run against a bare dot on the canvas — owner review was judging colour *vibrancy* inside a diagram, not running contrast math. Rather than carry forward a value that fails on first production use, `--color-status-success` was set to a deeper, still-clearly-"success"-green (`#15803D`) that clears 4.5:1 (safe for both text and non-text use). `#22c55e` remains documented above as the historical exploration/demo value, not the production one.

**Constraint for Task 007+**: any future non-text status indicator (dot, badge) using `--color-status-success` is safe directly on `--color-bg`/`--color-surface` at the verified 4.60:1. If a *brighter*, more "energetic" green is ever wanted to match the exploration's original visual intent, it must be paired with a sufficiently contrasting outline/stroke or used at a scale/context where the surrounding fill (not the bare canvas) provides the needed contrast — verify before shipping, don't assume.

### 4. Geometry and surface language

- predominantly sharp/precise geometry;
- small-radius technical containers are allowed where they improve legibility (the System Map's node containers, ports, and the `FOLYAMAT` module) — a **local grammar decision for diagram/system objects**, not permission to round the entire site;
- avoid generic large-radius SaaS cards;
- no decorative shadows as a default visual device;
- borders, alignment, spacing and tonal fields create structure — depth comes from layering (shell/core, concentric rings), not shadow;
- containers should feel like deliberately specified system objects, not floating cards.

The design should not become dogmatically 90-degree-only where a subtle radius genuinely improves the system-map language — but that allowance is scoped to diagram/system components, per the exploration's own repeated "local grammar decision, not permission to round the entire website" framing.

### 5. Construction / blueprint layer

A4.3.3 established a secondary engineering layer: faint coordinate lines, crosshairs, registration/construction marks, tiny coordinate labels, measured alignment cues, technical mono annotations.

Purpose: communicate **engineering precision and designed structure** — not decoration, not fake application telemetry.

Rules:

- subordinate to actual content, always;
- normally low contrast — noticed on a considered look, not competing with primary content (A4.3.3's specific opacity values are implementation detail, not the locked rule — the rule is "background layer, not primary content");
- must not create interpretive noise — no numbers or marks a visitor has to decode to understand the page;
- must never imply fabricated live data (this is why the exploration deliberately did **not** reproduce a generated reference's "RENDSZER / AKTÍV" status badge in A4.3 — see that entry's "Deviation from the brief" note below);
- may disappear or simplify substantially on small screens;
- fewer, meaningful marks — never a decorative grid covering the page. The exploration tried and rejected a more prominent version of this device (the `SEC / 01` / `01────02` ruler used in A4 and A4.1) after it read as content the visitor had to interpret rather than atmosphere; it must not return.

**Implemented (Task 006)**: `.technical-label` (mono, low-opacity background-layer text) and `.panel-technical` (bordered specification-plate surface) in `foundation.css` — the only two devices from this layer with a genuine content-agnostic production use today. See "Production architecture decision (Task 006)" under "System Map — ARTIT brand asset" below for why the diagram-specific devices (guidelines, crosshairs, registration marks) were deliberately not productionized yet.

---

## System Map — ARTIT brand asset

The most important outcome of this exploration. This is not "the Hero illustration" — it is a **reusable ARTIT visual grammar**, approved as a candidate brand asset, intended to extend later to integrations, workflows, process explanations, case studies, service narratives, product architecture, and other before/after operational-structure stories.

### Semantic grammar

Core narrative: **heterogeneous inputs → transformation/process → structured outputs.**

Inputs may represent fragmented operational sources — spreadsheets, email, isolated systems, manual data, APIs, other/generic sources. The transformation node represents ARTIT's ability to understand and structure the process. Outputs represent coherent, resolved operational outcomes.

**The current labels (`EXCEL`, `E-MAIL`, `KÜLÖN RENDSZER`, `KÉZI ADAT`, `API`, `…ÉS MINDEN MÁS FORRÁS`, `FOLYAMAT`, `JÓVÁHAGYÁS`, `SZÁMLÁZÁS`) are not mandatory vocabulary for every future System Map** — they are this Hero's specific instance of the grammar, chosen because they echo the Problem section's own approved quotes.

### Visual grammar

- icon-bearing input nodes — small, coherent, custom inline-SVG pictograms; no icon library, no third-party brand logos, no emoji-like treatment;
- explicit connection ports — a small outlined circle exactly at the coordinate where a path begins or ends;
- curved (not rigid/orthogonal-connector) paths between nodes;
- small, precise directional arrowheads;
- primary / secondary / exception path hierarchy (see below);
- one dominant transformation core, visually the strongest object in the composition;
- a blue-violet transformation field — concentric tonal rings around the core, representing depth/convergence, never a glow or neon halo;
- structured, containerized output nodes belonging to the same container family as the inputs;
- restrained semantic status markers on outputs only, narrow role, never implying live telemetry;
- engineering/construction residue in the background (see "Construction / blueprint layer" above);
- an optional legend/specification plate where the path grammar needs explanation (see below).

**The exact number and position of nodes are not locked.** The grammar is locked; the current diagram is one instance of it.

### Path hierarchy

Three tiers, and the distinction must **never rely on colour alone** — stroke weight/style, opacity, and/or interaction state must reinforce it:

1. **Primary route** — strongest visual emphasis; the path currently being explained or highlighted.
2. **Secondary route** — visible but quieter; supporting system relationships. (A4.3.3's own review found this tier had drifted to reading as "disabled" rather than "deliberately quiet" — the locked principle is that secondary must stay clearly *present*, just subordinate; A4.3.3's specific contrast values are the current best-known implementation of that principle, not the principle itself.)
3. **Exception / alternative route** — dashed treatment; non-standard, alternate, or exceptional flow.

### Transformation core

The transformation core (`FOLYAMAT` in the current instance) must:

- be the visual centre of gravity;
- feel structurally stronger than surrounding nodes;
- use the primary blue-violet operating accent;
- be supported by a subtle violet transformation field (the concentric rings);
- read as the point where complexity becomes structure.

The concentric rings are **not glow decoration** — they represent a transformation/focus field, and must stay restrained enough to preserve the Swiss/editorial character (no SVG blur filter; layered flat-opacity fills and thin strokes only, per every iteration of this exploration). Exact current dimensions, ring count, and opacity values are implementation detail, not immutable brand rules.

### Interaction principles

The System Map may be interactive; this is a demonstrated capability, not a mandate that every instance must be:

- the static composition must work first — interaction adds understanding, it does not rescue an unclear diagram (every iteration of this exploration was required to pass a "static-first" review before interaction was ever assessed);
- relevant nodes may be focusable/selectable;
- hover/focus may preview a relationship;
- click/keyboard activation may persist a selected path (commit/switch/deselect);
- selection may subtly recompose or emphasize the system — small translation toward the core, path strengthening, opacity recession of unrelated elements, restrained core/ring response;
- motion stays restrained and functional — no spring/bounce, no large re-layout, no continuous/ambient motion;
- interaction must remain fully keyboard accessible (real `<button>` overlays, visible `:focus-visible`, correct `aria-pressed`, Enter activation);
- `prefers-reduced-motion` must be respected meaningfully, not just present in a media query (every iteration verified transitions actually collapse, not merely that the rule exists);
- state meaning must never depend on colour alone.

**A4.3.3's specific page-scoped JS implementation (a deterministic `data-focus` CSS-attribute state machine) is not prescribed as the future production interaction architecture.** It demonstrates the interaction *language* works; a production implementation is free to build it differently (e.g. as a shared component) as long as it honours the same principles.

### Legend / specification plate

Where a System Map's path grammar needs explaining, the decoding device should read as a small **engineering specification plate** — real miniature stroke swatches, restrained mono type, low visual weight relative to the graph itself — not as ordinary explanatory body copy, and not as a prominent standalone panel competing with the diagram.

It is optional. Do not require a legend beside every System Map. On small screens it may be simplified or omitted if the diagram remains understandable without it.

### Responsive philosophy

> Complex editorial/system visuals should be **recomposed**, not merely scaled down.

Desktop compositions may contain richer node counts, construction marks, a legend, a larger transformation field, and more whitespace-driven asymmetry. Mobile may deliberately use fewer nodes, simplified annotations, reduced construction detail, and a separately composed diagram (its own coordinate system, not the desktop SVG shrunk). The semantic story — heterogeneous inputs resolving into structure — must survive even when visual complexity is reduced.

### Production architecture decision (Task 006) — Option A

Task 006 deliberately chose **Option A**: productionize only the lower-level, content-agnostic primitives now; **defer the `SystemMap` component itself** until Task 007 supplies real homepage content and geometry. No `SystemMap` component, no graph library, no D3/canvas/visualization dependency was added.

**Rationale**: every locked System Map principle above is explicit that node count, exact coordinates, exact labels, ring count/radius, and the current page-scoped JS are *not* locked — only the grammar is. Building a component now would have to choose between two bad options: hardcode A4.3.3's exact nine-node instance (freezing incidental prototype geometry into architecture, exactly what this task's brief warns against), or generalize prematurely into a schema meant to model any future diagram (a generic graph engine, explicitly forbidden). Neither serves Task 007, which is the task actually positioned to know the real content.

**Productionized now** (see `foundation.css`): `.technical-label` (background-layer mono annotation text) and `.panel-technical` (the bordered "specification plate" surface the exploration's legend treatment converged on across A4.3.1–A4.3.3) — both genuinely content-agnostic, proven stable across three consecutive iterations, and usable today with zero diagram present, e.g. for a future `EngineeringMeta`-style component. `--color-accent-tint` / `.surface--tonal` (the Decision-section tonal wash, reused unchanged across nine iterations) and `--color-status-success` / `.status-dot` also promoted, for the same reason.

**Deliberately deferred**: guideline/crosshair/registration-mark primitives. These are inherently SVG-diagram content — a guideline with nothing to guide is decoration, which this document's own construction-layer rule above forbids ("must not create interpretive noise... fewer, meaningful marks"). They will be designed once Task 007's real diagram exists to attach them to, not speculatively now. Also deferred: any node/port/path/arrowhead CSS or component — these only make sense bound to real SVG diagram markup, which doesn't exist in production yet.

**Built (Task 007)**: `src/components/system-map/SystemMap.astro` now exists — the deferral above ended once real homepage content/geometry existed. Its geometry, port/arrow/ring math and interaction model are re-derived from A4.3.3, not copied wholesale, and parameterized by a narrow prop API (sources, core label, exactly two outputs, mobile source selection) rather than a generic diagram schema — see `08-COMPONENT-LIBRARY.md` for the full API and `09-TECHNICAL-ARCHITECTURE.md` for the implementation/JS-footprint record. Two known, documented limitations rather than speculative generalization: exactly two outputs is assumed (a third would need new layout math, not a config option), and the desktop row-pitch math generalizes to any source count but is only visually/numerically verified for the six-source homepage instance. Still no D3/canvas/graph-library dependency.

---

### What is NOT locked

A4.3.3's approval does **not** automatically lock:

- exact Hero pixel dimensions;
- exact graph coordinates;
- exact node count;
- current SVG geometry;
- current page-scoped JS implementation;
- exact legend width;
- every individual spacing value;
- the exact number/radius of concentric rings;
- the exact labels used in the demonstration;
- A4.3.3 as a shared-component architecture;
- identical System Maps on every page;
- every experimental detail from the earlier A/A2/A3/A4 iterations along the way.

These remain implementation/reference details unless separately promoted into production tokens or components by a future task.

### Anti-patterns — System Map specific

In addition to the site-wide anti-pattern list under "Anti-patterns" further below (which still fully applies), the System Map grammar specifically must avoid drifting toward:

- generic SaaS card grids;
- dashboard cosplay / fabricated telemetry — no invented "live" status, no fake metrics (this is why the exploration deliberately declined to reproduce a "RENDSZER / AKTÍV" badge from a generated reference);
- neon/cyberpunk aesthetics for the transformation field — rings are a tonal field, not a glow;
- gratuitous motion or force-directed/physics re-layout;
- arbitrary node graphs that don't encode a real story;
- dense technical metadata everywhere — the construction layer stays a background residue, not content;
- colour used everywhere rather than strategically; the accent earns its presence through scarcity.

---

## Page-wide communication grammar (Task 007A)

Task 007's real homepage implementation exposed a gap. The Art Direction Lock and System Map sections above document the **brand visual grammar** — nodes, ports, curved paths, rings, construction guides, colour roles, typography, geometry — in real depth, because that is what the A4-series exploration actually iterated on: every prototype from A4 through A4.3.3 touched only the Hero, and the Problem/Decision sections beneath it, never the rest of the page. They do not equivalently document the **page communication grammar** — how content types other than the Hero's transformation story (diagnosis, decision, evidence, longevity, owned-product proof, progression) should express the same underlying language. Production `/` shows the result: the Hero carries A4.3.3 faithfully; sections after it fall back to competent-but-generic editorial layout, because nothing here told an implementer how to extend the language past the Hero.

This section distinguishes the two layers explicitly and records what's actually locked at the page level — separating (a) principles genuinely validated by the exploration, frozen since A4.1 and not carried into Task 007 production, from (b) principles newly formalized here because no exploration ever touched those sections. Neither is a licence to redesign production now — see "What remains unlocked" below, and Task 007C for the actual repair work.

### Brand visual grammar vs. page communication grammar

**Brand visual grammar** — the *vocabulary*: nodes, ports, curved paths, arrowheads, the transformation core, concentric tonal fields, mono technical annotation, construction residue. Documented above under "Art Direction Lock" and "System Map — ARTIT brand asset."

**Page communication grammar** — the *sentence structures* that vocabulary gets used in, per content type: how a diagnosis reads, how a decision resolves, how evidence gets presented, how longevity is stated, how owned-product proof is shown, how progression is sequenced. This is what was under-documented, and what this section now records.

The load-bearing distinction: a section does not need the `SystemMap` component, ports, or curved paths to speak ARTIT's visual language. It needs to follow its **communication mode**, using the shared accent, mono annotation, and restraint rules already locked, shaped for that mode.

### Diagnostic / Signal (Problem section)

**Genuinely validated by the exploration, then frozen and lost in production.** A4 introduced diagnostic-signal framing for the Problem section (`JEL / 0X` indexed observations, replacing A3's generic `TÜNET`/symptom framing) inside a dense tonal-wash field (4 items) against a quieter open field (2 items) — the asymmetric split A3 originated, now explicitly reframed as system diagnosis. A4.1 removed A4's bordered "DIAGNOSZTIKAI MEZŐ — AKTÍV" panel chrome (it read as fake application state) but *kept* the `JEL / 0X` indexing, the dense/open split, and a left-rule spine. Every iteration through A4.3.3 explicitly left this section "unchanged in structure" — never revisited, but never un-approved either.

**Task 007's production Problem section does not use this pattern.** It reuses the pre-exploration Task 005A `.problem-grid` — six floating quote statements in a plain two-column grid, no indexing, no tonal field, no spine. This happened because Task 007's own authority hierarchy correctly ranked `DOC/04` (content architecture) above the prototype log, and `DOC/04` documents the Problem section's *copy* but never absorbed the *visual* pattern the exploration validated — it only ever lived in this file's prose history. This is exactly the kind of gap this audit exists to close.

**Locked principle**: operational disorder should be presented as recognizable **signals/diagnostic evidence** — indexed (`JEL / 0X` or equivalent), with a clear dense/open density split — not as generic floating pain-point quotes or a symptom card grid. The exact split ratio, exact index label and exact tonal-wash mechanism are not locked.

**Clarification (Task 007D)**: `JEL / 01–06` is **one continuous diagnostic system**; the 4+2 split expresses **density**, not **membership**. Task 007C's first production implementation gave the spine/node device only to the dense field, which made the two open signals read as detached from the diagnostic system rather than merely quieter within it — a real gap between what this principle always meant and what got built, not a change to the principle itself. The spine/index/node device must visibly continue through all six signals; only the tonal-wash background, boxed/padded feel, and looser open-field spacing should carry the dense/open distinction.

**Correction (Task 007D.1)**: Task 007D's own desktop fix over-corrected. It gave each of the two desktop columns its own spine (right) but then also drew a shared horizontal rule physically connecting the two columns' spines, with a junction dot at each. Owner review found this read as **a route/network branching into two paths** — the exact workflow-fork semantics the 4+2 split does not have. This is now the locked distinction:

- **membership/shared grammar** (what `JEL / 01–06` needs) is communicated through *repeated* devices — the same `JEL / 0X` indexing, the same spine/node vocabulary, the same typography and surface logic in both groups. It does **not** require the two desktop groups to be physically joined by a line.
- **connector geometry** (an actual drawn line/route between elements) is reserved for content that represents a **real progression or flow** — see Process below. Drawing one where none exists implies a relationship the content doesn't have.

Desktop now keeps two independent vertical spines (no shared top rule, no junction dots); mobile keeps Task 007D's single continuous spine through all six signals unchanged, since mobile genuinely presents them as one reading sequence, not two groups needing to be told apart. See `04-HOMEPAGE-CONTENT-ARCHITECTURE.md` and `09-TECHNICAL-ARCHITECTURE.md` for the implementation.

### Decision / Resolution

**Also validated — but the principle is restraint, not decoration.** Every A4.x iteration deliberately kept the Decision section the quietest of the first three sections — "no diagram, on the reused tint band" (A4) — specifically to land the "complexity → structure → clarity" emotional arc: Hero dense/curious, Problem recognition/analytical, Decision relief/clarity. This was a *content* decision (fewer words, calmer typography, a tonal band), not a *visual-device* decision.

Task 007's Decision section added a small inline-SVG "decision fork" glyph (one input branching into two paths) — a reasonable, restrained idea consistent with the section's two-path structure, but it has no exploration precedent; no A4.x iteration ever added a Decision-section diagram, deliberately. It was Task 007's own addition, not a historical device — logged as such at the time (Task 007A), and **removed in Task 007D.1** after owner review found it created unintended semantics: it read as an actual process/workflow splitting into two paths, when this section presents conceptual alternatives ("not every problem needs custom software"), not a real branching flow. Nothing replaces it — the removal is the correction, not a placeholder for a future device.

**Locked principle (superseding the Task 007 glyph)**: Decision sections should communicate **resolved calm after diagnosis** — reduced visual density relative to the Hero and Problem section, a tonal-band or otherwise quieter surface treatment, and a structured (not competing) two-path choice, expressed through typography and content structure alone. **Decision intentionally carries no diagram/glyph.** Do not add one without a real relationship to encode — a branching visual device implies an actual process fork; conceptual alternatives don't need one to read clearly. If a future approved design finds a genuine, content-justified reason for a Decision-section visual, it would need fresh owner approval — this is not a standing invitation to reintroduce one.

### Evidence / Record (Work)

**No exploration precedent — newly formalized here.** No A4.x prototype ever built a Work/case-study section; the exploration stopped at Hero+Problem+Decision. `DOC/07`'s existing "Case study teaser" direction (further below) and `DOC/06`'s case-study architecture ("evidence, not portfolio decoration") are the closest existing guidance, applied to a homepage teaser context for the first time in Task 007.

**Principle, synthesized from the locked language's own general rules** (restraint, no card-ification, real evidence only): proof should read as **evidence / record / documented system history** — an indexed case reference (`CASE / 0X`, mirroring the Problem section's `JEL / 0X` so the two evidence-adjacent sections share a visual dialect), restrained mono metadata where verified facts exist, real screenshots where approved assets exist — never testimonial marketing framing, never generic portfolio cards, never a fabricated screenshot standing in for unapproved evidence. Task 007's implementation (two working titles as an indexed pair, no fabricated specifics, no placeholder screenshot) already follows the *content* half of this principle; the *visual density* — currently a plain, unindexed-feeling list — could more clearly borrow the Problem section's spine treatment once one exists there.

### Longevity / Structural confidence

**No exploration precedent for the visual device** — `DOC/04` only ever specified "Large data typography + engineering metadata. Potential dark section." No A4.x prototype built this section.

**Principle, synthesized from `DOC/04`'s own directional text plus the locked dark-section rule** ("use rarely... a deliberate rhythm change, not a repeated pattern"): Longevity should read as a **high-confidence structural statement** — sparse (a single strong statement, not a paragraph), supported by minimal technical residue (a `.technical-label`-style mark or similar restrained annotation) rather than large decorative numerals with no verified figure behind them, and justified as the site's *one* deliberate dark rhythm break, not decoration for its own sake. Task 007's implementation (dark section, two lines of typography, no numbers since none are verified) already matches the "sparse statement" half; it currently carries zero technical residue, which is what this principle adds for future refinement.

### Owned product / Proof (Tardify)

**No exploration precedent — newly formalized here**, from `DOC/04`'s "Real Tardify product UI" direction plus `DOC/12`'s asset-strategy rule distinguishing product screenshots (evidence) from System Map diagrams (structure explanation) — see that document's "System Maps vs. screenshot evidence" note.

**Principle**: Tardify should read as **owned proof of engineering philosophy** — real product evidence (screenshot) when an approved asset exists, structured/restrained framing (not a marketing aside, not a mirror of tardify.hu's own visual identity), and — until a screenshot is approved — a typography-forward treatment that still signals "this is a real, operating system we built," not merely a paragraph of text. Task 007's implementation is copy-only (no approved screenshot exists yet, correctly per the gate), which is the *right* content decision but leaves the section reading as a plain aside rather than "owned system evidence" — the gap here is asset availability, not something documentation alone can close.

### Process / Progression

**No exploration precedent — newly formalized here**, from `DOC/04`'s explicit "Do not force this into four SaaS cards" instruction, which implies (without specifying) that some *connective* structure was intended.

**Principle**: Process should read as **structured, connected progression** — a numbered/indexed sequence with some visual continuity between steps (a rule line, a spine, or comparable connective device), not four independent, self-contained cards. Task 007's implementation (a numbered list, border-top rule per step) satisfies "not cards" but doesn't yet express "connected" — a continuous rule or line running behind/through the sequence (not a new System Map) would close that gap without inventing a new device family.

**Implemented (Task 007C, refined 007D)**: a connected route (accent rule + node dots per step, continuous across the container at the 1100px 4-column breakpoint) — see `08-COMPONENT-LIBRARY.md`. This connector is deliberately kept, unlike the Problem section's desktop connector (removed, Task 007D.1) and the Decision fork (removed, Task 007D.1): Process's four steps are a real, verified ordered progression (understand → design → build → evolve), so drawn connector geometry has an actual relationship to represent. **Connector geometry belongs where content is genuinely a route or progression; it does not belong where content is merely a shared category (Problem's six signals) or a set of conceptual alternatives (Decision's two paths).**

### Quiet clarity / CTA (Senior/Who, Final CTA)

Not separately posed as an audit question by this task, but recorded for completeness: `DOC/04` specifies both as quiet, direct, typography-led ("Real human presence when asset is available" for Senior/Who; plain headline/copy/CTA for Final CTA). No exploration precedent exists or is needed — these were always meant to be the page's quietest moments, and Task 007's plain-typography implementation already matches that intent.

### Page rhythm

The A4 exploration's own stated goal — avoiding `container → heading → cards` repeated across every section — is implicit throughout the "Composition" principles above ("sections may vary compositionally... visual complexity should resolve into clarity") but was never mapped onto the actual nine-section homepage sequence. Recorded here:

| Section | Density | Surface | Communication mode |
|---|---|---|---|
| Hero | richest — full System Map grammar | light canvas | transformation/system |
| Problem | dense/open split (locked, not yet in production — see above) | tonal wash on the dense half only | diagnosis/signal |
| Decision | quietest of the first three (locked) | tonal band | resolution/choice |
| Work | moderate — indexed evidence | light canvas | evidence/record |
| Longevity | sparse, single statement | dark — the site's one deliberate dark break | structural confidence |
| Tardify | moderate — copy + (future) screenshot | light canvas | owned proof |
| Process | moderate — connected sequence | light canvas | progression |
| Senior/Who | quiet | light canvas | direct trust |
| Final CTA | quiet, confident close | tonal | clarity/action |

The dark Longevity section earns its rhythm break precisely because it's the *only* one — repeating the device (a second dark section) would flatten it back into decoration, per the "excessive dark/light alternation" anti-pattern below.

### Accent continuity beyond the Hero

The Colour language section above documents accent *roles* (CTA, link, focus, diagram) but doesn't state that those roles should keep recurring past the Hero — read literally, a page could satisfy every rule above while using violet only in the eyebrow and CTA button, which is what production `/` currently does. Recorded explicitly:

- reuse the accent through structural moments beyond CTA/eyebrow: section indices (`JEL / 01`, `CASE / 01`), rule lines, route/connection emphasis, technical labels, key numerals — anywhere the design already uses a small mark or line, that mark can carry the accent instead of a neutral tone;
- do not flood a section with violet — "colour gains power through scarcity" still governs; recurrence means a few deliberate moments per section, not a wash;
- do not add accent-coloured decoration with no structural role — an accent-coloured rule line separating indexed items has a role (continuity, indexing); an accent-coloured rule line with nothing to index does not.

### Communication grammar vs. component grammar

The System Map documentation above (and `DOC/08`/`DOC/09`'s `SystemMap` component records) risk implying — never stated outright, but never corrected either — that ARTIT's visual language *is* the System Map, and that a section without one defaults to plain typography. It doesn't. The communication primitives below are **semantic concepts, not code components** — apply them with ordinary HTML/CSS wherever the matching content type appears, with no dependency on `SystemMap.astro`:

| Primitive | Applies to | Already-locked building blocks |
|---|---|---|
| Diagnostic signal | Problem | `.meta` indexing (`JEL / 0X`), `.surface--tonal` |
| Decision fork | Decision | restraint (fewer words, calmer surface); a branching glyph is optional |
| Evidence record | Work, case studies | `.meta` indexing (`CASE / 0X`), `.panel-technical` |
| Progression path | Process | indexed sequence + a connective rule/spine |
| Technical annotation | anywhere quiet engineering texture is warranted | `.technical-label` |
| Transformation field | Hero (currently) | `SystemMap`'s concentric rings — the *field* concept, not the component, is what could extend elsewhere |
| Structured output | Work, Tardify | containerized, restrained presentation of a resolved fact |
| Construction residue | Hero (currently), sparingly elsewhere | guideline/tick/registration-mark devices — currently only implemented inside `SystemMap.astro`; the *concept* is reusable, the SVG markup is not yet extracted |

No new components are created by this task (explicitly out of scope) — this table exists so a future implementer reaches for the *right* primitive, component or otherwise, rather than defaulting to plain typography when `SystemMap` doesn't fit.

### Implementation status (Task 007C)

Production `/` now implements the principles above for every section except Hero (already aligned) and Senior/Who + Final CTA (already aligned, deliberately left untouched — their quietness *is* the point). Diagnostic/Signal, Evidence/Record, Longevity's technical residue, Owned product/Proof and Progression were all previously synthesized-but-unbuilt principles; they are now real markup/CSS in `src/components/homepage/Homepage.astro` + `src/styles/foundation.css`, reusing the already-locked building blocks table below exactly as predicted (`.panel-technical` for Work and Tardify, `.meta` indexing with the accent color for Problem/Work/Process, `.surface--tonal` for Decision). No new component was created; no SVG diagram was added beyond the pre-existing Decision fork and one new textless construction mark on Longevity. See `04-HOMEPAGE-CONTENT-ARCHITECTURE.md` "Communication-mode alignment (Task 007C)" for the section-by-section record and `08-COMPONENT-LIBRARY.md`/`09-TECHNICAL-ARCHITECTURE.md` for the implementation detail. This section's own principles are unchanged by Task 007C — it discovered no gap in what was locked, only a gap between what was locked and what was built.

### Implementation status (Task 007D)

A final polish pass, not a new principle. Three corrections: (1) the Diagnostic/Signal clarification above — `JEL / 01–06` now reads as one continuous system at every breakpoint, not two; (2) the Process section's fourth step now fits on one line at standard desktop widths (1150–1920px verified; only the narrow ~1100–1120px band still needs hyphenation, an accepted exception per the task's own brief) via a measured column-gap reduction, not a font-size change; (3) the Tardify plate moved from a full four-side `.panel-technical` box to a lighter, more specifically "specified plate" treatment — a single top rule plus one small accent registration-mark bracket, reusing SystemMap's corner-mark construction-residue vocabulary rather than a generic card border. This third point is a reusable principle worth recording: **a "partial, asymmetric edge treatment" (a rule and/or one or two corner marks, not an enclosing box on all four sides) reads as a deliberately specified technical plate; a full border on all sides reads as a generic UI card**, even when both use the same neutral border colour. Work's case-evidence plates deliberately still use the full `.panel-technical` box — the two sections aren't meant to look identical, only related (see "Technical grammar consistency... family resemblance, not repetition" below).

### Implementation status (Task 007D.1)

A surgical correction to Task 007D, not a new polish round. Owner review of Task 007D's output found two devices that had started implying semantics the content doesn't have. Both removed completely, nothing added in their place:

1. **Problem's desktop connector.** Task 007D correctly gave `JEL / 05–06` the same spine/node treatment as `01–04`, but its desktop implementation also added a shared horizontal rule physically joining the two columns' spines with junction dots — which read as a route/network branching into two paths. See the "Diagnostic / Signal" correction above for the locked distinction this produced: **membership is communicated through repeated grammar, not a physical connection.**
2. **Decision's fork glyph.** Never part of the approved A4 exploration precedent (Task 007's own addition, flagged as such since Task 007A); removed because it read as an actual process fork for a section that presents conceptual alternatives, not a workflow. See "Decision / Resolution" above — **Decision intentionally carries no diagram.**

Both removals are locked rules now, not just this task's preference — see the two sections above for the exact language. Process's own connected-progression device (line + node dots) is explicitly *not* affected — it stays, because Process represents a real four-step ordered progression, the one case in the current homepage where connector geometry is actually justified.

### Homepage Visual Lock (Task 008) — APPROVED

> **The production homepage, in the state Task 007D.1 left it, is the approved homepage visual baseline. The owner has visually reviewed and approved it. Do not treat the homepage as an open exploration surface.**

This closes the implementation arc that ran Task 007 → 007A → 007B → 007C → 007D → 007D.1. It locks **principles and communication grammar**, exactly as the sections above already state them — this entry does not introduce new rules, it declares the existing ones final and points at the current implementation as their reference.

**Overall art direction** (unchanged, restated for completeness): Swiss / Scandinavian restraint × digital systems engineering × editorial typography × structured data visualization — see "Art Direction Lock (Task 005D)" above.

**Locked page-wide rhythm** — the homepage demonstrates the intended density/communication-mode sequence (see "Page rhythm" above for the full table): Hero (richest) → Problem (diagnostic, dense→open) → Decision (quiet tonal resolution) → Work (evidence/record) → Longevity (sparse dark interruption) → Tardify (owned-proof/specification framing) → Process (connected progression) → Senior/Who (quiet editorial) → Final CTA (restrained close).

**Locked semantic visual rules** (the Task 007D.1 distinction, now permanent):

- **membership/shared grammar** does not require physical connection between elements — repeated indexing, spine/node vocabulary, typography and surface logic are sufficient (Problem's `JEL/01–06`, two independent desktop spines, no connector);
- **real progression/flow** may use connector geometry — Process's four steps are a genuine ordered sequence, so its line/node route is justified;
- **conceptual alternatives/decisions** must not automatically become branching diagrams — Decision communicates through typography, copy and tonal surface alone, with no diagram.

> **Do not draw a route unless there is a route to explain.**

**Accent usage**: Deep Blue-Violet remains structural and scarce — indexing, connection points, real routes, interaction/focus, selected technical residue, primary CTA roles. It must not become generic decoration or spread to every section uniformly.

**Surface hierarchy**: canvas / tonal field or band (Decision, Final CTA) / technical-specification plate (Work, Tardify) / one dark interruption (Longevity) — preserve this intentional variation. Do not let the page become a sequence of generic bordered cards (Tardify's Task 007D refinement exists specifically to avoid this).

**Construction/technical residue**: construction marks, nodes, rules, spines, coordinate/index labels and diagram language are semantic devices, not decoration — they appear only where they clarify membership, evidence, progression, system structure or technical framing (see "Construction / blueprint layer" above).

**Preserved Problem grammar**: desktop keeps `JEL/01–04` (vertical spine + nodes, dense tonal field) and `JEL/05–06` (vertical spine + nodes, quieter open field) as two independent columns with no horizontal connector and no branch semantics; mobile keeps one continuous vertical spine through all six signals, valid because mobile presents them as one reading sequence. `4+2` means density, not membership and not branching.

**Preserved Decision grammar**: no fork glyph or mini-diagram. Communication is carried by typography, supporting copy, the two conceptual directions, and the tonal surface. Do not reintroduce a branching device without a genuinely new, content-justified design decision and fresh owner approval.

**Preserved Process grammar**: the positive counterexample to Problem/Decision — steps are genuinely ordered, so the connected line/node route communicates real progression. Do not generalize this treatment to sections that aren't an actual sequence.

### Homepage as reference implementation, not template

The homepage is now the production reference for: technical labels/indexed metadata, diagnostic spine/node grammar, evidence-record framing, restrained specification-plate treatment, real-progression route grammar, tonal decision surface, dark-section interruption, the System Map richness ceiling, accent scarcity, and editorial whitespace/typography.

> **Reuse the grammar, not the homepage layout.**

Future pages should derive their own composition from their own content and page architecture — do not visually clone the homepage's section-by-section layout, and do not create a generic shared component merely because a pattern appeared once on the homepage (see "Componentization audit (Task 008)" in `08-COMPONENT-LIBRARY.md`).

**First reuse test (Task 009)**: `/egyedi-fejlesztes/` is the first page built after this lock, and confirms the grammar travels. It reuses the two-path editorial split (`.decision-paths`, now genuinely shared across two pages — see `09-TECHNICAL-ARCHITECTURE.md`) and the accent-indexed-item family (its own plain numbered signals, distinct from the homepage's `JEL/0X` spine/dot device, since the content isn't the same diagnostic shape) and the tonal-band quiet-resolution surface — but has no System Map, no dark section, no four-step Process, no construction-residue marks, and is six sections instead of nine. This is the intended outcome: same language, different composition, driven by a different page's actual content — not "homepage 2."

### Custom Development brand-face (Task 009A)

Owner review of the Task 009 result found it structurally sound but visually flat — "reuse the grammar, not the homepage layout" had been followed to the point of removing the *visual-modeling* dimension of the brand entirely, leaving only typography/whitespace/rules. The homepage's System Map doesn't just explain a transformation — it gives the page a recognizable ARTIT "brand face." Important pages losing that dimension entirely is a different failure mode than cloning the homepage, and this task corrects it.

**Principle (candidate, deliberately scoped)**:

> Important ARTIT pages may use one page-specific explanatory visual model as a brand-face asset. The model must arise from the page's actual content and express systems, operation, relationships, fit, evidence, or progression. Reuse the visual language, not the diagram. Not every page needs one — some pages are stronger without a visual model, and this is not a mandate to add one to every future page mechanically.

**`SystemMap` vs. new brand-face assets**: `SystemMap` is one expression of ARTIT's visual-modeling language — heterogeneous inputs resolving through one transformation core into structured outputs — not the brand asset every page must reuse or clone. A page-specific visual model may borrow the same *vocabulary* (nodes, ports, thin technical rules, accent-marked relationships, mono labels, restrained construction residue) while having a genuinely different *composition and semantic job*.

**Exploration and selection**: three materially different concepts were built as real, inspectable prototypes (`src/pages/art-direction/009a-concept-{a,b,c}-*.astro`, noindex, not linked — the same precedent the A/A2/A3/A4.x exploration used) rather than reasoned about abstractly:

- **Concept A — Operating Model / Solution Fit**, built deliberately *as* a compact input → fit-check → two-outcome flow with arrowheads, specifically to make its risk visible in a real rendering rather than argue it hypothetically. Confirmed on sight: it reads unmistakably as a shrunk System Map and, more importantly, as exactly the branching decision-tree pattern Task 007D.1 already locked against ("do not draw a route unless there is a route to explain" — this page's `01→justified / 02→not justified` structure is not a deterministic route). **Rejected.**
- **Concept C — System Boundary / Adaptation Model**, concentric rings (business process / existing systems) with a marked "where does adaptation happen" segment. Reads calmer than Concept A but scored weakest on two criteria: it doesn't reuse any of the vocabulary the page's own justification signals already use (Excel, manual data, separate system), so it doesn't create the semantic recurrence Task 009A asked for; and its ring/boundary framing risks implying real architectural specification ARTIT hasn't approved. **Rejected**, though the concentric-ring device itself isn't disqualified for a future page with a genuine boundary/layer story to tell.
- **Concept B — Fit / Friction Field, selected.** A static field, not a flow: one central "operation" reference point with four satellite nodes for typical current-state elements, connected by lines using the *already-locked* System Map route-hierarchy language (solid quiet = fits; dashed accent = friction) instead of a new device. No core "transformation," no directional resolution into an output, no arrowheads — genuinely uninterpretable as a flow or branch. Three of the four satellites (Excel, separate system, manual data) are exactly DOC/01's own three "typical statements"/problem-area categories; the fourth (packaged software, shown as a *fit*, not friction) directly reinforces this page's own "when it's not justified, keep it" argument — every label is traceable to already-approved content, nothing invented.

**Implemented**: `src/components/custom-development/OperatingFitField.astro`. Static SVG/CSS, no JS, no interaction — reviewed explicitly against the interaction-policy question and rejected: unlike `SystemMap`, where node focus reveals which specific relationship is under discussion, nothing here is hidden until interacted with, so hover/focus would add no information, only motion for its own sake. Desktop and mobile use separately composed geometry (not one scaled down) — mobile stacks the anchor above a 2×2 node grid with short stub connectors, matching the responsive philosophy `SystemMap` already established. Sits beside the H1 in a `3fr 2fr` grid at 900px+ (calmer ratio than the homepage Hero's `4fr 8fr` — the visual supports the argument here, it doesn't headline it), single column below that.

**Relationship to the `01–03` justification signals**: semantic recurrence only, not a physical connection — the Hero visual and the signals section are not linked by a line, shared ID, or scroll anchor. Three of the visual's four node labels are the same categories the signals section elaborates in prose immediately below; the connection is meant to be *felt* as continuation, not engineered as a diagram relationship.

**Rest-of-page changes**: none. Reviewed the full page again after integrating the Hero visual (per this task's own instruction) — the "When justified"/"When not justified"/"Two directions"/"Approach"/"Final CTA" sections needed no secondary refinement; the new Hero didn't expose an imbalance requiring one.

### Munkáink evidence grammar (Task 010)

`/munkaink/` is ARTIT's evidence hub. Its content is genuinely thin — DOC/06-CASE-STUDY-ARCHITECTURE.md approves exactly two case-study working titles; every surrounding fact (industry, size, duration, current usage status, outcome) is explicitly marked "internal working understanding, not confirmed publication-ready fact." The page had to establish a real ARTIT identity from that alone, without inventing anything to fill it out.

**Explicit brand-face decision: no page-specific Hero visual.** Task 009A's lesson is *important pages may have one*, not *every important page needs one*. Three concepts were built as real prototypes (`src/pages/art-direction/010-munkaink-evidence-concepts.astro`) and compared:

- **Concept A — Plain Dossier Index.** The two cases as accent-indexed evidence plates (`CASE / 0X`, reusing `.panel-technical`), each carrying its approved related-direction link. No connecting device, no Hero diagram.
- **Concept B — Continuity Thread.** Concept A plus a thin accent line/tick marks physically joining the two case entries, meant to symbolize "these systems continue operating." **Rejected**: the two cases are two *unrelated* customer systems: joining them visually with a shared connector risks implying a relationship *between* them that isn't real. Each case's own continuity is a property of that case alone, not a link between cases — exactly the kind of unjustified route Task 007D.1 already locked against, found here in a new spot rather than reasoned about abstractly.
- **Concept C — Evidence Criteria Model.** Concept A plus a small abstract Hero diagram ("real system / real operation / long-term continuity" as three linked circles) explaining what ARTIT considers evidence. **Rejected**: on inspection it restated what the section's own prose already said, without revealing anything a reader couldn't get from the text — the "does it earn its place" test `OperatingFitField` passed, this didn't. Decoration, not explanation.

**Selected: Concept A.** The evidence-record composition itself — restrained typography, accent-indexed plates, honest omission of anything ungated, generous whitespace instead of placeholder fields — *is* this page's ARTIT identity. It doesn't need a diagram to prove that; adding one here would have been decoration, which is exactly what Task 010's own brief warned against ("do not add visual noise merely to make `/munkaink/` look busier").

**Locked principle (superseded — see "Munkáink brand face (Task 010A)" below)**: an evidence hub does not require its own explanatory visual model merely because a sibling page has one. Prefer one strong semantic system — here, the evidence-record device itself — over adding a second decorative technical layer to compensate for thin content. If a future page's evidence *is* rich enough to need a connecting/relational device, evaluate it on that content's own merits, not as a default. **This "no Hero visual" conclusion was correct on its own terms but has since been revised** — owner review found the page correct but too visually muted; the Task 010A entry below records why the conclusion changed and what replaced it. The underlying reasoning technique (build real concepts, reject the ones that fail a real semantic test, don't decorate to compensate for thin content) is still exactly right and is what Task 010A itself used.

**Case-entry expansion path**: the current entries (working title + related-direction link, inside `.panel-technical`) are deliberately built to accept richer content later — a screenshot, a metric, a longevity figure, a customer name — as additional rows inside the same plate, without restructuring the section. See `09-TECHNICAL-ARCHITECTURE.md` for the schema shape this expansion would extend.

**Reused grammar**: `.work-teaser__list`/`__index`/`__title` (the homepage's own evidence-record device, now used on a second page — see "First reuse test" above for why this counts as genuine reuse, not speculative extraction), the tonal-band quiet-resolution surface (principle section, closing CTA), `.panel-technical`. **Not reused**: `SystemMap`, `OperatingFitField`, any spine/dot/connector device, any card grid — all still true after Task 010A's own addition, see below.

### Munkáink brand face (Task 010A)

Owner review reopened Task 010's "no Hero visual" decision: the page was structurally correct but visually too muted next to `/egyedi-fejlesztes/`, whose own Hero visual (`OperatingFitField`) gives it real page identity. Reopening was scoped narrowly to one question: **can one meaningful Hero visual express operational proof without inventing customer evidence?** — not a general license to add decoration.

**Two exploration rounds, five concepts total**, all built as real prototypes (`src/pages/art-direction/010a-munkaink-brand-face-concepts.astro`) and screenshotted, not reasoned about abstractly:

- **Round 1, Concept A — Operational Record Stack.** A vertical stack of ascending-length accent bars. **Rejected on sight**: ascending bars are an unmistakable chart convention — the composition read as an invented growth/metrics chart, exactly the "no invented quantitative evidence" constraint this task set for itself, even though no number was ever attached to it. The visual *form* made an implicit quantitative claim the content doesn't support.
- **Round 1, Concept B — Continuity Pulse.** A stylized heartbeat/EKG line labeled "AKTÍV." **Rejected**: this is functionally the same device as the "RENDSZER / AKTÍV" live-status badge the A4.3 exploration already built and explicitly declined to ship (see "Construction / blueprint layer" above — "must never imply fabricated live data"). A restyled pulse line with a status label is still a status badge.
- **Round 1, Concept C — System-in-Operation Boundary.** A core node inside concentric background rings. **Rejected**: too close to `OperatingFitField`'s own core-and-rings silhouette — it read as a smaller variant of an existing diagram rather than a distinct one, failing the "shares grammar without becoming variants of one diagram" test this task set.
- **Round 2, Concept A′ — Operational Record Index.** A' fixed the growth-chart problem (uniform-length marks, not ascending) but introduced a new one on inspection: uniform horizontal bars at partial opacity are also an unmistakable UI convention — a "skeleton loading" placeholder — which reads as *unfinished/empty*, the opposite of the intended "accumulated substantive record" meaning. **Rejected.**
- **Round 2, Concept C′ — Ambient Operating Field. Selected.** One system anchor (a simple labeled circle, not `OperatingFitField`'s shell/inner/rings construction) surrounded by a sparse, irregular scatter of small ambient marks — no background rings, no labeled satellite nodes, no connecting curves to anything. It carries no chart convention, no status-badge convention, and no rings/satellites to be confused with `OperatingFitField`. It reads as "one system, situated inside the ongoing texture of a business's operation" — the calmest and most novel of the five, and the only one that survived every rejection test the other four failed.

**Implemented**: `src/components/munkaink/LivingSystemField.astro`. Static SVG/CSS, no JS — the same interaction-policy review `OperatingFitField` got: nothing here is hidden until interacted with, so hover/focus adds nothing. Desktop (sparse 18-mark field, viewBox 260×260) and mobile (11-mark field, viewBox 220×220) are separately composed, not one scaled down. Sits beside the H1 in a `2fr 1fr` grid at 900px+ — more copy-dominant than `/egyedi-fejlesztes/`'s `3fr 2fr`, chosen deliberately rather than copied, since this visual is quieter and needs less relative width to read.

**Relationship to the case entries**: semantic only. The Hero visual represents the *general proposition* (a system persists in operation); the two case plates below remain the *actual currently-publishable evidence* for that proposition. No line, shared id, or visual device connects the Hero to the cases, and the cases are not nodes inside the Hero visual — preserving Task 010's own "no false relationship between cases" finding, now extended to "no false relationship between the Hero model and the specific cases" as well.

**Distinction from `SystemMap` and `OperatingFitField`**: three genuinely different semantic jobs sharing one visual language, not three variants of one diagram. `SystemMap` (Hero, `/`) — heterogeneous inputs *resolving* through one transformation core into structured outputs; a flow. `OperatingFitField` (Hero, `/egyedi-fejlesztes/`) — one operation anchor with satellite elements distinguished as fit or friction; a radial field with directional relationships. `LivingSystemField` (Hero, `/munkaink/`) — one system anchor inside an undirected ambient field; nothing resolves into anything, nothing is distinguished by category, the field simply exists around the anchor. No rings shared with `OperatingFitField`, no core-shell construction shared with `SystemMap`, no directional curves shared with either.

### What is NOT pixel-locked

The lock above is a language/principle lock, not a pixel freeze. Explicitly implementation-responsive, not immutable: exact pixel coordinates; exact section heights; exact line lengths; exact wrapping at every viewport; exact diagram coordinates outside the System Map's own current implementation; exact spacing values where responsive composition genuinely requires adaptation; the exact number of visual marks a future page uses; future page-specific composition. Changing any of these to fix a real responsive/content problem is not reopening the visual lock.

### What remains unlocked (page communication grammar)

Everything in this section locks **meaning and visual behaviour**, not geometry. Explicitly still open:

- exact section layouts;
- exact SVG shape of any non-Hero device (Process's connected-progression line/nodes, Tardify's registration mark, Problem's spine/dots);
- exact number of diagnostic/evidence markers;
- exact index label/placement;
- exact column count;
- exact panel geometry;
- exact route/connector shape;
- exact amount of violet reuse per section;
- exact dark-section artwork or content.

(See "What is NOT locked" under "System Map — ARTIT brand asset" above for the equivalent list scoped to the System Map component itself.)

---

## Exploration log (historical)

The record below documents how the approved direction was reached. Each entry reflects the state and reasoning at the time it was built; none of the pre-A4.3.3 entries is itself approved — see "Exploration history — decision summary" at the end of this log.

**EXPERIMENTAL — not approved, not part of this document's direction (Task 005A.1 / 005A "A2"/"A3")**: five composition/art-direction comparison prototypes exist at `/art-direction/a`, `/art-direction/b`, `/art-direction/c`, `/art-direction/a2`, `/art-direction/a3` (all `noindex`, absent from navigation). They explore layout/composition/proportion variations of Hero + Problem/Recognition only, reusing the exact locked fonts and core palette above — nothing in them is authoritative, and none has been adopted on production `/`.

`/art-direction/a2` ("Contemporary Editorial Engineering") is a refinement of Direction A after owner feedback that A was too static/dry — it keeps A's palette and typography exactly, and introduces two **provisional, experiment-local-only** derived surface values, not new design-system tokens:

- `--ad-a2-tint: #e6e9e6` — 8% mix of the locked `--color-accent` into `--color-bg`, used as a very subtle alternating-row wash in the Problem section and as the evidence panel's fill. Contrast verified: body text on it 14.2:1 (AAA), accent-colored text/labels on it 6.2:1 (AA), muted text on it 4.95:1 (AA).
- Reuses the existing `--color-accent-strong` (no new value) as a small filled "tag" surface — one deliberate deep-toned moment near the Hero evidence panel.

A2 also introduces a composition idea — a labelled placeholder panel standing in for real software evidence, deliberately bleeding past the Hero section's own boundary — used only because no real approved product/screenshot asset exists anywhere in the repository yet (verified before building). Replace the placeholder with real, approved imagery if and when this direction is adopted.

`/art-direction/a3` ("Editorial Engineering × Software Evidence") is a compositional refinement of A2 after owner feedback that A2 was directionally right but still read as "rectangle → line → grid → text," and that the Problem section's indented heading lost A's left-organized editorial character. A3 reuses A2's exact tint value and palette/typography — no new derived colors — and changes only composition:

- **Hero**: the evidence area is now two overlapping crops (one dominant panel, one smaller panel peeking from behind its bottom-left corner) instead of a single rectangle, and the whole cluster starts lower than the H1 so it interlocks with the copy instead of forming two parallel columns starting on the same line.
- **Problem section**: the heading returned to full-left alignment (the 32% indent from A2 was removed, restoring A's left-organized treatment); the six symptoms split asymmetrically 4/2 across two columns — a denser tonal-tint field (4 items) against an open, staggered, plain-background field (2 items) — instead of A2's symmetric two-column grid with per-row alternating tint.
- **Decision preview**: given its own tonal-band treatment (full-width tint background + indented content) so the page's three visible sections each read distinctly rather than repeating the same container+heading+grid pattern.

**EXPERIMENTAL — accent-color exploration (Task 005C), not approved**: three additional prototypes at `/art-direction/accent-steel`, `/art-direction/accent-ink`, `/art-direction/accent-petrol` (all `noindex`, absent from navigation) isolate the accent color as the only variable, on top of the A3 composition with one correction: A3's Hero accidentally added an extra `--space-lg` on top of `--space-section-lg` for the header→hero gap (via `.hero__main`'s own `padding-block-start`), making it feel disconnected from the header; that extra padding is removed here, restoring A2's tighter, correct relationship. All three variants share one Astro component (`src/components/experimental/AccentVariantHomepage.astro`) and differ only in three color props, so composition cannot be a confounding variable between them — verified by construction, and confirmed at runtime (identical computed CTA background per variant, differing only by the intended hex).

The neutral palette (`--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-border`, dark values) is completely unchanged in all three variants. Only `--color-accent` / `--color-accent-strong` are overridden (scoped to each experimental page only, via an inline custom-property override — never touching `tokens.css`), plus one new provisional per-variant tint (`--ad-accent-tint`, 8% mix of that variant's accent into `--color-bg`, same derivation method as A2/A3's tint):

| Variant | Accent | Accent-strong | Tint | White-on-accent (CTA) | Accent-as-text-on-bg |
|---|---|---|---|---|---|
| 1 — Mineral / Steel Blue | `#37536B` | `#283C4D` | `#E7E8E8` | 8.04:1 (AAA) | 7.38:1 (AAA) |
| 2 — Deep Blue-Violet / Ink | `#37325C` | `#282442` | `#E7E5E7` | 11.84:1 (AAA) | 10.87:1 (AAA) |
| 3 — Cool Petrol / Cyan-Blue | `#1F5570` | `#163D51` | `#E5E8E9` | 8.10:1 (AAA) | 7.44:1 (AAA) |

`accent-strong` for each variant was derived by mixing the variant's accent 28% toward black — the same proportional relationship the locked green's `--color-accent` → `--color-accent-strong` already has, applied consistently rather than picked arbitrarily per variant.

**Visual observation (not a decision)**: Variant 1 (Steel) and Variant 3 (Petrol) sit close in hue (208° vs 200°) and read more similarly to each other at a glance than either does to Variant 2 (Ink) — Variant 3's higher saturation is a real but subtle differentiator, not a strong one. Variant 2 reads as the most distinctive of the three. None of the three is approved; this is a rendered-comparison observation for the owner, not a recommendation.

**EXPERIMENTAL — Direction A4 "Swiss Systems / Structured Complexity" (Task 005C), not approved**: `/art-direction/a4` (`noindex`, absent from navigation) is a genuinely new compositional direction derived from A/A2/A3 — not a polish pass. It targets roughly 65% "high-tech editorial / data architecture" and 35% "system dashboard / blueprint," using **controlled complexity** as its central new principle: demonstrating that richer information can still feel highly ordered, rather than solving "freshness" by removing content.

What A4 keeps from A3: the same corrected header→hero spacing (only `--space-section-lg`, no extra local padding — A4 was built with this fix from the start, same diagnosis as the accent-exploration task), the light warm-neutral canvas, generous whitespace, editorial hierarchy, and the "no fake application UI" rule.

What changes fundamentally from A3:

- **Hero**: A3's generic screenshot-placeholder rectangle is gone entirely. In its place is a conceptual **system-architecture diagram** (inline SVG, no image asset, no fabricated UI) showing four scattered business-process inputs (`ÉRDEKLŐDÉS`, `ÜGYFÉL`, `MUNKALAP`, `ADAT`) connecting via thin muted curved lines into one structured `FOLYAMAT` (process) node, which resolves via crisp accent-colored straight lines into two aligned, bordered output nodes (`JÓVÁHAGYÁS`, `SZÁMLÁZÁS`). The visual language itself tells the "complexity → structure" story: loose/curved/muted lines for the unresolved inputs vs. straight/accent-colored/aligned lines and boxes for the resolved outputs. One input path is dashed with a kink, representing an exception/irregular case. A dedicated, separately-composed (not just scaled-down) simplified mobile diagram (2 inputs instead of 4) renders below 900px, per the "mobile must feel intentionally redesigned, not collapsed" requirement.
- **Problem section**: reframed as a **diagnostic field** rather than a symptom list — a bordered "DIAGNOSZTIKAI MEZŐ — AKTÍV" (diagnostic field — active) panel holds 4 dense, indexed observations (`JEL / 0X`, "signal," replacing A3's `TÜNET`), paired with a quieter "KAPCSOLÓDÓ JELEK" (related signals) zone for the remaining 2 — same underlying 4/2 asymmetric idea as A3, but now explicitly framed as system diagnosis rather than generic symptom cards.
- **Decision preview**: kept deliberately the quietest, simplest section of the three — no diagram, on the reused tint band — to land the “complexity → structure → clarity” emotional arc (Hero: competence/curiosity; Problem: recognition/analytical confidence; Decision: relief/clarity) explicitly requested for this direction.
- **Grid/coordinate language**: each section now carries a small `SEC / 0X — <NÉV>` coordinate label (e.g. `SEC / 01 — POZÍCIONÁLÁS`), a light Swiss-grid device — felt rather than a literal graph-paper background.
- **Motion**: one extremely restrained, optional touch — the two output nodes' status dots pulse opacity very slowly (3.2s, ease-in-out) — entirely wrapped in `@media (prefers-reduced-motion: no-preference)` and confirmed via automated check to fully disable (`animation-name: none`) when the OS/browser requests reduced motion. The design is complete and unchanged in meaning with motion off.

**Accent used**: the Ink / Deep Blue-Violet values from the Task 005C accent exploration (`#37325C` / `#282442`, tint `#E7E5E7`) — reused exactly, not re-derived — as the "current working direction" per this task's brief, explicitly still not locked.

A4 is a standalone prototype file (`src/pages/art-direction/a4.astro`); it does not use the shared `AccentVariantHomepage` component from the accent exploration, since its composition is fundamentally different, not a color-only variant.

**EXPERIMENTAL — Direction A4.1 "Living System Map" (Task 005C.1), not approved**: `/art-direction/a4-1` (`noindex`, absent from navigation) is a focused refinement of A4, not a new direction — same Ink/Deep Blue-Violet accent, same typography, same locked composition rules. It exists to test whether A4's Hero graph could become a recurring, reusable ARTIT visual grammar rather than a one-off illustration.

**What changed from A4:**

- **Bigger, bolder, more integrated graph.** The system map is larger, uses real messy-input vocabulary that echoes the Problem section's own approved quotes (`EXCEL`, `E-MAIL`, `KÜLÖN RENDSZER`, `ADAT` — directly recalling "Ezt Excelben vezetjük," "Erre van egy külön rendszerünk"), and is pulled left into the column gap (bounded to less than the gap's own width, verified overflow-safe at every required viewport) so it visually overlaps the text zone instead of sitting as an independent right-hand column. A numbered coordinate guide (`01 ─── 02`) spans the full Hero width above the copy and graph, tying both zones into one visual system — added and strengthened only after a real screenshot review showed the first attempt (a bare 1px line) was imperceptible.
- **Restrained interactivity — the first prototype in this exploration to use client JS**, explicitly authorized by this task's brief for this one experimental page only. Three nodes (`EXCEL`, `JÓVÁHAGYÁS`, `SZÁMLÁZÁS`) are real `<button>` overlays (not raw interactive SVG) positioned over the diagram: hover/keyboard-focus previews a relationship (that node's path/label emphasized, everything else recedes to 32% opacity with reduced stroke-width — emphasis never relies on color alone), click/Enter commits the state persistently until toggled off or another node is selected. Verified end-to-end in a real browser: hover-preview, click-commit-persist, click-to-deselect, and keyboard Tab+Enter activation all produced the correct `data-focus`/`aria-pressed` state. The interaction is a deterministic CSS-attribute state machine (`data-focus` set by ~30 lines of vanilla JS), not a physics/force-directed re-layout — chosen deliberately per the task's own "prefer a simpler deterministic state-transition model" guidance. `prefers-reduced-motion: reduce` is verified (via emulated browser context) to collapse all graph transitions to ~0ms.
- **Mobile is a separately composed diagram**, not the desktop map scaled down: 2 inputs (`EXCEL`, `KÜLÖN RENDSZER`) instead of 4, its own viewBox/proportions, and its own overlaid button set at recalculated positions. (An earlier draft mistakenly reused one SVG for both breakpoints; caught during the mandatory screenshot review and rebuilt properly before completion.)
- **Problem section pulled back toward editorial elegance**: A4's bordered "DIAGNOSZTIKAI MEZŐ — AKTÍV" panel-header device is removed — the dense/open 4+2 asymmetric split and `JEL / 0X` indexing remain, styled with A3's plain tonal-wash + left-rule spine, with no framing that implies a fake application state.

**Accent semantics**: strongest accent (`--color-accent-strong`) marks the currently-selected node/path; the base `--color-accent` remains the CTA/link/dot-marker color as before; de-emphasized elements use opacity reduction on the existing muted/border tones rather than any new hex value — no new colors were derived for this task.

**Honest residual limitation**: the graph now visibly overlaps the text column's whitespace and shares a coordinate guide with it, which is a real improvement over A4's clean two-column split — but it still reads as "text zone, graph zone" more than a single inseparable composition. Further integration would likely require letting the graph's own paths originate from inside the text column's whitespace (not just the container bleeding toward it), which was not attempted here to avoid any risk of a line crossing actual letterforms.

**Brand-asset assessment**: promising as a reusable grammar — the node/relationship/loose-vs-structured-path/mono-label/focus-recompose vocabulary established here is generic enough to plausibly extend to integrations, process descriptions, or case-study storytelling later, per the task's own brand-asset test. No shared component was built prematurely; the grammar has only been proven once, in this one prototype.

**EXPERIMENTAL — Direction A4.2 "System Map as Brand Asset" (Task 005C.2), not approved**: `/art-direction/a4-2` (`noindex`, absent from navigation) is a focused evolution of A4.1 after strong owner approval of the direction plus a generated visual reference the owner wanted followed fairly closely. **No reference image was provided to this session** — A4.2 was built from the owner's textual description of what they liked about it only; this is stated explicitly rather than implied otherwise.

**What changed from A4.1:**

- **Removed the prominent Hero coordinate device** (`SEC / 01 — POZÍCIONÁLÁS` and the `01 ─── 02` ruler, on all three sections) — it read as stylistic annotation rather than useful information. Replaced with genuinely subliminal architectural guides drawn *inside* the SVG itself (one dashed vertical + one horizontal line through `FOLYAMAT`, opacity 0.35, no labels) — quieter and structurally tied to the graph's own coordinate system rather than a separate visible ruler element.
- **Larger, more spatially ambitious graph** with 5 inputs (`EXCEL`, `E-MAIL`, `KÜLÖN RENDSZER`, `KÉZI ADAT`, `API`) plus one deliberately quiet 6th source (`…ÉS MINDEN MÁS FORRÁS`, reduced size/opacity, no dot). The grid ratio shifted from A4.1's 5fr/7fr to 4fr/8fr and the graph's leftward pull increased from `--space-xl` to `--space-2xl`, so it now occupies most of the right half and reaches toward centre, per the task's explicit instruction.
- **Multi-level visual hierarchy, present even at rest** — not only on interaction: `EXCEL`'s path is accent-coloured and heavier by default (`.line--critical`), the other four input paths stay thin/neutral, and the two output paths keep the established "resolved" accent treatment. `FOLYAMAT` gets a genuinely new treatment: three layered low-opacity fill circles approximating a restrained halo/glow (max 8% opacity, no SVG blur filter — simpler and more predictable across browsers), one thin stroked "marker ring," a stronger accent border, and slightly larger scale — deliberately "borrowed fairly directly" per the task's explicit permission.
- **A small semantic green** (`#2b5d4b` — reusing the *original* locked site accent from before this whole exploration, not a new hex) marks the two output status dots only, meaning "resolved/operational." Blue-violet remains the only brand accent everywhere else.
- **Restrained "recomposition" on selection**: the `FOLYAMAT` core scales to 1.04× and its halo intensifies when any node is focused; the selected output node scales to 1.05×. Implemented as a deterministic CSS `transform` triggered by the same `data-focus` attribute already driving opacity/colour changes — no physics, no library, verified via computed-style inspection (`matrix(1.04, 0, 0, 1.04, 0, 0)` confirmed present when a node is focused).
- **Fixed the known A4.1 focus-outline bug.** Root cause diagnosed precisely: the interactive buttons were percentage-positioned against `.system`'s *total* box, which included the trailing caption text below the diagram — silently shifting every button ~30px past where its node actually rendered (measured directly: `dy=30.1px` before the fix). Fixed by wrapping only the SVG(s) + buttons in a dedicated `.system__stage` element (the caption sits outside it), so percentages resolve against exactly the diagram's own box. Re-measured after the fix: `dx=0.0px, dy=0.0px` for both `JÓVÁHAGYÁS` and `SZÁMLÁZÁS`, and confirmed visually via a cropped screenshot showing the dashed outline evenly surrounding the node.
- **One real overlap bug found and fixed during review**: the quiet 6th source label initially collided with the last few pixels of the H1's final line ("…vállalkozásához.") — confirmed via `Range.getClientRects()` per-line text measurement (not just element bounding boxes, which would have hidden the issue). Fixed by repositioning the node further into the graph's own field, re-verified at zero overlap with ~185px of clearance.

**Mobile**: separately composed (2 inputs, its own smaller halo, own button set), unchanged in approach from A4.1, re-verified overflow-safe.

**Problem/Decision sections**: unchanged in structure from A4.1 (task explicitly said not to redesign them) — only the coordinate labels were removed, for consistency with the Hero's device removal.

**EXPERIMENTAL — Direction A4.3 "Living Blueprint / Refined System Map" (Task 005C.3), not approved**: `/art-direction/a4-3` (`noindex`, absent from navigation) is a refinement of A4.2's Hero graph after owner feedback that A4.2 was "structurally much better" but still read as "too raw, too diagrammatic, not alive enough" next to a supplied generated visual reference. Two reference images were provided to this session — a screenshot of the live A4.2 baseline, and a generated system-map reference showing icon-bearing rounded input containers, a layered violet transformation core, and a left→right (not top→bottom) flow into two clean output containers — so the task's "stop if one reference is missing" condition did not apply.

**What changed from A4.2:**

- **Direction of flow reversed from top-down to left→right**, per the owner's explicit priority. A4.2 fanned five inputs into `FOLYAMAT` and then dropped straight down into two outputs below it. A4.3 keeps the five inputs in a vertical stack on the left, `FOLYAMAT` centred, and `JÓVÁHAGYÁS`/`SZÁMLÁZÁS` in their own vertical stack on the right — messy inputs enter from the left, resolved outputs exit to the right, matching the reference's spatial story.
- **Every node became a real container**, not a bare label or thin outline. Inputs are small rounded-rect containers (`rx="7"`, not pill-shaped) each holding a custom inline-SVG pictogram (table/grid for Excel, envelope for e-mail, two-circles-and-a-broken-line for an external system, a cursor glyph for manual entry, facing chevrons for API — six new `<symbol>` defs, no icon library, no third-party brand logos), the label, and a small connector dot at the container's trailing edge. `FOLYAMAT` is a genuinely layered object: a quiet neutral-surface outer shell (`rx="16"`) with two small corner registration ticks, containing a smaller blue-violet inner core (`rx="10"`) with a light-on-dark label and a target/radio icon — closer to "premium digital object" than A4.2's halo-and-marker-ring treatment. Outputs are bordered rounded containers with a small restrained status dot, visually part of the same container family as the inputs rather than plain outlined rectangles.
- **Curved relationship hierarchy carried over from A4.2, re-routed for the new geometry**: one critical input path (`EXCEL`) stays accent-coloured and heavier at rest, the other four inputs stay thin/neutral, the quiet sixth source (`…ÉS MINDEN MÁS FORRÁS`) keeps a dashed low-opacity path, and both output paths keep the "resolved" accent treatment — the same three-tier model (ambient / critical / exception) as A4.2, now curving rightward into the core and rightward again out to the outputs instead of converging top-to-bottom.
- **New subliminal construction-guide layer**: one faint dashed horizontal and one faint dashed vertical line crossing through `FOLYAMAT`'s centre (continuing A4.2's approach), a small crosshair tick at their intersection, and two short registration-mark "L" ticks near the outer shell's corners — three of the brief's suggested devices, deliberately not all of them, to stay under the "nobody asks what does this mean" threshold.
- **Recomposition on selection is slightly richer than A4.2's**: in addition to A4.2's opacity recede / path strengthen / core scale, the selected input's and selected output's own container now nudges 3–4px toward `FOLYAMAT` on focus (`translateX`, confirmed via computed-style inspection: `matrix(1, 0, 0, 1, 4, 0)`), while the connecting path itself stays anchored — moving only the container, not the path, avoids the far end of the path visibly detaching from the core. `FOLYAMAT`'s inner core scales to 1.045× on any focus (`matrix(1.045, 0, 0, 1.045, 0, 0)`, confirmed).

**Mobile**: kept the A4.1/A4.2 principle of a separately composed diagram rather than a scaled-down desktop map, and went through two real-browser iterations before landing on the final version (see bug list below). The desktop's full vertical input stack doesn't fit two rows deep at 390–768px without either illegible labels or a connector path crossing through the container below it, so mobile keeps two inputs side-by-side — sized and spaced from an actual `SVGTextElement.getBBox()` measurement of "KÜLÖN RENDSZER" (112.85 user-units) rather than an assumed character width. `FOLYAMAT` and the two outputs keep the same layered-container/curved-path grammar as desktop, recomposed for a narrower canvas.

**Bugs found and fixed during the mandatory real-browser review** (measured, not eyeballed, per the task's own instruction):

1. **H1/graph text collision at 1440px.** A4.2's `-space-2xl` left pull (further left than the grid gap itself) worked because A4.2's leftmost graph content was a thin dot+label; A4.3's chunky 210-unit-wide input containers sitting flush at the graph box's own left edge meant the same pull drove the `EXCEL` container into the text column. Confirmed with `Range.getClientRects()` on the H1's own line boxes: the "alkalmazkodjon" line overlapped the `EXCEL` container by ~97px. Fixed by reducing the pull to exactly `-space-xl` (matching the grid gap, so the graph box's edge lands flush at the text column's boundary instead of past it); re-measured at zero overlap.
2. **Overlay-button misalignment — the same class of bug the task explicitly named from A4.1.** The percentage math for the interactive `<button>` overlays was computed as each node's top-left corner instead of its centre (the buttons use `transform: translate(-50%, -50%)`, which expects centre-point percentages). This produced up to 100px of drift between the invisible button and its visible node — caught via `getBoundingClientRect()` diffing between each button and its corresponding SVG container. Recomputed from the exact rect geometry for all six interactive buttons (3 desktop, 3 mobile); re-verified sub-0.01px agreement at 390/768/1440/1920px.
3. **Right-edge graph bleed produced an actual horizontal scrollbar at 1440px** (`scrollWidth` 1472 vs `clientWidth` 1440). The brief allows the graph to "bleed toward the right edge," but the validation requirement is zero horizontal overflow — the two aren't in tension once the bleed is clipped at the hero section's own boundary. Added `overflow-x: clip` (not `hidden`, so no new scroll container) scoped to `.ad-a43-hero` only; re-verified zero overflow at all four required widths.
4. **Mobile label overflow, found across two iterations.** A first attempt sized inputs at 150 user-units wide (copied from A4.2's number), which clipped "KÜLÖN RENDSZER." A second attempt (full-width stacked rows) fixed the width but routed `EXCEL`'s connector path visibly through the `KÜLÖN RENDSZER` box below it. The final version keeps the two inputs side-by-side, widened to 175 units with a tighter 10-unit gap, sized from the real browser text measurement above; confirmed the label's rendered right edge sits comfortably inside its container.

**Deviation from the brief**: the generated reference's "RENDSZER / AKTÍV" status badge (green dot + "system / active" label near the graph) was deliberately not reproduced — it reads as a live monitoring/status claim, which conflicts with this project's "no fabricated product functionality/data" rule. The reference's other liked qualities (icon containers, layered core, curved left→right flow, orderly inputs, clean outputs) were carried over; this one specific device was not.

**Brand-asset assessment**: stronger than A4.2. The left→right narrative reads correctly almost without labels (confirmed by inspecting the static, non-interactive screenshot first, per the brief's own instruction), and the container/icon/curve grammar established here — quiet outer shell + accent inner core, small icon-bearing rounded containers, three-tier path hierarchy — is generic enough to extend to other ARTIT contexts (integrations, process explainers) without the current copy or logo nearby, which is the brief's own test for whether this is becoming a reusable visual asset rather than a one-off Hero illustration.

**Accent/tokens**: unchanged from A4.2 — same Ink / Deep Blue-Violet accent (`#37325C` / `#282442`), same tint (`#E7E5E7`), same reused original-locked-green status-dot semantic (`#2b5d4b`). No new colors were derived for this task.

**Problem/Decision sections**: unchanged in structure and copy from A4.2, per the task's explicit "do not redesign these sections" instruction.

**EXPERIMENTAL — Direction A4.3.1 "System Map Visual Refinement" (Task 005C.3.1), not approved**: `/art-direction/a4-3-1` (`noindex`, absent from navigation) is a **refinement of A4.3, not a new direction** — same left→right narrative, same Ink/Deep Blue-Violet accent, same production copy/nav/CTA, same later-section structure. Two reference images were supplied: an A4.3 browser screenshot (baseline) and a generated visual-quality target (icon-bearing ports, concentric violet rings, arrowheads, a wide low `FOLYAMAT ⊙` module, and a legend/signature zone). The task's own instruction to stop if a reference is missing was honoured mid-session — the target image was not attached to the first message, so implementation waited until the owner provided it rather than reconstructing it from text alone.

**What changed from A4.3:**

- **Hero rhythm**: H1 stepped down one size (`clamp(2.25rem, 1.85rem + 2.2vw, 4.75rem)`, a scoped local override — the site's default `--text-display` clamp is untouched), with H1→lead and lead→CTA spacing each opened up by ~8–10px on top of the existing `--space-lg`/`--space-xl` tokens. The goal was less headline pressure against a now-larger, busier map, not a smaller headline in isolation.
- **Input spacing**: row pitch grew from A4.3's 64px (48px box + 16px gap) to 82px (48px box + 34px gap) — a "noticeably" more generous vertical rhythm per the brief, so the five inputs read as individually measured entities rather than a compact list.
- **A coherent custom icon family, redrawn**: `KÜLÖN RENDSZER` changed from a broken/dashed two-circle glyph (A4.3, meant to suggest "disconnected") to two overlapping rounded-pill shapes reading as a chain link / interconnected system, matching this task's explicit "linked, not disconnected" description. `EXCEL` gained a small filled cell in the grid icon using the brighter status green — a tiny, restrained semantic detail, not a second brand accent. The previously-unillustrated "…ÉS MINDEN MÁS FORRÁS" quiet source now has its own small three-dot icon so it reads as a member of the same family rather than a bare label.
- **Connection ports, made literal**: every input and output now has a small outlined circle exactly at the coordinate where its path's `d` attribute starts or ends — not inset a few pixels into the container as A4.3 did, but sitting exactly on the container's own edge. Ports grow (`r` transitions 4→5.5, an animatable SVG geometry property, not a fake radius hack) and their stroke shifts to accent-strong on hover/focus/selection, verified via computed style.
- **Directional arrowheads** — new. Two SVG `<marker>` defs (`accent`, `neutral`) reused across both the desktop and mobile diagrams via `marker-end` (on inbound paths, pointing into `FOLYAMAT`) and `marker-start` (on outbound paths, pointing out of `FOLYAMAT` toward each output) — `orient="auto-start-reverse"` keeps both consistently forward-pointing without two different marker orientations. The quiet dashed source deliberately has no arrowhead, keeping it visually subordinate.
- **`FOLYAMAT` proportions inverted**: A4.3's shell was 240×176 (tall/squat); A4.3.1's is 280×132 (wide/low), and the inner core changed from 170×96 to 210×64 for the same reason — a flatter, more "engineered module" silhouette. The composition order flipped too: A4.3 had the icon before the word; A4.3.1 renders `FOLYAMAT` then the circle-with-centre-dot icon after it, per this task's explicit `FOLYAMAT ⊙` instruction.
- **Concentric violet rings, restored and strengthened** — A4.3 had none (its layered treatment was shell+core only). A4.3.1 adds four low-opacity radial fills (3–10% opacity) plus two thin stroked rings (16–20% opacity) behind the shell, all precisely centred on `FOLYAMAT`'s own coordinates. On any node focus, the two stroked rings and the innermost fill ring intensify slightly (a generic rule, not per-node) as part of the "core/rings respond" requirement — still no SVG blur filter, consistent with this project's "no glow" anti-pattern.
- **Interaction extended to all seven nodes.** A4.3 wired up only `EXCEL`, `JÓVÁHAGYÁS` and `SZÁMLÁZÁS` — `E-MAIL`, `KÜLÖN RENDSZER`, `KÉZI ADAT` and `API` were inert, which this task named directly as a defect to fix. All five inputs plus both outputs now share one CSS attribute state machine: a single generic "recede" rule (`[data-focus] [data-belongs] { opacity: 0.28 }`) plus one linear (not combinatorial) "highlight" rule per behaviour category — verified end-to-end for every node via hover, click-commit, click-to-deselect, and keyboard Tab+Enter.
- **A restrained construction/coordinate layer**: alongside A4.3's centre guidelines and corner registration ticks, A4.3.1 adds a small crosshair at a fixed "system origin" point and four tiny (`8px`) mono coordinate labels (`X / 01`, `X / 02`, `Y / 01`, `Y / 02`) at the guideline ends, all at ~30% opacity — noticed on a second look, not read as primary content. The old prominent `01────02` ruler was not restored.
- **A new legend + signature zone.** A restrained mono legend (`PRIMER ÚTVONAL` / `SZEKUNDER ÚTVONAL` / `KIVÉTEL / ALTERNATÍV`, each with an actual miniature stroke swatch reflecting its real styling) sits directly above the existing `BEMENETEK → FOLYAMAT → KIMENETEK` / `TISZTA. KAPCSOLÓDÓ. ÁTLÁTHATÓ.` signature, framed as one lower annotation zone — this is the first prototype in the exploration to state its own path grammar explicitly rather than leaving it to be inferred.
- **Brighter output status green** (`#22c55e`, replacing A4.3's muted `#2b5d4b`) per the task's explicit "too dull, use something more energetic" note. Still a narrow, two-dots-only semantic role, never a label, never implying live/active status.

**Mobile**: kept A4.3's proven two-input side-by-side composition (widened boxes, real `getBBox()`-measured label clearance) and applied the same refined grammar at a smaller scale — wide/low `FOLYAMAT ⊙` with rings sized to clear the input and output rows (`r ≤ 100` keeps the outer ring off the output boxes, checked against the actual row coordinates), arrowheads reused via the same two marker defs. The tiny `X/Y` coordinate labels and corner registration marks were deliberately omitted on mobile — legible at desktop scale, they'd be clutter at 390px — per the task's own "simplify guides/legend intelligently" allowance. The legend still renders on mobile (it's plain HTML text below the diagram, not SVG, so it costs no extra diagram space) and wraps onto two lines via `flex-wrap`.

**Bugs found and fixed during the mandatory real-browser review** (measured, not eyeballed):

1. **Right-edge content clipping at 1440px.** A4.3's `-space-xl` right-margin bleed, reused unchanged here, combined with A4.3.1's wider outputs (`OUTPUT_X + OUTPUT_W` = 960 of a 980-unit viewBox) to push the `JÓVÁHAGYÁS` container ~12px past the 1440px viewport edge. Because `.ad-a431-hero` uses `overflow-x: clip` (added in A4.3 specifically to stop right-bleed from creating a scrollbar), this was silently hard-cutting the box's border and the `X / 02` coordinate label instead of just suppressing a scrollbar — a real regression the automated `scrollWidth`/`clientWidth` check alone did not catch, since clipped content doesn't grow scroll width. Caught by directly measuring `getBoundingClientRect()` on the output box against `window.innerWidth`. Fixed by removing the right-edge bleed entirely (`margin-inline-end: 0`); re-verified with ~50px of clearance at 1440px and ~290px at 1920px.
2. **Output-alignment measurement collided with the desktop SVG.** A first alignment check for the two mobile output buttons showed >1000px of drift — not a real bug, but a query-scoping mistake: `.ad-a431-output__box-group[data-belongs="jovahagyas"] rect` matches the (hidden, `display:none`) desktop copy first in DOM order. Re-scoped the measurement to `.ad-a431-system__svg--mobile …`, which confirmed sub-0.01px alignment, consistent with every other node.

No other alignment, overflow, or interaction defects were found — all seven desktop and four mobile interactive nodes are pixel-aligned to their visual containers (verified via `getBoundingClientRect()` diffing, not assumed from the percentage formula alone), and `prefers-reduced-motion: reduce` collapses both `--ad-a431-transition` and `--ad-a431-shift-transition` to ~0ms.

**Brand-asset assessment**: the strongest iteration yet. The port/arrowhead/ring vocabulary reads as a genuinely specified system (the legend proves it has rules, not just a look), the wide low `FOLYAMAT` module feels more like a premium engineered object than A4.3's taller block, and — critically — the interaction defect that would have undermined the "living system" claim (four of seven nodes doing nothing) is fixed.

**Accent/tokens**: unchanged from A4.3 except the one explicitly-requested brighter status green (`#22c55e`, still non-brand, still two dots only). No other new colors were derived.

**Problem/Decision sections**: unchanged in structure and copy from A4.3, per this task's explicit "do not redesign" instruction.

**EXPERIMENTAL — Direction A4.3.2 "System Map Visual Refinement II" (Task 005C.3-2), not approved**: `/art-direction/a4-3-2` (`noindex`, absent from navigation) is a **polish pass on A4.3.1, not a redesign** — same seven-node interaction model, same left→right narrative, same production copy/nav/CTA/later sections, same Ink/Deep Blue-Violet accent. A4.3.1 (`a4-3-1.astro`) was left untouched; this is a new file. A generated visual-quality target accompanied the task (an A4.3.1 baseline was implicit — this session already had it); the target showed several concrete, previously-absent details that became the bulk of this task's real changes.

**What changed from A4.3.1:**

- **The quiet "…ÉS MINDEN MÁS FORRÁS" source became a real 6th input container** in the vertical stack — same rounded box, icon chip, port and arrowhead grammar as its five siblings — rather than A4.3.1's bare label floating below the stack. Its path reuses the exact same `inputPath()` function as every other input (previously it had a bespoke curve), and it is styled with the diagram's own dashed/low-opacity "exception" treatment — which means it now doubles as the diagram's own live example of the legend's "KIVÉTEL / ALTERNATÍV" tier, instead of that tier existing only in the legend's abstract swatch. It stays non-interactive (no overlay button), preserving its subordinate role.
- **Outputs gained real icons** — a circled checkmark for `JÓVÁHAGYÁS`, a document/invoice glyph for `SZÁMLÁZÁS` — matching the input family's icon-chip treatment (a small `--color-surface` rounded-square backdrop behind every icon, input and output alike, added in this task for a touch more presence and rhythm between icon and label).
- **`FOLYAMAT`'s shell tightened around its core**: shell 280×132 → 240×110, inner core 210×64 → 190×58 — a noticeably more integrated single-object silhouette instead of A4.3.1's more generously padded double-layer.
- **Row pitch shortened** (82px → 64px: 44px box + 20px gap, down from 48px + 34px) to fit six input rows in the same vertical envelope A4.3.1 used for five, per the reference's tighter — but still clearly separated, not cramped — vertical rhythm.
- **Construction/coordinate layer expanded**: A4.3.1's single fixed "origin" crosshair became three corner registration crosshairs framing the graph's own bounding box (top-left, top-right, mid-right), still paired with the same four tiny (`8px`, ~32% opacity) `X/01`, `X/02`, `Y/01`, `Y/02` coordinate labels — more of a construction-frame gesture, still strictly second-look detail, still no return of the old prominent `01──02` ruler.
- **Legend + signature became one bordered, centred panel** (`border` + `--color-surface` fill + `border-radius`) matching the graph's own width, sitting below it with clearly more separation (`--space-xl` gap, up from `--space-md`) than A4.3.1's plain-text caption. Internally, the legend row and the signature block now have their own clear spacing rather than reading as one dense metadata line. This directly answers the task's explicit complaint that A4.3.1's legend "wasn't disciplined in its placement."
- **Hero rhythm nudged further, not reset**: H1 size kept exactly as A4.3.1 fixed it (the task explicitly said not to grow it back); H1→lead and lead→CTA spacing each opened a few more pixels (`+14px`/`+12px`, up from A4.3.1's `+10px`/`+8px`) for a touch more editorial air without the block falling apart.
- **Hero integration was checked, not changed.** The task asked whether the input stack could reach even closer to the column gap. It was deliberately left at A4.3.1's proven `-space-xl` pull (exactly matching the grid gap) rather than pulled further — that value is specifically what fixed A4.3's real H1/`EXCEL` collision, and pulling further would risk reintroducing it for a marginal integration gain. This is a documented decision, not an oversight.

**Bugs found and fixed during the mandatory real-browser review** (measured, not eyeballed — this task's own brief explicitly warned that "no scrollbar" does not by itself prove there's no clipping):

1. None found as new regressions from A4.3.1's own fixes — both of A4.3.1's previously-fixed issues (right-edge clipping, mobile-output query scoping) were re-verified clean here via the same `getBoundingClientRect()` methodology, since the underlying geometry changed enough (tighter shell, shorter row pitch, new 6th row) to warrant re-checking rather than assuming they'd still hold. Specifically re-confirmed: the `JÓVÁHAGYÁS` output box stays comfortably inside the viewport at 1440px (no bleed-induced clipping), the new 6th "other" row's label clears its own port with margin, and the annotation panel never extends under the Hero copy at any of the four required widths.
2. All seven desktop and four mobile interactive nodes were re-measured against their visual containers after the geometry changes (row pitch, output positions, mobile core/output repositioning) and are pixel-aligned (sub-0.02px), confirming the button-overlay percentages were recomputed correctly rather than carried over from A4.3.1's now-stale values.

**Brand-asset assessment**: the annotation panel is the biggest single credibility gain in this iteration — a bordered, disciplined panel reads as "this system has been specified," where A4.3.1's plain caption text read as an afterthought. Folding the quiet source into the real input grammar (rather than treating it as an exception to the exception-path convention) also makes the six-source vocabulary feel complete rather than "five plus a footnote."

**Accessibility/interaction**: unchanged in model from A4.3.1 — real `<button>` overlays, `aria-pressed`, keyboard Tab+Enter, visible `:focus-visible`, `prefers-reduced-motion` collapsing both transition variables — re-verified end-to-end for all seven interactive nodes after the geometry changes, not assumed to still hold.

**Mobile**: kept A4.3.1's two-input composition; construction guides simplified further per this task's explicit allowance (only the single centre tick remains — no corner crosshairs, no coordinate labels at 390px) since they'd be clutter, not "second-look" detail, at that scale. Icon chips and output icons carried over at a proportionally smaller size.

**Problem/Decision sections**: unchanged in structure and copy from A4.3.1.

**Direction A4.3.3 "Final Visual Polish / Art Direction Lock Candidate" (Task 005C.3-3), status: APPROVED — ART DIRECTION LOCK (Task 005D)**: `/art-direction/a4-3-3` (`noindex`, absent from navigation) is a **narrow-scope micro-polish pass on A4.3.2**, not a new direction — same seven-node model, same node/icon/port/arrow/ring/legend vocabulary, same production copy/nav/CTA/later sections. A4.3.2 (`a4-3-2.astro`) was left untouched; this is a new file.

**A note on the task file itself**: this task's own "starting point" section had a copy-paste error inherited from the A4.3.2 prompt template — it named `a4-3-3.astro` as the (nonexistent) baseline and `a4-3-2.astro` as the (already-existing) file to create. The task's title, its appended "A4.3.3 — Owner final-polish overrides" section, and its own requested documentation-section name all agreed unambiguously on the real intent, so this session proceeded on that basis: baseline A4.3.2, deliverable A4.3.3.

**What changed — the seven owner-specified overrides, each applied narrowly:**

1. **Secondary contrast raised.** Non-critical input paths and input-box borders previously used `--color-border` (~1.3:1 against the canvas — the site's own decorative-divider token, never meant to carry real content) or bare `--color-text-muted`, which read as "disabled" rather than "deliberately quiet." Secondary paths now render in `--color-text-muted` at 62% opacity (up from an implicit ~unstyled full-opacity low-contrast border color); input-box borders moved to `--color-text-muted` at 55% stroke-opacity; ports gained a touch more stroke-width (1.25→1.4). The primer/exception tiers were re-verified at rest on a fresh page load: primer opacity 1, secondary 0.62, exception 0.45 — the hierarchy stayed intact, it simply moved up a notch as a whole. (Fixing this exposed a real latent bug, see Bugs below.)
2. **Construction/coordinate layer strengthened.** Guideline, tick, corner-crosshair, registration-mark and coordinate-label opacities all raised (e.g. guideline 0.3→0.46, corner ticks 0.24→0.4, coordinate labels 0.32→0.5 plus a half-point font-size bump). Still strictly a background layer — no `SEC/ruler` text reintroduced — but now perceptible as "engineering precision" on a first look rather than only on a deliberate second look.
3. **Concentric rings given more violet presence.** The two outer fill rings stay a faint ambient fade-out (0.035/0.06), but the inner two fill rings and both stroked rings were raised noticeably (0.07→0.11, 0.1→0.17, 0.16→0.22, 0.2→0.28) so the field reads as several distinguishable tonal layers converging on `FOLYAMAT` rather than one flat, barely-there tint. Max opacity stays at 0.28 — a tonal field, not a glow. The focus-state ring-intensify rule (previously `stroke1→0.24, stroke2→0.3, fill4→0.14`) had to be raised in lockstep (`→0.3/0.36/0.24`) since the old focus values were now *below* the new resting values, which would have made focus dim the rings instead of strengthening them — caught and fixed before this was ever visible in a browser.
4. **`FOLYAMAT` inner core widened ~6%** (190→202 user-units; height unchanged at 58) for a touch more presence as "the diagram's strongest object," without growing into a CTA-button silhouette. Re-verified the wider core still sits fully inside its outer shell with margin to spare (`innerRight < shellRight` at both 1440px and 1920px).
5. **Outputs pulled 15px further from the core** (`OUTPUT_X` 740→755) for slightly longer, more elegant resolving arcs, within the owner's specified 10–20px range and confirmed clipping-free.
6. **Legend narrowed ~8%** (`max-width: 92%`, centred via `margin-inline: auto`) at desktop widths only, so it reads as a compact technical annotation plate rather than a full-width standalone panel; mobile keeps A4.3.2's full-width wrapping behaviour unchanged, per the task's own mobile scope note.
7. **Hero copy left untouched** — H1 size and the H1→lead/lead→CTA spacing are byte-for-byte what A4.3.2 shipped; this task explicitly ruled out any new typography exploration.

**Bugs found and fixed during the mandatory real-browser review** (measured, not eyeballed — this task's brief repeated the standing warning that an absent scrollbar doesn't by itself prove there's no clipping):

1. **A latent opacity-cascade bug, caught before it ever rendered.** Adding `opacity: 0.62` to the shared `.ad-a433-line` base class (override #1) would have silently dimmed the `--critical` and `--resolved` (primer) paths too, since those modifier classes only override `stroke`/`stroke-width`, not `opacity` — they'd have inherited the new 0.62 from the base rule instead of staying at full strength. Caught by tracing the CSS cascade before testing, not by a visual symptom; fixed by adding explicit `opacity: 1` to both modifier classes. The same risk existed for `.ad-a433-input__box--critical` inheriting the new `stroke-opacity: 0.55` from its base class — fixed the same way (`stroke-opacity: 1` added to the critical modifier).
2. **Stale button-overlay percentages from the `OUTPUT_X` geometry change (override #5).** Moving the outputs 15px right changes their centre-point x-coordinate, which the interactive button overlays' `left` percentage is computed from — the two output buttons, copy-pasted forward from A4.3.2, were still using the old `86.598%` value. Caught by the same `getBoundingClientRect()` diffing methodology used in every prior iteration (not assumed correct because "only the geometry changed, not the button code"); recomputed to `88.144%` and re-verified sub-0.02px alignment for all seven desktop and four mobile interactive nodes.
3. **No clipping or overflow regressions** from the wider core or the outputs' new position — explicitly re-checked (not assumed) at 1440px and 1920px via `getBoundingClientRect()` on the `JÓVÁHAGYÁS` box and the annotation panel, given this exact geometry class (core/output size changes) has caused real clipping bugs in two earlier iterations of this exploration.

**Static-first review** (per the task's own required checklist, interaction untouched): the input→process→output story reads immediately; `FOLYAMAT` remains the strongest object in the frame; the five real inputs plus the boxed quiet source read as legible members of one family rather than fading toward "disabled"; the concentric field now visibly pulls the eye toward the core rather than reading as a faint background tint; the coordinate/crosshair layer is noticeable without becoming content; the legend panel reads as a specification plate, not a dashboard card; Hero copy and graph continue to read as one composition.

**Scope discipline**: no new Hero layout, accent, node vocabulary, animation concept, section design, or shared component was introduced — every change in this iteration is one of the task's seven enumerated overrides, or a fix required to make one of them work correctly.

**Accessibility/interaction**: unchanged in model — re-verified end-to-end for all seven interactive nodes (hover, click-commit, click-deselect, keyboard Tab+Enter, `aria-pressed`) and `prefers-reduced-motion` after the CSS changes, not assumed to still hold.

**Mobile**: unchanged in composition from A4.3.2; inherits the same secondary-contrast, ring-intensity and construction-guide CSS class changes automatically (shared stylesheet), re-verified at 390px with no new text collisions or overflow.

**Problem/Decision sections**: unchanged in structure and copy.

### Exploration history — decision summary

| Direction | Task | Status |
|---|---|---|
| A, A2, A3 | 005A.1 / 005A | Historical exploration — superseded |
| Accent variants (Steel / Ink / Petrol) | 005C | Historical exploration — the Ink variant's values were carried forward into the lock; this entry is not itself an approval |
| A4 "Swiss Systems / Structured Complexity" | 005C | Historical exploration — superseded |
| A4.1 "Living System Map" | 005C.1 | Historical exploration — superseded |
| A4.2 "System Map as Brand Asset" | 005C.2 | Historical exploration — superseded |
| A4.3 "Living Blueprint / Refined System Map" | 005C.3 | Historical exploration — superseded |
| A4.3.1 "System Map Visual Refinement" | 005C.3.1 | Historical exploration — superseded |
| A4.3.2 "System Map Visual Refinement II" | 005C.3-2 | Historical exploration — superseded |
| **A4.3.3 "Final Visual Polish / Art Direction Lock Candidate"** | 005C.3-3 | **APPROVED — ART DIRECTION LOCK (Task 005D)** |

Each earlier entry remains exactly as documented at the time it was built — none is retroactively marked approved, and A4.3.3 was not the intended endpoint from the start; it is the outcome of nine successive rounds of owner review recorded above. See "Art Direction Lock (Task 005D) — APPROVED" near the top of this document for the current, canonical statement of what is locked.

## Character

- restrained;
- editorial;
- engineering.

The site should feel like an experienced software engineering studio, not a generic agency or AI startup.

## Core visual principles

- typography is the primary visual system;
- rigorous grid;
- generous whitespace;
- real software interfaces as evidence;
- subtle engineering metadata;
- almost no decorative UI;
- borders and spacing over shadows;
- minimal card usage.

## Layout

Desktop base:

12-column grid with controlled asymmetry.

Content widths:

- `reading`
- `standard`
- `wide`

Reading measure:

approximately 60–75ch.

Do not force every section into the same centered container.

## Spacing

Desktop section spacing direction:

approximately 120–180px, implemented fluidly.

Not every section receives identical spacing.

Whitespace creates hierarchy and rhythm.

### Implemented (Task 004C)

Task 004B's single `--space-section` (clamp 64–128px) read as too generous for ordinary sections once seen in a real browser at desktop widths. Calibrated into two semantic roles:

```text
--space-section       clamp(4rem, 3rem + 4vw, 6rem)   → 64–96px   (ordinary content sections)
--space-section-lg    clamp(6rem, 5rem + 4vw, 8rem)   → 96–128px  (major/editorial sections, e.g. Longevity)
```

`.section` uses `--space-section` by default; the `.section--major` modifier (composable with `.section--dark`, independent concepts) opts into `--space-section-lg`. Confirmed via real-browser screenshots at 390/768/1440/1920px that ordinary sections now feel more cohesive without feeling cramped, while the dark/Longevity-style section keeps its authority.

## Typography

Primary:

modern grotesk / neo-grotesk sans.

Requirements:

- strong display performance;
- excellent body readability;
- not overly geometric;
- not startup-generic;
- not decorative for its own sake.

Scale direction:

```text
Hero H1       72–96px max desktop
Section H2    48–64px
H3            28–36px
Lead          20–24px
Body          17–19px
Small         14–15px
Metadata      11–13px
```

Use fluid `clamp()` sizing.

### Implemented (Task 004B)

**Primary sans: Work Sans** (variable, self-hosted, SIL OFL 1.1 — see `DOC/09` for provenance). Weights in use: 400/500/600/700, all served from one variable file per glyph subset.

Implemented fluid scale (`src/styles/tokens.css`, `clamp()`-based, mobile-safe):

```text
--text-display / --text-h1   40–88px   (calibrated down from the 72–96px envelope — see below)
--text-h2                     32–56px
--text-h3                     22–28px
--text-lead                   18–22px
--text-body                   17px (flat, not fluid — long-form reading stays constant across viewports)
--text-small                  14px
--text-meta                   12px
```

`--text-h1` is aliased to `--text-display` — Task 004B found no genuine content need to differentiate them yet at foundation stage, per the task's own "avoid unnecessary duplication" guidance.

### Weight hierarchy — calibrated (Task 004C)

```text
Display / H1    Work Sans 600   (line-height tight, tracking tight)
H2              Work Sans 600   (line-height tight, tracking tight)
H3              Work Sans 500   (line-height snug)   — was 600, stepped down for a genuine H2→H3 break
Lead            Work Sans 500   (line-height relaxed) — was 400, given presence without becoming a heading
Body            Work Sans 400   (line-height normal)
Small           Work Sans 400, muted color
Metadata        Space Mono 400, uppercase, wide tracking
```

**Display weight, 600 vs 700 — visually compared, not assumed.** Both were rendered side-by-side in the fixture and screenshotted. 700 read heavier and closer to startup-billboard impact, which the brief explicitly warns against; 600 kept the same size and presence while reading calmer and more editorial — confirming the task's own hypothesis. 600 was kept (no change from Task 004B); the comparison markup was removed from the fixture after the decision.

The H3 and lead weight changes are what actually fixed the "same-weight headings at different sizes" problem the task flagged for mobile — H3 now visibly steps down from H2, and lead now reads as "a paragraph with more presence" rather than "a smaller heading," at every viewport tested (390/768/1440/1920px).

## Monospace metadata

Use only for metadata/system labels.

Examples:

```text
CASE / 02

STATUS        ACTIVE
SINCE         20XX
LIFECYCLE     XX+ YEARS
```

Do not use monospace for normal body content.

Do not make the site look like a developer terminal.

### Implemented (Task 004B)

**Space Mono**, static, Regular (400) only — self-hosted, SIL OFL 1.1 (see `DOC/09`). Bold not loaded; add only if a real need appears. Used exclusively for the `.meta` utility class (case identifiers, status/lifecycle labels, timeline labels) — never for body, navigation or buttons, per this document's rule above.

## Color

Neutral-first:

- warm off-white/light neutral background;
- dark charcoal foreground;
- restrained gray scale;
- one controlled ARTIT accent.

Accent roles:

- CTA;
- link;
- active state;
- diagram highlight;
- minimal metadata highlight.

No decorative gradients or glow.

### Implemented (Task 004B)

Direction 3 from Task 004A ("Restrained Industrial Neutral"), implemented as-proposed with no calibration needed — Task 004A's own WCAG contrast verification already showed AA/AAA across every real text usage:

**Superseded and then migrated (Task 006) — accent only.** The Task 005D Art Direction Lock locked a different operating accent (Ink / Deep Blue-Violet) at the decision level without touching code; Task 006 has since implemented that migration in `src/styles/tokens.css` and production `/`. The values below reflect the current, live production state — see "Art Direction Lock → Colour language" near the top of this document for the full migration audit, the newly added tokens (`--color-accent-tint`, `--color-accent-on-dark`, `--color-status-success`), and the two accessibility bugs the migration surfaced and fixed. The neutral values below (`--color-bg` through `--color-border`, and the dark-section values) were unaffected by the migration and remain exactly as Task 004B calibrated them.

```text
--color-bg              #f6f5f3
--color-surface         #eceae6
--color-text             #1a1a1a
--color-text-muted       #656260   (5.56:1 on bg — AA)
--color-border           #d9d6d1   (decorative only — see accessibility note below)
--color-accent           #37325c   (10.86:1 as text on bg — AAA; 11.83:1 white-on-accent CTA — AAA) — Task 006, see note above
--color-accent-strong    #282442   (hover/active state) — Task 006, see note above

--color-dark-bg          #1a1a1a
--color-dark-text        #f2f1ef   (15.42:1 — AAA)
--color-dark-text-muted  #a8a5a1   (7.10:1 — AAA)
```

**Accessibility note on borders**: `--color-border` against `--color-bg`/`--color-surface` measures ~1.3:1, well under the WCAG 2.2 SC 1.4.11 non-text 3:1 minimum. This is intentional for decorative dividers (matches "subtle 1px neutral lines" above) but means a border must never be the *only* affordance for a required control boundary — focus states use `--color-accent` instead (10.86:1 on bg / 9.85:1 on surface, recalculated Task 006), which is what `global.css`'s `:focus-visible` rule relies on — except inside `.section--dark`, which overrides to `--color-accent-on-dark` (see Task 006 note above) since the base accent measures only ~1.47:1 against the dark background.

## Dark sections

Use rarely.

Longevity is a good candidate.

A dark section should be a deliberate rhythm change, not a repeated pattern.

## Borders / radius / shadows

Borders:

subtle 1px neutral lines.

Radius:

small and restrained, roughly 2–8px direction.

Shadows:

none by default.

Use minimal depth only where required for screenshot separation.

**Reviewed (Task 006)**: `--radius-sm` (2px) / `--radius-md` (4px) already support the locked direction without change — every diagram/system-object radius the exploration used lives inside SVG `rx` values, not CSS tokens, and every production surface primitive added by Task 006 (`.panel-technical`, `.surface--tonal`) reuses `--radius-md` directly rather than needing a new value. The locked direction's "small-radius technical containers are allowed" allowance is scoped to diagram objects (see "Art Direction Lock" above); general site radius stays exactly as calibrated in Task 004A/004B.

## Card policy

Content is not automatically a card.

Do not turn:

- quotes;
- services;
- process steps;
- statistics;

into floating rounded cards by default.

Prefer:

- typography;
- grid;
- whitespace;
- borders;
- separators.

## Buttons

Primary CTA:

clear rectangular/low-radius button.

Secondary actions:

text links where appropriate.

Hover:

- arrow motion;
- underline/reveal;
- subtle background transition.

No glow.

## Navigation

Clean and spacious.

Sticky behavior is allowed if subtle.

Dropdown should be minimal.

## Hero

Typography-first.

No required hero image, stock photo, laptop mockup or dashboard.

## Problem section

Editorial quote composition.

Controlled asymmetry on desktop.

Linear readable order on mobile.

## Engineering diagrams

Use:

- text;
- thin lines;
- minimal accent.

No 3D illustrations.

## Screenshot treatment

Real UI is evidence.

Modern UI:

- large;
- sharp;
- minimal framing.

Legacy UI:

- preserve visual truth;
- contextualize with metadata;
- do not fake-modernize.

## Case study teaser

Use editorial composition rather than portfolio cards.

Example structure:

```text
CASE / 01

Egy üzleti rendszer,
amely együtt nőtt
a vállalkozással.

XX+ YEARS
ACTIVE

[REAL SOFTWARE]
```

## Longevity

Signature visual language:

large numbers + engineering metadata.

Example:

```text
XX+
YEARS

OLDEST ACTIVE CLIENT SYSTEM
```

## Timeline

Example:

```text
200X ───── SYSTEM LAUNCH
 │
20XX ───── ERP CHANGE
 │
2026 ───── ACTIVE
```

Use verified years only.

## Tardify

ARTIT section structure + real Tardify UI.

Do not restyle the Tardify product into an ARTIT mockup.

## Human presence

Use real person/people when appropriate.

Avoid generic team/meeting stock photography.

## Motion

Interaction:

150–250ms direction.

Content reveal:

subtle opacity/translate/clip.

Explanatory motion:

diagram/timeline only when it improves understanding.

Never:

- scroll hijacking;
- cursor gimmicks;
- 3D device motion;
- endless floating objects;
- loading intros;
- excessive parallax.

Respect `prefers-reduced-motion`.

## Responsive

Mobile is not compressed desktop.

Semantic DOM order must remain correct.

Desktop horizontal diagrams may become vertical on mobile.

## Anti-patterns

DO NOT use:

- gradient orbs;
- aurora backgrounds;
- glassmorphism;
- glowing borders;
- neon tech aesthetic;
- fake terminal;
- code rain;
- giant custom cursor;
- decorative random grid background;
- floating cards;
- excessive rounded cards;
- pills everywhere;
- tech logo wall;
- stock developer photography;
- fake dashboards;
- fake metrics;
- fake testimonials;
- generic abstract 3D objects;
- 3D laptop/device mockups;
- excessive dark/light alternation;
- generic SaaS feature grids;
- AI-startup visual clichés.

**Added (Task 007A — page-wide communication grammar)**:

- floating quotes with no diagnostic structure;
- the same default two-column text block reused as every section's only visual idea;
- process/progression steps presented as disconnected generic cards;
- proof reduced to portfolio tiles;
- a dark section used only as a visual break, not a deliberate rhythm moment;
- Tardify reduced to a plain text aside with no owned-system evidence;
- the operating accent restricted to CTA/eyebrow only, disappearing from structural grammar elsewhere;
- copying the full System Map into every section that wants a diagram;
- decorative engineering marks with no semantic or indexing role.

## Semantic token architecture — implemented (Task 004B, extended Task 006)

The token names below are implemented in `src/styles/tokens.css`. Actual values are documented inline in the "Typography" and "Color" sections above; see also `DOC/09-TECHNICAL-ARCHITECTURE.md`.

```css
--color-bg;
--color-surface;
--color-text;
--color-text-muted;
--color-border;
--color-accent;
--color-accent-strong;
--color-accent-tint;        /* Task 006 */
--color-accent-on-dark;     /* Task 006 */
--color-status-success;     /* Task 006 */

--color-dark-bg;
--color-dark-text;
--color-dark-text-muted;

--space-xs;
--space-sm;
--space-md;
--space-lg;
--space-xl;
--space-2xl;
--space-section;
--space-section-lg;

--radius-sm;
--radius-md;

--font-sans;
--font-mono;

--text-display;
--text-h1;
--text-h2;
--text-h3;
--text-lead;
--text-body;
--text-small;
--text-meta;

--leading-tight;
--leading-snug;
--leading-normal;
--leading-relaxed;

--tracking-tight;
--tracking-normal;
--tracking-wide;

--content-reading;
--content-standard;
--content-wide;
```

`--space-2xl` and the `--leading-*`/`--tracking-*` roles were added during Task 004B implementation — real composition (dark-section rhythm, display vs. body line-height/tracking behavior) demonstrated a genuine need for them, consistent with this document's "add one or two additional levels if real composition requires them" allowance. `--space-section-lg` was added in Task 004C once browser inspection showed a single section-spacing value couldn't serve both ordinary and major/editorial sections well. `--text-xs`/`--text-sm` from the original direction were renamed to `--text-meta`/`--text-small` to match their actual semantic roles once implemented.

Token names should describe roles, not literal values.
