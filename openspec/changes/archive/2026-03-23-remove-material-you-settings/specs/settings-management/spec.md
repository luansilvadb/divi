## REMOVED Requirements

### Requirement: Material You Toggle

**Reason**: Funcionalidade deprecada para simplificar a experiência de personalização de tema
**Migration**: O tema padrão será aplicado automaticamente. Usuários podem continuar usando "Cor de destaque" e "Modo de tema" para personalização.

O sistema NÃO DEVE mais exibir o toggle "Material You" na seção de personalização de tema.

- **WHEN** o usuário acessa a página de configurações
- **THEN** o toggle "Material You" NÃO DEVE estar visível

#### Scenario: Visualizando configurações de tema sem Material You

- **WHEN** o usuário navega para a seção "TEMA" nas configurações
- **THEN** apenas "Cor de destaque" e "Modo de tema" devem estar disponíveis
- **AND** nenhum elemento relacionado ao Material You deve ser renderizado

### Requirement: Material You State Management

**Reason**: Estado não mais necessário após remoção da funcionalidade
**Migration**: Remover propriedades `materialYou` e `dynamicColors` dos stores de tema

O sistema NÃO DEVE mais gerenciar estado relacionado ao Material You.

- **WHEN** o store de tema é inicializado
- **THEN** ele NÃO DEVE conter propriedades ou ações relacionadas ao Material You

#### Scenario: Inicializando store de tema limpo

- **WHEN** a aplicação inicia
- **THEN** o store de tema deve carregar sem referências ao Material You
- **AND** nenhum erro deve ocorrer ao carregar estado persistido anterior

### Requirement: Material You Utility Functions

**Reason**: Código morto após remoção da funcionalidade
**Migration**: Remover funções de geração de paletas dinâmicas

O sistema NÃO DEVE mais conter funções utilitárias para processamento de cores Material You.

- **WHEN** o código é analisado
- **THEN** nenhuma função relacionada a Material You deve existir em `/src/utils/` ou `/src/composables/`

#### Scenario: Verificando código limpo

- **WHEN** uma busca por "materialYou" é realizada no codebase
- **THEN** nenhum resultado deve ser encontrado em arquivos de código fonte

### Requirement: Material You Styles

**Reason**: Estilos não mais utilizados
**Migration**: Remover classes CSS e variáveis relacionadas ao Material You

O sistema NÃO DEVE mais conter estilos específicos do Material You.

- **WHEN** os arquivos SCSS/CSS são analisados
- **THEN** nenhuma regra relacionada a paletas dinâmicas ou Material You deve existir

#### Scenario: Verificando estilos limpos

- **WHEN** o tema é aplicado
- **THEN** apenas as variáveis de tema padrão devem estar presentes
- **AND** nenhuma variável dinâmica Material You deve ser definida
