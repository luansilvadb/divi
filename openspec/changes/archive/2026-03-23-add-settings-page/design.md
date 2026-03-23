## Context

The application currently lacks a centralized settings hub. The new "More Actions" page (`/actions`) will provide a unified interface for theme customization, preferences, and extra tools. Following the "Cashew" design language, the interface will be clean, responsive, and visually consistent with the provided reference image.

## Goals / Non-Goals

**Goals:**
- Implement a `/actions` page with specific sections (Tema, Preferências, Ferramentas e extras, Importar e exportar).
- Support Material You (dynamic coloring) and Theme Mode (Light/Dark/Auto) through Quasar's plugin system.
- Integrate action cards for "Sobre Cashew" and "Opinião".
- Update navigation (MobileBottomNav) to include a "Mais" tab.

**Non-Goals:**
- Implementing the "Bill Splitter" logic (only the navigation item is required now).
- Changing the core functional logic of CSV exports (only visual integration).

## Decisions

- **Atomic Design Consistency**: Items will use a flexible `SettingsItem` molecule that wraps `q-item` to handle icons, labels, and right-side controls (toggles/selects/pills) uniformly.
- **Theme Store**: The `useUiStore` will be expanded to persist `themeMode` (enum) and `materialYou` (bool).
- **Icon Set**: Use Material Symbols or Material Icons via Quasar's config for consistency with the reference.
- **Navigation Pattern**: The "More" item in `MobileBottomNav` will replace or augment the current menu to lead to this new page.

## Risks / Trade-offs

- **[Risk] Theme Conflict** → **Mitigation**: Use Quasar's `Dark` state as the single source of truth; ensure `materialYou` only affects primary/secondary colors without overriding contrast.
- **[Risk] Desktop Sidebar Overload** → **Mitigation**: Add a dedicated "Configurações" link at the bottom of the sidebar to mirror the mobile experience.
