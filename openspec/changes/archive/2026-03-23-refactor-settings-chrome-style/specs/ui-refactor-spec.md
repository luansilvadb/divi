## ADDED Requirements

### Requirement: Categorized Content Cards
The system SHALL organize all settings into "Content Cards" separated from headers.
- **WHEN** the "Mais ações" page is opened.
- **THEN** it must display section titles ("TEMA", "PREFERÊNCIAS", etc.) outside and above their corresponding data card.
- **AND** the data cards MUST have a darker background (for dark mode) with rounded corners (20px).

### Requirement: Nested Selection with Radio Buttons
The system SHALL support nested radio button selection groups under specific rows.
- **WHEN** an item contains a set of sub-options (e.g., "Modo de tema" levels or similar).
- **THEN** it must show small, dense radio buttons with a description caption for each.
- **AND** all options in a group must be indented below the parent item's icon/label.

### Requirement: Inline Rich Captions
The system SHALL support and render captions with embedded clickable links.
- **GIVEN** an item with an informative caption.
- **WHEN** it contains "Saiba mais sobre...".
- **THEN** this specific text must be styled as a primary-colored link with an underline or pointer cursor.

#### Scenario: Displaying Performance Mode
- **WHEN** the "Modo de tema" (or equivalent) item is visible.
- **THEN** it must show each available mode with its own radio button and descriptive text below the main row.
- **AND** only one mode can be active at a time.
