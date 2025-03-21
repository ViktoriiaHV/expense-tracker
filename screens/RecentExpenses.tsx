import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { DUMMY_EXPENSES } from "../constants/dummy-data";

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 days" expenses={DUMMY_EXPENSES} />;
}
export default RecentExpenses;
