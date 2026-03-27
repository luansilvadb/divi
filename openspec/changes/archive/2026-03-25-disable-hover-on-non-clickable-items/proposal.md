# Proposal: disable-hover-on-non-clickable-items

## Summary

This change ensures that `SettingsItem` only displays a hover background effect when the `clickable` property is set to `true`. This provides correct visual feedback to the user, indicating which items are actionable and which are static (e.g., settings that contain interactive widgets like selects or switches instead of being buttons themselves).

## Motivation

In `AdvancedSettingsPage.vue`, items such as "Altura do cabeçalho" and "Estilo de ícone" contain internal selection controls. These items are marked as `:clickable="false"` because clicking the row itself should do nothing. However, the current CSS in `SettingsItem.vue` applies a hover background (`rgba(0,0,0,0.03)`) to all rows regardless of the `clickable` prop. This is confusing as it suggests the row is interactive.

## Impact

- `src/components/molecules/SettingsItem.vue`: Update the template to conditionalize the hover state based on the `clickable` prop.
- UX Improvement: Clearer distinction between navigation items and control containers.
