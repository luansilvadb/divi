# Proposal: Optimize Scroll after Transition

Removing the interaction lockout/delay when returning from Advanced Settings to Allow immediate scrolling.

## Motivation

Currently, when the user closes the `AdvancedSettingsPage.vue`, they have to wait for the entire page transition to finish before the list in `MoreActionsPage.vue` becomes scrollable. This feels like the app is "frozen" for a fraction of a second, which hurts the perceived polish.

The goal is to ensure that as soon as the return animation starts, the underlying page is ready to receive scroll events.

## Proposed Changes

- **Remove pointer-events locks**: Ensure that no container is blocking touch/scroll events during the exit phase.
- **Background rendering**: Keep the `MoreActionsPage` active and scrollable even while the `AdvancedSettingsPage` is unmounting.
- **CSS adjustments**: Review `overflow: hidden` properties that might be dynamically preventing scroll during transitions.

## Impact

- **User Experience**: Smoother, more responsive navigation. The user can start scrolling the settings list even before the transition animation completely settles.
- **Affected files**: `MainLayout.vue`, `MoreActionsPage.vue`.
