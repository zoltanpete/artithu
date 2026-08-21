# Task 013 — Kapcsolat / Conversation Entry

## Status
**READY FOR IMPLEMENTATION**

## Context
Tasks 012 + 012A are approved and closed. Implement `/kapcsolat/`.

Core lesson from 009A/010A/011A/012A: do not first ship a structurally correct but visually inert `heading → paragraph → whitespace` page and defer visual identity. The composition must be intentional in Task 013 itself. Do not invent a diagram just because other pages have brand-face visuals.

## 0. Source-of-truth audit
Before implementation:
- Read DOC/00–04, DOC/07–09, DOC/11–13, and Task 012/012A completion notes.
- Inspect rendered `/`, `/egyedi-fejlesztes/`, `/munkaink/`, `/tardify/`, `/rolunk/`.
- Inspect SiteHeader, CTA/button/link grammar, content schemas/localization helpers, any existing form code/styles, `foundation.css`, `tokens.css`.
- Treat existing visuals as grammar references, not templates.
- Re-audit DOC/13 before writing factual/contact content.

## 1. Page role
`/kapcsolat/` is the **conversation-entry page**, not a generic Contact Us page, sales funnel, support portal, or booking page.

Primary user question:
> **„Mit kell elküldenem ahhoz, hogy el tudjunk kezdeni beszélni?”**

Core answer:
> You do not need a finished specification. Describe how things work now, where the problem is, and what you would like to improve.

Reuse exact approved wording where possible; do not strengthen promises.

## 2. Semantic transition
The page should move the visitor from:
**“I probably need to prepare a detailed brief.”**
to:
**“No — I can simply explain the current situation and the problem.”**

This is both the semantic and visual job.

## 3. Mandatory contact-mechanism audit
Determine what is actually approved and technically available:
- public email
- phone
- existing form/backend
- mailto usage
- scheduling/booking
- privacy/GDPR requirements
- consent requirements
- spam protection
- success/error handling
- API/server endpoint
- hosting constraints

Classify each as:
- APPROVED + IMPLEMENTABLE
- APPROVED BUT TECHNICALLY UNRESOLVED
- TO VERIFY
- NOT APPROVED

Hard rule: do not invent email, phone, endpoint, booking link, legal text, response-time promise, office hours, address, or company/legal facts. If no approved functional submission path exists, do not create a fake form.

## 4. Proposed content architecture

### Section 1 — Hero / Start with the situation
Remove the “I need a specification first” barrier immediately.
Use eyebrow + strong H1 + short support + primary action only if a real approved mechanism exists.
The Hero must be compositionally intentional; no narrow copy column with a dead right side.

### Section 2 — What is useful to tell us
Answer what is useful in the first message/conversation. Ground prompts in existing copy:
- how the process works today
- where it becomes slow/manual/error-prone
- what systems/tools are involved
- what should work better

These are prompts, not mandatory requirements. Avoid procurement-questionnaire tone.

### Section 3 — What you do NOT need yet
Reduce friction. If supported by approved positioning, cover:
- finished specification
- technical solution
- exact architecture
- fully defined project scope

Reinforce operation/problem first, technology second. Do not promise free consulting/analysis/estimation unless approved.

### Section 4 — Actual contact mechanism
Present the approved mechanism clearly. It may be a minimal form, email action, another approved route, or an honest no-placeholder state if gated.
If a form is approved, use only the minimum fields genuinely needed.

### Section 5 — Quiet close
End calmly. Do not repeat another oversized generic “Beszéljünk” CTA if the contact mechanism is already the action peak. No response-time promises unless verified.

## 5. Mandatory visual exploration
Build at least three real concepts before final selection on a noindex route such as:
`/art-direction/013-kapcsolat-concepts`

Use real/approved content, not lorem ipsum. Compare at 1440px; verify selected candidate at 390px.

### Concept A — Conversation Field / Prompt Composition
Organize short problem-description prompts around the main message.
Must read as ways to begin explaining the situation, not nodes.
No connector lines, fake chat bubbles, messaging UI, floating cards, or numbered funnel.
Prompts themselves create density.

### Concept B — Editorial Intake / Structured Sentence
Typography-led composition using the proposition and useful prompts across the Hero canvas.
No SVG required.
Must not copy `/rolunk/`'s two-column Hero.
Must feel like starting from the problem, not an About statement.

### Concept C — Minimal Working Note / Technical Intake Surface
Abstract “working note/problem brief” surface using restrained rules, labels, registration marks and real prompt fragments.
Must not become a fake form, browser, document screenshot, TardifySpecimen clone, checklist UI, or card stack.
Semantic message: an imperfect description of the current situation is enough to begin.

### Rejection tests
Reject if:
1. mostly empty inside its own bounds;
2. merely relocates the dead zone;
3. too similar to an existing brand-face;
4. reads as flowchart/timeline/dashboard/fake app UI;
5. needs invented data;
6. makes contacting ARTIT feel complicated;
7. competes with the real action;
8. collapses into meaningless decoration on mobile.

If none clearly beats a strong typography-only baseline, do not force a diagrammatic winner.

## 6. Form rules — only if a real backend is approved
Use the smallest justified field set. Likely candidates only if approved: name, email, message/problem description.
Do not automatically add company, phone, budget, project type, deadline, employee count, attachment, marketing consent.

Every field needs a persistent visible `<label>`. Placeholders are not labels.
Validation must be accessible and not color-only.
If submission exists, verify idle/submitting/success/failure/recovery and never claim success before backend confirmation.
Only add legal/consent text actually required and approved.

## 7. If no backend is approved
- Do not create a non-functional form.
- Prefer an approved direct mechanism if available.
- Keep architecture future-ready without fake/disabled controls.
- Record what is needed to activate a form later.
- Do not let the missing form make the page look unfinished.

## 8. CTA and route audit
Audit all existing “Beszéljünk”/contact CTAs and ensure intended destinations resolve consistently to `/kapcsolat/`.
Verify desktop header CTA, mobile nav contact action, homepage CTAs, and relevant inner-page final CTAs.
Do not alter external `tardify.hu` behavior.

## 9. Responsive verification
Verify 390, 700, 768, 900, 950, 1100, 1440, 1920px:
- zero horizontal overflow
- no desktop Hero dead zone
- contact action not pushed excessively down on mobile
- usable labels/controls
- no collisions
- clean 900px transition
- clear hierarchy at 1920px

Use a separate mobile composition if needed rather than blindly scaling desktop.

## 10. Accessibility
Verify:
- exactly one H1
- sequential headings
- natural DOM reading order despite visual grids
- keyboard-accessible controls
- visible focus
- persistent labels
- accessible form errors/success if applicable
- no color-only meaning
- reduced-motion clean
- mobile navigation keyboard-operable
- decorative visuals hidden from AT; meaningful visuals named

## 11. Performance / JS
Preserve zero-client-JS unless a real form mechanism requires client behavior.
No JS visual effects.
If form JS is required, keep it minimal, justify/document impact, and add no framework/dependency without concrete need.

## 12. Localization
Maintain current architecture. Do not activate English merely because this page is added.
Classify all strings correctly. If approved English copy is absent, withhold `/en/kapcsolat/` and keep the switcher inactive.
Update DOC/09 only if structural/schema/localization changes actually occur.

## 13. SEO
Use honest metadata from approved content.
Do not invent LocalBusiness/address/phone/opening-hours/Person/Organization structured data.

## 14. Componentization
Do not prematurely create generic `BrandFace`, `ContactHero`, `TechnicalDiagram`, `VisualModel`, `ContactCard`, or `FormSection`.
A page-specific component is fine if genuinely needed. If typography/CSS-only wins, prefer the route-level renderer.
Document the decision.

## 15. Documentation
Update as actually relevant:
- DOC/03 — implementation/status
- DOC/07 — visual exploration/selection
- DOC/08 — componentization audit
- DOC/09 — only if structure/schema/localization changes
- DOC/11 — verification
- DOC/12 — contact mechanism/asset strategy where relevant
- DOC/13 — resolved/new gates

## 16. Regression verification
Re-check:
- `/`: SystemMap interaction, locked anti-patterns, contact CTAs
- `/egyedi-fejlesztes/`: OperatingFitField mobile MŰKÖDÉS separation, CTA
- `/munkaink/`: LivingSystemField, CTA
- `/tardify/`: Task 012 TardifySpecimen polish, CTA where applicable
- `/rolunk/`: Task 012A Hero regrid, CTA
- `/kapcsolat/`
- `/design-foundation`
- `/404`

## 17. Build/repository hygiene
Run:
```bash
npm run check
npm run build
```
Report exact results. Remove `dist/` after verification if established workflow. No commit, no push. Remove stray screenshots/debug/temp artifacts unless intentionally retained as art-direction evidence.

## 18. Acceptance criteria
Complete only if:
1. `/kapcsolat/` exists and no longer 404s.
2. It clearly explains what is needed to start a conversation.
3. It reduces the finished-specification barrier using approved positioning.
4. Actual contact mechanisms are audited and honestly implemented.
5. No fake form/invented contact data.
6. Three real visual/compositional concepts were rendered and compared.
7. Selected composition has no functionless desktop dead zone.
8. Visual direction is specific to conversation entry.
9. It does not clone existing brand-faces or `/rolunk/`.
10. Contact action is obvious but restrained.
11. Mobile stays concise.
12. Existing contact CTAs resolve consistently.
13. Accessibility passes.
14. Localization gates remain respected.
15. No unsupported SEO/schema claims.
16. Approved pages remain unregressed.
17. `npm run check` has no new errors/warnings.
18. `npm run build` passes.
19. Docs reflect reality and gates.
20. Repo has no stray artifacts, commit, or push.

## 19. Completion report
Return one consolidated report covering at minimum:
1. Final status
2. Repository baseline
3. Source audit
4. Contact mechanism audit
5. Approved mechanisms
6. Gated mechanisms
7. Page role
8. Primary user question
9. Approved/reused content
10. New content and grounding
11. Hero baseline/problem
12–17. Concepts A/B/C + rendered findings
18. Selected direction
19. Selection rationale
20. Rejections
21. Final architecture
22. Hero composition
23. Desktop behavior
24. Mobile behavior
25. Contact action
26. Form/backend decision
27. Privacy/legal decision
28. Relationship to other pages
29. CTA-route audit
30. ARTIT grammar reused
31. Patterns not reused
32. New page-specific grammar
33. Componentization
34. YAML/schema
35. Localization/EN gate
36. SEO
37. Accessibility
38. Responsive verification
39. Performance/JS
40–44. Regression status for `/`, `/egyedi-fejlesztes/`, `/munkaink/`, `/tardify/`, `/rolunk/`
45. Files changed
46. Docs updated
47. `npm run check`
48. `npm run build`
49. Bugs
50. Deviations
51. Remaining gates
52. Repository state
53. Recommendation / owner-review status

End with:
> **KAPCSOLAT PAGE IMPLEMENTED — READY FOR OWNER VISUAL/CONTENT REVIEW**
