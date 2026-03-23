# SliverAppBar Specification

## Requirements

### Requirement: Comportamento Pinned
O componente SliverAppBar DEVE permitir que o cabeçalho seja fixado no topo da página ao atingir sua altura mínima (`collapsedHeight`).

#### Scenario: Fixação ao rolar para baixo
- **WHEN** o usuário rola a página para baixo além da distância calculada de `expandedHeight - collapsedHeight`
- **THEN** a SliverAppBar deve manter sua altura mínima e permanecer visível no topo da viewport.

### Requirement: Comportamento Floating
O componente SliverAppBar DEVE revelar-se imediatamente quando o usuário iniciar um movimento de rolagem para cima, independente da profundidade atual do scroll na página, caso a propriedade `floating` esteja ativada.

#### Scenario: Revelação ao rolar para cima
- **WHEN** o usuário realiza um scroll para cima (delta negativo) enquanto a barra está contraída
- **THEN** a altura da SliverAppBar deve expandir-se proporcionalmente ao deslocamento do scroll até atingir o `expandedHeight`.

### Requirement: Comportamento Snap
O componente SliverAppBar DEVE magnetizar sua posição para o estado totalmente expandido ou totalmente contraído quando o usuário interromper a interação de scroll, caso a propriedade `snap` esteja ativada.

#### Scenario: Snap para expandido
- **WHEN** o usuário solta o scroll e a barra está com mais de 50% de sua área de expansão visível
- **THEN** a SliverAppBar deve animar suavemente até atingir a altura `expandedHeight`.

#### Scenario: Snap para contraído
- **WHEN** o usuário solta o scroll e a barra está com menos de 50% de sua área de expansão visível
- **THEN** a SliverAppBar deve animar suavemente até atingir a altura `collapsedHeight`.

### Requirement: Interpolação de Progresso de UI
O componente SliverAppBar DEVE expor uma variável de estado `progress` (variando de 0.0 a 1.0) que represente o percentual de contração da barra para permitir transformações visuais fluidas em slots de conteúdo.

#### Scenario: Reatividade do Título
- **WHEN** o valor da variável `progress` muda durante a rolagem
- **THEN** os elementos vinculados (como o título no FlexibleSpace) devem atualizar suas transformações CSS (scale, translate, opacity) de forma síncrona com o frame de animação.

### Requirement: Uso de Design Tokens Globais
O componente SliverAppBar DEVE resolver suas cores de fundo e sombra através de variáveis SCSS globais definidas em `quasar.variables.scss`, garantindo a consistência com o tema do projeto.

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
