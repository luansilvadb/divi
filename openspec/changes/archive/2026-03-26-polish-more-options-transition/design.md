# Design: Polish "Mais opções" UI Transition

Technical design for optimizing the Hero transition and removing interaction delays when returning from the Advanced Settings page.

## Context

The current transition uses `motion-v` with a `spring` transition for the `layoutId="settings-hero-bg"`. While functional, the return journey (closing the page) feels sluggish and shows visual artifacts (overlapping elements) because the spring animation takes too long to reach its final state.

## Goals

1.  **Snap Navigation**: Reduce the perceived time it takes to return to the main settings page.
2.  **Remove Animation Junk**: Ensure the background element doesn't overlap sibling items (`SettingsItem` for "Idioma") during the collapse.
3.  **Instant Interactions**: Allow the user to interact with the target page as soon as the transition starts.

## Technical Details

### 1. Motion Transition Tuning
We will modify the `:transition` property for the `Motion` background element. We'll use a `spring` for the forward transition but switch to a more controlled or faster spring for the backward transition.

Actually, in `AdvancedSettingsPage.vue`, we have:
```vue
<Motion
  as="div"
  layoutId="settings-hero-bg"
  :transition="{ type: 'spring', stiffness: 600, damping: 48 }"
  class="full-expansion-card absolute-full"
>
```

And in `MoreActionsPage.vue`:
```vue
<Motion
  as="div"
  layoutId="settings-hero-bg"
  :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
  class="absolute-full settings-expansion-bg"
/>
```

The mismatch in spring constants between the two pages can cause a "jump" or a slower-than-expected recovery. We will synchronize these.

### 2. Layout Stacking and Z-Index
The "weird animation" where it stays on top of "Idioma" suggests that during the transition, the `layoutId` element is being rendered in a way that its `z-index` or layout flow is not respecting the sibling elements in `MoreActionsPage.vue`.

We will ensure that the container in `MoreActionsPage.vue` has its `z-index` properly managed and that the `SettingsItem` for "Idioma" is not being obscured.

### 3. Transition Timing in MainLayout
The `MainLayout.vue` uses `popLayout`, which is good for absolute positioning during transitions. However, the `stiffness: 400` and `damping: 40` might be combined with the Hero transition in a way that feels double-delayed. We will consider speeding up the exit animation in `MainLayout.vue`.

## Implementation Plan

1.  **Sync Spring Props**: Use a consistent, high-performance spring for the `layoutId="settings-hero-bg"` in both pages (Stiffness: 600-700, Damping: 45-50).
2.  **Interaction Guard**: Ensure `AdvancedSettingsPage.vue` doesn't block pointers longer than necessary.
3.  **CSS Refinement**: Adjust `settings-expansion-bg` transition and `z-index` in `MoreActionsPage.vue`.
4.  **MainLayout Speedup**: (Optional) Micro-tune the `AnimatePresence` variants for snappier exit.

## Risks / Trade-offs

- **Spring Oscillation**: If stiffness is too high without enough damping, it might "bounce" visibly.
- **Layout Shift**: Changing `popLayout` behavior might affect other page transitions. We will focus specifically on the Hero element first.
