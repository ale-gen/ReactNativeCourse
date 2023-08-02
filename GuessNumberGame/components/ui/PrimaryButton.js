import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({
  children,
  onPress,
  outerContainerStyle,
  innerContainerStyle,
}) {
  return (
    <View style={[styles.outerContainer, outerContainerStyle]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.tintColor }}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed, innerContainerStyle]
            : [styles.innerContainer, innerContainerStyle]
        }
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accentColor,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.85,
  },
});
