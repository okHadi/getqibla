import { en } from './en';
import { ar } from './ar';
import { ur } from './ur';
import { id } from './id';
import { tr } from './tr';
import type { LocaleCopy } from './types';

export const localeCodes = ['en', 'ur', 'id', 'ar', 'tr'] as const;
export type SupportedLocale = (typeof localeCodes)[number];
export const defaultLocale: SupportedLocale = 'en';

export const translations: Record<SupportedLocale, LocaleCopy> = { en, ur, id, ar, tr };

export const localePaths: Record<SupportedLocale, string> = {
  en: '/', ur: '/ur/', id: '/id/', ar: '/ar/', tr: '/tr/',
};

export function getLocaleCopy(locale: SupportedLocale): LocaleCopy {
  return translations[locale];
}

export function isSupportedLocale(value: string): value is SupportedLocale {
  return localeCodes.includes(value as SupportedLocale);
}

export type { LocaleCopy } from './types';
