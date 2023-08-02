import { StyleSheet, Text, View } from "react-native";

function InstructionText({ children }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "300",
  },
});
