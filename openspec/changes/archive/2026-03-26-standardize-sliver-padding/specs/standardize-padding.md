# Specs: Standardize Content Spacing for SliverAppBar

## ADDED Requirements

### Requirement: Uniform Content Entry Point
- **WHEN** opening any configuration page with an expanded `SliverAppBar`
- **THEN** the absolute vertical distance from the top of the viewport to the start of the first menu item (label or card) must be exactly `240px`.

### Requirement: Cleanup for MoreActionsPage
- **WHEN** in `MoreActionsPage`
- **AND** the top element is the `row` of `ActionCard`s
- **THEN** that `row` MUST have zero margin-top, and the container padding MUST NOT be increased by `q-pa-md` or similar.

### Requirement: Metadata Consistency
- **WHEN** in `AdvancedSettingsPage`
- **AND** the first element is a `category-header`
- **THEN** that header must NOT have any additional top margin relative to its container's padding-top.
