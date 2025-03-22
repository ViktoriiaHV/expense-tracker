import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { useExpenses } from "../store/expenses-context/ExpensesContext";

function RecentExpenses() {
  const { expenses } = useExpenses();
  return <ExpensesOutput expensesPeriod="Last 7 days" expenses={expenses} />;
}
export default RecentExpenses;
