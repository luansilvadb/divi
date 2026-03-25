<script setup lang="ts">
import { computed } from 'vue';
import { useSliverEffect } from 'src/composables/useSliverEffect';

interface Props {
  expandedHeight?: number;
  collapsedHeight?: number;
  pinned?: boolean;
  scrollTarget?: HTMLElement | Window | undefined | null;
}

const props = withDefaults(defineProps<Props>(), {
  expandedHeight: 160,
  collapsedHeight: 56,
  pinned: true,
  scrollTarget: undefined,
});

const { visualOffset, progress, diff } = useSliverEffect({
  expandedHeight: computed(() => props.expandedHeight),
  collapsedHeight: computed(() => props.collapsedHeight),
  pinned: computed(() => props.pinned),
  scrollTarget: computed(() => props.scrollTarget)
});

// Calculate styles for the main container
const containerStyles = computed(() => ({
  height: `${props.expandedHeight}px`,
  marginBottom: `-${props.expandedHeight}px`,
  '--sliver-p': progress.value,
  '--sliver-offset': `${visualOffset.value}px`,
  '--sliver-diff': `${diff.value}px`,
  '--sliver-expanded': `${props.expandedHeight}px`,
  '--sliver-collapsed': `${props.collapsedHeight}px`,
}));
</script>

<template>
  <div class="sliver-app-bar" :style="containerStyles">
    <!-- Shadow: Aparece conforme colapsa -->
    <div class="sliver-shadow"></div>

    <!-- Zona de Clip: É o que vemos da barra -->
    <div class="sliver-clipping-zone">
      <!-- Camada de Cor Expandida -->
      <div class="sliver-bg-base"></div>
      <!-- Camada de Cor Encolhida que surge com o scroll -->
      <div class="sliver-bg-overlay"></div>

      <div class="sliver-content">
        <!-- Background: Parallax suave -->
        <div class="sliver-background">
          <slot name="background" :progress="progress"></slot>
        </div>

        <!-- Camada de UI: Fica "parada" no topo da viewport -->
        <div class="sliver-ui-layer">
          
          <!-- Header (Navigation e Actions) -->
          <div class="sliver-header-row">
            <div class="sliver-nav"><slot name="navigation" :progress="progress"></slot></div>
            <q-space />
            <div class="sliver-actions"><slot name="actions" :progress="progress"></slot></div>
          </div>

          <!-- Título -->
          <div class="sliver-title-wrapper">
            <div class="sliver-title">
              <slot name="title" :progress="progress"></slot>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  
  <div :style="{ height: `${expandedHeight}px` }" class="sliver-spacer"></div>
</template>

<style scoped lang="scss">
.sliver-app-bar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
}

.sliver-shadow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--sliver-collapsed);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  z-index: 999;
  opacity: var(--sliver-p);
}

.sliver-clipping-zone {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  will-change: transform, clip-path;
  z-index: 1001;
  transform: translateY(calc(var(--sliver-offset) * -1));
  clip-path: inset(var(--sliver-offset) 0 0 0);
}

.sliver-bg-base {
  position: absolute;
  inset: 0;
  background-color: $sliver-bg-light;
  z-index: -2;
}

.sliver-bg-overlay {
  position: absolute;
  inset: 0;
  background-color: $sliver-bg-pinned-light;
  z-index: -1;
  opacity: var(--sliver-p);
  will-change: opacity;
}

body.body--dark {
  .sliver-bg-base { background-color: $sliver-bg-dark; }
  .sliver-bg-overlay { background-color: $sliver-bg-pinned-dark; }
}

.sliver-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.sliver-background {
  position: absolute;
  inset: 0;
  z-index: -1;
  will-change: transform;
  transform: translateY(calc(var(--sliver-offset) * 0.5));
}

.sliver-ui-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  will-change: transform;
  transform: translateY(var(--sliver-offset));
}

.sliver-header-row {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 8px;
  z-index: 2;
  height: var(--sliver-collapsed);
  
  :deep(*) { pointer-events: auto; }
}

.sliver-title-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  will-change: transform;
  height: var(--sliver-collapsed);
  top: 0;
  transform: translateY(calc(var(--sliver-diff) - var(--sliver-offset)));
}

.sliver-title {
  white-space: nowrap;
  pointer-events: auto;
  will-change: transform;
  font-weight: 700;
  transform-origin: center center;
  color: $nav-text;
  transform: scale(calc(1 + (1 - var(--sliver-p)) * 0.5));
  opacity: 1;
}

body.body--dark .sliver-title {
  color: white;
}

.sliver-spacer { pointer-events: none; }
</style>