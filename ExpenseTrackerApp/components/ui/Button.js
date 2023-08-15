import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ children, onPress, mode }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.pressableContainer,
          styles.border,
          mode === "flat" && styles.flat,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <View>
          <Text style={[styles.text, mode === "flat" && styles.flat]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
  },
  pressableContainer: {
    backgroundColor: GlobalStyles.colors.navy,
    justifyContent: "center",
    width: "90%",
    height: 50,
    padding: 10,
    margin: 10,
  },
  border: {
    borderColor: GlobalStyles.colors.navy,
    borderWidth: 2,
    borderRadius: 20,
  },
  flat: {
    color: GlobalStyles.colors.navy,
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
