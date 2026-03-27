# Proposal: add-back-action-advanced-settings

## Summary
Add a consistent back action to the SliverAppBar in the Advanced Settings page to restore navigation accessibility.

## Goals
Restore the expected back navigation behavior on the `AdvancedSettingsPage`. Currently, the page defines a `back-button` prop and `@back` event on `SliverAppBar`, but these are not yet implemented in the component, leaving the user with no way to return to the previous screen via the UI.

## Proposed Change
Enhance the `SliverAppBar` molecule component to support a `back-button` prop and emit a `back` event. Update `AdvancedSettingsPage` to ensure it correctly utilizes this reinforced component for consistent navigation across the settings flow.

## Capabilities
- SliverAppBar Navigation Support (sliver-app-bar-nav)
- Advanced Settings Navigation (advanced-settings-nav)

## Impact
- `src/components/molecules/SliverAppBar.vue`: Adding props and logic for back button.
- `src/pages/AdvancedSettingsPage.vue`: Ensuring correct usage of the navigation action.
