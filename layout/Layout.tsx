import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

function Layout({ children }: { children: ReactNode }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {children}
    </View>
  );
}
export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
