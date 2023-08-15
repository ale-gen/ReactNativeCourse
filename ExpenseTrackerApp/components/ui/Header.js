import { StyleSheet, View, Text } from "react-native";
import IconButton from "./IconButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Header({ title, iconName, rightButton }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>{title}</Text>
      {rightButton}
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },
});
