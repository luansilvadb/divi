# Specification: Internationalization Support

## Requirement: Complete Locale Support

### Description
The system must fully recognize and provide translated content for all languages presented to the user in the language selection menu.

### Acceptance Criteria
1.  **GIVEN** the translation selection menu is open
    - **WHEN** a user selects any language (e.g., French, Spanish, Hindi, Arabic, etc.)
    - **THEN** the application's core navigation (Home, Transactions, Budgets, etc.) should update to that language.
2.  **GIVEN** the application's boot sequence
    - **WHEN** the `uiStore` specifies a locale that exists in `LanguageBottomSheet.vue`
    - **THEN** `vue-i18n` should load the corresponding messages from `src/i18n/`.
3.  **GIVEN** the `src/i18n/index.ts` file
    - **WHEN** adding new translations
    - **THEN** all 18 supported languages MUST be exported in the default export object.

### Implementation Requirements
- **Directory Structure**: Every language must have its own directory under `src/i18n/`.
- **Key Consistency**: All locale files must contain the same set of keys as `src/i18n/en-US/index.ts`.
- **Locale Mapping**: The keys in `src/i18n/index.ts` must match the values used in `LanguageBottomSheet.vue` (e.g., `zh-CN`, `pt-PT`).
