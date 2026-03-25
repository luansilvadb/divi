# Specification: Language Selection

## Summary

This specification defines the functional requirements for changing and persisting the application language via a Bottom Sheet interface.

## Requirements

### Requirement: Language Selection Trigger

- **GIVEN** the user is on the "Configurações" (Settings) page.
- **WHEN** the "Idioma" list item is clicked.
- **THEN** a Bottom Sheet titled "Idioma" must be displayed from the bottom of the screen.

### Requirement: Language List and UI

- **GIVEN** the "Idioma" Bottom Sheet is visible.
- **THEN** it must contain a "Se você gostaria de ajudar com traduções" banner with an email link.
- **AND** it must list available languages with a radio-style selection circle.
- **AND** the currently active language must be visually marked as selected.

### Requirement: Locale Persistence

- **GIVEN** the user selects a different language (e.g., "English").
- **WHEN** the selection is made.
- **THEN** the application UI must immediately update to the new locale.
- **AND** the preference must be saved to `LocalStorage`.
- **AND** the Bottom Sheet should close automatically.

### Requirement: System Language (Auto)

- **GIVEN** the "Sistema" (System) option is selected.
- **WHEN** the application initializes.
- **THEN** it must detect the browser's current language (`navigator.language`).
- **AND** if available, apply the matching locale; otherwise, fallback to the default (English or Portuguese).
