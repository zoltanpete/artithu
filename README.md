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

`READY TO DEPLOY` (Task 019). 9 production pages, each with a live English counterpart under `/en/*` (18 production routes total): `/`, `/egyedi-fejlesztes/`, `/munkaink/` (plus its two case-study detail pages), `/tardify/`, `/rolunk/`, `/kapcsolat/` (working Formspree contact form), `/adatkezeles/` (privacy notice). A shared footer (identity, contact/privacy links, email, copyright) renders on every page in both locales. See `DOC/14-LAUNCH-READINESS.md` for the full pre-launch audit trail and `TASK/` for full task history.

No legacy WordPress implementation is to be migrated. Existing ARTIT content/assets may be reused only after explicit review.

## Deployment

Static output only (`npm run build` → `dist/`) — any static host works, no server runtime or adapter required. Production origin: `https://artit.hu` (`site` in `astro.config.mjs`); every canonical/hreflang/OG/JSON-LD URL resolves through it. A sitemap (`@astrojs/sitemap`) is generated at `sitemap-index.xml`. Owner-supplied hosting: FORPSI / BlazeArts Kft. See `DOC/14-LAUNCH-READINESS.md` for the full launch checklist.
