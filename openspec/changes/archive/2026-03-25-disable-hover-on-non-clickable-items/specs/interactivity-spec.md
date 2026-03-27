# Spec: Conditional Item Interactivity

## ADDED Requirements

### Requirement: Interactive State Feedback
- **GIVEN** a `SettingsItem` with `:clickable="true"`
- **WHEN** the mouse enters its area
- **THEN** it should exhibit a background change to `rgba(0,0,0,0.03)` (or light grey).

### Requirement: Static State Feedback
- **GIVEN** a `SettingsItem` with `:clickable="false"`
- **WHEN** the mouse enters its area
- **THEN** its background should NOT change.
- **THEN** its cursor should be the default arrow, NOT the pointer (which Quasar handles if `:clickable` is passed).

### Requirement: Dark Mode Integrity
- **GIVEN** the application is in dark mode
- **WHEN** hovering a clickable `SettingsItem`
- **THEN** it should use `rgba(255, 255, 255, 0.05)` for its hover background.
