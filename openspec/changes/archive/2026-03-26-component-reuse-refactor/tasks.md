# Tasks: Component Reuse and Global Architecture Refinement

## 1. Global SCSS Extraction
- [x] 1.1 Move the repeated `.custom-scroll`, `.dark-text-white`, and `.no-scroll-clipping` utility classes to a central SCSS location (e.g., `src/css/app.scss`).
- [x] 1.2 Clear the redundant style definitions from `AdvancedSettingsPage.vue` and `MoreActionsPage.vue`.

## 2. Atoms Creation
- [x] 2.1 Create `src/components/atoms/CategoryLabel.vue` to encapsulate the overline labels for settings groups.
- [x] 2.2 Create `src/components/atoms/SectionCard.vue` to manage the styled container for grouped `SettingsItem` rows.

## 3. Molecules Creation
- [x] 3.1 Create `src/components/molecules/PageContentLayout.vue` to handle the `padding-top: 240px`, `max-width`, and centering logic.
- [x] 3.2 Create `src/components/molecules/SettingsSection.vue` that composed `CategoryLabel` and `SectionCard` into a single, declarative tag.

## 4. Page Refactor
- [x] 4.1 Refactor `AdvancedSettingsPage.vue` to use the new components.
- [x] 4.2 Refactor `MoreActionsPage.vue` to use the new components.

## 5. Validation
- [ ] 5.1 Navigate through the app to verify visual parity.
- [ ] 5.2 Confirm that resizing the window still results in correctly centered content.
