## Why

O seletor "Modo de tema" nas Configurações usa uma lista expansível com radio buttons que ocupa muito espaço vertical e exige que o usuário expanda para ver e selecionar a opção desejada. Um dropdown seria mais limpo e consistente com padrões de UI modernos.

## What Changes

- Substituir lista expansível de radio buttons por `q-select` (dropdown) no item "Modo de tema"
- Manter as três opções: Claro, Escuro, Auto
- Dropdown com estilo borderless para manter a estética clean do card
- Texto apenas nas opções (sem ícones)

## Capabilities

### New Capabilities

- `theme-mode-selector`: Interface de seleção de tema via dropdown

### Modified Capabilities

(nenhum)

## Impact

- **Arquivo afetado**: `src/pages/MoreActionsPage.vue`
- **Componente reutilizável**: `SettingsItem.vue` (suporte a dropdown no slot side)
- **Store**: `src/stores/ui.ts` (sem mudanças necessárias)
