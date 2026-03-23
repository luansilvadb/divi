## 1. Components Refactor

- [x] 1.1 Refactor `src/components/molecules/SettingsItem.vue` to support a `#bottom` slot for nested content (like radio groups) and improve text density for captions.
- [x] 1.2 Add support for "rich captions" in `SettingsItem.vue` or a related molecule, enabling primary-colored link text within the subtitle area.

## 2. Page Layout Overhaul

- [x] 2.1 Refactor `src/pages/MoreActionsPage.vue` layout:
    - Position section headers ("TEMA", "PREFERÊNCIAS", etc.) outside and above the content containers.
    - Set the card container radius to 20px and apply a subtle background change (`#1e1e1e` or similar for dark mode).
- [x] 2.2 Reorganize "Tema" section:
    - Transform "Modo de tema" from a select dropdown into an inline list of radio buttons with descriptions (Modo claro, Modo escuro, Sincronizar com sistema).
- [x] 2.3 Refine items for high density:
    - Tighten padding and reduce caption font-size to match the Chrome settings look.
    - Add "Saiba mais" links with primary color to captions.
- [x] 2.4 Update "Action Cards" at the top to have a similar card-style alignment and iconography.

## 3. Polishing

- [x] 3.1 Verify all navigation chevrons and buttons are correctly aligned to the far right.
- [x] 3.2 Ensure colors and contrast are optimized for clarity in both light and dark modes.
