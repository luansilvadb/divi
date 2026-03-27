## Why

Atualmente, o componente `SliverAppBar` apresenta inconsistências de comportamento entre diferentes páginas. Em `MoreActionsPage.vue`, o efeito de "pinned" não funciona corretamente porque o scroll ocorre em um container pai (Quasar layout) e não no `window`. Em `AdvancedSettingsPage.vue`, existe um espaçamento excessivo ("gordura") no topo do conteúdo, causado por um spacer redundante quando um container de scroll interno é utilizado.

## What Changes

- **Melhoria no `useSliverEffect`**: Adição de detecção automática do container de scroll (ancestral mais próximo com scroll) ou suporte explícito para garantir que o progresso do efeito seja calculado corretamente independentemente da estrutura do layout.
- **Refinamento do `SliverAppBar`**: Introdução de uma prop para controlar a exibição do `sliver-spacer`, evitando espaçamentos duplicados em páginas com containers de scroll internos.
- **Correção de Layout**: Ajuste nas páginas `MoreActionsPage.vue` e `AdvancedSettingsPage.vue` para utilizar as novas capacidades e remover hacks de overflow atuais.

## Capabilities

### New Capabilities
- Nenhuma.

### Modified Capabilities
- `layout/sliver-app-bar`: Atualização dos requisitos de comportamento de scroll e controle de espaçamento estrutural.

## Impact

- `src/composables/useSliverEffect.ts`: Lógica de cálculo de `scrollY` e `visualOffset`.
- `src/components/molecules/SliverAppBar.vue`: Template e Props.
- `src/pages/MoreActionsPage.vue` e `src/pages/AdvancedSettingsPage.vue`: Implementação do componente.
