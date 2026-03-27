# Design: Debug SliverAppBar Pinning in MoreActionsPage

## Technical Strategy
The fix involves moving from "window-level scrolling" (which is blocked or unmanaged correctly in this layout) to "internal container-level scrolling" where the `SliverAppBar` acts as a static sibling to a scrolling content container.

### 🧩 Layout Refactoring
The root `q-page` will be transformed into a flex-column layout:
- **Top**: `SliverAppBar` (static position relative to parent).
- **Center/Bottom**: A content div with `flex: 1`, `overflow-y: auto`, and its own scroll target ref.

### 🔗 Scroll Target binding
We will bind the `scrollTop` of the internal container to the `SliverAppBar` via its `scroll-target` prop. This allows the `useSliverEffect` composable to detect scroll progress and trigger the collapse/shadow effects.

### 💅 CSS Utilities
We will adopt the following classes for the new internal scrolling structure:
- `.more-actions-page-container`: `display: flex; flex-direction: column; height: 100vh;`
- `.scroll-container`: `flex: 1; overflow-y: auto;`
- `.custom-scroll`: Hides native scrollbar for a cleaner look.

## Integration Plan
1. Wrap current content in `scroll-container`.
2. Add `scrollContainerRef`.
3. Link `SliverAppBar` to `scroll-target`.
4. Adjust top-level CSS of the page.
