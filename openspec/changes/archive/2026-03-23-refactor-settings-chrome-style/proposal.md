## Why

Refactoring the settings interface to adopt a higher-density, professional layout inspired by Google Chrome's performance/general settings. The current UI is a simple list which limits the depth of information and complicates the display of nested controls like radio lists. Moving to a structured card-based layout improves visual hierarchy and clarity for data-heavy preference screens.

## What Changes

- **Card-Based Categorization**: Redesign the "section-group" to match Chrome's "performance cards" style:
    - Darker container background with subtler border.
    - Outer titles positioned above the cards.
- **Informational Richness**: 
    - Support for multi-line captions with "Saiba mais" links.
    - Title and caption density matching the reference images.
- **Advanced Controls**:
    - **Radio Groups**: Implementation for sub-preferences (e.g., choice between Moderate/Balanced/Maximum performance).
    - **Pill Buttons**: Stylized high-contrast buttons for specific row actions.
- **Visual Feedback**: Toggles and icons aligned to the far right, with consistent spacing.

## Capabilities

### Modified Capabilities
- `settings-management`: Refactor the UI structure for the entire "More Actions" / Settings domain.

## Impact

- **UI Structure**: `src/pages/MoreActionsPage.vue` will undergo a complete layout refactor.
- **Molecules**: `SettingsItem.vue` will need to be more flexible to handle nested radio groups and inline styling.
- **CSS**: Updates to colors and spacing to match the high-contrast dark theme shown in the reference.
