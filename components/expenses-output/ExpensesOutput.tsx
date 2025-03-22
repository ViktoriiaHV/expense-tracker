import { StyleSheet, View } from "react-native";

import EmptyState from "./EmptyState";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";
import { Expense } from "../../types/expenses.types";

type ExpensesOutputProps = {
  expenses: Expense[];
  expensesPeriod: string;
};

function ExpensesOutput({ expenses, expensesPeriod }: ExpensesOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />

      {expenses.length ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <EmptyState message="You haven't entered any expenses yet" />
      )}
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 0,
    paddingTop: 24,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
