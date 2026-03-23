## Context

The settings interface currently lacks the depth and professional hierarchy shown in modern settings designs (like Google Chrome). The current "grouped list" will be refactored into "card categories" with headers and high-density content rows, specifically improving how multiple-choice and complex descriptions are rendered.

## Goals / Non-Goals

**Goals:**
- Move away from the simple list to a card-based structure where headers are external to the content cards.
- Add support for inline links ("Saiba mais...") within item captions.
- Create a pattern for nested radio button groups within settings items.
- Ensure buttons (like "Adicionar" or "Modelo") match the stylized pill design from the provided reference.

**Non-Goals:**
- Changing the existing store logic (only the display layer is affected).
- Implementing new settings beyond what's already mapped to the UI (this is a layout refactor).

## Decisions

- **Structural Hierarchy**:
    - **Outer Header**: The section name (e.g., "Geral") will be outside and above the content card.
    - **Content Card**: A single, rounded-corner container for all items in that category to minimize visual noise.
- **Component Evolution**:
    - **SettingsItem**: Gain a `#footer` or `#nested` slot to allow showing radio lists or extra details (like the "Nenhum site adicionado" message) directly under a row.
- **Pill Buttons**: Refine buttons to use `rounded` and `outline` or `filled` styles with higher contrast.
- **Icons**: Move secondary icons (like a "help" or "more options" button) to the header row instead of inside the card when possible.

## Design Details

- **Card Styling**: 
    - Rounded corners (16px or 20px).
    - Background: A slightly different shade than the root page to give depth.
    - Outer padding (q-mx, q-my) versus inner item padding.
- **Radio Buttons**: Small, dense radio buttons with labels matching the system font, with sub-text indented properly.
- **Density**: Titles will be bold (`text-weight-bold`) and captions will use a smaller, dimmer font (`text-caption`, `text-grey-6`).

## Risks / Trade-offs

- **[Risk] Mobile View Overflow** → **Mitigation**: Ensure cards shrink properly; nested radio lists should indent gracefully on small screens.
- **[Risk] Dark Mode Contrast** → **Mitigation**: Adjust the card's background specifically for `body--dark` to ensure separation from the page background.
