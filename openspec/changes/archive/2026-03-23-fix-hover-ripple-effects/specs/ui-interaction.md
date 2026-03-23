# UI Interaction Specification

## Hover State Requirements

All interactive list items (`SettingsItem`) and cards (`ActionCard`) should provide a visible but subtle background change when hovered.

### Light Mode:
-   **Background:** `rgba(0, 0, 0, 0.03)` or `var(--q-primary, rgba(25, 118, 210, 0.05))`
-   **Transition:** `0.2s ease`

### Dark Mode:
-   **Background:** `rgba(255, 255, 255, 0.05)` or `rgba(25, 118, 210, 0.1)`
-   **Transition:** `0.2s ease`

## Ripple Effect Requirements

-   The ripple effect MUST be contained within the element's border-radius.
-   Elements MUST have `overflow: hidden` to avoid leakages.
-   Border-radius should follow the standard `12px` (for items) or `20px` (for cards).
-   Ripples MUST be triggered on all clickable elements.

## Impacted Components

1.  **SettingsItem.vue:**
    -   `q-item` should have `12px` border-radius.
    -   `q-item` should have its own hover state.
2.  **ActionCard.vue:**
    -   `q-card` should have its own hover state and `overflow: hidden`.
3.  **NavLink.vue:**
    -   Confirm it already uses these patterns (has `border-radius: 12px`).
