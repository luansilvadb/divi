# Design: Fix Scroll Lockout after Transition

Technical implementation to eliminate any perceived scroll delay.

## Context

The user reports that even after previous fixes, the page feels "locked" for a few dozen milliseconds after closure. This is highly suggestive of a layout-blocking animation or an `AnimatePresence` variant state that isn't fully transparent.

## Goals

1.  **Immediate Scroll Target Recovery**: Ensure the underlying scroll container is ready to receive touch start/move events the instant the "back" click occurs.
2.  **Pointer events Fall-through**: Force the exiting layer to be absolutely non-interactive.

## Technical Details

### 1. Page-Level Scoped Interactions
In `MainLayout.vue`, we have a common `motion.div` wrapper. We will explicitly split the behavior for `initial` and `exit` to ensure the exiting page is moved out of the way both visually and interactively.

### 2. Layout Clipping
`PageContentLayout.vue` uses `overflow-y: auto`. We will verify if its parent (`q-page-container` or the `motion-wrapper`) has `overflow: hidden` which might be clipping the event target during the "pop" phase.

### 3. Immediate Variant Update
We will try `mode="wait"` vs `mode="popLayout"`. However, `popLayout` is usually better for Hero. We will stick with `popLayout` but ensure `pointer-events: none` is applied at the first frame of the `exit` transition.

## Implementation Plan

1.  **MainLayout Variant Speedup**: Use `easeOut` instead of `spring` for the exit phase to reach the final state (and `pointer-events: none`) faster.
2.  **PageContentLayout Styles**: Add `will-change: scroll-position` to the scroll container to hint the browser to keep the scrolling thread ready.
3.  **Global Scroll Hack**: Ensure `body` doesn't have any `overflow: hidden` injected by Quasar/Vue during transitions that might be sticking.

## Risks / Trade-offs

- **Ease vs Spring**: Page exit will feel less "bouncy" but much more mechanical/fast, which is usually preferred for navigation return.
