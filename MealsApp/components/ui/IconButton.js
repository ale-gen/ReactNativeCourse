import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconButton({ iconName, iconSize, iconColor, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressed : null,
      ]}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={iconSize ?? 22}
        color={iconColor ?? "white"}
      />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  pressed: {
    opacity: 0.5,
  },
});
