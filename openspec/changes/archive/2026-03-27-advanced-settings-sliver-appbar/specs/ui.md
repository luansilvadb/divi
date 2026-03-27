# UI Specification: Advanced Settings Header

### Requirement: Standard Sliver Header Behavior
- **WHEN** user loads `AdvancedSettingsPage.vue`.
- **THEN** the header appears expanded with a height of `160px`.

- **WHEN** user scrolls down the page.
- **THEN** the `SliverAppBar` should collapse smoothly towards a height of `56px`.

- **WHEN** user returns to the top of the page.
- **THEN** the `SliverAppBar` should expand back to `160px`.

### Component Specification
- **Component**: `PageContentLayout` wrapper around page content.
- **Component**: `SliverAppBar` positioned in the `#header` slot.
- **Title styling**: 
    - Full Title: Bold, `text-h5`.
    - Collapsed State: Standard title behavior as managed by `SliverAppBar`.
- **Configuration Properties**:
    - `expanded-height`: `160`
    - `collapsed-height`: `56`
    - `pinned`: `true`
    - `show-spacer`: `false` (Assuming consistency with `MoreActionsPage.vue` header config)
