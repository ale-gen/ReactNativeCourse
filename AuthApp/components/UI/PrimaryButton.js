import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";

function PrimaryButton({ title, iconName, onPress, style }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          styles.border,
          styles.shadow,
          pressed && styles.pressed,
          style,
        ]}
        onPress={onPress}
      >
        <View style={styles.rowContainer}>
          <Text style={styles.text}>{title}</Text>
          {iconName && <Ionicons name={iconName} size={20} color="white" />}
        </View>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "flex-end",
  },
  container: {
    justifyContent: "center",
    height: 60,
    width: "60%",
    marginHorizontal: 10,
    marginVertical: 15,
    backgroundColor: GlobalStyles.colors.darkPurple,
  },
  border: {
    borderRadius: 40,
  },
  shadow: {
    shadowColor: GlobalStyles.colors.lightPurple,
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 4 },
  },
  text: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
  },
  pressed: {
    opacity: 0.5,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
