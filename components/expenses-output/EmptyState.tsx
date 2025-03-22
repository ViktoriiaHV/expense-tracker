import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

function EmptyState({ message }: { message: string }) {
  return (
    <View style={styles.container}>
      <Ionicons name="cube-outline" size={50} color='white' />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}
export default EmptyState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  },
  message: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
});
