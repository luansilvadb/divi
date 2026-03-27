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
- **THEN** it MUST include a "Mais" tab icon (e.g. `grid_view` or `menu`) that navigates to the "Mais ações" / Settings page.

#### Scenario: Navigating from Bottom Nav
- **WHEN** the user is on Mobile and clicks the "Mais" icon in the bottom navigation.
- **THEN** it MUST navigate to the `/actions` page.

### Requirement: Page Entry Consistency
- **WHEN** opening any configuration page with an expanded `SliverAppBar`.
- **THEN** the absolute vertical distance from the top of the viewport to the start of the first menu item (label, row, or card) must be exactly `240px`.
- **THEN** this padding MUST be defined in the `PageContentLayout` molecule.
- **THEN** the first element within the layout (e.g. `ActionCard` row or `CategoryLabel`) MUST NOT have any additional top margin relative to its container's padding-top.
- **THEN** developers MUST NOT manually set `padding-top: 240px` in local CSS.

### Requirement: Layout Normalization
- **WHEN** on a screen wider than 700px.
- **THEN** content must be centered and bound by a consistent `maxWidth: 700px` unless otherwise specified by the molecule's props.

### Requirement: Scrollbar Invisibility
- **WHEN** in a scroll container with the `.custom-scroll` class.
- **THEN** the scrollbar MUST be hidden on both Chrome (WebKit) and Firefox (scrollbar-width).
