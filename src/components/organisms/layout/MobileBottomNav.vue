<template>
  <q-footer bordered class="bg-white lt-md absolute-bottom">
    <q-tabs
      v-model="tab"
      no-caps
      active-color="primary"
      indicator-color="transparent"
      class="text-grey-7"
      align="justify"
    >
      <q-route-tab to="/" icon="space_dashboard" class="mobile-tab" />
      <q-route-tab to="/transacoes" icon="account_balance_wallet" class="mobile-tab" />
      <q-route-tab to="/orcamentos" icon="add_circle" class="mobile-tab center-action" />
      <q-route-tab to="/metas" icon="savings" class="mobile-tab" />
      <q-route-tab to="/actions" icon="more_horiz" class="mobile-tab" />
    </q-tabs>
  </q-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('');
</script>

<style scoped lang="scss">
.q-footer {
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05); /* Soft drop shadow for elevation */
  border-top: none;
}
.mobile-tab {
  padding: 8px 0;
  min-height: 60px;
}
.center-action {
  color: $primary; /* primary blue pop */
}
</style>
