# Task 007C — Homepage Visual-Language Integration

## 1. Context

Task 007 implemented the real ARTIT homepage.

Task 007A then audited the documentation and found that the approved art direction was documented too heavily around the Hero/System Map while the **page-wide communication grammar** was under-specified.

Task 007B then separated localized content from presentation through the new YAML-based HU/EN content architecture.

The current state is therefore:

- homepage content architecture is implemented;
- localized YAML content is the source of truth;
- the Hero/System Map is already visually aligned with the approved A4.3.3 direction;
- page-wide communication grammar is now explicitly documented;
- several middle/lower homepage sections remain visually under-integrated;
- no new art-direction exploration is needed.

Task 007C must now:

> **Carry the approved ARTIT communication grammar through the complete homepage, without changing the content architecture, localization architecture, or Hero concept.**

This is a visual-language integration task.

Not a redesign.
Not a copywriting task.
Not a content-model task.
Not another A4.x exploration.

## 2. Primary objective

Refine the production homepage so that the Hero and every later section feel like parts of one coherent ARTIT visual language.

The page must communicate:

> **„Értjük a komplexitást, átlátjuk a káoszt, és letisztult struktúrává formáljuk.”**

The approved conceptual language remains:

> **Swiss / Scandinavian restraint × digital systems engineering × editorial typography × structured data visualization**

The goal is to eliminate the current drop in visual identity after the Hero.

## 3. Source-of-truth order

Before editing, read:

- `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
- `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Inspect:

- `src/components/homepage/Homepage.astro`
- `src/components/system-map/SystemMap.astro`
- `src/content/pages/home/content.yaml`
- `src/styles/foundation.css`
- `src/pages/index.astro`
- approved A4.3.3 reference
- current production homepage in a real browser

Follow this priority:

1. content architecture;
2. page-wide communication grammar;
3. locked design language;
4. production design system;
5. current homepage implementation.

Do not alter content semantics merely to simplify layout.

## 4. Critical scope rules

### Must remain unchanged

- YAML content architecture;
- localized content structure;
- current Hungarian copy;
- current translation-gating policy;
- current route architecture;
- Hero headline/copy;
- Hero System Map concept;
- production System Map component API unless a tiny non-breaking visual need requires adjustment;
- A4.3.3 prototype;
- all historical prototypes;
- Task 006 production design tokens unless a real stable system gap is discovered.

### This task may change

- homepage section markup/composition;
- homepage-specific CSS;
- small reusable visual primitives if genuinely justified;
- visual use of existing accent/technical grammar;
- section rhythm;
- section-specific decorative/semantic SVG primitives;
- restrained technical annotations.

### Do not do

- no new marketing copy;
- no new factual claims;
- no new sections;
- no new graph engine;
- no new dependency;
- no new font;
- no generic illustration library;
- no full-page redesign.

## 5. Core principle

Do **not** repeat the System Map everywhere.

Instead reuse the broader ARTIT grammar:

- technical indexing;
- diagnostic signals;
- ports/dots;
- restrained rules/paths;
- blue-violet structural accents;
- construction residue;
- mono annotations;
- evidence-record framing;
- connected progression;
- controlled density;
- tonal breaks;
- asymmetric editorial composition.

The homepage should feel related through **communication semantics**, not through visual repetition.

# SECTION-SPECIFIC WORK

## 6. Hero — do not redesign

The Hero is currently aligned.

Do not redesign it.

Only make a Hero change if required by a direct regression introduced elsewhere.

The Hero remains the richest technical section.

Its System Map is the primary brand asset and should remain visually dominant.

## 7. Problem section — highest priority

Task 007A found a genuine regression here.

The current production section lost the established diagnostic-signal grammar.

Rebuild it using the documented pattern:

- `JEL / 01`, `JEL / 02`, etc.;
- structured signal framing;
- visual spine / indexed relationship;
- connection dots;
- dense/open contrast;
- controlled tonal field;
- clear scan path.

The six existing Problem items must remain semantically identical and come from the existing YAML.

Do not turn them into six cards.

Do not make them floating quotes.

Do not recreate the exact historical A4/A4.1 markup mechanically.

Translate the locked principle into a clean production implementation.

### Desired feeling

> ARTIT recognizes operational disorder as a system of signals, not isolated annoyances.

The section should feel analytical, not alarmist.

## 8. Decision section — keep restraint

Task 007A confirmed that restraint is the correct communication principle here.

Do not over-design this section.

The existing decision/fork concept may remain if it helps, but refine only if needed.

Desired role:

- reduce visual density after Problem;
- present clarity;
- communicate structured choice;
- feel calm and decisive.

Use a small branching/decision primitive only if it stays subordinate to the copy.

Avoid making this another mini-System Map.

## 9. Work / evidence section

The current production version is partially aligned but visually too neutral.

Refine it toward an **evidence / record** communication mode.

Use the existing case structure and safe working titles only.

Potential grammar:

- `CASE / 01`, `CASE / 02`;
- technical index;
- horizontal rule/spine;
- restrained metadata slots;
- evidence-record framing;
- asymmetric editorial composition;
- space reserved for future verified evidence without fabricating it.

Do not invent:

- years;
- client names;
- company size;
- ERP names;
- outcomes;
- screenshots.

Do not turn the section into portfolio cards.

Desired feeling:

> These are documented system histories, not marketing tiles.

## 10. Longevity section

The current dark section has the right tonal break but insufficient ARTIT-specific technical residue.

Keep it sparse.

Add only a minimal supporting engineering layer such as:

- faint coordinate fragment;
- subtle construction line;
- restrained violet technical mark;
- mono annotation;
- one quiet structural device.

Do not clutter it.

Do not add unverified time/duration facts.

Desired feeling:

> Long-term engineering confidence.

Not:

> decorative black banner.

The section should remain one of the quietest, strongest rhythm resets on the page.

## 11. Tardify section

Task 007A classified the current text-only version as misaligned with the communication principle, but also correctly identified an asset/content gate.

Do not fabricate screenshots.

Do not invent product facts.

Instead make the section feel like **owned proof of engineering philosophy** through structure.

Possible grammar:

- owned-system framing;
- product-proof record;
- technical annotation;
- structured proof surface;
- restrained violet system cue;
- evidence placeholder only if honest and clearly non-fabricated.

If no real visual asset exists, the section must still feel intentional through layout and information structure.

Avoid:
- generic two-column text block;
- Tardify-as-footer-aside;
- fake product UI.

Do not make it look like tardify.hu.

## 12. Process section

Current implementation is correctly not a card grid, but it does not yet communicate **connected progression**.

Refine the four existing steps so they read as one system:

- numbered technical index;
- subtle connection/progression line;
- directional continuity;
- nodes/markers where useful;
- restrained blue-violet route emphasis;
- clear reading order.

Do not create a conventional chunky timeline.

Do not make each step feel independent.

Desired feeling:

> understanding → designing → building → evolving

as one connected process.

Also verify all Hungarian labels wrap naturally.

The previously observed `Továbbfejlesztjük` type of awkward break must not occur.

## 13. Senior / Who section

Task 007A classified this as aligned.

Keep it quiet and editorial.

Do not add technical decoration simply for consistency.

This section’s contrast with denser sections is part of the page rhythm.

Only refine spacing/alignment if needed after neighboring sections change.

## 14. Final CTA

Task 007A classified this as aligned.

Keep it minimal and confident.

Do not add:
- graph;
- decorative grid;
- extra proof;
- multiple CTA hierarchy.

The final CTA should feel like the calm conclusion of the page.

# PAGE-WIDE RHYTHM

## 15. Density sequence

Rebuild the homepage rhythm intentionally.

The page should feel approximately like:

### Hero
rich / technical / magnetic

### Problem
diagnostic / structured / medium-high density

### Decision
quiet / clarity

### Work
evidence / structured medium density

### Longevity
strong tonal break / sparse

### Tardify
owned proof / medium density

### Process
connected progression / medium density

### Senior/Who
quiet editorial trust

### Final CTA
minimal clarity

Do not let every section converge on the same density.

## 16. Accent continuity

Use the Deep Blue-Violet operating accent **structurally beyond the Hero**.

Valid uses may include:

- technical indexes;
- signal dots;
- active rules;
- progression route;
- evidence markers;
- small ports;
- mono labels;
- construction marks;
- key structural emphasis.

Do not flood sections with violet.

The accent should recur enough to create continuity, but scarcity should preserve its power.

Avoid restricting violet to:

- CTA buttons;
- eyebrows;
- Hero only.

## 17. Construction/engineering residue

Use technical construction grammar selectively beyond the Hero.

Good candidates:

- Problem;
- Longevity;
- Work;
- Process.

Use only where it reinforces meaning.

Do not:
- cover every section with a grid;
- add fake coordinates everywhere;
- use technical marks as empty-space filler.

The visitor should feel precision even when not consciously reading the marks.

## 18. Communication primitives, not component spam

Do not create a separate component for every decorative device.

A reusable primitive/component is justified only if it expresses a stable semantic idea.

Possible candidates if implementation supports genuine reuse:

- `TechnicalIndex`
- `SignalMarker`
- `ProgressionLine`
- `EvidenceRecord`

But do not create these mechanically.

Page-specific markup is acceptable when abstraction would be artificial.

Update `DOC/08` only for real reusable concepts.

# LOCALIZATION SAFETY

## 19. Preserve YAML/content architecture

All section content must continue to come from the structured YAML content layer introduced in Task 007B.

Do not move copy back into Astro templates.

Do not introduce locale-specific hardcoded strings except technical/internal constants where justified.

The new visual markup must consume:

- existing semantic IDs;
- existing localized text;
- existing arrays/objects.

No schema redesign unless a real semantic gap is discovered.

If a presentation need requires a new content field, stop and evaluate whether it is truly content or merely layout.

Prefer layout logic in code.

## 20. English readiness

Even though `/en/` is not yet public, do not create visual structures that depend on Hungarian text widths.

Pay attention to:

- labels;
- index + title rows;
- narrow metadata;
- process step headings;
- case headings;
- technical tags.

Use robust layout behavior.

Do not add English copy.

# ACCESSIBILITY / PERFORMANCE

## 21. Accessibility

Maintain:

- semantic heading hierarchy;
- readable line lengths;
- keyboard focus;
- contrast;
- no colour-only meaning;
- reduced motion;
- touch targets;
- no hover-only content.

If any new SVG or technical visual communicates meaning, provide accessible treatment appropriate to its importance.

Decorative SVGs should be hidden from assistive tech.

Do not add inaccessible pseudo-controls.

## 22. Performance

Expected result:

- no new dependency;
- no framework hydration;
- no animation library;
- no large raster asset;
- no external font;
- no unnecessary client JS.

Section visuals should be CSS/SVG/static-first.

Only existing System Map JS should remain unless a new interaction has clear value — likely none is required in this task.

Report final client-JS impact.

# RESPONSIVE REVIEW

## 23. Required viewport review

Inspect full homepage at:

- 390px
- 768px
- 1440px
- 1920px

Also inspect at an intermediate width if a section-specific layout suggests risk.

At each width verify:

### Problem
- indexed signals remain readable;
- dense/open structure collapses intentionally;
- no fake-card stack appearance.

### Work
- evidence records preserve hierarchy;
- working titles wrap cleanly.

### Longevity
- technical residue does not clutter mobile.

### Tardify
- owned-proof structure remains coherent without asset.

### Process
- progression remains visually connected;
- no awkward word break;
- step order remains obvious.

### Whole page
- no horizontal overflow;
- no clipping;
- visual rhythm survives;
- section transitions feel intentional.

# REAL-BROWSER VISUAL REVIEW

## 24. Mandatory review questions

Do not declare completion from code/build alone.

Ask:

### Whole page
- Does the visual language continue after Hero?
- Does each section have a distinct communication role?
- Does the page still feel calm?
- Is there enough structural violet recurrence?
- Does engineering grammar support meaning rather than decorate?
- Does the homepage still avoid generic SaaS rhythm?
- Does it feel like one ARTIT system?

### Problem
- Does it now feel diagnostic?
- Can the eye scan the six signals as structured evidence?

### Work
- Does it feel like evidence/record rather than portfolio cards?

### Longevity
- Does the dark section feel intentional and technical, not empty?

### Tardify
- Does it feel like owned proof even without screenshot?

### Process
- Does progression visually connect the four steps?

If any answer is weak, refine before completion.

# BUG POLICY

## 25. Actively search for regressions

Especially inspect:

- section overflow;
- dense/open collapse;
- broken signal index alignment;
- rule/dot drift;
- SVG clipping;
- weird word breaks;
- Process progression alignment;
- Tardify proof layout imbalance;
- dark-section contrast;
- accidental old-green usage;
- mobile stacking that turns everything into cards;
- YAML content accidentally duplicated in markup.

If found:

1. fix;
2. re-test;
3. document.

# DOCUMENTATION

## 26. Update only genuinely affected docs

Expected candidates:

### `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
Record implementation alignment with the communication-mode mapping.

### `DOC/07-DESIGN-SYSTEM.md`
Only if this task discovers a new stable communication rule beyond 007A.

### `DOC/08-COMPONENT-LIBRARY.md`
Only for actual reusable production components/primitives.

### `DOC/09-TECHNICAL-ARCHITECTURE.md`
If styling/component organization materially changes.

### `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
Record meaningful homepage validation findings if appropriate.

Do not rewrite documentation simply to narrate the task.

# VALIDATION

## 27. Required checks

Run:

```bash
npm run check
npm run build
```

Use real Chromium/Playwright if already available.

Verify:

- `/`
- `/design-foundation`
- `/404`
- any route affected by shared changes

Check programmatically where useful:

- horizontal overflow;
- clipping;
- console errors;
- external requests;
- script count;
- focus behavior;
- reduced motion;
- no accidental public `/en/` route if it remains intentionally gated.

# REPOSITORY HYGIENE

## 28. Rules

- no commit;
- no push;
- no new dependency unless absolutely unavoidable;
- no historical prototype changes;
- no YAML copy rewrite;
- no English marketing copy;
- do not track screenshots;
- preserve unrelated repo state.

# COMPLETION REPORT

## 29. Return

1. Final status
2. Repository baseline
3. Source-of-truth audit
4. Visual-language integration summary
5. Hero confirmation / changes
6. Problem diagnostic treatment
7. Decision treatment
8. Work/evidence treatment
9. Longevity treatment
10. Tardify owned-proof treatment
11. Process progression treatment
12. Senior/Who treatment
13. Final CTA treatment
14. Page-wide rhythm
15. Accent continuity
16. Construction/engineering grammar use
17. Reusable communication primitives/components created
18. YAML/localization architecture preservation
19. English-readiness considerations
20. Responsive verification
21. Accessibility verification
22. Performance/client-JS impact
23. Files changed
24. Documentation updated
25. Validation performed
26. Bugs found and fixed
27. Deviations
28. Repository state
29. Final checkpoint

Desired checkpoint:

> **HOMEPAGE VISUAL LANGUAGE INTEGRATED — READY FOR OWNER VISUAL REVIEW**

## 30. Final instruction

Do not make the homepage “more decorated”.

Make the meaning of each section **visually legible in the ARTIT language**.

The Hero says:

> we understand systems.

The rest of the homepage must now prove that same intelligence through:

- diagnosis;
- evidence;
- structure;
- progression;
- restraint;
- clarity.

Reuse the grammar.

Do not repeat the graph.
