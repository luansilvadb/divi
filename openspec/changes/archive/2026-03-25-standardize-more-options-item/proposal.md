# Proposal: standardize-more-options-item

## Summary

This change standardizes the "Mais opções" button in `MoreActionsPage.vue` to match the exact visual and interaction patterns of other list items (e.g., "Idioma", "Editar página inicial"). It fixes discrepancies in background colors, hover effects, and redundant borders while preserving the Shared Layout (Hero) background transition.

## Motivation

Currently, the "Mais opções" item is wrapped in custom `Motion` layers to enable the Hero transition to `AdvancedSettingsPage`. This has introduced several "out of standard" visual glitches:
1. **Disabled Hover**: The use of `background: transparent !important` prevents the standard `q-item` hover state.
2. **Custom Tap Effect**: The use of `:while-tap` creates a scaling effect that is different from the regular Quasar ripples used elsewhere.
3. **Redundant Border**: The `settings-expansion-bg` contains its own border, which conflicts with the border and padding of the containing `section-card`.
4. **Layout Misalignment**: The relative-positioned wrapper may cause slight vertical offset compared to pure `SettingsItem` siblings.

## Impact

- `src/pages/MoreActionsPage.vue`: Refactor the `SettingsItem` wrapper to behave like a standard list item while only activating the "Hero" background during the transition exit.
- `src/components/molecules/SettingsItem.vue`: Ensure the component correctly accepts and styles the `Hero` background when needed.
