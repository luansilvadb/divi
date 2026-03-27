import { ref, computed, onMounted, onUnmounted, unref, watch } from 'vue';
import type { MaybeRef } from 'vue';

interface UseSliverEffectOptions {
  expandedHeight: MaybeRef<number>;
  collapsedHeight: MaybeRef<number>;
  pinned: MaybeRef<boolean>;
  scrollTarget?: MaybeRef<HTMLElement | Window | undefined | null>;
  rootRef?: MaybeRef<HTMLElement | undefined | null>;
}

function findScrollParent(el: HTMLElement | null): HTMLElement | Window {
  if (!el) return window;
  
  let parent = el.parentElement;
  while (parent) {
    const style = window.getComputedStyle(parent);
    const overflowY = style.overflowY;
    const overflow = style.overflow;

    if (
      overflowY === 'auto' || 
      overflowY === 'scroll' || 
      overflowY === 'overlay' ||
      overflow === 'auto' || 
      overflow === 'scroll' || 
      overflow === 'overlay'
    ) {
      return parent;
    }
    parent = parent.parentElement;
  }
  
  return window;
}

export function useSliverEffect(options: UseSliverEffectOptions) {
  const scrollY = ref(0);
  const detectedTarget = ref<HTMLElement | Window | null>(null);
  let ticking = false;
  
  const expanded = computed(() => unref(options.expandedHeight));
  const collapsed = computed(() => unref(options.collapsedHeight));
  const isPinned = computed(() => unref(options.pinned));

  const diff = computed(() => expanded.value - collapsed.value);

  const getTarget = () => unref(options.scrollTarget) || detectedTarget.value || window;

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

  const detectAndBind = () => {
    if (!unref(options.scrollTarget) && unref(options.rootRef)) {
      detectedTarget.value = findScrollParent(unref(options.rootRef) as HTMLElement);
    }
    bindEvent();
  };

  onMounted(() => {
    detectAndBind();
  });

  watch([() => unref(options.scrollTarget), () => unref(options.rootRef)], () => {
    detectAndBind();
  }, { immediate: true });

  onUnmounted(() => {
    if (currentTarget) {
      currentTarget.removeEventListener('scroll', onScroll);
    }
  });

  const visualOffset = computed(() => {
    // Se estiver fixado (pinned), o deslocamento visual é limitado pela diferença entre a altura expandida e a altura colapsada.
    // Isso garante que a barra pare de encolher ao atingir collapsedHeight e permaneça visível.
    if (isPinned.value) {
      return Math.min(diff.value, Math.max(0, scrollY.value));
    }
    // Se não estiver fixado, ela simplesmente sobe conforme o scroll.
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
