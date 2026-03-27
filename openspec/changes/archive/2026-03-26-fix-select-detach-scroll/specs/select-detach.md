# Specs: Fix Select Dropdown Menu Detaching on Scroll

## ADDED Requirements

### Requirement: Detach-Free Interactions
- **WHEN** user has the `BaseSelect` dropdown menu open
- **AND** they scroll any parent container (such as the `scroll-container`)
- **THEN** the menu must immediately close (`hidePopup()`) to prevent the floating detached items shown in the bug report.

### Requirement: Target Awareness
- **WHEN** opening the menu
- **THEN** the component should dynamically identify the scrolling parent using Quasar's `getScrollTarget` to ensure it works correctly in both `window` and internal container contexts.

### Requirement: Resource Hygiene
- **WHEN** the menu closes
- **THEN** the `scroll` event listener must be removed to avoid background processing.
