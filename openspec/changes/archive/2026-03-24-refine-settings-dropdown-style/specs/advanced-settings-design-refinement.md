# Specification: Advanced Settings Design Refinement

## Added Requirements

### Requirement: Dropdown Menu Border-Radius
- **GIVEN** a Select dropdown is opened in the Advanced Settings page
- **WHEN** the pop-up menu is displayed
- **THEN** it MUST have a `border-radius: 12px` to match the control's trigger.

### Requirement: Glassmorphism Effect
- **GIVEN** the dropdown menu is active
- **WHEN** the background is rendered
- **THEN** it MUST apply a `backdrop-filter: blur(12px)` and a slightly translucent background (`rgba` with 0.85-0.95 opacity).

### Requirement: Menu Item Stylization
- **GIVEN** the list of options inside the dropdown
- **WHEN** items are rendered
- **THEN** each item (`q-item`) MUST have `border-radius: 8px` and subtle horizontal margins to create an "inset" effect.
- **AND** selected items MUST be clearly highlighted with the primary color theme.
