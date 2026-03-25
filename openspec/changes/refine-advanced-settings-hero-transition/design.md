# Design: Refine Advanced Settings Hero Transition

## Goals
- Prover feedback imediato ao clique no item "Mais opções".
- Utilizar curvas de mola (Spring) para uma transição fluida e natural.
- Escalonar a entrada de elementos internos na página de destino.

## Technical Architecture

### 1. Sistema de Animação
Utilizaremos `motion-v` (Vue wrapper para Motion One) para todas as transições de layout.

As configurações de mola principais serão:
- `stiffness: 300`
- `damping: 30`
- `mass: 1`

### 2. Gatilho (MoreActionsPage.vue)
O `SettingsItem` será envolto em um `Motion` com comportamento `whileTap`:
```vue
<Motion
  whileTap="{ scale: 0.98 }"
  @click="goToAdvanced"
>
  <SettingsItem ... />
</Motion>
```

### 3. Página Hero (AdvancedSettingsPage.vue)
A transição do `layoutId="settings-hero-bg"` será configurada explicitamente:
```vue
<Motion
  layoutId="settings-hero-bg"
  :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
  ...
>
```

Para a entrada em cascata:
As seções (`category-header` e `section-card`) devem usar `initial` e `animate`:
```vue
<Motion
  :initial="{ opacity: 0, y: 20 }"
  :animate="{ opacity: 1, y: 0 }"
  :transition="{ delay: 0.2 + (index * 0.1), type: 'spring' }"
>
  <!-- Conteúdo da seção -->
</Motion>
```

## Risks / Trade-offs
- **Performance**: Animações de layout podem ser pesadas se houver excesso de elementos. O uso de `overflow: visible` e `will-change` ajudará se necessário.
- **Complexity**: O sincronismo das molas entre o gatilho e o alvo deve ser testado visualmente para garantir que não haja saltos (snapping).
