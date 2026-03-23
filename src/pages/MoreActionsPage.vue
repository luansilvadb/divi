<template>
  <q-page>
    <SliverAppBar
      :expanded-height="160"
      :collapsed-height="56"
      pinned
    >
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
              <div 
                class="current-color-indicator" 
                :style="{ backgroundColor: accentColor }"
              />
            </template>
          </SettingsItem>
          
          <SettingsItem title="Material You" icon="colorize">
            <template #caption>
              Use uma interface expressiva e colorida baseada no seu papel de parede. <a href="#" @click.prevent>Saiba mais</a>
            </template>
            <template #side>
              <q-toggle v-model="materialYou" color="primary" checked-icon="check" />
            </template>
          </SettingsItem>

          <SettingsItem 
            title="Modo de tema" 
            icon="brightness_6" 
            :clickable="false"
          >
            <template #bottom>
              <q-list dense class="q-mt-sm">
                <q-item 
                  v-for="opt in themeOptions" 
                  :key="opt.value" 
                  tag="label" 
                  v-ripple 
                  class="radio-item q-py-sm"
                >
                  <q-item-section avatar>
                    <q-radio v-model="themeMode" :val="opt.value" color="primary" size="32px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-subtitle2">{{ opt.label }}</q-item-label>
                    <q-item-label caption v-if="opt.desc">{{ opt.desc }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </template>
          </SettingsItem>
        </div>

        <!-- PREFERÊNCIAS -->
        <div class="category-header text-overline text-grey-7 q-px-sm q-mb-sm">PREFERÊNCIAS</div>
        <div class="section-card q-mb-xl">
          <SettingsItem title="Editar página inicial" icon="home" show-chevron />
          
          <SettingsItem title="Idioma" icon="language">
            <template #caption>
              Escolha o idioma preferido para a interface do Cashew. <a href="#" @click.prevent>Saiba mais sobre idiomas</a>
            </template>
            <template #side>
              <div class="language-pill q-px-md q-py-xs bg-grey-2 text-grey-9 text-caption text-weight-bolder">Português</div>
            </template>
          </SettingsItem>
          
          <SettingsItem 
            title="Mais opções" 
            caption="Estilo, transações, contas, formatação" 
            icon="tune" 
            show-chevron 
          />
        </div>

        <!-- FERRAMENTAS E EXTRAS -->
        <div class="category-header text-overline text-grey-7 q-px-sm q-mb-sm">FERRAMENTAS E EXTRAS</div>
        <div class="section-card q-mb-xl">
          <SettingsItem title="Bill Splitter" icon="restaurant" show-chevron />
        </div>

        <!-- IMPORTAR E EXPORTAR -->
        <div class="category-header text-overline text-grey-7 q-px-sm q-mb-sm">IMPORTAR E EXPORTAR</div>
        <div class="section-card q-mb-xl">
          <SettingsItem title="Exportar para CSV (.csv)" icon="file_download" />
          
          <SettingsItem title="Importar arquivo CSV" icon="upload_file">
            <template #caption>Importe suas transações via arquivo CSV. <a href="#" @click.prevent>Ver formatos suportados</a></template>
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
            <template #caption>Mantenha seus backups sincronizados na nuvem. <a href="#" @click.prevent>Como funciona?</a></template>
          </SettingsItem>
        </div>
      </div>

      <ColorPickerBottomSheet 
        v-model="showColorPicker" 
        @open-custom="showCustomColorPicker = true" 
      />
      
      <CustomColorPickerBottomSheet 
        v-model="showCustomColorPicker" 
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUiStore } from 'src/stores/ui';
import SliverAppBar from 'src/components/molecules/SliverAppBar.vue';
import ActionCard from 'src/components/molecules/ActionCard.vue';
import SettingsItem from 'src/components/molecules/SettingsItem.vue';
import ColorPickerBottomSheet from 'src/components/molecules/ColorPickerBottomSheet.vue';
import CustomColorPickerBottomSheet from 'src/components/molecules/CustomColorPickerBottomSheet.vue';
import { storeToRefs } from 'pinia';

const uiStore = useUiStore();
const { accentColor } = storeToRefs(uiStore);

const showColorPicker = ref(false);
const showCustomColorPicker = ref(false);

const materialYou = computed({
  get: () => uiStore.materialYou,
  set: (val) => uiStore.setMaterialYou(val)
});

const themeMode = computed({
  get: () => uiStore.themeMode,
  set: (val) => uiStore.setThemeMode(val)
});

const themeOptions = [
  { label: 'Claro', value: 'light', desc: 'Modo otimizado para ambientes claros.' },
  { label: 'Escuro', value: 'dark', desc: 'Economiza bateria e reduz cansaço visual.' },
  { label: 'Auto', value: 'auto', desc: 'Sincroniza com as configurações do seu dispositivo.' }
];


</script>

<style scoped lang="scss">
.max-width-container {
  max-width: 700px;
  margin: 0 auto;
}

.category-header {
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #616161; // text-grey-7
  transition: color 0.3s ease;
  
  body.body--dark & {
    color: #bdbdbd; // text-grey-5
  }

  // Material You Dynamic Color
  body[style*="--md-sys-color-"] & {
    color: var(--md-sys-color-secondary) !important;
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

  // Material You Dynamic Color
  body[style*="--md-sys-color-"] & {
    background: var(--md-sys-color-surface-container) !important;
    border-color: var(--md-sys-color-outline-variant) !important;
  }
}

.radio-item {
  border-radius: 12px;
  margin: 2px 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0,0,0,0.03);
  }
  
  body.body--dark &:hover {
    background: rgba(255,255,255,0.05);
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
</style>
