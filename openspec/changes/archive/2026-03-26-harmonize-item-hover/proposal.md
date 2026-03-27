# Proposal: Harmonize SettingsItem Hover with Dropdown Background

## Motivation
The hover state of interactive items in the settings currently uses a semi-transparent overlay that doesn't match the solid backgrounds of other UI elements like dropdowns. This leads to a "busy" look with too many varying shades of grey/transparency. Aligning the item hover color with the dropdown background creates a cleaner, more intentional design system.

## Impact
- **Visual Harmony**: The "active/highlight" state of a row will now feel like a natural extension of the input fields within that row.
- **Improved Contrast**: Reduces the "harshness" of the current hover highlight, especially in dark mode.

## Requirements
- Light Mode: Set hover to `#f0f2f5` (matches light-mode dropdown background).
- Dark Mode: Set hover to `#2a2a2a` (matches dark-mode dropdown background).
- Ensure transitions are preserved.
