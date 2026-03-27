<template>
  <q-page class="advanced-settings-page column no-wrap">
    <PageContentLayout>
      <template #header="{ scrollElement }">
        <SliverAppBar
          :expanded-height="160"
          :collapsed-height="56"
          pinned
          back-button
          :scroll-target="scrollElement"
          :show-spacer="false"
          @back="goBack"
        >
          <template #title>
            <div class="text-h5 text-weight-bold">Mais opções</div>
          </template>

          <template #actions>
            <q-btn round flat icon="more_vert" color="grey-7">
              <q-menu auto-close class="custom-menu">
                <q-list style="min-width: 150px">
                  <q-item clickable @click="resetSettings()">
                    <q-item-section side>
                      <q-icon name="restart_alt" size="xs" />
                    </q-item-section>
                    <q-item-section>{{ $t('common.reset') }}</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section side>
                      <q-icon name="help_outline" size="xs" />
                    </q-item-section>
                    <q-item-section>{{ $t('common.about') }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </template>
        </SliverAppBar>
      </template>

      <div class="settings-container max-width-container">
        <div v-for="(section, sectionIdx) in advancedSettingsConfig" :key="section.sectionKey">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.1 + sectionIdx * 0.1, duration: 0.5, ease: 'easeOut' }"
          >
            <SettingsSection :title="$t(`settings.sections.${section.sectionKey}`)">
              <SettingsItemRenderer v-for="item in section.items" :key="item.key" :config="item" />
            </SettingsSection>
          </Motion>
        </div>
      </div>
    </PageContentLayout>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Motion } from 'motion-v';
import SliverAppBar from 'src/components/molecules/SliverAppBar.vue';
import PageContentLayout from 'src/components/molecules/PageContentLayout.vue';
import SettingsSection from 'src/components/molecules/SettingsSection.vue';
import SettingsItemRenderer from 'src/components/molecules/SettingsItemRenderer.vue';
import { advancedSettingsConfig } from 'src/core/config/settings';
import { useSettingsStore } from 'src/stores/settings';

const router = useRouter();
const settingsStore = useSettingsStore();

const resetSettings = () => {
  settingsStore.resetToDefaults();
};

const goBack = () => {
  router.back();
};
</script>

<style scoped lang="scss">
.advanced-settings-page {
  background: #f8f9fa;
  height: 100vh;
}

body.body--dark .advanced-settings-page {
  background: #121212;
}

.settings-container {
  padding: 8px 16px 32px;
}

.max-width-container {
  max-width: 600px;
  margin: 0 auto;
}

/* Ensure smooth transition for backdrop-filter on scroll */
:deep(.sliver-app-bar) {
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}
</style>
