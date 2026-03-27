# Spec: Standardized More Options Interaction

## ADDED Requirements

### Requirement: Uniform Hover Effect
- **GIVEN** the "Mais opções" item is displayed in the list
- **WHEN** the mouse hovers over it
- **THEN** it should show the same translucent background (`rgba(0,0,0,0.03)`) as "Editar página inicial" and "Idioma".

### Requirement: Standard Ripple Tap
- **GIVEN** a touch or click on "Mais opções"
- **WHEN** the interaction begins
- **THEN** a Quasar ripple should appear starting from the interaction coordinate.
- **THEN** the entire item should NOT scale down (removing `while-tap` custom logic).

### Requirement: Borderless Static State
- **GIVEN** the "Mais opções" item is at rest in the list
- **WHEN** it is inside the `section-card`
- **THEN** it should have no internal borders that distinguish its custom background from the rest of the list.
- **THEN** the transition to `AdvancedSettingsPage` should still use the `layoutId="settings-hero-bg"` to expand the surface smoothly.
