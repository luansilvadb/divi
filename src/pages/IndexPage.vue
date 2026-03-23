<template>
  <q-page>
    <SliverAppBar
      :expanded-height="160"
      :collapsed-height="56"
      :pinned="isPinned"
    >
      <template #title>
        <div class="text-h6">SliverAppBar</div>
      </template>
    </SliverAppBar>

    <div class="q-pb-xl"> <!-- Padding bottom to prevent footer overlap -->
      <div class="q-py-md flex flex-center" style="height: 60px;">
        <span>Scroll to see the SliverAppBar in effect.</span>
      </div>
      <div
        v-for="i in 20"
        :key="i"
        :class="['flex flex-center text-h4', i % 2 !== 0 ? 'bg-white' : 'bg-grey-3']"
        style="height: 100px;"
      >
        {{ i - 1 }}
      </div>
    </div>

    <!-- Bottom App Bar for Controls -->
    <q-page-sticky position="bottom" :offset="[0, 0]" expand style="z-index: 2000;">
      <q-toolbar class="bg-white text-dark shadow-up-2 justify-center q-pa-sm" style="min-height: auto;">
        <div class="row q-gutter-md">
          <div class="row items-center">
            <span class="text-caption">pinned</span>
            <q-toggle v-model="isPinned" dense />
          </div>
        </div>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SliverAppBar from 'components/molecules/SliverAppBar.vue';

const isPinned = ref(true);
</script>
