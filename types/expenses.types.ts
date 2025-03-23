export type Expense = {
  id: string;
  amount: number;
  date: Date;
  description: string;
};

export type ExpenseInput = {
  amount: string;
  date: string;
  description: string;
}
