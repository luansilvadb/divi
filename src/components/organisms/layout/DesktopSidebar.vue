<template>
  <q-drawer
    show-if-above
    class="gt-sm desktop-drawer"
    :width="320"
    :mini="isMini"
    :mini-width="80"
  >
    <div class="column no-wrap fit">
      <div class="relative-position q-pa-md row justify-center">
        <q-btn
          round
          flat
          dense
          color="grey-8"
          :icon="isMini ? 'chevron_right' : 'chevron_left'"
          @click="uiStore.toggleSidebar"
          :class="isMini ? '' : 'absolute-top-left q-mt-md q-ml-md z-top'"
        />
        <LiveClock v-show="!isMini" class="q-mt-sm" />
      </div>

      <q-scroll-area ref="scrollAreaRef" class="col q-px-sm">
        <q-list>
          <NavLink
            v-for="nav in navItems"
            :key="nav.label"
            v-bind="nav"
            :mini="isMini"
          />

          <q-expansion-item
            v-show="!isMini"
            expand-icon-class="text-grey-7"
            class="q-mb-xs"
            header-class="nav-item text-subtitle1"
            icon="edit_note"
            :label="t('nav.edit_data')"
            @show="scrollToBottom"
          >
            <q-list class="q-pl-sm q-pr-sm q-pt-sm">
              <NavLink
                v-for="sub in editDataItems"
                :key="sub.label"
                v-bind="sub"
              />
            </q-list>
          </q-expansion-item>

          <!-- Mini mode: edit popup -->
          <q-item v-show="isMini" clickable v-ripple class="nav-item q-mb-xs">
            <q-item-section avatar>
              <q-icon name="edit_note" class="nav-icon" />
            </q-item-section>
            <q-menu anchor="center right" self="center left" :offset="[8, 0]" class="edit-data-menu">
              <q-list class="q-pa-sm">
                <NavLink
                  v-for="sub in editDataItems"
                  :key="sub.label"
                  v-bind="sub"
                />
              </q-list>
            </q-menu>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-list class="q-px-sm q-pb-md">
        <q-separator class="q-my-sm" v-show="!isMini" />
        <q-item clickable v-ripple class="nav-item q-mb-xs text-weight-medium">
          <q-item-section avatar><q-icon name="login" class="nav-icon" /></q-item-section>
          <q-item-section v-show="!isMini">{{ t('footer.connect') }}</q-item-section>
        </q-item>
        <q-item clickable v-ripple class="nav-item q-mb-xs" to="/actions">
          <q-item-section avatar><q-icon name="settings" class="nav-icon" /></q-item-section>
          <q-item-section v-show="!isMini">{{ t('footer.settings') }}</q-item-section>
        </q-item>
        <q-item clickable v-ripple class="nav-item q-mb-xs">
          <q-item-section avatar><q-icon name="info_outline" class="nav-icon" /></q-item-section>
          <q-item-section v-show="!isMini">{{ t('footer.about') }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUiStore } from 'src/stores/ui';
import { useNavigation } from 'src/composables/useNavigation';
import NavLink from 'components/molecules/NavLink.vue';
import LiveClock from './LiveClock.vue';

const { t } = useI18n();
const uiStore = useUiStore();
const { navItems, editDataItems } = useNavigation();
const isMini = computed(() => uiStore.isSidebarMini);

const scrollAreaRef = ref<{ setScrollPercentage: (axis: string, amount: number) => void } | null>(null);

const scrollToBottom = () => {
  let duration = 0;
  const interval = setInterval(() => {
    if (scrollAreaRef.value) scrollAreaRef.value.setScrollPercentage('vertical', 1);
    duration += 20;
    if (duration > 350) clearInterval(interval);
  }, 20);
};
</script>

<style scoped lang="scss">
.desktop-drawer { background-color: $sidebar-bg; }
:deep(.nav-item) {
  border-radius: 12px;
  color: $nav-text; 
  transition: all 0.2s ease;
}
</style>

<style lang="scss">
.edit-data-menu {
  background-color: $sidebar-bg;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  min-width: 220px;
}
</style>
