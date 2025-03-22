import { createContext, useCallback, useContext, useState } from "react";

import { DUMMY_EXPENSES } from "../../constants/dummy-data";
import { type Expense } from "../../types/expenses.types";

type ExpensesContextType = {
  expenses: Expense[];
  addExpense: (_expense: Expense) => void;
  removeExpense: (_expenseId: Expense["id"]) => void;
  updateExpense: (expense: Expense) => void;
};

const inititalExpensesState: ExpensesContextType = {
  expenses: [],
  addExpense: (_expense: Expense) => {},
  removeExpense: (_expenseId: Expense["id"]) => {},
  updateExpense: (_expense: Expense) => {},
};

const ExpensesContext = createContext<ExpensesContextType>(
  inititalExpensesState
);

export const ExpensesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // @TODO rewrite to reducer
  const [expenses, setExpenses] = useState<Expense[]>(DUMMY_EXPENSES);

  const addExpense = useCallback((expense: Omit<Expense, "id">) => {
    const newExpenseId = new Date().toString();
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: newExpenseId },
    ]);
  }, []);

  const removeExpense = useCallback(
    (id: Expense["id"]) => {
      const newExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(newExpenses);
    },
    [expenses]
  );

  const updateExpense = useCallback(
    ({ id, ...rest }: Partial<Expense>) => {
      const editedExpenseIdx = expenses.findIndex(
        (expense) => expense.id === id
      );
      if (!editedExpenseIdx) {
        return;
      }
      const editedExpense = expenses[editedExpenseIdx];
      const updatedExpense = { ...editedExpense, ...rest };
      const updatedExpenses = [...expenses];
      updatedExpenses[editedExpenseIdx] = updatedExpense;
      setExpenses(updatedExpenses);
    },
    [expenses]
  );

  return (
    <ExpensesContext.Provider
      value={{ expenses, addExpense, removeExpense, updateExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  if (!expensesContext) {
    throw Error("Expenses context used outside of context provider");
  }

  return expensesContext;
};
