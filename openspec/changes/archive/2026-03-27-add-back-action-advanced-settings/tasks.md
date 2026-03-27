# Tasks: add-back-action-advanced-settings

## 1. SliverAppBar Enhancement
- [x] 1.1 Update `SliverAppBar.vue` to include `backButton` prop and `back` emit.
- [x] 1.2 Add the back `q-btn` in the `sliver-nav` section of the template.
- [x] 1.3 Implement the internal logic to emit the `back` event when clicked.
- [x] 1.4 Ensure the back button stays clickable and correctly positioned regardless of the `sliver-ui-layer` transform.

## 2. Advanced Settings Page Implementation
- [x] 2.1 Ensure the `SliverAppBar` in `AdvancedSettingsPage.vue` correctly uses the new prop.
- [x] 2.2 Verify the `goBack` function handles the `@back` event as expected.

## 3. Verification & Testing
- [x] 3.1 Test back button visibility in BOTH expanded and collapsed states.
- [x] 3.2 Verify accessibility (touch target size for the q-btn).
- [x] 3.3 Ensure it doesn't break other pages like `MoreActionsPage.vue` where no back button is requested.
