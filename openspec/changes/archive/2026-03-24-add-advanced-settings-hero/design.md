# Design: Advanced Settings Page with Motion Transition

## Context

The current `MoreActionsPage.vue` serves as the primary gateway for settings. We are adding a "Mais" (Advanced) section. To achieve a truly premium, native feel without the common "clipping" issues of the View Transitions API, we are implementing a robust stack-based navigation using **Motion for Vue**.

## Goals

- **Visually Stunning Slide**: Implement a horizontal slide where the new page covers the previous one, which scales down slightly.
- **Stable UI**: The Sidebar and Bottom Nav must remain static while the page content transitions.
- **Professional Physics**: Use spring-based animations for an organic and responsive feel.
- **Maintainable Architecture**: Centralize transition logic in the `MainLayout.vue` using `<AnimatePresence>`.

## Implementation Details

### 1. Motion Setup
- **Library**: `motion` (motion.dev).
- **Core Component**: Wrap the `<router-view>` in the `MainLayout.vue`:
  ```vue
  <AnimatePresence mode="popLayout">
    <motion.div :key="route.path" ...>
      <router-view />
    </motion.div>
  </AnimatePresence>
  ```

### 2. Transition Direction Tracking
To handle "Forward" (Enter from Right) and "Back" (Exit to Right) correctly, we will use a `navDirection` state in the `uiStore`.
- **Forward (Push)**:
  - `initial`: `{ x: '100%', opacity: 0 }`
  - `animate`: `{ x: 0, opacity: 1, scale: 1, filter: 'brightness(1)' }`
  - `exit`: `{ x: '-15%', scale: 0.96, filter: 'brightness(0.6)' }`
- **Backward (Pop)**:
  - `initial`: `{ x: '-15%', scale: 0.96, filter: 'brightness(0.6)' }`
  - `animate`: `{ x: 0, scale: 1, filter: 'brightness(1)' }`
  - `exit`: `{ x: '100%' }`

### 3. Transition Timing
- **Type**: `spring`
- **Settings**: `stiffness: 300`, `damping: 30`, `mass: 1`.

### 4. UI Structure of AdvancedSettingsPage.vue
- **Header**: Large title "**Mais**" with a back button at the top-left.
- **Sections**:
  - **Estilo**: Selects and Toggles for header height, icon style, font, animations, numeric animation, and contrast.
  - **Transações**: Toggles and Selects for auto-payment, payment dates, banner totals, and monthly summaries.
- **Style Overrides**: Use custom SCSS for the Material 3 feel.

## Risks / Trade-offs

- **Learning Curve**: Moving to a declarative animation library like Motion requires a shift from CSS-only transitions.
- **Bundle Size**: Adding `motion` increases the bundle size slightly, but the performance and quality gain for a "Premium" app justify it.
- **Simultaneous Rendering**: Using `mode="popLayout"` renders two pages during the transition. Ensuring efficient component teardown is important to avoid performance hits.
