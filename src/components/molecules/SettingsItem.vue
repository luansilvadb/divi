<template>
  <div class="settings-item-container">
    <q-item
      :clickable="clickable"
      v-ripple="clickable"
      class="settings-item q-py-sm"
      :class="{ 'is-clickable': clickable }"
    >
      <q-item-section avatar v-if="icon || $slots.icon" class="q-pr-sm min-width-avatar">
        <slot name="icon">
          <q-icon :name="icon" color="grey-7" size="sm" />
        </slot>
      </q-item-section>

      <q-item-section>
        <q-item-label
          class="text-subtitle2 text-weight-bold text-grey-9 dark-text-white leading-tight"
        >
          <slot name="title">{{ title }}</slot>
        </q-item-label>
        <q-item-label
          v-if="caption || $slots.caption"
          caption
          class="text-grey-6 rich-caption q-mt-xs"
        >
          <slot name="caption">{{ caption }}</slot>
        </q-item-label>
      </q-item-section>

      <q-item-section side v-if="$slots.side || showChevron">
        <div class="row no-wrap items-center">
          <slot name="side" />
          <q-icon
            v-if="showChevron"
            name="chevron_right"
            color="grey-5"
            size="xs"
            class="q-ml-sm"
          />
        </div>
      </q-item-section>
    </q-item>

    <div v-if="$slots.bottom" class="settings-item-bottom q-pb-md">
      <slot name="bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    caption?: string | undefined;
    icon?: string;
    showChevron?: boolean;
    clickable?: boolean;
  }>(),
  {
    clickable: true,
    showChevron: false,
  },
);
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

  &.is-clickable:hover {
    background-color: #404144;
  }

  body.body--dark &.is-clickable:hover {
    background-color: #38393b;
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
