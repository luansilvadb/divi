# Tasks: Refine Settings Dropdown Style

## 1. Component Configuration
- [x] 1.1 Update `q-select` for "Altura do cabeçalho" with `popup-content-class="custom-select-menu"`.
- [x] 1.2 Update `q-select` for "Estilo de ícone" with `popup-content-class="custom-select-menu"`.
- [x] 1.3 Add `:popup-content-style="{ marginTop: '4px' }"` to both selectors for visual breathing room.

## 2. Menu Surface Styling
- [x] 2.1 Define `.custom-select-menu` in `AdvancedSettingsPage.vue` scoped style block.
- [x] 2.2 Implement `border-radius: 12px !important`.
- [x] 2.3 Add `backdrop-filter: blur(12px)` and matching translucent backgrounds for light/dark modes.
- [x] 2.4 Apply soft shadows and thin borders matching the section card style.

## 3. Option Item Refinement
- [x] 3.1 Style `.q-item` inside `.custom-select-menu` with `border-radius: 8px` and 2px-4px horizontal margins.
- [x] 3.2 Set `font-weight: 600` for all item labels within the dropdown.
- [x] 3.3 Customize `.q-item--active` background and text color to align with the primary theme.

## 4. Quality Assurance
- [x] 4.1 Verify that the menu correctly inherits the theme (body--dark vs default).
- [x] 4.2 Test the smoothness of the menu opening transition.
- [x] 4.3 Confirm there are no layout shifts or clipping issues when the dropdown is expanded.
