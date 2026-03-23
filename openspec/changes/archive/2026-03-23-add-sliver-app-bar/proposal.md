## Why

A navegação em dispositivos móveis requer uma experiência fluida e nativa para garantir engajamento e uma sensação premium. O Flutter possui o padrão `SliverAppBar` (e `FlexibleSpaceBar`) que encolhe títulos grandes para uma barra fixada, o que é muito elegante. Atualmente, para atingir esse nível de refinamento (incluindo física de `pinned`, `floating` e `snap`) dentro do Quasar + Vue 3 sem sofrer com *jank* de performance, precisamos de uma implementação customizada e otimizada por `requestAnimationFrame`. Este componente será a base visual para a maioria das telas do app.

## What Changes

- Criação de um novo componente `SliverAppBar.vue` reutilizável em todo o projeto.
- Implementação da lógica matemática de detecção de scroll (`delta` vs posição absoluta).
- Suporte às propriedades `pinned` (barra fixa ao encolher), `floating` (reaparece ao subir) e `snap` (auto-completa transição ao soltar).
- Interpolação de tamanho de texto e transformações usando CSS `transform` para performance 60fps na GPU.

## Capabilities

### New Capabilities
- `layout/sliver-app-bar`: Novo componente estrutural base de cabeçalho para as páginas da aplicação com animações ricas baseadas em scroll.

### Modified Capabilities


## Impact

- Introdução de componente de Layout robusto no Atomic Design (como um organismo ou template base).
- Não quebra sistemas existentes, mas introduz um novo padrão visual que será consumido gradativamente pelas páginas (ex: `src/pages/FinancePage.vue`).
- Requer cuidado para não conflitar com o `q-header` principal da `MainLayout.vue` se não utilizado corretamente (usaremos arquitetura `position: sticky` na página ou manipularemos o Layout adequadamente).