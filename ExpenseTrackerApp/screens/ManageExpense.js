import { View, Alert } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import {
  addExpense,
  updateExpense,
  deleteExpense,
} from "../store/redux/expenses";
import Expense from "../models/Expense";
import IconButton from "../components/ui/IconButton";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const expenseId = route.params?.expenseId;
  const expense = useSelector((state) => state.expensesStore.expenses).find(
    (expense) => expense.id === expenseId
  );
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name={"trash-can"}
          color={GlobalStyles.colors.navy}
          onPress={showDeletionAlert}
        />
      ),
    });
  }, [navigation, isEditing]);

  function cancelHandler() {
    navigation.goBack();
  }

  function showDeletionAlert() {
    Alert.alert("Are you sure?", "The expense will be permanently deleted.", [
      { text: "Cancel", style: "default" },
      {
        text: "Delete",
        style: "destructive",
        onPress: deleteExpenseHandler,
      },
    ]);
  }

  function deleteExpenseHandler() {
    dispatch(deleteExpense({ id: expenseId }));
    navigation.goBack();
  }

  function saveExpenseHandler(expenseData) {
    const expense = new Expense(
      expenseId ?? new Date().toString() + Math.random().toString(),
      expenseData.name,
      expenseData.amount,
      expenseData.date
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
      style={{
        flex: 1,
        paddingTop: insets.top * 2,
        paddingBottom: insets.bottom,
      }}
    >
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Create"}
        onSubmit={saveExpenseHandler}
        onCancel={cancelHandler}
        defaultValues={expense}
      />
    </View>
  );
}

export default ManageExpense;
