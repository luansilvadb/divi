<template>
  <q-layout view="lHh Lpr lFf" class="main-layout-bg">
    <DesktopSidebar />

    <q-page-container class="relative-position">
      <router-view v-slot="{ Component, route }">
        <AnimatePresence mode="popLayout">
          <motion.div
            :key="route.path"
            :initial="variants.initial"
            :animate="variants.animate"
            :exit="variants.exit"
            :transition="uiStore.navDirection === 'backward' 
              ? { type: 'tween', ease: 'easeOut', duration: 0.2 } 
              : { type: 'spring', stiffness: 400, damping: 40, mass: 1 }"
            class="motion-wrapper"
            style="z-index: 1"
          >
            <component :is="Component" />
          </motion.div>
        </AnimatePresence>
      </router-view>
    </q-page-container>

    <MobileBottomNav />
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUiStore } from 'src/stores/ui';
import DesktopSidebar from 'components/organisms/layout/DesktopSidebar.vue';
import MobileBottomNav from 'components/organisms/layout/MobileBottomNav.vue';
import { motion, AnimatePresence } from 'motion-v';

const uiStore = useUiStore();

const variants = computed(() => {
  const isForward = uiStore.navDirection === 'forward';
  
  return {
    initial: {
      scale: isForward ? 0.98 : 1.02,
      zIndex: isForward ? 20 : 30, // Se voltando, a nova página fica no topo
      opacity: 0,
    },
    animate: {
      scale: 1,
      zIndex: isForward ? 20 : 30, 
      opacity: 1,
      pointerEvents: 'auto',
    },
    exit: {
      scale: isForward ? 1.02 : 0.98,
      zIndex: isForward ? 1 : 20, // Se voltando, a antiga página fica por baixo
      opacity: 0,
      pointerEvents: 'none',
    }
  };
});
</script>

<style lang="scss">
.main-layout-bg {
  background-color: #fafafa;
}

body.body--dark .main-layout-bg {
  background-color: $dark-page;
}

.motion-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: inherit;
  display: flex;
  flex-direction: column;
}

.q-page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh !important;
  flex: 1;
  overflow: hidden; /* Evita que o scrollbar do sistema apareça durante transições absolutas */
}

/* Fix para a sidebar não "vibrar" durante o recálculo do Quasar no popLayout */
:deep(.q-drawer) {
  height: 100vh !important;
  position: fixed !important;
}
</style>
