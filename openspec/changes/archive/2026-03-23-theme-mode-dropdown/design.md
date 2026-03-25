## Context

Projeto Divi (app de controle financeiro) utilizando Quasar Framework + Vue 3. A página de Configurações (MoreActionsPage.vue) possui um item "Modo de tema" que atualmente usa uma lista expansível com radio buttons. O objetivo é substituir por um dropdown mais limpo e moderno.

**Estado atual:**

- Lista expansível com 3 radio buttons (Claro, Escuro, Auto)
- Usuário precisa expandir para ver/selecionar opção
- Ocupa ~12 linhas verticalmente quando expandido

## Goals / Non-Goals

**Goals:**

- Substituir lista de radio buttons por dropdown `q-select`
- Manter as três opções existentes (Claro, Escuro, Auto)
- UI mais limpa e intuitiva
- dropdown estilo borderless para integrar visualmente com o card

**Non-Goals:**

- Não adicionar ícones às opções (manter apenas texto)
- Não alterar comportamento funcional (store já suporta)
- Não modificar outras funcionalidades da página

## Decisions

1. **Usar `q-select` ao invés de `q-btn-dropdown`**
   - `q-select` é mais adequado para seleção de opções (não ações)
   - Já padrão no Quasar para inputs de seleção
   - Suporta nativamente `emit-value`, `map-options`, `borderless`

2. **Manter texto apenas (sem ícones)**
   - Conforme solicitado pelo usuário
   - Mantém UI mais limpa e consistente com outros elementos

3. **Estilo borderless**
   - Remove bordas padrões do select
   - Integra melhor com o card de configurações
   - visuals mais modernos

## Risks / Trade-offs

- **Risco**: Qselect pode não se alinhar perfeitamente com o layout do SettingsItem → Mitigation: Ajustar CSS se necessário
- **Trade-off**: Dropdown ocupa menos espaço vertical, mas oculta opções até abrir → Acceptable para este caso de uso
