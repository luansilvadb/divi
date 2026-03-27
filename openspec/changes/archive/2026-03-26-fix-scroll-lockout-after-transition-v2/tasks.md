# Tasks: Fix Scroll Lockout after Transition (Perceptual and Technical)

Corrective implementation steps to enable immediate scroll when returning from `AdvancedSettingsPage.vue`.

## Page-Level Adjustments

- [x] **Correct Backdrop Opacity**: Change `:animate="{ opacity: 5 }"` to `:animate="{ opacity: 1 }"` in `AdvancedSettingsPage.vue` to fix the 320ms perceptual delay.
- [x] **Synchronize Transitions**: Set backdrop transition duration to `0.2` in `AdvancedSettingsPage.vue` to match `MainLayout.vue` backward navigation.
- [x] **Explicit Pointer Disable**: Add `style="{ pointerEvents: 'none' }"` to the `exit` variant of the backdrop and the Hero surface in `AdvancedSettingsPage.vue`.

## Global Enhancements

- [x] **Verify MainLayout**: Confirm that `pointer-events: none` on the exit animation of `MainLayout.vue` is correctly triggered by `uiStore.navDirection === 'backward'`.
- [x] **Review Spring Physics**: Check if the Hero transition in `MoreActionsPage.vue` needs a `restDelta` adjustment to finalize faster.

## Validation

- [x] **Fast Scroll Test**: Close the `AdvancedSettingsPage.vue` and immediately attempt to scroll the `MoreActionsPage` (should work instantly without a ~400ms wait).
- [x] **Visual Consistency**: Ensure the transition still looks smooth at 200ms duration.
