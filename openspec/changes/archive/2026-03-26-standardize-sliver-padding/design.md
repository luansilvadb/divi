# Design: Standardize Content Spacing for SliverAppBar

## Technical Strategy
The inconsistency in content starting points is caused by a mix of `padding-top` on the containers and `margin-top` / `padding` on the initial elements within those containers.

### 🧩 Element Synchronization
- **Containers**: BOTH `.max-width-container` (MoreActions) and `.settings-content-wrapper` (Advanced) will use `padding-top: 240px`.
- **First-Child Normalization**:
    In `MoreActionsPage.vue`, the `q-pa-md` will be removed or neutralized to `q-px-md q-pb-md` to avoid adding `16px` to the top padding.
    In `AdvancedSettingsPage.vue`, the `category-header` (which currently has a fixed `margin-top: 24px`) will be updated to skip its top margin when it's the first child.

### 🔗 Layout Flow
By forcing the first element to have zero margin-top, we ensure the `240px` container padding is the SINGLE source of truth for the spacing between the title and the content, regardless of whether the content starts with an icon card or a category label.

## Integration Plan
1. Update CSS in both pages to synchronize container padding.
2. Update the `category-header` style in `AdvancedSettingsPage.vue` to use `margin-top: 0` via `:first-of-type` or similar.
3. Remove total padding from the `MoreActionsPage` container (switch `q-pa-md` to `q-px-md q-pb-md`).
4. Validate consistency by comparing screenshots/measurements.
