# Specs: advanced-settings-nav

## CAPABILITIES
- Advanced Settings Navigation: `advanced-settings-nav`

## DETAILED Requirements

### Requirement: Advanced Settings Navigation Handler
- **GIVEN** The `AdvancedSettingsPage.vue` is active.
- **WHEN** The back button on `SliverAppBar` is clicked.
- **THEN** The `goBack` method should trigger `router.back()`.

### Requirement: UI Consistency
- **GIVEN** The theme is active.
- **WHEN** The SliverAppBar scrolls from expanded to collapsed.
- **THEN** The back button must remain visible and accessible in both states.
