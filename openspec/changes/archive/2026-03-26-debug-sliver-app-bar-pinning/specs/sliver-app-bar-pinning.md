# Specs: SliverAppBar Pinning in MoreActionsPage

## ADDED Requirements

### Requirement: Pinned Support
- **WHEN** user scrolls `MoreActionsPage.vue`
- **THEN** the `SliverAppBar` should stay fixed at the top of the viewport instead of scrolling out of view.

### Requirement: Dynamic Collapse
- **WHEN** user scrolls down
- **THEN** the `SliverAppBar` shadow should become visible and the title should scale down gradually.

### Requirement: Full-Content Access
- **WHEN** user scrolls through `MoreActionsPage.vue`
- **THEN** all settings (Backups, Export, etc.) should be reachable and fully visible even within the internal scroll container.
