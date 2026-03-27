# Specs: Advanced Settings UI

## ADDED Requirements

### Requirement: Fonte
- **WHEN** user loads the page
- **THEN** they should see an item with icon "font_download", title "Fonte", and badge "Padrão" on the right.

### Requirement: Animações
- **WHEN** browsing general style
- **THEN** they should see "Animações" with title and subtitle "Desativar animações pode melhorar o desempenho", plus a dropdown set to "Todos".

### Requirement: Animação numérica
- **WHEN** browsing general style
- **THEN** they should see "Animação numérica" with dropdown "Conte".

### Requirement: Aumentar o contraste de texto
- **WHEN** browsing style
- **THEN** a "Aumentar o contraste de texto" switch with description "Aumentar o contraste de texto mais leve" should be present.

### Requirement: Transações Transformed
- **WHEN** in the "Transações" section
- **THEN** it should include:
    - **Transações de pagamento automático**: icon "check_circle", title "Transações de pagamento automático", caption "Marque as transações vencidas conforme pago".
    - **Data de pagamento**: title "Data de pagamento", dropdown "Data atual".
    - **Data Banner Total**: title "Data Banner Total", dropdown "Total do dia".
    - **Resumo dos gastos mensais**: Switch, caption "Transações Página Banner de Fluxo de Caixa".

### Requirement: Contas Section
- **WHEN** scrolled to bottom
- **THEN** a "Contas" section header should lead to items:
    - **Rótulo da conta**: Switch, caption "Adicionar rótulo de conta para todas as transações".
    - **Taxas de câmbio**: Clickable link with chevron.
    - **Moeda primária**: Row with "BRL" badge and chevron.

### Requirement: Orçamentos Section
- **WHEN** at the end
- **THEN** an "Orçamentos" header should contain:
    - **Tipo total do orçamento**: Title and "Restante total" caption.
