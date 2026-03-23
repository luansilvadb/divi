# Proposal: Design System & Architecture Refactor

Refactor the application's core to adopt a scalable architecture based on Vue 3 and Quasar's "Golden Standards", focusing on global state management, internationalization, and strict typing.

## Motivation

The current application stores UI state (like the sidebar mini-toggle) locally within components, uses hardcoded strings in Portuguese, and lacks strict data interfaces. While functional for a small prototype, this approach creates technical debt as the app grows.

By centralizing the UI state in **Pinia**, we allow different parts of the app (like BottomNav and Sidebar) to communicate. By implementing **i18n**, we make the app ready for multiple languages and easier to maintain. Finally, defining **TypeScript Interfaces** ensures code reliability and better developer experience.

## Solution

1.  **Centralize state**: Move the `isMini` sidebar state and future UI preferences to a Pinia `uiStore`.
2.  **Externalize texts**: Create a `pt-BR` locale and migrate all hardcoded navigation and button labels to the i18n system.
3.  **Define Interfaces**: Create centralized TypeScript types for shared data structures, starting with `NavigationItem`.
4.  **Adopt Design Variables**: Fully migrate all hardcoded colors to the `quasar.variables.scss` system.

## Impact

- **Affected code**: `DesktopSidebar.vue`, `MobileBottomNav.vue`, `MainLayout.vue`.
- **Files created**: `src/stores/ui.ts`, `src/i18n/pt-BR/index.ts`, `src/types/navigation.ts`.
- **Dependencies**: Leverages existing `pinia` and `vue-i18n` already present in the project.
- **Systems**: Improves overall maintainability and future scalability without changing the current visual design.
