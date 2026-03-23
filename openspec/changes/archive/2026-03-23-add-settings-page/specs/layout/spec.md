## MODIFIED Requirements

### Requirement: Mobile Bottom Navigation
The system SHALL provide a streamlined `<q-footer>` providing foundational icon-tab routes presented at the bottom of the device viewport for Mobile screen sizes (`lt-md`).
- **WHEN** the user visits the application using a Mobile screen size (`lt-md`).
- **THEN** the Desktop sidebar must be completely hidden.
- **THEN** a streamlined `<q-footer>` providing foundational icon-tab routes should be presented at the bottom of the device viewport instead.
- **THEN** it MUST include a "Mais" tab icon (e.g. `grid_view` or `menu`) that navigates to the "Mais ações" / Settings page.

#### Scenario: Navigating from Bottom Nav
- **WHEN** the user is on Mobile and clicks the "Mais" icon in the bottom navigation.
- **THEN** it MUST navigate to the `/actions` page.
