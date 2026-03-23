# Proposal: PWA Layout Structure (Desktop Sidebar & Mobile Bottom Nav)

Brief summary of what is changing:
Implement a responsive PWA layout using Quasar Framework, featuring a permanent, stylized left sidebar for desktop devices and a tab-based bottom navigation bar for mobile devices.

## Motivation

As the application moves towards a Progressive Web App (PWA) architecture, it needs to provide tailored navigation experiences depending on the user's platform. 
Previously, the App was using a standard drawer for all screen sizes. To match the rich aesthetic of modern finance/management applications, we need:
1. A persistent, stylized sidebar on desktop screens (`gt-sm` breakpoint) featuring a dynamic LIVE clock and prominent navigation icons.
2. A streamlined bottom navigation bar on mobile devices (`lt-md` breakpoint) to improve touch ergonomics and maximize vertical screen space for the main content.

## Solution

We will build the layout by composing a new `MainLayout.vue` and creating split responsibilities:
- **`DesktopSidebar.vue`**: Uses `<q-drawer show-if-above borderless>` visible only on desktop. Features a custom live clock header (`LiveClock.vue`) and a stylish list of routes (Home, Transactions, Budgets, etc.).
- **`MobileBottomNav.vue`**: Uses `<q-footer>` with `<q-tabs>` visible only on mobile. Maps to the most frequently used routes to allow easy thumb-reach navigation.
- The `q-page-container` will hold the `router-view` to render the page content dynamically.

## Impact

1. **Affected code**: 
   - `src/layouts/MainLayout.vue` will be heavily rewritten.
   - New components will be created under `src/components/layout/`.
2. **Dependencies**: Requires `material-icons-outlined` or standard material icons (already part of Quasar config).
3. **Systems**: The experience on Android/iOS (PWA mode) will drastically improve without affecting the Desktop workspace.
