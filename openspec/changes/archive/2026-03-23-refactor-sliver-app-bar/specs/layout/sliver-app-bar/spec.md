## ADDED Requirements

### Requirement: Uso de Design Tokens Globais
O componente SliverAppBar DEVE resolver suas cores de fundo e sombra através de variáveis SCSS globais definidas em `src/css/quasar.variables.scss`, garantindo a consistência com o tema do projeto.

#### Scenario: Consistência de Tema
- **WHEN** o modo escuro for ativado ou desativado
- **THEN** o componente deve atualizar suas cores de fundo automaticamente baseando-se nas variáveis `$sliver-bg-light` e `$sliver-bg-dark` (ou equivalentes).

### Requirement: Gerenciamento de Estado via Composable
O componente SliverAppBar DEVE obter seus valores de progresso (`progress`) e deslocamento (`visualOffset`) através de um composable especializado (`useSliverEffect`), isolando a lógica de cálculo da camada de apresentação.

#### Scenario: Reutilização de Lógica
- **WHEN** o componente for montado
- **THEN** ele deve instanciar o `useSliverEffect` passando os parâmetros de altura (`expandedHeight`, `collapsedHeight`) e reagir aos valores retornados.

### Requirement: Estilização Dinâmica via CSS Variables
O componente SliverAppBar DEVE utilizar CSS Variables para aplicar transformações dinâmicas (translate, opacity, clip-path) baseadas no estado do scroll, reduzindo a complexidade do template e melhorando a legibilidade.

#### Scenario: Transição Fluida
- **WHEN** o valor da variável CSS `--sliver-p` (progress) for atualizado
- **THEN** os elementos internos vinculados a essa variável devem aplicar suas transformações de escala e opacidade via CSS puro.
