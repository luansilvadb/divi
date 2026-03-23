# Design: Fix hover and ripple effects for interactive components

## Context

The current `SettingsItem.vue` provides a `q-item` that acts as a row in the "Settings" page. However, it lack visual feedback when the user hovers over it, making the interface feel static and less responsive. Additionally, the ripple effect and hover backgrounds for cards (like `ActionCard.vue`) should be perfectly clipped to their rounded borders.

## Goals

-   Provide consistent hover states for all interactive list items and cards.
-   Ensure ripple effects are clipped to their parent's border radius.
-   Follow a "Material You" style with subtle primary-colored or neutral hover backgrounds.

## Implementation Details

### 1. SettingsItem Component Update

We will update `src/components/molecules/SettingsItem.vue` to include:

-   **Hover state:** Add a CSS rule for `.settings-item:hover` with a subtle background color (`rgba(0, 0, 0, 0.03)` for light mode, `rgba(255, 255, 255, 0.05)` for dark mode).
-   **Border Radius:** Add a `border-radius: 12px` to the `q-item` itself. Since the item is usually within a card with padding, this will make it look like a floating button-like element that is more clickable.
-   **Overflow Clipping:** Add `overflow: hidden` to ensure the ripple respects the `12px` radius.
-   **Padding adjustments:** Ensure the text and icons are properly aligned.

### 2. ActionCard Component Update

We will update `src/components/molecules/ActionCard.vue` to include:

-   **Overflow Padding/Clipping:** Explicitly set `overflow: hidden` on the `q-card` because `v-ripple` sometimes leaks on certain browsers if the parent is transparent or doesn't have clipping enabled.
-   **Hover Interaction:** Refine the background transition on hover to be more consistent with the "Settings" items.

### 3. MoreActionsPage.vue Polish

We will review the list items and cards in `src/pages/MoreActionsPage.vue` to ensure they are using the refined components correctly.

## Risks / Trade-offs

-   **UI Consistency:** Some areas of the app might still use raw `q-item`. We should focus on refining the base components used in the settings page for now.
-   **Contrast:** Hover effects in dark mode need careful consideration to remain subtle yet visible.
