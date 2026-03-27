# Proposal: Fix SliverAppBar Attribute Inheritance Warning

## Motivation
When using `SliverAppBar`, Vue emits a warning: `Extraneous non-props attributes (class) were passed to component but could not be automatically inherited`. This is because `SliverAppBar` renders multiple root nodes (Fragment). Vue doesn't know which root should receive the passed attributes.

## Impact
- **Console Log**: Removes the distracting warning during development.
- **UI Logic**: Ensures that any class or style passed to `SliverAppBar` is correctly applied to the main sticky container.

## Requirements
- Explicitly set `defineOptions({ inheritAttrs: false })`.
- Add `v-bind="$attrs"` to the primary `.sliver-app-bar` root node.
- Ensure the spacer remains separate (it shouldn't receive the attributes).
