import Expense from "../models/Expense";

export const ExpensesMock = [
  new Expense("1", "Grocery", 23.45, new Date("2022-10-02"), false),
  new Expense("2", "T-Shirt", 49.99, new Date("2023-08-01"), true),
  new Expense("3", "Book", 19.99, new Date("2023-08-05"), true),
  new Expense("4", "Pizza", 39.0, new Date("2023-08-07"), true),
  new Expense("5", "Shoes", 199.99, new Date("2023-08-09"), false),
  new Expense("6", "Grocery", 213.45, new Date("2023-08-09"), false),
];
