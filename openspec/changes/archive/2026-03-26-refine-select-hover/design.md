# Design: Refine Select Hover State

## Technical Strategy
The current hover styles are being overridden or used from default Quasar definitions which may look too stark. We'll explicitly define the hover and active states of the dropdown items to match the base background of the select when closed.

### 🎨 Visual Scheme
- **Toggle Base (Closed)**: `#f0f2f5` (Light) / `#2a2a2a` (Dark)
- **Menu Background**: `rgba(240, 242, 245, 0.95)` / `rgba(42, 42, 42, 0.85)`
- **Item Hover (Focused)**: We will set this to match the **Toggle Base** (`#f0f2f5` / `#2a2a2a`) to create the "suavidade" (smoothness) requested by the user, as the hovered item will look like a "preview" of the selected select.

### 🔗 CSS Target
We'll update the `.custom-select-menu` global style in `BaseSelect.vue`:
1. Use `:deep(.q-item)` selector in the global style if needed, or keep it as is (since it's a non-scoped style).
2. Use `.q-item--focused` or `:hover` selector to apply the new background.
3. Use a subtle `transition` for the hover interaction.

## Integration Plan
1. Edit `BaseSelect.vue` styles.
2. Standardize the hover state colors.
3. Test interaction in both light and dark themes.
