import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpenseOutput() {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList expenses={[{ name: "Shopping" }]} />
    </View>
  );
}

export default ExpenseOutput;
