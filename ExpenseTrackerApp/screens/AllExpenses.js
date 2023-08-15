import { ExpenseSummaryPeriod } from "../models/ExpenseSummaryPeriod";
import { useSelector } from "react-redux";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  const expenses = useSelector((state) => state.expensesStore.expenses);

  return (
    <ExpensesOutput expenses={expenses} period={ExpenseSummaryPeriod.AllTime} />
  );
}

export default AllExpenses;
