import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useExpenses } from "../store/expenses-context/ExpensesContext";
import { ManageExpenseProps } from "../types/navigation.types";

function ManageExpense({ route, navigation }: ManageExpenseProps) {
  const editedExpenseId = route.params?.id;
  const isEditing = !!editedExpenseId;

  const { removeExpense } = useExpenses();

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

  const handleConfirm = () => {
    // @TODO: add expense
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.actionButtonsContainer}>
        <Button
          variant="link"
          onPress={handleCancel}
          style={styles.actionButton}
        >
          Cancel
        </Button>
        <Button style={styles.actionButton} onPress={handleConfirm}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>

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
