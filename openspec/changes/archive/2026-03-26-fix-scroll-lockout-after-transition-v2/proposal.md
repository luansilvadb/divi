# Proposal: Fix Scroll Lockout after Transition (Perceptual and Technical)

Resolving the issue where the user feels a scroll delay when returning from the Advanced Settings page.

## Motivation

The "lockout" the user is feeling is a combination of a visual typo causing a perceptual delay and a technical duration mismatch that keeps the leaving page covering the screen too long.

**Key Findings:**
1.  **Perceptual Hang**: In `AdvancedSettingsPage.vue`, the backdrop has `:animate="{ opacity: 5 }"` and `:exit="{ opacity: 0 }"` over `0.4s`. The value stays above `1.0` (fully opaque) for approximately **80% of the animation duration (~320ms)**. The user thinks the page is still "there" and stuck because it doesn't even begin to fade until the very last bit of the transition.
2.  **Duration Mismatch**: The `MainLayout.vue` finishes its exit animation in **0.2s**, but `AnimatePresence` waits for the child (the backdrop) which takes **0.4s**. This keeps the leaving page, which has `all-pointer-events`, in the DOM and potentially on top of the list for longer than intended.

## Proposed Changes

- **Fix Opacity Typo**: Change `:animate="{ opacity: 5 }"` to `:animate="{ opacity: 1 }"` in `AdvancedSettingsPage.vue`.
- **Match Durations**: Sync the backdrop duration in `AdvancedSettingsPage.vue` with the layout's `0.2s` for a snappy exit transition.
- **Explicit Pointer Lock**: Ensure `pointer-events: none` is applied to the backdrop during exit to allow immediate interaction with the hidden page underneath.

## Impact

- **Affected files**: `src/pages/AdvancedSettingsPage.vue`.
- **UX**: Eliminates the "frozen" feeling. The return to the settings list will feel instantaneous and responsive.
