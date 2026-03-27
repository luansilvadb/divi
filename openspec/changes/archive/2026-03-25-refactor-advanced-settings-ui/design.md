# Design: Refatoração da UI de Configurações Avançadas

## Estrutura da UI Refatorada

```mermaid
graph TD
    A[SliverAppBar (H:160, layoutId=settings-hero-bg)] --> B[Category Header: ESTILO]
    B --> C[Section Card (Shadow, Border-Radius: 20px)]
    C --> D[SettingsItem: Altura Cabeçalho (Icon: view_agenda, slot=side)]
    C --> E[SettingsItem: Estilo Ícone (Icon: star, slot=side)]
    A --> F[Category Header: TRANSAÇÕES]
    F --> G[Section Card]
    G --> H[SettingsItem: Pagamento Auto (Icon: check_circle, slot=side)]
```

## Mudanças Estéticas

| Propriedade | Valor Atual | Novo Valor |
| :--- | :--- | :--- |
| **Max-Width** | 800px | 700px |
| **Category Header Color** | var(--q-primary) | grey-7 (light) / grey-5 (dark) |
| **Category Header Spacing**| normal | 0.1em |
| **Icon Color** | blue-8 | grey-7 |
| **SliverAppBar Title ID** | N/A | layoutId="settings-hero-title" |
| **SliverAppBar Height** | 130px | 160px |

## Detalhes do Componente `SettingsItem`
O `SettingsItem` já fornece as seguintes características ideais:
- Efeito hover (`rgba(0,0,0,0.03)` no light, `rgba(255,255,255,0.05)` no dark).
- Ripple effect automático para itens clicáveis.
- Padding e alinhamento padronizados para ícone e texto.

## Integração com `Motion`
Para manter a fluidez, a `AdvancedSettingsPage.vue` continuará sendo envolvida por um componente `Motion` com o `layoutId="settings-hero-bg"` para garantir que o container se expanda suavemente a partir do card original na `MoreActionsPage.vue`.
A adição do `layoutId="settings-hero-title"` ao título na AppBar permitirá que o texto "Mais opções" se transforme no título "Mais" sem cortes abruptos.
