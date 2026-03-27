# Design: unify-title-content-animation

## Context

Page content in the Advanced Settings view currently uses staggered entry animations:
- Title: `delay: 0.1` (with `layoutId`)
- Section 1 (ESTILO): `delay: 0.2`
- Section 2 (TRANSAÇÕES): `delay: 0.3`

All categories use `initial="{ opacity: 0, y: 20 }"` and `animate="{ opacity: 1, y: 0 }"`. The title "Mais" also specifies these values but they are often superseded or blended with the Shared Layout physics because of the `layoutId`.

## Goals

- Homogenize the entry animation of the main page title with the category headers.
- Maintain the staggered "cascading" effect by keeping the title's early delay.
- Remove redundant shared layout overhead for the text-only title.

## Implementation

### 1. `AdvancedSettingsPage.vue`
Update the `Motion` component for the title:
- **Remove** `layoutId="settings-hero-title"`.
- Ensure it uses the same `initial`, `animate`, and `spring` transition as the category headers.
- Set `delay: 0.1` to be the first in the cascade.

```vue
<!-- Target change snippet -->
<Motion
  as="div"
  :initial="{ opacity: 0, y: 20 }"
  :animate="{ opacity: 1, y: 0 }"
  :transition="{ delay: 0.1, type: 'spring' }"
  class="text-h5 text-weight-bold hero-title no-transform-clash"
>
  Mais
</Motion>
```

### 2. `MoreActionsPage.vue`
Update the `Motion` component for the originating "Mais opções" title:
- **Remove** `layoutId="settings-hero-title"`.
- This ensures that only the container/background (`settings-hero-bg`) is Shared Layout.

## Risks / Trade-offs

- The title will no longer "morph" visually from the previous page's position. It will instead fade and slide up in its final position. This makes the transition feel less like a physically expanding card and more like a standard page loading with premium motion.
