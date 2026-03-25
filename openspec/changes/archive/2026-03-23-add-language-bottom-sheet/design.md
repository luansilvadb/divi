# Technical Design: Language Selection Bottom Sheet

## Current State

The "Idioma" (Language) selection in `MoreActionsPage.vue` is a static list item that doesn't trigger any interaction. The application is initialized with `pt-BR` and `en-US` locales but lacks a UI mechanism to switch between them or provide persistence for this choice beyond hardcoded defaults.

## Proposed Implementation

### 1. Store Update (`src/stores/ui.ts`)

Modify the `uiStore` to track and persist the active locale.

- **State:** Add `locale: (LocalStorage.getItem('locale') as string) || 'auto'`.
- **Action:** Add `setLocale(newLocale: string)` that updates the state and saves it to `LocalStorage`.

### 2. Global Listener (`src/App.vue`)

Implement a watch on the `uiStore.locale` in `App.vue`.

- Use `vue-i18n`'s `useI18n()` to access the global locale.
- When `locale` changes, if it's 'auto', detect browser language (using `navigator.language`).
- Map detected language to available locales (e.g., 'pt-BR', 'en-US').

### 3. Language Bottom Sheet (`src/components/molecules/LanguageBottomSheet.vue`)

Create a new component that matches the desired UI from the reference images.

- **Template:**
  - `q-dialog` with `position="bottom"`.
  - `q-card` with rounded top corners.
  - Header: Title "Idioma" and an 'X' close button.
  - Banner: A stylized section with the translation contribution email link.
  - List: `q-list` containing `q-item`s. Each item will have a `q-radio` representing the selected language.
- **Styling:**
  - Dark mode support (background colors, text contrast).
  - High-fidelity matching of the reference image's spacing and typography.

### 4. Integration in Settings (`src/pages/MoreActionsPage.vue`)

- Add `showLanguagePicker` ref.
- Update the `SettingsItem` for "Idioma" to include `@click="showLanguagePicker = true"`.
- Add the `<LanguageBottomSheet v-model="showLanguagePicker" />` component at the end of the template.

## Risks / Trade-offs

- **Translation Coverage:** Adding more language labels to the UI list doesn't mean the app is translated. The initial implementation will focus on switching between available locales (`pt-BR`, `en-US` and `auto`). Other labels will serve as visual placeholders for future expansion.
- **Auto-Detection Reliability:** Detecting the system language might require fallbacks if the detected code doesn't exactly match the supported locales.
