// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain (Task 019) — owner-confirmed canonical origin. Every
// canonical/hreflang/OG/JSON-LD URL in `BaseLayout.astro` and the two
// case-study pages was already built (Task 017/018) to resolve through this
// one `Astro.site` value via `new URL(path, Astro.site)`, so wiring it here
// is the only change needed to turn every one of those from a relative path
// into a correct absolute production URL — see DOC/09-TECHNICAL-ARCHITECTURE.md
// "Localization"/"Task 019" for the full before/after verification.
const site = 'https://artit.hu';

export default defineConfig({
	site,
	// Astro's native i18n routing (Task 007B) — `/` = hu (default, unprefixed),
	// `/en/` = en. Chosen over hand-rolled locale routing after inspecting the
	// sibling Tardify project's own implementation (astro.config.mjs in
	// ../tardifyweb), which uses the identical `prefixDefaultLocale: false`
	// config for the same `/`/`/en/` URL strategy — see
	// DOC/09-TECHNICAL-ARCHITECTURE.md "Localization" for the full audit.
	i18n: {
		defaultLocale: 'hu',
		locales: ['hu', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	// Task 019 — standard Astro-supported sitemap integration, not custom
	// sitemap code. `filter` excludes every internal/non-production route by
	// path prefix (`/art-direction/`, `/design-foundation`) and the 404 page
	// — the same route set `public/robots.txt` already disallows/noindexes,
	// kept consistent with that file rather than a second, divergent list.
	integrations: [
		sitemap({
			filter: (page) => {
				const path = new URL(page).pathname;
				if (path.startsWith('/art-direction/')) return false;
				if (path === '/design-foundation' || path === '/design-foundation/') return false;
				if (path === '/404' || path === '/404/') return false;
				return true;
			},
		}),
	],
});
