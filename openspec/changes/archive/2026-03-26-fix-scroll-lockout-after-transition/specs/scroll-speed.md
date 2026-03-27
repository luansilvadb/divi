# Specification: Scroll Interactivity (Corrective)

Detailed requirements for the "Mais opções" to main settings screen transition to ensure NO scroll delay.

## REQ-001: Zero Lockout Scroll

The return transition must not block the user gesture on the target page.

- **WHEN**: The user clicks the "back" arrow on `AdvancedSettingsPage`.
- **THEN**: The Underlying `scroll-container` must be scrollable from Frame 1 of the return animation.

## REQ-002: Exit Variant Duration

The exit variant must complete its interactivity changes (pointerEvents: none) faster than its visual transformation if necessary.

- **SPEC**:
  - `exit.transition.duration`: 0.1s (using easeOut for speed).
  - `exit.opacity`: 0.
  - `exit.scale`: 0.98.
  - `exit.pointerEvents`: 'none'.

## REQ-003: HW Acceleration for Scroll

Ensure the scroll container in `PageContentLayout.vue` is prioritized by the browser.
- **SPEC**: Add `will-change: transform, scroll-position` or similar the scroll container.
