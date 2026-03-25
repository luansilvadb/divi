# Design: Refine Settings Dropdown Style

## Context
The application uses a custom "premium" look in the `AdvancedSettingsPage.vue`, but the Quasar `q-select` pop-up content remains styling-neutral (default Quasar look). We need to bridge this gap to provide a more cohesive user experience.

## Goals
- **Consistency**: Use 12px border-radius everywhere in the Settings page.
- **Visual Depth**: Use glassmorphism and soft shadows.
- **Refinement**: Improve item selection visuals for better focus.

## Proposed Changes
### Components & Classes
- **Class `custom-select-menu`**: A new CSS class applied to the `q-select` via `popup-content-class`.
- **CSS Selectors**: Target `.q-menu.custom-select-menu` and its children `.q-item`.

### Styling Specs
- **Background**:
    - Light: `rgba(240, 242, 245, 0.95)` with `backdrop-filter: blur(12px)`.
    - Dark: `rgba(42, 42, 42, 0.85)` with `backdrop-filter: blur(12px)`.
- **Border**: `1px solid rgba(0, 0, 0, 0.05)` (light) / `rgba(255, 255, 255, 0.08)` (dark).
- **Shadow**: `0 10px 30px rgba(0, 0, 0, 0.12)` (light) / `0 10px 30px rgba(0, 0, 0, 0.4)` (dark).
- **Item Radius**: `8px` for better fitting inside the `12px` container.
- **Font**: Maintain `font-weight: 600` for all item labels.

## Risks / Trade-offs
### Overflow Management
Since the Settings page uses a `SliverAppBar` with complex overflow behavior, we must ensure that the `q-select` pop-up (which is usually teleported to the body) isn't affected by any `overflow: hidden` on parent containers.
*Self-correction*: Quasar defaults to `append-to-body`, so this is likely safe.

### Performance
The `backdrop-filter` is applied to a small area only when the dropdown is open. This is perfectly safe for modern devices.
