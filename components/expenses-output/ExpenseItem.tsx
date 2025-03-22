import { useNavigation } from "@react-navigation/native";
import { intlFormat } from "date-fns";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { Expense } from "../../types/expenses.types";
import { StackNavigationProps } from "../../types/navigation.types";

function ExpenseItem({ id, amount, description, date }: Expense) {
  const navigation = useNavigation<StackNavigationProps>();

  const pressItemHandler = () => {
    navigation.navigate("ManageExpense", {
      id,
    });
  };
  return (
    <Pressable
      onPress={pressItemHandler}
      style={({ pressed }) => pressed && GlobalStyles.pressedButton}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>
            {intlFormat(date, { dateStyle: "short" })}
          </Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    maxWidth: 250
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
