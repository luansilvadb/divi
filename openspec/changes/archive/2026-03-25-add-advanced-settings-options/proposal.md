# Proposal: Add Advanced Settings Options

## Motivation
Expand the `AdvancedSettingsPage.vue` with additional configuration options as shown in the provided design reference. This will improve the application's flexibility and user preferences.

## Impact
- **UI**: `src/pages/AdvancedSettingsPage.vue` will be fully updated to include the new settings items and sections.
- **Logic**: New state variables (refs) and potentially a store persistence layer for these settings will be added.

## Requirements
The following settings must be implemented:
1.  **Top Section (General/Style)**:
    - **Fonte**: Icon `font_download`, Title "Fonte", Side: Badge "Padrão".
    - **Animações**: Icon `animation`, Title "Animações", Caption "Desativar animações pode melhorar o desempenho", Side: Select value "Todos".
    - **Animação numérica**: Icon `123`, Title "Animação numérica", Side: Select value "Conte".
    - **Aumentar o contraste de texto**: Icon `contrast`, Title "Aumentar o contraste de texto", Caption "Aumentar o contraste de texto mais leve", Side: Toggle.
2.  **Transações Section**:
    - **Transações de pagamento automático**: Icon `check_circle`, Title "Transações de pagamento automático", Caption "Marque as transações vencidas conforme pago", Side: (Custom) Check icon.
    - **Data de pagamento**: Icon `calendar_today`, Title "Data de pagamento", Side: Select value "Data atual".
    - **Data Banner Total**: Icon `view_headline`, Title "Data Banner Total", Side: Select value "Total do dia".
    - **Resumo dos gastos mensais**: Icon `scale`, Title "Resumo dos gastos mensais", Caption "Transações Página Banner de Fluxo de Caixa", Side: Toggle.
3.  **Contas Section**:
    - **Rótulo da conta**: Icon `label`, Title "Rótulo da conta", Caption "Adicionar rótulo de conta para todas as transações", Side: Toggle.
    - **Taxas de câmbio**: Icon `currency_exchange`, Title "Taxas de câmbio", Side: Chevron right.
    - **Moeda primária**: Icon `account_balance_wallet`, Title "Moeda primária", Side: Row with badge "BRL" and chevron.
4.  **Orçamentos Section**:
    - **Tipo total do orçamento**: Icon `fullscreen_exit`, Title "Tipo total do orçamento", Caption "Restante total".
