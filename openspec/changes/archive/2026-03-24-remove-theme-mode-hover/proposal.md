# Proposal: Remove Hover Effect from Theme Mode Selector

## Problem

The Theme Mode Selector currently has a hover effect (`background` and `border-color` change) that may feel unnecessary or visually distracting in the settings menu, especially if consistency across other settings elements is desired where hover might not be as pronounced or present.

## Proposed Solution

Remove the `:hover` state styles from `ThemeModeSelector.vue`. The component will still use the `--active` class to indicate the currently selected theme, ensuring usability is maintained.

## Impact

- **UI/UX**: Reduced visual noise when moving the mouse over the theme options.
- **Affected Components**: `ThemeModeSelector.vue`.
- **Consistency**: Matches a "cleaner" look for the settings interface as requested by the user.
