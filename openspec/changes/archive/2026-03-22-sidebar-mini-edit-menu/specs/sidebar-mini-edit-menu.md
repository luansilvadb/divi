# Spec: Sidebar Mini Edit Menu

## Requisitos Funcionais

### RF-01: Ícone de Editar dados no modo mini
- Quando a sidebar está no modo mini (`isMini === true`), deve ser exibido um `q-item` com o ícone `edit_note` na posição onde ficaria o "Editar dados".
- O ícone deve seguir o mesmo estilo visual dos demais ícones da sidebar (`.nav-item`, border-radius 20px no mini mode).

### RF-02: Menu popup ao clicar
- Ao clicar no ícone `edit_note` no modo mini, deve abrir um `q-menu` exibindo todos os 5 sub-itens de edição:
  - Detalhes da conta (`/editar/conta`)
  - Detalhes dos orçamentos (`/editar/orcamentos`)
  - Detalhes das categorias (`/editar/categorias`)
  - Detalhes dos títulos (`/editar/titulos`)
  - Detalhes dos objetivos (`/editar/objetivos`)
- Cada sub-item deve ter ícone + label.
- Cada sub-item deve navegar para sua rota ao ser clicado.

### RF-03: Active state no menu
- Se o usuário está em uma rota de edição (ex: `/editar/conta`), o item correspondente no menu deve exibir o `active-class` (`bg-blue-1 text-primary text-bold`).

### RF-04: Fechamento do menu
- O menu deve fechar automaticamente ao clicar em um sub-item (navegação).
- O menu deve fechar ao clicar fora dele.

## Requisitos Visuais

### RV-01: Consistência com design system
- Background do menu: `$sidebar-bg` (#f7f9fc)
- Border radius dos itens: `12px`
- Hover: `$nav-hover` (#e2e8f0)
- Texto: `$nav-text` (#5c626a), `text-subtitle2`
- Ripple effect em cada item
- Sombra sutil no menu container

### RV-02: Posicionamento
- O menu deve abrir à direita do ícone, sem sobrepor a sidebar.

## Requisitos Não-Funcionais

### RNF-01: Modo expandido inalterado
- O comportamento do `q-expansion-item` no modo expandido não deve ser alterado.

### RNF-02: Dados compartilhados
- O array `editDataItems` deve ser reutilizado por ambos os modos (expandido e mini), sem duplicação de dados.
