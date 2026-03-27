# Tasks: Advanced Settings Sliver AppBar

## 1. Setup
- [x] 1.1 Import `PageContentLayout` from `src/components/molecules/PageContentLayout.vue`.

## 2. Refactor Page Structure
- [x] 2.1 Wrap the contents of `AdvancedSettingsPage.vue` within the `<PageContentLayout>` component.
- [x] 2.2 Relocate the `<SliverAppBar>` into the `#header="{ scrollElement }"` slot of `PageContentLayout`.
- [x] 2.3 Correct the scroll handling by passing `:scroll-target="scrollElement"` to the `<SliverAppBar>`.

## 3. Header Styling
- [x] 3.1 Adjust `<SliverAppBar>` properties: `expanded-height="160"`, `collapsed-height="56"`, `pinned`, and `:show-spacer="false"`.
- [x] 3.2 Update the header title to use the standard large bold styling within the `<template #title>` slot.
- [x] 3.3 Ensure the transition effects for the backdrop filter remain consistent.

## 4. Final Review
- [x] 4.1 Perform a visual check to confirm the AppBar behavior matches `MoreActionsPage.vue`.
- [x] 4.2 Verify that the `resetSettings` and `goBack` functions still operate correctly.
