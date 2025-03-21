import { Expense } from "../types/expenses.types";

export const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2025-03-15')
  },
  {
    id: 'e2',
    description: 'A new bag',
    amount: 279.50,
    date: new Date('2025-02-01')
  },
  {
    id: 'e3',
    description: 'Food',
    amount: 137.83,
    date: new Date('2025-03-20')
  },
  {
    id: 'e4',
    description: 'Books',
    amount: 53.65,
    date: new Date('2025-02-21')
  },
]