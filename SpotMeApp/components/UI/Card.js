import { StyleSheet, View } from "react-native";

function Card({ color, children }) {
  return (
    <View style={[styles.container, { backgroundColor: color ?? "white" }]}>
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
