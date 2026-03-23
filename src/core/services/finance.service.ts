import type { Transaction, Account } from '../models/finance';

export interface IFinanceService {
  getTransactions(): Promise<Transaction[]>;
  getAccounts(): Promise<Account[]>;
  createTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction>;
  deleteTransaction(id: string): Promise<void>;
  getAccountBalance(accountId: string): Promise<number>;
}
