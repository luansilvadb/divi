# Theme Mode Selector UX Spec

## OVERVIEW

This specification outlines the expected behavior of the theme mode selector, focusing on the removal of hover effects.

## EXPECTED BEHAVIOR

### Hover Interaction

- **GIVEN** a mouse user hovers over a theme option (Light, Dark, or System)
- **WHEN** the item is not currently active
- **THEN** the background and border-color of the `.theme-option__content` must **NOT** change.

### Selection Persistence

- **GIVEN** a theme option is selected
- **THEN** the `.theme-option--active` state must be visually distinct, using the primary color background and border color as defined in the component's active styles.
