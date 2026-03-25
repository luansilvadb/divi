import { ref, computed, onMounted, onUnmounted, unref, watch } from 'vue';
import type { MaybeRef } from 'vue';

interface UseSliverEffectOptions {
  expandedHeight: MaybeRef<number>;
  collapsedHeight: MaybeRef<number>;
  pinned: MaybeRef<boolean>;
  scrollTarget?: MaybeRef<HTMLElement | Window | undefined | null>;
}

export function useSliverEffect(options: UseSliverEffectOptions) {
  const scrollY = ref(0);
  let ticking = false;
  
  const expanded = computed(() => unref(options.expandedHeight));
  const collapsed = computed(() => unref(options.collapsedHeight));
  const isPinned = computed(() => unref(options.pinned));

  const diff = computed(() => expanded.value - collapsed.value);

  const getTarget = () => unref(options.scrollTarget) || window;

  const updateScroll = () => {
    const target = getTarget();
    if (target === window) {
      scrollY.value = window.scrollY;
    } else {
      scrollY.value = (target as HTMLElement).scrollTop || 0;
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  };

  let currentTarget: EventTarget | null = null;

  const bindEvent = () => {
    const newTarget = getTarget();
    if (currentTarget === newTarget) return;
    
    if (currentTarget) {
      currentTarget.removeEventListener('scroll', onScroll);
    }
    
    if (newTarget) {
      newTarget.addEventListener('scroll', onScroll, { passive: true });
      currentTarget = newTarget;
      updateScroll();
    }
  };

  onMounted(() => {
    bindEvent();
  });

  watch(() => unref(options.scrollTarget), () => {
    bindEvent();
  });

  onUnmounted(() => {
    if (currentTarget) {
      currentTarget.removeEventListener('scroll', onScroll);
    }
  });

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

  return {
    scrollY,
    diff,
    visualOffset,
    progress
  };
}
