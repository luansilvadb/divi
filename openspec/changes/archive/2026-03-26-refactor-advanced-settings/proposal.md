# Proposal: Refactor Advanced Settings for Scalability and Maintenance

## Overview
The `AdvancedSettingsPage.vue` and related settings components currently contain many hardcoded strings and repeated patterns. This proposal aims to refactor the settings system to be more data-driven, localized, and maintainable.

## Objectives
- **Avoid Hardcoding**: Move all strings to `i18n` and all options to constants or a dedicated settings store.
- **Improve Scalability**: Implement a data-driven approach for rendering settings items, making it easier to add or reorder settings.
- **Centralize State**: Move all advanced settings from local component state to a persistent `settingsStore`.
- **Enhance Componentization**: Standardize how settings items with selectors or toggles are used, ensuring a consistent UI/UX.

## Proposed Changes

### 1. New `settingsStore`
Create a Pinia store to manage all user preferences. This store will handle:
- Default values
- Persistence (via `LocalStorage`)
- Reactions to setting changes

### 2. Localization (i18n)
Expand `src/i18n` to include all labels, captions, and option labels currently hardcoded in the settings pages.

### 3. Settings Configuration
Create a configuration file (e.g., `src/core/config/settings.ts`) that defines:
- Sections and their items
- Available options for selects
- Icons and types for each setting

### 4. Refactored `AdvancedSettingsPage.vue`
Update the page to map over the settings configuration, drastically reducing the template size and making it purely functional.

## Benefits
- Adding a new setting will only require updating the config and the store, without touching the UI logic.
- Easier to translate the app to new languages.
- Consistent behavior across all settings.
- Cleaner, more readable code.

## Risks & Unknowns
- Ensuring the Hero transition remains fluid with the new data-driven structure.
- Migrating existing local state to the new store without losing user preferences (if any were already being saved).
