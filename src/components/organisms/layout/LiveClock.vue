<template>
  <div class="live-clock column items-center q-py-xl">
    <div class="text-h2 text-weight-bolder time-text dark-mode-white">{{ timeString }}</div>
    <div class="text-h5 text-weight-bold text-grey-6 q-mt-sm">{{ weekdayString }}</div>
    <div class="text-body1 text-grey-5">{{ dateString }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const timeString = ref('');
const weekdayString = ref('');
const dateString = ref('');

let intervalId: ReturnType<typeof setInterval>;

const updateClock = () => {
  const now = new Date();
  
  // Format time (ex: 20:54)
  timeString.value = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  
  // Format weekday (ex: domingo)
  // capitalize first letter shouldn't be needed based on the design mockup which is lowercase 'domingo'
  weekdayString.value = now.toLocaleDateString('pt-BR', { weekday: 'long' });
  
  // Format date (ex: 22 de março de 2026)
  dateString.value = now.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
};

onMounted(() => {
  updateClock();
  intervalId = setInterval(updateClock, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.live-clock {
  line-height: 1.2;
}
.time-text {
  letter-spacing: -2px;
  color: #1d1d1d; /* text-dark equivalent */
}

body.body--dark .time-text {
  color: white;
}
</style>
