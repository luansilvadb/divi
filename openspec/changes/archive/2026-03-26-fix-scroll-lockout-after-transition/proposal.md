# Proposal: Fix Scroll Lockout after Transition

Resolving the issue where the user cannot scroll immediately after closing the Advanced Settings page.

## Motivation

Even after disabling pointer-events on the exiting page, the user still reports a "delay" or "lockout" before they can scroll the main settings list. This is likely because:
1. The `MainLayout.vue` wrapper might still be catching events.
2. The `PageContentLayout.vue` might lose focus or its scroll target during the transition.
3. The `SliverAppBar` or other sticky components might be performing calculations that block the main thread or reset the scroll state.

The goal is to provide a truly "instant" scroll experience.

## Proposed Changes

- **Global Pointer Reset**: Force `pointer-events: auto` on the `MainLayout` container for the entering page even earlier.
- **Scroll Container Persistence**: Ensure `PageContentLayout` maintains its internal state and doesn't "reset" when the route changes back.
- **Micro-animation Removal**: Check if any `transition` CSS property on the scroll container is causing the latency.

## Impact

- **Affected files**: `MainLayout.vue`, `PageContentLayout.vue`.
- **UX**: Eliminates the "frozen" feeling when returning to settings.
