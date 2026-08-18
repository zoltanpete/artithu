# Task 006 — Production Design System Integration

## 1. Context and objective

Tasks 005C–005D completed the ARTIT visual-direction exploration. **A4.3.3 is APPROVED as the Art Direction Lock**, canonically documented in `DOC/07-DESIGN-SYSTEM.md`.

Approved language:

> **Swiss / Scandinavian restraint × digital systems engineering × editorial typography × structured data visualization**

The design should communicate:

> **„Értjük a komplexitást, átlátjuk a káoszt, és letisztult struktúrává formáljuk.”**

Task 006 is the bridge from the approved experiment to the production design system.

**This is not another exploration task and not the homepage implementation.**

The core discipline is:

> **Extract the system, not the screenshot.**

By completion, production tokens/primitives and `/design-foundation` should express the approved direction cleanly enough that Task 007 can build the homepage without copying prototype CSS.

---

## 2. Read and audit first

Before editing, inspect at minimum:

- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
- `DOC/12-ASSET-STRATEGY.md`
- `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`
- `src/styles/`
- `src/components/`
- `src/layouts/BaseLayout.astro`
- `src/pages/design-foundation.astro`
- approved reference `src/pages/art-direction/a4-3-3.astro`
- current production `/`

Identify explicitly:

1. which locked A4.3.3 decisions already exist in production;
2. which are missing;
3. which prototype rules are one-off composition details and must **not** become global abstractions.

Do not assume prototype CSS should be copied.

---

## 3. Scope

### In scope

- production design tokens;
- foundational/global CSS where justified;
- existing foundational components;
- small reusable primitives where clearly justified;
- `/design-foundation`;
- documentation;
- accessibility, contrast and responsive validation.

### Out of scope

- full homepage implementation;
- production Hero composition;
- production Problem/Decision sections;
- service/case-study pages;
- final homepage System Map content/geometry;
- copy rewriting;
- new visual exploration;
- new fonts;
- Tailwind/component/animation libraries;
- new dependencies unless genuinely unavoidable (expected: none).

Do not create A4.3.4 and do not modify historical prototypes.

---

## 4. Colour-system migration

Task 005D locked **Ink / Deep Blue-Violet** as the ARTIT operating/brand accent, superseding the old green brand-accent direction. Production still contains older green-era tokens/usages.

Migrate semantically, **not via blind hex replacement**.

Production roles must clearly distinguish:

### Brand / operating accent
Use the exact approved/documented Deep Blue-Violet / Ink values already in the repository. Derive no new hue.

### Tonal accent
Reuse approved/documented light violet / neutral-violet values for subtle technical surfaces and transformation/focus fields.

### Structural neutrals
Borders, guide lines, secondary relationships, quiet technical marks.

### Semantic status
Green may remain narrowly for success/healthy/resolved/active status. It is **not** the ARTIT brand accent.

Audit every old production accent usage and classify it as brand emphasis, interaction/focus, semantic status, or another role before remapping it. Pay particular attention to buttons, links, focus outlines, metadata, dark surfaces and status indicators.

Document the migration.

---

## 5. Contrast verification

After migration, verify actual contrast for at least:

- body on main light background;
- muted text on main background;
- accent text/link on main background;
- light text on primary accent CTA;
- focus indicator against surrounding surfaces;
- text on tonal-violet surface;
- dark-section text/background if retained;
- muted text on dark background if retained;
- semantic green wherever it visibly communicates status.

Do not reuse Task 004 figures without recalculation where colours changed. Record results and update accessibility documentation where relevant.

---

## 6. Typography reconciliation

Do not restart typography exploration.

Preserve the established font architecture unless existing documentation says otherwise. Reconcile production typography with the locked roles:

- editorial display/H1;
- H2;
- H3;
- lead;
- body;
- small metadata;
- technical/mono annotation.

Mono remains selective and must not take over navigation/prose. Display type can be assertive without turning every section into a billboard.

Only change existing typography tokens/rules if the locked direction demonstrates a real mismatch. Explain any change.

---

## 7. Spacing and layout

Retain the established normal vs major/editorial section rhythm unless there is a demonstrated reason to refine it.

Audit:

- reading/standard/wide containers;
- visual/Hero-capable width;
- section spacing;
- heading→lead rhythm;
- technical annotation spacing.

Do **not** encode A4.3.3 Hero coordinates as global tokens.

---

## 8. Geometry and surfaces

Production should support:

- precise structural geometry;
- small-radius technical containers where useful;
- restrained borders;
- tonal fields;
- no default decorative shadows;
- no generic oversized SaaS-card radius.

Audit current radius/surface tokens. Keep them if they already support the locked direction; otherwise make the smallest coherent refinement.

Avoid premature surface-variant taxonomies.

---

## 9. Buttons, links and focus

Update foundational interaction styles to the approved colour roles.

Verify primary CTA, secondary CTA if present, standalone/inline links, hover/active/focus and existing disabled states.

Requirements:

- primary CTA uses the modern Deep Blue-Violet operating accent, not conservative brand-green;
- focus remains strongly visible;
- links remain distinguishable beyond colour alone;
- motion remains restrained;
- reduced-motion behavior remains valid.

Do not redesign geometry without demonstrated need.

---

## 10. Engineering / construction primitives

The approved language includes a quiet engineering layer:

- guide lines;
- crosshairs;
- registration marks;
- coordinate labels;
- mono technical annotations.

Decide what deserves reusable production treatment. Prefer small composable tokens/classes/primitives over a giant `BlueprintSection` abstraction.

Possible concepts include a technical annotation style, construction-line role, crosshair primitive, coordinate-label style or technical border/surface role — implement only what is justified.

These are optional accents, subordinate to content. Do not decorate every section with a grid.

---

## 11. System Map architecture decision

A4.3.3 proved the System Map grammar as an ARTIT brand asset, but Task 005D deliberately did not lock its page-scoped implementation as production architecture.

Choose deliberately:

### Option A — preferred unless evidence says otherwise
Productionize only lower-level reusable visual primitives now; defer the actual `SystemMap` component until Task 007 provides real homepage content/geometry.

### Option B
Create a deliberately narrow reusable `SystemMap` foundation now because repository evidence shows the grammar is sufficiently stable.

Do **not** build a generic graph engine. No D3/React/canvas/visualization dependency. Do not create a schema intended to model every future diagram.

If choosing B, avoid hardcoding the exact A4.3.3 demo labels while keeping the abstraction narrow.

Whichever option is chosen, document:

- rationale;
- reusable pieces;
- composition-specific pieces;
- deferred decisions.

Do not silently copy the whole prototype into shared code.

---

## 12. Client JavaScript

Preserve the architectural principle:

> **No client JavaScript unless it creates clear user value.**

Do not add JS merely to demonstrate the design system.

If System Map interaction is deferred to Task 007, `/design-foundation` should remain static.

Zero client JS is the preferred Task 006 outcome.

---

## 13. `/design-foundation`

Update `/design-foundation` to demonstrate the **approved production foundation**, not the superseded green-era direction.

It should demonstrate enough to review:

- typography hierarchy;
- body/lead;
- mono metadata/technical annotation;
- colour roles;
- primary/secondary interaction treatments;
- links;
- light tonal accent surface;
- dark surface if retained;
- normal vs major section rhythm;
- container widths;
- geometry/borders;
- construction/engineering accent language;
- screenshot/evidence-frame primitive if still relevant;
- semantic status green in its narrow role.

Do **not** make it a second A4.3.3 Hero and do not copy the full System Map as decoration. If System Map primitives need demonstration, use the smallest useful static grammar sample.

Keep it `noindex`, generic and free of invented ARTIT/customer facts.

---

## 14. Existing components

Audit before creating anything new. Reuse/refine existing shared components where appropriate.

If old shared styling conflicts with the locked direction, update the production primitive instead of creating art-direction-specific duplicates.

Keep APIs simple.

---

## 15. Dark surfaces

Do not remove dark/editorial surfaces automatically merely because the approved Hero is light.

Audit whether they remain compatible. If yes, retain them and reconcile accent/link/focus roles with the violet system. If not, document the reason before removal.

Do not turn the site into a dark-theme product.

---

## 16. Screenshot / product evidence

System Map visuals and real product screenshots serve different purposes.

Preserve/refine restrained screenshot/evidence framing if useful for case studies/product proof:

- precise;
- minimal;
- not generic rounded SaaS mockup cards;
- no fake browser chrome unless genuinely needed;
- no fabricated UI.

Document the relationship: System Maps explain structure/process; real screenshots provide product evidence.

---

## 17. Accessibility and performance

Maintain or improve:

- semantic HTML;
- visible keyboard focus;
- sufficient contrast;
- reduced motion;
- no horizontal overflow;
- readable line lengths;
- responsive typography;
- self-hosted fonts/no external font request;
- minimal/no client JS;
- no unnecessary dependencies.

Real-browser inspect `/design-foundation` at:

- 390px
- 768px
- 1440px
- 1920px

Also inspect production `/` after shared token/style changes. Do **not** redesign it; Task 007 owns homepage implementation.

---

## 18. Documentation

Update only documents genuinely affected.

Expected candidates:

### `DOC/07-DESIGN-SYSTEM.md`
Productionized locked principles, token roles, accent migration, geometry/surfaces, engineering primitives, System Map architecture decision, fixture status.

### `DOC/08-COMPONENT-LIBRARY.md`
Only if shared primitives/components materially change.

### `DOC/09-TECHNICAL-ARCHITECTURE.md`
CSS organization changes, System Map implementation/defer decision, client-JS status.

### `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
New contrast results and relevant validation.

### `DOC/12-ASSET-STRATEGY.md`
Only if System Map graphics or screenshot evidence classification materially changes.

Do not update files just to mention Task 006.

Preserve the A–A4.3.3 historical exploration log. Do not rewrite old prototypes to use production tokens. A4.3.3 remains the approved reference snapshot.

---

## 19. Decision gates

Before adding a **token**:

> Is this a reusable semantic role, or merely an A4.3.3 composition value?

Before adding a **component**:

> Is this a stable reusable concept, or an abstraction of one prototype instance?

Before implementing page-specific work:

> Is this required for the production design system, or is it homepage composition?

If homepage composition, defer to Task 007.

Before adding construction marks/mono metadata:

> Does this communicate precision and structure here, or merely decorate empty space?

If decorative, omit it.

---

## 20. Validation

Run:

```bash
npm run check
npm run build
```

Use real Chromium/Playwright if already available; do not add it as a project dependency just for testing.

At 390/768/1440/1920 verify where applicable:

- horizontal overflow;
- clipping;
- external font/network requests;
- script presence;
- focus visibility;
- contrast;
- `/design-foundation` `noindex`.

Inspect production `/` at least mobile + desktop after shared changes.

---

## 21. Repository hygiene

- no commit;
- no push;
- no unrelated cleanup;
- no new dependency unless explicitly justified;
- no historical-prototype edits;
- do not track `dist/`, `.astro/`, `node_modules/` or screenshots;
- preserve unrelated repository state.

---

## 22. Required Completion Report

Return a detailed report containing at least:

1. Final status
2. Repository baseline
3. Pre-implementation audit findings
4. Locked principles translated into production
5. Colour-token migration
6. Old green usage audit and semantic remapping
7. Contrast results
8. Typography reconciliation
9. Spacing/layout reconciliation
10. Geometry/surface reconciliation
11. Button/link/focus updates
12. Engineering/construction primitives
13. System Map architecture decision — Option A or B, with rationale
14. Client-JS impact
15. `/design-foundation` changes
16. Dark-surface decision
17. Screenshot/product-evidence decision
18. Responsive verification
19. Accessibility verification
20. Performance/dependency impact
21. Production `/` regression check
22. Files changed
23. Documentation updates
24. Validation performed
25. Bugs/regressions found and fixed
26. Deferred items for Task 007+
27. Deviations
28. Repository state
29. Final checkpoint

---

## 23. Final checkpoint

Only if:

- approved language is represented by production primitives;
- old green brand semantics are cleanly migrated;
- `/design-foundation` demonstrates the approved foundation;
- accessibility remains sound;
- shared styles have not accidentally implemented the homepage;
- no unnecessary architecture/dependency was introduced;
- check/build succeed;

report:

> **PRODUCTION DESIGN SYSTEM INTEGRATED — READY FOR OWNER REVIEW BEFORE TASK 007**

Do not declare the homepage implemented or ready.

---

## 24. Final instruction

**Extract the system, not the screenshot.**

A4.3.3 proved what ARTIT should feel like.

Task 006 must make that feeling reproducible through deliberate production rules — without freezing incidental prototype geometry into the architecture and without starting Task 007 early.
