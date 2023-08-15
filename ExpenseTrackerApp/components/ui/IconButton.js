import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconButton({ name, size, color, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={name}
        size={size ?? 25}
        color={color ?? "white"}
        style={styles.icon}
      />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 25,
  },
  icon: {
    fontWeight: "bold",
  },
});
