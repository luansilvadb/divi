# Design: Add Advanced Settings Options

## Summary
Update the `AdvancedSettingsPage.vue` to match the design reference showing 12+ settings across 4 sections.

## Goals
- Complete implementation of top-level settings (General/Style).
- Expand "Transactions" section.
- Add "Accounts" and "Budgets" sections.
- Maintain consistent styling and animations using `SettingsItem` and `Motion`.

## Decisions

### 1. Unified Settings Architecture
Continue using `SettingsItem` as the core unit. Use slots for badges, dropdowns, and switches to maintain consistent spacing and typography.

### 2. State Mapping
Map each setting to a local `ref` with a default value that matches the design (e.g., `primaryCurrency = 'BRL'`).

### 3. Visual Polish
- Use `q-badge` for static values like "Padrão" or "BRL".
- Use `BaseSelect` for dropdowns.
- Use `q-toggle` for boolean settings.
- Use `q-icon` for checkmarks and icons.

### 4. Layout & Motion
Group settings into `section-card` divs. Use `Motion` to animate the entry of each section for a smooth feel.

## Risks / Trade-offs
- **Complexity**: Many settings on one page might decrease scroll performance. **Mitigation**: Using `Motion` with staggered delays and common Quasar items handles this well.
- **Persistence**: Local state won't survive reloads. **Note**: This change focuses on the UI "screen" as requested. Integration with a persistent store (LocalStorage/API) is out of scope unless needed for the current project.
