## Why

O recurso "Material You" (tema dinâmico) na tela de configurações está gerando complexidade desnecessária no código e na experiência do usuário. Removê-lo simplificará a interface de personalização de tema, reduzindo a curva de aprendizado e mantendo apenas as opções essenciais (Cor de destaque e Modo de tema).

## What Changes

- **Remover completamente** o toggle "Material You" da tela de configurações
- **Remover** toda a lógica de processamento de cores dinâmicas Material You
- **Remover** dependências e código morto relacionados ao Material You
- **Limpar** estilos CSS específicos do Material You
- **Simplificar** o store de tema removendo estado e ações do Material You

## Capabilities

### New Capabilities

<!-- Nenhuma capacidade nova será criada -->

### Modified Capabilities

- `settings-management`: Remover requisito de "Material You" (tema dinâmico) da seção de personalização visual

## Impact

- **UI**: Tela de configurações (MorePage/Settings)
- **Store**: Pinia theme store
- **Componentes**: SettingsItem, ThemeSection
- **Estilos**: SCSS/CSS relacionados a paletas dinâmicas
- **Utils**: Funções de geração de cores Material You
