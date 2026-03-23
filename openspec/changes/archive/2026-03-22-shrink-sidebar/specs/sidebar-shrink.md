# Shrinkable Sidebar Specifications

## ADDED Requirements

### Requirement: Toggle Sidebar Mini State
- **WHEN** the `<` button at the top of the Sidebar is clicked by the user.
- **THEN** the entire `DesktopSidebar.vue` component must collapse into `mini` mode, shrinking down to roughly 60px.
- **AND** the labels and texts must natively hide.

### Requirement: Expand Sidebar State
- **WHEN** the `>` button at the top of the Mini Sidebar is clicked.
- **THEN** the `DesktopSidebar.vue` component must expand to its default 320px width showing all texts.

### Requirement: Live Clock Hiding
- **WHEN** the Sidebar is in the `mini` state.
- **THEN** the `<LiveClock>` or at least its textual content must completely disappear from the viewport to prevent text wrap errors.

### Requirement: Utility Footer Icons
- **WHEN** the Sidebar is expanded or mini.
- **THEN** the footer area must present the Google Auth Login, Settings, Info, and Sync button.
- **AND** they must stack or align correctly in `mini` mode presenting solely their icons cleanly.
