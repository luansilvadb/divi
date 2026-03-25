## Why

O seletor de tema atual usa um `q-select` nativo que destoa visualmente do restante da interface premium do app, com bordas aparentes e pouca integração com o estilo dos cards arredondados. Redesenhar esse controle agora melhora a consistencia visual da tela de configuracoes e reforca a percepcao de qualidade.

## What Changes

- Criar um novo componente `ThemeModeSelector` com estilo de pill button para substituir o `q-select` atual.
- Implementar dropdown conectado ao pill com cantos arredondados (16px), sombras em camadas e animacao de abertura com scale + fade.
- Adicionar icones descritivos por modo de tema (claro, escuro e automatico), com estado selecionado destacado e check discreto.
- Integrar o novo componente na tela `MoreActionsPage.vue`, mantendo comportamento funcional atual de persistencia e troca de tema.
- Garantir consistencia visual e de contraste em tema claro e escuro, com interacao touch-friendly em mobile.

## Capabilities

### New Capabilities

- `theme-mode-selector`: Seletor de modo de tema com UI premium, dropdown animado e estados visuais refinados.

### Modified Capabilities

- (none)

## Impact

- Arquivos afetados: `src/pages/MoreActionsPage.vue`, novo `src/components/molecules/ThemeModeSelector.vue` e possiveis ajustes de estilo compartilhado.
- Dependencias: Quasar (`q-btn`, `q-menu`, `q-item`, `q-icon`) e `uiStore` (Pinia) ja existentes no projeto.
- Sem alteracao de API externa ou regra de negocio; mudanca focada em experiencia visual e consistencia do design system.
