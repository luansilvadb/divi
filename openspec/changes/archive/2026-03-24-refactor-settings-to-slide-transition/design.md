# Design: Refactor Settings Transition to Slide

## Context

The current transition uses element-specific `view-transition-name` which causes the text to fly and morph, breaking the feeling of a solid page. We are changing this to a global "root" slide transition, which is standard for navigation in native-like apps.

## Goals

- Remove all individual `view-transition-name` properties.
- Define a global CSS animation for the `root` view transition.
- Ensure the transition is a horizontal slide (Right-to-Left on push, Left-to-Right on pop).

## Implementation Details

### 1. CSS Animations
I will add the following animations to `src/css/app.scss`:

```css
@keyframes slide-in {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slide-out {
  from { transform: translateX(0); }
  to { transform: translateX(-30%); }
}

@keyframes slide-pop-in {
  from { transform: translateX(-30%); }
  to { transform: translateX(0); }
}

@keyframes slide-pop-out {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

/* Base View Transition Overrides */
::view-transition-old(root) {
  animation: slide-out 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
}

::view-transition-new(root) {
  animation: slide-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
}

/* We'll handle 'back' navigation through a specific class on the root if needed 
   or by default accepting the slide-in/out for now. 
*/
```

### 2. Component Cleanup
- **`src/pages/MoreActionsPage.vue`**: Remove the `.more-options-item` class and `view-transition-name`.
- **`src/pages/AdvancedSettingsPage.vue`**: Remove the `.hero-title` `view-transition-name`.

### 3. Navigation Functionality
Keep the `document.startViewTransition` wrapper in both pages as it triggers the native transition mechanism that we are now customizing at the global CSS level.

## Risks / Trade-offs

- **Global Scope**: Customizing `::view-transition-old/new(root)` affects ALL page transitions in the app. This is usually what we want for a consistent native feel, but might affect other screens. If needed, we can scope it with a class on the `<html>` element during transition.
