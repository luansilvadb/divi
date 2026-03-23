# Tasks: Refatoração de Arquitetura, Densidade e Escalabilidade

## 1. Cleansing e Limpeza (Removing Fat)
- [x] 1.1 Remover `src/components/ExampleComponent.vue`.
- [x] 1.2 Remover `src/components/EssentialLink.vue`.
- [x] 1.3 Remover `src/components/models.ts`.
- [x] 1.4 Remover `src/stores/example-store.ts`.
- [x] 1.5 Atualizar `src/pages/IndexPage.vue` para remover referências ao `ExampleComponent`.

## 2. Core e Infraestrutura (Clean Architecture)
- [x] 2.1 Criar diretório `src/core/services` e definir interfaces (Ex: `AuthService`, `TransactionService`).
- [x] 2.2 Criar diretório `src/core/models` e definir entidades de domínio (Ex: `Transaction`, `Account`).
- [x] 2.3 Criar diretório `src/services/supabase` e implementar o ACL para os casos de uso básicos.
- [x] 2.4 Criar boot file `src/boot/services.ts` para realizar a Inversão de Controle (provide/inject).
- [x] 2.5 Registrar novo boot file em `quasar.config.ts`.

## 3. UI e Reorganização (Atomic Design)
- [x] 3.1 Criar estrutura de pastas em `src/components/`: `atoms/`, `molecules/`, `organisms/`, `templates/`.
- [x] 3.2 Migrar componentes de layout existentes para `organisms/layout/`.
- [x] 3.3 Criar Molecule `NavLink.vue` extraindo lógica de item de menu do Sidebar.
- [x] 3.4 Refatorar `DesktopSidebar.vue` para usar `NavLink.vue` e respeitar o limite de 150 linhas.
- [x] 3.5 Criar Composable `src/composables/useNavigation.ts` com a lógica de links e estados de sidebar.

## 4. Validação e Densidade
- [x] 4.1 Rodar `npm run lint` e garantir que todos os arquivos TS seguem SRP.
- [x] 4.2 Verificar se o `context` no `config.yaml` está sendo respeitado.
- [x] 4.3 Testar navegação mobile e desktop após a divisão dos componentes.
