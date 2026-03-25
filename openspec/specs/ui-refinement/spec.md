# Spec: UI Refinement for Hero Transition

## Requirement: Feedback Visual de Toque
Definir a interação inicial do usuário com o elemento expansível.

- **GIVEN** que o usuário está na `MoreActionsPage`.
- **WHEN** o usuário toca ou clica no item "Mais opções".
- **THEN** o card deve contrair levemente (`scale: 0.98`) antes de disparar a navegação.

## Requirement: Transição de Layout Spring
Definir a física da animação de expansão.

- **GIVEN** que a transição Hero entre `MoreActionsPage` e `AdvancedSettingsPage` foi iniciada.
- **WHEN** os frames de animação são calculados pelo `motion-v`.
- **THEN** deve ser aplicada uma curva de mola com `stiffness: 300` e `damping: 30` para suavizar o movimento.

## Requirement: Revelação em Cascata (Stagger)
Definir a entrada dos sub-elementos na página de destino.

- **GIVEN** que a `AdvancedSettingsPage` está sendo montada.
- **WHEN** a transição de fundo (hero-bg) atinge 50% de progresso.
- **THEN** os itens de configuração internos devem começar a aparecer sequencialmente com um atraso de 100ms entre cada um, movendo-se de `y: 20` para `y: 0`.