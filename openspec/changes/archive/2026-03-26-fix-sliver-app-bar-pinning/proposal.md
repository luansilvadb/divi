# Proposal: Fix SliverAppBar Pinning

## Motivation
The `SliverAppBar` component is currently failing to "pin" (remain fixed at the top) when the content is scrolled. This breaks the expected UI behavior where the header should collapse to a minimum height and stay visible. This is likely due to the `useSliverEffect` composable not correctly identifying the `scrollTarget` or the CSS variables not being applied correctly to the DOM elements.

## Proposed Changes
- Investigate and fix the `scrollTarget` detection logic in `useSliverEffect`.
- Ensure the `SliverAppBar` root element correctly receives and applies the `progress` value to its styles/CSS variables.
- Verify that `pinned` property is being respected and triggers the `collapsedHeight` constraint.
- Standardize the attribute inheritance to ensure `class` and `style` are correctly bound to the root element.

## Impact
- `SliverAppBar` component logic and styling.
- `useSliverEffect` composable behavior.
- Any page using `SliverAppBar` (improved header behavior).

## New Capabilities
- None (fixing existing behavior).

## Impacted Capabilities
- `layout/sliver-app-bar`: Fixing the "Comportamento Pinned" requirement listed in the spec.
