## MODIFIED Requirements

### Requirement: Seleção de tema via dropdown

O sistema SHALL permitir que o usuário selecione o modo de tema através de um dropdown na página de Configurações, com abertura automática ao clicar no item.

- **WHEN** usuário abre Configurações e clica no item "Modo de tema"
- **THEN** o dropdown deve abrir automaticamente
- **AND** o tema do aplicativo muda conforme a seleção

#### Scenario: Usuário clica no item para abrir dropdown

- **WHEN** usuário clica em qualquer parte do item "Modo de tema" nas Configurações
- **THEN** o dropdown de opções abre automaticamente
- **AND** as opções Claro, Escuro e Auto são exibidas

#### Scenario: Usuário seleciona tema Claro

- **WHEN** usuário abre Configurações e seleciona "Claro" no dropdown
- **THEN** o tema do aplicativo muda para Claro imediatamente

#### Scenario: Usuário seleciona tema Escuro

- **WHEN** usuário abre Configurações e seleciona "Escuro" no dropdown
- **THEN** o tema do aplicativo muda para Escuro imediatamente

#### Scenario: Usuário seleciona tema Auto

- **WHEN** usuário abre Configurações e seleciona "Auto" no dropdown
- **THEN** o tema do aplicativo segue as configurações do dispositivo

#### Scenario: Dropdown exibe opções corretas

- **WHEN** usuário visualiza o dropdown de tema
- **THEN** são exibidas as três opções: Claro, Escuro, Auto
- **AND** um indicador visual de dropdown está presente
