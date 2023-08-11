import { useSelector } from "react-redux";
import { getDateMinusDays } from "../util/date";
import { ExpenseSummaryPeriod } from "../models/ExpenseSummaryPeriod";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
  const expenses = useSelector((state) =>
    state.expensesStore.expenses.filter(
      (expense) => expense.date >= getDateMinusDays(new Date(), 7)
    )
  );

  return (
    <ExpensesOutput expenses={expenses} period={ExpenseSummaryPeriod.Week} />
  );
}

export default RecentExpenses;
