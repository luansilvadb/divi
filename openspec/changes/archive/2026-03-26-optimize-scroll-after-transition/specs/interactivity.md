# Specification: Scroll Interactivity

Detailed requirements for scroll behavior when returning from Advanced Settings to More Actions.

## REQ-001: Immediate Scroll Capability

The user must be able to scroll the `MoreActionsPage` list immediately as the return transition begins.

- **WHEN**: The user clicks the "back" button on `AdvancedSettingsPage`.
- **THEN**: The underlying `MoreActionsPage` scroll container must become scrollable without having to wait for the transition to finish.

## REQ-002: Click-through Exit Page

The exiting page must not intercept pointer events during its exit animation if it's not the primary active page.

- **WHEN**: The `AdvancedSettingsPage` is unmounting.
- **THEN**: It must have `pointer-events: none` on its outer `q-page` wrapper during the exit phase.

## REQ-003: No Transition Scroll-Lock

Ensure that the and `MainLayout` `motion-wrapper` is not forcing `overflow: hidden` in a way that blocks events from the underlying page.
- **SPEC**: 
  - Ensure the entering page has `pointer-events: auto`.
  - Ensure the exiting page has `pointer-events: none`.
