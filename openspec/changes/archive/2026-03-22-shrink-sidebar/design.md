# Shrinkable Desktop Sidebar Design

## Context
The recent migration to a distinct Desktop Sidebar allowed the addition of a prominent LiveClock and custom navigation routes. However, Desktop screens vary widely in resolution and users heavily requesting horizontal width to analyze data. Quasar drawer elements accept a native `mini` toggle option that strips items of texts and preserves icons, allowing the UI to compress from 320px to effectively 56-60px horizontally.

## Goals / Non-Goals
**Goals:**
- Implement the `mini` feature on the `DesktopSidebar.vue`.
- Enable user-controlled toggling of this state using chevron icons (`keyboard_arrow_left` to shrink, `keyboard_arrow_right` to expand).
- Visually hide the `<LiveClock>` or hide completely when in mini mode, keeping only the expand arrow.
- Consolidate new Bottom Footer Utilities (Settings, Info, Sync, Account) directly within the Sidebar.

**Non-Goals:**
- Removing the capability of standard drawer responsive collapsing; the sidebar should still disappear correctly on mobile devices.
- Setting up the localized persistence behavior for the toggle (i.e. browser window reloading restoring the state). We will keep it stateless for this iteration to focus purely on visual components.

## Proposed Solution
**State control**: Create `const miniState = ref(false)` directly in `DesktopSidebar.vue`.
**Component Hooks**: 
- The `<q-drawer>` will accept `:mini="miniState"` so Quasar can naturally handle text suppression.
- The `LiveClock.vue` will render normally but its parent container will hide using Quasar's `mini-to-overlay` classes or CSS hiding tricks, or just rendering a `v-if="!miniState"` around the clock text.
- Create a header container inside the drawer housing a `<q-btn dense round unelevated icon="chevron_left" />` to trigger `@click="miniState = true"`, and inverse.
- Bottom footer needs to arrange the buttons properly so they automatically collapse down to just their respective icons without losing formatting when `miniState` is true.

## Alternative Approaches
- We could implement hovering to auto-expand the menu if it's minimized ("hover overlay"). While cool, explicit click control is preferred by most power users to prevent accidental UI shifts when moving the mouse to the far left of the screen.

## Risks / Trade-offs
- The `<q-expansion-item>` "Editar dados" might behave strangely in `mini` mode natively if its inner label expands awkwardly. Quasar officially warns about `<q-expansion-item>` in mini drawers, thus we may need to disable the expansion item or render it neutrally via `v-show="!miniState"` if things break visually.
