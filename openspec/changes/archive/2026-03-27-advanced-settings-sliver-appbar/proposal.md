# Proposal: Advanced Settings Sliver AppBar

## Why

Standardize the UI/UX of the settings pages. Currently, `AdvancedSettingsPage.vue` uses a basic AppBar, while `MoreActionsPage.vue` implements a more dynamic and visually appealing "Sliver" (collapsing) AppBar within a `PageContentLayout`. Aligning these pages ensures a cohesive user experience.

## What Changes

- **Layout Restructuring**: Wrap `AdvancedSettingsPage.vue` content in the `PageContentLayout` component.
- **SliverAppBar Update**: 
    - Move `SliverAppBar` to the `#header` slot of `PageContentLayout`.
    - Set `expanded-height` to `160` and `collapsed-height` to `56`.
    - Enable `pinned` mode.
    - Synchronize scrolling using the `scrollElement` from the layout slot.
- **Header Styling**: Implement the large bold title pattern in the `#title` slot of `SliverAppBar`.

## Impact

- `src/pages/AdvancedSettingsPage.vue`: Refactored for new layout structure.
- **Visuals**: Provides a consistent, premium feel across the settings module.
