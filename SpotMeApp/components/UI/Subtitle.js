import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

function Subtitle({ text, buttonTitle, onButtonPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
      <PrimaryButton title={buttonTitle} mode="naked" onPress={onButtonPress} />
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "gray",
    marginRight: 10,
  },
});
