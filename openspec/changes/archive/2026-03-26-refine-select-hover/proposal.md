# Proposal: Refine Select Hover State

## Motivation
The currently hovered item in the `BaseSelect` dropdown menu uses a default highlight that doesn't fully align with the subtle, premium design of the application. The user has requested that the hover color match the "background of the dropdown" to achieve better harmony and smoothness.

## Impact
- **UI Components**: `BaseSelect.vue` global styles for the popup menu will be refined.
- **Aesthetics**: Provides a more cohesive and integrated feel for selecting options.

## Requirements
- Item hover background should be subtle and match the intended background tone of the dropdown.
- Maintain high legibility of the text during hover.
- Ensure consistent behavior across light and dark themes.
