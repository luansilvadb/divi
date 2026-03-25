## 1. Remover UI do Material You

- [x] 1.1 Remover SettingsItem "Material You" de MoreActionsPage.vue (linhas 41-48)
- [x] 1.2 Remover computed property `materialYou` de MoreActionsPage.vue (linhas 169-172)
- [x] 1.3 Limpar estilos CSS relacionados ao Material You em MoreActionsPage.vue (linhas 204-207 e 234-237)

## 2. Limpar Store de UI

- [x] 2.1 Remover propriedade `materialYou` do state em ui.ts (linha 10)
- [x] 2.2 Remover propriedade `dynamicTheme` do state em ui.ts (linha 12)
- [x] 2.3 Remover action `setMaterialYou` em ui.ts (linhas 25-29)
- [x] 2.4 Remover action `refreshDynamicTheme` em ui.ts (linhas 36-42)
- [x] 2.5 Atualizar chamada em `setAccentColor` para não chamar `refreshDynamicTheme` (linha 34)

## 3. Remover Utilitários de Tema

- [x] 3.1 Remover função `generateThemeFromHex` de theme.ts
- [x] 3.2 Remover função `schemeToHex` de theme.ts
- [x] 3.3 Remover função `toKebabCase` de theme.ts
- [x] 3.4 Remover importações não utilizadas de `@material/material-color-utilities`
- [x] 3.5 Remover interface `DynamicScheme` de theme.ts

## 4. Limpar Estado Persistido

- [x] 4.1 Verificar localStorage por chave 'materialYou' no App.vue ou boot files
- [x] 4.2 Remover qualquer migração ou leitura de estado 'materialYou' persistido

## 5. Verificação Final

- [x] 5.1 Buscar por "materialYou" no src/ para garantir que não há referências remanescentes
- [x] 5.2 Buscar por "Material You" em comentários e strings
- [x] 5.3 Buscar por "md-sys-color" em estilos
- [x] 5.4 Verificar se o build compila sem erros
- [x] 5.5 Testar navegação para MoreActionsPage para garantir que não há erros de runtime