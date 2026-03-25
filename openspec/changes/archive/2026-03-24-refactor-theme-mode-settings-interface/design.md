## Context

A tela de Configuracoes atualmente trata "Modo de tema" como uma interacao de dropdown. Embora funcional, esse padrao adiciona um passo de descoberta (abrir menu) e cria ambiguidade visual sobre estados disponiveis. O projeto usa Quasar + Vue 3 + TypeScript, com foco em consistencia de interface e requisitos de acessibilidade.

A mudanca proposta substitui o modelo trigger+dropdown por um seletor inline com opcoes visiveis (Claro, Escuro, Sistema), preservando a regra de negocio existente: aplicacao imediata do modo escolhido e uso do fluxo de gerenciamento de tema ja existente.

## Goals / Non-Goals

**Goals:**

- Tornar a escolha de tema mais explicita na propria secao de Configuracoes.
- Reduzir friccao de interacao removendo a necessidade de abrir dropdown para visualizar opcoes.
- Manter compatibilidade funcional com estado atual de tema, persistencia e aplicacao imediata.
- Melhorar acessibilidade por foco visivel, semantica de grupo de opcoes e navegacao por teclado.

**Non-Goals:**

- Alterar regras de negocio de tema (opcoes continuam Claro, Escuro e Sistema).
- Redesenhar a tela inteira de Configuracoes fora do item de modo de tema.
- Introduzir novos modos de tema ou personalizacao avancada de paleta.

## Decisions

1. Substituir dropdown por grupo inline de selecao unica

- Decisao: usar um grupo visual de opcoes selecionaveis diretamente no bloco de "Modo de tema".
- Racional: aumenta escaneabilidade e reduz interacoes ocultas.
- Alternativas consideradas:
  - Manter dropdown com melhorias visuais: melhora estetica, mas mantem friccao de descoberta.
  - Modal de selecao: adiciona etapa extra e interrompe fluxo da tela.

2. Preservar mecanismo atual de aplicacao de tema

- Decisao: a nova interface apenas muda camada de apresentacao/interacao; aplicacao e persistencia de tema continuam no fluxo existente.
- Racional: minimiza risco de regressao funcional e reduz esforco de migracao.
- Alternativas consideradas:
  - Reescrever gerenciamento de tema: alto risco e fora do escopo.

3. Tratar acessibilidade como requisito de primeira classe

- Decisao: o seletor inline deve expor semantica de grupo de escolha unica, foco visivel e suporte completo a teclado.
- Racional: a mudanca de componente nao pode reduzir usabilidade para leitores de tela e usuarios sem mouse.
- Alternativas consideradas:
  - Implementacao apenas visual: mais rapida, mas com risco de regressao de acessibilidade.

4. Adaptacao visual responsiva dentro do layout existente

- Decisao: manter o seletor integrado ao layout atual da secao Tema, com comportamento responsivo para mobile e desktop.
- Racional: evita quebra de padrao na pagina e reduz necessidade de alteracoes estruturais.
- Alternativas consideradas:
  - Novo container independente para tema: cria inconsistencia e potencial duplicidade de estilo.

## Risks / Trade-offs

- [Risco de regressao em fluxo de selecao] -> Mitigacao: preservar handlers e contratos existentes de aplicacao/persistencia, alterando apenas a camada de UI.
- [Risco de inconsistencias visuais entre temas claro/escuro] -> Mitigacao: definir estados visuais explicitos para padrao, hover, foco e selecionado em ambos os modos.
- [Risco de menor densidade de informacao em telas pequenas] -> Mitigacao: empilhar opcoes ou ajustar grid responsivo sem esconder opcoes.
- [Trade-off de maior ocupacao vertical em relacao ao dropdown] -> Mitigacao: usar componentes compactos e espacamento coerente com os demais itens de Configuracoes.

## Migration Plan

1. Introduzir o novo seletor inline no item "Modo de tema" mantendo chamadas ao fluxo atual de tema.
2. Remover gatilhos e estilos especificos de abertura de dropdown para esse item.
3. Validar navegacao por teclado, estados de foco e leitura por tecnologia assistiva.
4. Validar paridade funcional (Claro, Escuro, Sistema) e persistencia de escolha.
5. Monitorar regressao visual na tela de Configuracoes em mobile e desktop.

Rollback: reativar temporariamente o componente dropdown anterior caso surjam regresses criticas de UX/acessibilidade durante validacao.

## Open Questions

- Resolvido: o grupo inline sera adaptativo por breakpoint (horizontal em largura suficiente e empilhado no mobile).
- Resolvido: a opcao de sincronizacao automatica sera exibida como "Sistema" na UI.
- Resolvido: nesta iteracao o seletor permanece com texto + icone, sem mini-preview visual.
