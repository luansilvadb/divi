# Proposal: Refatoração de Arquitetura, Densidade e Escalabilidade

## Summary
Este documento propõe uma refatoração estrutural profunda do projeto Divi para alinhar a implementação atual com os guardrails definidos no `openspec/config.yaml`. O foco é remover o boilerplate inicial do Quasar, estabelecer uma camada de serviços isolada (Clean Architecture + DDD) e reorganizar a UI seguindo os princípios de Atomic Design.

## Motivation
Atualmente, o projeto encontra-se em estado de boilerplate ("gordura"), o que impede o crescimento escalável e viola diretrizes críticas de arquitetura:
1. **Violação de SRP**: Componentes como `DesktopSidebar.vue` excedem o limite de 150 linhas.
2. **Falta de Isolamento**: O Supabase não possui uma camada de abstração (ACL), estando ausente na estrutura atual apesar de ser obrigatório.
3. **Desorganização de UI**: Os componentes estão misturados na raiz de `src/components`, dificultando a manutenção em larga escala.
4. **Ineficiência**: Uso de stores de exemplo (`example-store.ts`) e componentes genéricos que não pertencem ao domínio financeiro.

## Approach
A refatoração seguirá os seguintes eixos:
1. **Purga de Boilerplate**: Remoção completa de arquivos de exemplo (`ExampleComponent.vue`, `EssentialLink.vue`, `example-store.ts`).
2. **Implantação de Camada de Serviços**: Criação de `src/core/services` (interfaces) e `src/services/supabase` (implementação), garantindo inversão de controle via boot do Quasar.
3. **Densidade via Composables**: Extração de lógica de navegação e estado complexo para composables reutilizáveis em `src/composables`.
4. **Estrutura Atômica**: Reorganização de `src/components` em `atoms`, `molecules` e `organisms`.
5. **Divisão de Componentes Monolíticos**: Split do `DesktopSidebar.vue` para respeitar o limite de 150 linhas.

## Impact
- **src/components/**: Reestruturação completa e deleção de arquivos legados.
- **src/stores/**: Substituição por stores de domínio (Auth, Transações).
- **src/services/**: Novo diretório para isolamento de infraestrutura.
- **src/pages/**: Simplificação das views (Thin Views).
- **quasar.variables.scss**: Centralização de tokens de design.
