# Proposal: Standardize Dropdown Component

## Goal

The goal of this change is to standardize the q-select dropdown component used in the AdvancedSettingsPage.vue into a reusable pattern within the projects design system. This will ensure visual consistency across the application and reduce code duplication for similar interactive elements.

## Strategy

1. Extract Component: Create a new reusable component, tentatively named BaseSelect.vue or AppSelect.vue, which encapsulates the custom styling and behavior seen in the current AdvancedSettingsPage.vue implementation.
2. Standardize Styling: Move the SCSS/CSS logic from the page level to the component level or a global design system theme.
3. Refactor Page: Replace the manual q-select implementation in AdvancedSettingsPage with the new standardized component.
4. Documentation: Ensure the component is flexible enough to be used in other parts of the application while maintaining the strict aesthetic standards (glassmorphism, premium feel, smooth transitions).

## Motivation

Currently, the AdvancedSettingsPage uses a highly customized q-select with specific backdrop filters, border-radius transitions (to snap to the menu when open), and custom animation settings. Hardcoding these styles at the page level makes it difficult to maintain and reuse. By creating a standardized Design System dropdown, we:
- Improve maintainability.
- Ensure the premium look is applied consistently.
- Simplify the creation of new settings or forms.

## Impact

- Affected Code: src/pages/AdvancedSettingsPage.vue, src/components/atoms (new component).
- APIs: The new component will wrap Quasars q-select but expose a simplified API compatible with our design tokens.
- Visuals: No change in the current look, but easier reuse elsewhere.
