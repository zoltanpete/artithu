# Task 007D --- Homepage Visual Grammar Final Polish & Lock Candidate

## 1. Task objective

Perform one final, tightly scoped visual-polish pass on the production
homepage after Task 007C.

This is **not a new concept exploration** and **not a redesign**. The
page-wide communication grammar is now established. The purpose of Task
007D is to correct the remaining inconsistencies visible in the owner
review, make the existing grammar read as one coherent system, and leave
the homepage in a state suitable for a final owner review / visual lock
decision.

The main issues are:

1.  the `JEL / 05–06` diagnostic signals visually fall out of the
    `JEL / 01–04` system because the vertical diagnostic/process spine
    stops too early;
2.  the Process section still has an awkward desktop line break in
    `Továbbfejlesztjük`;
3.  the Tardify technical plate is directionally correct but still reads
    slightly too much like a generic bordered card;
4.  the page should receive a final rhythm/continuity audit after these
    changes.

Do not broaden the task beyond these items unless a real regression is
discovered during implementation or browser verification.

------------------------------------------------------------------------

## 2. Required source-of-truth audit before editing

Before changing code, read/review the relevant current state:

-   `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
-   `DOC/07-DESIGN-SYSTEM.md`
    -   especially the approved Art Direction Lock
    -   the page-wide communication grammar from Task 007A
    -   Task 007C implementation notes
-   `DOC/08-COMPONENT-LIBRARY.md`
-   `DOC/09-TECHNICAL-ARCHITECTURE.md`
-   `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
-   `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`
-   `src/components/homepage/Homepage.astro`
-   `src/styles/foundation.css`
-   `src/content/pages/home/content.yaml`
-   any directly relevant shared primitive used by these sections

Also inspect the current production homepage in a real browser before
editing.

The hierarchy remains:

**approved content architecture → approved art-direction grammar →
production design system → current implementation**

Do not re-derive a new visual direction from scratch.

------------------------------------------------------------------------

## 3. Scope rule: polish, not redesign

Task 007D must preserve:

-   the Hero and production System Map;
-   all approved homepage copy;
-   the bilingual YAML/content architecture from Task 007B;
-   the section order;
-   the page-wide communication modes established in Task 007A/007C;
-   the existing design tokens and locked colour system;
-   the current component architecture unless a genuine technical issue
    requires adjustment;
-   the existing accessibility and performance constraints.

Do **not**:

-   invent new marketing copy;
-   change content.yaml merely to solve a layout issue;
-   add a new visual concept;
-   introduce another large diagram;
-   introduce cards everywhere;
-   add dependencies;
-   add framework hydration;
-   fabricate case-study facts, screenshots, metrics, dates, customer
    identities, or other gated content;
-   touch the approved Hero/System Map merely for visual novelty.

------------------------------------------------------------------------

# 4. Primary correction --- restore `JEL / 01–06` continuity

This is the most important item in the task.

## 4.1 Current problem

Task 007C correctly restored the diagnostic-signal grammar for the
Problem section:

-   `JEL / 01–04` form the denser diagnostic field;
-   `JEL / 05–06` form the quieter/open field.

However, the visual implementation currently makes `JEL / 05–06` look as
though they are **outside** the diagnostic system.

`JEL / 01–04` have:

-   a shared vertical spine;
-   node/dot markers;
-   indexed technical labels;
-   an obvious system relationship.

`JEL / 05–06` retain the labels but lose the spine/node relationship.

The intended semantic distinction is:

**dense → open**

not:

**inside the system → outside the system**

## 4.2 Required correction

Make the vertical diagnostic/process grammar visibly continue through
**all six signals**.

`JEL / 05` and `JEL / 06` must receive the same family of:

-   vertical route/spine;
-   node/dot;
-   indexed signal relationship

used by `JEL / 01–04`.

But do **not** simply turn the entire section into one visually uniform
list.

The 4+2 distinction must remain legible.

### Desired result

`JEL / 01–06` should clearly read as **one diagnostic sequence/system**,
while:

-   `01–04` remain denser and more contained;
-   `05–06` remain more open, quieter and spatially relaxed.

Think of the spine as continuing through a change in density rather than
stopping at the edge of the dense field.

------------------------------------------------------------------------

## 4.3 Desktop behavior

On desktop, preserve the current dense/open composition.

Do not collapse the right/open signals back into the same tonal
rectangle merely to make the spine easier.

Instead, solve the continuity compositionally.

The connection may:

-   continue as a shared route;
-   transition across the dense/open boundary;
-   use restrained technical geometry consistent with the existing ARTIT
    language.

It should **not** become:

-   a decorative flourish;
-   a large connector diagram;
-   a dominant arrow;
-   an ornamental zig-zag;
-   a second System Map.

The spine/node system must remain subordinate to the actual diagnostic
statements.

The owner should be able to glance at the section and understand:

> these are six signals belonging to the same diagnostic framework.

------------------------------------------------------------------------

## 4.4 Mobile behavior

This correction is particularly important on mobile.

Currently `JEL / 05–06` visually detach from `01–04` after the dense
block.

On mobile, make the diagnostic spine clearly continue through the open
`05–06` signals as well.

The long vertical composition should feel **intentional**, not as if two
additional paragraphs were appended after the designed part ended.

Preserve generous spacing. Do not compress all six rows simply to
shorten the page.

The route may pass through the transition between dense and open areas,
but it must remain visually quiet.

Verify that:

-   no line clips;
-   no dot becomes misaligned;
-   the route does not collide with text;
-   the route does not accidentally imply progression/status;
-   `JEL / 01–06` remains understandable with CSS disabled from a
    semantic markup perspective.

------------------------------------------------------------------------

## 4.5 Semantic constraint

The spine is a **diagnostic grouping/sequence device**, not a
workflow-progress indicator.

Do not introduce language or visual states that imply:

-   completion;
-   severity;
-   chronology;
-   success/failure;
-   selected/unselected state.

No colour-only meaning.

All geometry should remain decorative/structural and should be
`aria-hidden` where appropriate.

------------------------------------------------------------------------

# 5. Process section --- fix the `Továbbfejlesztjük` desktop break properly

## 5.1 Current problem

Task 007C fixed the worst arbitrary wrapping by enabling hyphenation,
but the current desktop result still displays:

`Továbbfejleszt–` `jük`

This is typographically valid but visually weak in a four-step
horizontal process.

The other three labels are compact single-line words, so the fourth step
looks accidentally broken and destabilizes the route rhythm.

## 5.2 Required outcome

At the normal wide desktop layout, `Továbbfejlesztjük` should preferably
fit on **one line**.

Do not solve this by:

-   reducing the font size only for that word;
-   hardcoding a smaller fourth step;
-   manually inserting a non-semantic abbreviation;
-   changing the approved Hungarian copy;
-   making the whole process typography noticeably smaller.

Instead, audit the actual geometry:

-   available process width;
-   grid/gap distribution;
-   step min-width behavior;
-   text container width;
-   heading max-width;
-   breakpoint timing;
-   route geometry.

Use the smallest systemic adjustment that lets the four-step process
breathe naturally.

If there is a genuinely unavoidable intermediate viewport where correct
Hungarian hyphenation is still needed, that is acceptable. But at the
standard large desktop captures (especially around 1440px and 1920px),
the word should not remain split if the layout can reasonably
accommodate it.

Verify intermediate widths too, especially around the 4-column
breakpoint.

------------------------------------------------------------------------

# 6. Tardify owned-proof plate --- reduce generic-card feeling

## 6.1 Current state

Task 007C correctly moved the Tardify section away from a plain
editorial aside and into a `.panel-technical` owned-proof treatment.

The direction is right.

However, in the current owner-review screenshot the large bordered
rectangle still reads somewhat like a conventional UI/card container
rather than a distinctly ARTIT technical evidence/owned-product plate.

The goal is **not** to remove the framing.

The goal is to make it feel less like:

> content inside a card

and more like:

> a deliberately specified technical/owned-proof plate.

## 6.2 Required polish

Refine the plate using the already established ARTIT grammar.

Possible tools include restrained use of existing ideas such as:

-   technical indexing/alignment;
-   port/node details;
-   partial rather than equally dominant edge treatment;
-   small construction marks;
-   stronger internal alignment logic;
-   asymmetric technical residue;
-   better relationship between eyebrow, heading, copy and links.

Choose the smallest effective solution.

Do not add visual noise merely to make the plate "more designed."

The plate must remain calmer than the Hero and Problem sections.

## 6.3 Important asset/content gate

There is still no approved Tardify screenshot/content asset to introduce
here.

Do not fabricate one.

Do not create a fake product UI.

Do not turn this into a large placeholder image region.

The section must work convincingly **without** the future screenshot,
while remaining capable of accepting one later if/when an approved asset
becomes available.

## 6.4 CTA/port dots

The small port-dot language introduced in Task 007C may remain if it
still contributes after the plate refinement.

Audit whether both dots are necessary and whether they actually read as
structural connection points rather than decorative bullets.

Do not preserve them automatically if the refined composition makes them
redundant.

------------------------------------------------------------------------

# 7. Final page-wide rhythm and continuity audit

After implementing the three corrections above, inspect the **entire
homepage as one continuous page**, not only isolated screenshots.

This is a polish audit, not permission to redesign other sections.

Check the following.

## 7.1 Density progression

The page should still read approximately as:

1.  **Hero** --- richest / strongest systems visualization
2.  **Problem** --- diagnostic, dense → open
3.  **Decision** --- calmer tonal clarification
4.  **Work** --- evidence/record structure
5.  **Longevity** --- sparse dark interruption
6.  **Tardify** --- owned-proof technical plate
7.  **Process** --- connected progression
8.  **Senior/Who** --- quiet editorial close
9.  **Final CTA** --- minimal confident close

Do not allow the Tardify plate or Process route to compete with the
Hero.

## 7.2 Accent continuity

Verify that Deep Blue-Violet continues to appear in structural roles
rather than decorative sprinkling.

Check especially:

-   Problem spine/nodes/indexes;
-   Work case indexing;
-   Longevity technical residue;
-   Tardify technical details;
-   Process route/nodes/indexes;
-   CTA roles.

If a violet detail no longer has a semantic/structural purpose, remove
or weaken it rather than adding more.

## 7.3 Surface rhythm

Verify the transitions between:

-   canvas;
-   dense Problem field;
-   tonal Decision band;
-   normal Work surface;
-   dark Longevity;
-   Tardify plate;
-   Process;
-   quiet closing sections.

The page should not read as alternating arbitrary boxes.

## 7.4 Technical grammar consistency

Audit:

-   line weights;
-   node/dot sizes;
-   border strength;
-   technical-label scale;
-   spacing around indexed labels;
-   use of crosshair/construction residue;
-   panel corner treatment;
-   route alignment.

Do not force every section to use every technical primitive.

Consistency should come from **family resemblance**, not repetition.

------------------------------------------------------------------------

# 8. Responsive verification

Perform real-browser verification at minimum:

-   390px
-   768px
-   950px or another meaningful intermediate width
-   1100px / around the Process breakpoint
-   1440px
-   1920px

Also inspect at least one width immediately below and immediately above
any breakpoint you modify.

Verify:

-   zero horizontal overflow;
-   no clipped Problem spine or nodes;
-   no overlap between `JEL` geometry and text;
-   all six Problem signals visibly belong to one system;
-   dense/open distinction remains;
-   Process route remains aligned;
-   `Továbbfejlesztjük` behaves intentionally;
-   Tardify plate does not become cramped or oversized;
-   section padding/rhythm remains coherent;
-   mobile reading order remains correct.

Do not rely only on static CSS reasoning.

Use actual rendered browser captures/measurements.

------------------------------------------------------------------------

# 9. Accessibility verification

Reconfirm:

-   heading hierarchy remains valid;
-   new Problem/Tardify geometry is decorative and appropriately hidden
    from assistive technology;
-   no new meaning is conveyed by colour alone;
-   contrast remains compliant;
-   links/buttons retain visible keyboard focus;
-   existing System Map keyboard behavior remains unaffected;
-   `prefers-reduced-motion` behavior remains unaffected;
-   no content is visually reordered in a way that conflicts with DOM
    reading order.

No new interactive behavior should be necessary for this task.

------------------------------------------------------------------------

# 10. Localization/content architecture preservation

Task 007B's architecture is locked for this task.

Confirm explicitly that:

-   homepage copy remains sourced from YAML;
-   no marketing copy is moved back into Astro templates;
-   no Hungarian-only layout hack is introduced that would make future
    English rendering structurally impossible;
-   stable semantic IDs remain intact;
-   no fallback from missing English marketing copy to Hungarian is
    introduced;
-   no `/en/` route is published as part of this task unless it was
    separately approved elsewhere after Task 007B.

Task 007D is visual polish only.

------------------------------------------------------------------------

# 11. Performance and architecture constraints

Maintain:

-   no new dependency;
-   no graph library;
-   no framework hydration;
-   no unnecessary client-side JavaScript;
-   no additional runtime merely for decorative geometry.

Prefer CSS/pseudo-elements/simple inline SVG where appropriate.

If any JS changes occur, explain exactly why they were unavoidable.

Expected result: **zero new client JS**.

------------------------------------------------------------------------

# 12. Documentation

Update documentation only where the implementation establishes or
clarifies a reusable rule.

At minimum review whether updates are needed in:

-   `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
-   `DOC/07-DESIGN-SYSTEM.md`
-   `DOC/08-COMPONENT-LIBRARY.md`
-   `DOC/09-TECHNICAL-ARCHITECTURE.md`
-   `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`

Important documentation point:

Record explicitly that the Problem section's `JEL / 01–06` grammar is
**one continuous diagnostic system**, with a **dense/open presentation
split**, not two unrelated groups.

Do not over-document incidental pixel values.

If the Tardify refinement produces a reusable owned-proof/evidence-plate
principle, document the principle, not the homepage-specific
measurements.

------------------------------------------------------------------------

# 13. Validation

Run:

``` bash
npm run check
npm run build
```

Report the exact results.

Also verify the homepage in a real browser and report:

-   widths tested;
-   overflow status;
-   console/page errors;
-   any regression discovered;
-   any bug found and fixed.

Clean generated build output afterward if that is the repository's
established workflow.

------------------------------------------------------------------------

# 14. Files and scope discipline

Expected primary implementation files are likely:

-   `src/components/homepage/Homepage.astro`
-   `src/styles/foundation.css`

Documentation files may also change as justified above.

Do not modify:

-   historical A4 prototype files;
-   Hero/System Map implementation unless a regression is discovered;
-   content YAML unless an actual content-architecture defect is
    discovered;
-   localization schema merely for visual polish.

If scope expands, explain exactly why.

------------------------------------------------------------------------

# 15. Completion report format

Return a numbered completion report covering at least:

1.  Final status
2.  Repository baseline
3.  Source-of-truth audit
4.  `JEL / 01–06` continuity diagnosis
5.  Desktop Problem-section solution
6.  Mobile Problem-section solution
7.  Confirmation that dense/open distinction remains
8.  Process `Továbbfejlesztjük` fix
9.  Process breakpoint/intermediate-width behavior
10. Tardify plate refinement
11. Whether CTA port dots were retained/changed and why
12. Page-wide density/rhythm audit
13. Accent-continuity audit
14. Surface-rhythm audit
15. Technical-grammar consistency audit
16. Hero confirmation
17. YAML/localization architecture preservation
18. English-readiness implications
19. Responsive verification widths/results
20. Accessibility verification
21. Performance/client-JS impact
22. Files changed
23. Documentation updated
24. `npm run check`
25. `npm run build`
26. Bugs found and fixed
27. Deviations from brief
28. Repository state
29. Final recommendation: whether the homepage is ready for an owner
    visual-lock review

End with one of:

> **HOMEPAGE FINAL POLISH COMPLETE --- READY FOR OWNER VISUAL LOCK
> REVIEW**

or, if a real unresolved issue remains:

> **HOMEPAGE FINAL POLISH COMPLETE --- OWNER REVIEW REQUIRED BEFORE
> VISUAL LOCK**

------------------------------------------------------------------------

## Final intent

This task should make the current homepage feel **finished**, not newly
redesigned.

The most important conceptual correction is:

> `JEL / 01–06` is one diagnostic language.\
> The 4+2 split expresses **density**, not **membership**.

After that correction, the Process typography and Tardify plate should
receive only the minimum polish needed to make the page-wide ARTIT
communication grammar read consistently from Hero to final CTA.
