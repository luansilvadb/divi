## Context

Atualmente o `SettingsItem` de "Modo de tema" em `MoreActionsPage.vue` possui `clickable="false"` para exibir um `q-select` no slot `side`. O `q-select` funciona, mas não há indicador visual claro de que é um dropdown interativo. O usuário precisa clicar diretamente na área do select para abrir as opções, o que não é intuitivo.

## Goals / Non-Goals

**Goals:**

- Abrir o dropdown automaticamente quando o usuário clicar em qualquer parte do item "Modo de tema"
- Adicionar indicador visual de dropdown (ícone de seta) para melhorar descoberta
- Manter o comportamento existente do `q-select` (seleção, emissão de eventos)

**Non-Goals:**

- Alterar a aparência das opções do dropdown
- Modificar outros itens de configuração
- Alterar a lógica de persistência do tema

## Decisions

### Decisão 1: Abrir dropdown programaticamente via ref

**Escolha**: Usar template ref para obter referência do `q-select` e chamar `showPopup()` no clique do SettingsItem.

**Alternativas consideradas**:

1. **Eventos customizados no SettingsItem**: Requer modificar o componente base para emitir eventos de clique adicionais. Mais complexo.
2. **Wrapper div com @click**: Funciona, mas menos idiomático no Vue/Quasar.

**Racional**: A abordagem com template ref é simples, não requer mudanças no `SettingsItem.vue`, e aproveita a API nativa do Quasar para controle programático do select.

### Decisão 2: Adicionar ícone de indicador de dropdown

**Escolha**: Adicionar ícone `expand_more` ao lado do select atual.

**Alternativas consideradas**:

1. **Usar prop `dropdown-icon` do q-select**: O ícone ficaria dentro do select, mas o select é borderless e minimal.
2. **Modificar o componente SettingsItem**: Adicionar prop genérica para ícone de dropdown. Overkill para uma mudança pontual.

**Racional**: Adicionar o ícone externamente mantém a solução contida no escopo da mudança e não afeta outros usos do SettingsItem.

## Risks / Trade-offs

- **Ref nulo antes da montagem**: Garantir que o clique só seja processado após o componente estar montado. Mitigação: usar `v-if` ou verificar se ref existe antes de chamar `showPopup()`.
- **Cliques duplos**: O clique no select também abre o dropdown. Mitigação: usar `@click.stop` no select ou verificar se o dropdown já está aberto.
