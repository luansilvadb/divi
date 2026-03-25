## 1. Adicionar referência ao q-select

- [x] 1.1 Adicionar template ref `themeSelect` ao componente q-select de "Modo de tema" em MoreActionsPage.vue

## 2. Implementar abertura programática do dropdown

- [x] 2.1 Remover prop `clickable="false"` do SettingsItem de "Modo de tema"
- [x] 2.2 Adicionar handler `@click` ao SettingsItem que chama `themeSelect.showPopup()`
- [x] 2.3 Adicionar verificação para evitar erro se ref for nulo

## 3. Adicionar indicador visual de dropdown

- [x] 3.1 Adicionar ícone `expand_more` ao lado do q-select no slot side
- [x] 3.2 Estilizar ícone para indicar visualmente a presença de dropdown

## 4. Verificação e testes manuais

- [x] 4.1 Verificar que o dropdown abre ao clicar em qualquer parte do item
- [x] 4.2 Verificar que a seleção de tema funciona corretamente
- [x] 4.3 Verificar que o indicador visual está visível em modo claro e escuro
