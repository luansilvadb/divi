# Design: Scalable Settings System

## Current Architecture
- `AdvancedSettingsPage.vue` holds local states (`ref`) for many settings.
- Template is 200+ lines of repetitive `SettingsItem` definitions.
- Components use hardcoded labels in PT-BR.

## New Architecture

### 1. Unified `settingsStore`
Move settings to a dedicated Pinia store.

### 2. Localization Keys
Re-organize `i18n` for settings.

### 3. Dynamic Configuration
Define a data structure in a new file `src/core/config/settingsConfig.ts`.

### 4. Simplified Template
The `AdvancedSettingsPage.vue` template will become a loop over the configuration.
