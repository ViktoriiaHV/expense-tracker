import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../../components/UI/Button";

type ExpenseFormProps = {
  onSubmit: () => void;
  onCancel: () => void;
  submitButtonLabel: string;
};

function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
}: ExpenseFormProps) {
  const [userInput, setUserInput] = useState<{
    amount: string;
    date: string;
    description: string;
  }>({
    amount: "",
    date: "",
    description: "",
  });

  const handleInputChange = (input: keyof typeof userInput, value: string) => {
    setUserInput((prevInput) => ({ ...prevInput, [input]: value }));
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
          placeholder="YYYY-MM-DD"
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
        <Button style={styles.actionButton} onPress={onSubmit}>
          {submitButtonLabel}
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
