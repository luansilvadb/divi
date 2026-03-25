# Tasks: Refactor Settings Transition to Slide

## 1. Component Cleanup

- [x] 1.1 Remove `view-transition-name` and related classes from `src/pages/MoreActionsPage.vue`.
- [x] 1.2 Remove `view-transition-name` and related classes from `src/pages/AdvancedSettingsPage.vue`.

## 2. Global Styling (Slide Animations)

- [x] 2.1 Define `@keyframes` for `slide-in`, `slide-out`, `slide-pop-in`, and `slide-pop-out` in `src/css/app.scss`.
- [x] 2.2 Configure `::view-transition-old(root)` and `::view-transition-new(root)` for push navigation.
- [x] 2.3 Configure `::view-transition-old(root)` and `::view-transition-new(root)` under `.transition-back` for pop navigation.

## 3. Navigation Logic Update

- [x] 3.1 Update `goBack` in `AdvancedSettingsPage.vue` to append `transition-back` class to `document.documentElement` before transition.
- [x] 3.2 Ensure the class is removed after the transition in `goBack`.

## 4. Final Verification

- [x] 4.1 Verify that NO elements fly independently during transition.
- [x] 4.2 Verify the "stack" horizontal push/pull effect.
