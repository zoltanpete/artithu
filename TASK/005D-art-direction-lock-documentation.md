# Task 005D — Art Direction Lock & Design Language Documentation

## Context

Task 005C and its refinement sequence explored the ARTIT visual direction through multiple isolated prototypes:

- A
- A2
- A3
- A4
- A4.1
- A4.2
- A4.3
- A4.3.1
- A4.3.2
- A4.3.3

The owner has now completed visual review of **A4.3.3** and explicitly approved it as the ARTIT art-direction lock.

This task is **documentation and closure only**.

Do **not** continue visual exploration.
Do **not** create A4.3.4.
Do **not** redesign or polish A4.3.3.
Do **not** modify production UI.
Do **not** extract shared components yet.

The purpose of this task is to turn the approved experiment into a precise, durable design-language decision that future production tasks can implement without having to reverse-engineer the prototype.

---

# 1. Final decision

Record the following decision explicitly:

> **A4.3.3 is APPROVED as the ARTIT Art Direction Lock.**

It is no longer merely an experimental candidate.

The exploration phase represented by Task 005C is complete.

A4.3.3 should remain available as the visual reference implementation for the approved direction, but it is **not automatically production code** and should not yet be refactored into shared components.

---

# 2. Core design proposition to preserve

The approved direction must communicate:

> **„Értjük a komplexitást, átlátjuk a káoszt, és letisztult struktúrává formáljuk.”**

The design should communicate this through its visual system rather than relying on the sentence being displayed literally.

The resulting ARTIT design language can be summarized as:

> **Swiss / Scandinavian restraint × digital systems engineering × editorial typography × structured data visualization.**

Document this as the conceptual foundation of the approved direction.

Avoid reducing the direction to generic labels such as:

- minimalist,
- SaaS,
- clean tech,
- dashboard UI,
- corporate website.

Those descriptions are insufficiently specific.

---

# 3. What is actually locked

Extract the **design principles** demonstrated by A4.3.3.

The documentation must distinguish these principles from implementation-specific measurements.

At minimum document the following.

## 3.1 Composition

- strong editorial hierarchy;
- generous negative space;
- asymmetric compositions rather than generic centred SaaS layouts;
- controlled density localized around meaningful information;
- deliberate tension between large typography and technical/system visuals;
- sections may vary compositionally rather than repeating the same container + heading + grid rhythm;
- visual complexity should resolve into clarity.

The approved Hero demonstrates this as:

**message / proposition → system transformation → structured outcome**

but this exact Hero layout is not mandatory for every page.

---

## 3.2 Typography

Document the approved typographic character:

- large, assertive editorial Sans Serif display typography;
- smaller, highly controlled body copy;
- monospace used selectively for technical/system metadata;
- mono must not take over navigation or normal prose;
- dramatic scale contrast is welcome;
- typography should feel engineered and editorial rather than decorative.

Record the currently used font choices where already established by the repository, but distinguish:

**locked typographic role/hierarchy**

from:

**current implementation/font token choice**.

Do not silently lock a font simply because the prototype currently uses it unless existing project documentation already treats it as locked.

---

# 4. Colour language

Document the approved colour behavior.

The current working visual language is based on:

- warm/light neutral canvas;
- near-black primary typography;
- restrained neutral borders and secondary paths;
- **Ink / Deep Blue-Violet** as the primary operating accent;
- violet tonal fields/rings used to represent transformation/focus;
- small semantic green indicators may be used narrowly for resolved/healthy status;
- semantic green is **not** the ARTIT brand accent.

Important:

Do not derive new colours in this task.

Use existing documented values/tokens where available.

Clearly distinguish:

- brand/operating accent,
- tonal accent,
- neutral structural colour,
- semantic status colour.

The system should remain predominantly restrained; colour gains power through scarcity.

---

# 5. Geometry and surface language

Record the approved geometry:

- predominantly sharp/precise geometry;
- small-radius technical containers are allowed where they improve legibility;
- avoid generic large-radius SaaS cards;
- no decorative shadows as a default visual device;
- borders, alignment, spacing and tonal fields should create structure;
- containers should feel like deliberately specified system objects rather than floating cards.

The design should not become dogmatically 90-degree-only if a subtle radius improves the system-map language.

---

# 6. Construction / blueprint layer

A4.3.3 established a secondary engineering layer consisting of devices such as:

- faint coordinate lines;
- crosshairs;
- registration/construction marks;
- tiny coordinate labels;
- measured alignment cues;
- technical mono annotations.

Document their purpose:

They communicate **engineering precision and designed structure**, not decoration or fake application telemetry.

Rules:

- they remain subordinate to actual content;
- they should normally sit at low contrast;
- they must not create interpretive noise;
- they must not imply fabricated live data;
- they may disappear or simplify substantially on small screens;
- use fewer meaningful marks rather than covering pages with a decorative grid.

---

# 7. System Map — ARTIT brand asset

This is the most important part of the documentation task.

Record the **System Map visual grammar as an approved candidate reusable ARTIT brand asset**.

Do not define it as merely "the Hero illustration".

Its grammar should be reusable later for:

- integrations;
- workflows;
- process explanations;
- case studies;
- service narratives;
- product architecture;
- before/after operational structure;
- other situations where ARTIT turns fragmented inputs into an intelligible system.

## 7.1 Semantic grammar

The core narrative is:

**heterogeneous inputs → transformation/process → structured outputs**

Inputs may represent fragmented operational sources such as:

- spreadsheets;
- email;
- isolated systems;
- manual data;
- APIs;
- other sources.

The transformation node represents ARTIT's ability to understand and structure the process.

Outputs represent coherent/resolved operational outcomes.

Do not treat the current labels as mandatory vocabulary for every future System Map.

---

## 7.2 Visual grammar

Document the reusable visual vocabulary demonstrated by A4.3.3:

- icon-bearing input nodes;
- explicit connection ports;
- curved paths;
- small directional arrowheads;
- primary / secondary / exception path hierarchy;
- a dominant transformation core;
- blue-violet transformation field / concentric tonal rings;
- structured output nodes;
- restrained semantic status markers;
- engineering/construction residue in the background;
- optional legend/specification plate where the path grammar needs explanation.

The exact number and position of nodes are **not locked**.

The grammar is locked; the current diagram is one instance of it.

---

## 7.3 Path hierarchy

Record the three-tier path language represented by the approved prototype:

1. **Primary route**
   - strongest visual emphasis;
   - represents the path currently being explained or highlighted.

2. **Secondary route**
   - visible but quieter;
   - communicates supporting system relationships.

3. **Exception / alternative route**
   - dashed treatment;
   - communicates non-standard, alternate or exceptional flow.

This hierarchy must not rely on colour alone.

Stroke weight/style, opacity and/or interaction state should reinforce the distinction.

---

## 7.4 Transformation core

Document why the central `FOLYAMAT` treatment matters.

The transformation core should:

- be the visual centre of gravity;
- feel structurally stronger than surrounding nodes;
- use the primary blue-violet operating accent;
- be supported by a subtle violet transformation field;
- read as the point where complexity becomes structure.

The concentric rings are not merely glow decoration.

They represent a **transformation/focus field** and should remain restrained enough to preserve the Swiss/editorial character.

The exact current dimensions and number of rings are implementation details, not immutable brand rules.

---

# 8. Interaction principles

A4.3.3 demonstrates that the System Map can be interactive.

Document the interaction language, without prematurely creating a production component.

Approved principles:

- the static composition must work first;
- interaction adds understanding rather than rescuing an unclear diagram;
- relevant nodes may be focusable/selectable;
- hover/focus may preview relationships;
- click/keyboard activation may persist a selected path;
- selection may subtly recompose/emphasize the system;
- motion should be restrained and functional;
- interaction must remain keyboard accessible;
- `prefers-reduced-motion` must be respected;
- state meaning must not depend on colour alone.

Do not prescribe A4.3.3's exact page-scoped JS implementation as the future production architecture.

---

# 9. Legend / specification plate

Record the role of the final legend treatment.

It should read as a small **engineering specification plate**, not ordinary explanatory body copy.

Its purpose is to:

- decode the path hierarchy when necessary;
- reinforce precision;
- support the System Map as a coherent visual language.

It is optional.

Do not require a legend beside every System Map.

On small screens it may be simplified or omitted if the diagram remains understandable without it.

---

# 10. Responsive philosophy

Document the responsive principle established during the exploration:

> Complex editorial/system visuals should be **recomposed**, not merely scaled down.

Desktop compositions may contain:

- richer node counts;
- construction marks;
- legends;
- larger transformation fields;
- more whitespace-driven asymmetry.

Mobile may deliberately use:

- fewer nodes;
- simplified annotations;
- reduced construction detail;
- a separately composed diagram.

The semantic story must survive even when visual complexity is reduced.

---

# 11. What is NOT locked

Create an explicit section preventing future tasks from over-interpreting the approval.

A4.3.3 approval does **not** automatically lock:

- exact Hero pixel dimensions;
- exact graph coordinates;
- exact node count;
- current SVG geometry;
- current page-scoped JS implementation;
- exact legend width;
- every individual spacing value;
- the exact number/radius of concentric rings;
- the exact labels used in the demonstration;
- A4.3.3 as a shared component architecture;
- identical System Maps on every page;
- every experimental detail from earlier A/A2/A3/A4 iterations.

These are implementation/reference details unless separately promoted into production tokens or components later.

---

# 12. Anti-patterns

Add a concise list of visual directions that would undermine the approved ARTIT language.

Avoid drifting toward:

- generic SaaS card grids;
- dashboard cosplay / fabricated telemetry;
- excessive rounded cards;
- excessive shadows;
- decorative grids with no structural purpose;
- neon/cyberpunk aesthetics;
- dark-mode "hacker terminal" clichés;
- gratuitous motion;
- arbitrary node graphs that do not encode a real story;
- dense technical metadata everywhere;
- colour used everywhere rather than strategically;
- perfectly symmetric layouts that remove editorial tension;
- generic stock-illustration treatment;
- UI screenshots used merely as decoration.

Real product evidence can still be used where appropriate; the point is not to ban screenshots, but to avoid relying on generic screenshot framing as the site's defining visual language.

---

# 13. Exploration history

Preserve the experimental history already documented in `DOC/07-DESIGN-SYSTEM.md`.

Do not delete the A/A2/A3/A4 progression.

Instead make the status unambiguous:

- previous directions remain historical exploration records;
- A4.3.3 is the approved outcome;
- earlier experimental notes must not appear to have equal current status.

If helpful, add a short decision summary/table at the beginning or end of the art-direction exploration section.

Do not rewrite history as though A4.3.3 had been the intended result from the beginning.

---

# 14. Documentation structure

Primary expected file:

`DOC/07-DESIGN-SYSTEM.md`

Update it so a future developer or design agent can answer, without opening every prototype:

1. What is the ARTIT visual direction?
2. Why was it chosen?
3. What is actually locked?
4. What is the System Map grammar?
5. Which aspects remain implementation decisions?
6. What should future pages feel like?
7. What visual traps should future work avoid?

Use the repository's existing documentation tone and structure.

Do not create unnecessary duplicate documentation if `DOC/07-DESIGN-SYSTEM.md` is the correct canonical location.

If another existing document already owns a particular decision, update/reference it only if genuinely necessary rather than duplicating content.

---

# 15. Prototype status

Update the A4.3.3 documentation from:

`EXPERIMENTAL / NOT APPROVED`

to an unambiguous approved state such as:

`APPROVED — ART DIRECTION LOCK`

Do not retroactively mark A4/A4.1/A4.2/A4.3/A4.3.1/A4.3.2 as approved.

A4.3.3 is the selected reference.

---

# 16. Code scope — documentation only

This task must not modify:

- `src/pages/art-direction/a4-3-3.astro`;
- production `/`;
- shared components;
- shared CSS;
- JavaScript;
- assets;
- dependencies.

No visual/code changes are expected.

If you discover an actual blocking documentation/code discrepancy, report it instead of silently changing production or prototype code.

---

# 17. Validation

After documentation changes:

Run:

```bash
npm run check
npm run build
```

Confirm that the repository still builds cleanly.

Do not introduce new dependencies.

Do not commit.

Do not push.

Clean generated build output if that is the established repository workflow.

---

# 18. Completion report

Return a concise but complete report containing:

1. final status;
2. files changed;
3. exact art-direction decision recorded;
4. conceptual design-language summary;
5. locked principles;
6. System Map brand-asset grammar recorded;
7. interaction principles recorded;
8. responsive principles recorded;
9. explicit "not locked" items;
10. anti-patterns recorded;
11. how prior experiments are now classified;
12. confirmation A4.3.3 code was untouched;
13. `npm run check` result;
14. `npm run build` result;
15. repository state;
16. final checkpoint.

The desired final checkpoint is:

> **ART DIRECTION LOCK DOCUMENTED — READY TO COMMIT**

---

# 19. Important final instruction

This task ends the visual-concept exploration phase.

Do not use the documentation task as an excuse to make "one last improvement" to A4.3.3.

The owner has approved the direction.

Your job now is to **capture the decision faithfully and make it durable** so subsequent work can move from exploration into production design-system implementation.
