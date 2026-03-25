## Context

A pagina de Configuracoes ("Mais acoes") usa uma linguagem visual de baixa elevacao: cards com borda leve, sombra discreta e estados de hover contidos. O componente `ThemeModeSelector` atualmente usa trigger em formato pill, sombra em camadas e micro-movimento de lift, o que cria uma ruptura visual dentro do mesmo bloco de configuracoes.

A mudanca busca harmonizar o seletor com o restante da pagina sem alterar comportamento funcional (abertura do menu, selecao de modo e atualizacao do tema).

## Goals / Non-Goals

**Goals:**

- Reduzir discrepancia visual entre `ThemeModeSelector` e os componentes de settings.
- Padronizar trigger/menu/estados interativos com a hierarquia visual da pagina.
- Preservar acessibilidade basica (legibilidade, foco visivel, contraste em light/dark).
- Manter compatibilidade funcional com o fluxo atual de selecao de tema.

**Non-Goals:**

- Redesenhar toda a pagina de Configuracoes.
- Alterar regras de negocio de tema, stores Pinia ou i18n.
- Introduzir nova biblioteca de design tokens global nesta iteracao.

## Decisions

1. **Manter o componente e API atuais; ajustar apenas estilo e microinteracoes.**
   - Rationale: menor risco e menor superficie de mudanca; atende o problema de consistencia sem reescrever fluxo.
   - Alternatives considered:
     - Reescrever como `q-select`: descartado por potencial regressao funcional e visual fora do escopo.
     - Elevar visual de toda a tela ao nivel do dropdown atual: descartado por custo maior e perda da linguagem existente.

2. **Trocar trigger "pill premium" por controle discreto de configuracoes.**
   - Rationale: o item "Modo de tema" deve parecer um controle auxiliar, nao um CTA.
   - Alternatives considered:
     - Manter pill com ajustes minimos: melhora parcial, ainda tende a destoar.

3. **Reduzir elevacao do menu para nivel de superficie secundaria.**
   - Rationale: o menu deve ser legivel e destacavel sem competir com os cards da pagina.
   - Alternatives considered:
     - Sem sombra: pode prejudicar separacao da superficie em certos fundos.

4. **Preservar sinais de estado (check, item selecionado, focus-visible), com menor intensidade visual.**
   - Rationale: manter clareza de interacao sem excesso de contraste ou saturacao.
   - Alternatives considered:
     - Destacar apenas por cor no texto: pode reduzir escaneabilidade da selecao ativa.

## Risks / Trade-offs

- [Perda de "personalidade" do componente] -> Mitigacao: manter detalhes identitarios minimos (icone, chevron, active state) sem premium excessivo.
- [Contraste insuficiente em dark mode apos reduzir elevacao] -> Mitigacao: validar contraste de trigger, borda e item selecionado em ambos os temas.
- [Regressao visual em outras telas que reutilizam o componente] -> Mitigacao: revisar usos existentes e documentar se o componente passa a ser orientado ao contexto de settings.
- [Ajuste subjetivo de design sem criterio objetivo] -> Mitigacao: adotar criterios de aceite visuais claros (sem lift, sombra curta, raio medio, hierarquia preservada).

## Migration Plan

1. Aplicar os ajustes visuais no `ThemeModeSelector` mantendo estrutura e eventos.
2. Validar tela de Configuracoes em light/dark e breakpoints principais.
3. Confirmar que selecao de tema continua atualizando o estado atual sem alteracoes de logica.
4. Se necessario, rollback simples revertendo o estilo do componente (sem migracao de dados).

## Open Questions

- O componente `ThemeModeSelector` deve ser explicitamente "settings-only" ou continuar generico para uso em contextos futuros?
- Vale introduzir tokens de superficie locais da pagina (raio/sombra/borda) agora, ou deixar para uma padronizacao maior em outro change?
