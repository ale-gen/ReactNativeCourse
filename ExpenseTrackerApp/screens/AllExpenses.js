import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ExpenseSummaryPeriod } from "../models/ExpenseSummaryPeriod";
import { useSelector } from "react-redux";
import ExpensesSummary from "../components/ExpensesOutput/ExpensesSummary";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";

function AllExpenses() {
  const insets = useSafeAreaInsets();
  const expenses = useSelector((state) => state.expensesStore.expenses);

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
      <ExpensesSummary
        expenses={expenses}
        period={ExpenseSummaryPeriod.AllTime}
      />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "clear",
    marginTop: 10,
  },
});
