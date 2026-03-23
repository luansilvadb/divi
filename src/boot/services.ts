import { defineBoot } from '#q-app/wrappers';
import { type IFinanceService } from 'src/core/services/finance.service';

// Este é um mock inicial até que o Supabase esteja configurado.
// Respeita a interface definida no Core (ACL).
const mockFinanceService: IFinanceService = {
  async getTransactions() {
    return await Promise.resolve([
      { id: '1', amount: 150.5, description: 'Mercado', date: '2024-03-22', category: 'Alimentação', type: 'expense', accountId: 'a1' },
      { id: '2', amount: 5000, description: 'Salário', date: '2024-03-21', category: 'Trabalho', type: 'income', accountId: 'a1' },
    ]);
  },
  async getAccounts() {
    return await Promise.resolve([{ id: 'a1', name: 'Nubank', balance: 4849.5, type: 'checking' }]);
  },
  async createTransaction(t) {
    return await Promise.resolve({ ...t, id: Math.random().toString() });
  },
  async deleteTransaction(id) {
    await Promise.resolve(console.log('Deleting', id));
  },
  async getAccountBalance(_accountId) {
    return await Promise.resolve(4849.5);
  }
};

export default defineBoot(({ app }) => {
  // Injeção de Dependências (IoC)
  app.provide('financeService', mockFinanceService);
});
