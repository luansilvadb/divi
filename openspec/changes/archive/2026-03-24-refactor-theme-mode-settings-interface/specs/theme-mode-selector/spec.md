## MODIFIED Requirements

### Requirement: Theme mode selector presents premium visual style

The system SHALL provide a dedicated theme mode selector component rendered inline in the Settings page language, using moderate corner radius, subtle border treatment, restrained elevation, and low-intensity interaction states rather than standout premium emphasis.

#### Scenario: User views selector options

- **WHEN** the user opens the Settings page
- **THEN** the inline selector appears as part of the "Theme mode" setting block
- **AND** selector visual treatment remains consistent with surrounding Settings controls in both light and dark themes

### Requirement: Theme options include descriptive iconography and labels

The system SHALL present exactly three theme mode options (Light, Dark, System), each with a descriptive icon and readable label in the inline selection group.

#### Scenario: Options are displayed inline

- **WHEN** the selector area is rendered
- **THEN** each available theme mode appears with its corresponding icon and label

### Requirement: Selected theme option is visually distinguished

The system SHALL visually highlight the currently selected theme mode using a subtle primary-tinted background treatment and a discrete check indicator.

#### Scenario: Current mode appears selected

- **WHEN** the inline selector is rendered while a theme mode is active
- **THEN** the active option is visibly highlighted and includes a check indicator

### Requirement: Selector behavior remains functionally compatible with existing theme management

The system SHALL preserve existing theme selection behavior, ensuring that selecting an option updates the active mode through the current settings flow without changing business rules.

#### Scenario: User selects a different theme mode

- **WHEN** the user chooses another mode from the inline selector
- **THEN** the application applies the selected mode using the same underlying theme management mechanism already used in settings

### Requirement: Selector remains consistent across light and dark themes

The system SHALL adapt component colors and contrast so the selector remains visually coherent and legible in both light and dark application themes.

#### Scenario: App theme context changes

- **WHEN** the interface is rendered in light mode or dark mode
- **THEN** selector container, options, and selected states maintain appropriate contrast and visual consistency
