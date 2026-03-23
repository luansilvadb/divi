# Specification: Architecture Refactor

Detailed specification for state management and internationalization requirements.

### Requirement: Centralized UI State

- **GIVEN** a user is on the desktop dashboard.
- **WHEN** the user clicks the mini-toggle button in the sidebar.
- **THEN** the `uiStore`'s `isSidebarMini` state should be updated.
- **AND** the sidebar UI should reflect the change immediately across all components (including navigation visibility).

### Requirement: pt-BR Localization

- **GIVEN** the application is initialized.
- **WHEN** any navigation label or button text is rendered.
- **THEN** the text should be fetched from the `src/i18n/pt-BR/` message bundle using the `$t` function.
- **AND** no hardcoded Portuguese strings should remain in the component templates.

### Requirement: Shared Navigation Types

- **GIVEN** a navigation array is defined (Sidebar or BottomNav).
- **WHEN** the item is instantiated.
- **THEN** it must strictly follow the `NavigationItem` TypeScript interface.
- **AND** any missing required property should trigger a build-time compiler error.
