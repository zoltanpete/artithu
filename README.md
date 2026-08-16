# ARTIT Web

Greenfield Astro marketing site for ARTIT.

## Project principles

- Content and information architecture first.
- Restrained, editorial, engineering visual direction.
- Static-first Astro implementation with minimal client-side JavaScript.
- Real project evidence over generic marketing claims.
- Documentation is part of the product and must stay synchronized with implementation.

## Start here

Read:

1. `DOC/00-PROJECT-OVERVIEW.md`
2. `DOC/01-BRAND-POSITIONING.md`
3. `DOC/02-INFORMATION-ARCHITECTURE.md`
4. `DOC/03-SITEMAP-AND-PAGE-ARCHITECTURE.md`
5. `DOC/07-DESIGN-SYSTEM.md`
6. `DOC/09-TECHNICAL-ARCHITECTURE.md`

Work is tracked in `TASK/`.

## Development

Requires Node.js `>=22.12.0` and npm.

```bash
npm install
npm run dev       # start dev server at http://localhost:4321
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run check     # Astro type/content validation
```

Fonts (Work Sans, Space Mono) are self-hosted under `src/fonts/` — no Google Fonts CDN request at runtime. See `src/fonts/PROVENANCE.md` for license/source.

Visit `/design-foundation` in dev/preview to review the implemented typography/color/spacing foundation. It's an internal, `noindex` fixture — not a real page, not linked from navigation.

## Status

Design foundation: typography, color, spacing, containers and interaction states implemented (Task 004B). Homepage sections, navigation and footer are not implemented yet — see `DOC/09-TECHNICAL-ARCHITECTURE.md` for what exists and `TASK/` for what's next.

No legacy WordPress implementation is to be migrated. Existing ARTIT content/assets may be reused only after explicit review.
