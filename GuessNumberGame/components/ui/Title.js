import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.accentColor,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
});
