import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { NavigationItem } from 'src/types/navigation';

export function useNavigation() {
  const { t } = useI18n();

  const navItems = computed<NavigationItem[]>(() => [
    { label: t('nav.home'), icon: 'space_dashboard', to: '/' },
    { label: t('nav.transactions'), icon: 'account_balance_wallet', to: '/transacoes' },
    { label: t('nav.budgets'), icon: 'pie_chart_outline', to: '/orcamentos' },
    { label: t('nav.goals'), icon: 'savings', to: '/metas' },
    { label: t('nav.loans'), icon: 'account_balance', to: '/emprestimos' },
    { label: t('nav.subscriptions'), icon: 'event_repeat', to: '/assinaturas' },
    { label: t('nav.scheduled'), icon: 'event_available', to: '/agendado' },
    { label: t('nav.calendar'), icon: 'calendar_month', to: '/calendario' },
    { label: t('nav.activity'), icon: 'receipt_long', to: '/registro' },
    { label: t('nav.all_expenses'), icon: 'receipt', to: '/gastos' },
  ]);

  const editDataItems = computed<NavigationItem[]>(() => [
    { label: t('nav.account_details'), icon: 'account_balance_wallet', to: '/editar/conta' },
    { label: t('nav.budget_details'), icon: 'pie_chart', to: '/editar/orcamentos' },
    { label: t('nav.category_details'), icon: 'category', to: '/editar/categorias' },
    { label: t('nav.title_details'), icon: 'title', to: '/editar/titulos' },
    { label: t('nav.goal_details'), icon: 'savings', to: '/editar/objetivos' },
  ]);

  return {
    navItems,
    editDataItems,
  };
}
