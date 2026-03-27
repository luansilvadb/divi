# Specification: Advanced Settings (Mais)

## Goals

Define the functional and behavioral requirements for the new "Advanced Settings" page and its animated transition from the main settings screen.

## Requirements

### Requirement: Navigation to Advanced Settings
- **GIVEN** the user is viewing the main settings page (`MoreActionsPage.vue`)
- **WHEN** the user clicks on the "Mais opções" settings item
- **THEN** the system MUST trigger a View Transition and navigate to `/actions/advanced`

### Requirement: Hero Animation Visuals
- **GIVEN** the user is navigating to Advanced Settings
- **WHEN** the View Transition is active
- **THEN** the "Mais opções" item from the origin MUST expand and morph smoothly into the header of the destination page

### Requirement: Displaying Advanced Settings Layout
- **GIVEN** the user is on the Advanced Settings page
- **WHEN** the page is loaded
- **THEN** it MUST display four main categories: `ESTILO`, `TRANSAÇÕES`, `CONTAS`, and `ORÇAMENTOS`
- **AND** each section MUST be wrapped in entry animations.

### Requirement: Section ESTILO Items
- **Fonte**: Icon `font_download`, Title "Fonte", Side template with `q-badge` labeled "Padrão".
- **Animações**: Icon `animation`, Title "Animações", Caption "Desativar animações pode melhorar o desempenho", Side template with `BaseSelect` (Option: Todos).
- **Animação numérica**: Icon `123`, Title "Animação numérica", Side template with `BaseSelect` (Option: Conte).
- **Aumentar o contraste de texto**: Icon `contrast`, Title "Aumentar o contraste de texto", Caption "Aumentar o contraste de texto mais leve", Side template with `q-toggle`.
- **Altura do cabeçalho**: Title "Altura do cabeçalho", Side template with `BaseSelect` (Option: Alto).
- **Estilo de ícone**: Title "Estilo de ícone", Side template with `BaseSelect` (Option: Arredondado).

### Requirement: Section TRANSAÇÕES Items
- **Transações de pagamento automático**: Icon `check_circle`, Title "Transações de pagamento automático", Caption "Marque as transações vencidas conforme pago".
- **Data de pagamento**: Title "Data de pagamento", Side template with `BaseSelect` (Option: Data atual).
- **Data Banner Total**: Title "Data Banner Total", Side template with `BaseSelect` (Option: Total do dia).
- **Resumo dos gastos mensais**: Title "Resumo dos gastos mensais", Caption "Transações Página Banner de Fluxo de Caixa", Side template with `q-toggle`.

### Requirement: Section CONTAS Items
- **Rótulo da conta**: Icon `label`, Title "Rótulo da conta", Caption "Adicionar rótulo de conta para todas as transações", Side template with `q-toggle`.
- **Taxas de câmbio**: Icon `currency_exchange`, Title "Taxas de câmbio", Clickable with chevron.
- **Moeda primária**: Icon `account_balance_wallet`, Title "Moeda primária", Side row with `q-badge` labeled "BRL" and chevron.

### Requirement: Section ORÇAMENTOS Items
- **Tipo total do orçamento**: Icon `fullscreen_exit`, Title "Tipo total do orçamento", Caption "Restante total".

### Requirement: Dropdown Menu Aesthetics
- **GIVEN** a Select component is active (opened)
- **WHEN** the user interacts with the control
- **THEN** the dropdown menu MUST align with the trigger's rounded design language (12px radius)
- **AND** it MUST feature glassmorphism (translucency + blur) to match the "premium" system design.
- **AND** the menu items MUST have internal padding and rounded corners (8px) for a modern, cleaner appearance.

### Requirement: Back Navigation
- **GIVEN** the user is on the Advanced Settings page
- **WHEN** the user clicks the back button (Top-Left) OR presses the system back button
- **THEN** the system MUST navigate back to the main settings page
- **AND** the transition MUST reverse the hero effect if supported by the browser

## UI Specification: Header (Sliver Header)

### Requirement: Standard Sliver Header Behavior
- **WHEN** user loads `AdvancedSettingsPage.vue`.
- **THEN** the header appears expanded with a height of `160px`.
- **WHEN** user scrolls down the page.
- **THEN** the `SliverAppBar` should collapse smoothly towards a height of `56px`.
- **WHEN** user returns to the top of the page.
- **THEN** the `SliverAppBar` should expand back to `160px`.

### Component Specification
- **Component**: `PageContentLayout` wrapper around page content.
- **Component**: `SliverAppBar` positioned in the `#header` slot.
- **Title styling**: 
    - Full Title: Bold, `text-h5`.
    - Collapsed State: Standard title behavior as managed by `SliverAppBar`.
- **Configuration Properties**:
    - `expanded-height`: `160`
    - `collapsed-height`: `56`
    - `pinned`: `true`
    - `show-spacer`: `false`
