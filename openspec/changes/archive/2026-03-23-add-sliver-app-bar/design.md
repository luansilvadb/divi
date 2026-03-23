## Context

A interface atual do Quasar depende do `QHeader` nativo para navegação. Embora ele possua suporte à propriedade `reveal` (ocultar ao rolar), ele não suporta a transição contínua e a física avançada de um `SliverAppBar` nativo do Flutter. Essa feature exige a interpolação fluida de uma barra de ferramentas grande (com título expandido) encolhendo gradualmente para uma barra de ferramentas mínima (`pinned`), suportando ressurgimento baseado na direção do scroll (`floating`) e transição magnética (`snap`). 

## Goals / Non-Goals

**Goals:**
- Criar um componente de interface de alta performance `SliverAppBar.vue`.
- Gerenciar o estado de scroll com precisão de 60fps usando `requestAnimationFrame` para prevenir *jank* (engasgos).
- Controlar transições e opacidades estritamente através do motor de composição da GPU (propriedades `transform` e `opacity`).
- Prover um contrato de "Props" intuitivo (`expandedHeight`, `collapsedHeight`, `pinned`, `floating`, `snap`).

**Non-Goals:**
- Não iremos refatorar o `MainLayout.vue` para forçar esse header globalmente. Ele será introduzido localmente em componentes do tipo `<q-page>`.
- Não forneceremos retrocompatibilidade (polyfills) para browsers desatualizados que não suportam CSS `position: sticky`.

## Decisions

1. **Uso de CSS Sticky ao invés de `QHeader`**: O `QHeader` do Quasar possui restrições severas atreladas ao ciclo de vida do `QLayout`. Criaremos um container `position: sticky; top: 0;` que residirá diretamente no topo de uma `<q-page>`. Isso o torna plug-and-play e altamente reutilizável.
2. **Listener via `<q-scroll-observer>`**: O Quasar já possui injeção nativa altamente otimizada para capturar o scroll da página atual no `<q-scroll-observer>`. Vamos usar isso e delegar o recálculo ao motor customizado.
3. **Loop via requestAnimationFrame**: Nenhuma mutação de DOM ocorrerá puramente amarrada ao evento `scroll`. Um controle `ticking` garantirá que o recálculo só aconteça antes do próximo *repaint* do navegador.
4. **Variável Unificada `progress`**: O output central de todas essas equações matemáticas será a reativa `progress` (0.0 até 1.0), onde 0 é "expandido" e 1 é "completamente contraído/escondido". O template usará `progress` para interpolar transformações CSS.

## Risks / Trade-offs

- **[Risk] Conflitos com o Header Global**: Telas que usarem este novo componente terão dois cabeçalhos se o layout global também ditar um. → **Mitigation**: A utilização exigirá condicionais na rota ou layouts secundários (ex: `EmptyLayout`) para páginas que usem a Sliver.
- **[Risk] Custos de Layout na Renderização**: Alterar diretamente a altura (`height`) do cabeçalho força reflow. → **Mitigation**: Iremos garantir que componentes críticos usem aceleração de hardware (transform scale/translate) sempre que possível, tolerando o `height` com cautela máxima.