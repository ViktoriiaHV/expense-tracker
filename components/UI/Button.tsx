import {
  Text,
  Pressable,
  View,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";

import { GlobalStyles } from "../../constants/styles";

type ButtonProps = {
  children: React.ReactNode;
  onPress: (e: GestureResponderEvent) => void;
  variant?: "button" | "link";
  style?: object;
};

function Button({ children, onPress, variant = "button", style }: ButtonProps) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed && [GlobalStyles.pressedButton, styles.pressed]
        }
      >
        <View style={[styles.button, variant === "link" && styles.link]}>
          <Text
            style={[styles.buttonText, variant === "link" && styles.linkText]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  link: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  linkText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary400,
    borderRadius: 4,
  },
});
