import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { addExpense, updateExpense } from "../store/redux/expenses";
import Button from "../components/ui/Button";
import Expense from "../models/Expense";

function ManageExpense({ route, navigation }) {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const expenseId = route.params?.expenseId;
  const expenseName = route.params?.expenseName;
  const expenseAmount = route.params?.expenseAmount;
  const expenseDate = route.params?.expenseDate;
  const isEditing = !!expenseId;

  function cancelHandler() {
    navigation.goBack();
  }

  function saveExpenseHandler() {
    const expense = new Expense(
      expenseId,
      expenseName,
      expenseAmount,
      expenseDate
    );
    if (isEditing) {
      dispatch(updateExpense({ expense: expense }));
    } else {
      dispatch(addExpense({ expense: expense }));
    }
    navigation.goBack();
  }

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top * 2, paddingBottom: insets.bottom },
      ]}
    >
      <Text>Manage expense</Text>
      <View>
        <Button mode={"flat"} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button onPress={saveExpenseHandler}>
          {isEditing ? "Update" : "Create"}
        </Button>
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
