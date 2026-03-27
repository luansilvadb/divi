## Context

O componente `SliverAppBar` é uma peça central da UI do Divi, proporcionando efeitos de colapso e expansão baseados no scroll. No entanto, sua dependência do objeto `window` para eventos de scroll torna-o frágil em layouts onde o scroll ocorre em elementos internos (comum no Quasar Framework com `.q-page-container`). Além disso, o design atual força um spacer fixo que causa problemas em páginas com scroll customizado.

## Goals / Non-Goals

**Goals:**
- Desvincular o `SliverAppBar` da dependência exclusiva do `window`.
- Permitir que o componente funcione corretamente em qualquer container de scroll.
- Eliminar o espaçamento redundante em páginas de "Advanced Settings".
- Garantir que o efeito "pinned" funcione em todas as páginas, independentemente da estrutura de layout.

**Non-Goals:**
- Mudar a estética ou animações da `SliverAppBar`.
- Refatorar outros componentes que não utilizam o efeito de sliver.

## Decisions

### 1. Detecção Automática do Scroll Parent
Em vez de exigir que o desenvolvedor passe sempre o `scrollTarget`, o `useSliverEffect` tentará detectar o ancestral mais próximo que possui scroll (`overflow-y: auto` ou `scroll`).
- **Rationale**: Melhora a DX (Developer Experience) e resolve o problema de `MoreActionsPage.vue` sem mudanças no template.
- **Alternativa**: Exigir `scrollTarget` obrigatório (rejeitado por ser verboso e propenso a erros).

### 2. Propriedade `showSpacer` no `SliverAppBar`
Adição de uma prop boolean `showSpacer` (default: `true`).
- **Rationale**: Permite que páginas como `AdvancedSettingsPage.vue`, que já gerenciam seu próprio container de scroll e layout, desativem o spacer automático que empurra o conteúdo para baixo.
- **Alternativa**: Detectar automaticamente se o componente está dentro de um container com scroll e esconder o spacer (rejeitado por ser complexo e imprevisível devido a timings de renderização).

### 3. Re-binding de Eventos Reativo
O `useSliverEffect` deve reagir a mudanças no `scrollTarget` (útil quando refs são populadas após o mount).
- **Rationale**: `AdvancedSettingsPage.vue` usa uma ref para o container que pode ser nula no primeiro ciclo de vida.
- **Alternativa**: Usar apenas `onMounted` (rejeitado pois falha se a ref for populada depois).

## Risks / Trade-offs

- **[Risco]** → A detecção automática de scroll parent pode falhar em estruturas DOM complexas ou estilos aplicados dinamicamente.
- **[Mitigação]** → Manter a prop `scrollTarget` como override explícito de alta prioridade.
- **[Trade-off]** → Adicionar um listener de scroll em elementos internos pode ter um custo de performance ligeiramente maior que no `window`, mas mitigado pelo uso de `requestAnimationFrame`.
