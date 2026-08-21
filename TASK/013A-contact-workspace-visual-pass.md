# Task 013A --- Contact Form / Conversation Workspace Visual Pass

## 0. Task intent

Task 013 implemented the `/kapcsolat/` page successfully:

-   the route exists,
-   the contact mechanism is real,
-   the Formspree submission works end-to-end,
-   accessibility and responsive behavior were verified,
-   the Hero already has an approved page-specific composition,
-   the page is structurally and technically correct.

However, owner visual review identified one remaining weakness:

> The page is not bad, but after the Hero it becomes visually
> conventional and loses energy.

This is a **visual refinement task**, not a page rewrite and not a
reopening of Task 013's technical architecture.

The goal is to make the contact action itself feel like an
ARTIT-specific working surface / conversation starting point rather than
a generic corporate contact form.

------------------------------------------------------------------------

# PART 0 --- LOCK WHAT ALREADY WORKS

## 1. Do not reopen the Hero

The current `/kapcsolat/` Hero is approved.

Its composition:

-   left: eyebrow + large H1 + lead,
-   right: staggered question field,
-   asymmetric desktop composition,
-   mobile collapse,
-   no decorative SVG,
-   no CTA inside the Hero.

Do **not** redesign it.

Do not:

-   introduce a Hero SVG,
-   change the Hero headline,
-   replace the prompt field,
-   create new Hero concepts,
-   change the desktop Hero grid unless a downstream implementation
    creates an actual regression that requires a minimal correction.

Treat the Hero as locked.

## 2. Preserve all Task 013 functional decisions

The following are also locked:

### Contact mechanism

Use the existing owner-approved Formspree endpoint.

Do not replace Formspree.

### Form fields

Keep exactly:

1.  name,
2.  email,
3.  message / current situation.

Do not add:

-   company,
-   phone,
-   budget,
-   deadline,
-   project type,
-   dropdowns,
-   checkboxes,
-   consent checkbox unless an actual approved legal requirement already
    exists in repository documentation.

### Form behavior

Preserve:

-   native form submission fallback,
-   existing progressive enhancement,
-   submitting state,
-   success state,
-   error state,
-   honeypot,
-   focus management,
-   validation behavior.

This task is not allowed to weaken the working form.

### Legal/content gates

Do not invent:

-   privacy wording,
-   company legal name,
-   address,
-   email address,
-   phone number,
-   GDPR statements,
-   response-time promises.

Existing gates remain gates.

------------------------------------------------------------------------

# PART 1 --- DIAGNOSE THE ACTUAL VISUAL PROBLEM

## 3. Re-audit the current page in a real browser

Before designing anything:

1.  run the current site,
2.  capture `/kapcsolat/` at 1440px,
3.  inspect the full page,
4.  inspect specifically the transition:

``` text
Hero
→ "Ez segít elindítani a beszélgetést."
→ "Amire még nincs szükség."
→ contact form
```

State the diagnosis before implementing.

The current owner-review hypothesis is:

> The Hero works, but the page then falls back into a conventional
> heading → content → tonal section → heading → ordinary form rhythm.

Verify or reject that hypothesis based on the actual render.

## 4. Audit the duplicated prompt content

The four prompts currently appear:

-   in the Hero,
-   and again in the following "Ez segít elindítani a beszélgetést."
    section.

Explicitly determine whether this second rendering adds information or
merely repeats the Hero.

Strong prior hypothesis:

> The standalone repeated-prompt section should probably disappear, and
> the prompts should instead inform the composition around the form.

But do not make this decision from the prompt alone.

Verify it on the rendered page.

If the second prompt section has no independent semantic job, remove it
as a standalone section.

Do **not** remove the prompts from the content source merely because one
rendering disappears if they are still useful elsewhere in the selected
composition.

------------------------------------------------------------------------

# PART 2 --- SOURCE / GRAMMAR AUDIT

## 5. Re-read the relevant source of truth

Before exploration, re-read at minimum:

-   DOC/00
-   DOC/01
-   DOC/02
-   DOC/03
-   DOC/07
-   DOC/08
-   DOC/09
-   DOC/11
-   DOC/12
-   DOC/13
-   Task 013 completion notes
-   Task 012 / 012A notes where relevant to the dead-zone lesson

Inspect the actual source for:

-   `KapcsolatPage.astro`
-   contact-page YAML
-   contact schema
-   `foundation.css`
-   `tokens.css`
-   form enhancement script
-   SiteHeader
-   existing brand-face components:
    -   `SystemMap`
    -   `OperatingFitField`
    -   `LivingSystemField`
    -   `TardifySpecimen`

Treat these as **grammar references, not templates**.

------------------------------------------------------------------------

# PART 3 --- ART-DIRECTION QUESTION

## 6. The actual question to solve

Do not ask:

> "How can we decorate the form?"

Ask:

> "How can the act of starting a conversation become the visual object
> of this page?"

The final result should communicate:

> You do not need to arrive with a specification. Give ARTIT the working
> situation and the conversation starts from there.

The form is therefore not merely a utility at the bottom of the page.

It is the page's **action peak** and should visually feel like the place
where the site's argument turns into actual collaboration.

------------------------------------------------------------------------

# PART 4 --- BUILD THREE REAL CONCEPTS

Create a real comparison route, for example:

``` text
/art-direction/013a-contact-workspace-concepts
```

The route must be:

-   noindex,
-   built from the real design tokens,
-   using the actual contact-page typography,
-   using the actual form fields where appropriate,
-   rendered in the browser,
-   screenshotted at desktop width.

Do not choose from static CSS reasoning.

Build exactly these three conceptual families.

------------------------------------------------------------------------

# CONCEPT A --- WORKING BRIEF / INTAKE SHEET

## 7. Concept A semantic idea

The form reads as an **ARTIT working document**.

Not:

-   a card,
-   a browser window,
-   a fake application UI,
-   a dashboard,
-   a paper-sheet skeuomorph,
-   a CRM form,
-   a clipboard illustration.

Instead, create a restrained technical working surface.

Possible vocabulary:

-   registration marks,
-   mono labels,
-   margin rules,
-   section numbering,
-   small structural ticks,
-   subtle document coordinates,
-   one strong message area,
-   controlled asymmetry.

The actual HTML form must remain the actual form.

The visual frame exists around it; do not fake fields inside SVG.

## 8. Concept A rejection tests

Reject A if it reads primarily as:

-   a fake paper form,
-   a browser/app window,
-   a card,
-   a bordered rectangle added merely to fill space,
-   a copy of `TardifySpecimen`,
-   an engineering drawing unrelated to conversation.

Especially compare it against `TardifySpecimen`.

They may share ARTIT technical vocabulary, but they must not become the
same visual device with different labels.

------------------------------------------------------------------------

# CONCEPT B --- CONVERSATION → STARTING POINT

## 9. Concept B semantic idea

This is the leading candidate.

Instead of:

``` text
prompts section
then
form section
```

make the prompts and form **one composition**.

Possible desktop structure:

``` text
LEFT / CONTEXT                         RIGHT / STARTING POINT

01  How does it work today?            Name
02  Where does it slow down?           Email
03  What systems are involved?         Current situation / problem
04  What should work better?           Send
```

But do **not** interpret that literal sketch as mandatory layout.

Find the strongest composition.

The key idea:

-   left side = things worth thinking about,
-   right side = the actual place to begin,
-   they belong to one visual field,
-   no arrow is required,
-   no literal process diagram is required.

The composition should make the relationship understandable without
turning it into a flowchart.

## 10. Concept B visual vocabulary

Explore:

-   asymmetric columns,
-   differing density,
-   mono indices,
-   structural rules,
-   controlled alignment,
-   one or two accent marks,
-   large textarea as a genuine visual mass,
-   typography and field geometry as the brand face.

Avoid excessive boxes.

The page should still feel spacious and premium.

## 11. Concept B rejection tests

Reject B if it becomes:

-   a four-step process,
-   a timeline,
-   a funnel,
-   a wizard,
-   an onboarding flow,
-   a checklist UI,
-   an infographic with arrows,
-   a numbered feature grid.

The prompts are **conversation aids**, not required sequential steps.

There must be no implication that the visitor must answer all four
prompts separately.

------------------------------------------------------------------------

# CONCEPT C --- EDITORIAL FORM

## 12. Concept C semantic idea

Test whether no additional "workspace" device is needed at all.

Make the **real form itself** the brand face.

Possible grammar:

``` text
01 / NÉV
[field]

02 / EMAIL
[field]

03 / HELYZET
[large dominant textarea]

[send]
```

Use:

-   scale,
-   spacing,
-   typography,
-   numbering,
-   field proportions,
-   rules,
-   alignment,

rather than a surrounding visual object.

The textarea should be allowed to become the dominant visual mass.

This concept should be bolder than the current conventional form.

## 13. Concept C rejection tests

Reject C if it still looks like:

-   a styled corporate contact form,
-   a design-system form demo,
-   a checkout form,
-   a generic editorial website form.

There must be a meaningful composition, not merely larger labels.

------------------------------------------------------------------------

# PART 5 --- COMPARE THE THREE

## 14. Desktop comparison

Render A/B/C at 1440px using comparable content and available width.

For each concept evaluate:

### Semantic specificity

Does this belong specifically to the ARTIT conversation-entry page?

### Visual authority

Does it provide a genuine density/focal peak?

### ARTIT recognizability

Does it belong to the same site without copying another page's device?

### Restraint

Is it still calm and technically precise?

### Honesty

Does it imply anything that isn't true?

### Form usability

Is the actual form still obviously usable?

### Differentiation

Does it avoid:

-   SystemMap flow grammar,
-   OperatingFitField radial grammar,
-   LivingSystemField ambient grammar,
-   TardifySpecimen plate grammar,
-   `/rolunk/` editorial H1 split?

### Responsive viability

Can it become a deliberate mobile composition rather than a squeezed
desktop layout?

## 15. Do not force Concept B to win

Concept B is the current owner/design hypothesis, but it is **not
pre-approved**.

Select the concept that actually renders best.

If none of A/B/C materially improves the current form area, stop and
report that rather than shipping decorative complexity.

------------------------------------------------------------------------

# PART 6 --- MOBILE COMPARISON

## 16. Validate the leading direction on mobile

Once a clear desktop winner exists, build its deliberate mobile
composition.

Test at minimum:

-   390px
-   700px
-   768px
-   900px
-   950px
-   1100px
-   1440px
-   1920px

Do not merely scale desktop geometry down.

For Concept B in particular, likely mobile behavior is:

``` text
conversation prompts
→ form
```

but make the transition deliberate and compact.

Avoid forcing a side-by-side relationship where it no longer helps.

------------------------------------------------------------------------

# PART 7 --- FINAL PAGE ARCHITECTURE

## 17. Reconsider the section count

Task 013 shipped:

``` text
Hero
→ useful prompts
→ not needed yet
→ form
→ quiet close
```

The final 013A page does **not** need to preserve that count.

Prefer fewer, stronger sections if the content allows it.

A likely architecture is:

``` text
Hero
→ "Amire még nincs szükség." / friction reduction
→ Conversation Workspace / Form
→ quiet close
```

or:

``` text
Hero
→ Conversation Workspace / Form
→ friction-reduction close
```

But derive the final architecture from the selected concept and actual
rendered rhythm.

Do not keep a section merely because Task 013 had it.

------------------------------------------------------------------------

# PART 8 --- FORM VISUAL DESIGN

## 18. Fields must remain visually honest

Do not turn fields into fake UI.

Keep:

-   visible labels,
-   clear focus states,
-   obvious editable areas,
-   sufficient contrast,
-   predictable form behavior.

Placeholder text must not replace labels.

## 19. Make the message field important

The central user action is describing the current situation.

The textarea should therefore carry greater visual weight than
name/email.

This can be achieved through:

-   height,
-   width,
-   placement,
-   surrounding whitespace,
-   numbering,
-   hierarchy.

Do not make name and email visually equal to the actual problem
description if the selected composition benefits from hierarchy.

## 20. Submit action

Keep the submit button clear and conventional enough to be immediately
understood.

Do not turn submission into:

-   an icon-only action,
-   a tiny mono link,
-   a hidden affordance,
-   a novelty control.

ARTIT's visual personality should come from the composition, not from
making the form harder to use.

------------------------------------------------------------------------

# PART 9 --- ACCENT AUDIT

## 21. Deep Blue-Violet usage

Explicitly audit accent use.

Do not solve the visual weakness by simply making more things purple.

Accent should remain structural.

Potential uses:

-   indices,
-   ticks,
-   one registration mark,
-   active/focus state,
-   submit button,
-   one structural rule.

Avoid large decorative purple fills unless the rendered concept proves
they are necessary and consistent with the locked visual system.

------------------------------------------------------------------------

# PART 10 --- COMPONENTIZATION

## 22. Do not create premature abstractions

Do not create generic components named:

-   `Workspace`
-   `TechnicalForm`
-   `BrandForm`
-   `ConversationSurface`
-   `FormShell`
-   `BrandFace`

unless a second genuine reuse case exists.

Page-specific markup inside `KapcsolatPage.astro` is acceptable.

If a substantial single-use visual composition becomes unwieldy, a
page-specific component such as:

``` text
ContactWorkspace.astro
```

is acceptable.

Document why it remains page-specific.

------------------------------------------------------------------------

# PART 11 --- CONTENT / YAML / SCHEMA

## 23. Prefer reuse over new copy

This task should mostly reorganize existing approved content.

Do not invent large new prose sections to solve a visual problem.

If the four prompts move from a standalone section into the workspace:

-   keep them authored once,
-   render them where semantically useful,
-   avoid duplicate content.

If a label such as:

``` text
KIINDULÓPONT
```

or

``` text
BESZÉLGETÉS / 01
```

is introduced, classify it correctly as either:

-   locale-sensitive content,
-   technical vocabulary,
-   or component literal,

using the existing localization architecture.

Do not hardcode translatable Hungarian prose into the component.

------------------------------------------------------------------------

# PART 12 --- LOCALIZATION

## 24. Do not activate English

This task must not activate:

``` text
/en/kapcsolat/
```

The existing English-content gate remains.

Do not activate the language switcher.

If schema/YAML changes are necessary, preserve the established
localized-gated architecture.

------------------------------------------------------------------------

# PART 13 --- ACCESSIBILITY

## 25. Re-verify the form after visual restructuring

Check:

-   one `<h1>`,
-   sequential heading order,
-   all inputs have persistent labels,
-   labels correctly reference fields,
-   keyboard tab order follows the visual/logical flow,
-   focus-visible is clear,
-   error/success states remain accessible,
-   focus movement after submit still works,
-   honeypot remains excluded from normal interaction,
-   no meaning relies on color,
-   reduced-motion remains clean.

If prompts are visually repositioned using CSS grid, DOM order must
still make semantic sense.

------------------------------------------------------------------------

# PART 14 --- RESPONSIVE VERIFICATION

## 26. Required widths

Verify the final page at:

-   390
-   700
-   768
-   900
-   950
-   1100
-   1440
-   1920

At every width confirm:

-   zero horizontal overflow,
-   no field clipping,
-   no label collision,
-   no prompt/form collision,
-   no excessive dead zone,
-   no textarea unusably narrow,
-   no submit button ambiguity,
-   no broken Hero regression.

Pay special attention to the 900px transition.

------------------------------------------------------------------------

# PART 15 --- FUNCTIONAL VERIFICATION

## 27. Do not spam the real endpoint unnecessarily

Task 013 already proved the Formspree endpoint end-to-end.

For 013A:

-   verify the form's structural behavior locally,
-   verify native action/method remain correct,
-   verify enhancement states,
-   verify validation,
-   verify focus management.

A second real external submission is **not required** unless the
implementation changes submission logic.

If submission logic changes for some unavoidable reason, explain why and
perform exactly one controlled end-to-end test.

------------------------------------------------------------------------

# PART 16 --- REGRESSION

## 28. Recheck existing pages

Because shared CSS may change, verify at minimum:

### `/`

-   SystemMap intact,
-   keyboard behavior intact,
-   no resurrected rejected visual patterns.

### `/egyedi-fejlesztes/`

-   OperatingFitField mobile `MŰKÖDÉS` separation intact.

### `/munkaink/`

-   LivingSystemField dot polish intact.

### `/tardify/`

-   TardifySpecimen Task 012 polish intact.

### `/rolunk/`

-   Task 012A editorial Hero composition intact.

### `/kapcsolat/`

-   locked Hero unchanged except unavoidable nonvisual structural
    effects.

------------------------------------------------------------------------

# PART 17 --- PERFORMANCE

## 29. Keep the implementation light

No new dependency.

No animation library.

No JS for visual decoration.

The only client JS should remain the form behavior already justified by
Task 013 unless there is an exceptionally strong reason otherwise.

------------------------------------------------------------------------

# PART 18 --- DOCUMENTATION

## 30. Update the relevant DOC files

Update whichever source-of-truth documents are genuinely affected,
likely:

-   DOC/03
-   DOC/07
-   DOC/08
-   DOC/09 if schema/content architecture changes
-   DOC/11
-   DOC/12
-   DOC/13

Record:

-   owner-review reason for reopening,
-   baseline diagnosis,
-   A/B/C concepts,
-   rendered findings,
-   selected direction,
-   rejection reasons,
-   final page architecture,
-   prompt duplication decision,
-   form/workspace grammar,
-   componentization decision,
-   localization impact,
-   accessibility result,
-   responsive result,
-   regression result.

Do not update DOC/09 if no localization/schema/content-architecture fact
changed.

------------------------------------------------------------------------

# PART 19 --- VALIDATION

## 31. Run

``` bash
npm run check
npm run build
```

Report exact results.

Remove `dist/` afterward if that remains the repository convention.

Check `git status` for stray screenshots/test artifacts.

Do not commit or push.

------------------------------------------------------------------------

# PART 20 --- ACCEPTANCE CRITERIA

Task 013A is complete only if all of the following are true:

1.  The approved Hero remains visually unchanged.
2.  The Hero's prompt field remains intact.
3.  The current post-Hero visual weakness is explicitly diagnosed from
    the real render.
4.  Prompt duplication is explicitly audited.
5.  Three real concepts are built:
    -   A --- Working Brief / Intake Sheet
    -   B --- Conversation → Starting Point
    -   C --- Editorial Form
6.  All three are rendered and compared at 1440px.
7.  The selected concept materially improves the current page.
8.  No concept is selected merely because the task prompt favored it.
9.  The final contact area becomes a genuine visual/action peak.
10. The result does not look like a generic corporate contact form.
11. The result does not look like fake application UI.
12. The result does not duplicate TardifySpecimen.
13. The result does not become a timeline/process/funnel.
14. The four prompts are not redundantly repeated without a distinct
    semantic reason.
15. The actual form remains real HTML.
16. Exactly the existing three user-facing fields remain.
17. Formspree integration remains intact.
18. Native fallback remains intact.
19. Progressive-enhancement states remain intact.
20. The textarea receives appropriate visual importance.
21. Persistent labels remain.
22. Keyboard and focus behavior remain correct.
23. Success/error accessibility remains correct.
24. No new unapproved legal/privacy/company facts are introduced.
25. English remains gated.
26. Language switcher remains inactive.
27. No new dependency is added.
28. No visual-decoration JS is added.
29. Zero horizontal overflow at all required widths.
30. The 900px transition is explicitly verified.
31. Existing five pages remain unregressed.
32. `npm run check` passes.
33. `npm run build` passes.
34. Documentation reflects the final decision.
35. Repository contains no stray artifacts.
36. No commit or push is performed.

------------------------------------------------------------------------

# PART 21 --- COMPLETION REPORT FORMAT

Return a detailed completion report containing at minimum:

1.  Final status
2.  Repository baseline
3.  Owner-review reason for reopening
4.  Baseline visual diagnosis
5.  Prompt-duplication audit
6.  Source-of-truth audit
7.  Locked Hero confirmation
8.  Concept A description
9.  Concept A rendered finding
10. Concept B description
11. Concept B rendered finding
12. Concept C description
13. Concept C rendered finding
14. Desktop comparison
15. Selected direction
16. Selection rationale
17. Rejected directions and exact reasons
18. Final page architecture
19. Standalone prompt-section decision
20. Contact workspace/form composition
21. Desktop behavior
22. Mobile behavior
23. Textarea hierarchy
24. Submit-action treatment
25. Accent audit
26. Relationship to existing ARTIT brand-face grammar
27. Patterns deliberately not reused
28. New page-specific grammar
29. Componentization decision
30. YAML/schema changes
31. Localization status
32. Form/backend status
33. Native fallback status
34. Progressive-enhancement status
35. Accessibility result
36. Responsive verification
37. Performance/client-JS impact
38. Homepage regression status
39. `/egyedi-fejlesztes/` regression status
40. `/munkaink/` regression status
41. `/tardify/` regression status
42. `/rolunk/` regression status
43. Files changed
44. Documentation updated
45. `npm run check`
46. `npm run build`
47. Bugs found/fixed
48. Deviations
49. Remaining content/legal gates
50. Repository state
51. Recommendation / owner-review status

End with:

> **CONTACT WORKSPACE VISUAL PASS COMPLETE --- READY FOR OWNER VISUAL
> REVIEW**
