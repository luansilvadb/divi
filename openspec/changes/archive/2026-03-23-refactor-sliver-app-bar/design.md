## Context

O componente `SliverAppBar.vue` atual é monolítico, contendo lógica de cálculo de scroll e estilos acoplados. Isso fere o princípio de responsabilidade única e dificulta a manutenção do design system, especialmente para suporte a temas (light/dark) e reutilização da lógica de "efeito sliver" em outros componentes de UI.

## Goals / Non-Goals

**Goals:**
- Desacoplar a lógica de cálculo de scroll para um composable reutilizável (`useSliverEffect`).
- Centralizar a definição de cores em variáveis SCSS globais.
- Utilizar CSS Variables para transformações de UI, melhorando a performance e legibilidade do template.
- Garantir compatibilidade total com o modo escuro.

**Non-Goals:**
- Adicionar novas funcionalidades de navegação ou busca no componente.
- Refatorar outros componentes de layout que não o SliverAppBar e seus dependentes diretos.

## Decisions

### 1. Criação do `useSliverEffect.ts`
- **Decisão**: Extrair toda a lógica de `onScroll`, `requestAnimationFrame` e cálculos de `progress` (0 a 1) para este composable.
- **Racional**: Permite testar a lógica de scroll isoladamente e reutilizá-la em outros componentes que precisem de comportamentos similares.
- **Alternativa**: Manter a lógica no componente (rejeitado por acoplamento).

### 2. Uso de CSS Variables para Interpolação
- **Decisão**: O componente injetará variáveis como `--sliver-p` (progresso) e `--sliver-offset` em seu elemento raiz.
- **Racional**: Permite que o CSS lide com transformações complexas (escala, opacidade, clip-path) de forma declarativa, evitando a manipulação direta de estilos via JS no template (mais performático).
- **Alternativa**: Injetar estilos inline `:style="{ transform: ... }"` (rejeitado por poluição do template e menor performance).

### 3. Tokens de Design no `quasar.variables.scss`
- **Decisão**: Definir `$sliver-bg-light`, `$sliver-bg-pinned-light`, etc.
- **Racional**: Garante que qualquer alteração na paleta de cores do app seja refletida automaticamente no SliverAppBar, respeitando o Design System.

## Risks / Trade-offs

- **[Risco]** Quebra visual em páginas que dependem de props específicas do SliverAppBar.
  - **Mitigação**: Manter a interface de props estável ou realizar uma refatoração assistida em `IndexPage.vue` e `MoreActionsPage.vue`.
- **[Trade-off]** Leve aumento na verbosidade do CSS.
  - **Justificativa**: Ganho significativo em clareza no template Vue e facilidade de manutenção de temas.
