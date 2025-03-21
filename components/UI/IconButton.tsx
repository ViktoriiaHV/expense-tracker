import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import { GlobalStyles } from "../../constants/styles";

type IconButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  icon: ComponentProps<typeof Ionicons>["name"];
  size: number;
  color?: string;
};

function IconButton({ onPress, icon, size, color }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && GlobalStyles.pressedButton}
    >
      <View style={styles.buttonContainer}>
        <Ionicons size={size} name={icon} color={color} />
      </View>
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    marginHorizontal: 10,
    marginBottom: 5,
    backgroundColor: GlobalStyles.colors.primary200,
  },
});
