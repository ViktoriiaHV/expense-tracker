import { intlFormat, parse } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../../components/UI/Button";
import { expenseDraft } from "../../constants/dummy-data";
import { GlobalStyles } from "../../constants/styles";
import { Expense, ExpenseDraft, ExpenseInput } from "../../types/expenses.types";

type ExpenseFormProps = {
  onSubmit: (expenseData: Expense | ExpenseInput) => void;
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

  const [userInput, setUserInput] = useState<ExpenseDraft>(
    existingExpenseInput || expenseDraft
  );

  const [formError, setFormError] = useState<string | null>(null);

  const isDataValid = useCallback(
    ({ amount, date, description }: ExpenseInput): boolean => {
      if (amount <= 0 || isNaN(amount)) {
        setFormError(
          "Amount input is incorrect. Please use a number greater than 0."
        );
        return false;
      }
      if (typeof date !== "object" || date.toString() === "Invalid Date") {
        setFormError("Date is incorrect.");
        return false;
      }
      if (!description.trim()) {
        setFormError("Description cannot be empty.");
        return false;
      }
      return true;
    },
    []
  );

  const handleInputChange = (input: keyof typeof userInput, value: string) => {
    if (formError) {
      setFormError(null);
    }
    setUserInput((prevInput) => ({ ...prevInput, [input]: value }));
  };

  const submitHandler = () => {
    const expenseData = {
      ...(existingExpenseInput?.id ? {id: existingExpenseInput?.id } : {}),
      amount: Number(userInput.amount),
      date: parse(userInput.date, "dd/MM/yyyy", new Date()),
      description: userInput.description,
    };

    if (!isDataValid(expenseData)) {
      return;
    }

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
      {formError && <Text style={styles.errorText}>{formError}</Text>}
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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
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
