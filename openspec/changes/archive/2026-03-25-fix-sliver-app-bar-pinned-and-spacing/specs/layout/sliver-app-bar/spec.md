## MODIFIED Requirements

### Requirement: Gerenciamento de Estado via Composable
O componente SliverAppBar DEVE obter seus valores de progresso (`progress`) e deslocamento (`visualOffset`) através de um composable especializado (`useSliverEffect`), isolando a lógica de cálculo da camada de apresentação. O composable DEVE suportar a detecção automática do container de scroll (ancestral mais próximo) ou aceitar um `scrollTarget` explícito para garantir a precisão dos cálculos em layouts complexos.

#### Scenario: Reutilização de Lógica
- **WHEN** o componente for montado
- **THEN** ele deve instanciar o `useSliverEffect` passando os parâmetros de altura (`expandedHeight`, `collapsedHeight`) e reagir aos valores retornados.

#### Scenario: Detecção de Scroll Target
- **WHEN** o componente é montado sem um `scrollTarget` explícito
- **THEN** o `useSliverEffect` deve tentar identificar o container de scroll ancestral (ou `window`) para vincular os eventos de scroll.

## ADDED Requirements

### Requirement: Controle de Espaçamento Estrutural
O componente SliverAppBar DEVE fornecer uma forma de desativar seu espaçador interno (`sliver-spacer`) para evitar duplicação de espaço quando utilizado dentro de containers que já gerenciam o fluxo de conteúdo ou possuem scroll interno próprio.

#### Scenario: Uso com Espaçador Desativado
- **WHEN** a propriedade `show-spacer` for definida como `false`
- **THEN** o componente não deve renderizar o elemento `.sliver-spacer`, permitindo que o conteúdo seguinte comece imediatamente abaixo da área expandida da barra ou conforme definido pelo container pai.
