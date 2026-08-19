# Task 007B — Localization + YAML Content Architecture

## 1. Context

Task 007 implemented the first production ARTIT homepage.

Task 007A then audited the art-direction documentation and corrected the missing page-wide communication grammar.

Before Task 007C visually refines the middle/lower homepage sections, the site needs one architectural correction:

> **ARTIT must be bilingual (Hungarian + English), and page copy should not remain hardcoded throughout Astro templates.**

The Tardify project already established a YAML-based localized-content pattern that worked well in practice. ARTIT should adopt the same architectural idea where appropriate:

- structured content outside page markup;
- localized `hu` / `en` values;
- schema validation;
- stable semantic identifiers;
- presentation/components separated from copy;
- no locale-dependent interaction logic.

This task is therefore primarily a **content architecture + localization infrastructure task**.

It is not a copywriting task.
It is not an art-direction task.
It is not Task 007C.

---

## 2. Primary objective

Build a production-ready bilingual content architecture for ARTIT, beginning with the homepage, while preserving the current approved Hungarian content and the existing visual/semantic structure.

The end state should make it possible to maintain Hungarian and English page content cleanly through structured YAML rather than duplicating whole page implementations or scattering locale conditionals throughout Astro markup.

The architecture should be simple enough for the current site, but extensible to later pages.

---

## 3. Critical principle

Separate these concerns:

```text
localized content
        ↓
semantic page/section structure
        ↓
visual communication grammar
        ↓
presentation/components
```

Do not mix them unnecessarily.

In particular:

- content YAML should contain **content**, not layout coordinates;
- System Map interaction must use stable IDs, not translated labels;
- localization must not duplicate the whole visual implementation;
- visual grammar documented in `DOC/07` must remain independent of language;
- future Task 007C must be able to redesign section presentation without rewriting the content architecture.

---

## 4. Read before implementation

Read in full:

- `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
- `DOC/05-COPY-DECK.md` or the current canonical copy document if renamed
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
- `DOC/13-*` if present and relevant to factual/content gating

Inspect:

- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/components/SiteHeader.astro` or current header component
- `src/components/system-map/SystemMap.astro`
- `src/content.config.ts` if it exists
- existing `src/content/` structure
- current routing structure
- current SEO/title/description implementation

Also inspect the **Tardify localized YAML implementation available in this repository/project if present**.

Specifically look for the proven pattern previously used for localized fields such as:

```yaml
title:
  hu: "..."
  en: "..."
```

and for any existing validation helpers around localized content.

Do not blindly copy Tardify code. Reuse the architectural pattern where it fits ARTIT.

If the Tardify implementation is not present in this repository and cannot actually be inspected, state that clearly and derive the smallest equivalent ARTIT implementation from the documented requirement instead of pretending to have reviewed it.

---

## 5. First decision — locale URL strategy

Before moving content, audit the current routing and document the appropriate URL strategy.

Preferred target unless repository constraints strongly argue otherwise:

```text
/       → Hungarian
/en/    → English
```

Hungarian remains the default/root locale.

Reasons:

- current production URLs remain stable;
- Hungarian is currently the primary published language;
- English receives explicit crawlable URLs;
- no client-side locale switching is required;
- pages remain statically renderable.

Do not implement locale through:

- query strings;
- localStorage-only switching;
- client-side content replacement;
- duplicated unrelated page trees;
- browser-language redirects that make URLs ambiguous.

If the repository already has a better established locale-routing convention, preserve it and document the reason.

---

## 6. Content model

Create or extend a content model capable of representing the homepage semantically.

The exact file organization should follow Astro/content conventions already used in the repository, but the intended shape is approximately:

```text
src/content/
  pages/
    home/
      content.yaml
```

or another equally clean canonical structure.

Prefer **one semantic content object with localized leaves** rather than duplicating the entire homepage into `hu.yaml` and `en.yaml`, unless the existing architecture gives a strong technical reason to separate locale files.

Example concept:

```yaml
hero:
  eyebrow:
    hu: "..."
    en: "..."
  title:
    hu: "..."
    en: "..."
  lead:
    hu: "..."
    en: "..."
```

This preserves structural parity and makes missing translations detectable.

---

## 7. Localized field primitive

Define/reuse a validated localized-text primitive.

Conceptually:

```ts
{
  hu: string;
  en: string;
}
```

It should be reusable across future page schemas.

Decide deliberately how to handle:

- required localized strings;
- optional localized strings;
- rich/multiline text if needed;
- arrays of localized objects;
- URLs that are shared vs locale-specific;
- labels used visually vs stable internal IDs.

Avoid an over-engineered generic i18n framework.

The site is currently two-language and static-first.

---

## 8. Translation completeness policy

This is important.

**Do not silently invent English marketing copy.**

Audit the repository for already-approved English equivalents.

For each homepage content field, classify English content as:

1. approved/existing;
2. safely structural/non-marketing;
3. missing approval.

For missing marketing copy, do not present an invented translation as approved final content.

Choose the cleanest repository-compatible mechanism, for example:

- explicit placeholder state in content;
- build-time validation with a documented temporary exception;
- English route withheld until required content is complete;
- or another solution that preserves truthfulness.

The architecture must make missing translation state visible rather than silently falling back to Hungarian on a supposedly English page.

If enough approved English content already exists, use it.

Report exactly what was found.

---

## 9. Homepage content migration

Move genuine homepage content out of `src/pages/index.astro` into structured content.

This includes, where applicable:

- eyebrows;
- headings;
- paragraphs;
- CTA labels;
- CTA destinations if content-owned;
- Problem signals;
- Decision copy;
- Work/case working titles;
- Longevity statement;
- Tardify copy;
- Process step labels;
- Senior/Who copy;
- Final CTA copy.

Do not move purely presentational constants into YAML.

For example, these normally belong in code/design rather than content:

- SVG coordinates;
- ring radii;
- CSS classes;
- animation timings;
- breakpoint values;
- geometry dimensions.

---

## 10. Stable semantic IDs

Repeated/interactive content items must have locale-independent stable IDs.

Example:

```yaml
systemMap:
  sources:
    - id: excel
      label:
        hu: "EXCEL"
        en: "EXCEL"
```

Interaction logic should depend on:

```text
excel
email
separate-system
manual-data
api
other
```

or similarly stable IDs — **not the displayed Hungarian or English string**.

The same applies to process steps, cases, signals or other repeated content where stable identity is useful.

IDs are technical identity.
Labels are localized presentation.

---

## 11. System Map localization

The production System Map must become localization-safe.

Audit every user-visible string inside `SystemMap.astro`.

Classify each as:

- localized content;
- universal technical term;
- visual signature;
- accessibility label;
- legend label;
- internal identifier.

Move user-facing copy to the content layer where appropriate.

Pay special attention to:

- source labels;
- output labels;
- `FOLYAMAT`;
- legend text;
- signature text;
- `aria-label`s / accessible descriptions.

Do not make SVG geometry depend on language-specific string length without testing it.

If English labels require different dimensions, solve this at the component/layout level rather than embedding geometry in YAML.

Do not regress the approved A4.3.3 Hero appearance in Hungarian.

---

## 12. Locale resolution

Implement one small, explicit locale-resolution mechanism.

Preferred API concept:

```ts
type Locale = 'hu' | 'en';
```

and a helper along the lines of:

```ts
localize(value, locale)
```

or an equivalent repository-native approach.

Avoid spreading expressions like:

```ts
locale === 'hu' ? value.hu : value.en
```

throughout every template.

Locale handling should be centralized enough to stay readable without becoming a framework inside the framework.

---

## 13. Page routing / implementation architecture

Avoid maintaining two manually duplicated homepage implementations.

Good patterns include:

- shared homepage renderer/component receiving locale/content;
- shared section components receiving localized content;
- route wrappers resolving locale and delegating to one implementation.

For example, conceptually:

```text
/              -> locale=hu -> shared homepage
/en/           -> locale=en -> shared homepage
```

The exact implementation should fit Astro cleanly.

Do not create two copies of the System Map or section markup just for translation.

---

## 14. Header/navigation localization

Audit all header/navigation user-visible strings.

Ensure the locale architecture can localize:

- navigation labels;
- primary CTA;
- mobile-menu labels;
- accessibility text where relevant.

Also define a minimal language-switch mechanism if appropriate.

Requirements if a switch is implemented:

- semantic link, not client-side state;
- HU page links to equivalent EN URL;
- EN page links back to equivalent HU URL;
- keyboard accessible;
- visually restrained;
- no new dependency;
- no flags as language labels.

Do not redesign the header.

If the broader site does not yet have English equivalents for all linked pages, document the routing constraint and avoid creating misleading broken locale links.

---

## 15. Metadata / SEO localization

Audit:

- `<html lang>`;
- page title;
- meta description;
- canonical URL;
- alternate language URLs / `hreflang`;
- Open Graph locale fields if already supported.

At minimum, the architecture must make language metadata correct per route.

Do not invent unapproved English SEO marketing copy.

If the EN page cannot yet be published because copy is incomplete, still prepare the architecture cleanly and document what remains gated.

---

## 16. Links and locale behavior

Audit internal homepage links.

Decide which are:

- locale-aware internal routes;
- language-neutral external routes;
- intentionally Hungarian-only destinations;
- unavailable in English.

Do not automatically prefix every URL with `/en/`.

Locale behavior must reflect whether the destination actually exists.

Avoid broken English navigation.

---

## 17. Schema validation

Use Astro's existing content schema mechanism if already present.

The schema should catch structural mistakes such as:

- missing required `hu`;
- missing required `en` when the field is approved/publishable;
- duplicate semantic IDs where practical;
- malformed arrays;
- missing required homepage sections;
- invalid URL/value shapes where relevant.

Do not build an elaborate custom validation engine if Zod/Astro content schemas already solve it.

The desired failure mode is:

> content mistake → clear build/check failure

rather than:

> content mistake → silently broken page.

---

## 18. Content helper ergonomics

Keep authoring pleasant.

A future editor should be able to open the homepage YAML and understand it without reading Astro code.

Avoid YAML polluted by:

- component names;
- CSS class names;
- SVG paths;
- layout coordinates;
- presentation booleans for every tiny detail.

Semantic content flags are acceptable only when genuinely content-driven.

---

## 19. Preserve factual gates

Task 007 deliberately avoided inventing:

- customer identities;
- exact longevity figures;
- case-study facts;
- screenshots;
- personal identity details;
- unsupported claims.

The YAML migration must preserve those gates.

Do not use localization as an excuse to fill missing content.

If something is intentionally a working title or placeholder, represent/document it honestly.

---

## 20. Preserve Task 007A communication grammar

This task must not flatten the newly documented page-wide grammar.

Even if current production sections are visually incomplete, preserve semantic distinctions in the content model.

For example:

- Problem signals should be an ordered signal collection, not one generic rich-text blob;
- Work cases should remain structured records;
- Process should remain ordered steps;
- Tardify should remain its own proof section;
- Decision content should remain semantically distinct.

This prepares Task 007C to improve presentation without restructuring content again.

---

## 21. Do not perform Task 007C

Do **not** in this task:

- rebuild Problem visuals;
- add `JEL/0X` spines;
- redesign Work;
- connect Process visually;
- add technical residue to Longevity;
- redesign Tardify;
- alter Hero art direction;
- add decorative engineering layers sitewide.

Only visual changes required directly by localization are allowed, for example:

- preventing translated text overflow;
- a minimal language link;
- necessary text-measurement/layout accommodation.

Keep these changes surgical.

---

## 22. Responsive verification

Test at minimum:

- 390px
- 768px
- 1440px
- 1920px

For every actually publishable locale route.

Check:

- no horizontal overflow;
- no clipped localized labels;
- no broken System Map labels;
- no broken header;
- no accidental layout shift caused by localization;
- no mobile-menu regression.

If English cannot yet be published because approved content is incomplete, test the architecture/content rendering through the safest available non-public mechanism and state exactly what was verified.

---

## 23. Accessibility verification

Verify:

- correct `lang`;
- keyboard navigation;
- language-switch semantics if added;
- System Map keyboard interaction remains intact;
- localized accessible names;
- no translated visible text disconnected from stale Hungarian ARIA text;
- reduced-motion behavior unchanged.

Do not regress the accessibility work already completed.

---

## 24. Performance constraints

Maintain:

- static-first architecture;
- no i18n dependency unless demonstrably necessary;
- no framework hydration;
- no client-side translation bundle;
- no external font requests;
- no locale JS required for normal navigation.

The preferred solution should add effectively zero runtime localization cost.

---

## 25. Documentation updates

Update the relevant canonical docs.

At minimum review/update:

### `DOC/09-TECHNICAL-ARCHITECTURE.md`
Document:

- supported locales;
- default locale;
- URL strategy;
- content source;
- locale resolution;
- route sharing;
- no client-side i18n requirement.

### `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
Document:

- homepage content now comes from structured localized content;
- semantic section structures remain intact;
- presentation remains separate.

### Copy/content documentation
Record:

- HU approval status;
- EN approval/completeness status;
- translation gaps;
- policy against silently invented/fallback marketing copy.

### `DOC/08-COMPONENT-LIBRARY.md`
If component APIs change for localized content, document them.

### SEO/accessibility docs
Update only where localization creates a real architectural rule.

Do not create documentation duplication.

---

## 26. File organization decision

Before implementation, inspect current conventions and choose the smallest coherent structure.

A likely target could resemble:

```text
src/
  content/
    pages/
      home/
        content.yaml
  lib/
    i18n.ts
  pages/
    index.astro
    en/
      index.astro
```

but this is **illustrative, not mandatory**.

If Astro Content Collections already provide a cleaner native structure, use that.

Explain the final choice in the completion report.

---

## 27. Migration quality check

After migration, inspect `src/pages/index.astro` and shared homepage rendering.

The test is:

> If the Hungarian homepage headline changes, should an editor normally edit YAML rather than Astro?

The answer should be yes.

Likewise for:

- CTA text;
- Problem signals;
- Process labels;
- System Map labels;
- section headings.

Astro should primarily describe structure and presentation.

---

## 28. Validation

Run:

```bash
npm run check
npm run build
```

Both must pass.

Also inspect the generated build output for:

- correct locale routes;
- correct `lang`;
- correct localized metadata where publishable;
- no unexpected client JS caused by localization;
- no duplicate/broken route output.

Use real-browser verification for the relevant routes and breakpoints.

---

## 29. No commit / no push

Do not commit.
Do not push.

Leave the repository ready for owner review.

---

## 30. Completion report

Return a structured report containing:

1. Final status
2. Repository baseline
3. Existing Tardify/localization pattern audit
4. Chosen ARTIT localization architecture
5. Locale URL strategy
6. Default locale
7. YAML/content file structure
8. Localized field/schema design
9. Translation completeness policy
10. Approved EN content found
11. Missing/unapproved EN content found
12. Homepage content migrated
13. Stable semantic-ID strategy
14. System Map localization changes
15. Locale-resolution helper/API
16. Shared homepage rendering strategy
17. Header/navigation localization
18. Language-switch behavior
19. Metadata/SEO localization
20. Internal-link locale behavior
21. Schema validation
22. Factual/content gates preserved
23. Task 007A semantic structures preserved
24. Confirmation Task 007C visual work was not performed
25. Responsive verification
26. Accessibility verification
27. Performance/runtime impact
28. Files changed
29. Documentation updated
30. Bugs found and fixed
31. Deviations / unresolved gates
32. `npm run check`
33. `npm run build`
34. Repository state
35. Recommended Task 007C starting point

Desired final checkpoint:

> **BILINGUAL YAML CONTENT ARCHITECTURE INTEGRATED — READY FOR OWNER REVIEW BEFORE TASK 007C**

---

## 31. Final instruction

Optimize for **durable separation of content, locale, semantics and presentation**.

Do not over-engineer localization.

Do not translate marketing copy merely to make the build look complete.

Do not duplicate pages just because there are two languages.

Do not let translated labels become technical identifiers.

Do not mix visual geometry into content YAML.

The goal is that Task 007C can now refine the homepage's visual communication grammar while treating localized content as a stable, validated input.
