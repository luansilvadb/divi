# Specs: Component Reuse and Global Architecture Refinement

## ADDED Requirements

### Requirement: Global Design Sync
- **WHEN** in any part of the project
- **THEN** interactive cards MUST share the `SectionCard` styling (background, border, shadow) via a single atom.

### Requirement: Page Entry Consistency
- **WHEN** opening any configuration page
- **THEN** the initial padding-top MUST be defined in the the `PageContentLayout` molecule, and developers MUST NOT manually set `padding-top: 240px` in local CSS.

### Requirement: Layout Normalization
- **WHEN** on a screen wider than 700px
- **THEN** content must be centered and bound by a consistent `maxWidth: 700px` unless otherwise specified by the molecule's props.

### Requirement: Scrollbar Invisibility
- **WHEN** in a scroll container with the `.custom-scroll` class
- **THEN** the scrollbar MUST be hidden on both Chrome (WebKit) and Firefox (scrollbar-width).
