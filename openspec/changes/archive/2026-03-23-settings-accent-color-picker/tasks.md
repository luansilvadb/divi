# Tasks: Implementation Plan for Accent Color Picker

Implementation steps for the settings-accent-color-picker feature.

## 1. Store & State
- [x] 1.1 Add `accentColor: string` to the state in `src/stores/ui.ts`.
- [x] 1.2 Add `setAccentColor(color: string)` action to `src/stores/ui.ts`.
- [x] 1.3 Ensure `setCssVar('primary', color)` is called within the action.
- [x] 1.4 Persistent state: check if storage sync is needed.

## 2. Component Development
- [x] 2.1 Create `src/components/molecules/ColorPickerBottomSheet.vue`.
- [x] 2.2 Add `q-dialog` with `position="bottom"`.
- [x] 2.3 Implement the Header with Title and Close (X) icon.
- [x] 2.4 Render the color grid/row with preset colors from design reference.
- [x] 2.5 Add the Eyedropper button for custom color picker.

## 3. Integration & Flow
- [x] 3.1 Modify `src/pages/MoreActionsPage.vue` to include the Color Picker component.
- [x] 3.2 Add `showColorPicker` state and link it to the dialog's `v-model`.
- [x] 3.3 Add click listener to the "Cor de destaque" `SettingsItem` to toggle the dialog.
- [x] 3.4 Wire the color selection callback to update the store.

## 4. Polish & QA
- [x] 4.1 Verify colors and spacing matches the image reference.
- [x] 4.2 Test the feature on mobile-sized viewports.
- [x] 4.3 Ensure the transition is smooth and high-performance.
- [x] 4.4 Verify state persistence after page reload.

## 5. Custom Color Picker (Eyedropper)
- [x] 5.1 Create `src/components/molecules/CustomColorPickerBottomSheet.vue`.
- [x] 5.2 Implement circular `q-color` picker.
- [x] 5.3 Add "Selecione" button to confirm selection.
- [x] 5.4 Connect "Eyedropper" button to open this new sheet.
