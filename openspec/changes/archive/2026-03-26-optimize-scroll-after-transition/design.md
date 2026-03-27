# Design: Optimize Scroll after Transition

Technical strategy for enabling immediate interaction (scroll) when returning to the main settings page.

## Context

The `MainLayout.vue` uses `AnimatePresence` with `mode="popLayout"`. This mode helps prevent layout jumps during transitions by using absolute positioning for the exiting page. However, it can sometimes interfere with scrolling or pointer events if one element is staying on top of the other with `pointer-events: auto` while animating out.

## Goals

1.  **Eliminate Scroll Block**: The target page must be scroll-ready immediately.
2.  **Pointer-Events Transparency**: The exiting `AdvancedSettingsPage` must not block clicks/scrolls for the `MoreActionsPage` beneath it during the exit fade.

## Technical Details

### 1. Pointer Events during Exit
When `AdvancedSettingsPage` is exiting, it should ideally set `pointer-events: none` as soon as the transition starts. This allows any touch or scroll event to fall through to the page below.

### 2. Layout Overflow Management
Currently, `MoreActionsPage.vue` has `overflow: hidden` on its main container. We need to ensure that the content within `PageContentLayout` is the one managing scroll and that it's not being throttled by any transition wrapper.

### 3. Z-Index and Stacking
By using `z-index` properly on the `motion.div` in `MainLayout.vue`, we can ensure the exiting page stays in the background if it's a "back" transition, or foreground if it's an "entry".

## Implementation Plan

1.  **MainLayout Variant Tweak**: Update the `exit` variant or target specifically the exit state with `pointer-events: none` when `navDirection === 'backward'`.
2.  **AdvancedSettings Cleanup**: Set `pointer-events: none` on the `AdvancedSettingsPage` wrapper as it unmounts.
3.  **MoreActions Scroll Enablement**: Ensure no interaction-blocking styles are active in `MoreActionsPage`.

## Risks / Trade-offs

- **Unexpected clicks**: If the user clicks something during the transition, they might hit an element on the bottom page before the top one is gone. This is generally preferred for "speed" but must be visually consistent.
- **Scroll Hijacking**: If two scroll containers are active, the browser might get confused. `popLayout` absolute positioning usually solves this by keeping them in separate layers.
