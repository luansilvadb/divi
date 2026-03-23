import { defineStore, acceptHMRUpdate } from 'pinia';
import { setCssVar, LocalStorage } from 'quasar';
import { generateThemeFromHex, type DynamicScheme } from 'src/core/utils/theme';

export const useUiStore = defineStore('ui', {
  state: () => ({
    isSidebarMini: false,
    activeTab: 'home',
    themeMode: 'auto' as 'light' | 'dark' | 'auto',
    materialYou: LocalStorage.getItem('materialYou') === 'true',
    accentColor: LocalStorage.getItem('accentColor') as string || '#1976D2',
    dynamicTheme: null as { light: DynamicScheme; dark: DynamicScheme } | null,
  }),

  actions: {
    toggleSidebar() {
      this.isSidebarMini = !this.isSidebarMini;
    },
    setSidebarMini(val: boolean) {
      this.isSidebarMini = val;
    },
    setThemeMode(mode: 'light' | 'dark' | 'auto') {
      this.themeMode = mode;
    },
    setMaterialYou(val: boolean) {
      this.materialYou = val;
      LocalStorage.set('materialYou', val.toString());
      this.refreshDynamicTheme();
    },
    setAccentColor(color: string) {
      this.accentColor = color;
      setCssVar('primary', color);
      LocalStorage.set('accentColor', color);
      this.refreshDynamicTheme();
    },
    refreshDynamicTheme() {
      if (this.materialYou) {
        this.dynamicTheme = generateThemeFromHex(this.accentColor);
      } else {
        this.dynamicTheme = null;
      }
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}
