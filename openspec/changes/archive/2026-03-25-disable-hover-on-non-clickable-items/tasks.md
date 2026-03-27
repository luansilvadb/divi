# Tasks: disable-hover-on-non-clickable-items

## 1. Implement Conditional Class

- [ ] 1.1 In `src/components/molecules/SettingsItem.vue`, add `:class="{ 'is-clickable': clickable }"` to the `q-item` template.
- [ ] 1.2 Verify that the `clickable` default prop remains `true`.

## 2. Refactor CSS

- [ ] 2.1 Update the `&:hover` rule in `SettingsItem.vue` to `&.is-clickable:hover`.
- [ ] 2.2 Update the dark mode hover rule in `SettingsItem.vue` accordingly.

## 3. Verify & Clean up

- [ ] 3.1 Inspect `AdvancedSettingsPage.vue` to verify "Altura do cabeçalho" no longer shows background hover.
- [ ] 3.2 Inspect `MoreActionsPage.vue` to check if manual `.theme-mode-item` CSS overrides are still needed (they can likely be removed).
