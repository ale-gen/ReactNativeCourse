import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
  function renderExpense(expenseData) {
    const expense = expenseData.item;
    const expenseProps = {
      id: expense.id,
      name: expense.name,
      amount: expense.amount,
      date: expense.date,
    };
    return <ExpenseItem {...expenseProps} />;
  }
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpense}
      keyExtractor={(expense) => expense.id}
    />
  );
}

export default ExpensesList;
