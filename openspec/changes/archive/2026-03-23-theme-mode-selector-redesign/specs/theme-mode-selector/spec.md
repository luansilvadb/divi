## ADDED Requirements

### Requirement: Theme mode selector presents premium visual style

The system SHALL provide a dedicated theme mode selector component with a pill-shaped trigger and a connected dropdown surface that matches the application premium design language, including rounded corners, layered shadow, and subtle motion.

#### Scenario: User opens selector menu

- **WHEN** the user taps or clicks the theme mode pill trigger
- **THEN** the dropdown opens anchored to the trigger using a smooth scale and fade transition

### Requirement: Theme options include descriptive iconography and labels

The system SHALL present exactly three theme mode options (Light, Dark, Auto), each with a descriptive icon and readable label in the dropdown list.

#### Scenario: Options are displayed in dropdown

- **WHEN** the dropdown menu is rendered
- **THEN** each available theme mode appears with its corresponding icon and label

### Requirement: Selected theme option is visually distinguished

The system SHALL visually highlight the currently selected theme mode using a subtle primary-tinted background treatment and a discrete check indicator.

#### Scenario: Current mode appears selected

- **WHEN** the dropdown is opened while a theme mode is active
- **THEN** the active option is visibly highlighted and includes a check indicator

### Requirement: Selector behavior remains functionally compatible with existing theme management

The system SHALL preserve existing theme selection behavior, ensuring that selecting an option updates the active mode through the current settings flow without changing business rules.

#### Scenario: User selects a different theme mode

- **WHEN** the user chooses another mode from the dropdown
- **THEN** the application applies the selected mode using the same underlying theme management mechanism already used in settings

### Requirement: Selector remains consistent across light and dark themes

The system SHALL adapt component colors and contrast so the selector remains visually coherent and legible in both light and dark application themes.

#### Scenario: App theme context changes

- **WHEN** the interface is rendered in light mode or dark mode
- **THEN** selector trigger, menu surface, and selected states maintain appropriate contrast and visual consistency
