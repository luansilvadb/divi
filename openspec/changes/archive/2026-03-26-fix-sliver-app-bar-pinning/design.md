# Design: Fix SliverAppBar Pinning

## Context
The `SliverAppBar` uses a custom `useSliverEffect` composable to calculate scroll progress and offsets. These are then applied via CSS variables. The "pinning" effect is achieved through `position: sticky` on the root container, but several factors can break this:
1. `scrollTarget` not being correctly identified (especially in layouts with internal scroll containers).
2. `position: relative` being applied when `showSpacer` is false, which overrides the `sticky` behavior needed for pinning.
3. Overflow clipping or transform hierarchies in parent elements.

## Goals
- Ensure `SliverAppBar` always stays pinned when `pinned: true` is set.
- Fix the logic that switches between `sticky` and `relative`.
- Improve `scrollTarget` detection.

## Decisions

### 1. Fix Sticky Positioning
Currently, `SliverAppBar.vue` does:
```typescript
const position: 'sticky' | 'relative' = props.showSpacer ? 'sticky' : 'relative';
```
This is incorrect. Pinning behavior (`sticky`) should depend on the `pinned` prop, not just `showSpacer`. If `pinned` is true, it MUST be `sticky`.

### 2. Improve scrollTarget Detection
The `findScrollParent` logic in `useSliverEffect.ts` only looks for `overflowY: auto` or `scroll`. Some containers might use `overflow: auto`. Also, it should handle the case where the root element hasn't been rendered yet more gracefully.

### 3. Progressive Shadow and Transitions
Ensure the `--sliver-p` variable is correctly calculating the transition from expanded to collapsed state to trigger the shadow and background overlays.

## Risks / Trade-offs
- Changing `position: relative` to `sticky` might affect layout flow in edge cases where the spacer is disabled, but since the goal is to "pin", `sticky` is the correct technical choice.
