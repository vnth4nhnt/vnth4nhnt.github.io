import { siteConfig } from "../config";
import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { vi } from "./languages/vi";

export type Translation = {
	[K in I18nKey]: string;
};

import {
	DEFAULT_LOCALE,
	SUPPORTED_LOCALES,
	type SupportedLocale,
} from "./constants";

export { DEFAULT_LOCALE, SUPPORTED_LOCALES, type SupportedLocale };

const map: { [key: string]: Translation } = {
	en: en,
	vi: vi
};

const defaultTranslation = map[DEFAULT_LOCALE.toLowerCase()];

export function getTranslation(lang: string): Translation {
	return map[lang.toLowerCase()] || defaultTranslation;
}

export function i18n(key: I18nKey, lang?: string): string {
	// If lang is explicitly provided, use it (e.g., for language switcher buttons)
	if (lang) {
		return getTranslation(lang)[key];
	}
	
	let locale = siteConfig.lang || DEFAULT_LOCALE;
	
	// In browser, try to detect locale from localStorage or URL
	if (typeof window !== 'undefined') {
		// Check localStorage first
		const storedLang = localStorage.getItem('preferred-language');
		if (storedLang && SUPPORTED_LOCALES.includes(storedLang as any)) {
			locale = storedLang;
		} else {
			// Fallback to URL detection
			const pathParts = window.location.pathname.split('/');
			if (pathParts[1] && SUPPORTED_LOCALES.includes(pathParts[1] as any)) {
				locale = pathParts[1];
			}
		}
	}
	
	return getTranslation(locale)[key];
}

export function getKeyToLanguage(lang: string): string {
	const normalized = lang.replace("_", "-").toLowerCase();
	const [language, region] = normalized.split("-");
	if (!region) return language;
	return `${language}-${region.toUpperCase()}`;
}
