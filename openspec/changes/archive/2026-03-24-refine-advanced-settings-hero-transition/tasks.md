# Tasks: Refine Advanced Settings Hero Transition

## 1. Configuração e Gatilho (MoreActionsPage)

- [x] 1.1 Atualizar a tag `Motion` do item "Mais opções" para incluir feedback de clique (`scale: 0.98` no `whileTap`).
- [x] 1.2 Configurar o objeto `:transition` para a transição de layout com `type: 'spring', stiffness: 300, damping: 30`.

## 2. Página de Destino (AdvancedSettingsPage)

- [x] 2.1 Atualizar a tag `Motion` com `layoutId="settings-hero-bg"` para usar a mesma configuração de `spring`.
- [x] 2.2 Replicar a configuração de mola para o `hero-icon` e `hero-title` para garantir consistência visual no Hero.
- [x] 2.3 Implementar comportamento de `initial` e `animate` nas seções de configuração para efeito de entrada (`y: 20` -> `y: 0`, `opacity: 0` -> `opacity: 1`).
- [x] 2.4 Adicionar delays escalonados a cada seção para o efeito de cascata (stagger).

## 3. Polimento e Verificação

- [x] 3.1 Testar a transição em modo Light e Dark.
- [x] 3.2 Verificar se o `overflow: visible` está servindo para evitar cortes durante o estiramento da mola.
- [x] 3.3 Ajustar a opacidade do `backdrop` para uma transição mais suave.
