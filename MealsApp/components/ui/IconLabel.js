import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconLabel({ children, iconName, iconColor, iconSize, textStyle }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={iconSize ?? 20}
        color={iconColor ?? "white"}
      />
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
}

export default IconLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: "200",
    marginHorizontal: 10,
  },
});
