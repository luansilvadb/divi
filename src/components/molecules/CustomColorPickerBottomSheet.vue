<template>
  <q-dialog v-model="internalModel" position="bottom" v-bind="dialogProps" class="custom-color-picker-dialog">
    <q-card class="custom-color-picker-card q-pb-lg">
      <q-card-section class="row items-center q-pb-sm">
        <div class="text-h6 text-weight-bold">Cor Customizada</div>
        <q-space />
        <q-btn flat round dense icon="tag" class="q-mr-xs" @click="toggleHexInput" />
        <q-btn flat round dense icon="close" v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none flex flex-center">
        <q-color
          v-model="tempColor"
          flat
          no-footer
          class="custom-picker-base"
          style="width: 240px; max-width: 100%; border-radius: 12px;"
        />
      </q-card-section>

      <q-card-section class="q-pt-sm row justify-center">
        <q-btn
          unelevated
          rounded
          no-caps
          color="primary"
          label="Selecione"
          class="full-width select-btn"
          @click="confirmSelection"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useUiStore } from 'src/stores/ui';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'select': [color: string];
}>();

const uiStore = useUiStore();
const tempColor = ref(uiStore.accentColor);

const internalModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});

const dialogProps = {
  transitionShow: 'slide-up',
  transitionHide: 'slide-down'
};

watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    tempColor.value = uiStore.accentColor;
  }
});

const toggleHexInput = () => {
  // Logic to show/hide hex input in q-color if supported or via custom input
};

const confirmSelection = () => {
  uiStore.setAccentColor(tempColor.value);
  emit('update:modelValue', false);
  emit('select', tempColor.value);
};
</script>

<style scoped lang="scss">
.custom-color-picker-card {
  border-radius: 20px 20px 0 0 !important;
  max-width: 600px;
  width: 100%;
}

.custom-picker-base {
  background: transparent !important;
  box-shadow: none !important;
}

.select-btn {
  height: 44px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 22px;
  padding: 0 40px;
}

:deep(.q-color-picker) {
  border: none;
}
</style>
