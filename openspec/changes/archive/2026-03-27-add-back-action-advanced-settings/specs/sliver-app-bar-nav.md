# Specs: sliver-app-bar-nav

## CAPABILITIES
- SilverAppBar Navigation Support: `sliver-app-bar-nav`

## DETAILED Requirements

### Requirement: Conditional Back Button Display
- **GIVEN** A `SliverAppBar` component.
- **WHEN** The `back-button` prop is set to `true`.
- **THEN** An icon button with code `arrow_back` must be visible in the navigation area.

### Requirement: Back Action Emission
- **GIVEN** The back button is visible.
- **WHEN** The user clicks the back button.
- **THEN** A `back` event must be emitted by the `SliverAppBar` component.

### Requirement: Navigation Slot Passthrough
- **GIVEN** Partials or custom navigation.
- **WHEN** The `navigation` slot is provided.
- **THEN** The slot content must co-exist or correctly override the default back button behavior.
