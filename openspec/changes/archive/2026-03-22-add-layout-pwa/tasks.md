# Implementation Tasks

## 1. Create Layout Components

- [x] 1.1 Create `src/components/layout/LiveClock.vue` that establishes an interval to display current time, weekday, and date identically to the requested specifications.
- [x] 1.2 Create `src/components/layout/DesktopSidebar.vue` that renders a `<q-drawer class="gt-sm">` and accepts/displays the navigation menu items via `<q-list>` pointing to various user routes using `material-icons-outlined`.
- [x] 1.3 Embed `<LiveClock />` into the uppermost section of `<DesktopSidebar />`.
- [x] 1.4 Create `src/components/layout/MobileBottomNav.vue` incorporating `<q-footer class="lt-md">` and a tab-based bottom bar pointing to the most vital routes.

## 2. Refactor Main Layout

- [x] 2.1 Refactor `src/layouts/MainLayout.vue` to import `DesktopSidebar` and `MobileBottomNav`.
- [x] 2.2 Wire up the Quasar `<q-layout>` to load `<DesktopSidebar />`, `<q-page-container>`, and `<MobileBottomNav />`.
- [x] 2.3 Verify functionality at multiple screen breakpoints (`lt-md`, `gt-sm`) to ensure proper display conditions are strictly followed and PWA functionality operates smoothly on resizing.

## 3. Style Polish

- [x] 3.1 Apply custom active classes to the route items (e.g. blue background, distinct icon weight) imitating the reference design.
- [x] 3.2 Ensure spacing, padded lists, and exact iconography align to the design goals.
