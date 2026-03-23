## 1. Components Update

- [x] 1.1 Update `src/components/molecules/SettingsItem.vue` to support an optional navigation chevron on the right side.
- [x] 1.2 Modify `SettingsItem.vue` or `MoreActionsPage` to support a "Modelo" button as a side action, ensuring it is compact and styled as an elevated badge or small button.

## 2. Page Completion

- [x] 2.1 Update the "Importar e exportar" section in `src/pages/MoreActionsPage.vue` to add:
    - "Importar arquivo CSV" (icon `file_upload` or similar variant)
    - "Importar do Google Sheet" (icon `table_chart`)
- [x] 2.2 Implement the "Modelo" buttons for these items using Quasar's `q-btn` with `dense` and `flat` props, including icons.
- [x] 2.3 Implement the new "Backups" section in `src/pages/MoreActionsPage.vue` with:
    - "Exportar arquivo de dados" (icon `upload`)
    - "Importar arquivo de dados" (icon `download`)
    - "Google Drive" (icon `cloud` or custom SVG for Drive)
- [x] 2.4 Ensure "Google Drive" and "Mais opções" show the navigation chevron on the far right.

## 3. Polishing

- [x] 3.1 Verify consistent spacing between items in the new sections.
- [x] 3.2 Ensure the color palette for the "Modelo" buttons and icons aligns with the premium "Cashew" design language.
