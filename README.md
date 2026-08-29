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

Eight production HU pages are implemented and content-complete: `/`, `/egyedi-fejlesztes/`, `/munkaink/` (plus its two case-study detail pages), `/tardify/`, `/rolunk/`, `/kapcsolat/` (with a working Formspree contact form). `/en/` is intentionally not published yet — see `DOC/09-TECHNICAL-ARCHITECTURE.md` "Localization" and `DOC/13-CONTENT-GAPS-AND-VALIDATION.md`. There is no footer component (never built; not currently required by any confirmed content). See `DOC/14-LAUNCH-READINESS.md` for the current pre-launch audit and what remains before public launch, and `TASK/` for full task history.

No legacy WordPress implementation is to be migrated. Existing ARTIT content/assets may be reused only after explicit review.

## Deployment

Static output only (`npm run build` → `dist/`) — any static host works, no server runtime or adapter required. The production domain (`site` in `astro.config.mjs`) is intentionally unset until the canonical ARTIT.hu domain is confirmed; setting it enables canonical URLs, absolute Open Graph URLs and a sitemap. See `DOC/14-LAUNCH-READINESS.md` for the full launch checklist.
