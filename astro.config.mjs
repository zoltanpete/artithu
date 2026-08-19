// @ts-check
import { defineConfig } from 'astro/config';

// Production `site` is intentionally unset: the canonical ARTIT.hu domain
// is still unresolved (see DOC/13-CONTENT-GAPS-AND-VALIDATION.md). Setting
// it enables canonical URLs, absolute OG URLs and the sitemap integration.
export default defineConfig({
	// Astro's native i18n routing (Task 007B) — `/` = hu (default, unprefixed),
	// `/en/` = en. Chosen over hand-rolled locale routing after inspecting the
	// sibling Tardify project's own implementation (astro.config.mjs in
	// ../tardifyweb), which uses the identical `prefixDefaultLocale: false`
	// config for the same `/`/`/en/` URL strategy — see
	// DOC/09-TECHNICAL-ARCHITECTURE.md "Localization" for the full audit.
	// No `src/pages/en/` route exists yet (see that doc section for why),
	// so this currently has no effect on the build beyond making
	// `Astro.currentLocale`/`getRelativeLocaleUrl` available for when it does.
	i18n: {
		defaultLocale: 'hu',
		locales: ['hu', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
