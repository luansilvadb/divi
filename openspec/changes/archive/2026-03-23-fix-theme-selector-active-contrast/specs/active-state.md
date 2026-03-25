# Spec: Active State in Dark Mode

## UPDATED Requirements

### Requirement: Active theme option uses low-intensity contrast in dark mode

The system SHALL visually distinguish the currently selected theme mode in dark mode using a subtle, low-contrast border and background treatment that harmonizes with the dark theme and does not produce excessive "white" contrast.

#### Scenario: Active option is displayed in dark mode

- **WHEN** the theme selector highlights the active option in a dark theme context
- **THEN** the border opacity SHALL be between 5% and 10% white
- **AND** the background opacity SHALL be between 4% and 6% white
- **AND** the check indicator SHALL have enough contrast for legibility but not exceed the intensity of surrounding text labels
