import { View, ActivityIndicator, StyleSheet, Dimensions } from "react-native";

var { width, height } = Dimensions.get("screen");

function ProgressView({ shouldOverlay }) {
  return (
    <View style={[styles.container, shouldOverlay && styles.overlay]}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default ProgressView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    width: width,
    height: height,
  },
});
