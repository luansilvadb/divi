# Proposal: Full Internationalization (i18n) Coverage

## Problem
The Cashew application UI (managed by `LanguageBottomSheet.vue`) offers a wide variety of languages including French, Spanish, Chinese, Hindi, Arabic, Russian, Japanese, German, Korean, Turkish, Italian, Vietnamese, and Polish. However, the current i18n implementation in `src/i18n/index.ts` only exports `en-US` and `pt-BR`. This results in missing translations or a fallback to English for any of the other selected languages, creating a poor user experience for non-English/non-Portuguese speakers.

## Purpose
The primary goal is to provide a complete and functional translation system for all languages listed in the "Idioma" selection menu. 
- Create translation files for: `fr`, `es`, `zh-CN`, `zh-TW`, `hi`, `ar`, `pt-PT`, `ru`, `ja`, `de`, `ko`, `tr`, `it`, `vi`, `pl`.
- Update `src/i18n/index.ts` to export all these new languages.
- Ensure the translations are consistent with the existing `en-US` and `pt-BR` structure.

## Impact
- **New Folders/Files**: Multiple new folders in `src/i18n/` (one for each locale).
- **Core Files**: `src/i18n/index.ts` will be updated to include all exports.
- **User Interface**: Users will have a truly localized experience across all menu options.
- **Maintenance**: Adding new translation keys will now require updating all supported locale files.
