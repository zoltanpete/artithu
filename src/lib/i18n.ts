/**
 * Locale infrastructure (Task 007B). Two static locales, no client-side
 * switching, no i18n framework — see DOC/09-TECHNICAL-ARCHITECTURE.md
 * "Localization" for the full architecture rationale.
 *
 * URL strategy: `/` = hu (default), `/en/` = en. `hu` is the fallback for
 * `localize()` because the content schema *requires* `hu` on every field;
 * `en` is frequently absent by design (untranslated marketing copy is
 * gated, not invented — see `LocalizedGated` in `src/content.config.ts`)
 * and `localize()` never silently substitutes `hu` for a missing `en` —
 * callers must use `hasTranslation()` to detect that case explicitly.
 */

import { getRelativeLocaleUrl } from 'astro:i18n';

export type Locale = 'hu' | 'en';

export const LOCALES: readonly Locale[] = ['hu', 'en'];

export const DEFAULT_LOCALE: Locale = 'hu';

/** A field with content approved in every supported locale. */
export interface Localized {
	hu: string;
	en: string;
}

/** A field where only `hu` is currently approved; `en` is gated, not invented. */
export interface LocalizedGated {
	hu: string;
	en?: string;
}

/** Read a locale's value from a fully-translated field. */
export function localize(value: Localized, locale: Locale): string {
	return value[locale];
}

/**
 * Read a locale's value from a possibly-untranslated field. Returns `null`
 * when the requested locale has no approved content — callers decide how to
 * represent that (omit the element, show a gated marker), but must never
 * paper over it by silently rendering `hu` text on an `en` page.
 */
export function localizeGated(value: LocalizedGated, locale: Locale): string | null {
	return value[locale] ?? null;
}

export function hasTranslation(value: LocalizedGated, locale: Locale): boolean {
	return value[locale] !== undefined;
}

/**
 * A given canonical (Hungarian-shaped) path, resolved for a locale per the
 * `/` (hu, default/unprefixed) / `/en/...` (en) strategy — delegates to
 * Astro's own native i18n routing (configured in `astro.config.mjs`) rather
 * than reimplementing the prefix rule, so it stays correct if the routing
 * config ever changes. Every page component resolves its own canonical
 * path through this (Task 009 generalized it from the homepage-only
 * `homePath` helper once a second page needed the same behavior).
 */
export function localePath(locale: Locale, path: string): string {
	return getRelativeLocaleUrl(locale, path);
}

/** Homepage path for a given locale — a thin convenience wrapper. */
export function homePath(locale: Locale): string {
	return localePath(locale, '/');
}
