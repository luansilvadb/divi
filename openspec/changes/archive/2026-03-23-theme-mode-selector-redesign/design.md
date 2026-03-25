## Context

A pagina de configuracoes (`MoreActionsPage.vue`) usa hoje um `q-select` para troca de modo de tema. Embora funcional, esse controle nao acompanha a linguagem visual premium ja presente em outros elementos (cards arredondados, superficies suaves e componentes com hierarquia visual mais refinada). O projeto usa Quasar + Vue 3 + Pinia, entao a solucao deve reaproveitar componentes nativos do framework sem quebrar o fluxo atual de selecao/persistencia do `uiStore`.

## Goals / Non-Goals

**Goals:**

- Entregar um componente `ThemeModeSelector` com aparencia de pill button e dropdown visualmente integrado.
- Manter o comportamento funcional atual de troca de tema (claro, escuro, automatico) sem alteracoes de regra de negocio.
- Garantir acessibilidade basica e boa usabilidade touch em mobile, com estados visuais claros para foco e selecao.
- Preservar compatibilidade com tema claro e escuro do app.

**Non-Goals:**

- Nao alterar logica de persistencia de preferencias de tema no store.
- Nao redesenhar toda a tela de configuracoes ou outros controles fora do seletor de tema.
- Nao introduzir nova dependencia externa de UI/animacao.

## Decisions

- Criar `src/components/molecules/ThemeModeSelector.vue` como componente dedicado para encapsular estrutura, estados e estilos premium do seletor.
  - Alternativa considerada: customizar diretamente o `q-select` via CSS.
  - Racional: o encapsulamento evita acoplamento de estilos com a pagina e facilita manutencao/reuso.
- Usar `q-btn` como trigger em formato pill e `q-menu` para dropdown com transicao `scale` + `fade`.
  - Alternativa considerada: implementar menu via `q-dialog`/bottom-sheet.
  - Racional: `q-menu` oferece ancoragem direta ao trigger, comportamento esperado de dropdown e melhor ergonomia em desktop e mobile.
- Modelar opcoes internamente com metadados (`label`, `value`, `icon`) para suportar icones tematicos e estado selecionado com check discreto.
  - Alternativa considerada: manter array simples de strings.
  - Racional: metadados tornam renderizacao e evolucao visual mais claras sem impactar contrato externo.
- Integrar o componente em `MoreActionsPage.vue` por props/eventos (ou `v-model`) mantendo interacao com `uiStore`.
  - Alternativa considerada: o componente acessar store diretamente.
  - Racional: manter fronteira de responsabilidade melhora testabilidade e reduz acoplamento.

## Risks / Trade-offs

- [Customizacao visual acima do padrao Quasar] -> Mitigacao: limitar overrides ao escopo do componente e reutilizar tokens/variaveis ja existentes no app.
- [Regressao de acessibilidade de teclado/foco] -> Mitigacao: usar componentes Quasar com suporte nativo e validar navegacao por teclado e foco visivel.
- [Inconsistencia entre tema claro/escuro] -> Mitigacao: definir variaveis CSS para ambos os modos e validar contraste minimo dos estados selecionado/hover.
- [Animacao excessiva em dispositivos modestos] -> Mitigacao: usar transicoes curtas e leves (opacity/transform), evitando propriedades de alto custo.

## Migration Plan

1. Implementar `ThemeModeSelector.vue` em paralelo ao `q-select` atual.
2. Substituir uso em `MoreActionsPage.vue` mantendo mesmo contrato de atualizacao de modo.
3. Validar manualmente nos 3 modos de tema e em breakpoints mobile/desktop.
4. Remover estilos/trechos legados do `q-select` caso existam.

Rollback: reverter a substituicao em `MoreActionsPage.vue` para `q-select` mantendo o componente novo sem uso, se necessario.

## Open Questions

- Nenhuma pendencia critica identificada para iniciar implementacao.
