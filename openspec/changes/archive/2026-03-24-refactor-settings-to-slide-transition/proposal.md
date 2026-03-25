# Proposal: Refactor Settings Transition to Slide

## Summary

This change refactors the transition animation between `MoreActionsPage.vue` and `AdvancedSettingsPage.vue`. Instead of a shared-element "Hero Animation" on individual text elements, the entire new page will slide in horizontally from the right, while the previous page slides out slightly to the left.

## Problem

The current Hero Animation (using `view-transition-name` on text) creates a "disjointed" feeling where the text flies independently from the background. Additionally, the background uses a Fade/Scale effect that feels less solid than a native horizontal slide.

## Solution

1. **Remove Shared Elements**: Remove `view-transition-name` from individual text elements in both screens to prevent "flying" text.
2. **Implement Page-Wide Slide**: Use the View Transitions API with custom CSS animations to slide the entire `root` viewport.
3. **Horizontal Motion**: Configure a standard "Stack" transition:
   - New page: Slides from `X=100%` to `X=0`.
   - Old page: Slides from `X=0` to `X=-30%` (keeping it partially visible).

## Impact

- **UI/UX**: More professional, solid, and "native-feeling" navigation.
- **CSS**: Custom animations added to global styles for `::view-transition-old(root)` and `::view-transition-new(root)`.
- **Components**: Cleanup of `view-transition-name` properties.
