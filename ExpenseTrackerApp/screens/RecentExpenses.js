import { useDispatch, useSelector } from "react-redux";
import { getDateMinusDays } from "../util/date";
import { ExpenseSummaryPeriod } from "../models/ExpenseSummaryPeriod";
import { useEffect } from "react";
import { fetchExpenses } from "../util/http";
import { setExpenses } from "../store/redux/expenses";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) =>
    state.expensesStore.expenses.filter(
      (expense) => expense.date >= getDateMinusDays(new Date(), 7)
    )
  );
  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      dispatch(setExpenses(expenses));
    }
    getExpenses();
  }, []);

  return (
    <ExpensesOutput expenses={expenses} period={ExpenseSummaryPeriod.Week} />
  );
}

export default RecentExpenses;
