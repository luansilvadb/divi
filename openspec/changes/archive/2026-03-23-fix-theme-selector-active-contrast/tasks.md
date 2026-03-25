# Tasks: Fix Theme Selector Active Border Contrast

## 1. UI Implementation

- [x] 1.1 Update `src/components/molecules/ThemeModeSelector.vue` styles to reduce active border contrast in dark mode.
- [x] 1.2 Change `border-color` from `rgba(var(--q-primary), 0.15)` to `rgba(255, 255, 255, 0.08)` in `body.body--dark` for `.theme-option--active .theme-option__content`.
- [x] 1.3 Adjust `background` to `rgba(255, 255, 255, 0.05)` for `.theme-option--active .theme-option__content` in dark mode.
- [x] 1.4 Update `color` of `.theme-option__check` in dark mode to `rgba(255, 255, 255, 0.6)`.

## 2. Verification

- [ ] 2.1 Confirm the active state is less "loud" in dark mode.
- [ ] 2.2 Verify the check indicator remains legible.
- [ ] 2.3 Verify the light mode active state remains unchanged.
