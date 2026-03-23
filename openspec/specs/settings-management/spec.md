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
The system SHALL provide controls for "Cor de destaque" (Accent Color), "Material You" (dynamic), and "Modo de tema" (Light/Dark/Auto).
- **WHEN** "Modo de tema" is changed.
- **THEN** it MUST instantly apply the selected state (Light, Dark, or System Sync).

#### Scenario: Toggling Material You
- **WHEN** the user toggles the "Material You" switch.
- **THEN** the application colors must shift to reflect an expressive dynamic palette.

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
- **THEN** ele DEVE ter uma altura mínima (`min-height`) de 60px.

#### Scenario: Renderizando Item de Configuração
- **WHEN** o componente `SettingsItem` é montado na tela.
- **THEN** ele deve ocupar no mínimo 60px de altura vertical, independentemente do conteúdo interno.
