import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExpenseItem from "../components/ExpenseItem";

function AllExpenses() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <Text>All expenses</Text>
      <ExpenseItem name={"Shopping"} />
    </View>
  );
}

export default AllExpenses;
