# Proposal: unify-title-content-animation

## Summary

This change unifies the enter animation of the "Mais" (More) page title with the staggered entry animations of the page sections (Categories). Instead of using a Shared Layout (Hero) transition for the title text, the title will now use a staggered slide-up animation consistent with the rest of the content.

## Motivation

Currently, the title "Mais" uses a `layoutId` transition that makes it fly from the small "Mais opções" card to the full-page header. While visually interesting, the user prefers a more cohesive experience where the title follows the same motion patterns as the category headers ("ESTILO", "TRANSAÇÕES"). By unifying these animations, the page entry feels more synchronized and intentional.

## Impact

- `src/pages/AdvancedSettingsPage.vue`: Remove `layoutId` from the title `Motion` component and synchronize its initial/animate props.
- `src/pages/MoreActionsPage.vue`: Remove `layoutId` from the source title to simplify the transition.
- UI Consistency: Better alignment between header and content animation styles.
