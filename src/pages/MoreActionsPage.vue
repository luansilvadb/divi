<template>
  <q-page class="more-actions-page-container">
    <PageContentLayout>
      <template #header="{ scrollElement }">
        <SliverAppBar
          :expanded-height="160"
          :collapsed-height="56"
          pinned
          :scroll-target="scrollElement"
          :show-spacer="false"
        >
          <template #title>
            <div class="text-h5 text-weight-bold">{{ $t('settings.title') }}</div>
          </template>
          <template #actions>
            <q-btn flat round icon="help_outline" class="header-action-btn" />
          </template>
        </SliverAppBar>
      </template>

      <!-- Action Cards row -->
      <div class="row full-width q-col-gutter-md q-mb-lg">
        <div class="col-6">
          <ActionCard label="Sobre Cashew" icon="info" />
        </div>
        <div class="col-6">
          <ActionCard label="Opinião" icon="chat_bubble_outline" />
        </div>
      </div>

      <!-- Rest of the sections -->
      <div class="settings-sections">
        <SettingsSection :title="$t('settings.sections.theme')">
          <SettingsItem 
            :title="$t('settings.items.accentColor.label')" 
            icon="palette" 
            @click="showColorPicker = true"
          >
            <template #side>
              <div class="current-color-indicator" :style="{ backgroundColor: accentColor }" />
            </template>
          </SettingsItem>

          <SettingsItem
            :title="$t('settings.items.themeMode.label')"
            icon="brightness_6"
            :clickable="false"
            class="theme-mode-item"
          >
            <template #side>
              <BaseSelect
                v-model="themeMode"
                :options="themeOptions"
                emit-value
                map-options
              />
            </template>
          </SettingsItem>
        </SettingsSection>

        <SettingsSection :title="$t('settings.sections.preferences')">
          <SettingsItem :title="$t('settings.items.editHome.label')" icon="home" show-chevron />
          
          <SettingsItem :title="$t('settings.items.language.label')" icon="language" @click="showLanguagePicker = true">
            <template #caption>
              {{ $t('settings.items.language.caption') }}
              <a href="#" @click.prevent>Saiba mais sobre idiomas</a>
            </template>
            <template #side>
              <div
                class="language-pill q-px-md q-py-xs bg-grey-2 text-grey-9 text-caption text-weight-bolder"
              >
                {{ currentLanguageLabel }}
              </div>
            </template>
          </SettingsItem>

          <!-- Botão Expandível (Hero) -->
          <div class="relative-position q-mx-sm q-my-xs" style="min-height: 60px">
            <Motion
              as="div"
              layoutId="settings-hero-bg"
              :transition="{ type: 'spring', stiffness: 600, damping: 48, mass: 1 }"
              class="absolute-full settings-expansion-bg"
              style="border-radius: 12px; z-index: 0"
            />
            <div class="relative-position" style="z-index: 1">
              <SettingsItem
                :title="$t('settings.advanced')"
                :caption="$t('settings.items.font.label') + ', ' + $t('settings.sections.transactions').toLowerCase() + ', ' + $t('settings.sections.accounts').toLowerCase()"
                icon="tune"
                show-chevron
                @click="goToAdvanced"
                style="margin: 0 !important"
              />
            </div>
          </div>
        </SettingsSection>

        <SettingsSection :title="$t('settings.sections.tools')">
          <SettingsItem title="Bill Splitter" icon="restaurant" show-chevron />
        </SettingsSection>

        <SettingsSection :title="$t('settings.sections.importExport')">
          <SettingsItem title="Exportar para CSV (.csv)" icon="file_download" />
          <SettingsItem title="Importar arquivo CSV" icon="upload_file">
            <template #caption
              >Importe suas transações via arquivo CSV.
              <a href="#" @click.prevent>Ver formatos suportados</a></template
            >
            <template #side>
              <q-btn flat dense no-caps class="modelo-btn" color="primary">
                <span class="q-mr-xs">Modelo</span>
                <q-icon name="download" size="14px" />
              </q-btn>
            </template>
          </SettingsItem>
          <SettingsItem title="Importar do Google Sheet" icon="grid_on">
            <template #side>
              <q-btn flat dense no-caps class="modelo-btn" color="primary">
                <span class="q-mr-xs">Modelo</span>
                <q-icon name="open_in_new" size="14px" />
              </q-btn>
            </template>
          </SettingsItem>
        </SettingsSection>

        <SettingsSection :title="$t('settings.sections.backups')">
          <SettingsItem title="Exportar arquivo de dados" icon="upload" />
          <SettingsItem title="Importar arquivo de dados" icon="download" />
          <SettingsItem title="Google Drive" icon="cloud" show-chevron>
            <template #caption
              >Mantenha seus backups sincronizados na nuvem.
              <a href="#" @click.prevent>Como funciona?</a></template
            >
          </SettingsItem>
        </SettingsSection>
      </div>

      <ColorPickerBottomSheet
        v-model="showColorPicker"
        @open-custom="showCustomColorPicker = true"
      />
      <CustomColorPickerBottomSheet v-model="showCustomColorPicker" />
      <LanguageBottomSheet v-model="showLanguagePicker" />
    </PageContentLayout>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useUiStore } from 'src/stores/ui';
import BaseSelect from 'src/components/atoms/BaseSelect.vue';
import ActionCard from 'src/components/molecules/ActionCard.vue';
import ColorPickerBottomSheet from 'src/components/molecules/ColorPickerBottomSheet.vue';
import CustomColorPickerBottomSheet from 'src/components/molecules/CustomColorPickerBottomSheet.vue';
import LanguageBottomSheet from 'src/components/molecules/LanguageBottomSheet.vue';
import PageContentLayout from 'src/components/molecules/PageContentLayout.vue';
import SettingsItem from 'src/components/molecules/SettingsItem.vue';
import SettingsSection from 'src/components/molecules/SettingsSection.vue';
import SliverAppBar from 'src/components/molecules/SliverAppBar.vue';
import { storeToRefs } from 'pinia';
import { Motion } from 'motion-v';

const router = useRouter();
const uiStore = useUiStore();
const { t } = useI18n();
const { accentColor } = storeToRefs(uiStore);

const showColorPicker = ref(false);
const showCustomColorPicker = ref(false);
const showLanguagePicker = ref(false);

const goToAdvanced = () => {
  uiStore.setNavDirection('forward');
  void router.push('/actions/advanced');
};

const themeMode = computed({
  get: () => uiStore.themeMode,
  set: (val) => uiStore.setThemeMode(val),
});

const themeOptions = computed(() => [
  { label: t('settings.options.theme.light'), value: 'light' },
  { label: t('settings.options.theme.dark'), value: 'dark' },
  { label: t('settings.options.theme.auto'), value: 'auto' },
]);

const { locale } = storeToRefs(uiStore);
const currentLanguageLabel = computed(() => {
  if (locale.value === 'auto') return t('settings.options.theme.auto');
  if (locale.value === 'en-US') return 'English';
  if (locale.value === 'pt-BR') return 'Português';
  return locale.value;
});

</script>

<style scoped lang="scss">
.more-actions-page-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

// Action button specific styles
.current-color-indicator {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 2px solid white;
  box-shadow: 0 0 0 1px #e0e0e0;

  body.body--dark & {
    box-shadow: 0 0 0 1px #333;
  }
}

.language-pill {
  border-radius: 8px;
  font-weight: 600;
  background: #f1f3f4 !important;
}

body.body--dark .language-pill {
  background: #333 !important;
  color: white !important;
}

.modelo-btn {
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(var(--q-primary), 0.08);
  border-radius: 8px;
  padding: 2px 8px;

  body.body--dark & {
    background: rgba(var(--q-primary), 0.2);
    color: white !important;
  }
}

.settings-expansion-bg {
  background: white;
  transition: background 0.3s ease;
  z-index: -1 !important;

  body.body--dark & {
    background: #1e1e1e;
  }
}
</style>
