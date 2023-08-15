import { View, Alert } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect, useState } from "react";
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
import ProgressView from "../components/ui/ProgressView";
import ErrorToast from "../components/ui/ErrorToast";

function ManageExpense({ route, navigation }) {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const expenseId = route.params?.expenseId;
  const expense = useSelector((state) => state.expensesStore.expenses).find(
    (expense) => expense.id === expenseId
  );
  const isEditing = !!expenseId;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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
    setIsLoading(true);
    try {
      await deleteExpenseRequest(expenseId);
      dispatch(deleteExpense({ id: expenseId }));
      navigation.goBack();
    } catch (error) {
      setError("Cannot delete expense.");
    }
    setIsLoading(false);
  }

  async function saveExpenseHandler(expenseData) {
    setIsLoading(true);
    try {
      if (isEditing) {
        dispatch(updateExpense({ id: expenseId, data: expenseData }));
        await updateExpenseRequest(expenseId, expenseData);
      } else {
        dispatch(addExpense({ ...expenseData, id: id }));
        const id = await storeExpense(expenseData);
      }
      navigation.goBack();
    } catch {
      setError(`Cannot ${isEditing ? "update" : "create"} expense.`);
    }
    setIsLoading(false);
  }

  if (error && !isLoading) {
    return (
      <ErrorToast
        message={error}
        buttonTitle={"Ok"}
        buttonHandler={() => {
          setError(null);
        }}
      />
    );
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
      {isLoading && <ProgressView shouldOverlay={true} />}
    </View>
  );
}

export default ManageExpense;
