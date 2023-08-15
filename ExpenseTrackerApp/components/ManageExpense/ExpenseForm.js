import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { getFormattedDate } from "../../util/date";
import Input from "./Input";
import Button from "../ui/Button";
import Spacer from "../ui/Spacer";

function ExpenseForm({ submitButtonLabel, onSubmit, onCancel, defaultValues }) {
  const [inputs, setInputs] = useState({
    name: {
      value: defaultValues ? defaultValues.name : "",
      isValid: true,
    },
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
  });
  const invalidForm =
    !inputs.name.isValid || !inputs.amount.isValid || !inputs.date.isValid;

  function inputChangeHandler(inputIdentifier, enteredText) {
    setInputs((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: { value: enteredText, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      name: inputs.name.value,
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
    };
    const nameIsValid = expenseData.name.trim().length > 0;
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";

    if (!nameIsValid || !amountIsValid || !dateIsValid) {
      setInputs((currentInputs) => {
        return {
          name: { value: currentInputs.name.value, isValid: nameIsValid },
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
        };
      });
      return;
    }
    onSubmit(expenseData);
  }

  return (
    <View style={styles.rootContainer}>
      <Input
        label="Title"
        isValid={inputs.name.isValid}
        textInputConfig={{
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "name"),
          value: inputs.name.value,
        }}
      />
      <View style={styles.rowInputs}>
        <Input
          label="Amount"
          style={styles.rowInput}
          isValid={inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          isValid={inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            placeholderTextColor: "gray",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      {invalidForm && (
        <Text style={styles.invalidText}>
          Invalid input values - check your entered data!
        </Text>
      )}
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
  invalidText: {
    color: "red",
    marginHorizontal: 20,
    marginVertical: 2,
  },
});
