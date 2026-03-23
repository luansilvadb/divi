# Design: Sidebar Mini Mode — Editar Dados Menu

Solução técnica para exibir os sub-itens de "Editar dados" no modo mini da sidebar via `q-menu`.

## Implementation Details

### 1. Renderização condicional no template

O template atual usa `v-show="!isMini"` no `q-expansion-item`. A solução adiciona um bloco complementar `v-show="isMini"` com um `q-item` + `q-menu`:

```html
<!-- Modo expandido: mantém o comportamento atual -->
<q-expansion-item
  v-show="!isMini"
  icon="edit_note"
  :label="t('nav.edit_data')"
  ...
>
  <q-list>
    <q-item v-for="sub in editDataItems" ... />
  </q-list>
</q-expansion-item>

<!-- Modo mini: ícone com q-menu -->
<q-item
  v-show="isMini"
  clickable
  v-ripple
  class="nav-item q-mb-xs"
>
  <q-item-section avatar>
    <q-icon name="edit_note" class="nav-icon" />
  </q-item-section>

  <q-menu
    anchor="center right"
    self="center left"
    :offset="[8, 0]"
    class="edit-data-menu"
  >
    <q-list class="q-pa-sm">
      <q-item
        v-for="sub in editDataItems"
        :key="sub.label"
        clickable
        v-ripple
        :to="sub.to"
        exact
        active-class="bg-blue-1 text-primary text-bold"
        class="nav-item q-mb-xs text-grey-8"
      >
        <q-item-section avatar>
          <q-icon :name="sub.icon" class="nav-icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle2">{{ sub.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</q-item>
```

### 2. Estilos do q-menu

O `q-menu` deve herdar o visual da sidebar. Adicionar ao `<style scoped>`:

```scss
.edit-data-menu {
  background-color: $sidebar-bg;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  min-width: 220px;
}
```

Os estilos de `.nav-item` já existentes (border-radius, hover, transition) serão herdados automaticamente pelos itens dentro do menu via o `:deep(.nav-item)` já definido.

### 3. Posicionamento do menu

- **`anchor="center right"`**: O menu se ancora no lado direito do ícone.
- **`self="center left"`**: O lado esquerdo do menu se alinha ao ponto de ancoragem.
- **`offset=[8, 0]`**: 8px de gap horizontal entre a sidebar e o menu.

Isso garante que o menu aparece ao lado da sidebar mini sem sobreposição.

## Risks / Trade-offs

- **Risco baixo**: Mudança isolada, apenas template e CSS. Sem alteração de lógica de estado.
- **Trade-off**: Duplicação leve dos `editDataItems` no template (dois `v-for`). A array de dados é compartilhada, então manutenção continua centralizada.
- **Consideração**: O `:deep()` garante que os estilos dos `.nav-item` dentro do `q-menu` funcionem, pois o menu é teleportado para o body pelo Quasar.

## Goals / Non-Goals

- **Goal**: Tornar os sub-itens de "Editar dados" acessíveis no modo mini.
- **Goal**: Manter consistência visual com o design system existente.
- **Non-Goal**: Alterar o comportamento do modo expandido.
- **Non-Goal**: Adicionar rotas ou páginas de edição (escopo separado).
