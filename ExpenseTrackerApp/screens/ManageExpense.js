import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../components/ui/Button";

function ManageExpense({ route }) {
  const insets = useSafeAreaInsets();
  const expenseId = route.params?.expenseId;
  const expenseName = route.params?.expenseName;
  const expenseAmount = route.params?.expenseAmount;
  const expenseDate = route.params?.expenseDate;
  const isEditing = !!expenseId;

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top * 2, paddingBottom: insets.bottom },
      ]}
    >
      <Text>Manage expense</Text>
      <View>
        <Button mode={"flat"}>Cancel</Button>
        <Button>{isEditing ? "Update" : "Create"}</Button>
      </View>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
