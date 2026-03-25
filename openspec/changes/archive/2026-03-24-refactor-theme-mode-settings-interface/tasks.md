## 1. Planejamento e alinhamento de UX

- [x] 1.1 Validar o layout final do seletor inline (horizontal, vertical ou responsivo por breakpoint) para "Modo de tema"
- [x] 1.2 Confirmar nomenclatura final da opcao de sincronizacao automatica ("Auto" ou "Sistema") para manter consistencia de produto

## 2. Refatoracao da interface de Configuracoes

- [x] 2.1 Substituir o componente/fluxo de dropdown de "Modo de tema" por um grupo inline de selecao unica com tres opcoes visiveis
- [x] 2.2 Implementar estado visual selecionado, hover e foco visivel em conformidade com a linguagem visual atual da tela de Configuracoes
- [x] 2.3 Remover indicadores e comportamentos exclusivos de dropdown (ex.: seta de abertura) no item "Modo de tema"

## 3. Integracao funcional com gerenciamento de tema

- [x] 3.1 Conectar as opcoes inline ao fluxo existente de aplicacao imediata de tema sem alterar regras de negocio
- [x] 3.2 Garantir persistencia e restauracao do modo selecionado (Claro, Escuro, Sistema) no mesmo mecanismo atual

## 4. Acessibilidade e qualidade

- [x] 4.1 Garantir navegacao por teclado e semantica adequada de grupo de escolha unica no seletor inline
- [x] 4.2 Validar contraste e legibilidade dos estados do seletor em tema claro e escuro
- [ ] 4.3 Executar validacao de regressao da tela de Configuracoes em mobile e desktop, incluindo aplicacao instantanea do tema
