# Design: Standardize More Options Item

## Goals

- Match the visual appearance and interaction of "Mais opções" with its siblings ("Editar página inicial", "Idioma").
- Preserve the Hero background transition logic.
- Remove redundant CSS classes and interactive overrides.

## Implementation Details

### 1. Remove Redundant Styles
The `settings-expansion-bg` currently has a border and background that may slightly differ or overlap with the `section-card`'s internal structure. We will remove the border from this background in its static state to prevent visual "double-line" artifacts.

### 2. Restore Standard Interactions
- **Hover**: Remove `background: transparent !important` from the `SettingsItem`. This will re-enable the standard Quasar/App hover effect.
- **Tap**: Remove `:while-tap="{ scale: 0.98 }"` from the wrapping `Motion` component. Instead, rely on the standard `v-ripple` behavior of `SettingsItem`.

### 3. Layout Alignment
Adjust the `relative-position` wrapper to ensure it doesn't introduce extra padding or margins that break the vertical rhythm of the `section-card`.

```vue
<!-- Revised Structure in MoreActionsPage.vue -->
<div class="relative-position full-width overflow-hidden" style="border-radius: 12px;">
  <Motion
    as="div"
    layoutId="settings-hero-bg"
    class="absolute-full settings-expansion-bg"
    style="z-index: 0"
  />
  <SettingsItem
    title="Mais opções"
    caption="Estilo, transações, contas, formatação"
    icon="tune"
    show-chevron
    @click="goToAdvanced"
    class="relative-position"
    style="z-index: 1"
  />
</div>
```

### 4. CSS Cleanup
Remove the border from `.settings-expansion-bg` in `MoreActionsPage.vue`.
```scss
.settings-expansion-bg {
  background: white;
  // border: 1px solid #f2f2f2; <-- REMOVE THIS
  
  body.body--dark & {
    background: #1e1e1e;
    // border-color: #333; <-- REMOVE THIS
  }
}
```

## Risks / Trade-offs

- **Background Clipping**: Without the border on the "expanding" element, there might be a subtle "soft edge" during the transition before it hits the new page's borders. However, it's safer than the current jitter.
