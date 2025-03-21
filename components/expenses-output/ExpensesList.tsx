import { FlatList, View, Text } from "react-native";

import { Expense } from "../../types/expenses.types";

type ExpensesListProps = {
  expenses: Expense[];
};

const ExpenseItem = ({ amount, description }: Expense) => {
  return (
    <View>
      <Text>{description}</Text>
      <Text>{amount}</Text>
    </View>
  );
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
