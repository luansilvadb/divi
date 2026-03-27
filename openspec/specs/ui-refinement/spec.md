# Spec: UI Refinement for Hero Transition

## Requirement: Uniform Hover Effect
- **GIVEN** the "Mais opções" item is displayed in the list
- **WHEN** the mouse hovers over it
- **THEN** it should show the same translucent background (`rgba(0,0,0,0.03)`) as "Editar página inicial" and "Idioma".

### Requirement: Interaction Feel (Hover Color)
- **WHEN** in light mode.
- **THEN** the `SettingsItem` background color on hover MUST be exactly `#f0f2f5`.
- **WHEN** in dark mode.
- **THEN** the `SettingsItem` background color on hover MUST be exactly `#2a2a2a`.

### Requirement: Smooth Background Transitions
- **WHEN** an interactive row's hover state changes.
- **THEN** the background color must transition over a duration of `0.2s` for a premium, non-abrupt feeling.

### Requirement: Unified Interactive Island
- **WHEN** a row contains a `BaseSelect` (dropdown input).
- **THEN** the dropdown's background SHOULD blend into the host row's background during interaction.

## Requirement: Standard Ripple Tap
- **GIVEN** a touch or click on "Mais opções"
- **WHEN** the interaction begins
- **THEN** a Quasar ripple should appear starting from the interaction coordinate.
- **THEN** the entire item should NOT scale down (removing `while-tap` custom logic).

### Requirement: Uniform List Visuals
- **GIVEN** a `SettingsSection` (Card) containing a `Motion` wrapper.
- **WHEN** in its idle state.
- **THEN** it must be indistinguishable from static neighbors, sharing the same background, border-radius (12px), and margins (2px 8px).

### Requirement: Padded Alignment
- **WHEN** the `Motion` expansion element is rendered.
- **THEN** it must respect the 8px side margins to avoid horizontal misalignment during the expansion animation.

## Requirement: Borderless Static State
- **GIVEN** the "Mais opções" item is at rest in the list
- **WHEN** it is inside the `section-card`
- **THEN** it should have no internal borders that distinguish its custom background from the rest of the list.
- **THEN** the transition to `AdvancedSettingsPage` should still use the `layoutId="settings-hero-bg"` to expand the surface smoothly.

## Requirement: Transição de Layout Spring
Definir a física da animação de expansão.

- **GIVEN** que a transição Hero entre `MoreActionsPage` e `AdvancedSettingsPage` foi iniciada.
- **WHEN** os frames de animação são calculados pelo `motion-v`.
- **THEN** deve ser aplicada uma curva de mola com `stiffness: 300` e `damping: 30` para suavizar o movimento.

## Requirement: Unified Animation Cascade (Stagger)
Definir a entrada dos sub-elementos na página de destino com uma sequência previsível.

- **GIVEN** que a `AdvancedSettingsPage` está sendo montada.
- **WHEN** a transição de fundo (hero-bg) atinge 50% de progresso.
- **THEN** os componentes devem entrar na viewport em uma sequência de cascata:
  - **Título ("Mais")**: Inicia em 0.1s, movendo-se de `y: 20` para `y: 0`.
  - **Seção ESTILO**: Inicia em 0.2s, movendo-se de `y: 20` para `y: 0`.
  - **Seção TRANSAÇÕES**: Inicia em 0.3s, movendo-se de `y: 20` para `y: 0`.
- **THEN** todos os componentes devem utilizar a mesma física `spring` para o movimento de slide-up.

## Requirement: Global Design Sync
- **WHEN** in any part of the project.
- **THEN** interactive cards MUST share the `SectionCard` styling (background, border, shadow) via a single atom to ensure visual parity.