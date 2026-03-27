# Tasks: standardize-more-options-item

## 1. Implement Standard Visuals

- [x] 1.1 Remove `border` and `border-color` from `.settings-expansion-bg` in `src/pages/MoreActionsPage.vue`.
- [x] 1.2 Remove `style="background: transparent !important"` from the `SettingsItem` in `MoreActionsPage.vue`.

## 2. Standardize Interaction

- [x] 2.1 Remove the `:while-tap="{ scale: 0.98 }"` wrapper from `MoreActionsPage.vue`.
- [x] 2.2 Ensure the `SettingsItem` is at `z-index: 1` relative to the `Motion` background.
- [x] 2.3 Verify that the ripple (`v-ripple`) and hover colors are identical to the sibling items.

## 3. Verify Layout

- [x] 3.1 Verify the border-radius of the `Motion` background matches the `SettingsItem` internal corners.
- [x] 3.2 Ensure `min-height` is consistent across all items.
