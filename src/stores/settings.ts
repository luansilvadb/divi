import { defineStore, acceptHMRUpdate } from 'pinia';
import { LocalStorage } from 'quasar';

export interface SettingsState {
  display: {
    font: string;
    animations: 'Todos' | 'Reduzido' | 'Nenhum';
    numericAnimation: 'Conte' | 'Troque' | 'Deslize';
    textContrast: boolean;
    headerHeight: 'Alto' | 'Médio' | 'Baixo';
    iconStyle: 'Arredondado' | 'Vazado' | 'Preenchido';
  };
  transactions: {
    autoPay: boolean;
    paymentDate: 'Data atual' | 'Data da transação' | 'Personalizado';
    bannerDateType: 'Total do dia' | 'Total acumulado';
    monthlySpendingSummary: boolean;
  };
  accounts: {
    accountLabel: boolean;
    primaryCurrency: string;
  };
}

const STORAGE_KEY = 'advanced_settings';

const DEFAULT_SETTINGS: SettingsState = {
  display: {
    font: 'Padrão',
    animations: 'Todos',
    numericAnimation: 'Conte',
    textContrast: false,
    headerHeight: 'Médio',
    iconStyle: 'Arredondado',
  },
  transactions: {
    autoPay: true,
    paymentDate: 'Data atual',
    bannerDateType: 'Total do dia',
    monthlySpendingSummary: true,
  },
  accounts: {
    accountLabel: true,
    primaryCurrency: 'BRL',
  },
};

export const useSettingsStore = defineStore('settings', {
  state: (): SettingsState => {
    const stored = LocalStorage.getItem<SettingsState>(STORAGE_KEY);
    return stored || DEFAULT_SETTINGS;
  },

  actions: {
    updateDisplaySetting<K extends keyof SettingsState['display']>(
      key: K,
      value: SettingsState['display'][K]
    ) {
      this.display[key] = value;
      this.save();
    },

    updateTransactionSetting<K extends keyof SettingsState['transactions']>(
      key: K,
      value: SettingsState['transactions'][K]
    ) {
      this.transactions[key] = value;
      this.save();
    },

    updateAccountSetting<K extends keyof SettingsState['accounts']>(
      key: K,
      value: SettingsState['accounts'][K]
    ) {
      this.accounts[key] = value;
      this.save();
    },

    resetToDefaults() {
      // Re-initialize state categories from DEFAULT_SETTINGS
      (Object.keys(DEFAULT_SETTINGS) as Array<keyof SettingsState>).forEach((category) => {
        const defaultCategory = DEFAULT_SETTINGS[category];
        if (typeof defaultCategory === 'object' && defaultCategory !== null) {
          (this as unknown as Record<string, unknown>)[category as string] = { ...defaultCategory };
        }
      });
      this.save();
    },

    updateSetting<C extends keyof SettingsState, K extends keyof SettingsState[C]>(
      category: C,
      key: K,
      value: SettingsState[C][K]
    ) {
      const targetCategory = this[category];
      if (typeof targetCategory === 'object' && targetCategory !== null) {
        (targetCategory as Record<string, unknown>)[key as string] = value;
        this.save();
      }
    },

    save() {
      LocalStorage.set(STORAGE_KEY, this.$state);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot));
}
