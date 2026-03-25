<template>
  <q-dialog
    v-model="internalModel"
    position="bottom"
    v-bind="dialogProps"
    class="language-picker-dialog"
  >
    <q-card class="language-picker-card q-pb-md">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6 text-weight-bold dark-text-white">Idioma</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup class="dark-text-white" />
      </q-card-section>

      <q-card-section class="q-pt-md">
        <!-- Translation Banner -->
        <div class="translation-banner q-pa-md q-mb-md row no-wrap items-center">
          <q-icon name="translate" color="white" size="sm" class="q-mr-md" />
          <div class="text-caption text-white">
            Se você gostaria de ajudar com traduções, envie um email
            <br />
            <a href="mailto:dapperappdeveloper@gmail.com" class="banner-link">
              dapperappdeveloper@gmail.com
            </a>
          </div>
        </div>

        <!-- Language List -->
        <div class="language-list-container scroll">
          <q-list padding class="q-pt-none">
            <q-item
              v-for="lang in availableLanguages"
              :key="lang.value"
              clickable
              v-ripple
              @click="selectLanguage(lang.value)"
              class="language-item q-mb-xs"
              :class="{ 'language-item--active': currentLocale === lang.value }"
            >
              <q-item-section avatar class="min-width-avatar">
                <div 
                  class="custom-radio" 
                  :class="{ 'custom-radio--active': currentLocale === lang.value }"
                >
                  <div v-if="currentLocale === lang.value" class="custom-radio__inner" />
                </div>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-subtitle1 text-weight-medium dark-text-white">
                  {{ lang.label }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUiStore } from 'src/stores/ui';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const uiStore = useUiStore();
const { locale: currentLocale } = storeToRefs(uiStore);

const internalModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const dialogProps = {
  transitionShow: 'slide-up',
  transitionHide: 'slide-down',
};

const availableLanguages = [
  { label: 'Sistema', value: 'auto' },
  { label: 'English', value: 'en-US' },
  { label: 'Français', value: 'fr' },
  { label: 'Español', value: 'es' },
  { label: '中文', value: 'zh-CN' },
  { label: '繁體中文', value: 'zh-TW' },
  { label: 'हिंदी', value: 'hi' },
  { label: 'العربية', value: 'ar' },
  { label: 'Português Do Brasil', value: 'pt-BR' },
  { label: 'Português De Portugal', value: 'pt-PT' },
  { label: 'Русский', value: 'ru' },
  { label: '日本語', value: 'ja' },
  { label: 'Deutsch', value: 'de' },
  { label: '한국어', value: 'ko' },
  { label: 'Türkçe', value: 'tr' },
  { label: 'Italiano', value: 'it' },
  { label: 'Tiếng Việt', value: 'vi' },
  { label: 'Polski', value: 'pl' },
];

const selectLanguage = (val: string) => {
  uiStore.setLocale(val);
  emit('update:modelValue', false);
};
</script>

<style scoped lang="scss">
.language-picker-card {
  border-radius: 28px 28px 0 0 !important;
  max-width: 600px;
  width: 100%;
  background: white;
  
  body.body--dark & {
    background: #121212;
  }
}

.language-list-container {
  max-height: 60vh;
}

.translation-banner {
  background: #3b4252;
  border-radius: 16px;
  
  body.body--dark & {
    background: #2e3440;
  }
}

.banner-link {
  color: #88c0d0;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.language-item {
  border-radius: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  &--active {
    background: rgba(var(--q-primary), 0.1) !important;
  }
  
  body.body--dark & {
    &:hover {
        background: rgba(255, 255, 255, 0.05);
    }
    &--active {
        background: rgba(255, 255, 255, 0.08) !important;
    }
  }
}

.min-width-avatar {
  min-width: 40px;
}

.custom-radio {
  width: 20px;
  height: 20px;
  border: 2px solid #9e9e9e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &--active {
    border-color: var(--q-primary);
  }
  
  body.body--dark & {
    border-color: #555;
    &--active {
      border-color: white;
    }
  }
}

.custom-radio__inner {
  width: 10px;
  height: 10px;
  background: var(--q-primary);
  border-radius: 50%;
  
  body.body--dark & {
    background: white;
  }
}

.dark-text-white {
  body.body--dark & {
    color: white !important;
  }
}
</style>
