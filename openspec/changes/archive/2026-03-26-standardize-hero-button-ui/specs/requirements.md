# Specifications: UI Consistency 🏛️📐

## Requirements

### Requirement: Uniform List Visuals
The "Mais opções" item must be indistinguishable from other items in its section when in its idle state.
- **GIVEN** a `SettingsSection` (Card).
- **WHEN** the item is rendered as a `SettingsItem` wrapped in a `Motion` transition.
- **THEN** it must have the same background color, border radius, and margins as its static neighbors.

### Requirement: Padded Alignment
The hero transition source (`Motion.div`) must align with the clickable area of the neighboring items.
- **GIVEN** that `SettingsItem` uses `margin: 2px 8px`.
- **WHEN** the `Motion` element is rendered.
- **THEN** it must respect the 8px side margins to avoid horizontal misalignment during the expansion animation.

### Requirement: Build Stability
The project must build and run without ESLint errors related to unused imports.
- **GIVEN** the dev server environment.
- **WHEN** `npm run dev` is executed.
- **THEN** it must complete without failures related to the `computed` or `scrollElement` variables.
