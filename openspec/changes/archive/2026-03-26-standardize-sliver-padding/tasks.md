# Tasks: Standardize Content Spacing for SliverAppBar

## 1. MoreActionsPage Refinement
- [x] 1.1 In `MoreActionsPage.vue`, replace `class="q-pa-md max-width-container"` with `class="q-px-md q-pb-xl max-width-container"`. This removes the `16px` of padding from the top.
- [x] 1.2 Verify CSS for `.max-width-container` has `padding-top: 240px`.

## 2. AdvancedSettingsPage Refinement
- [x] 2.1 In `AdvancedSettingsPage.vue`, update the `.category-header` CSS selector to:
  ```css
  .category-header {
    ...
    margin-top: 24px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  ```
  This removes the 24px shift on the first title.
- [x] 2.2 Verify CSS for `.settings-content-wrapper` has `padding-top: 240px`.

## 3. Validation
- [x] 3.1 Verify that the space between "Configurações" and "Sobre Cashew" in the first page is visual identical to the space between "Mais" and "ESTILO" in the second page.
- [x] 3.2 Confirm that `max-width` is also consistent (600px vs 700px? Let's use 700px for both).
