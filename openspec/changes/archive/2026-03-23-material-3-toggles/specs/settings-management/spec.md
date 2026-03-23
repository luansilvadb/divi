## ADDED Requirements

### Requirement: Material Design 3 Toggle Styling
A aplicação DEVE exibir todos os componentes de chaveamento (toggles/switches) seguindo a diretriz visual do Material Design 3.
- **WHEN** um componente `q-toggle` é renderizado.
- **THEN** o "track" (trilha) deve englobar totalmente o "thumb" (bolinha).
- **AND** a proporção e bordas arredondadas devem refletir a especificação M3 (aproximadamente 52x32px para o track).

#### Scenario: Visualizando um Toggle Inativo
- **WHEN** um toggle está no estado `false` (desligado).
- **THEN** o "track" deve ter um fundo transparente ou cinza com uma borda visível.
- **AND** o "thumb" deve ser menor (ex: 16x16px) e centralizado verticalmente à esquerda.

#### Scenario: Visualizando um Toggle Ativo
- **WHEN** um toggle é alternado para o estado `true` (ligado).
- **THEN** o "track" deve preencher com a cor de ativação (ex: primária) sem borda.
- **AND** o "thumb" deve expandir de tamanho (ex: 24x24px) e deslizar para a direita.
- **AND** a transição de cor, tamanho e posição deve ser animada suavemente.
