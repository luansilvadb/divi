# Design: Global Accent Color Picker

Implementation details for the accent color picker bottom sheet and global theme integration.

## Architecture

The feature follows a store-driven approach for persistence and a component-based approach for the UI.

### State Management (Pinia)
Store: `src/stores/ui.ts`
- **State**: `accentColor: string` (hex code, default to `#1976d2`).
- **Action**: `setAccentColor(color: string)`:
    - Updates `this.accentColor`.
    - Calls Quasar's `setCssVar('primary', color)`.

### UI Components
- **ColorPickerBottomSheet.vue**:
    - Container: `q-dialog` with `position="bottom"`.
    - Header: `row items-center justify-between` for title and close button.
    - Body: `row q-gutter-md justify-center` for color circles.
    - Footer: `q-btn` with `icon="colorize"` (eyedropper) for custom selection.

### Integration
- **MoreActionsPage.vue**:
    - Import `ColorPickerBottomSheet`.
    - Track `showColorPicker` boolean.
    - Bind `@click` on `SettingsItem` (Cor de destaque).

## Tech Stack
- **Framework**: Vue 3 (Composition API).
- **UI Library**: Quasar Framework (v2).
- **State**: Pinia.
- **Styling**: SCSS.

## Constraints
- Must follow the provided image reference for colors and spacing.
- Bottom sheet must be responsive and optimized for mobile touch targets.
- Theme change must be instantaneous across the whole app.

## Risks / Trade-offs
- **Performance**: Changing CSS variables globally is fast, but we should ensure it doesn't cause layout shifts in complex components.
- **Persistence**: We assume Pinia state is persisted or needs a simple local storage sync to keep the color after reload.
