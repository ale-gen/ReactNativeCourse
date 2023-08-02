import { Dimensions, StyleSheet, Text, View } from "react-native";

function InstructionText({ children }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default InstructionText;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: deviceWidth < 380 ? 13 : 15,
    fontWeight: "300",
    textAlign: "center",
  },
});
