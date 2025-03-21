import { FlatList, StyleSheet } from "react-native";

import ExpenseItem from "./ExpenseItem";
import { Expense } from "../../types/expenses.types";

type ExpensesListProps = {
  expenses: Expense[];
};

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => <ExpenseItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
export default ExpensesList;

const styles = StyleSheet.create({});
