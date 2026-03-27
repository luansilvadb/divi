# Proposal: fix-sidebar-transition-jank

## Summary

This change addresses a visual glitch (jank) in the sidebar of the application during the "Hero Transition" animation when navigating to the Advanced Settings page. The fix involves stabilizing the height of the main layout container and removing unnecessary layout animations that conflict with the page-level transitions.

## Motivation

When clicking on "Mais opções" (More actions) in the settings menu, a shared layout transition (Hero) is triggered to expand a card into the full Advanced Settings page. During this transition, using `AnimatePresence` with `mode="popLayout"` causes the exiting page to become absolute-positioned. If the entering page is not yet providing enough flow height, the `q-page-container` collapses to 0 height, causing the sidebar in the `q-layout` to shift or "jump" visually. This degrades the perceived quality of the application's premium aesthetic.

## Impact

- `src/layouts/MainLayout.vue`: Update the layout wrapper and container styles to ensure stability during transitions.
- `src/pages/AdvancedSettingsPage.vue`: Minor style adjustments to ensure full-height coverage during its initial state.
- UI/UX: Provides a much smoother, jank-free transition experience that aligns with modern web standards.
