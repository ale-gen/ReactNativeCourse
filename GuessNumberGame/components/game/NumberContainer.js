import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, styles.shadow]}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  shadow: {
    shadowColor: Colors.accentColor,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
});
