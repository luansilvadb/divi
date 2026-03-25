## 1. Component Foundation

- [x] 1.1 Create `src/components/molecules/ThemeModeSelector.vue` with pill trigger, dropdown structure, and typed option model (`label`, `value`, `icon`).
- [x] 1.2 Implement selector props/events (or `v-model`) to keep theme value flow compatible with current `uiStore` usage.

## 2. Premium Visual Behavior

- [x] 2.1 Style the trigger and menu with rounded corners (16px), layered shadows, and spacing consistent with existing premium cards.
- [x] 2.2 Add thematic icons for Light, Dark, and Auto options plus selected-state treatment (subtle primary background + discrete check).
- [x] 2.3 Configure dropdown enter animation using scale (0.95 -> 1) with fade, ensuring smooth open/close interaction.

## 3. Page Integration

- [x] 3.1 Replace the current `q-select` in `src/pages/MoreActionsPage.vue` with `ThemeModeSelector` while preserving current theme-change behavior.
- [x] 3.2 Remove or adapt legacy selector-specific styles/markup in `MoreActionsPage.vue` to avoid visual conflicts.

## 4. Validation

- [x] 4.1 Verify selector behavior for all modes (Light, Dark, Auto), including selected-state highlight and menu close-on-select.
- [x] 4.2 Validate visual consistency and contrast in both app themes and across mobile/desktop breakpoints.
