# ARTIT.hu — Accessibility and Performance

## Principle

Accessibility and performance are product/design requirements.

They are not end-of-project audit items.

## Accessibility baseline

Target at minimum:

WCAG 2.2 AA where applicable.

Requirements:

- semantic HTML;
- logical heading structure;
- keyboard-accessible navigation;
- visible focus states;
- accessible mobile menu;
- accessible dropdown behavior;
- sufficient contrast;
- usable target sizes;
- reflow/zoom support;
- no information conveyed only by color;
- meaningful alt text;
- empty alt for decorative images;
- form labels and error states;
- reduced motion support.

## Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Nonessential motion should be removed or substantially reduced.

## Image accessibility

Screenshots:

Alt text should describe the business-relevant visible information when needed.

Do not write generic:

> Screenshot of application.

Decorative UI crops may use empty alt if the same information is already conveyed in nearby text.

## Performance principle

A senior software engineering site must not feel technically heavy or slow.

## JavaScript budget

Default:

minimal to zero client JS per page.

Hydrate only interactive components.

Avoid large animation frameworks unless a real explanatory need justifies them.

## Images

Requirements:

- responsive images;
- correct source sizing;
- no oversized source pushed far beyond usable detail;
- lazy loading below fold;
- modern formats where appropriate;
- explicit dimensions/layout stability.

## Fonts

- minimal families;
- minimal weights;
- subset where appropriate;
- avoid blocking font strategy;
- no unnecessary icon font.

## Third parties

Every third-party script requires justification.

Evaluate:

- privacy;
- performance;
- reliability;
- user value.

## Core Web Vitals

Treat current CWV metrics as implementation quality signals.

Do not optimize only for synthetic scores.

## QA

At relevant milestones verify:

- keyboard navigation;
- focus order;
- mobile reflow;
- 200% zoom;
- reduced motion;
- image loading;
- no obvious layout shifts;
- production performance.
