# Proposal: Fix hover and ripple effects for interactive components

## Motivation

The current user interface lacks consistent visual feedback for several interactive elements on the "Settings" (More Actions) page. Specifically, buttons like "Cor de destaque", "Editar página inicial", "Mais opções", "Bill Splitter", and "Exportar para CSV" do not provide a clear hover state, and the ripple effect may not always align perfectly with the component's rounded corners (e.g., 20px border-radius).

The goal is to provide a premium, "Material You"-inspired interaction feel where hover states and ripples seamlessly fill the component's shape, respecting all `border-radius` values.

## Proposed Changes

1.  **SettingsItem component (`src/components/molecules/SettingsItem.vue`):**
    -   Add a subtle hover background to the `q-item`.
    -   Ensure `v-ripple` follows the container's shape.
    -   Update its styling to include a matching `border-radius` where appropriate, or ensure it fills its parent's rounded corners without leakage.

2.  **ActionCard component (`src/components/molecules/ActionCard.vue`):**
    -   Verify and enhance the hover scaling and background.
    -   Add `overflow: hidden` to ensure the ripple or hover overlay is clipped to the card's `20px` border-radius.

3.  **Other Interactive Elements:**
    -   Check the theme radio items in `MoreActionsPage.vue` for similar improvements.

## Impact

-   **User Experience (UX):** Provides immediate visual confirmation of interactivity.
-   **Aesthetics:** Aligns with the premium, smooth design system of the application.
-   **Consistency:** Fixes multiple scattered instances of the same interaction issue at once.
