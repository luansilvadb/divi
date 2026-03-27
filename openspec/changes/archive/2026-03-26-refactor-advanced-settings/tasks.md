# Implementation Tasks: Advanced Settings Refactor

## Phase 1: Foundation
- [x] Create `src/stores/settings.ts` using Pinia with persistence.
- [x] Centralize all options (font styles, animation modes, etc.) into `src/core/constants/settingsOptions.ts`.
- [x] Move hardcoded strings from `AdvancedSettingsPage.vue` to `src/i18n`.

## Phase 2: Data Structure & Config
- [x] Define the `advancedSettingsConfig` in `src/core/config/settings.ts`.
- [x] Create a `SettingsItemRenderer` component or update `SettingsItem` to handle more types of values (badges, toggles, selects).

## Phase 3: Page Refactor
- [x] Refactor `AdvancedSettingsPage.vue` to use the `settingsStore`.
- [x] Replace static `SettingsItem` definitions with a dynamic loop over the `advancedSettingsConfig`.
- [x] Test the Hero transition (`layoutId="settings-hero-bg"`) for smoothness.

## Phase 4: Expansion
- [x] Standardize labels and categories in `MoreActionsPage.vue` to follow the same i18n/config pattern.
- [x] Apply the same data-driven approach if more settings pages are created.

## Phase 5: Intelligent Search
- [x] Implement a `searchQuery` state in `AdvancedSettingsPage.vue`.
- [x] Create a computed `filteredSettings` that searches through localized labels and captions.
- [x] Add a visual search bar in the `SliverAppBar` or as a sticky component.
- [x] Ensure smooth transitions between search results.

## Cleanup
- [x] Delete unused local `ref`s in `AdvancedSettingsPage.vue`.
- [x] Verify that all settings actually persist across app restarts.
