# Proposal: Sidebar Mini Mode — Editar Dados Menu

Adicionar suporte ao grupo "Editar dados" no modo mini da sidebar, exibindo os sub-itens via `q-menu` ao clicar no ícone.

## Why

Atualmente, quando a sidebar colapsa para o modo mini, o `q-expansion-item` de "Editar dados" é completamente escondido via `v-show="!isMini"`. Isso significa que os 5 sub-itens de edição (conta, orçamentos, categorias, títulos, objetivos) ficam inacessíveis no modo mini, quebrando a navegação para o usuário.

Todos os outros itens de navegação continuam visíveis como ícones no modo mini. O "Editar dados" é o único grupo que desaparece, criando uma inconsistência de UX.

## What Changes

- **Adicionar `q-item` + `q-menu` no modo mini**: Quando `isMini === true`, renderizar um `q-item` com o ícone `edit_note`. Ao clicar, abrir um `q-menu` com os sub-itens de edição.
- **Manter `q-expansion-item` no modo expandido**: O comportamento atual do modo expandido permanece inalterado.
- **Estilizar o `q-menu`** para seguir o design system da sidebar (mesmas cores, border-radius, hover, ripple).

## Impact

- **Código afetado**: `DesktopSidebar.vue` — único arquivo modificado.
- **Dependências**: Nenhuma nova dependência. Usa componentes nativos do Quasar (`q-menu`, `q-list`, `q-item`).
- **Riscos**: Baixo. Mudança isolada em um único componente com lógica condicional simples.
