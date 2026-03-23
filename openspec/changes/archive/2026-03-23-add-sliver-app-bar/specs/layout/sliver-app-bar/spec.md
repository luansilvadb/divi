## ADDED Requirements

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
