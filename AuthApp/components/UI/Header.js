import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Header() {
  return (
    <LinearGradient
      colors={["#9F91CC", "#5C4B99"]}
      style={StyleSheet.absoluteFill}
    />
  );
}

export default Header;
