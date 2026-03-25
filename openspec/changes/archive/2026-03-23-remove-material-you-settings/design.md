## Context

O projeto Divi utiliza Quasar Framework com Vue 3 Composition API, TypeScript, Pinia para state management e segue Clean Architecture + DDD + Atomic Design. A tela de configurações atualmente possui um toggle "Material You" que permite tema dinâmico baseado em cores do sistema Android.

## Goals / Non-Goals

**Goals:**

- Remover completamente a funcionalidade Material You da UI
- Limpar todo o código relacionado (stores, componentes, utilitários, estilos)
- Simplificar a experiência de personalização de tema

**Non-Goals:**

- Não alterar outras funcionalidades de tema (cor de destaque, modo claro/escuro)
- Não modificar a estrutura de pastas existente
- Não adicionar novas funcionalidades de tema

## Decisions

**Decisão**: Remover completamente vs deprecar gradualmente

- **Escolhido**: Remoção completa
- **Racional**: O Material You não é essencial para o funcionamento do app e sua remoção simplifica o codebase
- **Alternativa**: Feature flag - rejeitada pois adiciona complexidade desnecessária

**Decisão**: Ordem de remoção

1. Componentes Vue (UI) primeiro
2. Stores e lógica de negócio
3. Utilitários e helpers
4. Estilos CSS/SCSS
5. Testes relacionados

**Decisão**: Tratamento de estado persistido

- Verificar localStorage/sessionStorage por chaves relacionadas ao Material You
- Remover ou migrar estado se necessário

## Risks / Trade-offs

**[Risco]** Usuários que tinham Material You ativado podem ver mudança abrupta na interface
→ **Mitigação**: O Material You será simplesmente desativado, voltando para o tema padrão

**[Risco]** Quebra de referências em outros módulos
→ **Mitigação**: Busca completa por "materialYou", "material-you", "dynamicColor" no codebase antes da remoção

**[Risco]** Estilos CSS órfãos
→ **Mitigação**: Verificar todas as classes CSS relacionadas e remover se não utilizadas em outros contextos
