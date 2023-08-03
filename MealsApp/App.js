import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { BlurView } from "expo-blur";

export default function App() {
  return (
    <BlurView intensity={40} tint="default">
      <StatusBar style="light" />
      <CategoriesScreen />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
