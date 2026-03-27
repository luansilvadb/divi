# Tasks: fix-sidebar-transition-jank

## 1. Setup Layout Stability

- [x] 1.1 Add `min-height: 100vh` and `flex: 1` to `.q-page-container` in `src/layouts/MainLayout.vue`.
- [x] 1.2 Remove the `layout` prop from `<motion.div>` in `src/layouts/MainLayout.vue` to prevent redundant jitter.
- [x] 1.3 Add `min-height: 100vh` to `src/pages/AdvancedSettingsPage.vue` container to ensure immediate coverage.

## 2. Verification

- [x] 2.1 Verify that navigating to Advanced Settings no longer causes a shift in the sidebar background.
- [x] 2.2 Ensure the "Hero" transition still works smoothly with `layoutId`.
- [x] 2.3 Check cross-page scrolling behavior to ensure no regressions in layout height.
