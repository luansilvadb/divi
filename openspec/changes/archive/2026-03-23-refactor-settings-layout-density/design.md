## Context

A página de configurações (`MoreActionsPage.vue`) utiliza um contêiner centralizado limitado a 600px. Os itens de configuração (`SettingsItem.vue`) seguem uma densidade padrão de 48px de altura mínima. Embora funcional, o layout parece "apertado" em monitores desktop modernos.

## Goals / Non-Goals

**Goals:**
- Proporcionar uma interface mais espaçosa em telas largas (desktop).
- Melhorar a área de interação dos itens de configuração.
- Manter a compatibilidade com o layout mobile existente.

**Non-Goals:**
- Mudar a estrutura de rolagem (permanecerá em coluna única).
- Refatorar a lógica de negócio ou estados do Pinia.

## Decisions

- **Largura de 700px**: Escolhida para permitir que títulos e descrições longas tenham mais espaço sem que a leitura se torne cansativa (demasiadamente larga).
- **Altura de 60px**: Define uma nova densidade visual que se alinha com padrões modernos de UI "touch-friendly" e "premium", proporcionando mais respiro visual.
- **Utilização de SCSS Scoped**: Continuar usando as classes locais nos componentes SFC para garantir que a mudança seja isolada e segura.

## Risks / Trade-offs

- **Espaço Vazio**: Em telas extremamente largas, pode haver mais espaço em branco nas laterais, mas isso é mitigado pela centralização do contêiner.
- **Rolagem Longa**: Com itens mais altos, a página ficará verticalmente maior. Como a navegação é única, isso é aceitável em favor da clareza visual.
