<template>
  <q-dialog
    v-model="internalModel"
    position="bottom"
    v-bind="dialogProps"
    class="color-picker-dialog"
  >
    <q-card class="color-picker-card q-pb-lg">
      <q-card-section class="row items-center q-pb-sm">
        <div class="text-subtitle1 text-weight-bold">Selecione A Cor</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row q-col-gutter-sm justify-center">
          <div v-for="color in presetColors" :key="color" class="col-auto">
            <q-btn
              round
              dense
              :style="{ backgroundColor: color }"
              class="color-circle"
              :class="{ 'active-color': accentColor === color }"
              @click="selectColor(color)"
            >
              <q-icon v-if="accentColor === color" name="check" color="white" size="xs" />
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-sm row justify-center">
        <q-btn
          flat
          rounded
          no-caps
          color="primary"
          icon="colorize"
          class="eyedropper-btn"
          @click="openCustomPicker"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUiStore } from 'src/stores/ui';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'open-custom': [];
}>();

const uiStore = useUiStore();
const { accentColor } = storeToRefs(uiStore);

const internalModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const dialogProps = {
  transitionShow: 'slide-up',
  transitionHide: 'slide-down',
};

const presetColors = [
  '#1976D2', // Blue
  '#26A69A', // Teal
  '#9C27B0', // Purple
  '#E91E63', // Pink
  '#F44336', // Red
  '#FF9800', // Orange
  '#FFC107', // Amber
  '#4CAF50', // Green
  '#607D8B', // Blue Grey
  '#212121', // Dark
];

const selectColor = (color: string) => {
  uiStore.setAccentColor(color);
  // Optional: automatically close bottom sheet if preferred.
  // emit('update:modelValue', false);
};

const openCustomPicker = () => {
  emit('update:modelValue', false); // close this sheet
  emit('open-custom'); // signal to open the other one
};
</script>

<style scoped lang="scss">
.color-picker-card {
  border-radius: 20px 20px 0 0 !important;
  max-width: 600px;
  width: 100%;
}

.color-circle {
  width: 44px;
  height: 44px;
  min-height: 44px;
  border: 2px solid transparent;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:active {
    transform: scale(0.9);
  }
}

.active-color {
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  body.body--dark & {
    border-color: rgba(255, 255, 255, 0.3);
  }
}

.eyedropper-btn {
  font-weight: 600;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.05);
  body.body--dark & {
    background-color: rgba(255, 255, 255, 0.05);
  }
}
</style>
