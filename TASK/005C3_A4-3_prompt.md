# Task 005C.3 — Art Direction A4.3: Living Blueprint / Refined System Map

## Context: new Claude session

This is a continuation of an existing ARTIT website art-direction exploration, but you should treat this prompt as self-contained. Do not rely on context from a previous Claude session.

The current working direction is **A4.2 — System Map as Brand Asset**. It is promising and the owner explicitly feels that the direction is now starting to “pull”. We are **not looking for a new art direction** in this task. We are refining the visual language of the Hero system map so it becomes more alive, premium, distinctive, and reusable as an ARTIT brand asset.

Two visual references should be provided with this task:

1. **Current A4.2 screenshot** — this is the implementation baseline. Preserve the parts of the page that already work.
2. **Generated system-map reference image** — this is a visual-direction reference. Study it carefully. The owner explicitly likes several concrete qualities from it, listed below. Do not copy it blindly or pixel-for-pixel; translate its visual qualities into the existing ARTIT design language.

If only one of these images is available to you, STOP before implementation and explicitly state which reference is missing. Do not reconstruct an unseen image from this prompt and then claim fidelity to it.

---

## 1. Objective

Refine A4.2 into **A4.3 — Living Blueprint / Refined System Map**.

The page should communicate:

> **“Értjük a komplexitást, átlátjuk a káoszt, és letisztult struktúrává formáljuk.”**

The system map should feel like the visual embodiment of that promise.

The target is a blend of:

- Scandinavian / Swiss functionalism,
- modern digital typography,
- engineering precision,
- high-end B2B editorial design,
- and a subtle sense of a living digital system.

It must **not** become a generic SaaS diagram, network visualization, dashboard, workflow-builder screenshot, or decorative tech graphic.

The key change from A4.2 is not more complexity. It is **more refinement, hierarchy, tactility, and life**.

Think:

**engineering drawing × premium digital object × living system.**

---

## 2. Owner feedback on A4.2 — treat as primary design input

The current A4.2 is structurally much better, but the graph is still:

- too raw,
- too diagrammatic,
- not alive enough,
- missing the visual finesse of the generated reference.

The owner specifically likes the following qualities from the generated reference and wants them brought into A4.3:

### Inputs

- Inputs should have **small meaningful icons**.
- Inputs should live inside **small, refined, lightly rounded containers** rather than being bare labels floating beside circles.
- Inputs should be arranged in a **controlled vertical sequence**, approximately one under another.
- They should feel deliberately composed, not randomly scattered around the canvas.

### Process / transformation node

- `FOLYAMAT` should be a refined container, visually related to the input/output components.
- The process should contain a **strong inner core / inner box using the main blue-violet accent**.
- It should clearly be the transformation point of the composition.
- It may have restrained layering/halo/depth, but avoid a glowing sci-fi orb.

### Outputs

- `JÓVÁHAGYÁS` and `SZÁMLÁZÁS` should also become refined container-like objects rather than plain outlined rectangles.
- They should belong to the same component family as inputs and process, while still communicating “resolved / structured output”.
- Existing restrained status semantics may remain if they improve the composition, but do not let semantic green compete with the ARTIT accent.

### Direction of flow

This is important:

**The visual story should flow LEFT → RIGHT, not TOP → BOTTOM.**

The preferred composition is approximately:

`messy / heterogeneous inputs → transformation / FOLYAMAT → clean structured outputs`

The graph should be understandable almost before reading its labels.

### Connections

- Replace the current raw straight/radial graph feeling with **elegant curved paths**.
- Curves should feel engineered, not organic decoration.
- Prefer controlled Bézier-like routing and visual rhythm.
- A few paths may use the blue-violet accent to establish hierarchy.
- Most paths should remain quiet and neutral.
- An exception or irregular source may still use a dashed treatment where semantically useful.

### Engineering / blueprint layer

The previous prominent `SEC / 01` and `01 — 02` ruler was correctly removed because it became content the user had to interpret.

However, A4.2 went slightly too far in the other direction.

The owner **misses the subtle construction/editorial lines that communicate engineering precision**.

Bring them back as a **subliminal visual layer**, not as readable interface content.

Possible devices:

- extremely faint horizontal/vertical construction lines,
- a local coordinate grid around the system map,
- small crosshair/tick intersections,
- extension lines that intentionally continue beyond nodes,
- one or two alignment guides crossing the composition,
- faint geometric registration marks.

They should feel like traces of the drawing process / system architecture — visible enough to add character, quiet enough that nobody asks “what does this mean?”.

Do **not** restore `SEC / XX`, large coordinate numbers, or a ruler requiring interpretation.

---

## 3. What is already working — preserve it

Do not redesign the entire page.

Retain from A4.2 unless a very small adjustment is necessary to support the new graph composition:

- current production navigation and wording,
- current Hungarian Hero copy,
- current CTA wording,
- current typography foundation,
- warm light-neutral page canvas,
- Ink / Deep Blue-Violet working accent direction,
- tight header → Hero spacing,
- generous whitespace,
- editorial hierarchy,
- Problem section structure and copy,
- Decision section structure and copy,
- overall complexity → structure → clarity narrative,
- no fake application UI,
- no fabricated product metrics/data,
- real HTML controls for interactive graph nodes,
- keyboard accessibility,
- `prefers-reduced-motion` handling,
- separate intentional mobile composition,
- zero production-page impact.

The **Hero graph is the main design task**.

Avoid spending the task polishing unrelated areas merely because they are available.

---

## 4. Desired Hero composition

Do not think of the Hero as “copy column + diagram column”.

The system map should feel integrated into the Hero canvas.

The text remains the primary entry point, but the graph should be large and confident enough to become the second thing the eye wants to explore.

### Suggested spatial narrative

On desktop, explore a composition along these lines:

- Hero copy occupies the left editorial zone.
- The system visual begins around the centre / column gap rather than waiting politely inside a right-hand box.
- Inputs occupy the left side of the graph itself in a controlled vertical stack.
- Curved connectors travel rightward toward the transformation core.
- `FOLYAMAT` sits around the visual centre-right and is the strongest node.
- Outputs continue further right in a cleaner aligned structure.
- Some construction paths/guides may extend toward or beyond the viewport edge.
- The graph may partially bleed toward the right edge; it does not need to fit inside an invisible rectangle.

The graph should feel **larger than its content bounding box** because paths, guides, and whitespace continue through the composition.

But do not obscure or compete with the H1.

---

## 5. Node design language

Develop a small coherent visual grammar rather than styling every node independently.

### Input node family

Inputs currently include vocabulary such as:

- `EXCEL`
- `E-MAIL`
- `KÜLÖN RENDSZER`
- `KÉZI ADAT`
- `API`
- optionally the quiet secondary idea `…ÉS MINDEN MÁS FORRÁS`

You may rationalize the exact visible set if needed for composition, but do not invent product capabilities.

Each primary input should have:

- a tiny icon or pictogram,
- a concise mono/system label,
- a subtle container,
- small-radius corners — **not pill-shaped and not generic SaaS-card rounding**,
- very restrained border/surface contrast,
- consistent internal spacing.

Icons should be minimal and custom-feeling. Prefer simple inline SVG / geometric symbols over icon-library aesthetics. No new dependency merely for icons.

The icon does not need to literally reproduce Excel/Gmail/etc. branding. In fact, avoid third-party brand-logo dependency. It should communicate categories such as table/data, mail/message, disconnected system, manual input, API/connection.

### Transformation node family

`FOLYAMAT` should be visually dominant.

Explore a layered construction such as:

- quiet outer shell,
- subtle structural border / registration detail,
- inner blue-violet core,
- white or light text in the inner core,
- perhaps a small mono descriptor outside/above/below if it improves hierarchy.

The accent core should feel intentional and premium, not like a CTA button dropped into a diagram.

### Output node family

Outputs should look resolved:

- aligned,
- calm,
- visually related to each other,
- containerized,
- perhaps slightly clearer/brighter than inputs,
- optional tiny status marker if restrained.

The difference between input and output should be conveyed through **alignment, path geometry, hierarchy and composition**, not just color.

---

## 6. Curved relationship system

This is one of the most important visual changes.

The paths should have hierarchy.

Consider three relationship levels:

1. **Ambient paths** — thin, warm-gray / neutral, low contrast.
2. **Critical path(s)** — Deep Blue-Violet, slightly stronger stroke.
3. **Exception path** — neutral or accent-tinted dashed path, used only where it has conceptual meaning.

The paths should enter and leave nodes cleanly. Avoid awkward line-node collisions.

Curves should generally travel from left to right. They may overlap construction guides, but should remain clearly distinguishable.

Avoid spaghetti. The goal is not to demonstrate network complexity through dozens of lines; it is to show that **multiple messy sources are resolved into an intelligible structure**.

---

## 7. Make the graph feel alive

A4.1/A4.2 already established a restrained interactive model. Keep interaction small and purposeful.

Do not turn the graph into a toy.

The graph should already look excellent and communicate its story in a static screenshot.

### Interaction goal

Interaction should reinforce:

> select one part of the system → its relevant relationships become clear → the visual subtly reorganizes attention around it.

The existing hover-preview / click-commit / keyboard activation model can remain.

But improve the visual response so it feels less like CSS state styling and more like a **living system map**.

Possible refinements:

- selected input subtly shifts a few pixels toward the process core,
- its curved path strengthens,
- unrelated paths/nodes recede slightly,
- the process core responds with a very restrained scale or surface change,
- relevant output becomes clearer,
- one or two path segments can appear to “resolve” toward the output.

Do not perform dramatic force-directed graph movement.

No physics engine.

No canvas/WebGL dependency.

No gratuitous particle animation.

The feeling should be:

**quiet recomposition, not animation demo.**

All meaningful state changes must work with keyboard controls and must remain understandable without motion.

`prefers-reduced-motion: reduce` must remove non-essential transitions/recomposition movement.

---

## 8. Static visual quality comes first

This requirement is critical.

Before implementing or judging interaction, inspect the graph with all interaction disabled / untouched.

Ask:

- Does the graph already pull the eye?
- Does it look like a deliberately designed ARTIT object rather than an SVG diagram?
- Is the left→right transformation story obvious?
- Is `FOLYAMAT` clearly the transformation point?
- Are the inputs heterogeneous but visually ordered?
- Are the outputs visibly more resolved?
- Do the construction lines add engineering character without becoming content?
- Is the blue-violet accent doing enough to create identity without flooding the page?
- Does it feel premium and precise rather than cold and sterile?

If the static answer is no, do not try to rescue it with animation.

---

## 9. Relationship to the supplied generated reference

Study the generated reference directly before coding.

We are deliberately borrowing its **visual qualities**, especially:

- small icon-bearing node containers,
- subtle rounding,
- layered transformation node,
- violet inner process core,
- horizontal flow,
- curved connections,
- orderly vertical inputs,
- clean outputs,
- faint engineering/construction geometry,
- fine visual hierarchy,
- calm but sophisticated color use.

However:

- preserve ARTIT's existing typography and page character,
- do not blindly recreate unrelated copy or decorative elements,
- do not introduce a generic “AI startup gradient” aesthetic,
- do not over-round everything,
- do not use glassmorphism,
- do not add shadows everywhere,
- do not make it look like a node-editor product UI.

The result should look as though **ARTIT itself invented this visual grammar**.

---

## 10. Color direction

Continue with the current Ink / Deep Blue-Violet working direction from A4.2.

Do not start another accent-color exploration in this task.

The main accent should gain presence primarily through the `FOLYAMAT` inner core and selected/critical relationships.

Use neutral surface variation for input/output containers.

If the existing semantic green status marker is retained, keep it extremely subordinate. It must not read as a second brand accent.

No rainbow graph.

No gradients unless the supplied reference demonstrates a very restrained tonal transition that is genuinely necessary; if used, keep it subtle and document why.

---

## 11. Corner-radius guidance

Previous directions intentionally used sharp geometry. The generated reference demonstrates that **a small amount of rounding can add refinement and life**.

For A4.3, controlled small-radius rounding is explicitly allowed for graph-node components.

This is a local graph grammar decision, not permission to round the entire website.

Aim for something like precision-machined digital components rather than soft consumer-app cards.

CTA/header/page containers should not be globally redesigned just to match the graph.

---

## 12. Mobile / responsive composition

Do not simply scale the desktop graph down.

A4.1/A4.2 already established that mobile needs a separately composed diagram. Preserve that principle.

On mobile:

- reduce the number of simultaneously visible input nodes if necessary,
- preserve left→right conceptual flow where feasible, or use a compact stepped horizontal flow if viewport width requires it,
- keep icons and labels legible,
- keep `FOLYAMAT` dominant,
- avoid tiny decorative construction geometry,
- simplify paths rather than creating visual spaghetti,
- maintain comfortable touch targets for interactive nodes,
- ensure focus outlines align exactly with their visual nodes.

Tablet should not feel like an awkward halfway shrink of desktop.

---

## 13. Accessibility

Retain the strong accessibility model already established in A4.1/A4.2.

Requirements:

- interactive nodes must use real semantic controls (`button` where appropriate),
- keyboard navigation and activation,
- visible and correctly aligned `:focus-visible` treatment,
- correct `aria-pressed` or equivalent state semantics,
- descriptive accessible labels,
- diagram-level accessible description (`role="img"` / appropriate labeling where useful),
- no information conveyed by color alone,
- sufficient contrast,
- `prefers-reduced-motion` support,
- interaction is enhancement; static meaning remains intact.

Remember the previously fixed A4.1 bug: HTML overlay buttons must remain geometrically aligned with the corresponding visual node at all required breakpoints.

Verify this numerically or via browser geometry, not just by eyeballing it.

---

## 14. Technical constraints

- Keep this an experimental page only.
- Do not modify production `/`.
- Do not regress A, A2, A3, A4, A4.1, A4.2, B, C, accent variants, or other experiments.
- No new dependency unless absolutely unavoidable — expected answer is no new dependency.
- Prefer inline SVG + CSS + small page-scoped JS.
- No canvas/WebGL/graph library.
- No external icon library.
- No fake application screenshot.
- No fabricated product functionality/data.
- Keep client JS small and page-scoped.
- Avoid premature extraction into shared production components. This is still validation of a brand grammar.

Create a new prototype route/file; do not overwrite A4.2.

Suggested route:

`/art-direction/a4-3`

Suggested file:

`src/pages/art-direction/a4-3.astro`

Follow repository conventions if they differ.

---

## 15. Problem and Decision sections

Do **not** redesign these sections in this task.

They are context for evaluating the Hero and whole-page rhythm.

Only make minimal adjustments if the refined Hero changes vertical rhythm enough to require spacing correction.

The intended sequence remains:

**Hero — rich / magnetic / controlled complexity**  
→ **Problem — recognition / structured diagnosis**  
→ **Decision — relief / clarity**

The Hero should be the visually richest moment on the page.

---

## 16. Required visual-review process

Do not judge this implementation from code alone.

Render and inspect real-browser screenshots at minimum:

- 390px
- 768px
- 1440px
- 1920px

Perform at least one genuine visual refinement pass after seeing the first implementation rendered.

Specifically inspect:

### Hero

- H1 vs. graph visual balance
- graph size and viewport bleed
- left→right flow clarity
- input stack rhythm
- icon legibility
- node-container refinement
- process-core hierarchy
- output alignment
- path curvature quality
- construction-guide subtlety
- accent distribution
- whether the graph feels integrated rather than placed beside the copy

### Interaction

Test:

- hover preview,
- mouse leave,
- click commit,
- switching selection,
- deselect,
- keyboard focus,
- keyboard activation,
- focus outline alignment,
- reduced-motion behavior.

### Responsive

Check:

- overflow,
- text/node collisions,
- icon/label collisions,
- path clipping,
- touch-target size,
- whether mobile is intentionally composed rather than scaled.

Do not declare completion until actual rendered screenshots answer the design question below.

---

## 17. Final design test

The key question is no longer simply:

> “Is this clean?”

Ask instead:

> **Does this feel like a company that can look at operational complexity, understand the relationships, and turn them into a precise, elegant system?**

And:

> **Could this system-map grammar become recognizable as ARTIT even when reused elsewhere without the logo immediately beside it?**

And finally:

> **Does it pull you in?**

If it is merely technically correct, clean, and structured, it is not finished.

---

## 18. Documentation

Update the existing experimental design-system documentation with an A4.3 note.

Document:

- what changed from A4.2,
- which qualities were deliberately taken from the supplied visual reference,
- the node visual grammar,
- the left→right narrative,
- the curved relationship hierarchy,
- the construction-guide treatment,
- interaction refinements,
- mobile composition,
- whether the brand-asset hypothesis became stronger or weaker after this iteration,
- any issues discovered during real-browser review and how they were fixed,
- explicit status: **EXPERIMENTAL / NOT APPROVED**.

Do not rewrite locked/approved design-system decisions as though A4.3 were approved.

---

## 19. Validation

Run the repository's established validation commands, including at minimum the equivalents of:

- `npm run check`
- `npm run build`

Also verify:

- zero horizontal overflow at required widths,
- zero console errors,
- no production-page regression,
- no new external font/dependency/network request,
- interaction state correctness,
- keyboard behavior,
- reduced-motion behavior,
- overlay-control/node alignment.

If you find a visual or interaction bug during review, fix it and document it transparently in the completion report.

---

## 20. Completion report

Return a structured completion report covering at least:

1. Final status
2. Repository baseline
3. A4.3 concept summary
4. What was retained from A4.2
5. What changed from A4.2
6. How the supplied generated reference influenced the implementation
7. Hero composition
8. Input-node visual grammar
9. `FOLYAMAT` transformation-node treatment
10. Output-node treatment
11. Curved relationship/path hierarchy
12. Construction-guide treatment
13. Interaction/recomposition model
14. Static visual-quality assessment
15. Brand-asset assessment
16. Responsive behavior
17. Accessibility / keyboard / reduced motion
18. Performance / JS / dependency impact
19. Files changed
20. Documentation updates
21. Validation performed
22. Bugs/issues found during visual review and fixes
23. Deviations
24. Repository state
25. Final checkpoint

End with:

**READY FOR OWNER VISUAL REVIEW**

Do not commit unless explicitly instructed elsewhere by the repository workflow.
