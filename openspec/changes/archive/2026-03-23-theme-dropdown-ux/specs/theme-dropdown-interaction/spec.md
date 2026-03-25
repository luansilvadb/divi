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
- **AND** o dropdown deve continuar funcionando em cliques subsequentes

### Requirement: Indicador visual de dropdown interativo

O sistema DEVE exibir um indicador visual (ícone de seta) que sinalize que o item "Modo de tema" possui um dropdown interativo.

- **WHEN** o usuário visualiza o item "Modo de tema"
- **THEN** deve haver um ícone de seta para baixo indicando a presença de um dropdown

#### Scenario: Visualizando indicador de dropdown

- **WHEN** usuário visualiza a seção TEMA nas Configurações
- **THEN** o item "Modo de tema" deve exibir um ícone de seta para baixo
- **AND** o ícone deve estar posicionado próximo ao select atual
