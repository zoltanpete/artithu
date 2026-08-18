# Task 005C — Art Direction A4: Swiss Systems / Structured Complexity

## Context

We are continuing the ARTIT website art-direction exploration.

This task is an **experimental visual prototype only**. Do not modify or reinterpret the production design as approved.

Previous exploration established:

- A / Editorial Engineering was the strongest initial direction.
- A2 improved hero rhythm and software-evidence balance.
- A3 improved composition through asymmetry, overlapping evidence crops and more varied section rhythm.
- The later accent-color experiment showed that color alone does not solve the remaining issue.
- The cooler Ink / technical-blue family currently feels more appropriate than the previous conservative green, but no accent is locked.

The current prototype is competent, clean and credible, but still reads too much like a restrained B2B website.

The missing qualities are:

- freshness
- contemporary digital character
- harmony
- visual pull
- intellectual / technical confidence
- a stronger sense that ARTIT understands complex systems

The core design principle is:

> **„Értjük a komplexitást, átlátjuk a káoszt, és letisztult struktúrává formáljuk.”**

This is a design principle, not necessarily production copy.

---

## 1. Goal

Create a new isolated experimental direction:

# **A4 — Swiss Systems / Structured Complexity**

Target blend:

- approximately **65% High-Tech Editorial / Data Architecture**
- approximately **35% System Dashboard / Blueprint**

Do NOT make a dashboard-looking website.
Do NOT make a generic technology magazine.

Think instead:

> **A digital systems blueprint art-directed by an excellent Swiss design studio.**

The result should feel contemporary, precise, calm, premium, engineered, structured, visually intelligent, slightly unexpected and unmistakably digital.

The emotional target:

> There is a lot going on here, but these people clearly understand and control it.

---

## 2. This is NOT an A3 polish pass

Do not simply adjust spacing, colors or screenshot rectangles.

A4 must be a genuine new compositional experiment derived from A/A2/A3.

The central new principle is:

# **controlled complexity**

Premium minimalism must not mean removing almost everything.

Instead, demonstrate that relatively rich information can still feel extremely ordered.

Possible ingredients:

- fine structural lines
- nodes and connectors
- indices
- coordinates
- system labels
- process relationships
- restrained metadata
- asymmetrical information density
- precise alignment
- occasional tonal fields
- deliberate negative space

Every element must have a reason to exist.

Avoid decorative complexity.

---

## 3. Scope

Create:

`src/pages/art-direction/a4.astro`

Prototype only:

1. Header
2. Hero
3. Problem / symptoms section
4. Decision-section preview

Do not redesign the full site.

Do not modify production `/`.
Do not modify A, A2, A3, B or C.
Do not propagate A4 into shared production design tokens/components.

A4 remains experimental until owner approval.

---

## 4. Preserve the established foundation

Retain the successful qualities from A/A2/A3:

- light / warm-neutral overall canvas
- generous whitespace
- sharp geometry
- editorial hierarchy
- strong sans-serif typography
- restrained mono metadata
- asymmetry
- quiet confidence
- content-first structure
- crisp separators
- no generic card-grid aesthetic
- no gratuitous border radius
- no visual gimmicks
- no glassmorphism
- no generic SaaS blobs
- no fake application UI

The header/navigation may remain structurally familiar.

Important: the previously identified excessive gap below the navigation must remain corrected. Use the tighter A2/A3.1-style header-to-hero rhythm rather than returning to the earlier oversized whitespace.

---

## 5. Palette direction

Do NOT return to the previous conservative green as the primary ARTIT accent.

The owner explicitly feels that green is not an ARTIT color and reads too conservative.

Use a cooler **Ink / technical blue / blue-violet family** as the current working direction.

However:

- do not create a generic “blue SaaS” look
- do not flood large surfaces with saturated blue
- use accent sparingly and structurally
- typography, composition, contrast and system logic should create most of the identity

Keep the overall canvas predominantly light.

Dark graphite may appear as a local high-contrast field, but do not turn A4 into a dark website.

Avoid a cybersecurity / developer-tool / AI-platform aesthetic.

---

## 6. Typography

Combine:

### Primary
A clean contemporary grotesk / neo-grotesk sans-serif character.

Reuse the existing typography if appropriate; do not add an external font dependency merely for this experiment.

### Secondary
Monospace for:

- system metadata
- indices
- statuses
- process labels
- coordinates
- technical annotations

Mono must remain a secondary information layer.

Do not let the page become a terminal aesthetic or developer portfolio.

---

## 7. Editorial typography principle

The H1 should no longer feel merely like a large `<h1>` inside a standard website column.

Treat typography as part of the composition.

Keep the current production copy unless there is an exceptional reason not to:

**A szoftver alkalmazkodjon a vállalkozásához. Ne fordítva.**

Explore:

- deliberate line breaks
- scale relationships
- rhythm
- surrounding metadata
- alignment
- tension between large typography and small technical labels

The text itself should contribute to the “complexity → structure” story.

Do not use gratuitous typographic tricks.

---

# 8. HERO — major redesign

The Hero is the most important part of A4.

## 8.1 Remove the screenshot-placeholder concept

Do NOT use A3's large generic screenshot/evidence rectangle as the main visual.

Do NOT simply replace it with another empty rectangle.

The visual counterpart to the Hero copy must become an abstract but meaningful:

# **system architecture / process-flow composition**

It should visually demonstrate ARTIT's proposition.

Conceptually:

**multiple business inputs / disconnected entities → relationships become visible → structured process emerges → coordinated outputs**

Possible semantic ingredients:

- ÉRDEKLŐDÉS
- ÜGYFÉL
- PROJEKT
- FOLYAMAT
- MUNKALAP
- ADAT
- JÓVÁHAGYÁS
- SZÁMLÁZÁS

These are examples, not mandatory literal labels.

Use terminology appropriate to ARTIT's business-software context.

The graphic must not pretend to be a real customer system or fabricated product UI. It is a conceptual architecture graphic.

---

## 9. Hero system visual — design language

Explore a restrained system map using elements such as:

- thin rules
- connection paths
- small nodes
- numbered steps
- tiny mono labels
- status indicators
- process arrows
- coordinates / references
- grouped modules
- subtle alignment grid
- one or two deliberate interruptions of the grid

The visual should start with some degree of distributed complexity and resolve into clearer structure.

This should be perceptible without becoming a literal before/after infographic.

The graphic should feel:

- designed
- architectural
- premium
- abstract enough to remain timeless
- concrete enough to carry meaning

Avoid:

- fake dashboards
- meaningless fake charts/data
- glowing neon
- sci-fi HUD aesthetics
- circuit-board clichés
- excessive arrows
- generic flowchart-software appearance
- generic node-network wallpaper

The system visual must communicate, not decorate.

---

## 10. Optional motion

Static composition must work first.

Only if the static Hero is already strong, you may prototype extremely restrained desktop motion, for example:

- a subtle signal travelling through one connector
- a status node activating
- one line drawing once
- a very slow process-state transition

Rules:

- motion is not required
- respect `prefers-reduced-motion`
- no dependency
- no heavy JS
- no distracting loops
- no “look at our animation” behavior
- the design must remain complete with motion disabled

If motion does not clearly improve the concept, omit it.

---

## 11. Hero composition

Do not default automatically to a conventional:

`50% text | 50% visual`

Explore a more editorial relationship.

Text and architecture visual should feel **interlocked**, not like two independent SaaS columns.

Potential techniques:

- visual crossing an implied column boundary
- metadata connecting the two zones
- a process line entering/leaving the visual field
- asymmetric vertical starting points
- shared baseline relationships
- deliberate overlap without harming readability

The result must remain robust and responsive.

CTA hierarchy must stay clear and conversion-oriented.

---

# 12. Problem section — reinterpret symptoms as system evidence

Keep the existing content:

**Ismerős helyzet?**

**A legtöbb egyedi rendszer nem azzal kezdődik, hogy „egyedi szoftvert szeretnénk”.**

and all six existing symptoms.

But reconsider their visual treatment.

A3's dense/open 4+2 composition was useful. A4 should now integrate the systems language.

The statements should feel like **signals observed in an unhealthy system**, not generic cards or testimonials.

Possible notation:

`SIGNAL / 01`

or an appropriate Hungarian equivalent.

Potential composition:

- structured diagnostic field
- indexed observations
- restrained connectors
- relationships between symptoms
- one controlled high-density zone and one quiet zone
- subtle status/state treatment
- lines that organize rather than decorate

Do NOT make six identical cards.
Do NOT make a conventional timeline.
Do NOT make a monitoring dashboard.

The section should communicate:

> fragmented operational signals are being read as one underlying system problem.

---

## 13. Controlled density

A4 should intentionally test somewhat greater visual/information density than A3.

But density must be localized.

Useful rhythms could be:

**quiet → dense → quiet**

or:

**editorial statement → structured technical field → editorial conclusion**

Do not cover the whole page in grids and metadata.

Contrast between dense and sparse areas is essential.

The visitor should subconsciously experience:

1. complexity appears
2. structure emerges
3. clarity follows

---

## 14. Grid system

Introduce subtle Swiss/system-grid logic.

Possible ingredients:

- column divisions
- baseline relationships
- thin structural rules
- section coordinates
- edge labels
- alignment markers

The grid should mostly be **felt rather than advertised**.

Do not use a literal graph-paper background across the site.

Visible grid lines, if used, must be sparse and purposeful.

---

# 15. Decision preview

Keep the existing copy:

**Nem minden problémára kell egyedi szoftver.**

**Amire viszont igen, arra pontosan illeszkedőt építünk.**

Use this preview as the visual resolution of the sequence.

If Hero introduces a system and Problem shows fragmented signals, Decision should feel like arrival at **clarity**.

It may therefore be simpler and quieter.

Do not add another complicated diagram.

Avoid a page rhythm of:

diagram → diagram → diagram

Use contrast and restraint.

---

# 16. Desired emotional sequence

The first three sections should create:

### Hero — competence + curiosity
“These people think in systems.”

### Problem — recognition + analytical confidence
“They understand what operational disorder actually looks like.”

### Decision — relief + clarity
“They know when software is the answer — and when it isn't.”

This emotional sequence matters more than visual effects.

---

## 17. Freshness

The owner explicitly wants:

- fresh
- clean
- harmonious
- modern
- something that “pulls”

Freshness should come from:

- composition
- typography
- system relationships
- proportion
- controlled contrast
- contemporary information design

NOT from:

- trendy gradients
- giant rounded cards
- excessive animation
- blobs
- floating glass panels
- random 3D
- AI-generated decorative imagery
- fashionable SaaS clichés

---

## 18. Scandinavian / Swiss influence

Interpret this as principles, not imitation:

- reduction
- functionality
- typographic discipline
- structural honesty
- generous breathing room
- excellent proportion
- calm surfaces
- exact alignment
- confidence without ornament

Then add a contemporary digital layer through:

- data relationships
- architecture notation
- state
- process
- system metadata

This tension is central to A4.

---

# 19. Avoid these failure modes

A4 must NOT become:

### Developer portfolio
Too much mono, terminal language, code or black background.

### Cybersecurity website
Glowing nodes, dark maps, neon signals.

### Generic SaaS
Rounded cards, gradients, dashboard screenshots, feature tiles.

### Architecture studio
So abstract and restrained that the software/digital nature disappears.

### Brutalist design
Oversized type and hard grids used merely for aggression.

### Bloomberg terminal
Information density without emotional breathing room.

### Technical documentation
Correct but visually dead.

### Decorative network graphic
Pretty nodes and lines with no conceptual relationship to ARTIT.

---

# 20. Responsiveness

Verify at minimum:

- 390px
- 768px
- 1440px
- 1920px

The architecture visual must simplify intelligently.

Do not merely shrink the desktop diagram.

At narrower widths:

- reduce node count if necessary
- remove secondary annotations
- simplify connector paths
- preserve the core conceptual sequence
- keep labels readable
- avoid horizontal overflow
- allow the visual to become a vertical system flow if appropriate

Mobile must feel intentionally redesigned, not collapsed.

---

## 21. Accessibility

Maintain:

- WCAG AA contrast minimum
- semantic heading hierarchy
- visible focus states
- keyboard accessibility
- reduced-motion support if motion is used
- no essential meaning conveyed only by color
- legible mono labels
- sensible minimum font sizes

Do not sacrifice readability for technical aesthetics.

---

# 22. Technical constraints

Before implementation:

1. inspect existing A/A2/A3 experiments
2. inspect current shared design tokens/components
3. inspect `DOC/07-DESIGN-SYSTEM.md`
4. preserve production isolation

Prefer:

- CSS
- semantic HTML
- existing components
- minimal/no JS

Do not add a dependency unless absolutely necessary.
Do not introduce external font requests.
Do not create fake product assets.

---

# 23. Visual review is mandatory

Do not judge A4 from source code alone.

Render and inspect real-browser screenshots at every required width.

Perform at least one genuine visual-review pass.

### Hero review

Ask:

- Does it immediately feel more distinctive than A3?
- Does the system visual communicate meaning rather than decoration?
- Does the composition feel editorial rather than two-column SaaS?
- Is the page still calm?
- Is there enough visual pull?
- Does the architecture visual compete with the H1?
- Does the accent feel modern and ARTIT-like?

### Problem-section review

Ask:

- Does it read as system diagnosis rather than a feature/card list?
- Is controlled complexity visible?
- Is it still easy to scan?
- Is the information hierarchy obvious?
- Does it avoid dashboard aesthetics?

### Whole-page review

Ask:

- Is there a clear rhythm between dense and quiet sections?
- Does the design feel harmonious?
- Does it feel contemporary in 2026 rather than like a minimal website from several years ago?
- Does it communicate precision without coldness?
- Does it feel like one coherent design system?

If the first implementation visibly misses these goals, refine it before reporting completion.

---

# 24. Documentation

Update `DOC/07-DESIGN-SYSTEM.md` with an **experimental A4 note only**.

Document:

- A4 concept
- how it differs from A3
- Swiss Systems / Structured Complexity principle
- system-architecture visual language
- controlled-complexity principle
- current working accent direction
- that A4 is **NOT APPROVED**
- that no production design decision has been made

Do not rewrite locked/approved sections as though A4 were final.

---

# 25. Validation

Run:

- `npm run check`
- `npm run build`

Also verify:

- no horizontal overflow
- all required viewport screenshots
- no accidental production diffs
- no external font/network dependency
- no unnecessary client JS
- accessibility basics
- reduced-motion behavior if applicable

---

# 26. Completion report

Return a structured completion report containing:

1. Final status
2. Repository baseline
3. A4 concept summary
4. What was retained from A3
5. What changed fundamentally from A3
6. Hero architecture concept
7. Meaning of the system visual
8. Problem-section diagnostic treatment
9. Controlled-complexity implementation
10. Typography / metadata system
11. Accent-color decision used for prototype
12. Page rhythm / emotional sequence
13. Responsive behavior
14. Accessibility/performance check
15. Files changed
16. Documentation updates
17. Validation performed
18. Deviations
19. Repository state
20. Final checkpoint

Final checkpoint must be:

**READY FOR OWNER VISUAL REVIEW**

unless there is a real blocker.

---

# Final design test

Before declaring the task complete, look at the rendered desktop Hero and ask:

> **Does this look like a company that takes messy, interconnected business operations and turns them into precise software systems?**

Then look at the whole prototype and ask:

> **Is this merely clean — or does it have an intelligent visual identity that pulls me in?**

If the answer to the second question is merely “clean”, the experiment is not finished.
