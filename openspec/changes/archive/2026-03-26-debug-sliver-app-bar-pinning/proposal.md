# Proposal: Debug SliverAppBar Pinning in MoreActionsPage

## Motivation
The `SliverAppBar` component in `MoreActionsPage.vue` fails to "pin" and collapse as the user scrolls. This is likely because the current layout doesn't provide an explicit scroll container for the `SliverAppBar` to track, and the `q-page-container` in `MainLayout` blocks window scrolling with `overflow: hidden`.

## Impact
- **UI Architecture**: `MoreActionsPage.vue` will be refactored to use a flex-column layout with an explicit scroll container.
- **Component Integration**: `SliverAppBar` will be linked to the new scroll target.

## Requirements
- `SliverAppBar` must stick to the top when collapsed.
- Content must scroll within the page while the app bar stays pinned.
- The visual эффекts (shadow, scale down) must trigger correctly on scroll.
