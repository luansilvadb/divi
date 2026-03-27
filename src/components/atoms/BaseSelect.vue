<template>
  <q-select
    ref="selectProxy"
    transition-show="none"
    transition-hide="none"
    dense
    options-dense
    borderless
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :options="options"
    :class="['custom-select', { 'menu-open': menuOpen }]"
    @popup-show="onPopupShow"
    @popup-hide="onPopupHide"
    menu-anchor="bottom left"
    menu-self="top left"
    popup-content-class="custom-select-menu"
    :popup-content-style="{
      width: dropdownWidth,
      marginTop: '0px',
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
      paddingTop: menuPaddingTop,
    }"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import { QSelect } from 'quasar';

interface Props {
  modelValue: string | number | Record<string, unknown> | null;
  options: unknown[];
  dropdownWidth?: string;
  menuPaddingTop?: string;
}

withDefaults(defineProps<Props>(), {
  dropdownWidth: '140px',
  menuPaddingTop: '0px',
});

defineEmits(['update:modelValue']);

const menuOpen = ref(false);
const selectProxy = ref<QSelect | null>(null);

const handleScroll = () => {
  if (menuOpen.value && selectProxy.value) {
    selectProxy.value.hidePopup();
  }
};

const onPopupShow = () => {
  menuOpen.value = true;
  // Usar listener global com captura para detectar scroll em QUALQUER container pai
  // Isso é necessário porque o getScrollTarget nem sempre identifica containers customizados
  window.addEventListener('scroll', handleScroll, { capture: true, passive: true });
};

const onPopupHide = () => {
  menuOpen.value = false;
  window.removeEventListener('scroll', handleScroll, { capture: true });
};

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll, { capture: true });
});
</script>

<style scoped lang="scss">
.custom-select {
  background: #f0f2f5;
  border-radius: 12px;
  width: v-bind('dropdownWidth');
  padding: 0px;
  :deep(.q-field__control) {
    padding: 0 12px;
  }
  :deep(.q-field__native) {
    font-weight: 600;
    color: var(--q-primary);
  }
  body.body--dark & {
    background: #2a2a2a;
    :deep(.q-field__native) {
      color: white;
    }
  }

  &.menu-open {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    :deep(.q-field__control) {
      border-bottom-left-radius: 0px !important;
      border-bottom-right-radius: 0px !important;
    }
  }
}
</style>

<style lang="scss">
/* Custom Select Menu for Dropdowns - Global so q-select can mount it in body */
.custom-select-menu {
  width: 140px !important; /* Will be overridden by inline style if needed, but defaults to 140px */
  border-radius: 12px;
  background: rgba(240, 242, 245, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  body.body--dark & {
    background: rgba(42, 42, 42, 0.85);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .q-item {
    border-radius: 8px;
    margin: 2px 4px;
    font-weight: 600;
    transition:
      background 0.2s ease,
      color 0.1s ease;
    min-height: 40px;

    &:hover,
    &.q-item--focused {
      background: #f0f2f5;
      color: var(--q-primary);

      body.body--dark & {
        background: #2a2a2a;
        color: white;
      }
    }

    &.q-item--active {
      background: #f0f2f5;
      color: var(--q-primary);

      body.body--dark & {
        background: #2a2a2a;
        color: white;
      }
    }
  }
}
</style>
