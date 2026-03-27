# Troubleshooting: Sidebar Jitter during Hero Transitions

## Problem
In a Quasar + Motion-V application using `Shared Layout` (Hero) transitions and `AnimatePresence` with `mode="popLayout"`, the fixed sidebar may "jump" or show a gap at the bottom during page swaps.

## Root Cause
1. **Layout Collapse**: `popLayout` absolute-positions the exiting page. If the entering page has no immediate flow height (common with Hero cards that start small or absolute), the parent `q-page-container` collapses to 0 height.
2. **Quasar Drawer Recalculation**: Quasar's `q-drawer` reacts to the layout container's height changes, even in "fixed" mode, causing a momentary vertical shift or background clipping.
3. **Scrollbar Flicker**: Switching between a page with a native scrollbar and one with an internal scroll container causes the system scrollbar to appear/disappear, shifting the entire layout.

## Solution

### 1. Stabilize Layout Height
Force the `q-page-container` and the `motion-wrapper` to have a minimum height of `100vh` and prevent overflow during the transition.

```scss
// MainLayout.vue
.q-page-container {
  min-height: 100vh !important;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevents scrollbar flickering during absolute phase */
}

.motion-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
```

### 2. Lock the Sidebar
Ensure the drawer background and position are invariant during layout shifts.

```scss
// MainLayout.vue
:deep(.q-drawer) {
  height: 100vh !important;
  position: fixed !important;
}
```

### 3. Flow-Stable Hero Pages
Add an invisible flow element to the entering page to keep the container "open" for the layout engine.

```vue
<!-- AdvancedSettingsPage.vue -->
<template>
  <q-page style="min-height: 100vh;">
    <!-- Ghost height element -->
    <div style="height: 100vh;" class="absolute-top-left full-width invisible overflow-hidden"></div>
    
    <Motion layoutId="hero-card">...</Motion>
  </q-page>
</template>
```

### 4. Remove Redundant Layout Anims
Remove the `layout` prop from the page-level `motion.div` if you are using granular `layoutId` within components, as it creates unnecessary jitter.
