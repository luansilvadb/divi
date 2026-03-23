export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: string;
  category: string;
  type: TransactionType;
  accountId: string;
}

export interface Account {
  id: string;
  name: string;
  balance: number;
  type: string;
}
