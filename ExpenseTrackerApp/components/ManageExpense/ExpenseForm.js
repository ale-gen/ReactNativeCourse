import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { getFormattedDate } from "../../util/date";
import Input from "./Input";
import Button from "../ui/Button";
import Spacer from "../ui/Spacer";

function ExpenseForm({ submitButtonLabel, onSubmit, onCancel, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    name: defaultValues ? defaultValues.name : "",
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
  });

  function inputChangeHandler(inputIdentifier, enteredText) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredText,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      name: inputValues.name,
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
    };
    onSubmit(expenseData);
  }

  return (
    <View style={styles.rootContainer}>
      <Input
        label="Title"
        textInputConfig={{
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "name"),
          value: inputValues.name,
        }}
      />
      <View style={styles.rowInputs}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            placeholderTextColor: "gray",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Spacer />
      <Button mode={"flat"} onPress={onCancel}>
        Cancel
      </Button>
      <Button onPress={submitHandler}>{submitButtonLabel}</Button>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  rowInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
