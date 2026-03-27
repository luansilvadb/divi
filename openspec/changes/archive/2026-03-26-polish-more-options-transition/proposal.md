# Proposal: Polish "Mais opções" UI Transition

Improving the "Mais opções" screen transition by removing unnecessary delays and polishing the Hero animation behavior when closing.

## Motivation

When closing the "Mais opções" (Advanced Settings) screen, there's a perceived delay and a "weird animation" where the expanding background element (`settings-hero-bg`) appears to sit on top of other elements (like "Idioma") before settling. This creates a clunky user experience where the user has to wait for the animation to fully complete before interacting with the settings page again.

The goal is to make the transition feel instantaneous and seamless, ensuring that as soon as the user triggers "back", the UI flows back naturally without blocking interaction or showing visual artifacts.

## Proposed Changes

### UI/UX Refinement
- **Transition Timing**: Adjust the `Motion` transition properties in both `MoreActionsPage.vue` and `AdvancedSettingsPage.vue` to be snappier and less "springy" during the exit phase.
- **Hero Animation Optimization**: Coordinate the `layoutId="settings-hero-bg"` transition to ensure it doesn't overlap or hide sibling elements during the collapse.
- **Interaction Lock**: Reduce or eliminate the time during which the UI is non-interactive during the transition.

### Technical Implementation
- Update `Motion` components in `src/pages/MoreActionsPage.vue` and `src/pages/AdvancedSettingsPage.vue`.
- Review `src/layouts/MainLayout.vue` to ensure the page-level transition (AnimatePresence) is synchronized with the Hero transition.
- Use faster spring constants or ease-based transitions for the return path.

## Impact

- **Affected code**: `MoreActionsPage.vue`, `AdvancedSettingsPage.vue`, potentially `MainLayout.vue`.
- **User Experience**: Snappier, more professional feel when navigating back from advanced settings.
- **Performance**: Improved perceived performance.
