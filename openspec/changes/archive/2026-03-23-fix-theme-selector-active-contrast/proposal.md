# Proposal: Fix Theme Selector Active Border Contrast

## Context

The `ThemeModeSelector.vue` component features a segmented control for choosing theme modes. Currently, the active option in dark mode exhibits a high-contrast white border that feels too "loud" against the dark background. This contrast is particularly prominent in the "Escuro" (Dark) mode selection.

## Motivation

- **Visual Excellence**: The current high-contrast border clashes with the dark theme's aesthetics.
- **Robustness**: The Use of `rgba(var(--q-primary), ...)` with hex variables in CSS can lead to invalid property values, causing the browser to fall back to less desirable styles.
- **User Feedback**: The user has identified the border as having too much white contrast.

## Proposed Change

- Adjust the border color of the active theme mode option in dark mode to be more subtle and consistent with the dark theme palette.
- Use more reliable CSS methods (like fixed translucent white or `color-mix`) to ensure consistent rendering.
- Maintain the visual distinction of the active state while reducing its brightness.

## Impact

- **UI/UX**: Improved visual harmony in the settings page for dark mode users.
- **Affected Components**: `src/components/molecules/ThemeModeSelector.vue`.
