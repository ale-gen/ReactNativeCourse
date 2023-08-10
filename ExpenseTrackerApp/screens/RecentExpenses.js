import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExpensesSummary from "../components/ExpensesOutput/ExpensesSummary";
import { ExpensesMock } from "../mocks/ExpensesMock";
import { ExpenseSummaryPeriod } from "../models/ExpenseSummaryPeriod";
import ExpensesList from "../components/ExpensesOutput/ExpensesList";

function RecentExpenses() {
  const insets = useSafeAreaInsets();

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
        expenses={ExpensesMock}
        period={ExpenseSummaryPeriod.Week}
      />
      <ExpensesList expenses={ExpensesMock} />
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
