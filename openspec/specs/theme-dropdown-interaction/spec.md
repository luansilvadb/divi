# Theme Dropdown Interaction Specifications

## ADDED Requirements

### Requirement: Interação de dropdown de tema com clique no item

O sistema DEVE abrir automaticamente o dropdown de seleção de tema quando o usuário clicar no item "Modo de tema" na página de Configurações.

- **WHEN** o usuário clica em qualquer área do item "Modo de tema"
- **THEN** o dropdown com as opções de tema deve abrir automaticamente

#### Scenario: Usuário clica no item Modo de tema

- **WHEN** usuário está na página de Configurações
- **AND** usuário clica no item "Modo de tema"
- **THEN** o dropdown de opções de tema deve abrir imediatamente
- **AND** as opções "Claro", "Escuro" e "Auto" devem ser visíveis

#### Scenario: Dropdown permanece funcional após seleção

- **WHEN** usuário seleciona uma opção de tema no dropdown
- **THEN** o dropdown deve fechar
- **AND** o tema deve mudar para o modo selecionado
- **AND** o tema deve mudar para o modo selecionado
- **AND** o dropdown deve continuar funcionando em cliques subsequentes

### Requirement: Detach-Free Interactions
- **WHEN** user has the `BaseSelect` (dropdown) menu open.
- **AND** they scroll any parent container (such as the `scroll-container`).
- **THEN** the menu must immediately close to prevent detached UI elements.

### Requirement: Scroll Target Awareness
- **WHEN** opening the menu.
- **THEN** the component should dynamically identify the scrolling parent using a reliable discovery method (like `getScrollTarget`) to ensure it works correctly in both `window` and internal container contexts.

### Requirement: Resource Hygiene
- **WHEN** the menu closes.
- **THEN** any active scroll event listeners must be removed to avoid performance degradation.

### Requirement: Harmonic Option Hover State
- **WHEN** user moves their mouse over an option in the `BaseSelect` (dropdown) menu.
- **THEN** the item's background MUST change to match the select's closed state: exactly `#f0f2f5` (Light) or `#2a2a2a` (Dark).

### Requirement: Interaction Smoothness (Dropdown)
- **WHEN** transitioning states in the dropdown menu.
- **THEN** the background must transition over a duration of `0.2s` (200ms) for a premium, non-abrupt feeling.

### Requirement: High-Contrast Dark Selection
- **WHEN** in dark mode.
- **THEN** the hover background SHOULD be distinct enough from the menu's background to ensure clear visual feedback without losing text legibility.

### Requirement: Indicador visual de dropdown interativo

O sistema DEVE exibir um indicador visual (ícone de seta) que sinalize que o item "Modo de tema" possui um dropdown interativo.

- **WHEN** o usuário visualiza o item "Modo de tema"
- **THEN** deve haver um ícone de seta para baixo indicando a presença de um dropdown

#### Scenario: Visualizando indicador de dropdown

- **WHEN** usuário visualiza a seção TEMA nas Configurações
- **THEN** o item "Modo de tema" deve exibir um ícone de seta para baixo
- **AND** o ícone deve estar posicionado próximo ao select atual
