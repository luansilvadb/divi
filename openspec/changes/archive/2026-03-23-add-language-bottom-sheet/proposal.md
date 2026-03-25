# Proposal: Add Language Selection Bottom Sheet

## Motivation

The current implementation of the language selection in the "Configurações" (Settings) screen is static. To provide a better user experience, we need to allow users to change the application language through a modern, responsive "Bottom Sheet" interface, as seen in other parts of the application (like the color picker).

## Proposed Changes

- **Component Creation:** Create a new `LanguageBottomSheet.vue` component that displays a list of available languages with a radio-style selection.
- **State Management:** Update `useUiStore` to include a `locale` field, allowing the application to persist the user's language choice.
- **UI Integration:** Update `MoreActionsPage.vue` to trigger the `LanguageBottomSheet` when the "Idioma" item is clicked.
- **Internationalization Persistence:** Update `App.vue` to watch for locale changes in the store and update the `i18n` instance accordingly.

## Impact

- **Affected Components:** `MoreActionsPage.vue`, `App.vue`.
- **Stores:** `src/stores/ui.ts`.
- **New Files:** `src/components/molecules/LanguageBottomSheet.vue`.
- **Dependencies:** Uses existing `vue-i18n` and `quasar` dialog systems.
