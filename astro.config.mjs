// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain (Task 019; corrected post-deployment). Originally wired
// as `https://artit.hu`, but the live FORPSI host redirects that origin to
// `https://www.artit.hu` — the actual canonical host, confirmed after
// deployment. A `site` value that redirects elsewhere would make every
// canonical/hreflang/OG/JSON-LD/sitemap URL on the site point at a
// non-canonical, redirecting origin, which is exactly the outcome those
// tags exist to prevent — so `site` now matches the host that actually
// serves the content. Every one of those URL kinds resolves through this
// one `Astro.site` value via `new URL(path, Astro.site)` (see
// `BaseLayout.astro` and the two case-study pages), so changing it here is
// the only change needed — see DOC/09-TECHNICAL-ARCHITECTURE.md
// "Localization"/"Task 019" for the full verification.
const site = 'https://www.artit.hu';

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
