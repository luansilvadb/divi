<template>
  <div class="theme-mode-selector" role="radiogroup" aria-label="Modo de tema">
    <label
      v-for="option in resolvedOptions"
      :key="option.value"
      class="theme-option"
      :class="{ 'theme-option--active': option.value === modelValue }"
    >
      <input
        :name="groupName"
        class="theme-option__control"
        type="radio"
        :value="option.value"
        :checked="option.value === modelValue"
        @change="selectOption(option.value)"
      />
      <div class="theme-option__content">
        <q-icon :name="option.icon" size="18px" class="theme-option__icon" />
        <span class="theme-option__label">{{ option.label }}</span>
        <q-icon
          v-if="option.value === modelValue"
          name="check"
          size="14px"
          class="theme-option__check"
        />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue';

type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeOption {
  label: string;
  value: ThemeMode;
  icon: string;
}

const fallbackOption: ThemeOption = { label: 'Claro', value: 'light', icon: 'light_mode' };

const defaultOptions: ThemeOption[] = [
  fallbackOption,
  { label: 'Escuro', value: 'dark', icon: 'dark_mode' },
  { label: 'Sistema', value: 'auto', icon: 'brightness_auto' },
];

const props = defineProps<{
  modelValue: ThemeMode;
  options?: ThemeOption[];
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: ThemeMode): void;
}>();

const groupName = `theme-mode-${getCurrentInstance()?.uid ?? 'selector'}`;

const resolvedOptions = computed<ThemeOption[]>(() =>
  props.options && props.options.length > 0 ? props.options : defaultOptions,
);

function selectOption(value: ThemeMode) {
  emit('update:modelValue', value);
}
</script>

<style scoped lang="scss">
.theme-mode-selector {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: min(360px, 100%);
}

.theme-option {
  position: relative;
}

.theme-option__control {
  position: absolute;
  inset: 0;
  opacity: 0;
  margin: 0;
  cursor: pointer;
}

.theme-option__content {
  align-items: center;
  background: #f8f9fa;
  border: 1px solid #ebeef2;
  border-radius: 12px;
  color: #2f3a49;
  display: flex;
  gap: 6px;
  justify-content: center;
  min-height: 40px;
  padding: 8px 10px;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;

  body.body--dark & {
    background: rgba(255, 255, 255, 0.015);
    border-color: rgba(255, 255, 255, 0.05);
    color: #b0b8c4;
  }
}


.theme-option__control:focus-visible + .theme-option__content {
  border-color: rgba(var(--q-primary), 0.26);
  box-shadow: 0 0 0 3px rgba(var(--q-primary), 0.12);
}

.theme-option--active .theme-option__content {
  background: rgba(var(--q-primary), 0.05);
  border-color: rgba(var(--q-primary), 0.2);
  color: #2f3a49;

  body.body--dark & {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.08);
    color: #d7dde8;
  }
}

.theme-option__icon {
  opacity: 0.9;
}

.theme-option__label {
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1;
}

.theme-option__check {
  color: rgba(var(--q-primary), 0.72);

  body.body--dark & {
    color: rgba(255, 255, 255, 0.6);
  }
}

@media (max-width: 600px) {
  .theme-mode-selector {
    grid-template-columns: 1fr;
    width: 100%;
  }
}
</style>
