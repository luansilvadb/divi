# Specs: Select Hover Refinement

## ADDED Requirements

### Requirement: Harmonic Hover State
- **WHEN** user moves their mouse over an option in the `BaseSelect` dropdown menu
- **THEN** the item's background should change to match the select's closed state: `#f0f2f5` (Light) or `#2a2a2a` (Dark).

### Requirement: Interaction Smoothness
- **WHEN** user is in the menu
- **THEN** the background transition should be subtle and short (approximately 200ms) to create a premium feel.

### Requirement: Dark Mode Support
- **WHEN** the `body` contains `.body--dark`
- **THEN** the hover background should correctly switch to `#2a2a2a` or a similar dark shade that doesn't disappear against the semi-transparent menu background.
