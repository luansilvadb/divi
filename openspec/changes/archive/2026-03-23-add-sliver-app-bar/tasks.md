## 1. Estrutura e Componentização

- [x] 1.1 Criar o arquivo do componente em `src/components/molecules/SliverAppBar.vue`.
- [x] 1.2 Definir as `Props` com TypeScript e valores padrão (expandedHeight: 250, collapsedHeight: 56).
- [x] 1.3 Estruturar o template base com `position: sticky` e slots (`navigation`, `actions`, `background`, `title`).

## 2. Motor de Física e Performance

- [x] 2.1 Injetar o componente `<q-scroll-observer>` e vincular ao evento `@scroll`.
- [x] 2.2 Implementar o guardião `requestAnimationFrame` (ticking) no script setup.
- [x] 2.3 Desenvolver a lógica de cálculo de `deltaY` para detecção de direção de scroll.
- [x] 2.4 Implementar a física de `floating` e `pinned` para atualizar o `currentHeight` reativo.

## 3. Interpolação de UI e Snap

- [x] 3.1 Calcular a variável de estado `progress` (0 a 1) para controle de transições.
- [x] 3.2 Implementar a lógica de `snap` com `setTimeout` (debounce) para auto-ajuste de altura.
- [x] 3.3 Aplicar estilos dinâmicos (`:style`) para `transform: scale` e `opacity` baseados no progresso.
- [x] 3.4 Garantir que a transição de `height` via CSS ocorra apenas durante o estado `isSnapping`.

## 4. Integração e Validação

- [x] 4.1 Integrar o componente em uma tela existente (ex: `src/pages/IndexPage.vue`) para testes.
- [x] 4.2 Validar a fluidez visual (60fps) no navegador e emular dispositivos móveis.
- [x] 4.3 Ajustar o `z-index` e interações com o `QLayout` principal.
