import { en, type TranslationKey } from './en';

export const defaultLanguage = 'en' as const;

export type SupportedLanguage = typeof defaultLanguage;

export const translations = {
  en,
} as const;

export function translate(key: TranslationKey, language: SupportedLanguage = defaultLanguage): string {
  return translations[language][key];
}
