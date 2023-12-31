import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";
import Spacer from "../ui/Spacer";

function ExpensesList({ expenses }) {
  console.log(expenses);
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
      ListFooterComponent={<Spacer height={60} />}
    />
  );
}

export default ExpensesList;
