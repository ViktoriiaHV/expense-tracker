import { ActivityIndicator, StyleSheet, View } from "react-native"

import { GlobalStyles } from "../../constants/styles";

const Loader = () => {
  return <View style={styles.container}>
    <ActivityIndicator size='large' color='#fff' />
  </View>
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  }
})