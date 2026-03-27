# Tasks: Fix Select Dropdown Menu Detaching on Scroll

## 1. Component Refactoring
- [x] 1.1 Add `ref="selectProxy"` to the `q-select` at `BaseSelect.vue`.
- [x] 1.2 Import `scroll` from `quasar` in `<script setup>`.
- [x] 1.3 Define `scrollableParent` reactive reference.
- [x] 1.4 Write the `handleScroll` function to close the popup.

## 2. Event Binding
- [x] 2.1 Create the `onPopupShow` function to attach the scroll listener.
- [x] 2.2 Create the `onPopupHide` function to remove the listener.
- [x] 2.3 Add `onUnmounted` for final cleanup.
- [x] 2.4 Update the template to call these new functions.

## 3. Validation
- [x] 3.1 Replicate the bug: Open dropdown and scroll rapidly.
- [x] 3.2 Verify the dropdown closes immediately on scroll.
- [x] 3.3 Confirm the menu stays attached when the page is static as usual.
