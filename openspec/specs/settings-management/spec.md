# Settings Management Specifications

## ADDED Requirements

### Requirement: Centralized Action Page

The system SHALL provide a dedicated page (`/actions` or `/settings`) to centralize all auxiliary actions, settings, and branding.

- **WHEN** the user navigates to the specified route.
- **THEN** it must show a "Mais ações" centered title at the top with a question mark help button.

#### Scenario: Navigating to More Actions

- **WHEN** the user clicks on the "Mais" icon in the navigation.
- **THEN** the application should render the "Mais ações" view with all categories.

### Requirement: Branding Information Actions

The system SHALL provide prominent buttons for "Sobre Cashew" and "Opinião".

- **WHEN** these actions are visible.
- **THEN** they must appear side-by-side as distinct top-level cards or wide buttons at the top of the main area.

#### Scenario: Selecting Branding Action

- **WHEN** the user clicks "Sobre Cashew".
- **THEN** it should open a modal or navigate to a page with details about the platform.

### Requirement: Visual Theme Customization

The system SHALL provide controls for "Cor de destaque" (Accent Color) and "Modo de tema" (Light/Dark/Auto).

- **WHEN** "Modo de tema" is changed.
- **THEN** it MUST instantly apply the selected state (Light, Dark, or System Sync).

#### Scenario: Changing Theme Mode

- **WHEN** the user selects "Claro", "Escuro", or "Auto" in the theme mode options.
- **THEN** the application theme should immediately reflect the selected mode.

### Requirement: Seleção de tema via dropdown

O sistema SHALL permitir que o usuário selecione o modo de tema através de um dropdown na página de Configurações.

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

### Requirement: Nested Selection with Radio Buttons

The system SHALL support nested radio button selection groups under specific rows.

- **WHEN** an item contains a set of sub-options (e.g., "Modo de tema" levels or similar).
- **THEN** it must show small, dense radio buttons with a description caption for each.
- **AND** all options in a group must be indented below the parent item's icon/label.

### Requirement: Categorized Preference Items and Content Cards

The system SHALL organize preferences into "Tema", "Preferências", "Ferramentas e extras", and "Importar e exportar".

- **WHEN** the "Mais ações" page is opened.
- **THEN** it must display section titles ("TEMA", "PREFERÊNCIAS", etc.) outside and above their corresponding data card.
- **AND** the data cards MUST have a darker background (for dark mode) with rounded corners (20px).
- **WHEN** items have sub-text (caption).
- **THEN** they MUST be displayed below the title in a smaller, dimmer font.

### Requirement: Inline Rich Captions

The system SHALL support and render captions with embedded clickable links.

- **GIVEN** an item with an informative caption.
- **WHEN** it contains "Saiba mais sobre...".
- **THEN** this specific text must be styled as a primary-colored link with an underline or pointer cursor.

### Requirement: Material Design 3 Toggle Styling

A aplicação DEVE exibir todos os componentes de chaveamento (toggles/switches) seguindo a diretriz visual do Material Design 3.

- **WHEN** um componente `q-toggle` é renderizado.
- **THEN** o "track" (trilha) deve englobar totalmente o "thumb" (bolinha).
- **AND** a proporção e bordas arredondadas devem refletir a especificação M3 (aproximadamente 52x32px para o track).

#### Scenario: Visualizando um Toggle Inativo

- **WHEN** um toggle está no estado `false` (desligado).
- **THEN** o "track" deve ter um fundo transparente ou cinza com uma borda visível.
- **AND** o "thumb" deve ser menor (ex: 16x16px) e centralizado verticalmente à esquerda.

#### Scenario: Visualizando um Toggle Ativo

- **WHEN** um toggle é alternado para o estado `true` (ligado).
- **THEN** o "track" deve preencher com a cor de ativação (ex: primária) sem borda.
- **AND** o "thumb" deve expandir de tamanho (ex: 24x24px) e deslizar para a direita.
- **AND** a transição de cor, tamanho e posição deve ser animada suavemente.

### Requirement: Settings Layout Width

A página de configurações ("Mais ações") DEVE ter uma largura de contêiner otimizada para desktop.

- **WHEN** a tela for maior que 600px (desktop).
- **THEN** o contêiner principal da página deve ter uma largura máxima (`max-width`) de 700px.

#### Scenario: Visualizando em Desktop

- **WHEN** o usuário acessa a página de "Mais ações" em um monitor desktop.
- **THEN** o contêiner centralizado deve se expandir até 700px.

### Requirement: Settings Item Density

Os itens de configuração (SettingsItem) DEVEM ter uma altura mínima maior para melhorar a interatividade e a clareza visual.

- **WHEN** um `SettingsItem` é renderizado.
- **THEN** ele DEVE tener uma altura mínima (`min-height`) de 60px.

#### Scenario: Renderizando Item de Configuração

- **WHEN** o componente `SettingsItem` é montado na tela.
- **THEN** ele deve ocupar no mínimo 60px de altura vertical, independentemente do conteúdo interno.

### Requirement: Interactive State Feedback

- **GIVEN** a `SettingsItem` with `:clickable="true"`.
- **WHEN** the mouse enters its area.
- **THEN** it should exhibit a background change to `rgba(0,0,0,0.03)` (or light grey).

### Requirement: Static State Feedback

- **GIVEN** a `SettingsItem` with `:clickable="false"`.
- **WHEN** the mouse enters its area.
- **THEN** its background should NOT change.
- **AND** its cursor should be the default arrow, NOT the pointer.

### Requirement: Dark Mode Integrity

- **GIVEN** the application is in dark mode.
- **WHEN** hovering a clickable `SettingsItem`.
- **THEN** it should use `rgba(255, 255, 255, 0.05)` for its hover background.

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
- **AND** o store de tema deve carregar sem referências ao Material You
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
