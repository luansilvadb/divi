<template>
  <q-card flat bordered class="action-card cursor-pointer q-pa-md v-ripple" v-ripple>
    <div class="column items-center justify-center">
      <q-icon :name="icon" size="28px" class="q-mb-sm text-primary" />
      <div class="text-subtitle1 text-weight-bold text-dark dark-text-white">{{ label }}</div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
}>();
</script>

<style scoped lang="scss">
.action-card {
  border-radius: 20px;
  background: white;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid #e0e0e0;
  min-width: 140px;
  overflow: hidden;
  
  &:hover {
    border-color: var(--q-primary);
    background-color: rgba(var(--q-primary), 0.02);
    transform: scale(1.02);
  }
}

.dark-text-white {
  body.body--dark & {
    color: white !important;
  }
}

body.body--dark {
  .action-card {
    background: #1e1e1e;
    border-color: #333;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      border-color: #444;
    }
  }
}
</style>
