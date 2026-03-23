## Why

Provide a unified and refined interface for application settings, preferences, and brand information. Following the "Cashew" design reference, users need a centralized hub to manage their experience—from visual theme choices (Material You, Dark/Light modes) to functional tools like "Bill Splitter" and data export. This change enhances user autonomy and brand identity.

## What Changes

- **New "More Actions" Page**: A dedicated screen (`/settings` or `/actions`) with a centered title "Mais ações" and stylized action cards.
- **Settings Hierarchy**: Organized list items by categories:
    - **Tema**: Accent color selection, Material You toggle, and Theme mode (Light/Dark/Auto).
    - **Preferências**: Edit home page, Language selection (Pill indicator), and "More options" (sub-actions).
    - **Ferramentas e extras**: Integrated tools start with "Bill Splitter".
    - **Importar e exportar**: Direct actions for CSV export.
- **Top Action Cards**: Quick access buttons for "Sobre Cashew" and "Opinião".
- **Theme Integration**: Deep integration with Quasar's Dark plugin and dynamic brand color management (`setBrand`).
- **Navigation Update**: Integration of the new page into the `MainLayout` (MobileBottomNav/DesktopSidebar).

## Capabilities

### New Capabilities
- `settings-management`: Complete capability for managing application-wide user preferences, visual themes, and auxiliary tools (Bill Splitter, data management).

### Modified Capabilities
- `layout`: Update navigation requirements to include the "More Actions" / Settings entry point in all adaptive layouts.

## Impact

- **UI Layers**: `src/pages`, `src/components/molecules`, `src/components/organisms`.
- **Navigation**: `src/router/routes.ts`, `src/components/organisms/layout/MobileBottomNav.vue`.
- **State Management**: `src/stores/ui.ts` (adding theme/preference states).
- **Framework Plugins**: Quasar `Dark` and `Color` plugins.
