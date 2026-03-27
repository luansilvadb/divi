# SliverAppBar Spec Additions

## FIXED Requirements

### Requirement: Always Stay Pinned
The `SliverAppBar` component MUST remain at the top of the viewport when `pinned` property is true, regardless of whether a spacer is shown.

- **WHEN** `pinned` is `true`.
- **THEN** the root element MUST have `position: sticky` and `top: 0`.

### Requirement: Correct Scroll Target
The component MUST accurately detect its scroll parent, even when nested inside deep hierarchies or containers with `overflow: auto`.

- **WHEN** `scrollTarget` is not provided.
- **THEN** it SHOULD traverse up the DOM tree until it finds a container with any form of `overflow` (auto, scroll, overlay) or defaults to `window`.

### Requirement: Smooth Background Transition
The header MUST transition its background to a solid color/overlay and show a shadow when the user scrolls past its expanded height.

- **WHEN** `progress` reaches a value greater than `0`.
- **THEN** `sliver-bg-overlay` and `sliver-shadow` MUST increase their opacity proportionally to the scroll position until fully visible at `collapsedHeight`.
