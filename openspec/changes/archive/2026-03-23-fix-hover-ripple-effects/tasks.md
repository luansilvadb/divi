# Tasks for Fixing Hover and Ripple Effects

## Core Components Implementation

-   [x] **Task 1.1: Update `SettingsItem.vue`**
    -   [x] Add `border-radius: 12px` to the `q-item`.
    -   [x] Add `overflow: hidden` to the item container.
    -   [x] Add a hover state background mimicking the "Material You" style.
    -   [x] Ensure `v-ripple` follows the `12px` border-radius correctly.

-   [x] **Task 1.2: Update `ActionCard.vue`**
    -   [x] Explicitly add `overflow: hidden` to the `q-card` element.
    -   [x] Refine the hover scale and background interaction for consistency.

-   [x] **Task 1.3: Update `NavLink.vue` consistency check**
    -   [x] Ensure its hover state and ripple work as expected with `12px` border-radius.

## Page-level Adjustments

-   [x] **Task 2.1: Final Page Integration Check**
    -   [x] Verify "Bill Splitter", "Exportar para CSV", and other items in `MoreActionsPage.vue` now provide visual feedback on hover.
    -   [x] Specifically check text alignment and margins within the `.section-card`.
    -   [x] Ensure theme mode options (radio items) have a similar premium hover look.

## Verification

-   [ ] **Task 3.1: Visual QA**
    -   [ ] Verify the look and feel in Light Mode.
    -   [ ] Verify the look and feel in Dark Mode.
    -   [ ] Ensure no "bleeding" of background colors or ripples outside cards.
