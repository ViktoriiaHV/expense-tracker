import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { DUMMY_EXPENSES } from "../constants/dummy-data";

function AllExpenses() {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Total"/>;
}
export default AllExpenses;