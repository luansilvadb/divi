# Proposal: Shrinkable Desktop Sidebar

Brief summary of what is changing:
Implement a toggleable "Mini" state for the Desktop Sidebar allowing users to collapse the navigation drawer and maximize page content area while retaining access to quick icons. Additionally, the footer will be expanded with new utility navigation points.

## Motivation

As the desktop experience grows, users often require more horizontal real estate for data tables, charts, or detailed forms. The sidebar, while useful, takes up a persistent 300px column. Implementing a collapsible (mini) state will vastly improve the ergonomic flexbility for power users on Desktop while adhering to the standard clean aesthetic previously deployed. 
Furthermore, providing quick utility links (Settings, Info, Sync) in the footer enables more robust application control.

## Solution

1. Introduce a reactive boolean toggle `isMini` within `DesktopSidebar.vue`.
2. Connect this state to the Quasar `<q-drawer :mini="isMini">` prop.
3. Integrate a toggle button (`<` to collapse, `>` to expand) at the top of the sidebar.
4. Adapt `<LiveClock>` to hide safely via Vue directives when `isMini` is true.
5. Append new utility icon entries to the footer area: Google Auth, Settings, Information, and Sync.

## Impact

- **Affected code**: `src/components/layout/DesktopSidebar.vue` and optionally `src/components/layout/LiveClock.vue` (if local modifications apply).
- **Dependencies**: No external dependencies needed; leverages native Quasar properties.
- **Systems**: Modifies only the Desktop UI/UX without altering `MobileBottomNav.vue`.
