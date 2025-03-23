import {
  TextInput,
  View,
  Text,
  TextInputProps,
  StyleSheet,
} from "react-native";

import { GlobalStyles } from "../../constants/styles";

type InputProps = {
  label: string;
  style?: object;
} & TextInputProps;

function Input({ label, style, ...args }: InputProps) {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, args.multiline && styles.inputMultiline]}
        {...args}
      />
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top", // should be set in multiline input
  },
});
