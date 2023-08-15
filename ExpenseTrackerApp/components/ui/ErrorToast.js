import { View, Text, StyleSheet, Button } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ErrorToast({ message, buttonTitle, buttonHandler }) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, styles.title]}>Error!</Text>
      <Text style={styles.text}>{message}</Text>
      {buttonTitle && buttonHandler && (
        <Button title={buttonTitle} onPress={buttonHandler} />
      )}
    </View>
  );
}

export default ErrorToast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    color: "red",
    fontWeight: "300",
    padding: 2,
  },
});
