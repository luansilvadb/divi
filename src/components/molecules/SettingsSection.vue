<template>
  <div class="settings-section q-mb-xl">
    <CategoryLabel v-if="title || $slots.title" :label="title" class="q-ml-sm q-mb-sm">
      <slot name="title" />
    </CategoryLabel>
    
    <SectionCard>
      <div class="settings-items-list">
        <slot />
      </div>
    </SectionCard>
  </div>
</template>

<script setup lang="ts">
import CategoryLabel from 'src/components/atoms/CategoryLabel.vue';
import SectionCard from 'src/components/atoms/SectionCard.vue';

defineProps<{
  title?: string;
}>();
</script>

<style scoped lang="scss">
.settings-section {
  display: block;
}

.settings-items-list {
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    
    body.body--dark & {
      border-bottom-color: rgba(255, 255, 255, 0.05);
    }
  }
}
</style>
