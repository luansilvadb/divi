# Tasks: Add Advanced Settings Options

## 1. Setup State and Inputs
- [x] 1.1 Add reactive `ref` variables for new settings: `fontePadrao`, `animacoesStatus`, `animacaoNumerica`, `contrasteTexto`, `transacoesAuto`, `dataPagamento`, `dataBannerTotal`, `resumoGastos`, `rotuloConta`, `moedaPrimaria`.
- [x] 1.2 Update existing refs if necessary to align with design naming.

## 2. Update Style Section (Top)
- [x] 2.1 Add "Fonte" item: icon `font_download`, title "Fonte", side template with `q-badge` labeled "Padrão".
- [x] 2.2 Add "Animações" item: icon `animation`, title "Animações", caption "Desativar animações pode melhorar o desempenho", side template with `BaseSelect` for `animacoesStatus`.
- [x] 2.3 Add "Animação numérica" item: icon `123`, title "Animação numérica", side template with `BaseSelect` for `animacaoNumerica`.
- [x] 2.4 Add "Aumentar o contraste de texto" item: icon `contrast`, title "Aumentar o contraste de texto", caption "Aumentar o contraste de texto mais leve", side template with `q-toggle`.

## 3. Update Transações Section
- [x] 3.1 Update "TRANSAÇÕES" section items:
    - Add "Transações de pagamento automático" with icon `check_circle`, caption "Marque as transações vencidas conforme pago", and a check icon on the right side.
    - Add "Data de pagamento" with icon `calendar_today`, and `BaseSelect` for `dataPagamento`.
    - Add "Data Banner Total" with icon `view_headline`, and `BaseSelect` for `dataBannerTotal`.
    - Add "Resumo dos gastos mensais" with icon `scale`, caption "Transações Página Banner de Fluxo de Caixa", and `q-toggle`.

## 4. Add Contas Section
- [x] 4.1 Create "CONTAS" category header and `section-card`.
- [x] 4.2 Add "Rótulo da conta" with icon `label`, caption "Adicionar rótulo de conta para todas as transações", and `q-toggle`.
- [x] 4.3 Add "Taxas de câmbio" with icon `currency_exchange` and chevron.
- [x] 4.4 Add "Moeda primária" with icon `account_balance_wallet`, side row with `q-badge` labeled "BRL" and chevron.

## 5. Add Orçamentos Section
- [x] 5.1 Create "ORÇAMENTOS" category header and `section-card`.
- [x] 5.2 Add "Tipo total do orçamento" with icon `fullscreen_exit`, and caption "Restante total".

## 6. Final Polish
- [x] 6.1 Ensure all icons match the image reference (Material Icons).
- [x] 6.2 Verify that all sections are wrapped in `Motion` for entry animations.
- [x] 6.3 Test responsiveness and scroll behavior.
