# Specification: Transition Behavior

Detailed requirements for the "Mais opções" to main settings screen transition.

## REQ-001: Snap Transition on Close

The transition from `AdvancedSettingsPage` back to `MoreActionsPage` must be responsive and snappier than the initial open.

- **WHEN**: The user clicks the "arrow_back" button or uses the system back gesture.
- **THEN**: The `MainLayout` should start the exit animation immediately without delay.

## REQ-002: Hero Element Placement

The background element `layoutId="settings-hero-bg"` must not block or visibly sit on top of other content items during its collapse.

- **WHEN**: The Hero element is transitioning back to its original state.
- **THEN**: Its `z-index` or layout flow should cause it to settle behind or at the same level as siblings, never overlapping correctly rendered items like "Idioma".

## REQ-003: Consistent Spring Constants

The Hero animation in both pages must share identical `Motion` spring properties to avoid jitter or "jumps" when passing management from one page to another.

- **SPEC**: 
  - `stiffness`: 600
  - `damping`: 48
  - `mass`: 1
