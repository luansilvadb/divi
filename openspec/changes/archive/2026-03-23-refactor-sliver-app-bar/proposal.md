## Why

Atualmente, o componente `SliverAppBar.vue` possui lógica de scroll e cores fixas (hardcoded) misturadas em seu template e estilos. Isso dificulta a manutenção, a consistência visual com o modo escuro e a reutilização do efeito de "sliver" em outras partes do sistema. Refatorar este componente alinha o projeto com as práticas de Atomic Design, Clean Architecture e centralização de tokens de design já estabelecidas.

## What Changes

- **Extração de Lógica**: Criar o composable `useSliverEffect` para gerenciar cálculos de scroll, progresso e offsets de forma agnóstica ao componente.
- **Centralização de Design Tokens**: Mover as cores hexadecimais fixas do componente para variáveis SCSS em `src/css/quasar.variables.scss`.
- **Refatoração do Componente**: Atualizar o `SliverAppBar.vue` para utilizar **CSS Variables** dinâmicas baseadas no progresso do scroll, simplificando o template e melhorando a performance (evitando re-renders por styles inline).
- **Melhoria de Reutilização**: Tornar o componente um "shell" de layout mais flexível, permitindo sua aplicação em diferentes contextos de scroll (window ou containers internos).

## Capabilities

### New Capabilities
- Nenhuma nova funcionalidade de negócio está sendo introduzida, apenas melhorias estruturais e de design system.

### Modified Capabilities
- `layout/sliver-app-bar`: Os requisitos de implementação e comportamento visual (transição de cores e offsets) serão refinados para suportar maior flexibilidade e integração com o design system centralizado.

## Impact

- `src/components/molecules/SliverAppBar.vue`: Refatoração completa da estrutura interna.
- `src/css/quasar.variables.scss`: Adição de novos tokens de design para o Sliver App Bar.
- `src/composables/useSliverEffect.ts`: Novo arquivo de lógica compartilhada.
- Páginas que utilizam o componente (como `IndexPage.vue` e `MoreActionsPage.vue`) podem precisar de ajustes leves na passagem de slots ou props se as assinaturas mudarem.
