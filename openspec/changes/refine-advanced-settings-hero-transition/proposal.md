# Proposal: Refine Advanced Settings Hero Transition

## Objective
Implementar melhorias significativas na animação e no comportamento da transição Hero que leva o usuário das configurações básicas para as avançadas ("Mais opções"), garantindo uma experiência de usuário mais premium e profissional.

## Motivation
A transição atual, embora funcional, carece de polimento visual. O usuário deseja:
- Feedback tátil visual ao clicar (efeito de escala).
- Uma transição de layout mais orgânica usando curvas de mola (Springs).
- Revelação gradual e em cascata (staggered) dos itens na página de destino para evitar o surgimento súbito de conteúdo.

## Proposed Changes
1.  **Feedback de Clique**: Adicionar efeito `scale: 0.98` ao toque/clique no item "Mais opções".
2.  **Configuração de Spring**: Substituir as transições padrão por `type: 'spring', stiffness: 300, damping: 30` no `Motion` layoutId.
3.  **Entrada em Cascata**: Implementar animações de entrada (`initial`, `animate`) com `delay` escalonado para as seções e itens em `AdvancedSettingsPage.vue`.
4.  **Aprimoramento Visual**: Ajustar o backdrop e o container de expansão para que a transição pareça flutuar suavemente sobre a interface anterior.

## Impact
- `src/pages/MoreActionsPage.vue`: Alteração no gatilho da transição e feedback de UI.
- `src/pages/AdvancedSettingsPage.vue`: Implementação de animações de entrada e ajuste na configuração de hardware acceleration do `Motion`.
- `motion-v`: Dependência de animação já presente no projeto.
