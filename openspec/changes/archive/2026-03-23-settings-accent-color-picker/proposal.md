# Proposal: Global Accent Color Picker

Implement a global accent color selection feature in the settings screen, allowing users to customize the application's primary environment color through a mobile-friendly Bottom Sheet interface.

## Motivation

Users want to personalize their experience by choosing a primary "accent" color that reflects their preference. The current implementation of the settings matches the Material Design 3 (MD3) style but lacks the ability to change the accent color dynamically. Providing a bottom sheet color picker follows modern mobile UX patterns and enhances the "premium" feel of the application.

## Goals

- Add a dynamic color selection feature to the "Cor de destaque" settings item.
- Implement a custom Bottom Sheet (`q-dialog` with `position="bottom"`) that matches the provided design reference.
- Persist the chosen color in the global state (`uiStore`).
- Update the application's theme colors (`--q-primary`) in real-time when a color is selected.

## Impact

- **UI Store (`src/stores/ui.ts`)**: Addition of `accentColor` state and `setAccentColor` action.
- **Settings Page (`src/pages/MoreActionsPage.vue`)**: Integration with the new color picker component.
- **New Component**: `src/components/molecules/ColorPickerBottomSheet.vue`.
- **Global Theme**: Real-time update of Quasar CSS variables.
