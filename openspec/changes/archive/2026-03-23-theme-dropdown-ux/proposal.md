## Why

Atualmente o dropdown de "Modo de tema" na página de Configurações exibe apenas o valor selecionado, sem feedback visual claro de que é um elemento interativo. Isso prejudica a descoberta da funcionalidade e a UX. O dropdown deve abrir automaticamente quando o usuário clica no item, sinalizando claramente que há opções disponíveis para seleção.

## What Changes

- O item "Modo de tema" em Configurações agora abre o dropdown automaticamente ao ser clicado
- Adiciona indicador visual de dropdown (seta para baixo) no lado direito do campo
- Remove `clickable="false"` do SettingsItem para permitir interação
- Adiciona ref para controlar abertura programática do q-select

## Capabilities

### New Capabilities

- `theme-dropdown-interaction`: Interação aprimorada do dropdown de tema que abre automaticamente ao clicar no item de configuração

### Modified Capabilities

- `settings-management`: Requisito de interação do dropdown de tema modificado para incluir abertura automática e indicador visual

## Impact

- **Arquivos afetados**: `src/pages/MoreActionsPage.vue`
- **Componentes**: `SettingsItem.vue` (uso), `q-select` (controle programático)
- **UX**: Melhoria na descoberta e usabilidade da seleção de tema
