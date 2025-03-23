import { intlFormat, parse } from "date-fns";
import { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../../components/UI/Button";
import { expenseDraft } from "../../constants/dummy-data";
import { Expense, ExpenseInput } from "../../types/expenses.types";

type ExpenseFormProps = {
  onSubmit: (expenseData: Expense) => void;
  onCancel: () => void;
  mode: "add" | "edit";
  expense: Expense | undefined;
};

function ExpenseForm({ onCancel, onSubmit, mode, expense }: ExpenseFormProps) {
  const existingExpenseInput = useMemo(
    () =>
      expense && {
        ...expense,
        date: intlFormat(expense.date, { dateStyle: "short" }),
        amount: String(expense.amount),
      },
    [expense]
  );

  const [userInput, setUserInput] = useState<ExpenseInput>(
    existingExpenseInput || expenseDraft
  );

  const handleInputChange = (input: keyof typeof userInput, value: string) => {
    setUserInput((prevInput) => ({ ...prevInput, [input]: value }));
  };

  const submitHandler = () => {
    const expenseData = {
      id: existingExpenseInput?.id ?? new Date().toString(),
      amount: Number(userInput.amount),
      date: parse(userInput.date, "dd/MM/yyyy", new Date()),
      description: userInput.description,
    };
    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          keyboardType="decimal-pad"
          onChangeText={(value) => handleInputChange("amount", value)}
          style={{ flex: 2 }}
          value={userInput.amount}
        />
        <Input
          label="Date"
          placeholder="DD/MM/YYYY"
          maxLength={10}
          onChangeText={(value) => handleInputChange("date", value)}
          style={{ flex: 3 }}
          value={userInput.date}
        />
      </View>
      <Input
        label="Description"
        multiline
        autoCorrect={false}
        onChangeText={(value) => handleInputChange("description", value)}
        value={userInput.description}
      />
      <View style={styles.actionButtonsContainer}>
        <Button variant="link" onPress={onCancel} style={styles.actionButton}>
          Cancel
        </Button>
        <Button style={styles.actionButton} onPress={submitHandler}>
          {mode === "edit" ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}
export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
    marginVertical: 20,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
