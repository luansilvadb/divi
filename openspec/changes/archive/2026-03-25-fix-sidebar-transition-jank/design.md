# Design: fix-sidebar-transition-jank

## Context

The current application uses `motion-v` and `AnimatePresence` with `mode="popLayout"` in `MainLayout.vue`. This allows for fluid page transitions but can cause the parent container (`q-page-container`) to collapse when swapping pages with different positioning modes (especially during shared layout Hero transitions).

The `DesktopSidebar` is a standard `q-drawer` in a `q-layout` view configured to be fixed. When its sibling `q-page-container` has its height calculated incorrectly or when it collapses, the drawer's background or internal scroll metrics might flicker or shift.

## Goals

- Eliminate the "suspension" (jump) of the sidebar during the shared layout transition.
- Ensure the stable height of the viewport remains consistent across page swaps.
- Streamline the Motion configuration to avoid conflicting layout calculations.

## Implementation

1. **Modify `src/layouts/MainLayout.vue`**:
   - Add `min-height: 100vh` to `.q-page-container`. This prevents the container from ever having 0 height, even if all children are `absolute`.
   - Add `flex: 1 1 auto` to ensure the container correctly fills the viewport and its content expands as expected.
   - Remove the `layout` prop from `<motion.div>`. The page-level `layout` prop is redundant here and causes unnecessary layout recalculations for the entire viewport as items enter and exit. The granular transitions are already handled by `layoutId` within the components.

2. **Modify `src/pages/AdvancedSettingsPage.vue`**:
   - Add `min-height: 100vh` to the `q-page` element to ensure it covers the whole screen immediately upon mount.

## Risks / Trade-offs

- Overriding Quasar's dynamic `min-height` on `q-page-container` might need monitoring if we later add headers or footers in the layout. However, in this case, `100vh` is a safe default given the current architecture.
- Removing the `layout` prop from `motion.div` means any other elements *inside* that div but *outside* the page themselves won't have layout transitions animated automatically, but this is a clean trade-off for overall UI stability.
