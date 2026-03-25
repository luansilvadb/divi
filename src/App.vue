<template>
  <router-view />
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useQuasar, setCssVar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { useUiStore } from 'src/stores/ui';

const $q = useQuasar();
const { locale: i18nLocale } = useI18n();
const uiStore = useUiStore();

const applyTheme = (mode: 'light' | 'dark' | 'auto') => {
  if (mode === 'auto') {
    $q.dark.set('auto');
  } else {
    $q.dark.set(mode === 'dark');
  }
};

const applyLocale = (newLocale: string) => {
  if (newLocale === 'auto') {
    // Basic auto-detection: if it starts with 'pt', use 'pt-BR', otherwise 'en-US'
    i18nLocale.value = navigator.language.startsWith('pt') ? 'pt-BR' : 'en-US';
  } else {
    i18nLocale.value = newLocale;
  }
};

watch(() => uiStore.accentColor, (newColor) => {
  setCssVar('primary', newColor);
}, { immediate: true });

watch(() => uiStore.themeMode, (newMode) => {
  applyTheme(newMode);
}, { immediate: true });

watch(() => uiStore.locale, (newLocale) => {
  applyLocale(newLocale);
}, { immediate: true });

// Listen for dark mode changes (especially for 'auto' mode)
watch(() => $q.dark.isActive, () => {
  // Theme is applied automatically via themeMode watch
});
</script>