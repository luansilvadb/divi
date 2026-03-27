# Tasks: Refatoração da UI de Configurações Avançadas

## Preparação
- [x] Revisar `AdvancedSettingsPage.vue` e identificar todos os itens que precisam de substituição.
- [x] Verificar a importação do `SettingsItem` (importado de `src/components/molecules/SettingsItem.vue`).

## Implementação UI
- [x] Atualizar o `SliverAppBar` para 160px de altura expandida.
- [x] Aplicar `layoutId="settings-hero-title"` ao `Motion` do título.
- [x] Substituir o container `.settings-content-wrapper` pela classe `.max-width-container` ou aplicar `max-width: 700px`.
- [x] Redesenhar as seções:
    - [x] Atualizar o estilo da categoria (cor, peso e letter-spacing).
    - [x] Redefinir as `.section-card` com sombras e raios de borda corretos.
- [x] Substituir cada `div.settings-item-row` por `SettingsItem`:
    - [x] Mapear o ícone para o slot de ícone ou prop.
    - [x] Mapear o componente interativo (`BaseSelect`, `q-toggle`) para o slot `side`.

## Verificação e Polimento
- [x] Testar a transição entre `MoreActionsPage` e `AdvancedSettingsPage`.
- [x] Validar o comportamento em modo escuro (Dark Mode).
- [x] Garantir que o ripple effect esteja presente nos itens interativos.
- [x] Verificar se as animações de entrada dos itens (`Staggered Entrance`) estão preservadas.
