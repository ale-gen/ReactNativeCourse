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
import {
  storeExpense,
  updateExpenseRequest,
  deleteExpenseRequest,
} from "../util/http";
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

  async function deleteExpenseHandler() {
    dispatch(deleteExpense({ id: expenseId }));
    await deleteExpenseRequest(expenseId);
    navigation.goBack();
  }

  async function saveExpenseHandler(expenseData) {
    if (isEditing) {
      dispatch(updateExpense({ id: expenseId, data: expenseData }));
      await updateExpenseRequest(expenseId, expenseData);
    } else {
      dispatch(addExpense({ ...expenseData, id: id }));
      const id = await storeExpense(expenseData);
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
