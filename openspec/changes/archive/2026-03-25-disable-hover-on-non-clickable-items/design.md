# Design: Conditional Hover State for SettingsItem

## Context

The `SettingsItem` component is a shared atom used throughout the app. It currently has an unconditional `&:hover` rule in its SCSS:

```scss
.settings-item {
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
}
```

The `clickable` prop is passed to the underlying `q-item`, but this CSS rule doesn't know about it.

## Goals

- Apply the hover background ONLY if `clickable` is `true`.
- Ensure dark mode consistency.

## Implementation Plan

We will add a conditional CSS class `is-clickable` to the `.settings-item` div in the template, which is only present when `clickable` is true. We'll then move the hover rules to target `.settings-item.is-clickable:hover`.

### 1. Update `SettingsItem.vue` template
```vue
<q-item 
  :clickable="clickable" 
  v-ripple="clickable" 
  class="settings-item q-py-sm"
  :class="{ 'is-clickable': clickable }"
>
```

### 2. Update `SettingsItem.vue` styles
```scss
.settings-item {
  &.is-clickable:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  
  body.body--dark &.is-clickable:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
}
```

## Risks / Trade-offs

- **Specificity**: Check if any other component depends on `.settings-item:hover` indirectly. (None found in `MoreActionsPage` or `AdvancedSettingsPage` other than some overrides we can now remove).
