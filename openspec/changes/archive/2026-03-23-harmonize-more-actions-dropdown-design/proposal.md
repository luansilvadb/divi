## Why

O dropdown de "Modo de tema" na tela de Configuracoes esta visualmente atraente isoladamente, mas destoante da linguagem predominante da pagina "Mais acoes". Isso gera inconsistencia perceptiva no sistema de design e reduz a sensacao de coesao entre componentes da mesma secao.

## What Changes

- Ajustar a linguagem visual do seletor de modo de tema para harmonizar com os `SettingsItem` e os cards da pagina.
- Reduzir elevacao visual excessiva (sombras profundas e efeito de lift) no trigger e no menu do dropdown.
- Padronizar raio, borda, estados de hover/ativo e contraste em light/dark mode para o contexto da pagina de configuracoes.
- Preservar integralmente o comportamento funcional atual (abrir, selecionar Claro/Escuro/Auto, aplicar tema, fechar menu).

## Capabilities

### New Capabilities

- Nenhuma.

### Modified Capabilities

- `theme-mode-selector`: atualizar requisitos visuais do seletor para priorizar consistencia com a linguagem de Settings em vez de estilo premium isolado.

## Impact

- Atinge principalmente o componente `src/components/molecules/ThemeModeSelector.vue`.
- Impacto visual na pagina `src/pages/MoreActionsPage.vue` (secao "Modo de tema").
- Sem mudanca em APIs, contratos de dados, stores ou regras de negocio de tema.
