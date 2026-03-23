## ADDED Requirements

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
