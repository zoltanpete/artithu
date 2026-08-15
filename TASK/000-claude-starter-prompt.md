We are continuing the ARTIT.hu greenfield website project.

Task 001 — Repository Foundation is COMPLETE.

The repository is currently intentionally documentation-only:
- no Astro scaffold exists yet;
- the working tree is clean;
- README.md, .gitignore and .editorconfig are in place;
- DOC/ contains documents 00–13;
- TASK/ contains Tasks 001–004.

Your next task is:

TASK/002-documentation-foundation.md

Read that task file first and treat it as the authoritative task specification.

Then read ALL documentation files under DOC/ before making any changes.

Important project context
=========================

This is a greenfield replacement for the previous ARTIT.hu WordPress website.

We are deliberately using a documentation-driven workflow:

strategy / IA / content architecture / design direction
→ repository documentation
→ technical foundation
→ design system implementation
→ components/pages
→ content/evidence
→ SEO/accessibility/performance QA

The documentation is part of the product and will act as the source of truth for future implementation tasks.

Task 002 is therefore an important consistency gate before Astro is scaffolded.

Do NOT scaffold Astro in this task.

Do NOT install dependencies.

Do NOT start implementing the website.

Do NOT create page components.

Do NOT redesign or reinterpret the approved strategy.


Review objective
================

Perform a thorough cross-document consistency review of the complete DOC/ foundation.

Do not limit the review to broken links or filenames.

Specifically inspect the documentation for:

1. Terminology consistency

Check that important concepts use consistent terminology across documents, including:

- ARTIT
- Tardify
- Egyedi fejlesztés
- Egyedi üzleti alkalmazások
- Folyamatdigitalizálás
- Rendszerintegráció és automatizáció
- senior direct collaboration
- longevity / long-running systems
- case studies / Munkáink
- proof / evidence terminology

Do not rewrite terminology merely for stylistic uniformity if the contextual wording is intentional.


2. Information Architecture consistency

Compare at minimum:

- 00-PROJECT-OVERVIEW.md
- 02-INFORMATION-ARCHITECTURE.md
- 03-SITEMAP-AND-PAGE-ARCHITECTURE.md
- 04-HOMEPAGE-CONTENT-ARCHITECTURE.md

Verify:

- routes;
- navigation;
- page roles;
- page hierarchy;
- internal-link intentions;
- homepage → subpage relationships.

The accepted v1 sitemap is:

/
├── egyedi-fejlesztes/
│   ├── uzleti-alkalmazasok/
│   └── rendszerintegracio/
├── munkaink/
│   └── [case-study]/
├── tardify/
├── rolunk/
└── kapcsolat/

Later:
└── tudastar/

Important locked decision:

Folyamatdigitalizálás is a horizontal competency and does NOT receive its own landing page in v1.


3. Positioning consistency

Compare the positioning and messaging in:

- 00-PROJECT-OVERVIEW.md
- 01-BRAND-POSITIONING.md
- 02-INFORMATION-ARCHITECTURE.md
- 04-HOMEPAGE-CONTENT-ARCHITECTURE.md

Verify that ARTIT is consistently positioned as a senior custom business software development partner rather than:

- a generic software agency;
- web agency;
- IT outsourcing company;
- body-shopping provider;
- SaaS vendor.

Also verify that the intended audience remains typically 5–50 person SMEs and that broader company-size examples inside case studies do not accidentally redefine the primary ICP.


4. ARTIT ↔ Tardify relationship

Review every relevant occurrence across DOC/.

The intended relationship is:

- Tardify is a separate product brand with its own website.
- Tardify is ARTIT's own business software product.
- ARTIT represents the senior software engineering expertise behind it and custom software work.
- ARTIT.hu must not become a second Tardify marketing website.
- Tardify acts as proof of product-development capability.

Identify any wording that creates ambiguity or contradiction.


5. Homepage architecture consistency

Compare:

- 03-SITEMAP-AND-PAGE-ARCHITECTURE.md
- 04-HOMEPAGE-CONTENT-ARCHITECTURE.md
- 07-DESIGN-SYSTEM.md
- 08-COMPONENT-LIBRARY.md

The accepted homepage sequence is:

01 Hero
02 Problem recognition
03 Decision
04 Work
05 Longevity
06 Tardify
07 Process
08 Senior / Who
09 Final CTA

Verify that visual/component assumptions support this architecture without prematurely forcing content into reusable UI patterns.


6. Content model consistency

Review:

- 05-CONTENT-MODEL.md
- 06-CASE-STUDY-ARCHITECTURE.md
- 08-COMPONENT-LIBRARY.md
- 09-TECHNICAL-ARCHITECTURE.md

Check whether the proposed content model supports the documented case-study/page requirements.

Look specifically for:

- fields referenced in one document but impossible to represent in another;
- unnecessary premature abstractions;
- missing essential editorial concepts;
- UI props accidentally being treated as editorial content;
- structured-data information being mixed incorrectly with editorial content.

Do NOT expand the schema speculatively.

If something can remain flexible Markdown/MDX content, that is acceptable.


7. Case-study factual safety

This is especially important.

Compare:

- 00-PROJECT-OVERVIEW.md
- 01-BRAND-POSITIONING.md
- 04-HOMEPAGE-CONTENT-ARCHITECTURE.md
- 06-CASE-STUDY-ARCHITECTURE.md
- 10-SEO-EEAT-STRUCTURED-DATA.md
- 12-ASSET-STRATEGY.md
- 13-CONTENT-GAPS-AND-VALIDATION.md

Find every factual statement involving:

- years;
- lifecycle;
- customer size;
- customer identity;
- ERP history;
- daily usage;
- integrations;
- business outcomes;
- Tardify origin/history;
- screenshots/assets.

Determine whether each is clearly one of:

VERIFIED
TO VERIFY
UNKNOWN
DO NOT PUBLISH

Pay particular attention to statements such as:

- 10+ years;
- 20+ years;
- continuous daily use;
- survived multiple ERP generations.

If documentation currently presents an unverified number as a confident public claim in one place while marking it TO VERIFY elsewhere, normalize it so the documentation cannot accidentally cause Claude to publish it later as established fact.

Do not invent replacements.

Do not delete strategically useful proof concepts merely because their exact values are still pending.

Use explicit validation language instead.


8. Design-system consistency

Compare:

- 00-PROJECT-OVERVIEW.md
- 07-DESIGN-SYSTEM.md
- 08-COMPONENT-LIBRARY.md
- 11-ACCESSIBILITY-AND-PERFORMANCE.md
- 12-ASSET-STRATEGY.md

The accepted design direction is:

Software built to last.

Restrained · Editorial · Engineering

Verify consistency around:

- typography-first design;
- engineering metadata;
- neutral-first colors;
- grid;
- whitespace;
- card policy;
- borders/radius/shadows;
- screenshots;
- legacy UI;
- Tardify UI;
- human imagery;
- motion;
- responsive behavior;
- anti-patterns.

Do not turn design-direction values into exact implementation tokens yet where the documentation intentionally leaves them open.


9. Technical assumptions

Review:

- 05-CONTENT-MODEL.md
- 08-COMPONENT-LIBRARY.md
- 09-TECHNICAL-ARCHITECTURE.md
- 10-SEO-EEAT-STRUCTURED-DATA.md
- 11-ACCESSIBILITY-AND-PERFORMANCE.md

Separate:

A) already approved architectural decisions;

from:

B) implementation decisions that must remain TBD until Task 003 checks current official Astro guidance.

Examples that should generally remain open until Task 003 unless already explicitly decided:

- exact Astro version;
- exact packages;
- exact CSS implementation details;
- exact font family;
- form provider;
- deployment provider;
- analytics;
- optional integrations.

Do not prematurely choose these during Task 002.


10. SEO / E-E-A-T / structured-data consistency

Verify that:

- E-E-A-T is treated as a content/trust framework, not a magic ranking factor;
- structured data reflects visible real content;
- Organization/entity information remains verification-gated;
- case studies are not assigned arbitrary schema types;
- AI-search guidance does not introduce unsupported hacks;
- no mass FAQ/GEO/AI-targeted content is implied;
- ARTIT ↔ Tardify entity wording is consistent.


11. Accessibility/performance alignment

Verify that the design and component documentation does not contradict:

- semantic HTML;
- keyboard accessibility;
- visible focus;
- WCAG AA intent;
- reduced motion;
- responsive/reflow behavior;
- minimal client JavaScript;
- responsive image handling;
- performance-first philosophy.


12. Duplication and source-of-truth boundaries

Some repetition across documents is intentional.

Do NOT aggressively deduplicate the documentation.

However, identify cases where duplication could become dangerous because the same decision could drift independently in multiple files.

Where useful, replace unnecessary duplicated detail with a short authoritative statement + cross-reference, but only when this improves maintainability without making the documentation harder to use.

The goal is:

clear ownership of decisions,

not minimal Markdown file size.


Allowed changes
===============

You may:

- correct spelling/grammar;
- normalize terminology;
- fix broken references;
- improve headings;
- add useful cross-references;
- clarify authoritative-document ownership;
- convert uncertain factual claims into explicit TO VERIFY language;
- remove accidental contradictions;
- remove clearly accidental duplication where meaning is preserved.

You may NOT:

- change positioning;
- add/remove pages;
- change the sitemap;
- create a Folyamatdigitalizálás landing page;
- change the ARTIT ↔ Tardify brand architecture;
- invent customer/project facts;
- invent testimonials;
- invent metrics;
- choose fonts;
- choose deployment;
- choose analytics;
- choose a CSS framework;
- scaffold Astro;
- install dependencies;
- implement UI.


Working method
==============

1. Read TASK/002-documentation-foundation.md.

2. Read all DOC/*.md files.

3. Build an internal consistency map before editing.

4. Search the repository for important recurring terms and factual claims.

5. Make only documentation changes justified by the review.

6. Review the resulting git diff carefully.

7. Re-run cross-document checks after edits.

8. Do not commit unless the project's normal workflow explicitly requires it. Report git status either way.


Definition of Done
==================

Task 002 is complete only if:

- routes match across documentation;
- core positioning is consistent;
- ARTIT ↔ Tardify relationship is unambiguous;
- homepage architecture is consistent;
- case-study factual claims are safely validation-gated;
- content model and case-study architecture are compatible;
- design/component/accessibility rules align;
- technical TBDs remain TBD where appropriate;
- SEO/E-E-A-T/schema guidance is internally consistent;
- documentation cross-references resolve;
- no approved strategic decision was silently changed;
- the DOC/ set is safe to use as the source of truth for Task 003.


Completion report
=================

Return a detailed completion report with exactly these sections:

## 1. Final status

Use one of:

COMPLETE
COMPLETE WITH OPEN DECISIONS
BLOCKED

## 2. Files changed

For every changed file:
- filename;
- concise description of what changed and why.

If no changes were necessary, say so explicitly.

## 3. Cross-document consistency audit

Summarize findings for:
- positioning;
- IA/routes;
- ARTIT ↔ Tardify;
- homepage architecture;
- content model;
- case studies;
- design system/components;
- technical architecture;
- SEO/E-E-A-T/schema;
- accessibility/performance.

## 4. Factual validation audit

List any claims that were:
- confirmed as safely framed;
- changed to TO VERIFY;
- still unresolved.

Do not claim a fact was externally verified unless you actually had an authoritative source for it.

## 5. Contradictions found and resolved

For each:
- source files;
- issue;
- resolution.

If none, say none.

## 6. Open decisions

List only decisions that genuinely need owner input before or during later tasks.

Do not list already accepted decisions as open questions.

## 7. Documentation source-of-truth map

State which DOC file should be considered authoritative for each major domain:

- project overview;
- positioning;
- IA;
- page architecture;
- homepage content;
- content model;
- case studies;
- design system;
- components;
- technical architecture;
- SEO/E-E-A-T/schema;
- accessibility/performance;
- assets;
- validation backlog.

## 8. Task 003 readiness

State explicitly either:

READY FOR TASK 003

or

NOT READY FOR TASK 003

and explain why.

## 9. Repository state

Report:
- git status;
- whether files are modified;
- whether any non-documentation files changed;
- whether any dependencies or Astro scaffold were introduced.

Stop after the completion report.

Do not start Task 003.