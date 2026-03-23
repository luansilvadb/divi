## Why

A tela de configurações ("Mais ações") está atualmente limitada a 600px de largura, o que resulta em um espaço subutilizado em telas de desktop. Além disso, a densidade visual dos itens de configuração pode ser melhorada para proporcionar uma experiência mais "premium" e com maior área de clique, facilitando a interação tanto em desktop quanto em dispositivos móveis.

## What Changes

- **Largura do Container**: Aumentar a largura máxima do container da página de configurações de 600px para 700px.
- **Densidade Visual**: Ajustar a altura mínima (`min-height`) dos itens de configuração (`SettingsItem`) de 48px para 60px.
- **Espaçamento**: Refinar o espaçamento interno para acomodar a nova altura e manter o equilíbrio visual.

## Capabilities

### New Capabilities
- Nenhuma.

### Modified Capabilities
- `settings-management`: Atualizar os requisitos de layout para refletir a nova largura do container e a densidade dos itens da lista.

## Impact

- **Componentes**: `src/components/molecules/SettingsItem.vue` (ajuste de altura).
- **Páginas**: `src/pages/MoreActionsPage.vue` (ajuste de largura do container).
- **UX**: Melhoria na legibilidade e facilidade de clique em telas maiores e dispositivos touch.
