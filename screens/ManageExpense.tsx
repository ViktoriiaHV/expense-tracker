import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "../components/UI/IconButton";
import ExpenseForm from "../components/manage-expense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import { useExpenses } from "../store/expenses-context/ExpensesContext";
import { Expense } from "../types/expenses.types";
import { ManageExpenseProps } from "../types/navigation.types";

function ManageExpense({ route, navigation }: ManageExpenseProps) {
  const editedExpenseId = route.params?.id;
  const isEditing = !!editedExpenseId;

  const { removeExpense, addExpense, updateExpense, expenses } = useExpenses();

  const expenseObject = expenses.find((exp) => exp.id === editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  const handleDeleteExpense = () => {
    if (!isEditing) {
      return;
    }
    removeExpense(editedExpenseId);
    navigation.goBack();
  };

  const handleCancel = () => navigation.goBack();

  const handleConfirm = (expenseData: Expense) => {
    if (isEditing) {
      updateExpense(expenseData);
    } else {
      addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={handleCancel}
        onSubmit={handleConfirm}
        mode={isEditing ? "edit" : "add"}
        expense={expenseObject}
      />
      <View style={styles.deleteContainer}>
        {isEditing && (
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={30}
            onPress={handleDeleteExpense}
          />
        )}
      </View>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  actionButton: {
    minWidth: 120,
  },
});
