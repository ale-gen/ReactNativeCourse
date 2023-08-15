import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Header() {
  return (
    <LinearGradient
      colors={["#9F91CC", "#5C4B99"]}
      style={styles.rootContainer}
    />
  );
}

export default Header;

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
});
