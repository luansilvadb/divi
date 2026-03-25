<template>
  <q-page>
    <SliverAppBar :expanded-height="160" :collapsed-height="56" pinned>
      <template #title>
        <div class="text-h5 text-weight-bold">Configurações</div>
      </template>
      <template #actions>
        <q-btn flat round icon="help_outline" class="header-action-btn" />
      </template>
    </SliverAppBar>

    <div class="q-pa-md max-width-container">
      <!-- Action Cards row -->
      <div class="row full-width q-col-gutter-md q-mb-lg">
        <div class="col-6">
          <ActionCard label="Sobre Cashew" icon="info" />
        </div>
        <div class="col-6">
          <ActionCard label="Opinião" icon="chat_bubble_outline" />
        </div>
      </div>

      <div class="settings-sections">
        <!-- TEMA -->
        <div class="category-header text-overline q-px-sm q-mb-sm">TEMA</div>
        <div class="section-card q-mb-xl">
          <SettingsItem title="Cor de destaque" icon="palette" @click="showColorPicker = true">
            <template #side>
              <div class="current-color-indicator" :style="{ backgroundColor: accentColor }" />
            </template>
          </SettingsItem>

          <SettingsItem
            title="Modo de tema"
            icon="brightness_6"
            :clickable="false"
            class="theme-mode-item"
          >
            <template #side>
              <BaseSelect
                v-model="themeMode"
                :options="[
                  { label: 'Claro', value: 'light' },
                  { label: 'Escuro', value: 'dark' },
                  { label: 'Sistema', value: 'auto' },
                ]"
                emit-value
                map-options
              />
            </template>
          </SettingsItem>
        </div>

        <!-- PREFERÊNCIAS -->
        <div class="category-header text-overline text-grey-7 q-px-sm q-mb-sm">PREFERÊNCIAS</div>
        <div class="section-card q-mb-xl">
          <SettingsItem title="Editar página inicial" icon="home" show-chevron />
          <SettingsItem title="Idioma" icon="language" @click="showLanguagePicker = true">
            <template #caption>
              Escolha o idioma preferido para a interface do Cashew.
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
          <div class="relative-position full-width" style="min-height: 64px">
            <Motion
              as="div"
              layoutId="settings-hero-bg"
              :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
              class="absolute-full settings-expansion-bg"
              style="border-radius: 12px; z-index: 0"
            />
            <Motion
              as="div"
              :while-tap="{ scale: 0.98 }"
              class="relative-position"
              style="z-index: 1"
            >
              <SettingsItem
                title=""
                caption="Estilo, transações, contas, formatação"
                show-chevron
                @click="goToAdvanced"
                style="background: transparent !important"
              >
                <template #title>
                  <Motion
                    as="div"
                    layoutId="settings-hero-title"
                    :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
                    class="text-subtitle2 text-weight-bold text-grey-9 dark-text-white"
                  >
                    Mais opções
                  </Motion>
                </template>
                <template #icon>
                  <Motion
                    as="div"
                    layoutId="settings-hero-icon"
                    :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
                  >
                    <q-icon name="tune" color="grey-7" size="sm" />
                  </Motion>
                </template>
              </SettingsItem>
            </Motion>
          </div>
        </div>

        <!-- FERRAMENTAS E EXTRAS -->
        <div class="category-header text-overline text-grey-7 q-px-sm q-mb-sm">
          FERRAMENTAS E EXTRAS
        </div>
        <div class="section-card q-mb-xl">
          <SettingsItem title="Bill Splitter" icon="restaurant" show-chevron />
        </div>

        <!-- IMPORTAR E EXPORTAR -->
        <div class="category-header text-overline text-grey-7 q-px-sm q-mb-sm">
          IMPORTAR E EXPORTAR
        </div>
        <div class="section-card q-mb-xl">
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
        </div>

        <!-- BACKUPS -->
        <div class="category-header text-overline text-grey-7 q-px-sm q-mb-sm">BACKUPS</div>
        <div class="section-card q-mb-xl">
          <SettingsItem title="Exportar arquivo de dados" icon="upload" />
          <SettingsItem title="Importar arquivo de dados" icon="download" />
          <SettingsItem title="Google Drive" icon="cloud" show-chevron>
            <template #caption
              >Mantenha seus backups sincronizados na nuvem.
              <a href="#" @click.prevent>Como funciona?</a></template
            >
          </SettingsItem>
        </div>
      </div>

      <ColorPickerBottomSheet
        v-model="showColorPicker"
        @open-custom="showCustomColorPicker = true"
      />
      <CustomColorPickerBottomSheet v-model="showCustomColorPicker" />
      <LanguageBottomSheet v-model="showLanguagePicker" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUiStore } from 'src/stores/ui';
import SliverAppBar from 'src/components/molecules/SliverAppBar.vue';
import ActionCard from 'src/components/molecules/ActionCard.vue';
import SettingsItem from 'src/components/molecules/SettingsItem.vue';
import ColorPickerBottomSheet from 'src/components/molecules/ColorPickerBottomSheet.vue';
import CustomColorPickerBottomSheet from 'src/components/molecules/CustomColorPickerBottomSheet.vue';
import LanguageBottomSheet from 'src/components/molecules/LanguageBottomSheet.vue';
import BaseSelect from 'src/components/atoms/BaseSelect.vue';
import { storeToRefs } from 'pinia';
import { Motion } from 'motion-v';

const router = useRouter();
const uiStore = useUiStore();
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

const { locale } = storeToRefs(uiStore);
const currentLanguageLabel = computed(() => {
  if (locale.value === 'auto') return 'Sistema';
  if (locale.value === 'en-US') return 'English';
  if (locale.value === 'pt-BR') return 'Português';
  return locale.value;
});
</script>

<style scoped lang="scss">
.max-width-container {
  max-width: 700px;
  margin: 0 auto;
}

.settings-expansion-bg {
  background: white;
  border: 1px solid #f2f2f2;

  body.body--dark & {
    background: #1e1e1e;
    border-color: #333;
  }
}

.category-header {
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #616161; // text-grey-7
  transition: color 0.3s ease;

  body.body--dark & {
    color: #bdbdbd; // text-grey-5
  }
}

.header-action-btn {
  color: #616161;
}

body.body--dark .header-action-btn {
  color: white;
}

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

.language-pill {
  border-radius: 12px;
  background: #f1f3f4 !important;
}

body.body--dark .language-pill {
  background: #333 !important;
  color: white !important;
}

.modelo-btn {
  background: rgba(var(--q-primary), 0.08);
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 700;

  body.body--dark & {
    background: rgba(var(--q-primary), 0.2);
    color: white !important;
  }
}

.dark-text-white {
  body.body--dark & {
    color: white !important;
  }
}

.current-color-indicator {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  body.body--dark & {
    border-color: rgba(255, 255, 255, 0.2);
  }
}

.theme-mode-item :deep(.settings-item:hover),
body.body--dark .theme-mode-item :deep(.settings-item:hover) {
  background-color: transparent !important;
}
</style>
