## Why

O item "Modo de tema" em formato de dropdown na tela de Configuracoes gera uma interacao generica e com baixa previsibilidade visual para o usuario. Refatorar para uma interface de selecao mais explicita aumenta clareza, reduz friccao de escolha e melhora consistencia com o restante da pagina.

## What Changes

- Substituir a interacao principal de "Modo de tema" de dropdown por uma interface embutida com opcoes visiveis e selecionaveis diretamente na secao de Configuracoes.
- Exibir opcoes Claro, Escuro e Sistema em um formato de escolha visual (ex.: radio cards/segmented cards), com estado ativo evidente.
- Manter comportamento funcional atual de aplicacao imediata do tema ao selecionar uma opcao.
- Ajustar acessibilidade e navegacao por teclado para o novo componente de selecao.
- Atualizar a especificacao para remover dependencia comportamental de abertura de dropdown ao clicar no item.

## Capabilities

### New Capabilities
- `theme-mode-inline-selector`: Selecao de modo de tema inline na tela de Configuracoes com opcoes sempre visiveis.

### Modified Capabilities
- `settings-management`: Requisitos de "Modo de tema" deixam de depender de dropdown e passam a exigir seletor inline.
- `theme-mode-selector`: Requisitos visuais/comportamentais do seletor sao atualizados de trigger+menu para grupo de opcoes embutido.
- `theme-dropdown-interaction`: Requisitos de interacao por dropdown no item "Modo de tema" sao substituidos pelo novo padrao de interacao.

## Impact

- UI de Configuracoes (secao Tema) e componente de item de configuracao relacionado ao modo de tema.
- Possivel refatoracao dos componentes de selecao de tema e estilos associados.
- Nenhuma mudanca esperada em regras de negocio de persistencia/aplicacao de tema; impacto principal em UX/UI e acessibilidade.
