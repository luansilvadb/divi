<template>
  <q-layout view="lHh Lpr lFf" class="main-layout-bg">
    <DesktopSidebar />

    <q-page-container class="relative-position">
      <router-view v-slot="{ Component, route }">
        <AnimatePresence mode="popLayout">
          <motion.div
            :key="route.path"
            layout
            :initial="variants.initial"
            :animate="variants.animate"
            :exit="variants.exit"
            :transition="{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 40, 
              mass: 1 
            }"
            class="motion-wrapper"
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
      zIndex: isForward ? 20 : 1,
      opacity: 0,
    },
    animate: {
      scale: 1,
      zIndex: isForward ? 20 : 1,
      opacity: 1,
    },
    exit: {
      scale: isForward ? 1.02 : 0.98,
      zIndex: isForward ? 1 : 20,
      opacity: 0,
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
  background: inherit;
}

.q-page-container {
  display: flex;
  flex-direction: column;
}
</style>
