import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { useExpenses } from "../store/expenses-context/ExpensesContext";

function AllExpenses() {
  const { expenses } = useExpenses();

  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
}
export default AllExpenses;
