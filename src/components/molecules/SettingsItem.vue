<template>
  <div class="settings-item-container">
    <q-item :clickable="clickable" v-ripple="clickable" class="settings-item q-py-sm">
      <q-item-section avatar v-if="icon" class="q-pr-sm min-width-avatar">
        <q-icon :name="icon" color="grey-7" size="sm" />
      </q-item-section>
      
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bold text-grey-9 dark-text-white leading-tight">{{ title }}</q-item-label>
        <q-item-label v-if="caption || $slots.caption" caption class="text-grey-6 rich-caption q-mt-xs">
          <slot name="caption">{{ caption }}</slot>
        </q-item-label>
      </q-item-section>

      <q-item-section side v-if="$slots.side || showChevron">
        <div class="row no-wrap items-center">
          <slot name="side" />
          <q-icon v-if="showChevron" name="chevron_right" color="grey-5" size="xs" class="q-ml-sm" />
        </div>
      </q-item-section>
    </q-item>
    
    <div v-if="$slots.bottom" class="settings-item-bottom q-pb-md">
       <slot name="bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string;
  caption?: string;
  icon?: string;
  showChevron?: boolean;
  clickable?: boolean;
}>(), {
  clickable: true,
  showChevron: false
});
</script>

<style scoped lang="scss">
.settings-item-container {
  transition: all 0.2s ease;
}

.settings-item {
  min-height: 60px;
  border-radius: 12px;
  margin: 2px 8px;
  overflow: hidden;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  
  body.body--dark &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
}

.min-width-avatar {
  min-width: 40px;
}

.leading-tight {
  line-height: 1.2;
}

.rich-caption {
  font-size: 0.85rem;
  line-height: 1.4;
  
  :deep(a) {
    color: var(--q-primary);
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
}

.settings-item-bottom {
  padding-left: 56px; /* 40px avatar + 16px section padding */
  padding-right: 16px;
}

.dark-text-white {
  body.body--dark & {
    color: white !important;
  }
}
</style>
