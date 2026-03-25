## REMOVED Requirements

### Requirement: Interacao de dropdown de tema com clique no item
**Reason**: O item "Modo de tema" deixara de usar abertura de dropdown e passara a usar seletor inline com opcoes visiveis.
**Migration**: Substituir o comportamento de click-to-open por interacao direta nas opcoes inline mantendo aplicacao imediata do tema.

O sistema DEVE abrir automaticamente o dropdown de selecao de tema quando o usuario clicar no item "Modo de tema" na pagina de Configuracoes.

- **WHEN** o usuario clica em qualquer area do item "Modo de tema"
- **THEN** o dropdown com as opcoes de tema deve abrir automaticamente

#### Scenario: Usuario clica no item Modo de tema

- **WHEN** usuario esta na pagina de Configuracoes
- **AND** usuario clica no item "Modo de tema"
- **THEN** o dropdown de opcoes de tema deve abrir imediatamente
- **AND** as opcoes "Claro", "Escuro" e "Auto" devem ser visiveis

#### Scenario: Dropdown permanece funcional apos selecao

- **WHEN** usuario seleciona uma opcao de tema no dropdown
- **THEN** o dropdown deve fechar
- **AND** o tema deve mudar para o modo selecionado
- **AND** o dropdown deve continuar funcionando em cliques subsequentes

### Requirement: Indicador visual de dropdown interativo
**Reason**: O indicador de seta de dropdown deixa de ser necessario com opcoes sempre visiveis inline.
**Migration**: Remover icone de seta de dropdown e adotar indicador de opcao ativa no grupo inline.

O sistema DEVE exibir um indicador visual (icone de seta) que sinalize que o item "Modo de tema" possui um dropdown interativo.

- **WHEN** o usuario visualiza o item "Modo de tema"
- **THEN** deve haver um icone de seta para baixo indicando a presenca de um dropdown

#### Scenario: Visualizando indicador de dropdown

- **WHEN** usuario visualiza a secao TEMA nas Configuracoes
- **THEN** o item "Modo de tema" deve exibir um icone de seta para baixo
- **AND** o icone deve estar posicionado proximo ao select atual
