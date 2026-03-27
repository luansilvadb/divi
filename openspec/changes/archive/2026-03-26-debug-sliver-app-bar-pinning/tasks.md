# Tasks: Debug SliverAppBar Pinning in MoreActionsPage

## 1. Structure Refactoring
- [x] 1.1 Add `ref="scrollContainerRef"` variable in `<script setup>`.
- [x] 1.2 Encapsulate the entire page content (lines after `SliverAppBar`) inside a `scroll-container` div.
- [x] 1.3 Link `SliverAppBar` to the new scroll target via `:scroll-target="scrollContainerRef"`.
- [x] 1.4 Set `q-page` to `flex flex-column` and `height: 100vh` behavior.

## 2. CSS Optimization
- [x] 2.1 Add `.scroll-container` class to match `AdvancedSettingsPage` behavior (flex: 1, overflow-y: auto).
- [x] 2.2 Include `.custom-scroll` to hide standard scrollbars if needed.
- [x] 2.3 Ensure the `max-width-container` remains centered.

## 3. Validation
- [x] 3.1 Scroll the page and verify `SliverAppBar` stay-fixed behavior.
- [x] 3.2 Verify the "collapse" and "shadow" effects trigger as scroll progress increases.
- [x] 3.3 Check dark mode visuals.
