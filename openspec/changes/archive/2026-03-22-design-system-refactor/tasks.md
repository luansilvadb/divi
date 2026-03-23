# Tasks: Architecture Refactor

Checklist for implementation.

## Phase 1: Infrastructure Setup

- [x] 1.1 Create `src/i18n/pt-BR/` folder and `index.ts` file.
- [x] 1.2 Register `pt-BR` in `src/boot/i18n.ts` and set as default.
- [x] 1.3 Create the `uiStore` in `src/stores/ui.ts`.
- [x] 1.4 Create `src/types/navigation.ts` and define `NavigationItem`.

## Phase 2: Refactoring Components

- [x] 2.1 Refactor `DesktopSidebar.vue` to move `isMini` to Pinia store.
- [x] 2.2 Migrate all nav item text to i18n in `DesktopSidebar.vue`.
- [x] 2.3 Refactor `MobileBottomNav.vue` labels to use i18n.
- [x] 2.4 Use the new `NavigationItem` interface in both Sidebar and BottomNav.

## Phase 3: Final Polishing

- [x] 3.1 Verify i18n labels appear correctly.
- [x] 3.2 Verify side effects: Sidebar toggle is persistent (if storage plugin is added later).
- [x] 3.3 Ensure all hardcoded hex strings in CSS migrate to `quasar.variables.scss`.
