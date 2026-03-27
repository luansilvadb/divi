# Tasks: Optimize Scroll after Transition

Implementation steps for enabling immediate scroll when returning from Advanced Settings.

## Component Level Refinement

- [x] Add `:pointer-events-none="isExiting"` or similar logic to `AdvancedSettingsPage.vue`.
- [x] Check `PageContentLayout` in `MoreActionsPage.vue` to ensure it's scrollable without dependency on total page mount/unmount state.

## MainLayout Interactivity Speedup

- [x] Update `MainLayout.vue` motion variants to include `pointerEvents: 'none'` in the `exit` state.
- [x] Ensure `animate` state has `pointerEvents: 'auto'`.

## Validation

- [x] Test the transition back from advanced settings and attempt to scroll IMMEDIATELY.
- [x] Ensure no visible layout flickering occurs when pointer-events are disabled on the exiting page.
