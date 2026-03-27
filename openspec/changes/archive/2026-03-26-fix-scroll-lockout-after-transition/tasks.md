# Tasks: Fix Scroll Lockout after Transition

Corrective implementation steps for enabling immediate scroll when returning from Advanced Settings to settings.

## Animation Tuning

- [x] Update `MainLayout.vue` variants to use a more direct `easeOut` for the exit phase if `navDirection === 'backward'`.
- [x] Reduce the overall `exit` animation duration for a snappier feel.

## Component Performance

- [x] Add `will-change: transform` to the scroll container in `PageContentLayout.vue`.
- [x] Check if `SliverAppBar` is performing redundant calculations during unmount.

## Validation

- [x] Double-check `pointerEvents: 'none'` on the exit variant of `MainLayout.vue`.
- [x] Repeated test of immediate scroll on return.
