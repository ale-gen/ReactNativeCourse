import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExpenseItem from "../components/ExpensesOutput/ExpenseItem";
import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";
import ExpensesSummary from "../components/ExpensesOutput/ExpensesSummary";
import { ExpenseSummaryPeriod } from "../models/ExpenseSummaryPeriod";
import { ExpensesMock } from "../mocks/ExpensesMock";

function AllExpenses() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <ExpensesSummary
        expenses={ExpensesMock}
        period={ExpenseSummaryPeriod.AllTime}
      />
    </View>
  );
}

export default AllExpenses;
