# Design: add-back-action-advanced-settings

## Context
The `AdvancedSettingsPage` is missing its UI-based back navigation. While the page code already references a `back-button` and `@back` handler on the `SliverAppBar`, the component itself does not yet support these features, leading to a broken user experience where the user must rely on hardware/system back gestures only.

## Goals
1. Implement direct support for a `backButton` prop in `SliverAppBar`.
2. Ensure the back button is visually consistent with the app's design system.
3. Emit a `back` event to allow host pages to handle the navigation logic appropriately.

## Solution Design
- **Component Enhancement**: Modify `SliverAppBar.vue` to accept a boolean `backButton` prop.
- **UI Implementation**: Place a `q-btn` with an `arrow_back` icon within the `sliver-nav` container.
- **Event Handling**: Add a `back` event emission via `defineEmits`.
- **Page Integration**: No direct changes needed to `AdvancedSettingsPage.vue` logic as it already includes the necessary event bindings, but verification of correct behavior is required.

## Technical Architecture
- **Props**: `backButton?: boolean`.
- **Emits**: `back`.
- **Template**: Add conditional `q-btn` inside the `sliver-nav` div, before/within the `navigation` slot logic.

## Rationale
Using a dedicated prop for common navigation actions like "back" simplifies page implementation and ensures horizontal consistency across all screens using `SliverAppBar`.

## Risks / Trade-offs
- **Slot Overlap**: If a page uses both the `backButton` prop and the `navigation` slot, there could be layout overlap. This will be handled by placing the default back button within the slot's fallback or as a persistent leading element.
