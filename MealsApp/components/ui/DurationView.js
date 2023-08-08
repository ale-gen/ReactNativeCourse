import { StyleSheet, View, Text } from "react-native";

function DurationView({ duration }) {
  return (
    <View style={[styles.container, styles.circle, styles.border]}>
      <Text style={styles.text}>{duration}m</Text>
    </View>
  );
}

export default DurationView;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FC4F00",
  },
  border: {
    borderWidth: 3,
    borderColor: "white",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
