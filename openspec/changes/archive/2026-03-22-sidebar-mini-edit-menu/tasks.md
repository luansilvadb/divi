# Tasks: Sidebar Mini Mode — Editar Dados Menu

Checklist de implementação.

## Phase 1: Template — Bloco mini mode

- [x] 1.1 Adicionar um `q-item` com `v-show="isMini"` logo após o `q-expansion-item` existente em `DesktopSidebar.vue`.
- [x] 1.2 Dentro do `q-item`, adicionar o ícone `edit_note` com as classes `nav-icon` e `nav-item`.
- [x] 1.3 Adicionar o `q-menu` dentro do `q-item` com `anchor="center right"`, `self="center left"`, e `offset="[8, 0]"`.
- [x] 1.4 Dentro do `q-menu`, renderizar `q-list` > `q-item` com `v-for="sub in editDataItems"`, reutilizando o mesmo array de dados.
- [x] 1.5 Cada sub-item deve ter: `:to="sub.to"`, `exact`, `active-class="bg-blue-1 text-primary text-bold active-bubble"`, `v-ripple`, ícone + label.

## Phase 2: Estilos

- [x] 2.1 Adicionar classe `.edit-data-menu` ao `q-menu` com: `background-color: $sidebar-bg`, `border-radius: 12px`, `box-shadow`, `min-width: 220px`.
- [x] 2.2 Estilos do menu movidos para bloco `<style>` não-scoped (q-menu teleporta para body, scoped não funciona).

## Phase 3: Validação

- [x] 3.1 Build compilou com sucesso (SPA UI compiled with success).
- [x] 3.2 q-menu com `:to` fecha automaticamente ao navegar (comportamento nativo Quasar).
- [x] 3.3 q-menu fecha ao clicar fora (comportamento nativo Quasar).
- [x] 3.4 Modo expandido inalterado — `q-expansion-item` com `v-show="!isMini"` continua igual.
- [x] 3.5 Active state usa `active-class="bg-blue-1 text-primary text-bold active-bubble"` — mesmo padrão dos outros itens.
