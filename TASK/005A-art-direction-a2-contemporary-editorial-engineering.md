# Task 005A — Art Direction A2: Contemporary Editorial Engineering

## Context

We have completed the Astro foundation, design-foundation calibration, the initial homepage, and three experimental art-direction studies for the new ARTIT website.

The established foundation includes Work Sans, Space Mono, the restrained industrial-neutral palette, dark green as brand anchor, editorial typography, reading/standard/wide containers, restrained radii, robust buttons/links, screenshot-frame primitives, zero-client-JS, and responsive/accessibility constraints.

The initial homepage was competent but felt somewhat too somber, old-school, and not fresh/contemporary enough. The content is not the problem; the concern is the emotional and visual effect.

Three experiments followed:

### Direction A — Editorial Engineering
Preferred direction. Intelligent, composed, credible, distinctive, restrained, strong typography, technical metadata, thin rules, controlled asymmetry and generous whitespace. It feels appropriate for ARTIT and avoids generic SaaS aesthetics.

Weakness: still somewhat static and dry. Too many elements speak at roughly the same visual volume. It is harmonious, but does not pull strongly enough.

### Direction B — Software as Evidence
Too simple as an overall direction, but revealed an important idea: real ARTIT software should be treated as authentic visual evidence and potentially as graphic material, not merely as conventional screenshot sections.

### Direction C — Contemporary Industrial Digital
More visual energy, but too forceful and marked. Large black surfaces and aggressive contrast dominate the content. Do not continue toward C.

## Owner direction

The desired feeling is:

> **frissesség, letisztultság, harmónia — és legyen valami, ami húz**

In English:

> **freshness, clarity, harmony — and there should be something that pulls you in**

Direction A is closest, but not yet enough.

Therefore this is **NOT a fourth independent art direction**. It is an **A2 iteration**:

> Keep Direction A’s visual DNA, but make it more contemporary, fresh, harmonious and visually desirable.

Working name:

# Contemporary Editorial Engineering

Key constraint:

> **Do not make A more aggressive. Make A more attractive.**

## Core design hypothesis

We do not need more decoration. We need more **visual tension inside a very clean system**.

Explore relationships such as:

- large ↔ small
- dense ↔ airy
- typography ↔ real software
- ordered ↔ slightly unexpected
- light ↔ occasional deep-toned surface
- static ↔ subtly dynamic
- precise grid ↔ controlled asymmetry

The result must remain calm and intentional.

## Task objective

Create a refined **Direction A2 experimental homepage view** demonstrating how Editorial Engineering can become fresher, more contemporary, cleaner, more harmonious and emotionally attractive without becoming louder or generic.

This remains an experimental checkpoint. **Do not roll the direction across the full production site yet.**

## 1. Audit first

Before editing:

1. inspect the current homepage;
2. inspect Direction A/B/C experiments;
3. inspect the design-foundation implementation;
4. inspect relevant documentation, especially `DOC/07-DESIGN-SYSTEM.md`, `DOC/08-COMPONENT-LIBRARY.md`, `DOC/09-TECHNICAL-ARCHITECTURE.md`, `DOC/11-ACCESSIBILITY-AND-PERFORMANCE.md`, `DOC/12-ASSET-STRATEGY.md`, plus homepage/content docs;
5. distinguish locked foundation decisions from experimental styling.

Do not overwrite established foundation decisions merely to make the experiment easier.

## 2. Preserve Direction A’s DNA

A2 must clearly feel like an evolution of A. Preserve:

- editorial confidence
- engineering precision
- intelligent restraint
- strong typography
- technical metadata used sparingly
- thin structural rules where useful
- controlled asymmetry
- generous whitespace
- restrained dark-green identity
- credibility over spectacle
- authored composition rather than card-template composition

If it looks like an unrelated fourth concept, the task failed.

## 3. Hero — main experiment

Keep the current core messaging and CTA intent. Do not rewrite the homepage.

Eyebrow:
`AMIKOR A KÉSZ SZOFTVER MÁR NEM ELÉG.`

Headline:
`A szoftver alkalmazkodjon a vállalkozásához. Ne fordítva.`

Lead:
`Egyedi webes üzleti alkalmazásokat tervezünk és fejlesztünk olyan vállalkozásoknak, amelyek működése már túl speciális az Excelhez vagy egy kompromisszumos kész rendszerhez.`

The hero should visually communicate:

> These people genuinely design and build serious software systems.

### Software as graphic material

Do not simply place a conventional rectangular screenshot beside the copy.

Explore a composed use of **real software imagery**, for example:

- a large cropped real UI detail entering the composition;
- a partial application surface instead of a full browser screenshot;
- one dominant crop plus one or two small engineering annotations;
- a UI fragment aligned against the editorial grid;
- controlled clipping/overlap;
- software detail visually continuing toward/beyond a section boundary;
- subtle annotation lines, coordinates or system labels connecting evidence to the engineering language.

Software should become **visual material**, not a generic product screenshot card.

### Asset integrity

Use only real existing approved project/product imagery already available in the repository.

If the correct asset is unavailable, use an explicitly labelled neutral placeholder showing intended crop/geometry. Do **not** fabricate UI, customer data, dashboards, charts or fictional evidence.

## 4. Freshness without trend-chasing

Do not use generic modern-SaaS shortcuts:

- decorative gradients
- glassmorphism/glows
- floating glass cards
- arbitrary 3D objects
- AI blobs
- excessive pills
- giant rounded cards everywhere
- fake dashboards/charts
- gratuitous animation
- meaningless tech decoration
- excessive black blocks in Direction C’s style

Desired reaction:

> “This is a very good contemporary digital studio that clearly understands serious business software.”

Not:

> “This follows current design trends.”

## 5. Green tonal system — explore, do not rebrand

The existing dark green is a useful brand anchor. Explore whether the same family can create more depth through roles such as:

- very light green-tinted surface
- restrained structural accent
- existing primary green
- deep green surface

The goal is richness/freshness within the same identity, not a colorful marketing site.

Do not casually replace the primary green. Any new derived values must remain provisional/experiment-local until approved, be documented, and maintain accessible contrast. If extra tones do not improve the design, do not force them.

## 6. Layering and depth

Explore subtle depth without turning the page into card UI:

- tiny tonal differences between surfaces
- software imagery approaching/crossing grid boundaries
- thin structural lines
- selective tinted areas
- cropping
- foreground/background relationships
- restrained overlaps
- occasional deep-toned surfaces where semantically useful

Avoid shadow-heavy UI. Depth should come mainly from composition and surfaces.

## 7. Asymmetry and rhythm

Push A’s controlled asymmetry slightly further where useful:

- not every section starts on the same axis;
- visual material offsets typography;
- alternate dense and airy moments;
- large editorial statements can lead into compact evidence;
- alignment changes create movement.

Retain a strong underlying grid. Controlled asymmetry, not randomness.

## 8. Problem / “Ismerős helyzet?” section

Direction A is already the best basis. Preserve its conceptual structure:

- two-column symptom arrangement on desktop
- labels like `TÜNET / 01`
- fine structural lines
- restrained green points/markers
- editorial spacing

Refine primarily through rhythm, spacing, alignment, hierarchy, controlled asymmetry and perhaps subtle tonal variation.

Do not turn symptoms into cards. Do not adopt C’s heavy black rows. This section should not compete with the hero.

## 9. Visual focal points

A2 should establish a small number of deliberate focal points:

1. strong hero focal point;
2. secondary visual/evidence moment;
3. calmer editorial sections between them.

Not every section needs a visual trick. Constant emphasis means no emphasis.

## 10. Typography

Keep Work Sans and Space Mono and the calibrated hierarchy unless there is a strong reason otherwise.

You may experiment with line length, heading measure, line breaks, metadata relationships, scale relationships within the existing system, and composition around type.

Do not solve freshness merely by enlarging everything. Maintain excellent Hungarian readability and accented-character handling.

## 11. Motion

Preserve the zero-client-JS philosophy. Do not add a JS animation library.

Minimal CSS-native progressive enhancement is acceptable only if genuinely useful and must respect `prefers-reduced-motion`. Motion is not required; the static composition must work first.

## 12. Responsive behavior

Inspect explicitly at:

- 390 px
- 768 px
- 1440 px
- 1920 px

Mobile must be intentionally composed, not merely collapsed desktop. Simplify asymmetry where necessary, crop software intentionally, prevent horizontal overflow, retain readable line lengths, keep CTA sizing natural, and keep technical labels legible.

## 13. Accessibility and performance

Verify:

- contrast on all new/tinted surfaces;
- keyboard/focus behavior;
- no horizontal overflow;
- no illegibly tiny text;
- reduced-motion support;
- no unnecessary client JS;
- no external font requests;
- no heavy new dependency;
- existing Astro image strategy where appropriate.

Do not trade accessibility for freshness.

## 14. Implementation strategy

Prefer a **contained experimental implementation** following the existing A/B/C experiment pattern.

A2 must be:

- easy to compare with A/B/C;
- clearly labelled experimental;
- `noindex`;
- absent from normal production navigation;
- absent from sitemap/public discovery;
- removable without damaging production architecture.

Use the smallest reasonable implementation surface. No React/Vue/Svelte, Tailwind, animation library or unnecessary icon library.

## 15. Real-browser visual review is mandatory

Render A2 and inspect screenshots at 390, 768, 1440 and 1920 px. Compare A2 directly against Direction A at desktop width.

Evaluate:

- **Freshness:** clearly more contemporary than A without becoming trendy?
- **Pull:** is there now something that draws the eye in?
- **Harmony:** are focal points integrated into one system?
- **Restraint:** still calm, credible and mature?
- **ARTIT identity:** recognizable authored language rather than generic agency template?
- **Software evidence:** authentic proof/material rather than SaaS screenshot decoration?
- **Hierarchy:** clear first, second and third eye targets?
- **Mobile:** character retained after responsive simplification?

If the first implementation does not clearly improve A, iterate before reporting completion.

## 16. Do not roll out yet

Even if A2 succeeds, do not propagate it across the site.

Do not redesign all pages, refactor all shared components, globally lock experimental green tints, or remove A/B/C comparison routes before owner review.

The next step is **owner visual review**.

## 17. Documentation

Keep documentation changes minimal and explicitly provisional.

Record:

- what A2 changed relative to A;
- experimental/provisional decisions;
- temporary derived color/surface values;
- new composition primitives;
- whether real software imagery or placeholder was used;
- what is **not** globally approved yet.

Do not rewrite locked design-system docs as if A2 were approved.

## 18. Validation

Run at minimum:

- `npm run check`
- `npm run build`

Inspect the built/previewed A2 route in a real browser. If the existing Playwright workflow is available, programmatically check horizontal overflow at all four target widths.

Confirm `noindex`, no normal-nav exposure, no sitemap exposure, no accidental external font requests, no unnecessary client JS, and no fabricated evidence.

## 19. Completion report

Return a structured report with:

1. Final status
2. Repository baseline
3. Existing A/B/C audit
4. A2 design thesis
5. Hero changes
6. Software-evidence treatment
7. Freshness / harmony changes
8. Green tonal/surface decisions
9. Asymmetry / rhythm changes
10. Problem-section changes
11. What was deliberately NOT changed
12. Responsive review — 390 / 768 / 1440 / 1920
13. Accessibility / performance regression check
14. Files changed
15. Documentation changes
16. Validation performed
17. Deviations / unresolved issues
18. Repository state
19. Final checkpoint: `READY` / `NOT READY FOR OWNER A2 VISUAL REVIEW`

Also answer explicitly:

> **Does A2, in your own visual assessment, clearly improve Direction A in freshness, harmony and emotional pull without losing its restraint? Why or why not?**

Do not call the task complete merely because the code builds. The goal is a visibly better art-direction candidate.

# Final creative constraint

> **ARTIT should feel like a contemporary digital studio with deep engineering maturity — not a traditional software house wearing a modern skin, and not a trendy software agency trying to look technical.**

Direction A already contains the right DNA.

This task is about making that DNA **more alive, more desirable and more contemporary without making it louder.**
