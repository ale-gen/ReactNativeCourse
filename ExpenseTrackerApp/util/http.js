import axios from "axios";
import Expense from "../models/Expense";

const BACKEND_URL = process.env.BACKEND_URL;

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + "/expense.json", {
    expenseData,
  });
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expense.json");
  const expenses = [];
  for (const key in response.data) {
    const expense = new Expense(
      key,
      response.data[key].expenseData.name,
      response.data[key].expenseData.amount,
      new Date(response.data[key].expenseData.date)
    );
    expenses.push(expense);
  }
  return expenses;
}

export function updateExpenseRequest(id, expenseData) {
  return axios.put(BACKEND_URL + `/expense/${id}.json`, {
    expenseData,
  });
}

export function deleteExpenseRequest(id) {
  return axios.delete(BACKEND_URL + `/expense/${id}.json`);
}
