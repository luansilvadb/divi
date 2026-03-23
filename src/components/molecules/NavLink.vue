<template>
  <q-item
    clickable
    v-ripple
    :to="to"
    exact
    active-class="bg-blue-1 text-primary text-bold active-bubble"
    class="nav-item q-mb-xs"
  >
    <q-item-section avatar>
      <q-icon :name="icon" class="nav-icon" />
    </q-item-section>
    <q-item-section v-if="!mini">
      <q-item-label class="text-subtitle1">{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  icon: string;
  to: string;
  mini?: boolean;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.nav-item {
  border-radius: 12px;
  overflow: hidden;
  color: $nav-text; 
  transition: all 0.2s ease;
}
.nav-item:hover {
  background-color: $nav-hover;
}
</style>
