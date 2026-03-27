<template>
  <div class="category-label text-overline q-px-sm q-mb-sm">
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string | undefined;
}>();
</script>

<style scoped lang="scss">
.category-label {
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #616161; // text-grey-7
  margin-top: 24px;
  transition: color 0.3s ease;

  &:first-of-type {
    margin-top: 0;
  }

  body.body--dark & {
    color: #bdbdbd; // text-grey-5
  }
}
</style>
