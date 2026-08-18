# Task 005C.3.1 — Art Direction A4.3.1: System Map Visual Refinement

## Context and goal

Continue the ARTIT art-direction exploration from A4.3. This is **refinement, not reinvention**.

Working principle:

> ARTIT understands complexity, sees through operational chaos, and turns it into clean, precise structure.

The desired language combines Scandinavian/Swiss functionalism, modern digital typography, engineering/blueprint precision, premium B2B editorial restraint, and a “living system map” that can become an ARTIT brand asset.

Two images accompany this task:
1. the current A4.3 browser screenshot — implementation baseline;
2. the generated target/reference — visual-quality target.

**Inspect both images before implementing.** Do not reconstruct the target from this text alone. Translate its visual grammar into robust HTML/CSS/SVG; do not blindly copy image-generation artefacts.

Create a new experimental iteration, preferably:
`src/pages/art-direction/a4-3-1.astro`

Do not modify A4.3, production `/`, or previous experiments.

## Preserve from A4.3

Retain production navigation/copy/CTA wording, warm light-neutral canvas, typography foundation, Ink/Deep Blue-Violet accent, left-copy/right-map Hero architecture, left→right system narrative, no fake application UI/data/status claims, small page-scoped JS, real HTML interactive controls, keyboard accessibility, `aria-pressed`, reduced-motion support, separate intentional mobile composition, and later sections structurally unchanged.

## Visual target

The system map must feel less like raw SVG and more like a deliberately designed premium ARTIT object:

**heterogeneous inputs → controlled transformation → resolved outputs**

It should feel precise, calm, engineered, alive and sophisticated — not like a monitoring dashboard or generic SaaS flowchart.

### Hero typography and rhythm

- Reduce the A4.3 H1 by **one restrained typographic step**. It must remain clearly primary but stop overpowering the map.
- Add slightly more breathing room between H1 → lead and lead → CTA.
- Visual target: roughly +8–12px and +6–10px respectively versus the current feel, using the existing spacing system where sensible.
- Do not inflate the overall Hero height unnecessarily.

### Input-node layout

- Keep inputs in a **vertical ordered stack**, never scattered.
- Increase vertical separation noticeably; A4.3 is too compact.
- Inputs should read as individual measured entities, not a menu/form.
- Preserve six-source vocabulary where appropriate: `EXCEL`, `E-MAIL`, `KÜLÖN RENDSZER`, `KÉZI ADAT`, `API`, `…ÉS MINDEN MÁS FORRÁS`.

### Icons

Replace weak/generic icons with a coherent custom inline-SVG icon family:
- EXCEL — recognizable spreadsheet/grid sheet; tiny restrained semantic green detail is acceptable.
- E-MAIL — envelope.
- KÜLÖN RENDSZER — linked/interconnected-system symbol.
- KÉZI ADAT — manual-entry/hand/cursor symbol.
- API — code brackets/integration.
- other sources — ellipsis/three-source-dots.

Icons must share stroke language, be optically balanced and legible at actual size, and not look like emoji or arbitrary library defaults. Add no icon dependency.

### Node containers

Keep/refine the small rounded containers:
- subtle border and surface separation;
- icon zone + label;
- good internal padding;
- restrained radius;
- no heavy shadow.

They are diagram entities, not form controls.

### Connection ports — required

Every input needs a small outlined circular connection port exactly at the node/path junction. The path begins from its centre. Ports should react subtly with hover/selection.

Outputs need equivalent clean connection ports.

**Measure alignment rather than eyeballing it.**

### Curved paths

Use graceful, related curves for all input→process and process→output relationships.

Preserve a static three-level grammar:
1. solid Deep Blue-Violet = `PRIMER ÚTVONAL`;
2. thin neutral = `SZEKUNDER ÚTVONAL`;
3. dashed neutral = `KIVÉTEL / ALTERNATÍV`.

This hierarchy must be understandable before interaction.

### Directional arrowheads — required

Add small precise arrowheads to incoming paths near the process side. They should explain direction without making the object look like a generic flowchart. Respect each path’s stroke hierarchy.

Use outward arrowheads after FOLYAMAT only if they improve clarity without clutter.

### Interaction across inputs

A4.3 effectively animates/selects only EXCEL. Fix this.

At minimum EXCEL, E-MAIL, KÜLÖN RENDSZER, KÉZI ADAT and API must all respond consistently to hover, keyboard focus and committed selection.

On focus/selection:
- emphasize node and port;
- emphasize its route;
- de-emphasize unrelated routes;
- subtly strengthen/respond in the FOLYAMAT core/rings;
- preserve restrained motion.

The “…ÉS MINDEN MÁS FORRÁS” source may remain deliberately quieter, but must not appear broken.

Preserve keyboard equivalence, correct `aria-pressed`, switching and deselection.

### FOLYAMAT core proportions

A4.3’s violet inner core is too squat/heavy.

Make it **slightly wider and lower**, a more elegant horizontal engineered module. The surrounding shell can remain larger.

Inside it, compose:

`FOLYAMAT   ⊙`

The circle-with-centre-dot comes **after** the word. It signifies transformation point / coordinate origin, not a button or fake status.

### Concentric violet rings — required

Restore the stronger earlier treatment, using the generated reference as quality target.

Use several precisely centred layers behind the core:
- very-low-opacity outer ring;
- slightly stronger intermediate ring;
- subtle violet inner wash;
- optional thin circumference strokes.

They should create depth and convergence without blur-heavy glow or sci-fi portal aesthetics.

### Outputs

Keep `JÓVÁHAGYÁS` and `SZÁMLÁZÁS` as resolved output entities.

Refine them into the same visual family:
- more horizontal breathing room;
- meaningful restrained icons if useful;
- clear connection ports;
- clean curved path attachment;
- calm resolved appearance.

### Semantic green status dots

The current green is too dull. Use a brighter, higher-energy/neon-like semantic green closer to the supplied reference.

It is **not a new ARTIT brand colour**. Keep it extremely narrow in role and only on resolved outputs. Never label these as live/active/online.

## Engineering / blueprint layer

A4.3 needs more subliminal precision.

Restore a restrained construction layer inspired by the supplied target:
- faint horizontal coordinate axis;
- faint vertical coordinate axis through/near FOLYAMAT;
- subtle dashed/dotted guides;
- tiny crosshair at system origin;
- corner registration marks;
- tiny coordinate labels such as `X / 01`, `X / 02`, `Y / 01`, `Y / 02`.

This is background grammar: noticed on a second look, not read as primary content.

**Do not restore the old prominent `01────────02` ruler.**

## Diagram legend — required

A4.3 is missing an important precision device.

Add a restrained legend below the graph with actual miniature stroke samples:
- `PRIMER ÚTVONAL`
- `SZEKUNDER ÚTVONAL`
- `KIVÉTEL / ALTERNATÍV`

Use the existing mono metadata language. Keep it small and subordinate.

This is not decoration: it proves the map has a deliberate visual grammar and reinforces ARTIT’s “we understand the system” character.

## System-map signature

Retain/refine beneath the map:

`BEMENETEK → FOLYAMAT → KIMENETEK`

`TISZTA. KAPCSOLÓDÓ. ÁTLÁTHATÓ.`

Treat legend + signature as one coherent lower annotation zone and a possible future ARTIT visual signature.

## Living-system behaviour

Static quality is more important than animation.

Hover/keyboard focus should emphasize the selected node/port/route, quietly suppress unrelated routes, and subtly strengthen the core/rings. Click/Enter commits selection, allows switching and deselection.

A restrained 2–5px nudge toward the core is acceptable.

Avoid spring/bounce, large graph re-layout, particles, continuous motion or neon-everywhere effects.

## Focus alignment — regression prevention

A4.1/A4.2 previously exposed HTML-overlay/SVG alignment bugs. Do not regress.

At every required width, verify every interactive button/focus outline actually surrounds its visual node. Use measured geometry if needed; do not trust percentages by assumption.

## Responsive requirements

Inspect 390, 768, 1440 and 1920px.

Desktop:
- map must feel like a major Hero asset;
- input stack breathes;
- reduced H1 no longer squeezes it;
- construction guides may extend beyond the cluster;
- no H1/map collision;
- no accidental clipping or horizontal scrollbar.

Mobile/tablet:
- do not simply scale desktop;
- retain the separately-composed approach;
- reduce node count if needed;
- preserve icons, ports, left→right meaning where feasible, primary path hierarchy;
- simplify guides/legend intelligently;
- ensure labels fit using real rendered measurements;
- preserve touch targets;
- zero horizontal overflow.

## Later sections

Do **not** redesign Problem/Decision/later sections. Tiny spacing compensation is acceptable only if Hero-height changes require it.

## Mandatory visual review

Judge from real rendered screenshots, not code.

At desktop explicitly ask:
- Is H1 still strong but less overpowering?
- Is H1→lead→CTA rhythm more relaxed?
- Do input nodes breathe vertically?
- Are icons meaningful and coherent?
- Are ports precisely aligned?
- Are curves elegant and arrowheads subtle?
- Does primary/secondary/exception hierarchy read statically?
- Is FOLYAMAT wider/elegant with `FOLYAMAT ⊙`?
- Do concentric rings add finesse?
- Are output green dots crisp and energetic but sparse?
- Are construction guides only second-look details?
- Does the legend make the map feel specified rather than decorated?

Final test:

> Does this feel like a distinctive ARTIT system language — a company that takes messy operational inputs and turns them into precise, connected, understandable systems?

If the answer is merely “cleaner,” keep refining.

## Validation

Run:
- `npm run check`
- `npm run build`

Also verify:
- zero horizontal overflow at 390/768/1440/1920;
- zero console errors;
- keyboard focus + Enter on all interactive nodes;
- correct `aria-pressed` switch/deselect;
- focus outlines aligned to visual nodes;
- `prefers-reduced-motion: reduce` collapses nonessential transitions;
- no external font request;
- no new dependency unless genuinely unavoidable (strong preference: none);
- no production-page regression.

Fix and honestly document any real visual/interaction bugs discovered during review.

## Documentation

Append an explicit **EXPERIMENTAL / NOT APPROVED** A4.3.1 section to `DOC/07-DESIGN-SYSTEM.md`.

Document:
- refinement vs. new direction;
- retained/changed elements;
- influence of supplied reference;
- node/icon/port/path/core/output grammar;
- legend semantics;
- construction guides;
- interaction;
- responsive behaviour;
- brand-asset assessment;
- bugs found/fixed.

Do not rewrite locked/approved documentation as if this experiment were final.

## Repository safety

- Do not modify production `/`.
- Do not modify A4.3.
- Do not modify earlier experiments.
- Do not commit or push.
- Avoid dependencies.
- Scope experimental styles/scripts to A4.3.1.
- Do not fabricate application screenshots, metrics, customer data, live status or product behaviour.

## Completion report

Return:
1. Final status
2. Repository baseline
3. A4.3.1 concept summary
4. Retained from A4.3
5. Changed from A4.3
6. Reference-image influence
7. Hero typography/rhythm
8. Input spacing/container treatment
9. Icon system
10. Connection ports
11. Paths/arrow hierarchy
12. FOLYAMAT core
13. Concentric rings
14. Outputs/status
15. Construction guides
16. Legend and semantics
17. Interaction across nodes
18. Static-quality assessment
19. Brand-asset assessment
20. Responsive behaviour
21. Accessibility/keyboard/reduced motion
22. Performance/JS/dependencies
23. Files changed
24. Documentation
25. Validation
26. Bugs found/fixed
27. Deviations
28. Repository state
29. Final checkpoint

Final checkpoint:

**READY FOR OWNER VISUAL REVIEW**

unless a genuine unresolved blocker remains.
