# Task 005A — Homepage Structural Foundation

## Status
`READY`

# Claude execution prompt

We are continuing the ARTIT.hu greenfield website project.

Tasks 001–004C are complete. The design foundation passed final owner visual review and is now **LOCKED**.

Your task is:

# Task 005A — Homepage Structural Foundation

Implement the first production slice of the real ARTIT homepage. Do not attempt to finish the entire homepage.

## 1. Read source-of-truth first

Before editing, read:
- `DOC/00-PROJECT-OVERVIEW.md`
- `DOC/01-BRAND-POSITIONING.md`
- `DOC/02-INFORMATION-ARCHITECTURE.md`
- `DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md`
- `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/10-SEO-EEAT-STRUCTURED-DATA.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
- `DOC/12-ASSET-STRATEGY.md`
- `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Inspect current implementation, especially `src/pages/index.astro`, `BaseLayout.astro`, styles, existing components/fonts/assets, and `/design-foundation`.

Repository documentation is authoritative. If this prompt conflicts with it, stop and report the conflict rather than inventing a resolution.

## 2. Locked foundation

Do not redesign/recalibrate Work Sans, Space Mono, palette, typography hierarchy, 17px body foundation, spacing system, containers, radius, buttons/links, dark palette, focus treatment, self-hosted WOFF2 delivery or zero-client-JS baseline.

Final hierarchy:
- Display/H1: 600
- H2: 600
- H3: 500
- Lead: 500
- Body: 400
- Metadata: Space Mono

Final section rhythm:
- normal: 64–96px
- major/editorial: 96–128px

Reuse existing tokens/classes; do not duplicate values locally.

## 3. Implement only the opening homepage sequence

The full nine-section architecture is already defined in `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`.

Task 005A implements only:
1. Hero
2. Problem / Recognition
3. Decision / What ARTIT does

Use the exact purpose, hierarchy, CTA intent and content guidance in `DOC/04`. Do not change the strategic order. Do not create empty placeholders for Sections 04–09. The page should naturally end after Section 03 for now.

## 4. Production homepage shell

Replace the scaffold `index.astro` with the real homepage entry point using the existing `BaseLayout`.

Do not create speculative infrastructure for later homepage sections.

## 5. Hero

Implement the approved Hero positioning: what ARTIT does, intended customer context, business-software positioning, approved CTA hierarchy and only evidence/proof that is safe under the documentation.

Never invent customer names, dates, lifecycle figures, counts, ROI or other claims. Respect `DOC/13`.

Because this is production, do not display `XX`, `20XX`, fake metrics or dev-fixture language. If a planned proof element depends on unresolved evidence, omit/defer it rather than fabricate it and report that decision.

Do not invent stock imagery, abstract 3D art, fake dashboards, fake screenshots, gradients or AI-style tech illustration. Typography/composition may carry the Hero if the HCA permits it.

## 6. Problem / Recognition

Implement the HCA-defined recognition section. It should let the SME decision-maker recognize the point where standard software, spreadsheets, disconnected systems or rigid workflows stop fitting the business.

Do not turn this into generic SaaS pain-point marketing or a repetitive card grid unless the documentation explicitly requires it.

## 7. Decision / What ARTIT does

Implement the approved transition from recognized problem to ARTIT's role.

Clarify the custom-software decision and ARTIT's role without duplicating later service pages or creating a full service catalogue. Follow documented internal-link intent and approved routes only.

## 8. Content fidelity

Preserve established positioning:
- senior custom-software partner;
- software adapts to the business;
- long-term engineering mindset;
- SME context;
- not a generic digital agency;
- not staff augmentation;
- not a generic SaaS vendor;
- Tardify is a separate branded product/proof point.

Do not introduce Tardify in Sections 01–03 unless `DOC/04` explicitly places it there.

Distinguish approved wording, working copy and verified factual claims. If docs contain final copy, use it. If they contain message architecture only, write restrained Hungarian working copy faithful to it.

Avoid hype, unsupported promises, superlatives, invented metrics, generic “innovative solutions” / “digital transformation” filler and slogan stacks.

## 9. Semantic/component strategy

Use semantic HTML with one page H1 and logical heading levels.

Create components only where actual reuse or `DOC/08` justifies them. Do not create a component for every markup block or build a speculative framework for Sections 04–09.

Astro only unless an existing architectural decision says otherwise. No React/Vue/Svelte and no hydration.

## 10. Header/navigation boundary

Inspect `DOC/03`/`DOC/04`.

If navigation is sufficiently defined, you may implement the minimal production header needed for the homepage shell. Do not invent navigation, routes, mega-menus or complex JS menus.

Preserve zero-client-JS where semantic HTML/CSS is sufficient.

If meaningful header behavior requires unresolved decisions, defer it and report the blocker.

Do not implement a final footer unless documentation fully defines it and it is necessary. Never invent company/contact/legal data.

## 11. Internal links

Follow `DOC/03` and `DOC/04`. Link only to approved routes. Approved future routes may be linked even if not yet implemented when consistent with the architecture.

Do not use `#` as a production CTA placeholder unless it is an explicitly approved in-page anchor.

## 12. Visual implementation

Translate the locked foundation into a real editorial homepage; do not make the homepage look like the `/design-foundation` fixture.

The opening sequence should establish:
- strong editorial hierarchy;
- deliberate whitespace;
- restrained green accent;
- clear reading flow;
- strong but non-promotional typography;
- meaningful section-composition variation;
- no repetitive SaaS card grid;
- no decorative UI chrome.

## 13. Responsive/accessibility

Inspect at approximately 390, 768, 1440 and 1920px.

Verify H1 wrapping, lead width, CTA behavior, section rhythm, column collapse, navigation if present and zero horizontal overflow. Mobile must feel composed, not merely stacked.

Follow `DOC/11`: semantic headings/sections, keyboard-accessible controls, visible focus, sufficient contrast, usable touch targets, no hover-only interaction, no clipping/overflow, reduced-motion preservation and no unnecessary ARIA.

## 14. Performance

Preserve static Astro:
- no new client framework;
- no client JS unless strictly necessary and justified;
- no external fonts;
- no unnecessary dependency;
- no animation/icon library;
- no heavy/fabricated imagery.

## 15. SEO / E-E-A-T boundary

Use existing SEO primitives. Set production-appropriate homepage title/description from approved positioning without inventing facts.

Review `DOC/10`. Do not add speculative schema, FAQ schema or artificial SEO content. Only add structured data if required entity facts are already verified and architecture clearly supports it now.

Canonical/domain limitations remain governed by existing architecture and `DOC/13`.

## 16. Preserve `/design-foundation`

Do not repurpose/remove it. It remains internal and `noindex`.

Optional housekeeping only: if its subtitle still says “Task 004B”, change that label to “Task 004C”. Do not otherwise alter the fixture.

## 17. Documentation

Review/update only as genuinely needed:
- `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/10-SEO-EEAT-STRUCTURED-DATA.md`
- `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Do not rewrite accepted strategy. Record implementation status/new real decisions. New factual questions belong in `DOC/13`.

## 18. Validation

Run:
- `npm run check`
- `npm run build`

Run locally and inspect:
- `/`
- `/design-foundation`
- `/404`

Browser-check homepage around 390, 768, 1440 and 1920px.

Confirm no runtime errors, no overflow, no unexpected client JS, local fonts, correct metadata, `/design-foundation` still `noindex`, homepage indexability consistent with existing architecture.

## 19. Owner-review checkpoint

Do not treat build success as visual approval. Finish with the page ready for owner screenshot review of desktop and mobile Hero, Hero→Problem transition, Problem→Decision transition and overall first-three-section rhythm.

Do not implement Sections 04–09 and do not start Task 005B.

# Definition of Done

Complete only if:
- `index.astro` is a real production homepage;
- only Sections 01–03 are implemented;
- all three follow the approved HCA;
- no unverified facts/dev placeholders are published;
- semantic hierarchy is correct;
- locked design foundation remains intact;
- responsive/accessibility behavior is deliberate and verified;
- no unnecessary dependency/framework/client JS is introduced;
- SEO metadata is appropriate within verified facts;
- `/design-foundation` remains intact/noindex;
- `npm run check` and `npm run build` pass;
- browser verification is complete;
- documentation changes are minimal and justified;
- ready for owner visual/content review.

# Completion report

Return exactly:

## 1. Final status
`COMPLETE`, `COMPLETE WITH OPEN DECISIONS`, or `BLOCKED`

## 2. Scope confirmation
Sections implemented; confirm 04–09 untouched.

## 3. Source-of-truth review
Docs used and conflicts, if any.

## 4. Homepage shell
Structure, layout, header/navigation decision.

## 5. Section 01 — Hero
Message, CTA, composition, responsiveness, deferred evidence.

## 6. Section 02 — Problem / Recognition
Content/visual structure, HCA fidelity, responsiveness.

## 7. Section 03 — Decision / What ARTIT does
Content, links, visual structure, avoidance of service-page duplication, responsiveness.

## 8. Copy and factual validation
Separate repository wording, new working copy and deferred claims. List new `DOC/13` questions.

## 9. Component decisions
Created/reused components, justification, deferred abstractions.

## 10. Design-system usage
Typography, spacing, colors, containers, CTA/link/surfaces; confirm no foundation decision reopened.

## 11. Responsive verification
390/768/1440/1920 results: wrapping, CTA, rhythm, columns/navigation, overflow.

## 12. Accessibility verification
Semantics, keyboard, focus, contrast, touch, clipping/overflow, reduced motion.

## 13. SEO / metadata
Title/description, canonical, indexing, structured-data decision.

## 14. Performance / client JS
Dependencies, JS, fonts, imagery, build observations.

## 15. Files changed
All changed/created files and why.

## 16. Documentation updates
Changes and reasons.

## 17. Validation performed
Exact commands/runtime/browser checks, including `npm run check` and `npm run build`.

## 18. Open decisions / blockers
Use `None.` if none.

## 19. Deviations
Use `None.` if none.

## 20. Repository state
Git status, changed/untracked files, commit status.

## 21. Final checkpoint
End with exactly:
`READY FOR OWNER HOMEPAGE REVIEW`
or
`NOT READY FOR OWNER HOMEPAGE REVIEW`

Stop after the report.
