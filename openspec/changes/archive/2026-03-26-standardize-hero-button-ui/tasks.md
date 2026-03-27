# Tasks: Standardize Hero Button UI 🏛️✅

### 1. Cleanup and Build Stabilization
- [x] 1.1 Remove unused `computed` from `AdvancedSettingsPage.vue`.
- [x] 1.2 Verify `computed` usage in `MoreActionsPage.vue` (Used, kept).
- [x] 1.3 Verify `npm run dev` starts successfully.

### 2. UI Standardization (Alignment & Radius)
- [x] 2.1 Update `MoreActionsPage.vue` template to align the `Motion` wrapper with `SettingsItem` (2px 8px margin matching).
- [x] 2.2 Fix the `border-radius` of the `Motion` layer to match the `SettingsItem` (12px).
- [x] 2.3 Remove the separate `min-height: 64px` from the wrapper to let the content drive the height.

### 3. Visual Consistency (Colors)
- [x] 3.1 Update `.settings-expansion-bg` to be transparent (so it shows the card's background).
- [x] 3.2 Add a subtle dark-mode-specific color only for the transition phase (Matched to target background).
- [x] 3.3 Verify visual consistency with "Idioma" and "Editar página inicial" in both light and dark modes.
