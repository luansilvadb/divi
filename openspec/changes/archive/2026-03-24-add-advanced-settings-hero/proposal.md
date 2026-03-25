# Proposal: Advanced Settings Page with Motion Transitions

## Summary

This change introduces a new "Advanced Settings" (Mais) page and implements a premium, native-app-like horizontal slide transition using **Motion for Vue** (`motion.dev`). We are moving away from the browser's native View Transitions API to Gain more control over the "stack" effect, eliminating visual gaps and enabling organic spring animations.

## Problem

The previous implementation using the native View Transitions API resulted in occasional "clipping" (black gaps) between the sidebar and the sliding content. Additionally, the native API doesn't allow for the level of animation synchronization (simultaneous entrance and exit in a single layout) that a dedicated library like Motion provides.

## Solution

1. **Implement `AdvancedSettingsPage.vue`**: Complete the settings page with sections for Style, Transactions, and Accounts.
2. **Motion for Vue**: Install and use the `motion` library for all page transitions.
3. **AnimatePresence in MainLayout**: Wrap the `<router-view>` in the `MainLayout.vue` with `<AnimatePresence>` and `<motion.div>`.
4. **Spring Physics**: Use spring-based animations for a "Premium" feel (stiffness, damping, mass).
5. **Directional Logic**: Update the `uiStore` and navigation calls to track if we are pushing or popping to correctly slide from the right or left.

## Impact

- **UI/UX**: Highest quality navigation, zero-gap transitions, and professional physics.
- **Dependencies**: New dependency `motion` added.
- **Layout**: Changes in `MainLayout.vue` to support the animation wrapper.
- **Cleanup**: Removal of all View Transitions API code from CSS and Vue files.
