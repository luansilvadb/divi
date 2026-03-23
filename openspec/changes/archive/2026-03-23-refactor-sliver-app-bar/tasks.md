## 1. Design Tokens e Estilos Globais

- [x] 1.1 Adicionar variáveis SCSS específicas para o Sliver App Bar em `src/css/quasar.variables.scss` (`$sliver-bg-light`, `$sliver-bg-pinned-light`, `$sliver-bg-dark`, `$sliver-bg-pinned-dark`).

## 2. Extração de Lógica (Composables)

- [x] 2.1 Criar o arquivo `src/composables/useSliverEffect.ts`.
- [x] 2.2 Implementar a lógica de observação de scroll e cálculo de `progress`, `visualOffset` e `diff` no composable.

## 3. Refatoração do Componente

- [x] 3.1 Importar e integrar o `useSliverEffect` no `src/components/molecules/SliverAppBar.vue`.
- [x] 3.2 Definir e injetar CSS Variables (`--sliver-p`, `--sliver-offset`, etc.) no container principal do componente.
- [x] 3.3 Substituir cores hexadecimais fixas pelas variáveis SCSS no bloco `<style>`.
- [x] 3.4 Simplificar o template HTML, removendo bindings `:style` excessivos e movendo a lógica visual para o CSS.

## 4. Verificação e Testes

- [x] 4.1 Validar o comportamento visual e reatividade na `IndexPage.vue`.
- [x] 4.2 Validar o comportamento visual e reatividade na `MoreActionsPage.vue`.
- [x] 4.3 Testar a integridade visual durante a troca entre modo claro e escuro.
