## Why

O projeto busca uma identidade visual moderna e consistente. O componente `q-toggle` padrão do Quasar utiliza as diretrizes do Material Design 2, onde o "thumb" (bolinha) fica parcialmente fora do "track" (trilha). O Material Design 3 (M3) introduz um estilo mais robusto e tátil, com a bolinha totalmente contida dentro da trilha, bordas mais arredondadas e tamanhos dinâmicos. Atualizar o toggle para M3 melhora a experiência do usuário e alinha o aplicativo com os padrões de design mais recentes.

## What Changes

- **Estilização Global do q-toggle**: Sobrescrever as classes CSS do `.q-toggle` no arquivo global `src/css/app.scss` para aplicar o visual do Material Design 3.
  - Aumentar a altura e o raio da borda do track.
  - Colocar o thumb dentro do track.
  - Ajustar o tamanho do thumb dinamicamente (menor quando inativo, maior quando ativo).
  - Adicionar cores e contornos baseados no estado.

## Capabilities

### New Capabilities
- Nenhuma funcionalidade nova introduzida, apenas alteração visual.

### Modified Capabilities
- `settings-management`: Atualizar os requisitos visuais de componentes interativos (especificamente toggles) na tela de configurações e globalmente.

## Impact

- **CSS Global**: `src/css/app.scss` será modificado.
- **Componentes**: Todos os componentes na aplicação que utilizam `<q-toggle>` herdarão o novo estilo automaticamente.
- **Páginas**: `src/pages/MoreActionsPage.vue` refletirá a mudança na opção "Material You".
