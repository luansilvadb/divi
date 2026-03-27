## 1. Refatoração do Composable useSliverEffect

- [x] 1.1 Implementar utilitário `findScrollParent` para detectar containers de scroll automaticamente
- [x] 1.2 Atualizar `useSliverEffect` para suportar detecção automática de container se `scrollTarget` não for provido
- [x] 1.3 Garantir reatividade no binding de eventos quando `scrollTarget` mudar

## 2. Melhorias no Componente SliverAppBar

- [x] 2.1 Adicionar propriedade `showSpacer` (boolean, default: true)
- [x] 2.2 Atualizar template para renderizar `.sliver-spacer` condicionalmente baseado em `showSpacer`
- [x] 2.3 Garantir que os estilos de `z-index` e `position: sticky` não causem efeitos colaterais sem o spacer

## 3. Ajustes nas Páginas

- [x] 3.1 Revisar `MoreActionsPage.vue` para confirmar se a detecção automática resolve o problema de pinned
- [x] 3.2 Atualizar `AdvancedSettingsPage.vue` para usar `show-spacer="false"`, eliminando a "gordura" no topo
- [x] 3.3 Remover hacks de overflow e styles absolutos redundantes em `AdvancedSettingsPage.vue` que tentavam contornar o problema do spacer

## 4. Validação e Testes

- [x] 4.1 Validar comportamento de colapso/expansão na `MoreActionsPage.vue`
- [x] 4.2 Validar alinhamento do conteúdo na `AdvancedSettingsPage.vue` (sem o spacer extra)
- [x] 4.3 Testar em modo Dark e Light para garantir integridade visual
