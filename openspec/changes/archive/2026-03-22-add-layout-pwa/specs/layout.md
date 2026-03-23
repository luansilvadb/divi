# Navigation and Layout Specifications

## ADDED Requirements

### Requirement: Desktop Persistent Sidebar
- **WHEN** the user visits the application on a Desktop screen size (`gt-sm`).
- **THEN** a permanent (`show-if-above`), borderless sidebar navigation drawer should be visible on the left side of the screen.

### Requirement: Live Clock Header
- **WHEN** the persistent sidebar is rendered.
- **THEN** it must present a live clock block at the absolute top containing the time, weekday, and date, structurally formatted and kept alive via interval updates.

### Requirement: Navigation Link Styling
- **WHEN** a navigation `<q-item>` matches the currently active route.
- **THEN** it should receive an active styling class to reflect a selected, highlighted state (e.g. rounded border, custom contrasting background).

### Requirement: Mobile Bottom Navigation
- **WHEN** the user visits the application using a Mobile screen size (`lt-md`).
- **THEN** the Desktop sidebar must be completely hidden.
- **THEN** a streamlined `<q-footer>` providing foundational icon-tab routes should be presented at the bottom of the device viewport instead.
