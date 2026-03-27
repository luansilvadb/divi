# Design: Fix Select Dropdown Menu Detaching on Scroll

## Technical Strategy
The `q-select` dropdown is absolutely positioned on the `body`. To prevent it from detaching when its parent container scrolls, we will implement a "close-on-scroll" strategy.

### 🧩 Components & Utilities
- **scroll utility**: Use `getScrollTarget` from `quasar` to find the correct parent that is actually scrolling.
- **q-select ref**: Use a template ref to programmatic close the popup via `.hidePopup()`.

### 🔗 Event Binding
We will manage the event cycle manually for efficiency:
- **On Popup Show**: Identify the scrollable container and attach a `scroll` listener.
- **On Popup Scroll**: Fire the `hidePopup()` method immediately.
- **On Popup Hide**: Detach the listener.

### 🛡️ Safety
- Use `onUnmounted` to ensure no orphaned listeners remain if the component is destroyed while the menu is open (though rare).
- Use `passive: true` for the scroll listener for better performance.

## Integration Plan
1. Update `BaseSelect.vue` to include the scroll listener logic.
2. Link the logic to `@popup-show` and `@popup-hide`.
3. Verify that the bug in the screenshot is resolved by testing scrolling in `AdvancedSettingsPage`.
