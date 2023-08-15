import { createSlice } from "@reduxjs/toolkit";
import { ExpensesMock } from "../../mocks/ExpensesMock";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: ExpensesMock,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [{ ...action.payload }, ...state.expenses];
    },
    deleteExpense: (state, action) => {
      state.expenses.splice(
        state.expenses.findIndex((expense) => expense.id === action.payload.id),
        1
      );
    },
    updateExpense: (state, action) => {
      const index = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      console.log(action);
      const updatableExpense = state.expenses[index];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      state.expenses[index] = updatedItem;
    },
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
  },
});

export const addExpense = expensesSlice.actions.addExpense;
export const deleteExpense = expensesSlice.actions.deleteExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export const setExpenses = expensesSlice.actions.setExpenses;
export default expensesSlice.reducer;
