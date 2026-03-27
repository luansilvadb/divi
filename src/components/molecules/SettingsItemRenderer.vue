<template>
  <SettingsItem
    :title="$t(`settings.items.${config.key}.label`)"
    :caption="caption ?? undefined"
    :icon="config.icon"
    :clickable="config.type === 'nav'"
    :show-chevron="config.type === 'nav' || config.key === 'primaryCurrency'"
  >
    <template #side>
      <!-- Select Type -->
      <BaseSelect
        v-if="config.type === 'select' && config.optionsKey"
        :model-value="(currentValue as any)"
        @update:model-value="updateValue"
        :options="options"
        :emit-value="false"
        :map-options="false"
        dense
        filled
        class="custom-select"
      />

      <!-- Toggle Type -->
      <q-toggle
        v-else-if="config.type === 'toggle'"
        :model-value="currentValue"
        @update:model-value="updateValue"
        color="primary"
        class="custom-toggle"
      />

      <!-- Badge/Indicator Type -->
      <div v-else-if="config.type === 'badge'" class="row no-wrap items-center">
        <q-badge
          :label="formattedValue"
          class="custom-badge q-px-md"
        />
        <!-- Extra indicator for autoPay -->
        <q-icon 
          v-if="config.key === 'autoPay'"
          name="verified" 
          color="primary" 
          size="20px" 
          class="q-ml-sm"
        />
      </div>
      
      <q-icon
        v-else-if="config.key === 'primaryCurrency'"
        name="chevron_right"
        color="grey-5"
        size="xs"
      />
    </template>
  </SettingsItem>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { SettingsItemConfig } from 'src/core/config/settings';
import { SETTINGS_OPTIONS } from 'src/core/constants/settingsOptions';
import { useSettingsStore, type SettingsState } from 'src/stores/settings';
import SettingsItem from 'src/components/molecules/SettingsItem.vue';
import BaseSelect from 'src/components/atoms/BaseSelect.vue';

const props = defineProps<{
  config: SettingsItemConfig;
}>();

const i18n = useI18n();
const { t } = i18n;
const te = i18n.te.bind(i18n);
const settingsStore = useSettingsStore();

const caption = computed<string | undefined>(() => {
  if (props.config.caption) return props.config.caption;
  const i18nKey = `settings.items.${props.config.key}.caption`;
  return te(i18nKey) ? t(i18nKey) : undefined;
});

const currentValue = computed(() => {
  const category = props.config.storeCategory;
  const categoryData = settingsStore[category] as Record<string, string | number | boolean | null>;
  return categoryData[props.config.key];
});

const options = computed(() => {
  if (!props.config.optionsKey) return [];
  const rawOptions = SETTINGS_OPTIONS[props.config.optionsKey];
  return [...rawOptions] as string[];
});

const formattedValue = computed(() => {
  const val = currentValue.value;
  if (typeof val === 'boolean') return val ? 'Ligado' : 'Desligado';
  return String(val);
});

const updateValue = (newVal: unknown) => {
  const category = props.config.storeCategory as keyof SettingsState;
  settingsStore.updateSetting(category, props.config.key as never, newVal as never);
};
</script>

<style scoped lang="scss">
.custom-toggle {
  :deep(.q-toggle__thumb) {
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
}

.custom-select {
  min-width: 120px;
  :deep(.q-field__control) {
    border-radius: 12px;
    background: rgba(var(--q-primary), 0.05);
    &:before {
      border: none;
    }
  }
}

.custom-badge {
  background: var(--q-primary-opacity-10, rgba(var(--q-primary), 0.1));
  color: var(--q-primary);
  font-weight: 700;
  border-radius: 10px;
  padding: 6px 12px;
  text-transform: capitalize;
  font-size: 0.8rem;
  
  body.body--dark & {
    background: rgba(255, 255, 255, 0.05);
    color: #e0e0e0;
  }
}
</style>
