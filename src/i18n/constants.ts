export const SUPPORTED_LOCALES = ["en", "vi"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number] | string;

export const DEFAULT_LOCALE: SupportedLocale = "en";
