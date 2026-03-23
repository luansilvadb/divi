## Context

TheSettings page is now taking structural shape, but it is currently missing the critical "Importar" and "Backups" sections required to reach parity with the design reference. These features allow users to import financial data from CSVs or Sheets and ensure their data safety via backups.

## Goals / Non-Goals

**Goals:**
- Implement the "Importar arquivo CSV" and "Importar do Google Sheet" items with "Modelo" download/view actions.
- Implement the "Backups" category with "Exportar", "Importar", and "Google Drive" entry points.
- Align iconography and the "chevron" navigation indicator for nested menu items like Google Drive.

**Non-Goals:**
- Implementing the actual logic for Google Sheets API or Google Drive authentication in this phase.
- Implementing the logic for the "Bill Splitter" mentioned previously (just UI integration for now).

## Decisions

- **Nested Navigation Item**: The "Google Drive" item and "Mais opções" should show a navigation chevron (`chevron_right`) on the far right to denote that they open another view/modal.
- **Side Action Buttons**: `SettingsItem` should support a side-aligned "Modelo" button using a slot. This button will be stylized with a subtle background and icon (a download icon for CSV, an external link icon for Sheets).
- **Icon Choice**: Continue using Material Icons or Symbols for consistency.
    - `description` + `arrow_downward` for CSV Export.
    - `table_chart` for Google Sheets.
    - `backup` or `cloud` for Google Drive.

## Design Details

- **Import Categories**: Grouped under "Importar e exportar".
- **Backup Categories**: New section "Backups".
- **Density and Padding**: Ensure section groups have a 20px radius background and inner 8px padding, matching the current look.
- **Pills**: The "Modelo" button will be a small, dense `q-btn` with a light color (`grey-2` or `primary` translucent).

## Risks / Trade-offs

- **Icon Density** → **Mitigation**: Use smaller icons (22-24px) to avoid clutter as the number of items grows.
- **Route Complexity** → **Mitigation**: Navigation items without paths yet will use `@click` handlers or dummy `to` props to show the chevron.
