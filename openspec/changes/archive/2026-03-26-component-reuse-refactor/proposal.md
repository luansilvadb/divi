# Proposal: Component Reuse and Global Architecture Refinement

## Motivation
The codebase currently contains repeated UI patterns that are being "hardcoded" within individual page components. This includes:
- **Style Duplication**: CSS for `.section-card`, `.category-header`, and `.scroll-container` is copied across multiple files.
- **Layout Inconsistency**: Padding and max-width logic are handled locally, making global tweaks (like the recent sliver padding adjustment) error-prone.
- **Maintenance Overhead**: Changing a border-radius or a color for section cards requires multiple file edits.

Addressing this requires elevating these patterns into reusable components and global CSS tokens.

## Impact
- **Maintenance**: Changes to the design system (colors, spacing, shadows) can be made in a single location.
- **Consistency**: New pages will automatically follow the established layout (240px padding, centered content) without manual CSS.
- **Readability**: Page templates will be significantly simplified, focusing on data and structure rather than style boilerplate.

## Requirements
- Identify and extract common CSS into a global styles file (`src/css/app-ui.scss` or similar).
- Create new Atom components: `CategoryHeader`, `SectionCard`.
- Create a Molecule component: `SettingsSection` (wraps a label and a card).
- Refactor the hero scroll layout into a reusable `PageHeroLayout` or `ScrollContentWrapper` to encapsulate the padding-top logic.
