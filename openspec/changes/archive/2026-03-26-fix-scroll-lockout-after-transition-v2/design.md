# Design: Fix Scroll Lockout after Transition (Perceptual and Technical)

Detailed technical approach to fix the 400ms scroll delay when returning from the Advanced Settings page.

## Context

The user reports that they have to "wait" before being able to scroll when returning from `AdvancedSettingsPage.vue`.
Investigation revealed two primary causes:
1.  **Opacity Typo**: `opacity: 5` on the backdrop in `AdvancedSettingsPage.vue` makes it visually opaque for ~80% of its 400ms transition.
2.  **Duration Mismatch**: The `MainLayout.vue` uses a 200ms tween for backward navigation, but the `AdvancedSettingsPage.vue` backdrop uses a 400ms duration, extending the time the leaving page covers the screen.

## Goals

1.  **Instant Visual Response**: The backdrop should start fading immediately upon the "back" click.
2.  **Synchronized Removal**: The page should be removed from the DOM (and its pointer-event blocking layer) in 200ms to match the layout's exit animation.
3.  **No Interaction Blocking**: The leaving page must become non-interactive (through `pointer-events: none`) at the very start of its exit phase.

## Technical Details

### 1. Opacity Correction
The `:animate="{ opacity: 5 }"` in `AdvancedSettingsPage.vue` is a typo. Correcting it to `:animate="{ opacity: 1 }"` will ensure that the linear interpolation `1.0 -> 0.0` starts the visual fade immediately.

### 2. Duration Harmonization
We will change the backdrop's transition duration from `0.4` to `0.2` to match the navigation transition in `MainLayout.vue`:
```vue
<!-- AdvancedSettingsPage.vue -->
<Motion
  ...
  :transition="{ duration: 0.2, ease: 'easeInOut' }"
  ...
/>
```

### 3. Pointer Event Lock on Exit
We will explicitly add `pointer-events: none` to the `exit` state of the backdrop and the main hero surface to ensure that as soon as the transitions begin, the underlying `MoreActionsPage` starts receiving touch and scroll events.

## Implementation Plan

1.  **Modify `src/pages/AdvancedSettingsPage.vue`**:
    - Correct `opacity: 5` to `opacity: 1`.
    - Set `duration` to `0.2`.
    - Add `pointer-events: none` to the `exit` variant of the backdrop and hero surface.
2.  **Validate on Device**: Verify that fast scrolling immediately after clicking "Back" works as expected.

## Risks / Trade-offs

- **Faster Transition**: The backdrop will disappear faster (0.2s vs 0.4s), which might feel slightly less "rich" but significantly more responsive.
