import { View, Text, StyleSheet } from "react-native";

function ExpensesSummary({ expenses, period }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{period}</Text>
      <Text style={styles.text}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  text: {
    color: "white",
    fontWeight: "300",
    fontSize: 16,
  },
});
