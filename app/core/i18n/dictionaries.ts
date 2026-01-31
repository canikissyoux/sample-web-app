// core/i18n/dictionaries.ts

export const dictionaries = {
    th: {

    },
    en: {

    }
} as const;

export type Language = keyof typeof dictionaries;

export type Dictionary = typeof dictionaries[Language];