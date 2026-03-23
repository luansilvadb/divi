import { ref, computed, onMounted, onUnmounted, unref } from 'vue';
import type { MaybeRef } from 'vue';

interface UseSliverEffectOptions {
  expandedHeight: MaybeRef<number>;
  collapsedHeight: MaybeRef<number>;
  pinned: MaybeRef<boolean>;
}

export function useSliverEffect(options: UseSliverEffectOptions) {
  const scrollY = ref(0);
  let ticking = false;
  
  const expanded = computed(() => unref(options.expandedHeight));
  const collapsed = computed(() => unref(options.collapsedHeight));
  const isPinned = computed(() => unref(options.pinned));

  const diff = computed(() => expanded.value - collapsed.value);

  const updateScroll = () => {
    scrollY.value = window.scrollY;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  };

  const visualOffset = computed(() => {
    if (isPinned.value) {
      return Math.min(diff.value, Math.max(0, scrollY.value));
    }
    return Math.max(0, scrollY.value);
  });

  const progress = computed(() => {
    if (diff.value <= 0) return 1;
    return Math.min(1, Math.max(0, visualOffset.value / diff.value));
  });

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return {
    scrollY,
    diff,
    visualOffset,
    progress
  };
}
