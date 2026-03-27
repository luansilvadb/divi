<template>
  <div ref="scrollContainer" class="scroll-container scroll custom-scroll">
    <slot name="header" :scroll-element="scrollContainer" />
    <div 
      class="max-width-container q-px-md q-pb-xl"
      :style="{ paddingTop: paddingTop, maxWidth: maxWidth }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

withDefaults(defineProps<{
  paddingTop?: string;
  maxWidth?: string;
}>(), {
  paddingTop: '240px',
  maxWidth: '700px'
});

const scrollContainer = ref<HTMLElement | null>(null);

defineExpose({
  scrollContainer
});
</script>

<style scoped lang="scss">
.scroll-container {
  flex: 1;
  overflow-y: auto;
  width: 100%;
  will-change: transform; // Aceleração de hardware para scroll imediato
}

.max-width-container {
  margin: 0 auto;
  width: 100%;
}
</style>
