## Context

O componente `q-toggle` do Quasar Framework segue nativamente as especificações do Material Design 2. Para modernizar a interface do aplicativo "Divi", é necessário atualizar a aparência desses toggles para corresponder às especificações do Material Design 3 (M3).

## Goals / Non-Goals

**Goals:**
- Aplicar o estilo Material 3 a todos os componentes `q-toggle` de forma global e consistente.
- Garantir que a área de clique e a transição (animação) permaneçam fluidas.
- Suportar tanto o tema claro quanto o escuro (dark mode).

**Non-Goals:**
- Alterar o comportamento funcional do `q-toggle` (v-model, eventos).
- Criar um componente Vue customizado do zero; o objetivo é estilizar o componente existente.

## Decisions

- **Sobrescrita CSS Global**: As modificações serão feitas no arquivo `src/css/app.scss`. Isso garante que qualquer novo `q-toggle` adicionado ao projeto herde o estilo M3 automaticamente, mantendo a consistência.
- **Estrutura do Toggle (M3)**:
  - O `.q-toggle__track` terá uma altura maior (aprox. 32px), largura maior (aprox. 52px) e `border-radius` completo.
  - O `.q-toggle__thumb` será posicionado *dentro* do track.
  - Quando "desligado" (unchecked), o track terá um fundo transparente (ou cinza claro) com uma borda visível, e o thumb será menor (ex: 16px).
  - Quando "ligado" (checked), o track receberá a cor primária (sem borda extra) e o thumb expandirá (ex: 24px) preenchendo quase todo o espaço vertical.
- **Transições**: As propriedades `width`, `height`, `transform` e `background-color` receberão transições suaves.

## Risks / Trade-offs

- **Atualizações do Quasar**: Futuras atualizações do Quasar que modifiquem a estrutura interna do DOM do `q-toggle` podem quebrar essa customização CSS.
  - *Mitigação*: Usar seletores CSS específicos (como `.q-toggle__track` e `.q-toggle__thumb`) que são estáveis na API do Quasar, e documentar a customização.
