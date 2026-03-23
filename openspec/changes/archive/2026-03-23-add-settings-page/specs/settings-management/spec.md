## ADDED Requirements

### Requirement: Centralized Action Page
The system SHALL provide a dedicated page (`/actions` or `/settings`) to centralize all auxiliary actions, settings, and branding.
- **WHEN** the user navigates to the specified route.
- **THEN** it must show a "Mais ações" centered title at the top with a question mark help button.

#### Scenario: Navigating to More Actions
- **WHEN** the user clicks on the "Mais" icon in the navigation.
- **THEN** the application should render the "Mais ações" view with all categories.

### Requirement: Branding Information Actions
The system SHALL provide prominent buttons for "Sobre Cashew" and "Opinião".
- **WHEN** these actions are visible.
- **THEN** they must appear side-by-side as distinct top-level cards or wide buttons at the top of the main area.

#### Scenario: Selecting Branding Action
- **WHEN** the user clicks "Sobre Cashew".
- **THEN** it should open a modal or navigate to a page with details about the platform.

### Requirement: Visual Theme Customization
The system SHALL provide controls for "Cor de destaque" (Accent Color), "Material You" (dynamic), and "Modo de tema" (Light/Dark/Auto).
- **WHEN** "Modo de tema" is changed.
- **THEN** it MUST instantly apply the selected state (Light, Dark, or System Sync).

#### Scenario: Toggling Material You
- **WHEN** the user toggles the "Material You" switch.
- **THEN** the application colors must shift to reflect an expressive dynamic palette.

### Requirement: Categorized Preference Items
The system SHALL organize preferences into "Tema", "Preferências", "Ferramentas e extras", and "Importar e exportar".
- **WHEN** items have sub-text (caption).
- **THEN** they MUST be displayed below the title in a smaller, dimmer font.

#### Scenario: Displaying Sub-options
- **WHEN** the "Mais opções" item is rendered.
- **THEN** it must show its sub-text: "Estilo, transações, contas, formatação".
