<template>
  <div class="section-card q-mb-xl">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.section-card {
  background: white;
  border-radius: 20px;
  padding: 8px 0;
  border: 1px solid #f2f2f2;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  transition: all 0.3s ease;

  body.body--dark & {
    background: #1e1e1e;
    border-color: #333;
    box-shadow: none;
  }
}
</style>
