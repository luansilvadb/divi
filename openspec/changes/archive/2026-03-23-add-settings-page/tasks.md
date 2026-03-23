## 1. Setup and Components

- [x] 1.1 Update `src/stores/ui.ts` to include `themeMode` ('light'|'dark'|'auto') and `materialYou` (boolean) states with appropriate actions.
- [x] 1.2 Implement `SettingsItem.vue` molecule in `src/components/molecules/` using Quasar's `q-item` and `q-item-section`.
- [x] 1.3 Implement `ActionCard.vue` molecule in `src/components/molecules/` for the top branding/feedback buttons.

## 2. Page Implementation and Routing

- [x] 2.1 Create `MoreActionsPage.vue` in `src/pages/` implementing the "Mais ações" UI sections and categories.
- [x] 2.2 Register the `/actions` route in `src/router/routes.ts`.
- [x] 2.3 Update `src/components/organisms/layout/MobileBottomNav.vue` to add the "Mais" icon/tab as the final navigation item.
- [x] 2.4 Update `src/components/organisms/layout/DesktopSidebar.vue` to include a navigation link for the new "Mais ações" settings.

## 3. Polishing

- [x] 3.1 Verify theme switching functionality and ensure visual alignment with the "Cashew" reference.
- [x] 3.2 Ensure the "Idioma" pill (badge) and section headers match the density and styling of the reference image.
