# Implementation Tasks

## 1. Modify Desktop Sidebar State

- [x] 1.1 Add `const isMini = ref(false)` to `src/components/layout/DesktopSidebar.vue`.
- [x] 1.2 Bind `:mini="isMini"` to the `<q-drawer>`.
- [x] 1.3 Add a top header section to the drawer containing a `<q-btn>` that toggles `isMini.value`. Display `chevron_left` when expanded and `chevron_right` when mini.
- [x] 1.4 Wrap the `<LiveClock>` component inside a `v-show="!isMini"` directive so it vanishes seamlessly when contracted.

## 2. Refactor Footer Navigation

- [x] 2.1 Refactor the `absolute-bottom` `<q-btn>` structure inside `DesktopSidebar.vue`.
- [x] 2.2 Rebuild the footer to include new `q-btn` elements for Settings (`settings`), Info (`info`), and Sync (`sync`), alongside the Login (`login`) button.
- [x] 2.3 Style the footer so all buttons present merely their icons cleanly when `isMini` is true, avoiding text wrapping or distortion.

## 3. Style Checks

- [x] 3.1 Verify the active route background forms a simple circle in mini mode (Quasar mostly handles this, ensure CSS `border-radius` scales correctly).
- [x] 3.2 Ensure the width expands/contracts flawlessly on test resolutions without glitching the `q-page-container` width.
