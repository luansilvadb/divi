## MODIFIED Requirements

### Requirement: Visual Theme Customization

The system SHALL provide controls for "Cor de destaque" (Accent Color) and "Modo de tema" (Light/Dark/System) using an inline, always-visible selector for theme mode in Settings.

- **WHEN** "Modo de tema" is changed.
- **THEN** it MUST instantly apply the selected state (Light, Dark, or System Sync).

#### Scenario: Changing Theme Mode

- **WHEN** the user selects "Claro", "Escuro", or "Sistema" in the inline theme mode selector.
- **THEN** the application theme should immediately reflect the selected mode.

## REMOVED Requirements

### Requirement: Selecao de tema via dropdown
**Reason**: O padrao de dropdown para "Modo de tema" sera substituido por seletor inline para reduzir friccao e aumentar clareza.
**Migration**: Atualizar a UI de Configuracoes para renderizar opcoes de modo de tema visiveis diretamente no item, preservando o mesmo fluxo de aplicacao de tema.

O sistema SHALL permitir que o usuario selecione o modo de tema atraves de um dropdown na pagina de Configuracoes.

#### Scenario: Usuario seleciona tema Claro

- **WHEN** usuario abre Configuracoes e seleciona "Claro" no dropdown
- **THEN** o tema do aplicativo muda para Claro imediatamente

#### Scenario: Usuario seleciona tema Escuro

- **WHEN** usuario abre Configuracoes e seleciona "Escuro" no dropdown
- **THEN** o tema do aplicativo muda para Escuro imediatamente

#### Scenario: Usuario seleciona tema Auto

- **WHEN** usuario abre Configuracoes e seleciona "Auto" no dropdown
- **THEN** o tema do aplicativo segue as configuracoes do dispositivo

#### Scenario: Dropdown exibe opcoes corretas

- **WHEN** usuario visualiza o dropdown de tema
- **THEN** sao exibidas as tres opcoes: Claro, Escuro, Auto
