# Specification: Slide Horizontal Transition

## ADDED Requirements

### Requirement: Removal of Hero Animation
- **GIVEN** the application is navigating between screens
- **WHEN** the View Transition is triggered
- **THEN** NO individual element (text, icons) MUST fly or morph independently across the screen

### Requirement: Horizontal Slide (Push)
- **GIVEN** the user is navigating from the main settings to "Mais Opções"
- **WHEN** the View Transition is triggered
- **THEN** the entire NEW page MUST slide in from the RIGHT (`translateX(100%)` to `0%`)
- **AND** the OLD page MUST slide out to the LEFT (`0%` to `-30%`)

### Requirement: Horizontal Slide (Pop/Back)
- **GIVEN** the user is navigating back from Advanced Settings
- **WHEN** the View Transition is triggered
- **THEN** the entire OLD page MUST slide out to the RIGHT (`0%` to `100%`)
- **AND** the NEW (previous) page MUST slide in from the LEFT (`-30%` to `0%`)

### Implementation Rule: Root Class for Directions
- **GIVEN** the system is about to perform a back navigation
- **WHEN** `document.startViewTransition` is called
- **THEN** the system MUST add a `transition-back` class to the `document.documentElement`
- **AND** remove it once the transition completes
