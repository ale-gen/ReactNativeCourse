import { useDispatch, useSelector } from "react-redux";
import { getDateMinusDays } from "../util/date";
import { ExpenseSummaryPeriod } from "../models/ExpenseSummaryPeriod";
import { useEffect, useState } from "react";
import { fetchExpenses } from "../util/http";
import { setExpenses } from "../store/redux/expenses";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ProgressView from "../components/ui/ProgressView";
import ErrorToast from "../components/ui/ErrorToast";

function RecentExpenses() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) =>
    state.expensesStore.expenses.filter(
      (expense) => expense.date >= getDateMinusDays(new Date(), 7)
    )
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getExpenses();
  }, []);

  async function getExpenses() {
    setIsLoading(true);
    try {
      const expenses = await fetchExpenses();
      dispatch(setExpenses(expenses));
      setError(null);
    } catch {
      setError("Cannot fetch expenses.");
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <ProgressView />;
  }

  if (error && !isLoading) {
    return (
      <ErrorToast
        message={error}
        buttonTitle={"Try again"}
        buttonHandler={getExpenses}
      />
    );
  }

  return (
    <ExpensesOutput expenses={expenses} period={ExpenseSummaryPeriod.Week} />
  );
}

export default RecentExpenses;
