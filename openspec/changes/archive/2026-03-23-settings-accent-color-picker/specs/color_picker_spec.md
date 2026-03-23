# Specification: Color Picker Requirements

Detailed requirements for the Global Accent Color Picker feature.

## User Interface (UI)
- **Bottom Sheet**: Must appear from the bottom on mobile and small screens.
- **Title**: Header text "Selecione A Cor" in bold.
- **Header Actions**: Close (X) icon on the right to dismiss.
- **Color Options**: Provide a selection of at least 10 pre-defined accent colors in a circular format.
- **Active State**: The selected color should have a visual indication (e.g., border or checkmark).
- **Custom Selection**: An "Eyedropper" button below the presets to open an advanced color picker.

## Functionality
- **Real-time Preview**: Choosing a color must immediately update all UI elements using the `primary` color theme.
- **State Persistence**: The color must remain changed across different pages and app sessions.
- **Accessibility**: All buttons must have sufficient touch target size (minimum 44x44px).

## Scenarios
- **GIVEN** the Settings screen is open.
- **WHEN** the user taps "Cor de destaque".
- **THEN** the Color Picker Bottom Sheet opens.

- **GIVEN** the Color Picker is open.
- **WHEN** the user selects a color circle.
- **THEN** the app theme updates to that color AND the bottom sheet stays open or closes (depending on UX preference - usually closes for quick selection).

- **GIVEN** a new color is selected.
- **WHEN** the user navigates to "Início" or "Transações".
- **THEN** those pages must reflect the new accent color.
