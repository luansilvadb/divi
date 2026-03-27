# Proposta: Refatoração da UI de Configurações Avançadas

## Objetivo
Refatorar a página `AdvancedSettingsPage.vue` para que ela utilize o sistema de componentes padronizado e a estética visual da `MoreActionsPage.vue`. Isso inclui o uso de componentes reutilizáveis, ajuste de tipografia, cores e sombras, garantindo uma transição fluida e consistente entre as telas de configurações.

## Contexto
Atualmente, a `AdvancedSettingsPage.vue` utiliza estilos manuais (`settings-item-row`) e cores de ícones que divergem do padrão estabelecido na `MoreActionsPage.vue`. Além disso, a transição "Hero" (expansão) pode ser melhorada ao vincular corretamente os títulos e ícones.

## Escopo
- **Componentização:** Substituir o uso de `div.settings-item-row` pelo componente `SettingsItem`.
- **Estilização:** Ajustar estilos de `category-header` para incluir o espaçamento de caracteres (`0.1em`) e cores de texto mais sutis (`grey-7`/`grey-5`).
- **Standardização:** Uniformizar cores de ícones para `grey-7`.
- **Layout:** Ajustar a largura máxima do container para `700px` para consistência com as demais páginas de ação.
- **Refinamento de Transição:** Adicionar `layoutId="settings-hero-title"` ao título da AppBar para uma transição fluida a partir do card "Mais opções".

## Não Objetivos
- Alterar a lógica de negócio ou funcionamento das configurações.
- Introduzir novas funcionalidades de configurações no momento.

## Riscos e Incertezas
- A integração com a animação `Motion` deve ser testada para garantir que o `SettingsItem` (baseado em `q-item`) responda bem ao layout expansion.
