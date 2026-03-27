# Tasks: Polish "Mais opções" UI Transition

Implementation steps for refining the transition and removing interaction delays.

## Motion Synchronization

- [x] Sync spring constants in `src/pages/MoreActionsPage.vue` to `stiffness: 600, damping: 48`.
- [x] Sync spring constants in `src/pages/AdvancedSettingsPage.vue` to `stiffness: 600, damping: 48`.

## CSS & Layout Refinement

- [x] Ensure `settings-expansion-bg` in `MoreActionsPage.vue` has a lower `z-index` if necessary.
- [x] Check `PageContentLayout` wrapper in `MoreActionsPage.vue` to ensure items are clickable immediately.

## Speed Optimization

- [x] Adjust `MainLayout.vue` variants to speed up the exit (closing) phase.
- [x] Test the transition to ensure "Idioma" doesn't flicker or get hidden.
