# Design: Fix Theme Selector Active Border Contrast

## Context

The `ThemeModeSelector.vue` component uses `rgba(var(--q-primary), 0.15)` for the active option's border in dark mode. This is problematic if `var(--q-primary)` is a hex string, and even if valid, the 0.15 opacity results in a high-contrast white border that the user finds too "loud".

## Goals

- Reduce the border contrast of the active theme mode option in dark mode.
- Use a more reliable CSS approach that avoids potential runtime evaluation errors of the primary color with alpha.
- Maintain subtle visual distinction of the selected state.

## Proposed Changes

### 1. `src/components/molecules/ThemeModeSelector.vue`

Update the active state styles for dark mode:

```scss
// src/components/molecules/ThemeModeSelector.vue

.theme-option--active .theme-option__content {
  // ... existing light mode rules ...

  body.body--dark & {
    background: rgba(255, 255, 255, 0.05); // Reduced slightly from 0.04 to match spec
    border-color: rgba(255, 255, 255, 0.08); // Reduced from 0.15 primary to 0.08 white
    color: #d7dde8;
  }
}

.theme-option__check {
  // ... existing light mode rules ...

  body.body--dark & {
    color: rgba(255, 255, 255, 0.6); // Fixed white alpha instead of primary
  }
}
```

## Rationale

- **Consistency**: Using fixed white with low alpha (0.05-0.1) in dark mode is a common design pattern for cards and interactive surfaces, ensuring it works regardless of the user's selected primary/accent color.
- **Robustness**: Prevents invalid CSS if `var(--q-primary)` is a hex value.
- **Visual Harmony**: Responds to the user's preference for less white contrast while keeping the checkmark visible.

## Risks / Trade-offs

- **Branding**: The primary color is no longer used for the active border in dark mode. However, given the small scale and the "discrete" nature of the component mentioned in the spec, this is acceptable for better visual comfort.
