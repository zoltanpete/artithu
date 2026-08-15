# Task 002 — Documentation Foundation Review

## Status

`BLOCKED_BY_TASK_001`

## Objective

Turn the approved strategy/IA/design documentation into the authoritative repository baseline before application scaffold.

## Important

This is a documentation review and normalization task.

Do not reopen approved strategy.

Do not redesign the information architecture.

Do not scaffold Astro yet.

## Source of truth

Review all files in `DOC/`.

The approved decisions are intentional.

If two documents contradict each other:

1. report the contradiction;
2. identify both locations;
3. propose a resolution;
4. do not silently pick one unless one is clearly an outdated duplicate.

## Required review

Check:

- terminology consistency;
- route consistency;
- ARTIT ↔ Tardify wording;
- IA consistency;
- homepage section naming;
- case study naming;
- design anti-pattern consistency;
- validation/TODO coverage;
- cross-document links;
- technical assumptions that should remain TBD until scaffold.

## Required improvements

Allowed:

- fix spelling;
- improve headings;
- add internal references;
- remove accidental duplication where meaning is unchanged;
- convert uncertain claims to explicit `TO VERIFY`.

Not allowed without approval:

- new pages;
- new services;
- new positioning;
- different CTA strategy;
- new design style;
- invented project facts.

## Deliverable

Updated documentation baseline plus report containing:

1. files changed;
2. contradictions found;
3. unresolved decisions;
4. facts moved to `TO VERIFY`;
5. whether documentation is ready for technical scaffold.

## Definition of Done

- [ ] Route names match across docs.
- [ ] Core positioning is consistent.
- [ ] HCA matches page architecture.
- [ ] Design rules are consistent.
- [ ] Case study facts are separated from unverified claims.
- [ ] Technical unknowns remain explicit.
- [ ] Documentation can serve as source of truth for Task 003.

Expected next task:

`Task 003 — Astro Foundation`
