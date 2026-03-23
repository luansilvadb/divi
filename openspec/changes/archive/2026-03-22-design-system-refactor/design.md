# Design: Design System & Architecture Refactor

Refactoring the current component-heavy logic into a centralized, scalable architecture.

## Implementation Details

### 1. Global State (Pinia)
Create a new store in `src/stores/ui.ts` to manage UI behavior.

```typescript
// Proposed src/stores/ui.ts
export const useUiStore = defineStore('ui', {
  state: () => ({
    isSidebarMini: false,
    activeTab: 'home'
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarMini = !this.isSidebarMini;
    }
  }
});
```

### 2. Internationalization (i18n)
Create the `src/i18n/pt-BR/` folder and implement the translation file.

```typescript
// Proposed src/i18n/pt-BR/index.ts
export default {
  nav: {
    home: 'Início',
    transactions: 'Transações',
    editData: 'Editar dados'
  },
  actions: {
    connect: 'Conecte-se',
    settings: 'Configurações'
  }
};
```

Update `src/boot/i18n.ts` to include `pt-BR` and set it as the default locale.

### 3. Data Interfaces (TypeScript)
Define a central interface for navigation items.

```typescript
// src/types/navigation.ts
export interface NavigationItem {
  label: string;
  icon: string;
  to: string;
}
```

## Risks / Trade-offs

- **Risk**: Moving to global state requires refactoring existing components.
- **Trade-off**: Slightly more boilerplate code initially, but significantly more maintainable as the component library grows.
- **Trade-off**: i18n keys make the code slightly less readable compared to direct strings, but the "Theme Builder" approach makes it easier to change labels across the board.

## Goals / Non-Goals

- **Goal**: Centralize state for sidebar behavior.
- **Goal**: Move all hardcoded strings to i18n.
- **Non-Goal**: Change the visual appearance of the application in this step.
- **Non-Goal**: Implement actual backend logic or API calls.
