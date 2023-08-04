import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

function MealComplexityView({ complexity }) {
  const filledIconsNumber =
    complexity === "simple" ? 1 : complexity === "hard" ? 3 : 2;
  const outlineIconsNumber = 3 - filledIconsNumber;

  var icons = [];
  for (let i = 0; i < filledIconsNumber; i++) {
    icons.push(
      <MaterialCommunityIcons
        name="pot-steam"
        size={28}
        color="white"
        key={i}
      />
    );
  }
  for (let i = 0; i < outlineIconsNumber; i++) {
    icons.push(
      <MaterialCommunityIcons
        name="pot-steam-outline"
        size={28}
        color="white"
        key={i + filledIconsNumber}
      />
    );
  }
  return <View style={styles.container}>{icons}</View>;
}

export default MealComplexityView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
