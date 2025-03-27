export type ExpenseInput = {
  amount: number;
  date: Date;
  description: string;
};

export type Expense = ExpenseInput & {
  id: string;
};

export type ExpenseDraft = {
  amount: string;
  date: string;
  description: string;
};
