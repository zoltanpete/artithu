# Task 008 --- Homepage Visual Lock & Production Baseline Freeze

## 1. Objective

Formally close the homepage implementation phase after owner visual
approval of the Task 007D.1 state.

This task is primarily a **lock / reconciliation / documentation task**,
not a redesign task.

The goals are:

1.  record the current production homepage as the approved visual
    baseline;
2.  reconcile documentation so future work treats the homepage as a
    reference implementation rather than an open exploration surface;
3.  perform one final production-quality regression audit;
4.  identify the next page-level implementation boundary without
    starting that implementation;
5.  leave the repository in a clean, commit-ready state.

The owner has visually reviewed the Task 007D.1 result and approved it.

> **The homepage visual direction is approved. Do not redesign it in
> this task.**

------------------------------------------------------------------------

## 2. Required starting point

Use the current repository state after Task 007D.1.

Before making changes, inspect at minimum:

-   `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
-   `DOC/07-DESIGN-SYSTEM.md`
-   `DOC/08-COMPONENT-LIBRARY.md`
-   `DOC/09-TECHNICAL-ARCHITECTURE.md`
-   `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
-   `DOC/12-ASSET-STRATEGY.md`
-   `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`
-   `src/components/homepage/Homepage.astro`
-   `src/components/system-map/SystemMap.astro`
-   `src/styles/foundation.css`
-   `src/styles/tokens.css`
-   `src/content/pages/home/content.yaml`
-   `src/content/nav/content.yaml`
-   `src/lib/i18n.ts`
-   `src/pages/index.astro`
-   `astro.config.mjs`

Also inspect the current rendered `/` in a real browser before
documenting the lock.

Do not use historical A4 prototypes as implementation source. They
remain historical design evidence only.

------------------------------------------------------------------------

## 3. Formal homepage visual lock

Add an explicit current-state lock to the appropriate documentation.

The lock must state that the production homepage after Task 007D.1 is
the approved homepage visual baseline.

Record the following as locked **principles / communication grammar**,
not frozen pixel coordinates:

### Overall art direction

The existing ARTIT direction remains:

**Swiss / Scandinavian restraint × digital systems engineering ×
editorial typography × structured data visualization.**

### Page-wide rhythm

The homepage demonstrates the intended rhythm:

-   Hero --- richest systems/engineering expression;
-   Problem --- diagnostic, dense → open;
-   Decision --- quiet tonal resolution;
-   Work --- evidence/record framing;
-   Longevity --- sparse dark interruption;
-   Tardify --- owned-proof/specification framing;
-   Process --- connected progression;
-   Senior/Who --- quiet editorial credibility;
-   Final CTA --- restrained close.

### Semantic visual rules

Lock the distinction established in Task 007D.1:

-   **membership/shared grammar** does not require physical connection;
-   **real progression/flow** may use connector geometry;
-   **conceptual alternatives/decisions** must not automatically become
    branching diagrams.

Explicitly record:

> **Do not draw a route unless there is a route to explain.**

### Accent usage

Deep Blue-Violet remains structural and scarce: - indexing; - connection
points; - real routes; - interaction/focus; - selected technical
residue; - primary CTA roles.

It must not become generic decoration.

### Surface hierarchy

Preserve the current intentional variation: - canvas; - tonal
field/band; - technical/specification plate; - one dark interruption.

Avoid turning the site into a sequence of generic bordered cards.

### Construction/technical residue

Construction marks, nodes, rules, spines, coordinates/indexes and
diagram language are semantic devices.

They should appear only when they clarify: - membership; - evidence; -
progression; - system structure; - technical framing.

------------------------------------------------------------------------

## 4. What is NOT pixel-locked

The lock must not make future responsive/content work brittle.

Explicitly state that the following remain implementation-responsive
rather than immutable:

-   exact pixel coordinates;
-   exact section heights;
-   exact line lengths;
-   exact wrapping at every viewport;
-   exact diagram coordinates outside the System Map's own current
    implementation;
-   exact spacing values where responsive composition requires
    adaptation;
-   exact number of visual marks on future pages;
-   future page-specific composition.

The homepage is a **reference implementation of the language**, not a
template that every page must visually clone.

------------------------------------------------------------------------

## 5. Preserve the approved Problem grammar

Document the final approved state clearly:

### Desktop

-   `JEL / 01–04`: vertical spine + nodes, dense tonal field;
-   `JEL / 05–06`: vertical spine + nodes, quieter open field;
-   no horizontal connector between the groups;
-   no branch semantics.

### Mobile

-   one continuous vertical diagnostic spine through all six signals is
    valid because the content becomes one vertical reading sequence.

The `4+2` split means **density**, not membership and not branching.

------------------------------------------------------------------------

## 6. Preserve the approved Decision grammar

Record that the Decision section intentionally contains **no fork glyph
or mini-diagram**.

Its communication is carried by: - typography; - supporting copy; - the
two conceptual directions; - tonal surface.

Do not reintroduce a branching device without a future explicit design
decision and genuine semantics.

------------------------------------------------------------------------

## 7. Preserve the approved Process grammar

The Process route is the positive counterexample:

-   steps are genuinely ordered;
-   the line/node route therefore communicates real progression;
-   this is an appropriate use of connector geometry.

Record this distinction so future agents do not generalize Process's
route treatment to unrelated sections.

------------------------------------------------------------------------

## 8. Homepage as reference implementation

Update the design/component documentation so future page work knows what
may be reused conceptually.

The homepage should now be treated as the production reference for:

-   technical labels / indexed metadata;
-   diagnostic spine/node grammar;
-   evidence-record framing;
-   restrained specification-plate treatment;
-   real progression route grammar;
-   tonal decision surface;
-   dark-section interruption;
-   System Map richness ceiling;
-   accent scarcity;
-   editorial whitespace and typography.

However:

> **Reuse the grammar, not the homepage layout.**

Future pages should derive their own composition from content meaning
and page architecture.

Do not create generic components merely because a pattern appeared once
on the homepage.

------------------------------------------------------------------------

## 9. Componentization audit

Perform a short audit of the current homepage implementation and answer:

1.  Which patterns are already legitimate shared primitives/components?
2.  Which patterns are still homepage-specific?
3.  Has any homepage-specific pattern now appeared often enough that it
    genuinely deserves extraction?
4.  Would extraction improve semantic consistency, accessibility, or
    maintainability --- or would it merely abstract CSS prematurely?

Default to **no new component** unless there is strong evidence.

Do not refactor working homepage markup just for architectural neatness.

If no extraction is warranted, document that conclusion.

------------------------------------------------------------------------

## 10. Localization architecture audit

Confirm the Task 007B architecture remains intact:

-   `/` is Hungarian;
-   `/en/` strategy remains defined but the route is still gated until
    approved English marketing copy exists;
-   homepage marketing content remains YAML-backed;
-   structural technical translations remain separated from unapproved
    marketing translation;
-   no Hungarian fallback silently substitutes missing English marketing
    copy;
-   language switcher does not link to a nonexistent equivalent page;
-   `html lang`, alternate metadata and locale helpers remain correctly
    designed.

Do **not** create `/en/` in this task.

Do not translate marketing copy.

Record any stale documentation discovered.

------------------------------------------------------------------------

## 11. Content-gap audit

Reconcile `DOC/13-CONTENT-GAPS-AND-VALIDATION.md` against the now-locked
homepage.

Clearly distinguish:

### Visual/design gaps

There should be no open homepage visual-design gap after this task
unless a real regression is discovered.

### Content/evidence gaps that legitimately remain

Examples may include only items actually supported by the current
repository/docs, such as: - approved English marketing copy; -
customer/case-study identity approval; - real screenshots/assets; -
longevity figures/claims; - person/team imagery or identity gates; -
structured data where still intentionally deferred.

Do not invent new gaps.

The existence of content gaps must not reopen the visual lock.

------------------------------------------------------------------------

## 12. Final browser regression audit

Run a real-browser production audit at minimum:

-   390px
-   768px
-   950px
-   1100px
-   1150px
-   1440px
-   1920px

Check the complete homepage, not only the recently edited sections.

Verify:

### Layout

-   zero horizontal overflow;
-   no accidental clipping;
-   no broken section transitions;
-   no obviously orphaned technical marks;
-   no unexpected card-like framing;
-   no accidental route/branch semantics.

### Hero/System Map

-   visual composition unchanged;
-   desktop interaction works;
-   mobile composition works;
-   no regression in labels/routes;
-   keyboard interaction remains correct.

### Problem

-   final Task 007D.1 grammar intact;
-   no desktop horizontal connector;
-   all six `JEL` signals visually belong to the same system.

### Decision

-   fork remains absent;
-   tonal quietness intact.

### Work

-   evidence framing intact.

### Longevity

-   remains the one sparse dark interruption.

### Tardify

-   partial-edge/specification treatment intact;
-   no generic card regression.

### Process

-   connected route intact;
-   `Továbbfejlesztjük` behaves as previously accepted across
    breakpoints.

### Senior/Who + Final CTA

-   remain quiet and structurally clean.

------------------------------------------------------------------------

## 13. Accessibility audit

Re-confirm:

-   one H1;
-   logical heading hierarchy;
-   keyboard navigation;
-   visible focus;
-   System Map keyboard parity;
-   `aria-pressed` behavior;
-   decorative marks hidden appropriately;
-   no color-only meaning;
-   reduced-motion behavior;
-   sufficient contrast for current production roles;
-   mobile navigation keyboard behavior.

Do not perform unrelated accessibility redesign.

If a genuine regression is found, fix it and document it.

------------------------------------------------------------------------

## 14. Performance/runtime audit

Confirm:

-   no new dependency;
-   no framework hydration introduced;
-   client JS remains limited to the intentional System Map behavior;
-   no external font request;
-   build output remains appropriate for the current static
    architecture.

Record actual results rather than assumptions.

------------------------------------------------------------------------

## 15. Documentation reconciliation

At minimum review and update as genuinely required:

-   `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
-   `DOC/07-DESIGN-SYSTEM.md`
-   `DOC/08-COMPONENT-LIBRARY.md`
-   `DOC/09-TECHNICAL-ARCHITECTURE.md`
-   `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
-   `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Do not churn documents merely to mention Task 008.

The important result is that a future agent reading the docs cannot
reasonably conclude that:

-   homepage art direction is still exploratory;
-   Problem should regain its horizontal branch connector;
-   Decision should regain the fork glyph;
-   every technical section needs connector geometry;
-   every page should clone homepage layouts;
-   English marketing content may be fabricated to activate `/en/`.

Historical exploration notes may remain, but current approved state must
take precedence clearly.

------------------------------------------------------------------------

## 16. Determine the next implementation boundary

After the audit, inspect the existing roadmap/documentation and identify
the **next logical page-level task**.

Do not implement it.

The completion report should state:

-   which page/page-family should come next;
-   why it is the correct next boundary;
-   which locked homepage grammar it can reuse;
-   which content/asset gates may affect it;
-   whether a short content-architecture/design audit is required before
    implementation.

Do not invent a roadmap if the repository already defines one. Follow
the documented project order where available.

------------------------------------------------------------------------

## 17. Code-change policy

Expected result: **documentation changes only**.

Production code should remain untouched unless the final regression
audit discovers a genuine bug.

If code changes are necessary: - keep them surgical; - explain the
regression; - do not use Task 008 as an excuse for further visual
polish.

Do not touch historical prototype files.

------------------------------------------------------------------------

## 18. Validation

Run:

``` bash
npm run check
npm run build
```

Report exact results.

Clean generated build output according to repository workflow.

No commit. No push.

------------------------------------------------------------------------

## 19. Completion report

Return a numbered report covering:

1.  Final status
2.  Repository baseline
3.  Source-of-truth audit
4.  Formal homepage visual lock recorded
5.  Locked page-wide rhythm
6.  Locked semantic visual rules
7.  Problem final grammar
8.  Decision final grammar
9.  Process final grammar
10. Accent/surface/construction grammar
11. What remains intentionally not pixel-locked
12. Homepage-as-reference rule
13. Componentization audit conclusion
14. Localization architecture audit
15. Remaining homepage content/evidence gaps
16. Visual/design gap status
17. Responsive/browser audit
18. Hero/System Map regression status
19. Accessibility audit
20. Performance/client-JS audit
21. Files changed
22. Documentation reconciled
23. Production code change confirmation
24. `npm run check`
25. `npm run build`
26. Bugs/regressions found and fixed
27. Deviations
28. Repository state
29. Recommended next page/page-family
30. Rationale and prerequisites for that next task

End with:

> **HOMEPAGE VISUAL BASELINE LOCKED --- READY FOR NEXT PAGE-LEVEL
> IMPLEMENTATION**

unless a genuine unresolved issue prevents the lock.

------------------------------------------------------------------------

## 20. Final intent

Task 007 through 007D.1 established and refined the homepage. The owner
has now visually approved that result.

Task 008 exists to prevent future work from accidentally treating the
approved homepage as unfinished exploration.

Freeze the **language and semantics**, not arbitrary pixels.

Preserve the distinction between: - shared visual grammar; - actual
flow; - page-specific composition.

Then identify the next implementation boundary and stop.
