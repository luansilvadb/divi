## ADDED Requirements

### Requirement: Seletor inline de modo de tema na tela de Configuracoes
O sistema SHALL exibir as opcoes de modo de tema diretamente na secao "Modo de tema" da pagina de Configuracoes, sem depender de abertura de dropdown.

#### Scenario: Usuario visualiza opcoes sem abrir menu
- **WHEN** o usuario acessa a pagina de Configuracoes
- **THEN** as opcoes de modo de tema devem estar visiveis inline no bloco de "Modo de tema"
- **AND** as opcoes exibidas devem ser "Claro", "Escuro" e "Sistema"

### Requirement: Selecao unica com estado ativo evidente
O sistema SHALL permitir apenas uma opcao ativa por vez e MUST destacar visualmente a opcao atualmente selecionada.

#### Scenario: Usuario seleciona uma opcao de tema
- **WHEN** o usuario seleciona "Claro", "Escuro" ou "Sistema" no seletor inline
- **THEN** somente a opcao escolhida deve permanecer marcada como ativa
- **AND** as demais opcoes devem permanecer desmarcadas

### Requirement: Acessibilidade e navegacao por teclado no seletor inline
O sistema MUST oferecer suporte a navegacao por teclado e foco visivel no grupo de selecao de modo de tema.

#### Scenario: Usuario navega sem mouse
- **WHEN** o usuario navega ate o seletor de modo de tema com teclado
- **THEN** cada opcao deve receber foco visivel
- **AND** o usuario deve conseguir alterar a opcao ativa via teclado
