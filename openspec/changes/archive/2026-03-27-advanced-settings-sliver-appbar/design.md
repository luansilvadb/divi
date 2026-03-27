# Design: Advanced Settings Sliver AppBar

## Context

`AdvancedSettingsPage.vue` currently implements a `SliverAppBar` tied to a local scroll ref, but it lacks the standard layout structure found in `MoreActionsPage.vue`, which uses `PageContentLayout` and a more configured `SliverAppBar`. This creates a visual and behavioral discrepancy between different settings-related pages.

## Goals

Ensure `AdvancedSettingsPage.vue` has the same high-quality collapsing header behavior and layout structure as `MoreActionsPage.vue`, providing a premium and consistent user experience.

## Architecture

- **Page Layout**: Use `PageContentLayout` as the root structural component for the page content.
- **Header Integration**: 
    - Move `SliverAppBar` into the `#header="{ scrollElement }"` slot of `PageContentLayout`.
    - Pass `scrollElement` to the `SliverAppBar` via the `scroll-target` prop.
    - Standardize dimensions: `expanded-height="160"` and `collapsed-height="56"`.
- **Title Rendering**: Implement a custom `#title` slot in `SliverAppBar` using the styling: `<div class="text-h5 text-weight-bold">...</div>`.

## Risks / Trade-offs

- **Layout Regressions**: Moving content into `PageContentLayout` might slightly alter spacing or scroll behavior if there are unexpected CSS conflicts.
- **Performance**: Standardizing on shared layout components is beneficial for maintainability and doesn't introduce significant overhead.
