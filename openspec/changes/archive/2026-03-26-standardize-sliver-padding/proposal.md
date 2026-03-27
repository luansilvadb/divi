# Proposal: Standardize Content Spacing for SliverAppBar

## Motivation
The vertical distance between the expanded `SliverAppBar` and the start of page content is inconsistent. This is visible between the main actions page and the advanced settings page, where different container paddings and internal margins (like `q-pa-md` or `category-header` margins) create a disjointed experience.

## Impact
- **Visual Consistency**: Provides a uniform starting point for content across all configurations pages.
- **Smooth Transitions**: Enhances the hero transition by ensuring the "new" content arrives at the same vertical offset as the "old" content.

## Requirements
- Synchronize the top-level container padding across all relevant pages.
- Normalize the margins for initial elements (Action Cards vs Category Headers).
- Target a distance of `240px` from the top of the scroll container to the absolute start of meaningful content.
