# Task 004A — Typography + Color Direction Proposal

## Status

`READY`

## Phase

Research and direction proposal only.

This task is the first checkpoint of Task 004.

**Do not implement the final design foundation in this task.**

The output of Task 004A will be reviewed by the project owner. Only the approved direction may proceed to Task 004B — Design Foundation Implementation.

---

# Claude execution prompt

We are continuing the ARTIT.hu greenfield website project.

Completed:

- Task 001 — Repository Foundation
- Task 002 — Documentation Foundation Review
- Task 003 — Astro Foundation

Task 003 produced a clean Astro 7 foundation with:

- Astro 7.2.2 at the time of Task 003;
- TypeScript strict configuration;
- npm;
- no UI framework;
- no CSS framework;
- no client-side framework;
- zero client JavaScript on the placeholder page;
- semantic CSS token foundation;
- BaseLayout;
- minimal SEO primitives;
- minimal CaseStudy Content Collection;
- successful build and `astro check`.

We are now starting:

**Task 004A — Typography + Color Direction Proposal**

This task is a DESIGN RESEARCH + DIRECTION task.

It is deliberately separated from implementation.

You must stop after presenting the proposal.

Do not start Task 004B.

---

## 1. Read the repository first

Before researching or proposing anything, read the relevant repository documentation.

At minimum:

- `README.md`
- `DOC/00-PROJECT-OVERVIEW.md`
- `DOC/01-BRAND-POSITIONING.md`
- `DOC/02-INFORMATION-ARCHITECTURE.md`
- `DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md`
- `DOC/04-HOMEPAGE-CONTENT-ARCHITECTURE.md`
- `DOC/07-DESIGN-SYSTEM.md`
- `DOC/08-COMPONENT-LIBRARY.md`
- `DOC/09-TECHNICAL-ARCHITECTURE.md`
- `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`
- `DOC/12-ASSET-STRATEGY.md`
- `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`

Also inspect the current implementation relevant to design foundations:

- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `package.json`

Do not treat this prompt as a replacement for repository documentation.

The repository documentation remains the source of truth.

---

# 2. Design objective

The accepted internal design concept is:

> Software built to last.

The visual character is:

> Restrained · Editorial · Engineering

The site should feel like an experienced software engineering studio that builds business-critical systems for long-term use.

It must NOT feel like:

- a generic digital agency;
- a generic SaaS landing page;
- an AI startup;
- a developer portfolio;
- a corporate ERP vendor;
- a luxury editorial brand disconnected from software engineering.

Typography and color should communicate:

- seniority;
- precision;
- calm confidence;
- technical competence;
- longevity;
- clarity;
- business relevance.

The system should allow real software screenshots and long-running project evidence to carry much of the visual proof.

---

# 3. Locked design principles

Treat the following as approved constraints.

Do not reopen them during Task 004A.

## Typography

Primary visual system is typography.

Direction:

- modern grotesk / neo-grotesk sans;
- strong display performance;
- excellent body readability;
- not overly geometric;
- not decorative for its own sake;
- not startup-generic.

Monospace may be used only as a restrained metadata language.

Examples:

```text
CASE / 01
STATUS        ACTIVE
LIFECYCLE     XX+ YEARS
```

Do not make the site resemble a terminal or developer tool.

## Color

Neutral-first.

Direction:

- warm off-white / light neutral background;
- dark charcoal foreground;
- restrained gray scale;
- one controlled ARTIT accent.

Accent is functional:

- CTA;
- links;
- active state;
- diagram highlight;
- small metadata highlight.

Do not use decorative gradients, glow, neon or excessive color.

## Layout / visual language

- rigorous grid;
- generous whitespace;
- restrained borders;
- low radius;
- little or no shadow;
- minimal cards;
- editorial composition;
- engineering metadata;
- real software UI as evidence.

## Motion

Subtle only.

No animation direction needs to be developed in Task 004A.

---

# 4. Research requirement

Do not choose typography based only on taste or memory.

Research current, real font options and verify them from authoritative sources.

For every font proposed, verify where possible:

- license;
- whether self-hosting is allowed;
- available webfont files/formats;
- available weights/styles;
- variable-font availability;
- Hungarian / Latin Extended support;
- approximate delivery implications;
- source/maintainer;
- whether it is actively maintained or reliably distributed.

Prefer primary sources such as:

- official type foundry/project site;
- official GitHub repository;
- Google Fonts when the font is distributed there;
- official license files/documentation.

Do not rely on random font-list articles as authority.

If licensing or Hungarian character support cannot be confidently verified, explicitly say so and do not recommend the font as the primary choice.

---

# 5. Existing ARTIT brand assets

Inspect the repository for any existing ARTIT logo, color or brand assets.

If no authoritative ARTIT brand color asset exists, do not invent a claim that a proposed accent is historically "the ARTIT color."

Instead present accent directions as new design-system proposals.

If existing assets do contain a clearly established brand color, report it separately and explain whether/how it should influence the proposals.

Do not modify assets in this task.

---

# 6. Required typography directions

Produce **3 typography directions**.

Not 10.

Each direction must be genuinely distinct while still fitting the accepted ARTIT design concept.

For each direction provide:

## A. Primary sans

Specify:

- font family;
- source;
- license;
- Hungarian / Latin Extended support;
- variable/static status;
- recommended web weights;
- why it fits ARTIT;
- possible weakness/risk.

## B. Metadata monospace

Specify either:

- a paired monospace family;

or

- the same monospace recommendation shared across multiple directions if that is clearly the best solution.

Explain why it works with the sans.

The monospace must remain secondary.

## C. Typographic character

Describe the direction in practical terms.

For example:

- more engineering;
- more editorial;
- more neutral;
- more human;
- more institutional.

Avoid vague mood-board language.

## D. Suggested use

Explain how it would behave for:

- hero H1;
- section H2;
- body;
- lead;
- metadata;
- buttons/navigation.

## E. Tradeoffs

State what we gain and what we lose with the direction.

---

# 7. Typography constraints

The site is Hungarian-first.

Therefore Hungarian characters must work correctly, including:

```text
á é í ó ö ő ú ü ű
Á É Í Ó Ö Ő Ú Ü Ű
```

Do not recommend a font without confidence that these are supported.

Performance matters.

Prefer:

- one primary sans family;
- restrained number of weights;
- one small monospace family only if needed;
- variable fonts when they materially simplify delivery.

Do not recommend multiple decorative display fonts.

Do not recommend icon fonts.

Do not propose a typography stack that requires a large number of font files without strong justification.

---

# 8. System fallback strategy

For each primary typography direction, also provide a sensible fallback stack.

Example structure only:

```css
font-family: "Chosen Sans", system-ui, sans-serif;
```

Do not implement it yet.

Explain whether the design is robust during font loading and fallback.

---

# 9. Required color directions

Produce **3 color directions**.

They may correspond to the typography directions, but they do not have to be permanently coupled.

Each must respect:

> neutral-first + one controlled accent.

For each direction provide a compact palette with semantic roles.

At minimum:

```text
Background
Surface
Text
Muted text
Border
Accent
Accent hover/strong
Dark section background
Dark section text
```

Provide proposed color values.

These values are proposals, not implementation.

---

# 10. Color accessibility

Check relevant foreground/background combinations for WCAG contrast.

At minimum evaluate:

- body text on main background;
- muted text on main background;
- accent link/text on main background if accent is used as text;
- primary CTA text/background;
- dark-section body text/background;
- dark-section muted text/background.

Target WCAG 2.2 AA at minimum for normal text.

Do not present a palette as recommended if its intended usage fails accessibility.

If an accent is unsuitable for small text but suitable for large/decorative/filled controls, explicitly constrain its role.

---

# 11. Color-direction character

The three directions should be meaningfully different.

Possible conceptual territory may include, but is not limited to:

- warm technical neutral;
- cooler engineering neutral;
- restrained industrial/editorial neutral.

Do not force these exact categories if research/design reasoning produces better ones.

Avoid:

- generic SaaS blue by default;
- bright startup purple;
- neon green;
- gradients;
- overly black luxury aesthetic;
- beige lifestyle branding;
- excessive desaturation that destroys interaction clarity.

The accent must feel intentional rather than fashionable.

---

# 12. Dark-section compatibility

The accepted design system allows rare dark sections, with the Longevity section as a likely candidate.

For every color direction show how the palette translates into one dark section.

The dark section should feel like a deliberate rhythm change, not a separate theme.

---

# 13. Real screenshot compatibility

Consider that the site will include:

- modern Tardify screenshots;
- potentially older/legacy business application screenshots;
- different UI color schemes;
- anonymized customer-system screenshots.

The site palette must not fight with those screenshots.

Explain which color direction provides the best neutral frame for heterogeneous real software evidence.

This matters.

The ARTIT site should frame the software, not visually overpower it.

---

# 14. Do not redesign the logo

Task 004A is not a branding/logo task.

Do not:

- redesign the ARTIT logo;
- propose new logo concepts;
- generate logo assets;
- alter the wordmark;
- introduce a symbol system.

If the current logo creates a real typography/color constraint, report the constraint only.

---

# 15. No implementation

This is critical.

Do NOT:

- modify `tokens.css`;
- modify `global.css`;
- install fonts;
- download font files;
- add npm packages;
- modify Astro components;
- implement buttons;
- implement containers;
- implement homepage sections;
- create production CSS;
- create a design system page;
- create animations.

Repository changes should normally be **none** in Task 004A.

If you believe a documentation correction is absolutely necessary because you found a contradiction, report it first rather than silently editing it.

The purpose of this checkpoint is owner selection before implementation.

---

# 16. Comparison matrix

After presenting the three typography and three color directions, provide a concise comparison matrix.

Score or assess each proposed combined direction on:

- ARTIT positioning fit;
- editorial character;
- engineering character;
- body readability;
- Hungarian support confidence;
- licensing simplicity;
- web performance;
- screenshot compatibility;
- distinctiveness without trendiness;
- long-term durability.

Do not use fake mathematical precision.

A qualitative scale such as:

```text
Excellent
Strong
Good
Weak
```

is preferred.

---

# 17. Combined recommendations

From the research, create **3 combined design directions**.

Each combined direction should contain:

- primary sans;
- metadata mono;
- neutral palette;
- accent;
- short rationale;
- main tradeoff.

Name them descriptively, not with marketing names.

For example:

```text
Direction A — Editorial Engineering
Direction B — Neutral Technical
Direction C — Warm Industrial
```

These names are only illustrative.

---

# 18. Final recommendation

Choose **one recommended direction**.

Explain clearly:

1. why it best fits ARTIT's positioning;
2. why it will age well;
3. why it supports long-form/business content;
4. why it works with software screenshots;
5. why it differentiates ARTIT from generic SaaS/agency sites;
6. what the main risk/tradeoff is.

Also identify a **second-choice direction**.

Do not pretend all three are equally good.

We want a useful design decision.

---

# 19. Proposed Task 004B inputs

For the recommended direction, provide a concrete proposed implementation brief for Task 004B.

Include proposed:

## Typography

```text
Primary font
Mono font
Weights
Fallback stacks

Hero max size direction
H2 max size direction
H3 direction
Lead direction
Body direction
Small direction
Metadata direction

Line-height principles
Letter-spacing principles
```

Do not over-specify exact responsive CSS yet unless needed to explain the direction.

## Color roles

Map proposed values to the existing semantic token names:

```css
--color-bg
--color-surface
--color-text
--color-text-muted
--color-border
--color-accent
```

If additional semantic roles are needed, propose them explicitly.

Do not implement them.

## Font delivery

Recommend:

- self-hosted vs external;
- variable vs static;
- likely file count;
- likely weights;
- preload strategy only if justified.

Again: proposal only.

---

# 20. Evidence and sources

Include the authoritative sources used for font/license/charset research.

Keep sources focused.

Do not create a huge bibliography.

For every recommended font, there must be enough source information for the owner to verify:

- what it is;
- where it comes from;
- how it is licensed.

If you use web research for accessibility or browser/font-delivery claims, prefer authoritative sources.

---

# 21. Owner decisions required

End the proposal by explicitly asking the owner to select or approve:

1. combined design direction;
2. primary sans;
3. metadata monospace;
4. accent/color direction.

Also surface any genuine decision that cannot be made safely without an existing ARTIT asset.

Do not ask questions that the research itself could answer.

---

# Definition of Done

Task 004A is complete only if:

- all relevant repository documentation was reviewed;
- existing brand assets were checked;
- exactly 3 credible typography directions were researched;
- exactly 3 credible color directions were proposed;
- Hungarian support was considered;
- licensing was checked;
- performance implications were considered;
- contrast was evaluated;
- screenshot compatibility was considered;
- 3 combined directions were presented;
- one direction was clearly recommended;
- a second choice was identified;
- Task 004B implementation inputs were proposed;
- no design implementation was performed;
- no dependencies were added;
- no font files were downloaded into the repo;
- the owner has enough information to choose a direction.

---

# Completion report

Return the result with exactly these sections:

## 1. Final status

Use:

`PROPOSAL READY`

or

`BLOCKED`

## 2. Repository / brand asset findings

Report:

- relevant existing design files inspected;
- ARTIT brand assets found;
- whether an authoritative existing accent/color was found;
- constraints discovered.

## 3. Typography research

Present exactly 3 directions.

For each include:

- primary sans;
- metadata mono;
- source/license;
- Hungarian support;
- delivery/performance notes;
- design character;
- strengths;
- risks.

## 4. Color research

Present exactly 3 directions.

For each include:

- semantic palette;
- contrast/accessibility notes;
- dark-section treatment;
- screenshot compatibility;
- strengths;
- risks.

## 5. Combined directions

Present exactly 3 combined directions.

Each should be easy to compare.

## 6. Comparison matrix

Compare all 3 combined directions using the required criteria.

## 7. Recommended direction

State:

`RECOMMENDED: <direction>`

Then explain why.

Also state:

`SECOND CHOICE: <direction>`

## 8. Proposed Task 004B implementation inputs

Provide the recommended:

- fonts;
- weights;
- fallback stacks;
- typography scale direction;
- color token mapping;
- font-delivery strategy.

Proposal only.

## 9. Sources checked

List authoritative sources used.

Do not paste long excerpts.

## 10. Owner decisions required

List the specific approvals needed before Task 004B.

## 11. Repository state

Confirm:

- files changed;
- dependencies added;
- fonts downloaded;
- implementation performed.

Expected result:

- no implementation changes;
- no dependencies added;
- no fonts downloaded.

Stop after the completion report.

Do not start Task 004B.
