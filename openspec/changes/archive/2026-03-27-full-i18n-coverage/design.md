# Design: Full Internationalization (i18n) Coverage

## Context
The application uses `vue-i18n` for localization. Currently, the source `src/i18n` contains only `en-US` and `pt-BR`. The `LanguageBottomSheet.vue` component UI (shown in the settings) lists a total of 18 languages, but selecting most of them leads to broken translations.

## Goals
1.  Establish a complete directory structure for all 18 languages in `src/i18n/`.
2.  Enable support in `src/i18n/index.ts` so `vue-i18n` can recognize and load these locales.
3.  Ensure that all core UI labels (navigation, footer, settings sections, and settings items) have translated versions.

## Solution
We will follow the existing pattern:
1.  **Locales Directory Structure**: 
    - Create directories for: `ar`, `de`, `es`, `fr`, `hi`, `it`, `ja`, `ko`, `pl`, `pt-PT`, `ru`, `tr`, `vi`, `zh-CN`, `zh-TW`.
    - Each directory will contain an `index.ts` file exporting the translation object.
2.  **Centralized Export**: 
    - Update `src/i18n/index.ts` to import and export all the new languages.
3.  **Translation Management**: 
    - The keys will be based on the master `src/i18n/en-US/index.ts` schema.
    - We will provide initial translations for all keys.

## Risks / Trade-offs
- **Translation Quality**: As an AI, I can provide translations, but for perfect accuracy, a native speaker should review them later.
- **Bundle size**: Adding 16 new translation files will slightly increase the application bundle size, although these are typically small JSON/TS objects.
- **Maintenance**: Adding new features will now require translating labels into 18 different languages.
