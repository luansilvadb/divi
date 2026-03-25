import { defineStore, acceptHMRUpdate } from 'pinia';
import { setCssVar, LocalStorage } from 'quasar';

export const useUiStore = defineStore('ui', {
  state: () => ({
    isSidebarMini: false,
    activeTab: 'home',
    themeMode: (LocalStorage.getItem('themeMode') as 'light' | 'dark' | 'auto') || 'auto',
    accentColor: (LocalStorage.getItem('accentColor') as string) || '#1976D2',
    locale: (LocalStorage.getItem('locale') as string) || 'auto',
    navDirection: 'forward' as 'forward' | 'backward',
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
      LocalStorage.set('themeMode', mode);
    },

    setAccentColor(color: string) {
      this.accentColor = color;
      setCssVar('primary', color);
      LocalStorage.set('accentColor', color);
    },

    setLocale(locale: string) {
      this.locale = locale;
      LocalStorage.set('locale', locale);
    },
    
    setNavDirection(dir: 'forward' | 'backward') {
      this.navDirection = dir;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}
