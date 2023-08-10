import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ExpenseSummaryPeriod } from "../models/ExpenseSummaryPeriod";
import { ExpensesMock } from "../mocks/ExpensesMock";
import ExpensesSummary from "../components/ExpensesOutput/ExpensesSummary";

function AllExpenses() {
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
        period={ExpenseSummaryPeriod.AllTime}
      />
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
