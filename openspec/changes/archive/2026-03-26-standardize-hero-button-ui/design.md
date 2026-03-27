# Design: Standardize Hero Button UI 🏛️🛠️

## Context
The "Mais opções" button uses a hero transition that requires a source background for the layoutId animation. However, its current implementation deviates from the standard `SettingsItem` UI due to:
- Mismatched background color (`settings-expansion-bg`).
- Geometric misalignment (as the `Motion` layer covers full width while `SettingsItem` has 8px horizontal margins).
- Radius inconsistency (12px vs potential inherited 20px).

## Goals
- **Geometric Alignment**: Align the `Motion` layer precisely with the `SettingsItem` boundaries (8px margin correction).
- **Color Consistency**: Match the background color of the expansion source with the `SectionCard` background so it is invisible when idle.
- **ESLint Fix**: Remove the unused `computed` import in `AdvancedSettingsPage.vue` and any others found in `MoreActionsPage.vue`.

## Implementation Details

### 1. `MoreActionsPage.vue` Template
The wrapper around "Mais opções" will be adjusted:
- The outer container will host the margins.
- `settings-expansion-bg` will have its background set to `transparent` or the card background color.
- Remove redundant `min-height` if `SettingsItem` already enforces it.

### 2. Style Refinement
- Update `.settings-expansion-bg` in `MoreActionsPage.vue` to use the same background as the `SectionCard` (`#f0f2f5` light, `#38393b` or `#1e1e1e` dark).
- Ensure `border-radius` matches the `SettingsItem` (12px).

### 3. Cleanup
- In `AdvancedSettingsPage.vue`, remove unused `computed` from the `vue` import.
- In `MoreActionsPage.vue`, remove unused `computed` from the `vue` import.

## Risks / Trade-offs
- **Transition Smoothness**: Using a transparent background on the source might cause a "flash" if the target page has a solid background. We will match the source background to the target page's theme color to keep it seamless.
