<!-- Advanced Settings Page - No-Clipping Hero Transition -->
<template>
  <q-page class="advanced-settings-page-container relative-position all-pointer-events">
    <!-- Backdrop Global -->
    <Motion
      as="div"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.4, ease: 'easeInOut' }"
      class="backdrop fixed-full"
    />

    <!-- O surface que expande (Hero) - OVERFLOW VISIBLE para não cortar -->
    <Motion 
      as="div" 
      layoutId="settings-hero-bg" 
      :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
      class="full-expansion-card absolute-full"
      style="overflow: visible !important"
    >
      <div class="full-height full-width flex flex-column no-scroll-clipping">
        <!-- SliverAppBar Integrado - Forçado overflow visible -->
        <SliverAppBar :expanded-height="130" :collapsed-height="56" pinned class="settings-sliver-bar">
          <template #navigation>
            <Motion as="div" layoutId="settings-hero-icon" layout="position" :transition="{ type: 'spring', stiffness: 300, damping: 30 }" class="inline-block back-btn-layer">
              <q-btn flat round icon="arrow_back" color="grey-9" @click="goBack" class="back-btn" />
            </Motion>
          </template>
          
          <template #title>
            <Motion 
              as="div" 
              layoutId="settings-hero-title" 
              layout="position"
              :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
              class="text-h5 text-weight-bolder hero-title no-transform-clash"
            >
              Mais
            </Motion>
          </template>

          <template #actions>
            <q-btn flat round icon="help_outline" color="grey-7" />
          </template>
        </SliverAppBar>

        <!-- Conteúdo Interno -->
        <div class="scroll-container q-px-md q-pb-xl custom-scroll">
          <div class="settings-content-wrapper">
            <div class="settings-sections">
              <Motion
                as="div"
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ delay: 0.2, type: 'spring' }"
              >
                <div class="category-header text-overline q-px-sm q-mb-sm">Estilo</div>
                <div class="section-card q-mb-xl">
                  <div class="q-px-md q-py-sm settings-item-row">
                    <div class="item-content row items-center">
                      <q-icon name="view_agenda" size="sm" color="blue-8" class="q-mr-md" />
                      <div class="item-label text-weight-bold">Altura do cabeçalho</div>
                    </div>
                    <q-select dense borderless v-model="alturaCabecalho" :options="['Alto', 'Médio', 'Baixo']" class="custom-select" />
                  </div>

                  <div class="q-px-md q-py-sm settings-item-row">
                    <div class="item-content row items-center">
                      <q-icon name="star" size="sm" color="blue-8" class="q-mr-md" />
                      <div class="item-label text-weight-bold">Estilo de ícone</div>
                    </div>
                    <q-select dense borderless v-model="estiloIcone" :options="['Arredondado', 'Vazado', 'Preenchido']" class="custom-select" />
                  </div>
                </div>
              </Motion>

              <Motion
                as="div"
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ delay: 0.3, type: 'spring' }"
              >
                <div class="category-header text-overline q-px-sm q-mb-sm">Transações</div>
                <div class="section-card q-mb-xl">
                  <div class="q-px-md q-py-sm settings-item-row">
                    <div class="item-content row items-center">
                      <q-icon name="check_circle" size="sm" color="blue-8" class="q-mr-md" />
                      <div class="item-label text-weight-bold">Pagamento automático</div>
                    </div>
                    <q-toggle v-model="autoPagamento" color="primary" class="custom-toggle" />
                  </div>
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUiStore } from 'src/stores/ui';
import { Motion } from 'motion-v';
import SliverAppBar from 'components/molecules/SliverAppBar.vue';

const router = useRouter();
const uiStore = useUiStore();

const alturaCabecalho = ref('Médio');
const estiloIcone = ref('Arredondado');
const autoPagamento = ref(true);

const goBack = () => {
  uiStore.setNavDirection('backward');
  router.back();
};
</script>

<style scoped lang="scss">
.advanced-settings-page-container {
  min-height: 100vh;
  width: 100%;
}

.no-scroll-clipping {
  overflow: visible !important;
}

.backdrop {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: -1;
}

.fixed-full {
  position: fixed;
  inset: 0;
}

.full-expansion-card {
  width: 100%;
  height: 100%;
  background: #fafafa;
  
  body.body--dark & {
    background: #121212;
  }
}

.scroll-container {
  flex: 1;
  overflow-y: auto;
}

.custom-scroll {
  height: 100%;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
}

.settings-content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.settings-sliver-bar {
  background: transparent !important;
  /* IMPORTANTE: Liberar o corte nas camadas internas do Sliver */
  :deep(.sliver-clipping-zone) {
    overflow: visible !important;
    clip-path: none !important;
  }
  
  :deep(.sliver-title-wrapper) {
    justify-content: flex-start !important;
    padding-left: 64px;
    padding-top: 10px;
    overflow: visible !important;
  }
  
  :deep(.sliver-title) {
    transform: none !important;
    opacity: 1 !important;
    overflow: visible !important;
  }

  :deep(.sliver-bg-base), :deep(.sliver-bg-overlay) {
    background: transparent !important;
  }
}

.back-btn-layer {
  z-index: 100;
  position: relative;
}

.hero-title {
  color: #1a237e;
  body.body--dark & { color: white; }
  white-space: nowrap;
  z-index: 90;
}

.category-header {
  font-weight: 800;
  color: var(--q-primary);
  margin-top: 24px;
}

.section-card {
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.03);

  body.body--dark & {
    background: #1e1e1e;
    border-color: rgba(255,255,255,0.05);
  }
}

.settings-item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  body.body--dark & { border-bottom-color: rgba(255,255,255,0.05); }
}

.item-label {
  font-size: 1rem;
  color: #333;
  body.body--dark & { color: #eee; }
}

.custom-select {
  background: #f0f2f5;
  border-radius: 12px;
  min-width: 120px;
  padding: 4px 12px;
  :deep(.q-field__native) { font-weight: 600; color: var(--q-primary); }
  body.body--dark & {
    background: #2a2a2a;
    :deep(.q-field__native) { color: white; }
  }
}
</style>
