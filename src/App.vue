<template>
  <router-view />
</template>

<script setup lang="ts">
import { watch, computed } from 'vue';
import { useQuasar, setCssVar } from 'quasar';
import { useUiStore } from 'src/stores/ui';
import { toKebabCase, type DynamicScheme } from 'src/core/utils/theme';

const $q = useQuasar();
const uiStore = useUiStore();

const currentScheme = computed(() => {
  if (!uiStore.dynamicTheme) return null;
  return $q.dark.isActive ? uiStore.dynamicTheme.dark : uiStore.dynamicTheme.light;
});

const applyDynamicTheme = (scheme: DynamicScheme | null) => {
  const root = document.documentElement;
  
  if (!scheme) {
    // Clear dynamic variables or set them to defaults if needed
    // For now, we'll just remove the ones we set
    const style = root.getAttribute('style') || '';
    const newStyle = style.split(';').filter(s => !s.trim().startsWith('--md-sys-color-')).join(';');
    root.setAttribute('style', newStyle);
    return;
  }

  Object.entries(scheme).forEach(([key, value]) => {
    const varName = `--md-sys-color-${toKebabCase(key)}`;
    root.style.setProperty(varName, value as string);
  });
  
  // Also sync Quasar primary with MD3 primary
  setCssVar('primary', scheme.primary);
};

const applyTheme = (mode: 'light' | 'dark' | 'auto') => {
  if (mode === 'auto') {
    $q.dark.set('auto');
  } else {
    $q.dark.set(mode === 'dark');
  }
};

// Initial call to generate theme if enabled
uiStore.refreshDynamicTheme();

watch(() => uiStore.accentColor, (newColor) => {
  if (!uiStore.materialYou) {
    setCssVar('primary', newColor);
  }
}, { immediate: true });

watch(() => uiStore.themeMode, (newMode) => {
  applyTheme(newMode);
}, { immediate: true });

watch(currentScheme, (newScheme) => {
  applyDynamicTheme(newScheme);
}, { immediate: true });

// Listen for dark mode changes (especially for 'auto' mode)
watch(() => $q.dark.isActive, () => {
  applyDynamicTheme(currentScheme.value);
});
</script>
