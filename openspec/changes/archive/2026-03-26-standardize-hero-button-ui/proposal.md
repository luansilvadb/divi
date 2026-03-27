# Proposal: Standardize Hero Button UI 🏛️✨

## Goal
The goal of this change is to unify the visual appearance of the "Mais opções" button in the `MoreActionsPage.vue` with the surrounding `SettingsItem` components in the "PREFERÊNCIAS" section. Currently, the presence of a `Motion` wrapper with a hardcoded background creates an inconsistent visual style (e.g., color mismatch and different padding) compared to neighboring simple list items.

## Motivation
Visual consistency is a key design principle. The current implementation of the hero transition uses a `settings-expansion-bg` that doesn't perfectly match the `SectionCard` background in both light and dark modes. This creates a "gray block" effect that makes the button look different when idle, which the user pointed out as a regression. We need the button to look identical to a standard `SettingsItem` when not expanding.

## Proposed Change
- **Unified Backgrounds**: Update `settings-expansion-bg` to be transparent (inherit card background) or use context-aware tokens (`#1e1e1e` for dark mode, `white` for light mode).
- **Refined Transitions**: Ensure the `Motion` layer's `border-radius` and `padding` match the `SettingsItem` dimensions.
- **Code Finalization**: Remove any remaining unused variables (like `scrollElement` in `MoreActionsPage.vue`) that are currently triggering ESLint errors and blocking the dev server.

## Impact
- **UI/UX**: Improved visual harmony in the settings menu. The "Mais opções" button will look like a native part of the list while retaining its high-quality expansion animation.
- **Maintainability**: Cleaner code in page templates and removal of obsolete reactive state.
