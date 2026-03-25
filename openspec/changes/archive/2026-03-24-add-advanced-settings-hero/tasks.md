# Tasks: Add Advanced Settings Page with Hero Animation

## 1. Routing and Setup

- [x] 1.1 Create `src/pages/AdvancedSettingsPage.vue` with basic scroll layout.
- [x] 1.2 Add `/actions/advanced` route to `src/router/routes.ts`.

## 2. Advanced Settings Page Implementation

- [x] 2.1 Implement the page header with a large "**Mais**" title and back button.
- [x] 2.2 Replicate the "Estilo" section with QSelects for Height, Icons, and Fonts based on the screenshot.
- [x] 2.3 Implement the toggles for Text Contrast and Animations.
- [x] 2.4 Implement the "Transações" section with QSelects for payment dates and totals.
- [x] 2.5 Implement the "Resumo dos gastos mensais" toggle.
- [x] 2.6 Style the page components using the Material 3 inspired SCSS (centering, radius, etc.).

## 3. Motion Library and Store Setup

- [ ] 3.1 Install the `motion` library (`npm install motion`).
- [ ] 3.2 Update `src/stores/ui.ts` to include `navDirection: 'forward' | 'backward'`.
- [ ] 3.3 Create a composable or helper to set navigation direction before `router.push` and `router.back`.

## 4. Layout Refactoring (MainLayout.vue)

- [ ] 4.1 Import `AnimatePresence` and `motion` in `MainLayout.vue`.
- [ ] 4.2 Wrap `<router-view>` with `<AnimatePresence>` and `<motion.div>`.
- [ ] 4.3 Implement dynamic transition variants based on `uiStore.navDirection`.
- [ ] 4.4 Configure `spring` transition for premium feel.

## 5. Cleanup and Verification

- [ ] 5.1 Remove all `document.startViewTransition` calls from `MoreActionsPage.vue` and `AdvancedSettingsPage.vue`.
- [ ] 5.2 Remove all View Transition related CSS from `src/css/app.scss`.
- [ ] 5.3 Verify that Sidebar and Footer remain static during page transitions.
- [ ] 5.4 Test "swiping" feel and ensure no visual gaps (zero-gap transition).
