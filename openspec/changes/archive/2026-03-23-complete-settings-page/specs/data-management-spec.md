## ADDED Requirements

### Requirement: CSV and Google Sheets Import
The system SHALL provide an interface to import financial data from CSV files and Google Sheets.
- **GIVEN** "Importar arquivo CSV".
- **WHEN** the item is rendered.
- **THEN** it must show a "Modelo" button on its right side which, when triggered, shall download the corresponding CSV template.
- **GIVEN** "Importar do Google Sheet".
- **WHEN** the item is rendered.
- **THEN** it must show a "Modelo" button with an external-link icon that takes the user to a Google Sheet template view.

### Requirement: Data Backup Category
The system SHALL provide a dedicated "Backups" section to handle localized state persistence.
- **GIVEN** the "Backups" category header.
- **THEN** it must show "Exportar arquivo de dados", "Importar arquivo de dados", and "Google Drive" as menu items.
- **GIVEN** "Exportar arquivo de dados".
- **THEN** it must show an icon representing a file and a download arrow (`upload`).
- **GIVEN** "Importar arquivo de dados".
- **THEN** it must show an icon representing a file and an upload arrow (`download`).

### Requirement: Google Drive Navigation
The system SHALL provide a dedicated Google Drive integration item.
- **WHEN** the "Google Drive" item is visible.
- **THEN** it must display a cloud-provider icon and a navigation chevron to the right of its label, signifying that it opens a nested or external flow.

#### Scenario: Interacting with Google Drive
- **WHEN** the user clicks "Google Drive".
- **THEN** it must trigger a navigation state or an authentication modal.
