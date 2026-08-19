# Task 007A — Art-Direction Documentation Gap Audit

## 1. Context

Task 007 implemented the real ARTIT homepage successfully from a structural and technical perspective.

Owner visual review exposed a specific issue:

- the **Hero successfully carries the approved A4.3.3 visual language**;
- several middle/lower homepage sections do **not** consistently carry the communication grammar discovered during the A4.x exploration;
- the page therefore falls back in places to a competent but generic editorial/corporate presentation.

This task is **not a visual redesign** and **not a homepage implementation task**.

This is a documentation and architecture audit intended to answer:

> **Did the ARTIT art-direction lock get documented strongly enough at page-wide communication-grammar level, or was too much of the approved language captured only as System Map grammar?**

The goal is to make the source-of-truth documentation durable enough that future implementation work does not accidentally reduce the approved ARTIT language to “violet + mono metadata + Hero System Map + clean editorial layout”.

---

## 2. Important constraint

Do not redesign anything.

Do not modify:

- production homepage layout;
- production CSS;
- production components;
- System Map;
- A4.3.3;
- historical prototypes.

This is an **audit + documentation correction task only**.

If a documentation gap exists, fix the documentation.
If no gap exists, demonstrate why and identify the actual source of implementation drift.

---

## 3. Primary objective

Audit the approved ARTIT visual-direction documentation against:

1. the A4-series exploration history;
2. the approved A4.3.3 reference;
3. the current production homepage;
4. section-specific communication patterns that emerged before final lock.

Determine whether the documentation fully captures the **page-wide communication grammar**.

If not, update the canonical documentation so future agents can answer:

- How should a Problem/diagnostic section communicate?
- How should a Decision/clarity section communicate?
- How should Work/evidence communicate?
- How should Longevity communicate?
- How should Tardify/owned-product proof communicate?
- How should Process/progression communicate?
- Which ARTIT visual devices can be reused outside the Hero without copying the full System Map?

---

## 4. Read before deciding

Read in full:

- `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`

Inspect:

- `src/pages/index.astro`
- `src/styles/foundation.css`
- `src/components/system-map/SystemMap.astro`
- `src/pages/art-direction/a4-3-3.astro`

Also inspect the relevant historical prototypes where section patterns evolved, especially:

- A
- A2
- A3
- A4
- A4.1
- A4.2
- A4.3

Do not mine historical prototypes for decoration. Extract only **stable communication ideas** that materially contributed to the approved direction.

---

## 5. Audit question #1 — Was the lock overly System-Map-centric?

Review `DOC/07-DESIGN-SYSTEM.md`.

Determine whether the lock disproportionately documents:

- Hero;
- System Map;
- node/path/core grammar;
- construction guides;
- technical annotation;

while under-documenting:

- diagnostic communication;
- decision logic;
- evidence presentation;
- progression/process;
- long-term engineering;
- product proof;
- section-to-section rhythm.

If yes, state it explicitly and identify the missing layer.

A useful distinction may be:

### Brand visual grammar
Reusable vocabulary:
- nodes;
- ports;
- paths;
- guides;
- mono annotations;
- violet transformation fields;
- engineering marks.

### Page communication grammar
How different content types express meaning:
- diagnosis;
- decision;
- proof;
- process;
- longevity;
- owned-product evidence;
- final clarity/action.

If supported by the exploration, formalize this distinction.

---

## 6. Audit question #2 — Section-specific communication patterns

### 6.1 Problem / diagnostic communication

Audit the evolution of:

- `JEL / 01`, `JEL / 02`, etc.;
- signal/diagnostic framing;
- vertical spine;
- connection dots;
- tonal field vs open field;
- structured observations instead of floating quotes.

Determine whether the stable principle is:

> operational disorder should be presented as recognizable **signals/diagnostic evidence**, not generic pain-point cards or freely scattered quotes.

Lock the principle, not the exact old layout.

### 6.2 Decision / clarity communication

Audit:

- branch/fork logic;
- “not every problem needs custom software”;
- controlled alternatives;
- reduced visual density after complexity;
- small decision-system / branching primitive;
- clarity after diagnosis.

Determine whether the stable principle is:

> Decision sections should visualize **structured choice / resolution**, not become another feature block.

Again, lock the role, not one SVG.

### 6.3 Work / case-study / evidence communication

Audit:

- `CASE / 01`;
- evidence-record feel;
- technical-document framing;
- structured proof;
- restrained metadata;
- screenshot/evidence relationship;
- non-card presentation.

Determine whether the stable principle is:

> Proof should feel like **evidence / record / documented system history**, not testimonial marketing or generic portfolio cards.

Do not invent case data.

### 6.4 Longevity / long-term engineering

Audit the dark-section role:

- strong tonal break;
- sparse statement;
- technical residue;
- restrained engineering layer;
- long-term confidence;
- rhythm reset.

Determine whether the stable principle is:

> Longevity should feel like a **high-confidence structural statement**, supported by minimal technical residue, not a decorative dark banner.

Do not introduce unverified duration claims.

### 6.5 Tardify / owned-product proof

Determine whether the stable principle is:

> Tardify should feel like **owned proof of engineering philosophy**, not a text-only aside and not a mirror of tardify.hu.

Look for:
- product/system evidence;
- structured proof;
- restrained technical framing;
- owned-system vocabulary.

Do not fabricate screenshots or product details.

### 6.6 Process / progression

Audit whether the approved direction implies more than a numbered four-column list.

Look for:
- progression line;
- linked steps;
- technical index;
- directional structure;
- process as connected system;
- visual continuity.

Determine whether the stable principle is:

> Process should read as **structured progression**, not four independent service cards.

Do not lock an exact horizontal timeline unless actually approved.

---

## 7. Audit question #3 — Page rhythm

Review whether documentation adequately captures the intended sequence of changing visual density and communication modes.

The A4 exploration repeatedly emphasized avoiding:

`container → heading → cards`

Determine whether `DOC/07` and/or `DOC/04` sufficiently explains:

- where visual density should increase;
- where it should reduce;
- how section roles differ;
- how violet/engineering accents create continuity;
- how not every section should use the same visual device.

If under-documented, correct it.

---

## 8. Audit question #4 — Accent continuity beyond Hero

Owner review observed that the production homepage loses much of the blue-violet/system language after the Hero.

Audit whether documentation clearly states that the operating accent and engineering grammar should recur **selectively** beyond Hero.

If supported, document rules such as:

- reuse accent through ports, indexes, rules, route emphasis, technical labels and key structural moments;
- do not flood sections with violet;
- do not restrict accent to CTAs and eyebrows only;
- use colour scarcity strategically;
- recurrence creates brand continuity.

Do not prescribe decorative accent placement without semantic purpose.

---

## 9. Audit question #5 — Communication grammar vs component grammar

Determine whether current docs accidentally encourage:

> “If System Map is not used, fall back to plain typography.”

If so, correct this.

Document that ARTIT’s visual language is broader than one component.

Possible reusable semantic visual concepts:

- diagnostic signal;
- decision fork;
- evidence record;
- progression path;
- technical annotation;
- transformation field;
- structured output;
- construction residue.

These are **communication primitives**, not necessarily code components.

Do not create components in this task.

---

## 10. Documentation strategy

Primary canonical file:

`DOC/07-DESIGN-SYSTEM.md`

If supported by the audit, structure may distinguish:

### A. Art Direction Lock
Already exists.

### B. Brand visual grammar
System Map / colour / typography / geometry language.

### C. Page-wide communication grammar
Potential subsections:
- Diagnostic / Signal
- Decision / Resolution
- Evidence / Record
- Longevity / Structural confidence
- Owned product / Proof
- Process / Progression
- Quiet clarity / CTA

### D. Section rhythm
How communication modes alternate.

### E. Reuse rules
How grammar is reused without copying the full System Map.

Do not duplicate `DOC/04` content architecture. Cross-reference it.

---

## 11. Homepage architecture documentation

Review:

`DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`

If it describes content purpose but lacks the now-approved communication-mode mapping, add concise implementation guidance.

For each homepage section, consider recording:

- content role;
- preferred communication mode;
- density level;
- relevant visual grammar;
- anti-pattern.

A table is acceptable if it fits the document, for example:

| Section | Communication mode | Visual principle |
|---|---|---|
| Hero | transformation/system | richest System Map grammar |
| Problem | diagnosis/signals | structured signal field |
| Decision | resolution/choice | branching/clarity |
| Work | evidence/record | case/evidence treatment |
| Longevity | structural confidence | sparse tonal break |
| Tardify | owned proof | product/system evidence |
| Process | progression | connected steps |
| Senior/Who | direct trust | quiet editorial |
| Final CTA | clarity/action | minimal |

Do not add mechanically if another structure is better.

---

## 12. Anti-pattern updates

If supported, add anti-patterns such as:

- floating quotes with no diagnostic structure;
- repeated default two-column text blocks;
- process steps as disconnected generic cards;
- proof reduced to portfolio tiles;
- dark section used only as visual break;
- Tardify reduced to a plain text aside;
- violet used only in CTA/eyebrow while disappearing from structural grammar;
- copying the full System Map into every section;
- decorative engineering marks with no semantic role.

---

## 13. What must remain unlocked

Do not over-correct.

Keep flexible:

- exact section layouts;
- exact SVG shape;
- exact number of markers;
- exact index placement;
- exact column count;
- exact panel geometry;
- exact route shape;
- exact amount of violet;
- exact dark-section artwork.

Lock **meaning and visual behavior**, not screenshots.

---

## 14. Production homepage diagnosis

Without editing production code, compare current `src/pages/index.astro` against the audited grammar.

For each section classify:

- aligned;
- partially aligned;
- misaligned.

Sections:

- Hero
- Problem
- Decision
- Work
- Longevity
- Tardify
- Process
- Senior/Who
- Final CTA

For every non-aligned section, explain **why in communication-grammar terms**.

Do not prescribe pixel-level fixes yet.

This diagnosis will become Task 007C input.

---

## 15. No code changes

This task must not modify:

- `src/pages/index.astro`;
- `src/styles/`;
- `src/components/`;
- prototypes;
- dependencies.

Expected changes are documentation only.

If code must change to perform the audit, stop and report the blocker.

---

## 16. Validation

Run:

```bash
npm run check
npm run build
```

Confirm no regressions.

No browser-visible changes should occur.

Do not commit.
Do not push.

---

## 17. Completion report

Return:

1. Final status
2. Files changed
3. Audit conclusion
4. Was the lock overly System-Map-centric?
5. Missing page-wide communication grammar found
6. Problem/diagnostic grammar conclusion
7. Decision/clarity grammar conclusion
8. Work/evidence grammar conclusion
9. Longevity grammar conclusion
10. Tardify/owned-proof grammar conclusion
11. Process/progression grammar conclusion
12. Page-rhythm conclusion
13. Accent-continuity conclusion
14. Communication-grammar vs component-grammar conclusion
15. `DOC/07` changes
16. `DOC/04` changes
17. Anti-pattern changes
18. What intentionally remains unlocked
19. Current production homepage section-by-section alignment diagnosis
20. Confirmation no code changed
21. `npm run check`
22. `npm run build`
23. Repository state
24. Recommended next task boundary

Desired final checkpoint:

> **PAGE-WIDE ART-DIRECTION GRAMMAR AUDITED AND DOCUMENTED — READY FOR LOCALIZATION/CONTENT ARCHITECTURE**

---

## 18. Final instruction

Do not use this task to make the production homepage prettier.

Answer:

> **What did we actually learn and approve during the A4-series exploration, and is that knowledge durable enough in documentation to guide the whole site — not just the Hero?**

If the answer is currently “no”, fix the documentation first.

Task 007B will address localization/content architecture.

Task 007C will later use the corrected grammar to repair homepage visual-language integration.
