<template>
  <q-layout view="lHh Lpr lFf" class="main-layout-bg">
    <DesktopSidebar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <MobileBottomNav />
  </q-layout>
</template>

<script setup lang="ts">
import DesktopSidebar from 'components/organisms/layout/DesktopSidebar.vue';
import MobileBottomNav from 'components/organisms/layout/MobileBottomNav.vue';
</script>

<style lang="scss">
.main-layout-bg {
  background-color: #fafafa;
}

body.body--dark .main-layout-bg {
  background-color: $dark-page;
}
</style>
