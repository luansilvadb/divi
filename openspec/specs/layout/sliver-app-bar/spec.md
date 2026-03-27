# SliverAppBar Specification

## Requirements

### Requirement: Comportamento Pinned
O componente SliverAppBar DEVE permanecer fixo no topo da viewport quando a propriedade `pinned` for verdadeira, mesmo se o espaçador interno estiver desativado.

- **WHEN** `pinned` é `true`.
- **THEN** a SliverAppBar deve manter sua altura mínima (`collapsedHeight`) e permanecer visível no topo da viewport através de `position: sticky`.

#### Scenario: Fixação em páginas de layout flexível (ex: MoreActionsPage)
- **WHEN** a página utiliza uma `scroll-container` interna personalizada para gerenciar o overflow.
- **THEN** o `SliverAppBar` DEVE receber explicitamente o `scroll-target` desse container para garantir que a fixação e os efeitos de sombra funcionem corretamente.

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
O componente SliverAppBar DEVE obter seus valores de progresso (`progress`) e deslocamento (`visualOffset`) através de um composable especializado (`useSliverEffect`), isolando a lógica de cálculo da camada de apresentação. O composable DEVE suportar a detecção automática do container de scroll (ancestral mais próximo) ou aceitar um `scrollTarget` explícito para garantir a precisão dos cálculos em layouts complexos.

#### Scenario: Reutilização de Lógica
- **WHEN** o componente for montado
- **THEN** ele deve instanciar o `useSliverEffect` passando os parâmetros de altura (`expandedHeight`, `collapsedHeight`) e reagir aos valores retornados.

#### Scenario: Detecção de Scroll Target
- **WHEN** o componente é montado sem um `scrollTarget` explícito
- **THEN** o `useSliverEffect` deve identificar o container de scroll ancestral (buscando propriedades como `overflow: auto`, `scroll` ou `overlay`) ou utilizar `window` como fallback.

### Requirement: Controle de Espaçamento Estrutural
O componente SliverAppBar DEVE fornecer uma forma de desativar seu espaçador interno (`sliver-spacer`) para evitar duplicação de space quando utilizado dentro de containers que já gerenciam o fluxo de conteúdo ou possuem scroll interno próprio.

#### Scenario: Uso com Espaçador Desativado
- **WHEN** a propriedade `show-spacer` for definida como `false`
- **THEN** o componente não deve renderizar o elemento `.sliver-spacer`, permitindo que o conteúdo seguinte comece imediatamente abaixo da área expandida da barra ou conforme definido pelo container pai.

### Requirement: Estilização Dinâmica via CSS Variables
O componente SliverAppBar DEVE utilizar CSS Variables para aplicar transformações dinâmicas (translate, opacity, clip-path) baseadas no estado do scroll, reduzindo a complexidade do template e melhorando a legibilidade.

#### Scenario: Transição Fluida
- **WHEN** o valor da variável CSS `--sliver-p` (progress) for atualizado
- **THEN** os elementos internos vinculados a essa variável devem aplicar suas transformações de escala e opacidade via CSS puro.

### Requirement: Attribute Inheritance and Silence
- **WHEN** using `SliverAppBar`.
- **THEN** the component MUST NOT emit browser console warnings regarding "Extraneous non-props attributes (class) were passed to component".
- **THEN** custom attributes passed by a parent (e.g. `class` or `id`) MUST be explicitly bound to the `.sliver-app-bar` root DOM element.
- **THEN** any internal child elements (such as the `sliver-spacer`) MUST remain isolated from these parent-passed attributes to avoid visual regression or double-styling.

### Requirement: Navigation and Back Button Support
O componente SliverAppBar DEVE oferecer suporte nativo para navegação através de um botão de retorno opcional e emissão de eventos.

#### Capability: Conditional Back Button Display
- **GIVEN** A `SliverAppBar` component.
- **WHEN** The `back-button` prop is set to `true`.
- **THEN** An icon button with code `arrow_back` must be visible in the navigation area (start of the header row).

#### Capability: Back Action Emission
- **GIVEN** The back button is visible.
- **WHEN** The user clicks the back button.
- **THEN** A `back` event must be emitted by the `SliverAppBar` component to be handled by the parent view.

#### Capability: Navigation Slot Co-existence
- **GIVEN** Partials or custom navigation are provided via the `navigation` slot.
- **WHEN** The `back-button` prop is also `true`.
- **THEN** The slot content must co-exist with the default back button, typically appearing immediately after it.

