## ADDED Requirements

### Requirement: Theme mode selector presents premium visual style

The system SHALL provide a dedicated theme mode selector component with a trigger and dropdown surface visually harmonized with the Settings page language, using moderate corner radius, subtle border treatment, restrained elevation, and low-intensity interaction states rather than standout premium emphasis.

#### Scenario: User opens selector menu

- **WHEN** the user taps or clicks the theme mode trigger
- **THEN** the dropdown opens anchored to the trigger using smooth transition behavior
- **AND** trigger and menu visual treatment remains consistent with surrounding Settings controls in both light and dark themes

### Requirement: Theme options include descriptive iconography and labels

The system SHALL present exactly three theme mode options (Light, Dark, Auto), each with a descriptive icon and readable label in the dropdown list.

#### Scenario: Options are displayed in dropdown

- **WHEN** the dropdown menu is rendered
- **THEN** each available theme mode appears with its corresponding icon and label

### Requirement: Selected theme option is visually distinguished with low-intensity contrast

The system SHALL visually highlight the currently selected theme mode. In dark mode, it uses a subtle, low-contrast border and background treatment (between 4-10% opacity) that harmonizes with the dark theme and does not produce excessive contrast.

#### Scenario: Active option is displayed

- **WHEN** the theme selector highlights the active option
- **THEN** it includes a discrete check indicator
- **AND** in dark mode, the border opacity SHALL be between 5% and 10% white
- **AND** the background opacity SHALL be between 4% and 6% white
- **AND** the check indicator SHALL have enough contrast for legibility but not exceed the intensity of surrounding text labels

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
