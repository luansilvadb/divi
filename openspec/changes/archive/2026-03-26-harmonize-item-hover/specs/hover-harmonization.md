# Specs: Harmonize SettingsItem Hover with Dropdown Background

## ADDED Requirements

### Requirement: Interaction Feel
- **WHEN** in light mode
- **THEN** the `SettingsItem` background color on hover MUST be exactly `#f0f2f5`.

### Requirement: Dark Interaction Consistency
- **WHEN** in dark mode
- **THEN** the `SettingsItem` background color on hover MUST be exactly `#2a2a2a`.

### Requirement: Smooth Animation
- **WHEN** hovering over an interactive row
- **THEN** the background must transition over a duration of `0.2s` for a premium, non-abrupt feeling.

### Requirement: Boundary Sync
- **WHEN** a row contains a `BaseSelect`
- **THEN** the `BaseSelect` background SHOULD blend into the host row's background when hovered, creating a unified "interactive island".
