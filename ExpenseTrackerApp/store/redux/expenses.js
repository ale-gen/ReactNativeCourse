import { createSlice } from "@reduxjs/toolkit";
import { ExpensesMock } from "../../mocks/ExpensesMock";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: ExpensesMock,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload.expense);
    },
    removeExpense: (state, action) => {
      state.expenses.splice(state.expenses.indexOf(action.payload.id), 1);
    },
    updateExpense: (state, action) => {
      const index = state.expenses.findIndex(
        (expense) => expense.id == action.payload.expense.id
      );
      state.expenses[index] = action.payload.expense;
    },
  },
});

export const addExpense = expensesSlice.actions.addExpense;
export const removeExpense = expensesSlice.actions.removeExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export default expensesSlice.reducer;
