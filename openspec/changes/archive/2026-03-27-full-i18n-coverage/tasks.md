# Tasks: Full Internationalization (i18n) Coverage

## 1. Core Locale Structure

- [x] Create directories for: `ar`, `de`, `es`, `fr`, `hi`, `it`, `ja`, `ko`, `pl`, `pt-PT`, `ru`, `tr`, `vi`, `zh-CN`, `zh-TW`.
- [x] Implement initial `index.ts` shells for all new locales using labels matching the `en-US` schema.

## 2. Global Integration

- [x] Update `src/i18n/index.ts` to include imports and exports for all 15 new locales.

## 3. Translation Delivery

- [x] Provide translations for `fr` (French)
- [x] Provide translations for `es` (Spanish)
- [x] Provide translations for `zh-CN` (Simplified Chinese)
- [x] Provide translations for `zh-TW` (Traditional Chinese)
- [x] Provide translations for `hi` (Hindi)
- [x] Provide translations for `ar` (Arabic)
- [x] Provide translations for `pt-PT` (European Portuguese)
- [x] Provide translations for `ru` (Russian)
- [x] Provide translations for `ja` (Japanese)
- [x] Provide translations for `de` (German)
- [x] Provide translations for `ko` (Korean)
- [x] Provide translations for `tr` (Turkish)
- [x] Provide translations for `it` (Italian)
- [x] Provide translations for `vi` (Vietnamese)
- [x] Provide translations for `pl` (Polish)

## 4. Verification

- [x] Manually test changing the locale in settings and verifying that navigation labels update correctly.
- [x] Verify that RTL support (Arabic) is handled reasonably by Quasar elements.
