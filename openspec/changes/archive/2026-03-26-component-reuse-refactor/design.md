# Design: Component Reuse and Global Architecture Refinement

## Technical Strategy
We will transition from page-specific "hardcoded" styles to a composable, component-driven architecture.

### 🏛️ New Architecture: Atoms & Molecules

#### 1. CategoryLabel (Atom)
- **Props**: `label` (string).
- **Target**: Replaces the duplicated `<div class="category-header text-overline ...">`.
- **Styling**: Centralizes the `margin-top: 24px` and the specific grey colors for light/dark modes.

#### 2. SectionCard (Atom)
- **Props**: None (uses `<slot />`).
- **Target**: Replaces the `.section-card` CSS class repeated across every page.
- **Styling**: Manages the `background`, `border-radius: 20px`, `border`, and `box-shadow` in one place.

#### 3. SettingsSection (Molecule)
- **Props**: `title` (string).
- **Target**: A higher-level wrapper that combines `CategoryLabel` and `SectionCard`, simplifying page templates.

#### 4. PageContentLayout (Molecule)
- **Props**: `maxWidth` (default 700px), `paddingTop` (default 240px).
- **Target**: Standardizes the "centering and sliver offset" pattern. Replaces the `.max-width-container` / `.scroll-container` logic.

### 🔗 CSS Normalization
We will create a global UI style block (or move them to `src/css/app.scss`) for:
- `.custom-scroll` (hiding scrollbars).
- `.dark-text-white` (standard color override for dark mode).
- `.no-scroll-clipping` (allowing hero animations to bleed through).

## Integration Plan
1. Create new components in `src/components/atoms` and `molecules`.
2. Move common SCSS classes to a global location.
3. Update `AdvancedSettingsPage.vue` and `MoreActionsPage.vue` to use the new components.
4. Verify that the visual layout remains identical while the code is decoupled.
