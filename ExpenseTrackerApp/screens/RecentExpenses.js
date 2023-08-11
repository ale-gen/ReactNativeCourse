import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../util/date";
import { ExpenseSummaryPeriod } from "../models/ExpenseSummaryPeriod";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";
import ExpensesSummary from "../components/ExpensesOutput/ExpensesSummary";

function RecentExpenses() {
  const insets = useSafeAreaInsets();
  const expenses = useSelector((state) =>
    state.expensesStore.expenses.filter(
      (expense) => expense.date >= getDateMinusDays(new Date(), 7)
    )
  );

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <ExpensesSummary expenses={expenses} period={ExpenseSummaryPeriod.Week} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "clear",
    marginTop: 10,
  },
});
