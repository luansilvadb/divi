# Proposal: Fix Select Dropdown Menu Detaching on Scroll

## Motivation
The `BaseSelect` dropdown (based on `q-select`) uses a floating menu that is portaled to the `document.body`. When used within an internal scroll container (like `AdvancedSettingsPage`), scrolling while the menu is open causes it to "unstick" from the toggle, as the toggle moves with the scroll but the menu remains at its absolute body coordinates.

## Impact
- **Component**: `BaseSelect.vue` will be updated to detect scrolling in its parent container and close the menu automatically.
- **UX**: Prevents broken UI where floating menus appear disconnected from their source.

## Requirements
- The dropdown menu must close immediately when any parent scroll container is scrolled.
- Cleaning up event listeners carefully to avoid memory leaks.
- Maintain existing styles and transitions.
