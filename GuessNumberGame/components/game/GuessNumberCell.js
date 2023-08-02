import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/Colors";

function GuessNumberCell({ value, roundNumber }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>#{roundNumber}:</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

export default GuessNumberCell;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.accentColor,
    borderRadius: 20,
    width: 80,
    padding: 8,
    margin: 4,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  subText: {
    color: "gray",
    textAlign: "center",
  },
});
