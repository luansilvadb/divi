# Tasks: Fix SliverAppBar Pinning

## 1. Investigation & Setup
- [x] 1.1 Verify current behavior in `MoreActionsPage.vue` (which likely has a scroll container)
- [x] 1.2 Inspect `useSliverEffect` to confirm it's attaching the scroll event listener to the correct target

## 2. Implement Component Fixes
- [x] 2.1 Update `SliverAppBar.vue` to always use `sticky` positioning when `pinned: true`, regardless of `showSpacer`
- [x] 2.2 Fix the `containerStyles` computed property in `SliverAppBar.vue` to handle pinning correctly
- [x] 2.3 Refine the `useSliverEffect` composable's `findScrollParent` to include `overflow: auto` and `overflow: overlay` checks
- [x] 2.4 Ensure `useSliverEffect`'s `visualOffset` calculation accounts for the `pinned` state correctly to prevent "clipping" too much or too little

## 3. UI/UX Polishing
- [ ] 3.1 Verify the `progress` value is driving the `sliver-bg-overlay` and `sliver-shadow` opacity smoothly
- [ ] 3.2 Ensure the title transition (`scale` and `translate`) is fluid and works well in both light and dark modes

## 4. Verification
- [ ] 4.1 Test on pages with global scroll (`window`)
- [ ] 4.2 Test on pages with nested scroll containers
- [ ] 4.3 Verify that disabling `showSpacer` does not break the pinning behavior (though it may cause content overlap)
