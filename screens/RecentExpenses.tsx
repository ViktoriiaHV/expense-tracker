import { isAfter, subDays } from "date-fns";
import { useMemo } from "react";

import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { useExpenses } from "../store/expenses-context/ExpensesContext";

function RecentExpenses() {
  const { expenses } = useExpenses();
  const recentExpenses = useMemo(
    () =>
      expenses.filter((expense) =>
        isAfter(expense.date, subDays(new Date(), 7))
      ),
    [expenses]
  );

  return (
    <ExpensesOutput expensesPeriod="Last 7 days" expenses={recentExpenses} />
  );
}
export default RecentExpenses;
