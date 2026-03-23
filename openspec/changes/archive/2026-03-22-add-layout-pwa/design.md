# PWA Layout Structure Design

## Context

The current state of our Quasar application utilizes a basic `MainLayout.vue` equipped with a single sidebar via `q-drawer` and a standard Header with a hamburger menu button. This setup lacks ergonomic touch considerations for mobile users (PWA mode) and doesn't visually accommodate a robust, stylized Desktop layout (persistent clock, floating cards aesthetic).

We discussed an approach with the following specifics based on a provided UI concept:
1. Live clock matching the specified design with distinct time and date formatting.
2. A navigation section combining direct routes with an expansion list block (ignoring authentication contexts inside for now).
3. A separate representation for mobile devices to free screen space.

## Goals / Non-Goals

**Goals:**
- Provide a clean split architecture: `DesktopSidebar` component vs `MobileBottomNav` component.
- Deliver a live update clock on the top section of the `DesktopSidebar`.
- Ensure components cleanly map to Quasar’s CSS screen breakpoint classes (`lt-md`, `gt-sm`).
- Improve overall usability for mobile (PWA) visitors using Bottom navigation.

**Non-Goals:**
- Implementing the user authentication state or Google sign-in logical flow (currently out of scope).
- Fleshing out full details for the internal routes of the dynamic expansion menus ("Editar dados").

## Proposed Solution

1. **`src/components/layout/LiveClock.vue`**
   - Simple component that tracks state via `Vue.ref()` and utilizes `setInterval()` logic inside `onMounted` and cleans up in `onUnmounted`.
   - Uses `Intl.DateTimeFormat` or Quasar's Date utility to properly output formatting (e.g. `20:54`, `Domingo`, `22 de março de 2026`).

2. **`src/components/layout/DesktopSidebar.vue`**
   - Renders inside a `<q-drawer show-if-above class="gt-sm">`. 
   - Receives the navigation route tree and outputs `q-item` routing links automatically marking standard routes vs nested arrays.

3. **`src/components/layout/MobileBottomNav.vue`**
   - Uses a `<q-footer class="lt-md">` and a `<q-tabs>` navigation structure containing a few of the primary routing endpoints (Início, Transações, etc.).

4. **`src/layouts/MainLayout.vue`**
   - Becomes a clean shell. It will just map the new components into the Quasar Layout components: `q-header`, `q-drawer`, `q-page-container` and `q-footer`.

## Alternative Approaches

- Rather than splitting mobile and desktop into separate layout components, we could push everything into the standard `q-drawer` configuring standard Quasar behaviors. We rejected this because a `q-drawer` on a phone takes horizontal swipe context and isn't typically seen on top-tier finance mobile apps where a tabbed bottom bar is standard.

## Risks / Trade-offs

- The bottom navigation bar presents horizontal space constraints. It cannot realistically render more than 4-5 icons without becoming difficult to tap on mobile. A "Menu/More" button might be required if the navigation list stays as large as the Desktop layout.
