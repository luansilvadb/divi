# Design: Harmonize SettingsItem Hover with Dropdown Background

## Technical Strategy
We will replace the current `rgba` hover states in `SettingsItem.vue` with solid colors that match the `BaseSelect` background.

### 🧩 Style Updates
- **Light Mode**: 
  - Target: `.settings-item.is-clickable:hover`
  - Change: `background-color: #f0f2f5`
- **Dark Mode**:
  - Target: `body.body--dark .settings-item.is-clickable:hover`
  - Change: `background-color: #2a2a2a`

### 🔗 Rationale
By using the same color for the row hover as for the dropdowns inside those rows, we create a specialized "interactive zone" that feels consistent. When a user hovers over a row, it gains the same physical character as the interactive inputs it contains.

## Integration Plan
1. Edit `src/components/molecules/SettingsItem.vue`.
2. Locate the hover styles in the `<style>` block.
3. Replace the `background-color` values for both light and dark modes.
4. Verify that the transition remains fluid.
