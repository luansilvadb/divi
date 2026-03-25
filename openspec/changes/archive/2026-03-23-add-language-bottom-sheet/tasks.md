# Implementation Tasks: Language Selection Bottom Sheet

## 1. Store Setup

- [x] 1.1 Add `locale` state to `useUiStore` in `src/stores/ui.ts` (Persist with `LocalStorage`).
- [x] 1.2 Add `setLocale` action to `useUiStore`.

## 2. Global Integration

- [x] 2.1 Update `src/App.vue` to watch for `uiStore.locale` changes.
- [x] 2.2 Implement logic in `App.vue` to update `i18n.global.locale` (including 'auto' detection).

## 3. UI Component Creation

- [x] 3.1 Create `src/components/molecules/LanguageBottomSheet.vue`.
- [x] 3.2 Implement the Bottom Sheet layout using `q-dialog` and `q-card`.
- [x] 3.3 Create the header (Title + Close Button).
- [x] 3.4 Create the "Colaboração de Tradução" banner.
- [x] 3.5 Implement the language list with radio selection logic.
- [x] 3.6 Apply styles to match the dark-mode aesthetic of the reference image.

## 4. Integration and Testing

- [x] 4.1 Update `src/pages/MoreActionsPage.vue` to import and use `LanguageBottomSheet`.
- [x] 4.2 Add `showLanguagePicker` state to `MoreActionsPage.vue`.
- [x] 4.3 Connect `@click` handler on the "Idioma" `SettingsItem`.
- [x] 4.4 Verify that selecting a language updates the UI and persists after a page reload.
- [x] 4.5 Improve scrollbar aesthetics globally for a modern look.
