# Design: Remove Hover Effect from Theme Mode Selector

## Context

The `ThemeModeSelector.vue` component provides buttons for choosing theme modes. Currently, these buttons exhibit a hover effect that changes their background and border color. We want to remove this effect for a more static look.

## Goals

- Remove the hover styles from the `ThemeModeSelector.vue` component.
- Ensure the active state (`.theme-option--active`) remains fully functional and visual.

## Proposed Changes

### 1. `src/components/molecules/ThemeModeSelector.vue`

Remove the following SCSS block:

```scss
.theme-option:hover .theme-option__content {
  background: #f2f4f8;
  border-color: rgba(var(--q-primary), 0.22);

  body.body--dark & {
    background: rgba(255, 255, 255, 0.065);
    border-color: rgba(255, 255, 255, 0.22);
  }
}
```

## Rationale

The `:hover` effect is a secondary feedback mechanism. The primary feedback is the `.theme-option--active` state, which provides enough indication of selection. Removing it responds directly to the user's request for a cleaner UI.

## Risks / Trade-offs

- **UX**: Mouse users might feel less "interactivity" since buttons won't react to hover. However, since the cursor still changes to a pointer (inherited from `cursor: pointer` on the control), it remains discoverable as interactive.
