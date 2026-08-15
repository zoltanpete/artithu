# Task 001 — Repository Foundation

## Status

`READY`

## Objective

Prepare the new greenfield ARTIT web repository for documentation-driven development.

This task does **not** scaffold Astro and does **not** implement website UI.

## Context

The previous ARTIT.hu ran on WordPress.

The new project is a clean greenfield repository.

There is no legacy frontend code to audit or preserve.

## Required work

1. Ensure root repository contains:
   - `README.md`
   - `.gitignore`
   - `.editorconfig`
   - `DOC/`
   - `TASK/`

2. Add the provided documentation files under `DOC/`.

3. Add Task files under `TASK/`.

4. Establish simple repository conventions:
   - UTF-8;
   - LF line endings;
   - Markdown files;
   - clear filenames;
   - no generated build artifacts committed.

5. Review the documentation only for:
   - broken internal file references;
   - obvious contradictions;
   - missing file names referenced by other docs.

6. Do **not** rewrite positioning, IA or design direction.

7. Do **not** create the Astro application in this task.

## Required root files

### `.editorconfig`

Use sensible defaults for:

- UTF-8;
- LF;
- final newline;
- spaces;
- 2-space indentation for common web files where appropriate.

### `.gitignore`

At this phase include standard ignores suitable for the future Astro/Node project:

- `node_modules/`
- `dist/`
- `.astro/`
- local environment files;
- OS/editor noise where appropriate.

Do not ignore required configuration/documentation.

## Documentation rule

Repository documentation is part of the product.

Future implementation tasks must update relevant `DOC/` files when decisions change.

## Definition of Done

- [ ] Root structure exists.
- [ ] `DOC/` files are present.
- [ ] `TASK/` files are present.
- [ ] README points to the correct starting documents.
- [ ] `.gitignore` is appropriate for greenfield Astro/Node development.
- [ ] `.editorconfig` exists.
- [ ] No Astro scaffold exists yet unless it was already intentionally created outside this task.
- [ ] No positioning/design/content decisions were silently changed.
- [ ] Any contradiction found is reported rather than silently reconciled.

## Completion report

Return:

1. final status;
2. files created/changed;
3. documentation inconsistencies found;
4. any unresolved blockers;
5. recommended next task.

Expected next task:

`Task 002 — Documentation Foundation Review`
