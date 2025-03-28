import { Text, View, StyleSheet } from "react-native";

import Button from "./Button";
import { GlobalStyles } from "../../constants/styles";

type ErrorOverlayProps = {
  message: string;
  onConfirm: () => void
};

const ErrorOverlay = ({ message, onConfirm }: ErrorOverlayProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Ok</Button>
    </View>
  );
};
export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#fff'
  }, 
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }, 
});
