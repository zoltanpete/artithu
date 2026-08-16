// @ts-check
import { defineConfig } from 'astro/config';

// Production `site` is intentionally unset: the canonical ARTIT.hu domain
// is still unresolved (see DOC/13-CONTENT-GAPS-AND-VALIDATION.md). Setting
// it enables canonical URLs, absolute OG URLs and the sitemap integration.
export default defineConfig({});
