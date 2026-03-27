import type { SETTINGS_OPTIONS } from '../constants/settingsOptions';

export interface SettingsItemConfig {
  key: string;
  icon: string;
  type: 'badge' | 'select' | 'toggle' | 'nav';
  optionsKey?: keyof typeof SETTINGS_OPTIONS;
  caption?: string;
  storeCategory: 'display' | 'transactions' | 'accounts';
}

export interface SettingsSectionConfig {
  sectionKey: string;
  items: SettingsItemConfig[];
}

export const advancedSettingsConfig: SettingsSectionConfig[] = [
  {
    sectionKey: 'style',
    items: [
      { key: 'font', icon: 'font_download', type: 'badge', storeCategory: 'display' },
      { 
        key: 'animations', 
        icon: 'animation', 
        type: 'select', 
        optionsKey: 'animations', 
        storeCategory: 'display' 
      },
      { 
        key: 'numericAnimation', 
        icon: '123', 
        type: 'select', 
        optionsKey: 'numericAnimation', 
        storeCategory: 'display' 
      },
      { key: 'textContrast', icon: 'contrast', type: 'toggle', storeCategory: 'display' },
      { 
        key: 'headerHeight', 
        icon: 'view_agenda', 
        type: 'select', 
        optionsKey: 'headerHeight', 
        storeCategory: 'display' 
      },
      { 
        key: 'iconStyle', 
        icon: 'star', 
        type: 'select', 
        optionsKey: 'iconStyle', 
        storeCategory: 'display' 
      },
    ],
  },
  {
    sectionKey: 'transactions',
    items: [
      { key: 'autoPay', icon: 'check_circle', type: 'badge', storeCategory: 'transactions' },
      { 
        key: 'paymentDate', 
        icon: 'calendar_today', 
        type: 'select', 
        optionsKey: 'paymentDate', 
        storeCategory: 'transactions' 
      },
      { 
        key: 'bannerDateType', 
        icon: 'view_headline', 
        type: 'select', 
        optionsKey: 'bannerDateType', 
        storeCategory: 'transactions' 
      },
      { key: 'monthlySpendingSummary', icon: 'scale', type: 'toggle', storeCategory: 'transactions' },
    ],
  },
  {
    sectionKey: 'accounts',
    items: [
      { key: 'accountLabel', icon: 'label', type: 'toggle', storeCategory: 'accounts' },
      { key: 'exchangeRates', icon: 'currency_exchange', type: 'nav', storeCategory: 'accounts' },
      { key: 'primaryCurrency', icon: 'account_balance_wallet', type: 'badge', storeCategory: 'accounts' },
    ],
  },
  {
    sectionKey: 'budgets',
    items: [
      { key: 'budgetTotalType', icon: 'fullscreen_exit', type: 'nav', storeCategory: 'accounts' },
    ],
  },
];
