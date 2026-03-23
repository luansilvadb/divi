## Why

Completing the "More Actions" / Settings interface with advanced data management capabilities. While the basic structure exists, the application currently lack the specified import mechanisms (CSV/Google Sheets) and backup workflows (Local/Google Drive) shown in the reference design. These are essential for users to migrate data and secure their financial records.

## What Changes

- **Advanced Import Section**: Inside "Importar e exportar", add functionality for:
    - **Importar arquivo CSV**: With a "Modelo" download button.
    - **Importar do Google Sheet**: With a "Modelo" link/button.
- **Backups Section**: Add a new section called "Backups" containing:
    - **Exportar arquivo de dados**: Core backup export.
    - **Importar arquivo de dados**: Core backup import.
    - **Google Drive**: Integration link with chevron navigation.
- **UI Enhancements**:
    - Update `SettingsItem` to handle side "Modelo" buttons/pills as seen in the mockup.
    - Ensure iconography (CSV, Sheets, Drive) matches the Material design language used in the reference.

## Capabilities

### New Capabilities
- `backup-management`: Logic and UI for managing application state persistence (Export/Import/Cloud).
- `enhanced-data-import`: Support for templates and multiple sources (CSV/Sheets).

### Modified Capabilities
- `settings-management`: Complete the missing UI nodes derived from the mockups.

## Impact

- **UI Components**: `src/components/molecules/SettingsItem.vue` and `src/pages/MoreActionsPage.vue`.
- **Navigation**: Potentially new sub-routes if Google Drive or detailed import requires a flow.
- **Assets**: New icons or template files.
